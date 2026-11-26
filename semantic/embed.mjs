// Semantic search, step 1: embeds the built site's content. node semantic/embed.mjs [build folder]
// Writes build/semantic/chunks.json and vectors.bin (format in lib.mjs). Vectors for text that hasn't changed are
// reused from the live site, so a deploy only embeds what changed.
import fs from 'node:fs';
import path from 'node:path';
import {MODEL, chunksFrom, previousVectors, writeVectors} from './lib.mjs';

const LIVE = process.env.SEMANTIC_PREVIOUS ?? 'https://townshiptale.dev/semantic';
const outDir = process.argv[2] ?? 'build';
const started = Date.now();
const chunks = chunksFrom(outDir);
const known = await previousVectors(LIVE);
const todo = chunks.filter((c) => !known.has(c.h));
console.log(`[semantic] ${chunks.length} chunks, ${chunks.length - todo.length} unchanged, ${todo.length} to embed`);
if (todo.length) {
    const {pipeline} = await import('@huggingface/transformers');
    const extractor = await pipeline('feature-extraction', MODEL, {dtype: 'fp32'});
    for (let i = 0; i < todo.length; i += 32) {
        const batch = todo.slice(i, i + 32);
        const out = await extractor(batch.map((c) => c.text), {pooling: 'cls', normalize: true});
        const rows = out.tolist();
        batch.forEach((c, j) => known.set(c.h, Float32Array.from(rows[j])));
        if (i % 640 === 0) console.log(`[semantic] ${i + batch.length}/${todo.length}`);
    }
}
const dir = path.join(outDir, 'semantic');
fs.mkdirSync(dir, {recursive: true});
fs.writeFileSync(path.join(dir, 'chunks.json'), JSON.stringify(chunks.map(({text, ...c}) => c)));
fs.writeFileSync(path.join(dir, 'vectors.bin'), writeVectors(chunks.map((c) => known.get(c.h))));
console.log(`[semantic] wrote ${chunks.length} vectors in ${((Date.now() - started) / 1000).toFixed(0)} s`);
