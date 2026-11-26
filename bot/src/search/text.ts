// Full-text search over page text, for words that aren't in any title or heading ("melonloader" is in 57 pages
// but no title) and for plain questions ("how do i install the game"). Name search (rank.ts) still comes first;
// this fills in after it. A small BM25 over weighted fields, held in memory.

/** Words that say nothing about what someone is looking for. */
const STOP = new Set(
    ('a an and are as at be but by can could do does did doing for from get gets got had has have how i if im in into is it its ' +
        'just me my no not of on or our please so some that the their them then there they this to too up us was we what when where ' +
        'which who why will with would you your yours hi hey hello thanks thank anyone know need want help any way make ' +
        'find use using try tried trying say says said keep keeps stop going thing something anything someone ok okay also like ' +
        'really still now even work works working doesnt dont cant wont isnt').split(' '),
);

/** Lowercase words of a text. A camelCase word gives both its whole form and its parts: MelonLoader -> melonloader, melon, loader. */
export function words(text: string): string[] {
    const out: string[] = [];
    for (const raw of text.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/['‘’]/g, '').split(/[^A-Za-z0-9]+/)) {
        if (!raw) continue;
        const lower = raw.toLowerCase();
        out.push(lower);
        const parts = raw.replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2').toLowerCase().split(' ');
        if (parts.length > 1) out.push(...parts);
    }
    return out;
}

/** A light stem, so "installing", "installs" and "installed" meet "install". */
export function stem(w: string): string {
    if (w.length > 5 && w.endsWith('ing')) return w.slice(0, -3);
    if (w.length > 4 && w.endsWith('ed')) return w.slice(0, -2);
    if (w.length > 4 && /(x|z|ch|sh|ss)es$/.test(w)) return w.slice(0, -2);
    if (w.length > 3 && w.endsWith('s') && !w.endsWith('ss')) return w.slice(0, -1);
    return w;
}

/** The words of a query worth searching for, stemmed, without repeats. */
export function terms(text: string): string[] {
    return [...new Set(words(text).filter((w) => w.length >= 2 && !STOP.has(w)).map(stem))];
}

export interface TextField {
    text: string;
    /** How much a match here counts, e.g. 3 for a title, 1 for body text. */
    weight: number;
}

export interface TextHit<T> {
    value: T;
    /** Higher is better. */
    score: number;
    /** How many of the query's terms the entry has. */
    matched: number;
}

const K1 = 1.2;
const B = 0.75;

export class TextIndex<T> {
    private readonly values: T[] = [];
    private readonly lengths: number[] = [];
    private readonly postings = new Map<string, Map<number, number>>();
    private avgLength = 1;

    constructor(docs: { value: T; fields: TextField[] }[]) {
        let total = 0;
        docs.forEach((doc, i) => {
            this.values.push(doc.value);
            let length = 0;
            for (const field of doc.fields) {
                for (const w of words(field.text)) {
                    if (STOP.has(w)) continue;
                    const t = stem(w);
                    const posting = this.postings.get(t) ?? new Map<number, number>();
                    posting.set(i, (posting.get(i) ?? 0) + field.weight);
                    this.postings.set(t, posting);
                    length += 1;
                }
            }
            this.lengths.push(length);
            total += length;
        });
        this.avgLength = docs.length ? Math.max(1, total / docs.length) : 1;
    }

    search(query: string, limit = 25): TextHit<T>[] {
        const qs = terms(query);
        if (!qs.length) return [];
        const n = this.values.length;
        const scores = new Map<number, { score: number; matched: number }>();
        for (const q of qs) {
            const posting = this.postings.get(q);
            if (!posting) continue;
            const idf = Math.log(1 + (n - posting.size + 0.5) / (posting.size + 0.5));
            for (const [doc, tf] of posting) {
                const norm = tf * (K1 + 1) / (tf + K1 * (1 - B + B * this.lengths[doc] / this.avgLength));
                const s = scores.get(doc) ?? { score: 0, matched: 0 };
                s.score += idf * norm;
                s.matched += 1;
                scores.set(doc, s);
            }
        }
        // Relevance, scaled by how many of the query's words the entry has: one strong title match can beat two words
        // buried in body text, but an entry with every word gets a lift.
        return [...scores.entries()]
            .map(([doc, s]) => ({ value: this.values[doc], score: s.score * (0.4 + 0.6 * (s.matched / qs.length)), matched: s.matched }))
            .sort((a, b) => b.score - a.score)
            .slice(0, limit);
    }
}

/**
 * A text hit as a rank.ts-style score (lower is better), placed after every name match (those are 0 to 8): 9 to 10.
 */
export function textScore(hit: TextHit<unknown>, _termCount?: number): number {
    return 9 + 1 / (1 + hit.score);
}
