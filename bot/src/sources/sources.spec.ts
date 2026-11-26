import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { match } from 'path-to-regexp';
import { ButtonStyle } from 'discord.js';
import { fixture, embedProblems } from '../test/fixture';
import { GuidesSource } from './guides/guides.source';
import { renderStep, STEP_BUTTON, stepButtonId } from './guides/guides.render';
import { TypesSource } from './types/types.source';
import { ReferenceSource } from './reference/reference.source';
import { SnippetsSource } from './snippets/snippets.source';
import { ModsSource } from './mods/mods.source';
import { choiceValue, parseChoice, resolve } from './source';
import { ReplyService, DELETE_BUTTON } from '../discord/reply.service';
import { CooldownService } from '../discord/cooldown.service';
import { searchableText } from '../search/search.commands';

const index = fixture();
const guides = new GuidesSource();
guides.load(index);
const types = new TypesSource();
types.load(index);
const config = new ReferenceSource(index, index.reference.tables[0]);
const snippets = new SnippetsSource();
snippets.load(index);
const mods = new ModsSource();
mods.load(index);
const user = { userId: '42' };

describe('guides', () => {
    it('finds pages and headings, scoped by section', () => {
        assert.equal(guides.search('set up')[0].entry.guide.title, 'Set up the game');
        assert.ok(guides.search('run setup').some((h) => h.entry.heading?.id === '2-run-setup'));
        assert.ok(guides.search('ports', { scope: 'play' }).every((h) => h.entry.guide.area === 'play'));
        assert.equal(guides.search('mm')[0].entry.guide.id, 'play/mods/managing-mods');
    });

    it('links headings with their anchor', () => {
        const heading = guides.search('run setup').find((h) => h.entry.heading)!.entry;
        assert.equal(guides.url(heading), 'https://example.com/TavernDocs/play/getting-started/set-up-the-game#2-run-setup');
    });

    it('shows the hand-written summary, or an outline without one', () => {
        const withSummary = guides.render({ guide: index.guides.guides[0] }, { ...user, summary: true });
        assert.match(withSummary.embeds[0].data.fields![0].value, /- Click Browse\./);
        const without = guides.render({ guide: index.guides.guides[2] }, { ...user, summary: true });
        assert.match(without.embeds[0].data.fields![0].value, /\[The ports\]\(https:\/\/example\.com\/TavernDocs\/host\/ports#the-ports\)/);
    });

    it('steps through sections with their screenshots', () => {
        const g = index.guides.guides[0];
        const step = renderStep(index, g, 1, '42');
        assert.equal(step.embeds[0].data.image?.url, 'https://example.com/TavernDocs/assets/images/a.png');
        assert.match(step.embeds[0].data.footer!.text, /^Step 2 of 3/);
        const last = renderStep(index, g, 99, '42');
        assert.match(last.embeds[0].data.footer!.text, /^Step 3 of 3/);
    });

    it('makes step button ids that Necord matches back', () => {
        const id = stepButtonId('123456789012345678', index.guides.guides[0], 2);
        assert.ok(id.length <= 100);
        const m = match(STEP_BUTTON)(id);
        assert.ok(m);
        assert.equal(guides.page((m.params as Record<string, string>).guide)?.id, index.guides.guides[0].id);
        assert.equal((m.params as Record<string, string>).step, '2');
        assert.ok(match(DELETE_BUTTON)('td-del/123'));
    });
});

describe('types', () => {
    it('finds by name, words and initials, public and described first', () => {
        assert.equal(types.search('PlayerChunkManager')[0].entry.type.full, 'Alta.Chunks.PlayerChunkManager');
        assert.equal(types.search('pcm')[0].entry.type.full, 'Alta.Chunks.PlayerChunkManager');
        assert.equal(types.search('chunk manager')[0].entry.type.name, 'ChunkManager');
    });

    it('scopes to TavernLib or the game', () => {
        assert.equal(types.search('ServerSettings', { scope: 'tavernlib' })[0].entry.scope, 'tavernlib');
        assert.equal(types.search('ServerSettings', { scope: 'game' })[0].entry.scope, 'game');
    });

    it('splits Type.Member', () => {
        const split = types.splitMember('PlayerChunkManager.WipeChunk');
        assert.equal(split?.member.name, 'WipeChunk');
        assert.equal(types.splitMember('Nope.WipeChunk'), null);
    });

    it('searches members without constructors, public first', () => {
        const t = index.typesGame.types[0];
        assert.deepEqual(types.members(t, '').map((m) => m.name), ['WipeChunk']);
        assert.equal(types.members(t, 'loaded')[0].name, 'loadedChunks');
    });
});

describe('reference, snippets, mods', () => {
    it('looks up a table row', () => {
        assert.equal(config.search('max players')[0].entry.key, 'max_players');
        assert.equal(config.id, 'r-config');
    });

    it('looks up a snippet by alias', () => {
        assert.equal(snippets.search('latest.log')[0].entry.id, 'logs');
    });

    it('looks up a mod by author', () => {
        assert.equal(mods.search('circl')[0].entry.mod.name, 'EnoughIron');
        assert.match(mods.render(mods.search('iron')[0].entry, user).embeds[0].data.fields!.find((f) => f.name === 'Latest')!.value, /1\.1\.0/);
    });
});

describe('choices', () => {
    it('round-trip through autocomplete values', () => {
        const hit = types.search('pcm')[0].entry;
        const value = choiceValue(types, hit);
        assert.ok(value.length <= 100);
        assert.deepEqual(parseChoice(value), { sourceId: 't', key: types.keyOf(hit) });
        assert.equal(resolve(types, value), hit);
    });

    it('fall back to searching typed text', () => {
        assert.equal(resolve(types, 'PlayerChunkManager')?.type.name, 'PlayerChunkManager');
        assert.equal(resolve(types, 'zzzzzz'), undefined);
    });
});

describe('every render fits Discord', () => {
    const renders = [
        ...index.guides.guides.map((g) => guides.render({ guide: g }, { ...user, summary: true })),
        ...index.guides.guides.flatMap((g) => g.headings.map((h) => guides.render({ guide: g, heading: h }, user))),
        ...index.guides.guides.map((g) => renderStep(index, g, 0, '42')),
        ...[...index.typesGame.types, ...index.typesTavernlib.types].map((t) => types.render({ type: t, scope: 'game' }, user)),
        ...index.typesGame.types.flatMap((t) => t.members.map((m) => types.renderMember({ type: t, scope: 'game' }, m))),
        ...index.reference.tables.flatMap((t) => { const s = new ReferenceSource(index, t); return t.rows.map((r) => s.render(r, user)); }),
        snippets.render(index.snippets.snippets[0], user),
        mods.render(mods.search('iron')[0].entry, user),
    ];
    it('within every limit', () => {
        for (const r of renders) for (const e of r.embeds) assert.deepEqual(embedProblems(e), [], e.data.title);
    });

    it('with Open and Delete buttons, and no pings', () => {
        const replies = new ReplyService(new CooldownService({ get: () => 5 } as never));
        const payload = replies.payload(renders[0], '42');
        assert.deepEqual(payload.allowedMentions, { parse: [] });
        const buttons = (payload.components!.at(-1) as any).components.map((c: any) => c.data);
        assert.equal(buttons[0].style, ButtonStyle.Link);
        assert.equal(buttons[1].custom_id, 'td-del/42');
    });
});

describe('cooldown', () => {
    it('lets a user post once per window', () => {
        const c = new CooldownService({ get: () => 5 } as never);
        assert.equal(c.take('a', 0), 0);
        assert.equal(c.take('a', 1000), 4);
        assert.equal(c.take('b', 1000), 0);
        assert.equal(c.take('a', 5000), 0);
    });
});

describe('Find in TavernDocs', () => {
    it('searches the words, not code, links or mentions', () => {
        assert.equal(searchableText('<@123> how do I set `max_players`? ```\ncode\n``` see https://x.y/z'), 'how do I set max_players? see');
    });
});
