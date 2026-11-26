// Writes the Discord bot's index (build/bot/*.json) after the site is built.
// Guides, headings, steps and reference tables are read from the built HTML, so heading ids and text are exactly what
// the site shows. Types come from src/bot-index (written by tools/types-gen). Snippets, aliases and the list of
// reference tables come from bot/content. The format is in bot/src/index/schema.ts.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {execSync} from 'node:child_process';
import type {LoadContext, Plugin} from '@docusaurus/types';
import {load as loadHtml} from 'cheerio';
import yaml from 'js-yaml';
import {
    SCHEMA_VERSION, INDEX_FILES, checkIndexFile, checkManifest,
    type Guide, type GuideSection, type Heading, type IndexFileName, type Manifest, type ReferenceTable, type Snippet,
} from '../../../bot/src/index/schema';

const SECTION_LABELS: Record<string, string> = {play: 'Play', host: 'Host', mod: 'Mod', help: 'Help', tavernlib: 'TavernLib API', game: 'Game API'};
// Type pages are indexed from the generated type data instead; the type index is one long list of links.
const NOT_GUIDES = /^mod\/(game-api|tavernlib-api)\/types\//;
const SECTION_TEXT_MAX = 1500;
const SNIPPET_MAX = 1500;

interface SourceEntry {
    id: string; label: string; description: string; kind: 'table' | 'headings'; pages: string[];
    key?: string; text?: string; extra?: string[]; levels?: number[];
}

// A page as an ordered list of headings and content, read through tabs and other wrappers.
type Block =
    | {type: 'heading'; level: number; id: string; text: string}
    | {type: 'text'; text: string; image: string | null}
    | {type: 'table'; headers: string[]; rows: string[][]};

