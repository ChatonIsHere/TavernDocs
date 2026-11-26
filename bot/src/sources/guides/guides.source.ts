import { Injectable } from '@nestjs/common';
import type { Guide, Heading } from '../../index/schema';
import { siteUrl, type LoadedIndex } from '../../index/loaded-index';
import { SearchIndex, type Aliases } from '../../search/rank';
import { shortKey } from '../../search/key';
import { trail } from '../../discord/style';
import type { Hit, RenderOptions, Reply, SearchOptions, Source } from '../source';
import { renderGuide } from './guides.render';

/** A whole page, or one heading on it. */
export interface GuideEntry {
    guide: Guide;
    heading?: Heading;
}

export const GUIDE_AREAS = ['play', 'host', 'mod', 'help'] as const;

@Injectable()
export class GuidesSource implements Source<GuideEntry> {
    readonly id = 'g';
    readonly label = 'Guide';
    private index: LoadedIndex;
    private search_: SearchIndex<GuideEntry> = new SearchIndex([]);
    private byKey = new Map<string, GuideEntry>();
    private aliases: Aliases = {};

    load(index: LoadedIndex): void {
        this.index = index;
        this.aliases = index.aliases.aliases;
        this.byKey.clear();
        const items = [];
        for (const guide of index.guides.guides) {
            const page: GuideEntry = { guide };
            this.byKey.set(this.keyOf(page), page);
            // Pages rank above their own headings; hand-written guides above the long reference pages.
            items.push({ value: page, name: guide.title, also: [...guide.aliases, trail([...guide.path, guide.title])], boost: guide.area === 'mod' ? 0.6 : 0.8 });
            for (const heading of guide.headings) {
                const entry: GuideEntry = { guide, heading };
                this.byKey.set(this.keyOf(entry), entry);
                items.push({ value: entry, name: heading.text, also: [`${guide.title} ${heading.text}`], boost: heading.level === 2 ? 0.3 : 0.1 });
            }
        }
        this.search_ = new SearchIndex(items);
    }

    /** scope: an area (play, host, mod, help) to search only that section. */
    search(query: string, opts: SearchOptions = {}): Hit<GuideEntry>[] {
        const limit = opts.limit ?? 25;
        const hits = this.search_.search(query, opts.scope ? limit * 4 : limit, this.aliases);
        return hits.filter((h) => !opts.scope || h.value.guide.area === opts.scope).slice(0, limit).map((h) => ({ entry: h.value, score: h.score }));
    }

    keyOf(entry: GuideEntry): string {
        return shortKey(entry.guide.id + (entry.heading ? '#' + entry.heading.id : ''));
    }

    get(key: string): GuideEntry | undefined {
        return this.byKey.get(key);
    }

    /** A page by its key, for the step-through buttons. */
    page(key: string): Guide | undefined {
        const e = this.byKey.get(key);
        return e && !e.heading ? e.guide : undefined;
    }

    title(entry: GuideEntry): string {
        return entry.heading ? `${entry.guide.title} › ${entry.heading.text}` : trail([entry.guide.section, ...entry.guide.path, entry.guide.title]);
    }

    url(entry: GuideEntry): string {
        return siteUrl(this.index, entry.guide.url + (entry.heading ? '#' + entry.heading.id : ''));
    }

    render(entry: GuideEntry, opts: RenderOptions): Reply {
        return renderGuide(this.index, entry, this.url(entry), opts);
    }

    get loaded(): LoadedIndex {
        return this.index;
    }
}
