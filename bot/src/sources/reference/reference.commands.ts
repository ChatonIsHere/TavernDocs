import { Injectable, UseInterceptors, type Type } from '@nestjs/common';
import { InteractionContextType, type ChatInputCommandInteraction } from 'discord.js';
import { Context, Options, SlashCommand, type SlashCommandContext, StringOption } from 'necord';
import { DocsAutocomplete, choicesFrom, registerAutocomplete } from '../../discord/autocomplete';
import { choiceName } from '../../discord/limits';
import { ReplyService } from '../../discord/reply.service';
import { GapsService } from '../../gaps/gaps.service';
import { SourcesService } from '../sources.service';
import { resolve } from '../source';

/**
 * Slash commands for tables in bot/content/sources.yml. One line each: the command name, the table id, and its
 * description. Every table, listed here or not, also works through /lookup and /search.
 */
export const REFERENCE_COMMANDS: { name: string; table: string; description: string; option: string }[] = [
    { name: 'config', table: 'config', description: 'Look up a server setting', option: 'The setting, e.g. max_players' },
    { name: 'command', table: 'command', description: 'Look up a console command', option: 'The command, e.g. player kick' },
    { name: 'log', table: 'log', description: 'What a line in the game log means', option: 'Part of the log line' },
    { name: 'faq', table: 'faq', description: 'Answer a common question', option: 'The question' },
    { name: 'troubleshoot', table: 'troubleshoot', description: 'Find the fix for a common problem', option: 'What went wrong' },
];

/** Shared by the generated commands and /lookup. */
@Injectable()
export class ReferenceHandler {
    constructor(
        private readonly sources: SourcesService,
        private readonly replies: ReplyService,
        private readonly gaps: GapsService,
    ) {}

    async answer(interaction: ChatInputCommandInteraction, tableId: string, query: string, command: string) {
        if (!this.sources.ready) return this.replies.fail(interaction, 'NOT_READY');
        const table = this.sources.table(tableId);
        if (!table) return this.replies.fail(interaction, 'UNKNOWN_TABLE');
        const row = resolve(table, query);
        if (!row) {
            this.gaps.record(command, query);
            return this.replies.fail(interaction, 'NOT_FOUND');
        }
        return this.replies.send(interaction, table.render(row, { userId: interaction.user.id }));
    }
}

function tableCompleter(tableId: string) {
    return (q: string, sources: SourcesService) => {
        const table = sources.table(tableId);
        if (!table) return [];
        const rows = q.trim() ? table.search(q).map((h) => h.entry) : table.table.rows.slice(0, 25);
        return choicesFrom(table, rows);
    };
}

/** Makes the Necord class for one REFERENCE_COMMANDS entry. */
function referenceCommand(def: (typeof REFERENCE_COMMANDS)[number]): Type<unknown> {
    class QueryOptions {
        @StringOption({ name: 'query', description: def.option, required: true, autocomplete: true, max_length: 200 })
        query: string;
    }
    registerAutocomplete(def.name, 'query', tableCompleter(def.table));

    @Injectable()
    class ReferenceCommand {
        constructor(private readonly handler: ReferenceHandler) {}

        @UseInterceptors(DocsAutocomplete)
        @SlashCommand({ name: def.name, description: def.description, contexts: [InteractionContextType.Guild, InteractionContextType.BotDM] })
        run(@Context() [interaction]: SlashCommandContext, @Options() { query }: QueryOptions) {
            return this.handler.answer(interaction, def.table, query, def.name);
        }
    }
    Object.defineProperty(ReferenceCommand, 'name', { value: `${def.name[0].toUpperCase()}${def.name.slice(1)}Command` });
    return ReferenceCommand;
}

export const REFERENCE_COMMAND_CLASSES = REFERENCE_COMMANDS.map(referenceCommand);

// ── /lookup <table> <query>: any table in sources.yml ───

export class LookupOptions {
    @StringOption({ name: 'table', description: 'Which table: config keys, ports, log lines, ...', required: true, autocomplete: true, max_length: 50 })
    table: string;

    @StringOption({ name: 'query', description: 'What to look up', required: true, autocomplete: true, max_length: 200 })
    query: string;
}

registerAutocomplete('lookup', 'table', (q, sources) =>
    sources.tables()
        .filter((t) => !q || t.table.label.toLowerCase().includes(q.toLowerCase()) || t.table.id.includes(q.toLowerCase()))
        .map((t) => ({ name: choiceName(`${t.table.label}: ${t.description}`), value: t.table.id })),
);
registerAutocomplete('lookup', 'query', (q, sources, interaction) => tableCompleter(interaction.options.getString('table') ?? '')(q, sources));

@Injectable()
export class LookupCommand {
    constructor(private readonly handler: ReferenceHandler) {}

    @UseInterceptors(DocsAutocomplete)
    @SlashCommand({ name: 'lookup', description: 'Look something up in one of the reference tables', contexts: [InteractionContextType.Guild, InteractionContextType.BotDM] })
    run(@Context() [interaction]: SlashCommandContext, @Options() { table, query }: LookupOptions) {
        return this.handler.answer(interaction, table, query, 'lookup');
    }
}
