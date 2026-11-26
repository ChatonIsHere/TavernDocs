// A small index for tests, shaped like the real one.
import type { LoadedIndex } from '../index/loaded-index';
import type { Guide, TypeEntry } from '../index/schema';
import type { EmbedBuilder } from 'discord.js';
import { LIMITS } from '../discord/limits';

const long = (n: number) => 'word '.repeat(Math.ceil(n / 5)).slice(0, n);

export function guide(over: Partial<Guide> & { id: string; title: string }): Guide {
    return {
        area: over.id.split('/')[0], section: 'Play', path: [], description: `About ${over.title}.`, url: '/' + over.id,
        aliases: [], summary: [], headings: [], sections: [], ...over,
    };
}

export function type(over: Partial<TypeEntry> & { full: string }): TypeEntry {
    const name = over.full.split('.').pop()!;
    return { name, kind: 'class', ns: over.full.split('.').slice(0, -1).join('.'), asm: 'Root.Township', vis: 'public', bases: [], summary: '', url: '/mod/game-api/types/x/' + name.toLowerCase(), members: [], ...over };
}

export function fixture(): LoadedIndex {
    return {
        manifest: { schema: 1, build: 'test', generatedAt: '2026-11-26T00:00:00Z', baseUrl: 'https://example.com/TavernDocs', files: {} as never },
        baseUrl: 'https://example.com/TavernDocs',
        guides: {
            guides: [
                guide({
                    id: 'play/getting-started/set-up-the-game', title: 'Set up the game', path: ['Getting started'], summary: ['Click Browse.', 'Run Setup.'],
                    headings: [{ id: '1-show-the-launcher-your-game', text: '1. Show the launcher your game', level: 2 }, { id: '2-run-setup', text: '2. Run Setup', level: 2 }],
                    sections: [
                        { id: '', title: 'Set up the game', text: 'Your game needs three things.', image: null },
                        { id: '1-show-the-launcher-your-game', title: '1. Show the launcher your game', text: '1. Click **Browse**.', image: '/TavernDocs/assets/images/a.png' },
                        { id: '2-run-setup', title: '2. Run Setup', text: '1. Click **Setup**.', image: '/TavernDocs/assets/images/b.png' },
                    ],
                }),
                guide({ id: 'play/mods/managing-mods', title: 'Managing your mods', path: ['Mods'], headings: [{ id: 'withdrawn', text: 'Withdrawn versions', level: 3 }] }),
                guide({ id: 'host/ports', title: 'Ports and port forwarding', area: 'host', section: 'Host', headings: [{ id: 'the-ports', text: 'The ports', level: 2 }] }),
                guide({ id: 'host/srv-records', title: 'Join by name (SRV records)', area: 'host', section: 'Host' }),
                guide({ id: 'help/faq', title: 'FAQ', area: 'help', section: 'Help', description: long(5000), sections: [{ id: 'x', title: 'X', text: long(1500), image: null }] }),
            ],
        },
        typesGame: {
            types: [
                type({
                    full: 'Alta.Chunks.PlayerChunkManager', summary: 'Tracks which chunks a player has loaded.', members: [
                        { name: 'WipeChunk', kind: 'method', vis: 'public', sig: 'void WipeChunk(Chunk chunk)', desc: 'Clears a chunk.', anchor: 'm-wipechunk' },
                        { name: 'loadedChunks', kind: 'field', vis: 'private', sig: 'HashSet<Chunk> loadedChunks', desc: '', anchor: 'm-loadedchunks' },
                        { name: '.ctor', kind: 'constructor', vis: 'public', sig: 'PlayerChunkManager(Player player)', desc: 'Creates one.', anchor: 'm-ctor' },
                    ],
                }),
                type({ full: 'Alta.Chunks.ChunkManager', summary: 'All chunks.' }),
                type({ full: 'Alta.Utilities.ServerSettings', summary: 'The game server settings.' }),
                type({ full: 'Alta.Internal.PlayerChunkManagerHelper', vis: 'internal', asm: 'Alta.Other' }),
                type({ full: 'Huge.Thing', summary: long(6000), bases: Array(40).fill('SomeBaseType'), members: Array.from({ length: 300 }, (_, i) => ({ name: 'Member' + i, kind: 'method', vis: 'public', sig: long(2000), desc: long(3000), anchor: 'm' + i })) }),
            ],
        },
        typesTavernlib: { types: [type({ full: 'TavernLib.Backend.Server.Configs.ServerSettings', summary: 'TavernLib server_settings.json.' })] },
        reference: {
            tables: [
                { id: 'config', label: 'Config keys', description: 'Settings.', rows: [
                    { key: 'max_players', text: 'How many players can join.', extra: { Default: '24' }, context: 'server_settings.json', url: '/host/config-reference#server_settingsjson' },
                    { key: 'password', text: 'A plain password, hashed on read.', extra: {}, context: 'server_settings.json', url: '/host/config-reference#server_settingsjson' },
                ] },
                { id: 'faq', label: 'FAQ', description: 'Questions.', rows: [
                    { key: 'Is this official?', text: 'No.', extra: {}, context: 'FAQ', url: '/help/faq#is-this-official' },
                ] },
            ],
        },
        snippets: { snippets: [{ id: 'logs', title: 'Where are my logs?', aliases: ['latest.log'], body: 'In `MelonLoader`.', links: [{ label: 'Where files live', url: '/help/where-files-live' }, { label: 'Help', url: '/help/getting-help' }] }] },
        aliases: { aliases: { mm: ['mod manager', 'managing mods'], srv: ['srv records'] } },
        mods: { index_version: 2, mods: { 'Circl-NoE.EnoughIron': { '1': { name: 'EnoughIron', author: 'Circl-NoE', description: 'More iron.', versions: ['1.0.0', '1.1.0'], targets: ['server'], parity_required: false } } } },
        modsPage: 'https://example.com/mods',
        loadedAt: new Date(),
    };
}

/** Problems with an embed against Discord's limits, or an empty list. */
export function embedProblems(e: EmbedBuilder): string[] {
    const d = e.data;
    const p: string[] = [];
    const check = (what: string, text: string | undefined, max: number) => text && text.length > max && p.push(`${what} is ${text.length} > ${max}`);
    check('title', d.title, LIMITS.title);
    check('description', d.description, LIMITS.description);
    check('footer', d.footer?.text, LIMITS.footer);
    if ((d.fields?.length ?? 0) > LIMITS.fields) p.push(`${d.fields!.length} fields`);
    for (const f of d.fields ?? []) {
        check('field name', f.name, LIMITS.fieldName);
        check('field value', f.value, LIMITS.fieldValue);
    }
    const total = (d.title ?? '').length + (d.description ?? '').length + (d.footer?.text ?? '').length + (d.fields ?? []).reduce((n, f) => n + f.name.length + f.value.length, 0);
    if (total > LIMITS.embedTotal) p.push(`total ${total} > ${LIMITS.embedTotal}`);
    return p;
}
