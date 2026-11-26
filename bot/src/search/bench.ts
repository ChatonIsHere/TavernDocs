// npm run bench: autocomplete speed against the real index (build the site first). Target: p95 under 50 ms.
import { realIndex } from '../test/real-index';
import { GuidesSource } from '../sources/guides/guides.source';
import { TypesSource } from '../sources/types/types.source';
import { ReferenceSource } from '../sources/reference/reference.source';
import type { Source } from '../sources/source';

const index = realIndex();
if (!index) {
    console.log('No local build at ../build/bot. Run npm run build in the site folder first.');
    process.exit(0);
}
const guides = new GuidesSource();
guides.load(index);
const types = new TypesSource();
types.load(index);
const sources: Source[] = [guides, types, ...index.reference.tables.map((t) => new ReferenceSource(index, t))];

// Queries as people type them: prefixes of real names, some with a typo.
const names = [...index.typesGame.types.map((t) => t.name), ...index.guides.guides.map((g) => g.title)];
const queries: string[] = [];
for (let i = 0; i < 300; i++) {
    const n = names[(i * 7919) % names.length];
    const len = 2 + (i % Math.max(1, Math.min(12, n.length - 1)));
    let q = n.slice(0, len);
    if (i % 5 === 0 && q.length > 4) q = q.slice(0, 2) + q[3] + q[2] + q.slice(4);
    queries.push(q);
}

function time(label: string, run: (q: string) => void) {
    const ms: number[] = [];
    for (const q of queries) {
        const t = performance.now();
        run(q);
        ms.push(performance.now() - t);
    }
    ms.sort((a, b) => a - b);
    const p = (x: number) => ms[Math.floor(ms.length * x)].toFixed(1);
    console.log(`${label.padEnd(28)} p50 ${p(0.5)} ms   p95 ${p(0.95)} ms   max ${ms[ms.length - 1].toFixed(1)} ms`);
}

time('/type name', (q) => types.search(q));
time('/guide query', (q) => guides.search(q));
time('/search (every source)', (q) => sources.flatMap((s) => s.search(q, { limit: 25 })).sort((a, b) => a.score - b.score).slice(0, 25));
