import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { IndexLoader } from '../index/loader.service';
import type { LoadedIndex } from '../index/loaded-index';
import { SOURCE_CLASSES } from './index';
import { ReferenceSource } from './reference/reference.source';
import type { Hit, Source } from './source';

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

    /** The best matches across every source. Each source gets a fair share before the results are merged. */
    searchAll(query: string, limit = 25): AnyHit[] {
        const hits: AnyHit[] = [];
        for (const source of this.all()) {
            for (const hit of source.search(query, { limit })) hits.push({ source, hit });
        }
        return hits.sort((a, b) => a.hit.score - b.hit.score).slice(0, limit);
    }
}
