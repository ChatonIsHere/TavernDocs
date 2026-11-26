// Writes the site's Content Security Policy into build/_headers after each build.
// Scripts may only come from this site, plus the exact inline scripts the build produced (allowed by their SHA-256
// hash, worked out here every build so the list can't go stale), plus WebAssembly for the search (Pagefind). Anything
// else, inline or from another site, is blocked. static/_headers holds the other headers and a placeholder CSP line.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import type {Plugin} from '@docusaurus/types';

// Scripts a browser runs. Data blocks like application/ld+json (breadcrumbs for search engines) never run.
const RUNNABLE = /^(|text\/javascript|application\/javascript|module)$/i;

function* htmlFiles(dir: string): Generator<string> {
    for (const e of fs.readdirSync(dir, {withFileTypes: true})) {
        const p = path.join(dir, e.name);
        if (e.isDirectory()) yield* htmlFiles(p);
        else if (e.name.endsWith('.html')) yield p;
    }
}

export default function csp(): Plugin {
    return {
        name: 'csp',
        async postBuild({outDir}) {
            const hashes = new Set<string>();
            for (const file of htmlFiles(outDir)) {
                const html = fs.readFileSync(file, 'utf8');
                for (const [, attrs, body] of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
                    if (/\ssrc=/.test(attrs)) continue;
                    const type = /\stype=["']?([^"'\s>]+)/.exec(attrs)?.[1] ?? '';
                    if (!RUNNABLE.test(type)) continue;
                    hashes.add(`'sha256-${crypto.createHash('sha256').update(body, 'utf8').digest('base64')}'`);
                }
            }
            if (hashes.size > 20) throw new Error(`CSP: ${hashes.size} different inline scripts; expected a handful. Check what's adding them.`);
            const policy = [
                "default-src 'self'",
                `script-src 'self' 'wasm-unsafe-eval' ${[...hashes].sort().join(' ')}`,
                // React and Docusaurus set inline style attributes; styles can't run code.
                "style-src 'self' 'unsafe-inline'",
                "img-src 'self' data:",
                "font-src 'self' data:",
                "connect-src 'self'",
                "worker-src 'self'",
                "manifest-src 'self'",
                "frame-src 'none'",
                "object-src 'none'",
                "base-uri 'self'",
                "form-action 'self'",
                "frame-ancestors 'none'",
                'upgrade-insecure-requests',
            ].join('; ');
            const file = path.join(outDir, '_headers');
            const headers = fs.readFileSync(file, 'utf8');
            if (!/^\s*Content-Security-Policy:.*$/m.test(headers)) throw new Error('CSP: static/_headers has no Content-Security-Policy line to replace');
            fs.writeFileSync(file, headers.replace(/^(\s*)Content-Security-Policy:.*$/m, `$1Content-Security-Policy: ${policy}`));
            console.log(`[csp] ${hashes.size} inline script(s) allowed by hash`);
        },
    };
}
