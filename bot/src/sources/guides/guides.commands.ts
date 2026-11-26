import { Injectable } from '@nestjs/common';
import { InteractionContextType } from 'discord.js';
import { BooleanOption, Button, type ButtonContext, ComponentParam, Context, Options, SlashCommand, type SlashCommandContext, StringOption } from 'necord';
import { UseInterceptors } from '@nestjs/common';
import { DocsAutocomplete, choicesFrom, registerAutocomplete } from '../../discord/autocomplete';
import { ReplyService } from '../../discord/reply.service';
import { GapsService } from '../../gaps/gaps.service';
import { resolve } from '../source';
import { GuidesSource } from './guides.source';
import { renderStep, STEP_BUTTON, stepsOf } from './guides.render';

export class GuideOptions {
    @StringOption({ name: 'query', description: 'What the guide is about', required: true, autocomplete: true, max_length: 100 })
    query: string;

    @StringOption({
        name: 'section',
        description: 'Only search one part of the docs',
        required: false,
        choices: [
            { name: 'Play', value: 'play' },
            { name: 'Host', value: 'host' },
            { name: 'Mod', value: 'mod' },
            { name: 'Help', value: 'help' },
        ],
    })
    section?: string;

    @BooleanOption({ name: 'summary', description: 'Add the short version', required: false })
    summary?: boolean;

    @BooleanOption({ name: 'steps', description: 'Go through the guide one step at a time', required: false })
    steps?: boolean;
}

registerAutocomplete('guide', 'query', (q, sources, interaction) => {
    const guides = sources.byId('g') as GuidesSource;
    const scope = interaction.options.getString('section') ?? undefined;
    if (!q.trim()) {
        // Nothing typed yet: the guides themselves, in sidebar order.
        const pages = guides.loaded.guides.guides.filter((g) => (!scope || g.area === scope) && g.area !== 'mod').slice(0, 25);
        return choicesFrom(guides, pages.map((guide) => ({ guide })));
    }
    return choicesFrom(guides, guides.search(q, { scope }).map((h) => h.entry));
});

@Injectable()
export class GuideCommands {
    constructor(
        private readonly guides: GuidesSource,
        private readonly replies: ReplyService,
        private readonly gaps: GapsService,
    ) {}

    @UseInterceptors(DocsAutocomplete)
    @SlashCommand({ name: 'guide', description: 'Link a TavernDocs guide', contexts: [InteractionContextType.Guild, InteractionContextType.BotDM] })
    async onGuide(@Context() [interaction]: SlashCommandContext, @Options() { query, section, summary, steps }: GuideOptions) {
        if (!this.guides.loaded) return this.replies.fail(interaction, 'NOT_READY');
        const entry = resolve(this.guides, query, { scope: section });
        if (!entry) {
            this.gaps.record('guide', query);
            return this.replies.fail(interaction, 'NOT_FOUND');
        }
        if (steps) {
            // Start at the section that was picked, or at the top.
            const start = entry.heading ? Math.max(0, stepsOf(entry.guide).findIndex((s) => s.id === entry.heading!.id)) : 0;
            return this.replies.send(interaction, renderStep(this.guides.loaded, entry.guide, start, interaction.user.id));
        }
        return this.replies.send(interaction, this.guides.render(entry, { summary, userId: interaction.user.id }));
    }

    @Button(STEP_BUTTON)
    async onStep(@Context() [interaction]: ButtonContext, @ComponentParam('owner') owner: string, @ComponentParam('guide') key: string, @ComponentParam('step') step: string) {
        if (interaction.user.id !== owner) return this.replies.fail(interaction, 'NOT_YOURS');
        const guide = this.guides.page(key);
        if (!guide) return this.replies.fail(interaction, 'STEPS_GONE');
        return this.replies.update(interaction, renderStep(this.guides.loaded, guide, Number(step), owner), owner);
    }
}