export default function botIndex(context: LoadContext): Plugin {
    let docs: any[] = [];
    let sidebars: Record<string, any[]> = {};
    return {
        name: 'bot-index',
        async allContentLoaded({allContent}) {
            const version = (allContent['docusaurus-plugin-content-docs'] as any)?.default?.loadedVersions?.[0];
            docs = version?.docs ?? [];
            sidebars = version?.sidebars ?? {};
        },
        async postBuild({outDir, siteConfig}) {
            const base = siteConfig.baseUrl.replace(/\/$/, '');
            const pages = new Map<string, {doc: any; blocks: Block[]}>();
            for (const doc of docs) {
                const url = doc.permalink.slice(base.length) || '/';
                const file = path.join(outDir, url === '/' ? 'index.html' : url.replace(/^\//, '') + '.html');
                if (fs.existsSync(file)) pages.set(doc.id, {doc, blocks: readBlocks(fs.readFileSync(file, 'utf8'))});
            }
            const content = path.join(context.siteDir, 'bot', 'content');
            const sourcesYml = yaml.load(fs.readFileSync(path.join(content, 'sources.yml'), 'utf8')) as {skip_headings?: string[]; sources: SourceEntry[]};
            const skip = new Set((sourcesYml.skip_headings ?? []).map((h) => h.toLowerCase()));

            const files: Record<IndexFileName, unknown> = {
                guides: {guides: [...pages.values()].filter(({doc}) => !NOT_GUIDES.test(doc.id) && !doc.frontMatter?.bot_hidden)
                    .map(({doc, blocks}) => toGuide(doc, blocks, base, sidebars))},
                'types-game': readJson(path.join(context.siteDir, 'src', 'bot-index', 'types-game.json')),
                'types-tavernlib': readJson(path.join(context.siteDir, 'src', 'bot-index', 'types-tavernlib.json')),
                reference: {tables: sourcesYml.sources.map((s) => toTable(s, pages, base, skip))},
                snippets: {snippets: readSnippets(path.join(content, 'snippets'))},
                aliases: {aliases: lowerKeys((yaml.load(fs.readFileSync(path.join(content, 'aliases.yml'), 'utf8')) as any)?.aliases ?? {})},
            };

            const problems: string[] = [];
            for (const name of INDEX_FILES) problems.push(...checkIndexFile(name, files[name]));
            const dir = path.join(outDir, 'bot');
            fs.mkdirSync(dir, {recursive: true});
            const manifest: Manifest = {
                schema: SCHEMA_VERSION, build: buildId(context.siteDir), generatedAt: new Date().toISOString(),
                baseUrl: siteConfig.url.replace(/\/$/, '') + base, files: {} as Manifest['files'],
            };
            for (const name of INDEX_FILES) {
                const text = JSON.stringify(files[name]);
                fs.writeFileSync(path.join(dir, name + '.json'), text);
                manifest.files[name] = {path: `bot/${name}.json`, sha256: crypto.createHash('sha256').update(text).digest('hex'), bytes: Buffer.byteLength(text)};
            }
            problems.push(...checkManifest(manifest));
            if (problems.length) throw new Error('Bot index problems:\n  ' + problems.join('\n  '));
            fs.writeFileSync(path.join(dir, 'manifest.json'), JSON.stringify(manifest, null, 2));
            const g = (files.guides as {guides: Guide[]}).guides;
            console.log(`[bot-index] ${g.length} guides, ${(files.reference as {tables: ReferenceTable[]}).tables.map((t) => `${t.id} ${t.rows.length}`).join(', ')}, ` +
                `${(files.snippets as {snippets: Snippet[]}).snippets.length} snippets`);
        },
    };
}

function readJson(file: string): unknown {
    return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : {types: []};
}

function buildId(siteDir: string): string {
    if (process.env.GITHUB_SHA) return process.env.GITHUB_SHA.slice(0, 12);
    try {
        return execSync('git rev-parse --short=12 HEAD', {cwd: siteDir, stdio: ['ignore', 'pipe', 'ignore']}).toString().trim();
    } catch {
        return 'local';
    }
}

const clean = (s: string) => s.replace(/​/g, '').replace(/\s+/g, ' ').trim();

function readBlocks(html: string): Block[] {
    const $ = loadHtml(html);
    const root = $('article .theme-doc-markdown').first();
    root.find('[role="tabpanel"][hidden], ul[role="tablist"], a.hash-link, header, nav, button, script, style').remove();
    // Keep bold (button names) and inline code as markdown, which Discord embeds show. Not inside headings or tables.
    root.find('p strong, li strong, blockquote strong, .theme-admonition strong').each((_, el) => void $(el).replaceWith(`**${clean($(el).text())}**`));
    root.find('p code, li code, blockquote code, .theme-admonition code').filter((_, el) => !$(el).closest('pre').length)
        .each((_, el) => void $(el).replaceWith('`' + clean($(el).text()).replace(/`/g, "'") + '`'));
    const blocks: Block[] = [];
    const text = (el: any) => clean($(el).text());
    const imageIn = (el: any): string | null => $(el).is('img') ? ($(el).attr('src') ?? null) : ($(el).find('img').first().attr('src') ?? null);
    const walk = (el: any) => {
        $(el).children().each((_, child) => {
            const tag = (child as any).tagName?.toLowerCase();
            if (tag === 'h1') return;
            if (/^h[2-4]$/.test(tag)) {
                blocks.push({type: 'heading', level: Number(tag[1]), id: $(child).attr('id') ?? '', text: text(child)});
            } else if (tag === 'p' || tag === 'blockquote' || tag === 'img') {
                const t = text(child);
                if (t || imageIn(child)) blocks.push({type: 'text', text: t, image: imageIn(child)});
            } else if (tag === 'ol' || tag === 'ul') {
                const items = $(child).children('li').map((i, li) => (tag === 'ol' ? `${i + 1}. ` : '- ') + text(li)).get();
                blocks.push({type: 'text', text: items.join('\n'), image: imageIn(child)});
            } else if (tag === 'table') {
                const headers = $(child).find('thead th').map((_, th) => text(th)).get();
                const rows = $(child).find('tbody tr').map((_, tr) => [$(tr).children('td').map((__, td) => text(td)).get()]).get() as string[][];
                blocks.push({type: 'table', headers, rows});
            } else if (tag === 'pre' || (tag === 'div' && $(child).find('pre').length && !$(child).find('p, ol, ul, table, h2, h3').length)) {
                const code = $(child).find('code').first().text().trim() || $(child).text().trim();
                if (code && code.length <= 300) blocks.push({type: 'text', text: '```\n' + code + '\n```', image: null});
            } else if (tag === 'div' && $(child).hasClass('theme-admonition')) {
                blocks.push({type: 'text', text: text(child), image: imageIn(child)});
            } else {
                walk(child);
            }
        });
    };
    walk(root);
    return blocks;
}

function sidebarPath(sidebar: any[] | undefined, id: string): string[] {
    const find = (items: any[], trail: string[]): string[] | null => {
        for (const item of items ?? []) {
            if (item.type === 'doc' || item.type === 'ref') {
                if (item.id === id) return trail;
            } else if (item.type === 'category') {
                const next = [...trail, item.label];
                if (item.link?.type === 'doc' && item.link.id === id) return trail;
                const hit = find(item.items, next);
                if (hit) return hit;
            }
        }
        return null;
    };
    return find(sidebar ?? [], []) ?? [];
}

function toGuide(doc: any, blocks: Block[], base: string, sidebars: Record<string, any[]>): Guide {
    const headings: Heading[] = blocks.filter((b): b is Extract<Block, {type: 'heading'}> => b.type === 'heading' && (b.level === 2 || b.level === 3) && !!b.id)
        .map((b) => ({id: b.id, text: b.text, level: b.level as 2 | 3}));
    const sections: GuideSection[] = [];
    let current: GuideSection = {id: '', title: doc.title, text: '', image: null};
    const push = () => {
        current.text = current.text.trim().slice(0, SECTION_TEXT_MAX);
        if (current.text || current.image) sections.push(current);
    };
    for (const b of blocks) {
        if (b.type === 'heading' && b.level === 2) {
            push();
            current = {id: b.id, title: b.text, text: '', image: null};
        } else if (b.type === 'heading') {
            current.text += `\n**${b.text}**`;
        } else if (b.type === 'text') {
            if (b.text) current.text += '\n' + b.text;
            current.image ??= b.image;
        } else {
            current.text += '\n' + b.rows.map((r) => r.filter(Boolean).join(': ')).join('\n');
        }
    }
    push();
    const fm = doc.frontMatter ?? {};
    return {
        id: doc.id, title: doc.title, area: doc.id.split('/')[0], section: SECTION_LABELS[doc.sidebar] ?? SECTION_LABELS[doc.id.split('/')[0]] ?? '',
        path: sidebarPath(sidebars[doc.sidebar], doc.id), description: doc.description ?? '', url: doc.permalink.slice(base.length) || '/',
        aliases: listOfStrings(fm.bot_aliases), summary: listOfStrings(fm.summary), headings, sections,
    };
}

function listOfStrings(v: unknown): string[] {
    return Array.isArray(v) ? v.filter((x) => typeof x === 'string').map((x) => x.trim()).filter(Boolean) : [];
}

function toTable(s: SourceEntry, pages: Map<string, {doc: any; blocks: Block[]}>, base: string, skip: Set<string>): ReferenceTable {
    const rows: ReferenceTable['rows'] = [];
    for (const pageId of s.pages) {
        const page = pages.get(pageId);
        if (!page) throw new Error(`bot/content/sources.yml: ${s.id} names page "${pageId}", which doesn't exist`);
        const url = page.doc.permalink.slice(base.length);
        if (s.kind === 'table') {
            let heading = {id: '', text: page.doc.title};
            for (const b of page.blocks) {
                if (b.type === 'heading') heading = {id: b.id, text: b.text};
                if (b.type !== 'table') continue;
                const k = b.headers.indexOf(s.key!), t = b.headers.indexOf(s.text!);
                if (k < 0 || t < 0) continue;
                for (const r of b.rows) {
                    if (!r[k]) continue;
                    const extra: Record<string, string> = {};
                    for (const col of s.extra ?? []) {
                        const i = b.headers.indexOf(col);
                        if (i >= 0 && r[i]) extra[col] = r[i];
                    }
                    rows.push({key: r[k], text: r[t] ?? '', extra, context: heading.text, url: url + (heading.id ? '#' + heading.id : '')});
                }
            }
        } else {
            const levels = new Set(s.levels ?? [2]);
            let open: {id: string; text: string; parts: string[]} | null = null;
            const close = () => {
                if (open && open.parts.length && !skip.has(open.text.toLowerCase()))
                    rows.push({key: open.text, text: open.parts.join('\n').slice(0, SECTION_TEXT_MAX), extra: {}, context: page.doc.title, url: url + '#' + open.id});
                open = null;
            };
            for (const b of page.blocks) {
                if (b.type === 'heading') {
                    close();
                    if (levels.has(b.level) && b.id) open = {id: b.id, text: b.text, parts: []};
                } else if (open) {
                    open.parts.push(b.type === 'text' ? b.text : b.rows.map((r) => r.filter(Boolean).join(': ')).join('\n'));
                }
            }
            close();
        }
    }
    if (!rows.length) throw new Error(`bot/content/sources.yml: ${s.id} found nothing. Check its pages and column names.`);
    return {id: s.id, label: s.label, description: s.description ?? '', rows};
}

function readSnippets(dir: string): Snippet[] {
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir).filter((f) => f.endsWith('.md') && f !== 'README.md').sort().map((f) => {
        const raw = fs.readFileSync(path.join(dir, f), 'utf8').replace(/\r\n/g, '\n');
        const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
        if (!m) throw new Error(`bot/content/snippets/${f}: needs frontmatter between --- lines`);
        const fm = (yaml.load(m[1]) ?? {}) as any;
        const body = m[2].trim();
        if (!fm.title) throw new Error(`bot/content/snippets/${f}: needs a title`);
        if (body.length > SNIPPET_MAX) throw new Error(`bot/content/snippets/${f}: ${body.length} characters, the limit is ${SNIPPET_MAX}`);
        const links = Array.isArray(fm.links) ? fm.links.filter((l: any) => l?.label && l?.url).map((l: any) => ({label: String(l.label), url: String(l.url)})) : [];
        return {id: f.replace(/\.md$/, ''), title: String(fm.title), aliases: listOfStrings(fm.aliases), body, links};
    });
}

function lowerKeys(o: Record<string, unknown>): Record<string, string[]> {
    return Object.fromEntries(Object.entries(o).map(([k, v]) => [k.toLowerCase(), listOfStrings(v).map((x) => x.toLowerCase())]));
}
