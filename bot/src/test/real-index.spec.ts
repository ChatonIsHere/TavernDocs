// Checks against the site's real index, when it has been built locally (npm run build in the site folder).
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { realIndex } from './real-index';
import { embedProblems } from './fixture';
import { GuidesSource } from '../sources/guides/guides.source';
import { renderStep, stepsOf } from '../sources/guides/guides.render';
import { TypesSource } from '../sources/types/types.source';
import { ReferenceSource } from '../sources/reference/reference.source';

const index = realIndex();

describe('real index', { skip: !index && 'no local build at ../build/bot' }, () => {
    const guides = new GuidesSource();
    const types = new TypesSource();
    if (index) {
        guides.load(index);
        types.load(index);
    }
    const table = (id: string) => new ReferenceSource(index!, index!.reference.tables.find((t) => t.id === id)!);

    it('finds the guides people ask for', () => {
        assert.equal(guides.search('set up the game')[0].entry.guide.id, 'play/getting-started/set-up-the-game');
        assert.equal(guides.search('port forwarding', { scope: 'host' })[0].entry.guide.id, 'host/ports');
        assert.ok(guides.search('mm').slice(0, 3).some((h) => h.entry.guide.id.includes('managing-mods')));
    });

    it('finds types by name and initials', () => {
        assert.equal(types.search('PlayerChunkManager')[0].entry.type.name, 'PlayerChunkManager');
        assert.ok(types.search('pcm').slice(0, 5).some((h) => h.entry.type.name === 'PlayerChunkManager'));
        assert.ok(types.splitMember('ForestGenerator.Wipe'));
    });

    it('finds reference rows', () => {
        assert.equal(table('config').search('max_players')[0].entry.key, 'max_players');
        assert.match(table('command').search('player kick')[0].entry.key, /^player kick/);
        assert.ok(table('troubleshoot').search('greyed out')[0].entry.key.includes('greyed out'));
    });

    it('answers plain questions and words only found in page text', () => {
        const { SourcesService } = require('../sources/sources.service');
        const { SnippetsSource } = require('../sources/snippets/snippets.source');
        const snippets = new SnippetsSource();
        snippets.load(index!);
        const svc = Object.create(SourcesService.prototype);
        svc.fixed = [guides, types, snippets];
        svc.reference = new Map(index!.reference.tables.map((t) => [t.id, new ReferenceSource(index!, t)]));
        const titles = (hits: any[]) => hits.map((h) => h.source.title(h.hit.entry));
        assert.ok(svc.searchAll('melonloader', 5).length > 0);
        assert.match(titles(svc.findForText('how do i install the game', 5))[0], /Set up the game|Install the launcher/);
        assert.match(titles(svc.findForText('PlayerChunkManager keeps loading chunks', 5))[0], /^PlayerChunkManager/);
        assert.ok(titles(svc.findForText('where do I find my logs', 5)).includes('Where are my logs?'));
    });

    it('renders every guide, step and type page within limits', () => {
        for (const g of index!.guides.guides) {
            for (const e of guides.render({ guide: g }, { userId: '1', summary: true }).embeds) assert.deepEqual(embedProblems(e), [], g.id);
            for (let i = 0; i < stepsOf(g).length; i++) for (const e of renderStep(index!, g, i, '1').embeds) assert.deepEqual(embedProblems(e), [], `${g.id} step ${i}`);
        }
        for (const t of index!.typesGame.types) for (const e of types.render({ type: t, scope: 'game' }, { userId: '1' }).embeds) assert.deepEqual(embedProblems(e), [], t.full);
    });
});
