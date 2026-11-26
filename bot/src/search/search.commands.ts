import { Injectable, UseInterceptors } from '@nestjs/common';
import { InteractionContextType } from 'discord.js';
import { Context, MessageCommand, type MessageCommandContext, Options, SlashCommand, type SlashCommandContext, StringOption, TargetMessage } from 'necord';
import type { Message } from 'discord.js';
import { EVERYWHERE } from '../discord/contexts';
import { DocsAutocomplete, registerAutocomplete } from '../discord/autocomplete';
import { choiceName, plain, truncate } from '../discord/limits';
import { ReplyService } from '../discord/reply.service';
import { embed } from '../discord/style';
import { GapsService } from '../gaps/gaps.service';
import { SourcesService, type AnyHit } from '../sources/sources.service';
import { choiceValue, parseChoice, type Reply } from '../sources/source';

export class SearchOptions {
    @StringOption({ name: 'query', description: 'Guides, types, settings, commands, mods...', required: true, autocomplete: true, max_length: 200 })
    query: string;
}

registerAutocomplete('search', 'query', (q, sources) =>
    q.trim()
        ? sources.searchAll(q, 25).map(({ source, hit }) => ({ name: choiceName(plain(`${source.label}: ${source.title(hit.entry)}`)), value: choiceValue(source, hit.entry) }))
        : [],
);

/** A list of matches as one embed: "Label: [title](url)" per line. */
export function resultsReply(title: string, hits: AnyHit[], description?: string): Reply {
    const lines = hits.map(({ source, hit }) => `**${source.label}:** [${plain(source.title(hit.entry)).replace(/[[\]]/g, '')}](${source.url(hit.entry)})`);
    return { embeds: [embed({ title, description: [description, lines.join('\n')].filter(Boolean).join('\n\n') })] };
}

/** Text from a message worth searching for: no code blocks, links, mentions or emoji. */
export function searchableText(content: string): string {
    return content
        .replace(/```[\s\S]*?```/g, ' ')
        .replace(/`[^`]*`/g, (m) => m.slice(1, -1))
        .replace(/https?:\/\/\S+/g, ' ')
        .replace(/<a?:\w+:\d+>|<[@#][!&]?\d+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 200);
}

@Injectable()
export class SearchCommands {
    constructor(
        private readonly sources: SourcesService,
        private readonly replies: ReplyService,
        private readonly gaps: GapsService,
    ) {}

    @UseInterceptors(DocsAutocomplete)
    @SlashCommand({ name: 'search', description: 'Search all of TavernDocs', ...EVERYWHERE })
    async onSearch(@Context() [interaction]: SlashCommandContext, @Options() { query }: SearchOptions) {
        if (!this.sources.ready) return this.replies.fail(interaction, 'NOT_READY');
        // A picked suggestion: show that one thing.
        const choice = parseChoice(query);
        const source = choice && this.sources.byId(choice.sourceId);
        const picked = source && source.get(choice!.key);
        if (source && picked) return this.replies.send(interaction, source.render(picked, { userId: interaction.user.id }));

        const hits = this.sources.searchAll(query, 8);
        if (!hits.length) {
            this.gaps.record('search', query);
            return this.replies.fail(interaction, 'NOT_FOUND');
        }
        return this.replies.send(interaction, resultsReply(truncate(`Results for "${query}"`, 200), hits));
    }

    @MessageCommand({ name: 'Find in TavernDocs', contexts: [InteractionContextType.Guild, InteractionContextType.PrivateChannel], integrationTypes: EVERYWHERE.integrationTypes })
    async onFind(@Context() [interaction]: MessageCommandContext, @TargetMessage() message: Message) {
        if (!this.sources.ready) return this.replies.fail(interaction, 'NOT_READY');
        const text = searchableText(message.content ?? '');
        const hits = text ? this.sources.findForText(text, 5) : [];
        if (!hits.length) {
            this.gaps.record('find', text || '(empty)');
            return this.replies.fail(interaction, 'NOT_FOUND');
        }
        return this.replies.send(interaction, resultsReply('Might help', hits, `Docs that match [this message](${message.url}):`));
    }
}
