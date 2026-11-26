import { Injectable, UseInterceptors } from '@nestjs/common';
import { InteractionContextType } from 'discord.js';
import { Context, Options, SlashCommand, type SlashCommandContext, StringOption } from 'necord';
import { EVERYWHERE } from '../../discord/contexts';
import { DocsAutocomplete, choicesFrom, registerAutocomplete } from '../../discord/autocomplete';
import { choiceName } from '../../discord/limits';
import { ReplyService } from '../../discord/reply.service';
import { GapsService } from '../../gaps/gaps.service';
import { resolve } from '../source';
import { TypesSource, type TypeScope } from './types.source';

export class TypeOptions {
    @StringOption({ name: 'name', description: 'A type, or Type.Member', required: true, autocomplete: true, max_length: 100 })
    name: string;

    @StringOption({ name: 'member', description: 'A member of that type', required: false, autocomplete: true, max_length: 100 })
    member?: string;

    @StringOption({
        name: 'from',
        description: 'Only game types or only TavernLib types',
        required: false,
        choices: [
            { name: 'Game', value: 'game' },
            { name: 'TavernLib', value: 'tavernlib' },
        ],
    })
    from?: string;
}

registerAutocomplete('type', 'name', (q, sources, interaction) => {
    const types = sources.byId('t') as TypesSource;
    if (!q.trim()) return [];
    const scope = (interaction.options.getString('from') ?? undefined) as TypeScope | undefined;
    return choicesFrom(types, types.search(q, { scope }).map((h) => h.entry));
});

registerAutocomplete('type', 'member', (q, sources, interaction) => {
    const types = sources.byId('t') as TypesSource;
    const typeValue = interaction.options.getString('name');
    if (!typeValue) return [];
    const scope = (interaction.options.getString('from') ?? undefined) as TypeScope | undefined;
    const hit = resolve(types, typeValue, { scope });
    if (!hit) return [];
    return types.members(hit.type, q).map((m) => ({ name: choiceName(`${m.name} · ${m.kind}${m.vis === 'public' ? '' : ' · ' + m.vis}`), value: m.name.slice(0, 100) }));
});

@Injectable()
export class TypeCommands {
    constructor(
        private readonly types: TypesSource,
        private readonly replies: ReplyService,
        private readonly gaps: GapsService,
    ) {}

    @UseInterceptors(DocsAutocomplete)
    @SlashCommand({ name: 'type', description: 'Look up a game or TavernLib type, or one of its members', ...EVERYWHERE })
    async onType(@Context() [interaction]: SlashCommandContext, @Options() { name, member, from }: TypeOptions) {
        if (!this.types.ready) return this.replies.fail(interaction, 'NOT_READY');
        const scope = from as TypeScope | undefined;
        if (!member) {
            // "PlayerChunkManager.WipeChunk" in one go.
            const split = this.types.splitMember(name, scope);
            if (split) return this.replies.send(interaction, this.types.renderMember(split.hit, split.member));
        }
        const hit = resolve(this.types, name, { scope });
        if (!hit) {
            this.gaps.record('type', name);
            return this.replies.fail(interaction, 'NOT_FOUND');
        }
        if (member) {
            const m = hit.type.members.find((x) => x.name === member) ?? this.types.members(hit.type, member, 1)[0];
            if (!m) {
                this.gaps.record('type', `${hit.type.name}.${member}`);
                return this.replies.fail(interaction, 'NOT_FOUND');
            }
            return this.replies.send(interaction, this.types.renderMember(hit, m));
        }
        return this.replies.send(interaction, this.types.render(hit, { userId: interaction.user.id }));
    }
}
