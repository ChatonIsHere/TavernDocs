import type { ReferenceRow, ReferenceTable } from '../../index/schema';
import { siteUrl, type LoadedIndex } from '../../index/loaded-index';
import { SearchIndex } from '../../search/rank';
import { shortKey } from '../../search/key';
import { TextIndex, terms, textScore } from '../../search/text';
import { addFields, embed } from '../../discord/style';
import { withText, type Hit, type RenderOptions, type Reply, type SearchOptions, type Source } from '../source';

/**
 * One table from bot/content/sources.yml (config keys, console commands, log lines, FAQ, ...). The registry makes one
 * of these per table on every refresh, so a new sources.yml entry needs no code here.
 */
export class ReferenceSource implements Source<ReferenceRow> {
    readonly id: string;
    readonly label: string;
    readonly description: string;
    private search_: SearchIndex<ReferenceRow>;
    private text_: TextIndex<ReferenceRow>;
    private byKey = new Map<string, ReferenceRow>();

    constructor(
        private readonly index: LoadedIndex,
        readonly table: ReferenceTable,
    ) {
        this.id = 'r-' + table.id;
        this.label = table.label.replace(/s$/, '');
        this.description = table.description;
        for (const row of table.rows) this.byKey.set(this.keyOf(row), row);
        // The key is what people search; its heading ("server_settings.json") helps tell rows apart.
        this.search_ = new SearchIndex(table.rows.map((row) => ({ value: row, name: row.key, also: [`${row.context} ${row.key}`] })));
        this.text_ = new TextIndex(table.rows.map((row) => ({ value: row, fields: [{ text: row.key, weight: 3 }, { text: row.text, weight: 1 }, { text: row.context, weight: 1 }] })));
    }

    load(_index: LoadedIndex): void {
        // Built in the constructor: the registry makes a new one per refresh.
    }

    search(query: string, opts: SearchOptions = {}): Hit<ReferenceRow>[] {
        const limit = opts.limit ?? 25;
        const names = this.search_.search(query, limit, this.index.aliases.aliases).map((h) => ({ entry: h.value, score: h.score }));
        return withText(this, names, names.length < limit ? this.searchText(query, opts) : [], limit);
    }

    searchText(query: string, opts: SearchOptions = {}): Hit<ReferenceRow>[] {
        const n = terms(query).length;
        return this.text_.search(query, opts.limit ?? 25).map((h) => ({ entry: h.value, score: textScore(h, n) }));
    }

    keyOf(row: ReferenceRow): string {
        return shortKey(row.url + '|' + row.key);
    }

    get(key: string): ReferenceRow | undefined {
        return this.byKey.get(key);
    }

    title(row: ReferenceRow): string {
        return row.context && row.context !== row.key ? `${row.key} · ${row.context}` : row.key;
    }

    url(row: ReferenceRow): string {
        return siteUrl(this.index, row.url);
    }

    render(row: ReferenceRow, _opts: RenderOptions): Reply {
        const url = this.url(row);
        const e = embed({ title: row.key, url, description: row.text || '*No description.*', footer: `${this.table.label} · ${row.context}` });
        addFields(e, Object.entries(row.extra).map(([name, value]) => ({ name, value, inline: true })));
        return { embeds: [e], url, urlLabel: 'Open in the docs' };
    }
}
