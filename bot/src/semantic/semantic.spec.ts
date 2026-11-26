import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { nearest, readVectors, type Chunk } from './semantic.service';

const unit = (i: number) => {
    const v = new Float32Array(384);
    v[i] = 1;
    return v;
};

/** The site's format (semantic/lib.mjs): float32 scale, then 384 int8. */
function write(vectors: Float32Array[]): Buffer {
    const buf = Buffer.alloc(vectors.length * 388);
    vectors.forEach((v, i) => {
        const scale = Math.max(...Array.from(v).map(Math.abs)) || 1;
        buf.writeFloatLE(scale, i * 388);
        v.forEach((x, d) => buf.writeInt8(Math.round((x / scale) * 127), i * 388 + 4 + d));
    });
    return buf;
}

const chunk = (id: string, area = 'play'): Chunk => ({ id, title: id, url: '/' + id, area, kind: 'guide', h: id });

describe('semantic', () => {
    it('reads the site vector format', () => {
        const v = readVectors(write([unit(3), unit(7)]), 2);
        assert.equal(v[0][3], 1);
        assert.equal(v[1][7], 1);
        assert.equal(v[1][3], 0);
    });

    it('finds the closest chunks, filtered by area, and drops weak ones', () => {
        const mixed = new Float32Array(384);
        mixed[1] = 0.8;
        mixed[2] = 0.6;
        const chunks = [chunk('a'), chunk('b'), chunk('c', 'host')];
        const vectors = [unit(1), unit(2), mixed];
        assert.deepEqual(nearest(unit(1), chunks, vectors, 5).map((h) => h.chunk.id), ['a', 'c']);
        assert.deepEqual(nearest(unit(1), chunks, vectors, 5, 'host').map((h) => h.chunk.id), ['c']);
        assert.deepEqual(nearest(unit(9), chunks, vectors, 5), []);
    });
});
