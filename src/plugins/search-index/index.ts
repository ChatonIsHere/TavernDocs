// Builds the site search (Pagefind) after the site is built: build/pagefind/, searched in the browser by
// src/theme/SearchBar. Pagefind splits the index into small pieces and the browser fetches only what a search needs,
// so there's no big download and no server. Each page gets its section (Play, Host, Mod, Help) as a filter, so a
// section's search box can search just that section. The work is in run.mjs (Pagefind is ESM only).
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import type {LoadContext, Plugin} from '@docusaurus/types';

export default function searchIndex(context: LoadContext): Plugin {
    return {
        name: 'search-index',
        async postBuild({outDir}) {
            execFileSync(process.execPath, [path.join(context.siteDir, 'src', 'plugins', 'search-index', 'run.mjs'), outDir], {stdio: 'inherit'});
        },
    };
}
