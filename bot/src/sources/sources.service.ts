import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { IndexLoader } from '../index/loader.service';
import type { LoadedIndex } from '../index/loaded-index';
import { SOURCE_CLASSES } from './index';
import { ReferenceSource } from './reference/reference.source';
import type { Hit, Source } from './source';

/** Sources whose entries answer a question outright: troubleshooting fixes, FAQ answers and snippets. */
const DIRECT_ANSWERS = new Set(['r-troubleshoot', 'r-faq', 's']);
/** Hand-written snippets go first among the direct answers. */
const FIRST = new Set(['s']);
/** Big lists that would crowd out guides in /search: they still show, a little lower. */
const LOWER_IN_SEARCH = new Set(['r-log']);

export interface AnyHit {
    source: Source;
    hit: Hit<unknown>;
}

/** Holds every source and reloads them all when a new index arrives. */
@Injectable()
export class SourcesService implements OnModuleInit {
    private readonly logger = new Logger(SourcesService.name);
    private fixed: Source[] = [];
    private reference = new Map<string, ReferenceSource>();

    constructor(
        private readonly loader: IndexLoader,
        private readonly moduleRef: ModuleRef,
    ) {}

    onModuleInit() {
        this.fixed = SOURCE_CLASSES.map((cls) => this.moduleRef.get(cls as never, { strict: false }) as Source);
        this.loader.onLoad((index) => this.reload(index));
    }

    reload(index: LoadedIndex): void {
        for (const s of this.fixed) s.load(index);
        this.reference = new Map(index.reference.tables.map((t) => [t.id, new ReferenceSource(index, t)]));
        this.logger.log(`Sources ready: ${this.all().map((s) => s.id).join(', ')}`);
    }

    get ready(): boolean {
        return !!this.loader.index;
    }

    all(): Source[] {
        return [...this.fixed, ...this.reference.values()];
    }

    byId(id: string): Source | undefined {
        return this.all().find((s) => s.id === id);
    }

    /** A sources.yml table by its id ("config", "faq"). */
    table(id: string): ReferenceSource | undefined {
        return this.reference.get(id);
    }

    tables(): ReferenceSource[] {
        return [...this.reference.values()];
    }

    /**
     * Matches for a plain-language message ("how do i install the game"): every source's text search, plus types for
     * words that look like code (CamelCase or Type.Member). One hit per entry, best first.
     */
    findForText(text: string, limit = 5): AnyHit[] {
        // Text scores from different sources don't compare well (a one-line log entry outscores a long guide), so the
        // answer is built from slots: a type the message names, then guides, then direct answers, then the rest.
        const from = (ids: (id: string) => boolean, n: number): AnyHit[] =>
            this.all()
                .filter((s) => ids(s.id) && s.searchText)
                .flatMap((source) => source.searchText!(text, { limit: n }).map((hit) => ({ source, hit })))
                .sort((a, b) => (FIRST.has(b.source.id) ? 1 : 0) - (FIRST.has(a.source.id) ? 1 : 0) || a.hit.score - b.hit.score)
                .slice(0, n);
        const typeHits: AnyHit[] = [];
        const types = this.byId('t');
        const code = [...new Set(text.match(/\b[A-Z][a-z0-9]+[A-Z][A-Za-z0-9]*(?:\.[A-Za-z_]\w*)?\b|\b\w+\.[A-Za-z_]\w+\b/g) ?? [])].slice(0, 5);
        for (const word of types ? code : []) {
            const best = types!.search(word, { limit: 1 })[0];
            if (best && best.score < 2) typeHits.push({ source: types!, hit: best });
        }
        const picked = [
            ...typeHits.slice(0, 2),
            ...from((id) => id === 'g', 3),
            ...from((id) => DIRECT_ANSWERS.has(id), 2),
            ...from((id) => id !== 'g' && !DIRECT_ANSWERS.has(id), limit),
        ];
        const seen = new Set<string>();
        return picked
            .filter((h) => {
                const k = h.source.id + ':' + h.source.keyOf(h.hit.entry as never);
                return !seen.has(k) && !!seen.add(k);
            })
            .slice(0, limit);
    }

    /** The best matches across every source, merged by score. Long lists like log lines count a little less. */
    searchAll(query: string, limit = 25): AnyHit[] {
        const hits: AnyHit[] = [];
        for (const source of this.all()) {
            const penalty = LOWER_IN_SEARCH.has(source.id) ? 0.5 : 0;
            for (const hit of source.search(query, { limit })) hits.push({ source, hit: { ...hit, score: hit.score + penalty } });
        }
        return hits.sort((a, b) => a.hit.score - b.hit.score).slice(0, limit);
    }
}
