import { Injectable, Logger } from '@nestjs/common';
import type { AutocompleteInteraction } from 'discord.js';
import { AutocompleteInterceptor } from 'necord';
import { SourcesService } from '../sources/sources.service';
import { choiceValue, type Source } from '../sources/source';
import { choiceName, LIMITS, plain } from './limits';

export interface Choice {
    name: string;
    value: string;
}

/** Turns a source's hits into autocomplete choices. */
export function choicesFrom<E>(source: Source<E>, entries: E[], label = false): Choice[] {
    return entries.slice(0, LIMITS.choices).map((e) => ({
        name: choiceName(plain((label ? `${source.label}: ` : '') + source.title(e))),
        value: choiceValue(source, e),
    }));
}

/**
 * One autocomplete handler per (command, option). Commands register theirs here, so a new command adds one entry:
 *   AUTOCOMPLETE['snippet'] = { name: (q, sources) => ... }
 */
export type Completer = (query: string, sources: SourcesService, interaction: AutocompleteInteraction) => Choice[];
export const AUTOCOMPLETE: Record<string, Record<string, Completer>> = {};

export function registerAutocomplete(command: string, option: string, completer: Completer): void {
    (AUTOCOMPLETE[command] ??= {})[option] = completer;
}

/** The one autocomplete interceptor every command uses. Answers from memory, well inside Discord's 3 seconds. */
@Injectable()
export class DocsAutocomplete extends AutocompleteInterceptor {
    private readonly logger = new Logger(DocsAutocomplete.name);

    constructor(private readonly sources: SourcesService) {
        super();
    }

    async transformOptions(interaction: AutocompleteInteraction) {
        try {
            if (!this.sources.ready) return interaction.respond([]);
            const focused = interaction.options.getFocused(true);
            const completer = AUTOCOMPLETE[interaction.commandName]?.[focused.name];
            const started = performance.now();
            const choices = completer ? completer(String(focused.value ?? ''), this.sources, interaction) : [];
            const ms = performance.now() - started;
            if (ms > 200) this.logger.warn(`Slow autocomplete: /${interaction.commandName} ${focused.name} "${focused.value}" took ${ms.toFixed(0)} ms`);
            return interaction.respond(choices.slice(0, LIMITS.choices));
        } catch (err) {
            this.logger.warn(`Autocomplete failed: ${(err as Error).message}`);
            return interaction.respond([]).catch(() => undefined);
        }
    }
}
