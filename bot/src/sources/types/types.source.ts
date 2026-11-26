import { Injectable } from '@nestjs/common';
import type { MemberEntry, TypeEntry } from '../../index/schema';
import { siteUrl, type LoadedIndex } from '../../index/loaded-index';
import { SearchIndex, type Aliases } from '../../search/rank';
import { shortKey } from '../../search/key';
import type { Hit, RenderOptions, Reply, SearchOptions, Source } from '../source';
import { renderMember, renderType } from './types.render';

export type TypeScope = 'game' | 'tavernlib';

export interface TypeHit {
    type: TypeEntry;
    scope: TypeScope;
}

/** Game and TavernLib types, with their members. */
@Injectable()
export class TypesSource implements Source<TypeHit> {
    readonly id = 't';
    readonly label = 'Type';
    private index: LoadedIndex;
    private search_: SearchIndex<TypeHit> = new SearchIndex([]);
    private byKey = new Map<string, TypeHit>();
    private memberSearch = new WeakMap<TypeEntry, SearchIndex<MemberEntry>>();
    private aliases: Aliases = {};

    load(index: LoadedIndex): void {
        this.index = index;
        this.aliases = index.aliases.aliases;
        this.byKey.clear();
        this.memberSearch = new WeakMap();
        const items = [];
        for (const [scope, file] of [['tavernlib', index.typesTavernlib], ['game', index.typesGame]] as const) {
            for (const type of file.types) {
                const hit = { type, scope };
                this.byKey.set(this.keyOf(hit), hit);
                // Ties go to public, described types: the ones a mod is likely to mean.
                const boost = (type.vis === 'public' ? 0.4 : 0) + (type.summary ? 0.3 : 0) + (type.asm === 'Root.Township' || scope === 'tavernlib' ? 0.2 : 0);
                items.push({ value: hit, name: type.name, also: [type.full], boost });
            }
        }
        this.search_ = new SearchIndex(items);
    }

    get ready(): boolean {
        return !!this.index;
    }

    /** scope: "game" or "tavernlib". */
    search(query: string, opts: SearchOptions = {}): Hit<TypeHit>[] {
        const limit = opts.limit ?? 25;
        return this.search_
            .search(query, opts.scope ? limit * 3 : limit, this.aliases)
            .filter((h) => !opts.scope || h.value.scope === opts.scope)
            .slice(0, limit)
            .map((h) => ({ entry: h.value, score: h.score }));
    }

    keyOf(hit: TypeHit): string {
        return shortKey(hit.scope + ':' + hit.type.full);
    }

    get(key: string): TypeHit | undefined {
        return this.byKey.get(key);
    }

    title(hit: TypeHit): string {
        const where = hit.type.ns || 'global';
        return `${hit.type.name} · ${hit.type.kind} · ${hit.scope === 'tavernlib' ? 'TavernLib' : where}`;
    }

    url(hit: TypeHit): string {
        return siteUrl(this.index, hit.type.url);
    }

    render(hit: TypeHit, _opts: RenderOptions): Reply {
        return renderType(this.index, hit, this.url(hit));
    }

    /** Members of one type matching the query, constructors last. */
    members(type: TypeEntry, query: string, limit = 25): MemberEntry[] {
        let index = this.memberSearch.get(type);
        if (!index) {
            index = new SearchIndex(type.members.filter((m) => m.kind !== 'constructor').map((m) => ({ value: m, name: m.name, boost: m.vis === 'public' ? 0.5 : 0 })));
            this.memberSearch.set(type, index);
        }
        if (!query.trim()) return type.members.filter((m) => m.kind !== 'constructor' && m.vis === 'public').slice(0, limit);
        return index.search(query, limit).map((h) => h.value);
    }

    renderMember(hit: TypeHit, member: MemberEntry): Reply {
        const url = siteUrl(this.index, hit.type.url + '#' + member.anchor);
        return renderMember(hit, member, url);
    }

    /**
     * "PlayerChunkManager.WipeChunk" typed into /type: the type and member, when the part before the last dot names a
     * type exactly. Null otherwise.
     */
    splitMember(text: string, scope?: TypeScope): { hit: TypeHit; member: MemberEntry } | null {
        const dot = text.lastIndexOf('.');
        if (dot <= 0 || dot === text.length - 1) return null;
        const typeName = text.slice(0, dot).trim().toLowerCase();
        const memberName = text.slice(dot + 1).trim().toLowerCase();
        const hit = this.search(text.slice(0, dot), { scope, limit: 5 }).find((h) => h.entry.type.name.toLowerCase() === typeName || h.entry.type.full.toLowerCase() === typeName);
        const member = hit?.entry.type.members.find((m) => m.name.toLowerCase() === memberName);
        return hit && member ? { hit: hit.entry, member } : null;
    }
}
