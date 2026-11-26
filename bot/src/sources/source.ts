// The extension point. Every kind of lookup (guides, types, a reference table, snippets, mods) is a Source.
// To add one: copy sources/snippets (the simplest), change it, and add it to sources/index.ts.
// /search and "Find in TavernDocs" go through every registered source; a source's own slash command is optional.
import type { ActionRowBuilder, ButtonBuilder, EmbedBuilder } from 'discord.js';
import type { LoadedIndex } from '../index/loaded-index';

export interface SearchOptions {
    /** A source-specific filter, e.g. a section for guides or "game"/"tavernlib" for types. */
    scope?: string;
    limit?: number;
}

export interface Hit<E> {
    entry: E;
    /** Lower is better (see search/rank.ts). */
    score: number;
}

export interface RenderOptions {
    /** Show the short version (guides: the summary bullets). */
    summary?: boolean;
    /** The user who asked, for buttons only they may use. */
    userId: string;
}

/** What a source draws. The reply helper adds the Open link and the Delete button, and turns off pings. */
export interface Reply {
    embeds: EmbedBuilder[];
    /** Extra rows of buttons, e.g. step-through. At most 4; the helper adds one more. */
    rows?: ActionRowBuilder<ButtonBuilder>[];
    /** The page to open, as a full URL. */
    url?: string;
    /** Label of the Open button. */
    urlLabel?: string;
}

export interface Source<E = unknown> {
    /** Short, stable, lowercase. Appears in autocomplete values, so keep it short. */
    readonly id: string;
    /** Shown in /search results, e.g. "Guide", "Game type", "Config key". */
    readonly label: string;

    /** Rebuild the in-memory tables from a freshly loaded index. Called on every refresh. */
    load(index: LoadedIndex): void;
    search(query: string, opts?: SearchOptions): Hit<E>[];

    /** A stable key for an entry, at most 60 characters, used in autocomplete values and button ids. */
    keyOf(entry: E): string;
    get(key: string): E | undefined;

    /** One line for autocomplete and lists. */
    title(entry: E): string;
    /** The page about this entry, as a full URL. */
    url(entry: E): string;
    render(entry: E, opts: RenderOptions): Reply;
}

/** Autocomplete values are "<source id>:<key>"; anything else is text the user typed. */
export function choiceValue(source: Source, entry: unknown): string {
    return `${source.id}:${source.keyOf(entry as never)}`.slice(0, 100);
}

export function parseChoice(value: string): { sourceId: string; key: string } | null {
    const m = /^([a-z0-9-]+):(.+)$/.exec(value);
    return m ? { sourceId: m[1], key: m[2] } : null;
}

/** The entry an option value names: a picked autocomplete choice, or the best match for typed text. */
export function resolve<E>(source: Source<E>, value: string, opts?: SearchOptions): E | undefined {
    const choice = parseChoice(value);
    if (choice && choice.sourceId === source.id) {
        const hit = source.get(choice.key);
        if (hit) return hit;
    }
    return source.search(value, { ...opts, limit: 1 })[0]?.entry;
}
