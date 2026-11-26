// The bot index: what the TavernDocs build publishes under /bot/ and the bot reads.
// The site's bot-index plugin (src/plugins/bot-index) writes these files and the bot (bot/src/index/loader.service.ts)
// reads them; both import this file, so a change here is a change to both. Bump SCHEMA_VERSION when a field's meaning
// changes or a required field is added, so an old bot refuses a new index instead of misreading it.

export const SCHEMA_VERSION = 1;

/** build/bot/manifest.json */
export interface Manifest {
    schema: number;
    /** The commit the site was built from, or "local". */
    build: string;
    generatedAt: string;
    /** Site address with base path and no trailing slash, e.g. https://chatonishere.github.io/TavernDocs */
    baseUrl: string;
    files: Record<IndexFileName, { path: string; sha256: string; bytes: number }>;
}

export const INDEX_FILES = ['guides', 'types-game', 'types-tavernlib', 'reference', 'snippets', 'aliases'] as const;
export type IndexFileName = (typeof INDEX_FILES)[number];

// ── guides.json ─────────────────────────────────────────

export interface GuidesFile {
    guides: Guide[];
}

export interface Guide {
    /** Docusaurus doc id, e.g. "play/getting-started/set-up-the-game". Stable; used in button ids. */
    id: string;
    title: string;
    /** First folder of the id: play, host, mod or help. */
    area: string;
    /** The sidebar it's in, as shown: Play, Host, Mod, Help, TavernLib API, Game API. */
    section: string;
    /** Sidebar categories above the page, e.g. ["Getting started"]. */
    path: string[];
    description: string;
    /** Path below baseUrl, e.g. "/play/getting-started/set-up-the-game". */
    url: string;
    /** Extra search words from the page's bot_aliases frontmatter. */
    aliases: string[];
    /** Hand-written bullets from the page's summary frontmatter, or empty. */
    summary: string[];
    /** h2 and h3 headings, for linking straight to a part of the page. */
    headings: Heading[];
    /** The page split at its h2 headings, for step-through mode and the outline when there's no summary. */
    sections: GuideSection[];
    /** False when the page's bot_text frontmatter keeps it out of text search (it's still found by name). */
    searchText?: boolean;
}

export interface Heading {
    id: string;
    text: string;
    level: 2 | 3;
}

export interface GuideSection {
    /** Heading id, or "" for the text before the first h2. */
    id: string;
    title: string;
    /** Plain text: paragraphs, numbered steps as "1. ...", table rows as "a: b". Capped at 1500 characters. */
    text: string;
    /** First image in the section, path below the site root (starts with the base path), or null. */
    image: string | null;
}

// ── types-game.json, types-tavernlib.json ───────────────
// Written by tools/types-gen (api_pages.Api.bot_types) into src/bot-index and copied as is.

export interface TypesFile {
    types: TypeEntry[];
}

export interface TypeEntry {
    full: string;
    name: string;
    kind: string;
    ns: string;
    asm: string;
    vis: string;
    bases: string[];
    summary: string;
    url: string;
    members: MemberEntry[];
}

export interface MemberEntry {
    name: string;
    kind: string;
    vis: string;
    sig: string;
    desc: string;
    /** Anchor on the type's page. */
    anchor: string;
}

// ── reference.json ──────────────────────────────────────
// From bot/content/sources.yml: rows of docs tables, or sections under headings (FAQ, troubleshooting).

export interface ReferenceFile {
    tables: ReferenceTable[];
}

export interface ReferenceTable {
    /** The sources.yml id, e.g. "config". */
    id: string;
    label: string;
    description: string;
    rows: ReferenceRow[];
}

export interface ReferenceRow {
    key: string;
    text: string;
    /** Other columns, e.g. { Default: "24" }. */
    extra: Record<string, string>;
    /** The heading the row is under, e.g. "server_settings.json". */
    context: string;
    url: string;
}

// ── snippets.json ───────────────────────────────────────

export interface SnippetsFile {
    snippets: Snippet[];
}

