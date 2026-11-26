// The simplest source, and the one to copy when adding a new kind of lookup:
//   1. load(): build a SearchIndex from the part of the index you need.
//   2. search/get/keyOf/title/url: small wrappers.
//   3. render(): an embed, using discord/style.ts.
//   4. Add the class to sources/index.ts, and a command in the same folder if it should have its own.
import { Injectable } from '@nestjs/common';
import type { Snippet } from '../../index/schema';
import { siteUrl, type LoadedIndex } from '../../index/loaded-index';
import { SearchIndex } from '../../search/rank';
import { TextIndex, terms, textScore } from '../../search/text';
import { addFields, embed } from '../../discord/style';
import { withText, type Hit, type RenderOptions, type Reply, type SearchOptions, type Source } from '../source';

@Injectable()
export class SnippetsSource implements Source<Snippet> {
    readonly id = 's';
    readonly label = 'Snippet';
    private index: LoadedIndex;
    private search_: SearchIndex<Snippet> = new SearchIndex([]);
    private text_: TextIndex<Snippet> = new TextIndex([]);

    load(index: LoadedIndex): void {
        this.index = index;
        this.search_ = new SearchIndex(index.snippets.snippets.map((s) => ({ value: s, name: s.title, also: [s.id, ...s.aliases] })));
        this.text_ = new TextIndex(index.snippets.snippets.map((s) => ({ value: s, fields: [{ text: s.title, weight: 3 }, { text: s.aliases.join(' '), weight: 3 }, { text: s.body, weight: 1 }] })));
    }

    search(query: string, opts: SearchOptions = {}): Hit<Snippet>[] {
        const limit = opts.limit ?? 25;
        const names = this.search_.search(query, limit, this.index.aliases.aliases).map((h) => ({ entry: h.value, score: h.score }));
        return withText(this, names, names.length < limit ? this.searchText(query, opts) : [], limit);
    }

    searchText(query: string, opts: SearchOptions = {}): Hit<Snippet>[] {
        const n = terms(query).length;
        return this.text_.search(query, opts.limit ?? 25).map((h) => ({ entry: h.value, score: textScore(h, n) }));
    }

    /** Every snippet, for autocomplete before anything is typed. */
    list(limit = 25): Snippet[] {
        return this.index?.snippets.snippets.slice(0, limit) ?? [];
    }

    keyOf(s: Snippet): string {
        return s.id;
    }

    get(key: string): Snippet | undefined {
        return this.index.snippets.snippets.find((s) => s.id === key);
    }

    title(s: Snippet): string {
        return s.title;
    }

    url(s: Snippet): string {
        return siteUrl(this.index, s.links[0]?.url ?? '/');
    }

    render(s: Snippet, _opts: RenderOptions): Reply {
        const e = embed({ title: s.title, description: s.body });
        if (s.links.length > 1) addFields(e, [{ name: 'Read more', value: s.links.map((l) => `- [${l.label}](${siteUrl(this.index, l.url)})`).join('\n') }]);
        return { embeds: [e], url: s.links.length ? this.url(s) : undefined, urlLabel: s.links[0]?.label ?? 'Open' };
    }
}
