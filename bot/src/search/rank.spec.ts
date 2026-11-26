import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { SearchIndex, expand, normalize } from './rank';

const names = (idx: SearchIndex<string>, q: string, aliases = {}) => idx.search(q, 25, aliases).map((h) => h.value);

describe('normalize', () => {
    it('splits identifiers at capitals and drops punctuation', () => {
        assert.equal(normalize('PlayerChunkManager'), 'player chunk manager');
        assert.equal(normalize('HTTPServer.Start()'), 'http server start');
        assert.equal(normalize("Y'shtola"), 'yshtola');
        assert.equal(normalize('server_settings.json'), 'server settings json');
    });
});

describe('SearchIndex', () => {
    const idx = new SearchIndex(['PlayerChunkManager', 'ChunkManager', 'Chunk', 'PlayerController', 'ServerSettings', 'Ports and port forwarding'].map((n) => ({ value: n, name: n })));

    it('puts an exact match first', () => {
        assert.equal(names(idx, 'chunk')[0], 'Chunk');
        assert.equal(names(idx, 'ChunkManager')[0], 'ChunkManager');
    });

    it('finds words inside identifiers', () => {
        assert.ok(names(idx, 'chunk manager').includes('PlayerChunkManager'));
        assert.ok(names(idx, 'manager').includes('PlayerChunkManager'));
    });

    it('matches initials', () => {
        assert.equal(names(idx, 'pcm')[0], 'PlayerChunkManager');
    });

    it('copes with a typo', () => {
        assert.equal(names(idx, 'playr controler')[0], 'PlayerController');
        assert.ok(names(idx, 'sever settings').includes('ServerSettings'));
    });

    it('uses aliases, ranked just below a direct match', () => {
        const docs = new SearchIndex(['Managing your mods', 'Mod sources', 'Join by name (SRV records)'].map((n) => ({ value: n, name: n })));
        assert.equal(names(docs, 'mm', { mm: ['managing mods'] })[0], 'Managing your mods');
        assert.ok(names(docs, 'srv', { srv: ['srv records'] }).includes('Join by name (SRV records)'));
    });

    it('prefers boosted entries on a tie', () => {
        const two = new SearchIndex([{ value: 'internal', name: 'Settings' }, { value: 'public', name: 'Settings', boost: 1 }]);
        assert.equal(two.search('settings')[0].value, 'public');
    });

    it('ranks an extra name below a main name that matches as well', () => {
        const two = new SearchIndex([{ value: 'by alias', name: 'Something', also: ['Chunk thing'] }, { value: 'by name', name: 'Chunk thing' }]);
        assert.equal(two.search('chunk thing')[0].value, 'by name');
    });

    it('returns nothing for an empty query', () => {
        assert.deepEqual(names(idx, '   '), []);
    });
});

describe('expand', () => {
    it('replaces one word of a longer query', () => {
        const q = expand('mm withdrawn', { mm: ['mod manager'] }).map((x) => x.q);
        assert.deepEqual(q, ['mm withdrawn', 'mod manager withdrawn']);
    });
});
