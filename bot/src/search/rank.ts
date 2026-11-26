// Ranked name search, shared by every source. A port of Dox's card name search (dox/src/mtg/card-name-index.service.ts)
// with three additions for docs: identifiers split at capitals ("PlayerChunkManager" is "player chunk manager"),
// initials ("pcm"), and aliases from bot/content/aliases.yml.

/** Lowercase, no accents, camelCase split into words, apostrophes dropped, other punctuation as spaces. */
export function normalize(text: string): string {
    return text
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .toLowerCase()
        .replace(/['‘’`"“”]/g, '')
        .replace(/[^a-z0-9]+/g, ' ')
        .trim();
}

interface IndexedName {
    normalized: string;
    words: string[];
    compact: string;
    wordStarts: number[];
    initials: string;
    /** 0 for the item's main name, 1 for an extra name (alias, full name). */
    extra: number;
}

function indexName(name: string, extra: number): IndexedName {
    const normalized = normalize(name);
    const words = normalized.split(' ').filter(Boolean);
    const wordStarts: number[] = [];
    let offset = 0;
    for (const w of words) {
        wordStarts.push(offset);
        offset += w.length;
    }
    return { normalized, words, compact: words.join(''), wordStarts, initials: words.map((w) => w[0]).join(''), extra };
}

/** Edit distance from `query` to the closest prefix of `text` from `start`, counting a swap as one edit. */
function prefixDistance(query: string, text: string, start: number, max: number): number {
    const n = query.length;
    const m = Math.min(text.length - start, n + max);
    let prevPrev: number[] = [];
    let prev = Array.from({ length: m + 1 }, (_, j) => j);
    for (let i = 1; i <= n; i++) {
        const row = [i];
        let rowMin = i;
        for (let j = 1; j <= m; j++) {
            const cost = query[i - 1] === text[start + j - 1] ? 0 : 1;
            let d = Math.min(prev[j] + 1, row[j - 1] + 1, prev[j - 1] + cost);
            if (i > 1 && j > 1 && query[i - 1] === text[start + j - 2] && query[i - 2] === text[start + j - 1]) d = Math.min(d, prevPrev[j - 2] + 1);
            row.push(d);
            if (d < rowMin) rowMin = d;
        }
        if (rowMin > max) return max + 1;
        prevPrev = prev;
        prev = row;
    }
    return Math.min(...prev);
}

interface Query {
    q: string;
    words: string[];
    compact: string;
    /** Added to the tier when this query came from an alias. */
    penalty: number;
}

/**
 * Tier of one name for one query, best first:
 *   0 exact, 1 starts with the query, 2 the query is a whole word, 3 a word starts with it or it's the initials,
 *   4 every query word starts some word, 5 starts a word with spaces ignored, 6 contains it, null no match.
 */
function tierOf(e: IndexedName, { q, words, compact }: Query): number | null {
    if (e.normalized === q) return 0;
    if (e.normalized.startsWith(q) || e.compact.startsWith(compact)) return 1;
    if (words.length === 1) {
        if (e.words.includes(q)) return 2;
        if (e.words.some((w) => w.startsWith(q))) return 3;
        if (q.length >= 3 && e.extra === 0 && e.words.length >= 3 && e.initials.startsWith(q)) return 3;
    } else if (words.every((qw) => e.words.some((w) => w.startsWith(qw)))) {
        return 4;
    }
    if (e.wordStarts.some((s) => e.compact.startsWith(compact, s))) return 5;
    if (e.normalized.includes(q) || e.compact.includes(compact)) return 6;
    return null;
}

export interface SearchInput<T> {
    value: T;
    /** What people see and search for first. */
    name: string;
    /** Other names that also match, a little lower: aliases, full names. */
    also?: string[];
    /** 0 to 1: breaks ties in favour of more useful entries (documented, public). */
    boost?: number;
}

export interface SearchHit<T> {
    value: T;
    /** Lower is better. Whole numbers are tiers; fractions break ties. */
    score: number;
}

export type Aliases = Record<string, string[]>;

const FUZZY_MIN_LENGTH = 4;
const FUZZY_WHEN_FEWER = 10;

export class SearchIndex<T> {
    private readonly entries: { value: T; names: IndexedName[]; boost: number; length: number }[];

    constructor(items: SearchInput<T>[]) {
        this.entries = items.map((it) => ({
            value: it.value,
            names: [indexName(it.name, 0), ...(it.also ?? []).filter(Boolean).map((a) => indexName(a, 1))].filter((n) => n.normalized),
            boost: Math.max(0, Math.min(1, it.boost ?? 0)),
            length: it.name.length,
        }));
    }

    get size(): number {
        return this.entries.length;
    }

    search(query: string, limit = 25, aliases: Aliases = {}): SearchHit<T>[] {
        const queries = expand(query, aliases);
        if (!queries.length) return [];
        const hits: { value: T; score: number; length: number }[] = [];
        const unmatched: typeof this.entries = [];
        for (const entry of this.entries) {
            let best: number | null = null;
            for (const qy of queries) {
                for (const name of entry.names) {
                    const t = tierOf(name, qy);
                    if (t !== null) {
                        const s = t + name.extra * 0.5 + qy.penalty;
                        if (best === null || s < best) best = s;
                    }
                }
            }
            if (best !== null) hits.push({ value: entry.value, score: best - entry.boost * 0.4, length: entry.length });
            else unmatched.push(entry);
        }
        // Typos are the expensive part, so only look for them when the cheap tiers find little, only in main names, and
        // only from word starts that share the query's first or second letter (a typo rarely hits both).
        const main = queries[0];
        if (hits.length < Math.min(limit, FUZZY_WHEN_FEWER) && main.compact.length >= FUZZY_MIN_LENGTH) {
            const maxTypos = main.compact.length >= 8 ? 2 : 1;
            const [c0, c1] = main.compact;
            for (const entry of unmatched) {
                let best = maxTypos + 1;
                const name = entry.names[0];
                if (!name || name.extra) continue;
                for (const start of name.wordStarts) {
                    const t0 = name.compact[start], t1 = name.compact[start + 1];
                    if (t0 !== c0 && t1 !== c1 && t0 !== c1) continue;
                    best = Math.min(best, prefixDistance(main.compact, name.compact, start, maxTypos));
                    if (best <= 1) break;
                }
                if (best <= maxTypos) hits.push({ value: entry.value, score: 6 + best - entry.boost * 0.4, length: entry.length });
            }
        }
        return hits
            .sort((a, b) => a.score - b.score || a.length - b.length)
            .slice(0, limit)
            .map(({ value, score }) => ({ value, score }));
    }
}

/** The query, plus a version for each alias that matches the whole query or one of its words. */
export function expand(query: string, aliases: Aliases): Query[] {
    const q = normalize(query);
    if (!q) return [];
    const make = (text: string, penalty: number): Query => {
        const words = text.split(' ').filter(Boolean);
        return { q: text, words, compact: words.join(''), penalty };
    };
    const out = [make(q, 0)];
    const seen = new Set([q]);
    const add = (text: string) => {
        const n = normalize(text);
        if (n && !seen.has(n)) {
            seen.add(n);
            out.push(make(n, 0.25));
        }
    };
    for (const [term, means] of Object.entries(aliases)) {
        const t = normalize(term);
        if (t === q) means.forEach(add);
        else if (q.split(' ').includes(t) && !t.includes(' ')) means.forEach((m) => add(q.split(' ').map((w) => (w === t ? m : w)).join(' ')));
    }
    return out;
}
