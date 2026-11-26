import { Injectable, UseInterceptors } from '@nestjs/common';
import { InteractionContextType } from 'discord.js';
import { Context, Options, SlashCommand, type SlashCommandContext, StringOption } from 'necord';
import { DocsAutocomplete, choicesFrom, registerAutocomplete } from '../../discord/autocomplete';
import { ReplyService } from '../../discord/reply.service';
import { GapsService } from '../../gaps/gaps.service';
import { resolve } from '../source';
import { ModsSource } from './mods.source';

export class ModOptions {
    @StringOption({ name: 'name', description: 'The mod, or its author', required: true, autocomplete: true, max_length: 100 })
    name: string;
}

registerAutocomplete('mod', 'name', (q, sources) => {
    const mods = sources.byId('m') as ModsSource;
    return choicesFrom(mods, q.trim() ? mods.search(q).map((h) => h.entry) : mods.list());
});

@Injectable()
export class ModCommands {
    constructor(
        private readonly mods: ModsSource,
        private readonly replies: ReplyService,
        private readonly gaps: GapsService,
    ) {}

    @UseInterceptors(DocsAutocomplete)
    @SlashCommand({ name: 'mod', description: 'Look up a mod on TavernMods', contexts: [InteractionContextType.Guild, InteractionContextType.BotDM] })
    async onMod(@Context() [interaction]: SlashCommandContext, @Options() { name }: ModOptions) {
        if (!this.mods.available) return this.replies.fail(interaction, 'MODS_UNAVAILABLE');
        const mod = resolve(this.mods, name);
        if (!mod) {
            this.gaps.record('mod', name);
            return this.replies.fail(interaction, 'NOT_FOUND');
        }
        return this.replies.send(interaction, this.mods.render(mod, { userId: interaction.user.id }));
    }
}
