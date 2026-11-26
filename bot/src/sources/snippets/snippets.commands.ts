import { Injectable, UseInterceptors } from '@nestjs/common';
import { InteractionContextType } from 'discord.js';
import { Context, Options, SlashCommand, type SlashCommandContext, StringOption } from 'necord';
import { EVERYWHERE } from '../../discord/contexts';
import { DocsAutocomplete, choicesFrom, registerAutocomplete } from '../../discord/autocomplete';
import { ReplyService } from '../../discord/reply.service';
import { GapsService } from '../../gaps/gaps.service';
import { resolve } from '../source';
import { SnippetsSource } from './snippets.source';

export class SnippetOptions {
    @StringOption({ name: 'name', description: 'Which answer', required: true, autocomplete: true, max_length: 100 })
    name: string;
}

registerAutocomplete('snippet', 'name', (q, sources) => {
    const snippets = sources.byId('s') as SnippetsSource;
    return choicesFrom(snippets, q.trim() ? snippets.search(q).map((h) => h.entry) : snippets.list());
});

@Injectable()
export class SnippetCommands {
    constructor(
        private readonly snippets: SnippetsSource,
        private readonly replies: ReplyService,
        private readonly gaps: GapsService,
    ) {}

    @UseInterceptors(DocsAutocomplete)
    @SlashCommand({ name: 'snippet', description: 'Post a short answer to a common question', ...EVERYWHERE })
    async onSnippet(@Context() [interaction]: SlashCommandContext, @Options() { name }: SnippetOptions) {
        const snippet = resolve(this.snippets, name);
        if (!snippet) {
            this.gaps.record('snippet', name);
            return this.replies.fail(interaction, 'NOT_FOUND');
        }
        return this.replies.send(interaction, this.snippets.render(snippet, { userId: interaction.user.id }));
    }
}
