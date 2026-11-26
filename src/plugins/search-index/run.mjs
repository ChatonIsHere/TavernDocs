// Builds the Pagefind index for a built site: node run.mjs <build folder>
// Run by the search-index plugin after each build. It's a separate script because Pagefind is ESM only and the
// Docusaurus config loader can't import ES modules.
import fs from 'node:fs';
import path from 'node:path';
import {load as loadHtml} from 'cheerio';
import * as pagefind from 'pagefind';

const SECTIONS = {play: 'Play', host: 'Host', mod: 'Mod', help: 'Help'};
// Not worth a search result: the type indexes are one long list of links, and the bot's files aren't pages.
const SKIP = [/(^|\/)type-index\.html$/, /^bot\//, /^404\.html$/, /^search\.html$/, /^pagefind\//];
const TYPE_PAGE = /^mod\/(game-api|tavernlib-api)\/types\/[^/]+\/[^/]+\.html$/;

function* htmlFiles(dir, rel = '') {
    for (const e of fs.readdirSync(path.join(dir, rel), {withFileTypes: true})) {
        const r = rel ? `${rel}/${e.name}` : e.name;
        if (e.isDirectory()) yield* htmlFiles(dir, r);
        else if (e.name.endsWith('.html')) yield r;
    }
}

const outDir = process.argv[2];
const {index, errors} = await pagefind.createIndex({
    forceLanguage: 'en',
    // Cloudflare's free plan allows 20,000 files per site; one fragment per page would use a third of that.
    maxFragments: 800,
    // Identifiers like Type.Member, server_settings.json and <T> stay whole words.
    includeCharacters: '._<>',
    excludeSelectors: ['.hash-link', 'nav', 'button', '.theme-doc-toc-mobile', '[role="tabpanel"][hidden]', '.pagination-nav'],
});
if (!index) throw new Error('Pagefind: ' + errors.join('; '));

let pages = 0;
for (const rel of htmlFiles(outDir)) {
    if (SKIP.some((re) => re.test(rel))) continue;
    const $ = loadHtml(fs.readFileSync(path.join(outDir, rel), 'utf8'));
    const body = $('article .theme-doc-markdown').first();
    if (!body.length) continue; // only doc pages
    const url = '/' + rel.replace(/\.html$/, '').replace(/(^|\/)index$/, '');
    const section = SECTIONS[rel.split('/')[0]] ?? 'Other';
    body.attr('data-pagefind-body', '');
    // Type pages are many and alike; guides should win a close call.
    if (TYPE_PAGE.test(rel)) body.attr('data-pagefind-weight', '0.6');
    body.append(`<span data-pagefind-filter="section" hidden>${section}</span>`);
    const title = $('article h1').first().text().trim() || $('title').text().split(' - ')[0];
    body.append(`<span data-pagefind-meta="title" hidden>${title.replace(/</g, '&lt;')}</span>`);
    const res = await index.addHTMLFile({url, content: $.html()});
    if (res.errors.length) throw new Error(`Pagefind, ${rel}: ${res.errors.join('; ')}`);
    pages++;
}
const written = await index.writeFiles({outputPath: path.join(outDir, 'pagefind')});
if (written.errors.length) throw new Error('Pagefind: ' + written.errors.join('; '));
await pagefind.close();
console.log(`[search-index] ${pages} pages indexed into pagefind/`);
