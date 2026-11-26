import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { IndexLoader } from './loader.service';
import { INDEX_FILES, SCHEMA_VERSION } from './schema';

const empty: Record<string, unknown> = {
    guides: { guides: [] }, 'types-game': { types: [] }, 'types-tavernlib': { types: [] },
    reference: { tables: [] }, snippets: { snippets: [] }, aliases: { aliases: {} },
};

/** A loader that reads from a map of URL -> JSON instead of the network. */
class FakeLoader extends IndexLoader {
    files = new Map<string, unknown>();
    constructor() {
        super({ get: (k: string) => ({ INDEX_URL: 'https://x/bot', TAVERNMODS_URL: '', TAVERNMODS_PAGE: 'https://x/mods' })[k] } as never);
    }
    protected async fetchJson(url: string): Promise<unknown> {
        if (!this.files.has(url)) throw new Error('404 ' + url);
        return this.files.get(url);
    }
    publish(build: string, guides: unknown = empty.guides) {
        const files = Object.fromEntries(INDEX_FILES.map((n) => [n, { path: `bot/${n}.json`, sha256: build + n, bytes: 1 }]));
        this.files.set('https://x/bot/manifest.json', { schema: SCHEMA_VERSION, build, generatedAt: '', baseUrl: 'https://x', files });
        for (const n of INDEX_FILES) this.files.set(`https://x/bot/${n}.json`, n === 'guides' ? guides : empty[n]);
    }
}

describe('IndexLoader', () => {
    it('loads a good index', async () => {
        const l = new FakeLoader();
        l.publish('one');
        const r = await l.refresh();
        assert.equal(r.error, undefined);
        assert.equal(l.index?.manifest.build, 'one');
    });

    it('keeps the last good index when a new one is broken', async () => {
        const l = new FakeLoader();
        l.publish('one');
        await l.refresh();
        l.publish('two', { guides: [{ id: 5 }] });
        const r = await l.refresh();
        assert.match(r.error!, /guides/);
        assert.equal(l.index?.manifest.build, 'one');
    });

    it('refuses an index from a newer schema', async () => {
        const l = new FakeLoader();
        l.publish('one');
        (l.files.get('https://x/bot/manifest.json') as { schema: number }).schema = SCHEMA_VERSION + 1;
        const r = await l.refresh();
        assert.match(r.error!, /schema/);
        assert.equal(l.index, null);
    });

    it('tells listeners about each new index', async () => {
        const l = new FakeLoader();
        const seen: string[] = [];
        l.onLoad((i) => seen.push(i.manifest.build));
        l.publish('one');
        await l.refresh();
        l.publish('two');
        await l.refresh();
        assert.deepEqual(seen, ['one', 'two']);
    });
});
