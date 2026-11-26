// Semantic search: the shared pieces (what gets embedded, and the vector file format). Used by embed.mjs and sync.mjs.
// Reads build/bot/*.json (written by the bot-index plugin) and writes build/semantic/:
//   chunks.json  what each vector is: id, title, url, area, kind, and h (a hash of the embedded text)
//   vectors.bin  one 384-dimension vector per chunk, int8 with a per-vector scale (see VECTOR FORMAT below)
// The same model runs here and in Workers AI (@cf/baai/bge-small-en-v1.5, CLS pooling), so the search Worker's query
// embeddings line up with these. Vectors for text that hasn't changed are reused from the live site, so a deploy
// only embeds what changed.
//
// VECTOR FORMAT: for each chunk in order, a float32 scale then 384 int8 values; value = int8 * scale / 127.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import crypto from 'node:crypto';
import yaml from 'js-yaml';

export const MODEL = 'Xenova/bge-small-en-v1.5';
export const DIMENSIONS = 384;
const MAX_CHARS = 1500;

const hash = (s) => crypto.createHash('sha1').update(s).digest('hex').slice(0, 16);
const areaOf = (url) => (url.split('/')[1] || 'other');

/** Everything worth finding by meaning. Log lines are left out: there are thousands and /log finds them by text. */
export function chunksFrom(dir) {
    const r = (name) => JSON.parse(fs.readFileSync(path.join(dir, 'bot', name + '.json'), 'utf8'));
    // Headings like "Something went wrong?" (skip_headings in bot/content/sources.yml) aren't worth finding.
    const skip = new Set((yaml.load(fs.readFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'bot', 'content', 'sources.yml'), 'utf8')).skip_headings ?? []).map((h) => h.toLowerCase()));
    const out = [];
    const add = (id, title, url, kind, text) => {
        const t = text.replace(/\s+/g, ' ').trim().slice(0, MAX_CHARS);
        if (t) out.push({id, title, url, area: areaOf(url), kind, text: t, h: hash(t)});
    };
    for (const g of r('guides').guides) {
        if (g.searchText === false) continue;
        for (const s of g.sections) {
            if (skip.has(s.title.toLowerCase())) continue;
            const title = s.id ? `${g.title} › ${s.title}` : g.title;
            add(`g:${g.id}#${s.id}`, title, g.url + (s.id ? '#' + s.id : ''), 'guide', `${title}. ${g.description} ${s.text}`);
        }
    }
    for (const s of r('snippets').snippets) add(`s:${s.id}`, s.title, s.links[0]?.url ?? '/', 'snippet', `${s.title}. ${s.body}`);
    for (const t of r('reference').tables) {
        if (t.id === 'log') continue;
        for (const row of t.rows) add(`r:${t.id}:${row.url}|${row.key}`, row.key, row.url, t.id, `${row.key}. ${row.context}. ${row.text}`);
    }
    for (const file of ['types-tavernlib', 'types-game']) {
        for (const ty of r(file).types) {
            if (!ty.summary) continue;
            add(`t:${ty.full}`, ty.name, ty.url, 'type', `${ty.name}, a ${ty.kind} in ${ty.ns || 'the global namespace'}. ${ty.summary}`);
        }
    }
    return out;
}

export function readVectors(buf, count) {
    const vectors = [];
    const view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
    const stride = 4 + DIMENSIONS;
    for (let i = 0; i < count; i++) {
        const scale = view.getFloat32(i * stride, true);
        const v = new Float32Array(DIMENSIONS);
        for (let d = 0; d < DIMENSIONS; d++) v[d] = (view.getInt8(i * stride + 4 + d) * scale) / 127;
        vectors.push(v);
    }
    return vectors;
}

export function writeVectors(vectors) {
    const stride = 4 + DIMENSIONS;
    const buf = Buffer.alloc(vectors.length * stride);
    vectors.forEach((v, i) => {
        let max = 0;
        for (const x of v) max = Math.max(max, Math.abs(x));
        const scale = max || 1;
        buf.writeFloatLE(scale, i * stride);
        for (let d = 0; d < DIMENSIONS; d++) buf.writeInt8(Math.round((v[d] / scale) * 127), i * stride + 4 + d);
    });
    return buf;
}

export async function previousVectors(live) {
    try {
        const chunks = await (await fetch(`${live}/chunks.json`)).json();
        const buf = Buffer.from(await (await fetch(`${live}/vectors.bin`)).arrayBuffer());
        const vectors = readVectors(buf, chunks.length);
        return new Map(chunks.map((c, i) => [c.h, vectors[i]]));
    } catch {
        return new Map();
    }
}

