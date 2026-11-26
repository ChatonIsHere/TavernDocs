import { Injectable } from '@nestjs/common';
import type { LoadedIndex, ModMajor } from '../../index/loaded-index';
import { SearchIndex } from '../../search/rank';
import { addFields, embed } from '../../discord/style';
import { untrusted } from '../../discord/limits';
import type { Hit, RenderOptions, Reply, SearchOptions, Source } from '../source';

export interface ModEntry {
    id: string;
    major: string;
    mod: ModMajor;
}

const TARGET_LABELS: Record<string, string> = { client_windows: 'PC', client_android: 'Quest', server: 'Server' };

/** Mods from TavernMods' repository.json: the newest major of each. */
@Injectable()
export class ModsSource implements Source<ModEntry> {
    readonly id = 'm';
    readonly label = 'Mod';
    private index: LoadedIndex;
    private entries = new Map<string, ModEntry>();
    private search_: SearchIndex<ModEntry> = new SearchIndex([]);

    load(index: LoadedIndex): void {
        this.index = index;
        this.entries.clear();
        for (const [id, majors] of Object.entries(index.mods?.mods ?? {})) {
            const major = Object.keys(majors).sort((a, b) => Number(b) - Number(a))[0];
            if (major) this.entries.set(id, { id, major, mod: majors[major] });
        }
        this.search_ = new SearchIndex([...this.entries.values()].map((e) => ({ value: e, name: e.mod.name, also: [e.id, e.mod.author] })));
    }

    get available(): boolean {
        return !!this.index?.mods;
    }

    search(query: string, opts: SearchOptions = {}): Hit<ModEntry>[] {
        return this.search_.search(query, opts.limit ?? 25).map((h) => ({ entry: h.value, score: h.score }));
    }

    /** Every mod by name, for autocomplete before anything is typed. */
    list(limit = 25): ModEntry[] {
        return [...this.entries.values()].sort((a, b) => a.mod.name.localeCompare(b.mod.name)).slice(0, limit);
    }

    keyOf(e: ModEntry): string {
        return e.id.slice(0, 60);
    }

    get(key: string): ModEntry | undefined {
        return this.entries.get(key) ?? [...this.entries.values()].find((e) => e.id.startsWith(key));
    }

    title(e: ModEntry): string {
        return `${e.mod.name} · ${e.mod.author}`;
    }

    url(_e: ModEntry): string {
        return this.index.modsPage;
    }

    render(e: ModEntry, _opts: RenderOptions): Reply {
        const latest = e.mod.versions[e.mod.versions.length - 1];
        const icon = [...(e.mod.icons ?? [])].sort((a, b) => b.size - a.size)[0]?.url ?? null;
        // Mod text comes from TavernMods submissions, not the docs: neutralise links and mentions.
        const em = embed({ title: untrusted(e.mod.name), url: this.url(e), description: untrusted(e.mod.description), footer: `TavernMods · ${e.id}`, thumbnail: icon?.startsWith('https://') ? icon : null });
        addFields(em, [
            { name: 'Author', value: untrusted(e.mod.author), inline: true },
            { name: 'Latest', value: latest, inline: true },
            { name: 'Runs on', value: (e.mod.targets ?? []).map((t) => TARGET_LABELS[t] ?? t).join(', '), inline: true },
            { name: 'Needed on both sides', value: e.mod.parity_required === undefined ? null : e.mod.parity_required ? 'Yes: players need it to join' : 'No', inline: true },
            { name: "What's new", value: untrusted(e.mod.changelog) },
        ]);
        return { embeds: [em], url: this.url(e), urlLabel: 'Browse mods' };
    }
}
