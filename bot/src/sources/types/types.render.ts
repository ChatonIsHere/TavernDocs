import type { MemberEntry } from '../../index/schema';
import type { LoadedIndex } from '../../index/loaded-index';
import { addFields, embed } from '../../discord/style';
import { truncate } from '../../discord/limits';
import type { Reply } from '../source';
import type { TypeHit } from './types.source';

const KIND_ORDER = ['property', 'method', 'field', 'event', 'value'];

export function renderType(_index: LoadedIndex, { type, scope }: TypeHit, url: string): Reply {
    const vis = type.vis === 'public' ? '' : type.vis + ' ';
    const e = embed({
        title: type.name,
        url,
        description: (type.summary || '*No description yet.*') + `\n\n${vis}${type.kind} in \`${type.asm}\``,
        footer: scope === 'tavernlib' ? 'TavernLib API' : 'Game API',
    });
    const counts = KIND_ORDER.map((k) => [k, type.members.filter((m) => m.kind === k).length] as const).filter(([, n]) => n > 0);
    const publicNames = type.members.filter((m) => m.vis === 'public' && m.kind !== 'constructor').map((m) => '`' + m.name + '`');
    addFields(e, [
        { name: 'Namespace', value: type.ns ? '`' + type.ns + '`' : 'global', inline: true },
        { name: 'Inherits', value: type.bases.length ? type.bases.map((b) => '`' + b + '`').join(', ') : null, inline: true },
        { name: 'Members', value: counts.length ? counts.map(([k, n]) => `${n} ${k === 'property' ? (n === 1 ? 'property' : 'properties') : k + (n === 1 ? '' : 's')}`).join(', ') : null, inline: true },
        { name: 'Public members', value: publicNames.length ? truncate([...new Set(publicNames)].join(', '), 900) + '\nTry `/type ' + type.name + ' member:`' : null },
    ]);
    return { embeds: [e], url, urlLabel: 'Open type' };
}

export function renderMember({ type, scope }: TypeHit, member: MemberEntry, url: string): Reply {
    const e = embed({
        title: `${type.name}.${member.name}`,
        url,
        description: '```cs\n' + truncate(member.sig, 900) + '\n```\n' + (member.desc || '*No description yet.*'),
        footer: `${member.vis} ${member.kind} · ${scope === 'tavernlib' ? 'TavernLib API' : 'Game API'}`,
    });
    return { embeds: [e], url, urlLabel: 'Open member' };
}