export interface Snippet {
    /** File name without .md. */
    id: string;
    title: string;
    aliases: string[];
    /** Markdown, at most 1500 characters. */
    body: string;
    links: { label: string; url: string }[];
}

// ── aliases.json ────────────────────────────────────────

export interface AliasesFile {
    /** Lowercase term -> what it also means, e.g. { "mm": ["mod manager"] }. */
    aliases: Record<string, string[]>;
}

// ── checks ──────────────────────────────────────────────
// Small hand-written checks, so neither side needs a schema library. Each returns a list of problems.

type Check = (value: unknown, where: string, problems: string[]) => void;

const isObj = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v);
const str: Check = (v, w, p) => void (typeof v !== 'string' && p.push(`${w}: expected text`));
const strOrNull: Check = (v, w, p) => void (v !== null && typeof v !== 'string' && p.push(`${w}: expected text or null`));
const strList: Check = (v, w, p) => (Array.isArray(v) ? v.forEach((x, i) => str(x, `${w}[${i}]`, p)) : p.push(`${w}: expected a list`));
const listOf =
    (item: Check): Check =>
    (v, w, p) =>
        Array.isArray(v) ? v.forEach((x, i) => item(x, `${w}[${i}]`, p)) : p.push(`${w}: expected a list`);
const obj =
    (fields: Record<string, Check>): Check =>
    (v, w, p) => {
        if (!isObj(v)) return void p.push(`${w}: expected an object`);
        for (const [k, check] of Object.entries(fields)) check(v[k], `${w}.${k}`, p);
    };
const record =
    (item: Check): Check =>
    (v, w, p) =>
        isObj(v) ? Object.entries(v).forEach(([k, x]) => item(x, `${w}.${k}`, p)) : p.push(`${w}: expected an object`);

const heading = obj({ id: str, text: str, level: (v, w, p) => void (v !== 2 && v !== 3 && p.push(`${w}: expected 2 or 3`)) });
const section = obj({ id: str, title: str, text: str, image: strOrNull });
const guide = obj({
    id: str, title: str, area: str, section: str, path: strList, description: str, url: str,
    aliases: strList, summary: strList, headings: listOf(heading), sections: listOf(section),
    searchText: (v, w, p) => void (v !== undefined && typeof v !== 'boolean' && p.push(`${w}: expected true or false`)),
});
const member = obj({ name: str, kind: str, vis: str, sig: str, desc: str, anchor: str });
const type = obj({ full: str, name: str, kind: str, ns: str, asm: str, vis: str, bases: strList, summary: str, url: str, members: listOf(member) });
const row = obj({ key: str, text: str, extra: record(str), context: str, url: str });
const table = obj({ id: str, label: str, description: str, rows: listOf(row) });
const snippet = obj({ id: str, title: str, aliases: strList, body: str, links: listOf(obj({ label: str, url: str })) });

const FILE_CHECKS: Record<IndexFileName, Check> = {
    guides: obj({ guides: listOf(guide) }),
    'types-game': obj({ types: listOf(type) }),
    'types-tavernlib': obj({ types: listOf(type) }),
    reference: obj({ tables: listOf(table) }),
    snippets: obj({ snippets: listOf(snippet) }),
    aliases: obj({ aliases: record(strList) }),
};

/** Problems with one index file, or an empty list. Stops listing after 20. */
export function checkIndexFile(name: IndexFileName, data: unknown): string[] {
    const problems: string[] = [];
    FILE_CHECKS[name](data, name, problems);
    return problems.slice(0, 20);
}

export function checkManifest(data: unknown): string[] {
    const problems: string[] = [];
    obj({ schema: (v, w, p) => void (typeof v !== 'number' && p.push(`${w}: expected a number`)), build: str, generatedAt: str, baseUrl: str })(data, 'manifest', problems);
    if (isObj(data) && isObj(data.files)) {
        for (const name of INDEX_FILES) obj({ path: str, sha256: str })(data.files[name], `manifest.files.${name}`, problems);
    } else problems.push('manifest.files: expected an object');
    return problems;
}
