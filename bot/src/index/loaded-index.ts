import type { AliasesFile, GuidesFile, Manifest, ReferenceFile, SnippetsFile, TypesFile } from './schema';

/** TavernMods' repository.json (index_version 2), only the parts the bot reads. */
export interface ModsFile {
    index_version: number;
    mods: Record<string, Record<string, ModMajor>>;
}

export interface ModMajor {
    name: string;
    author: string;
    description: string;
    icons?: { size: number; url: string }[];
    parity_required?: boolean;
    targets?: string[];
    changelog?: string;
    versions: string[];
}

/** Everything the sources read, swapped in all at once when a new build arrives. */
export interface LoadedIndex {
    manifest: Manifest;
    /** Site address with base path, no trailing slash. */
    baseUrl: string;
    guides: GuidesFile;
    typesGame: TypesFile;
    typesTavernlib: TypesFile;
    reference: ReferenceFile;
    snippets: SnippetsFile;
    aliases: AliasesFile;
    /** Null when TavernMods couldn't be read; /mod says so. */
    mods: ModsFile | null;
    /** Where people browse mods. */
    modsPage: string;
    loadedAt: Date;
}

/** An address on the site: a path below the base, or a full URL left as it is. */
export function siteUrl(index: Pick<LoadedIndex, 'baseUrl'>, path: string): string {
    if (/^https?:\/\//.test(path)) return path;
    return index.baseUrl + (path.startsWith('/') ? path : '/' + path);
}

/**
 * The query + hash to append to a page url for one heading or section. A tab (e.g. "Quest") selects that client tab
 * with ?client=quest, so a Quest section opens on the Quest tab rather than the PC default. All the site's tabs are
 * the "client" group (values pc/quest), so the value is the tab label lowercased.
 */
export function anchor(id: string, tab?: string): string {
    return (tab ? `?client=${tab.toLowerCase()}` : '') + (id ? '#' + id : '');
}

/** A heading's or section's label with its tab in brackets, e.g. "Updating (Quest)". */
export function withTab(text: string, tab?: string): string {
    return tab ? `${text} (${tab})` : text;
}

/** An image path from the HTML (already includes the base path) as a full URL. */
export function imageUrl(index: Pick<LoadedIndex, 'baseUrl'>, src: string): string {
    if (/^https?:\/\//.test(src)) return src;
    const origin = new URL(index.baseUrl).origin;
    return origin + (src.startsWith('/') ? src : '/' + src);
}
