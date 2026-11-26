// The simplest source, and the one to copy when adding a new kind of lookup:
//   1. load(): build a SearchIndex from the part of the index you need.
//   2. search/get/keyOf/title/url: small wrappers.
//   3. render(): an embed, using discord/style.ts.
//   4. Add the class to sources/index.ts, and a command in the same folder if it should have its own.
import { Injectable } from '@nestjs/common';
import type { Snippet } from '../../index/schema';
import { siteUrl, type LoadedIndex } from '../../index/loaded-index';
import { SearchIndex } from '../../search/rank';
import { addFields, embed } from '../../discord/style';
import type { Hit, RenderOptions, Reply, SearchOptions, Source } from '../source';

@Injectable()
export class SnippetsSource implements Source<Snippet> {
    readonly id = 's';
    readonly label = 'Snippet';
    private index: LoadedIndex;
    private search_: SearchIndex<Snippet> = new SearchIndex([]);

    load(index: LoadedIndex): void {
        this.index = index;
        this.search_ = new SearchIndex(index.snippets.snippets.map((s) => ({ value: s, name: s.title, also: [s.id, ...s.aliases] })));
    }

    search(query: string, opts: SearchOptions = {}): Hit<Snippet>[] {
        return this.search_.search(query, opts.limit ?? 25, this.index.aliases.aliases).map((h) => ({ entry: h.value, score: h.score }));
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
