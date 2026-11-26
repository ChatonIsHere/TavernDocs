// Semantic search, step 2: brings the Vectorize index up to date with build/semantic. node semantic/sync.mjs [build]
// Needs CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID (the deploy workflow's secrets).
//  1. Makes the index (and its "area" filter) if it doesn't exist yet, e.g. after moving to another account.
//  2. Checks Workers AI embeds text the same way the build did; if not, stops before touching the index.
//  3. Upserts chunks that are new or changed since the live site, and deletes ones that are gone.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {DIMENSIONS, chunksFrom, readVectors} from './lib.mjs';

const INDEX = 'taverndocs-semantic';
const AI_MODEL = '@cf/baai/bge-small-en-v1.5';
const LIVE = process.env.SEMANTIC_PREVIOUS ?? 'https://townshiptale.dev/semantic';
const outDir = process.argv[2] ?? 'build';
const {CLOUDFLARE_API_TOKEN: token, CLOUDFLARE_ACCOUNT_ID: account} = process.env;
if (!token || !account) throw new Error('CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID are needed');
const api = `https://api.cloudflare.com/client/v4/accounts/${account}`;

async function cf(method, url, body, contentType = 'application/json') {
    const res = await fetch(api + url, {
        method,
        headers: {Authorization: `Bearer ${token}`, ...(body ? {'Content-Type': contentType} : {})},
        body: body === undefined ? undefined : contentType === 'application/json' ? JSON.stringify(body) : body,
    });
    const data = await res.json().catch(() => ({}));
    return {ok: res.ok && data.success !== false, status: res.status, data};
}

const vectorId = (chunkId) => crypto.createHash('sha1').update(chunkId).digest('hex').slice(0, 32);
const cosine = (a, b) => {
    let dot = 0, na = 0, nb = 0;
    for (let i = 0; i < a.length; i++) (dot += a[i] * b[i]), (na += a[i] * a[i]), (nb += b[i] * b[i]);
    return dot / Math.sqrt(na * nb);
};

// 1. The index.
let created = false;
if (!(await cf('GET', `/vectorize/v2/indexes/${INDEX}`)).ok) {
    const made = await cf('POST', '/vectorize/v2/indexes', {name: INDEX, config: {dimensions: DIMENSIONS, metric: 'cosine'}});
    if (!made.ok) throw new Error('Creating the Vectorize index failed: ' + JSON.stringify(made.data.errors ?? made.data));
    created = true;
    console.log(`[semantic] created Vectorize index ${INDEX}`);
}
// The area filter lets each section's search box search only that section. Harmless if it already exists.
await cf('POST', `/vectorize/v2/indexes/${INDEX}/metadata_index/create`, {propertyName: 'area', indexType: 'string'});

// 2. Same embeddings on both sides.
const chunks = chunksFrom(outDir);
const vectors = readVectors(fs.readFileSync(path.join(outDir, 'semantic', 'vectors.bin')), chunks.length);
const samples = [0, Math.floor(chunks.length / 2), chunks.length - 1];
const ai = await cf('POST', `/ai/run/${AI_MODEL}`, {text: samples.map((i) => chunks[i].text), pooling: 'cls'});
if (!ai.ok) throw new Error('Workers AI check failed: ' + JSON.stringify(ai.data.errors ?? ai.data));
const agreement = samples.map((i, j) => cosine(vectors[i], ai.data.result.data[j]));
console.log(`[semantic] Workers AI vs build embeddings: ${agreement.map((x) => x.toFixed(3)).join(', ')}`);
if (agreement.some((x) => x < 0.95)) throw new Error('Workers AI and the build embed text differently; not updating the index');

// 3. Only what changed since the live site (everything if the index is new).
let before = new Map();
if (!created) {
    try {
        before = new Map((await (await fetch(`${LIVE}/chunks.json`)).json()).map((c) => [c.id, c.h]));
    } catch {
        // No live copy: send everything (upserts are safe to repeat).
    }
}
const changed = chunks.map((c, i) => [c, vectors[i]]).filter(([c]) => before.get(c.id) !== c.h);
const gone = [...before.keys()].filter((id) => !chunks.some((c) => c.id === id));
for (let i = 0; i < changed.length; i += 500) {
    const ndjson = changed.slice(i, i + 500)
        .map(([c, v]) => JSON.stringify({id: vectorId(c.id), values: Array.from(v), metadata: {title: c.title, url: c.url, area: c.area, kind: c.kind}}))
        .join('\n');
    const up = await cf('POST', `/vectorize/v2/indexes/${INDEX}/upsert`, ndjson, 'application/x-ndjson');
    if (!up.ok) throw new Error('Vectorize upsert failed: ' + JSON.stringify(up.data.errors ?? up.data));
}
for (let i = 0; i < gone.length; i += 500) {
    const del = await cf('POST', `/vectorize/v2/indexes/${INDEX}/delete_by_ids`, {ids: gone.slice(i, i + 500).map(vectorId)});
    if (!del.ok) throw new Error('Vectorize delete failed: ' + JSON.stringify(del.data.errors ?? del.data));
}
console.log(`[semantic] Vectorize: ${changed.length} upserted, ${gone.length} deleted, ${chunks.length} in total`);
