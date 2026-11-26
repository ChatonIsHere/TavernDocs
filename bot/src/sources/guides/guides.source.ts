import { Injectable } from '@nestjs/common';
import type { Guide, Heading } from '../../index/schema';
import { siteUrl, type LoadedIndex } from '../../index/loaded-index';
import { SearchIndex, type Aliases } from '../../search/rank';
import { shortKey } from '../../search/key';
import { TextIndex, terms, textScore } from '../../search/text';
import { trail } from '../../discord/style';
import { withText, type Hit, type RenderOptions, type Reply, type SearchOptions, type Source } from '../source';
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
    private text_: TextIndex<GuideEntry> = new TextIndex([]);
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
        // Whole pages by their text: title and aliases count most, then the description and headings, then the body.
        this.text_ = new TextIndex(index.guides.guides.filter((g) => g.searchText !== false).map((guide) => ({
            value: this.byKey.get(shortKey(guide.id))!,
            fields: [
                { text: guide.title, weight: 4 },
                { text: guide.aliases.join(' '), weight: 4 },
                { text: guide.description, weight: 2 },
                { text: guide.summary.join(' '), weight: 2 },
                { text: guide.headings.map((h) => h.text).join(' '), weight: 2 },
                { text: guide.sections.map((x) => x.text).join(' '), weight: 1 },
            ],
        })));
    }

    /** scope: an area (play, host, mod, help) to search only that section. */
    search(query: string, opts: SearchOptions = {}): Hit<GuideEntry>[] {
        const limit = opts.limit ?? 25;
        const names = this.search_.search(query, opts.scope ? limit * 4 : limit, this.aliases)
            .filter((h) => !opts.scope || h.value.guide.area === opts.scope).slice(0, limit).map((h) => ({ entry: h.value, score: h.score }));
        return withText(this, names, names.length < limit ? this.searchText(query, opts) : [], limit);
    }

    /** Pages whose text matches; Play, Host and Help pages before the long Mod reference pages on a close call. */
    searchText(query: string, opts: SearchOptions = {}): Hit<GuideEntry>[] {
        const limit = opts.limit ?? 25;
        const n = terms(query).length;
        return this.text_.search(query, limit * 4)
            .filter((h) => !opts.scope || h.value.guide.area === opts.scope)
            .map((h) => ({ entry: h.value, score: textScore(h, n) - (h.value.guide.area === 'mod' ? 0 : 0.15) }))
            .sort((a, b) => a.score - b.score)
            .slice(0, limit);
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
