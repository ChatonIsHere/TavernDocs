// The navbar search: Pagefind (built by src/plugins/search-index), searched in the browser. Searches the section
// you're in (Play, Host, Mod, Help) unless you pick Everywhere; on the home page it searches everything.
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useLocation} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

type SubResult = {title: string; url: string; excerpt: string};
type Related = {title: string; url: string; kind: string; area: string};
type Result = {url: string; meta: {title?: string}; excerpt: string; sub_results?: SubResult[]};
type Pagefind = {
    options: (o: Record<string, unknown>) => Promise<void>;
    init: () => Promise<void>;
    debouncedSearch: (q: string, o: Record<string, unknown>, ms?: number) => Promise<{results: {data: () => Promise<Result>}[]} | null>;
};

const SECTIONS: Record<string, string> = {play: 'Play', host: 'Host', mod: 'Mod', help: 'Help'};
const LIMIT = 10;
const KIND_LABELS: Record<string, string> = {guide: 'Guide', snippet: 'Answer', type: 'Type', config: 'Setting', command: 'Command', faq: 'FAQ', troubleshoot: 'Fix', port: 'Port'};

let loading: Promise<Pagefind> | null = null;
function loadPagefind(base: string): Promise<Pagefind> {
    loading ??= (async () => {
        const pf: Pagefind = await import(/* webpackIgnore: true */ `${base}pagefind/pagefind.js`);
        await pf.options({baseUrl: base, excerptLength: 24});
        await pf.init();
        return pf;
    })();
    return loading;
}

export default function SearchBar(): React.ReactElement {
    const base = useBaseUrl('/');
    const {pathname} = useLocation();
    const here = SECTIONS[pathname.slice(base.length).split('/')[0]];
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [everywhere, setEverywhere] = useState(!here);
    const [results, setResults] = useState<Result[]>([]);
    const [related, setRelated] = useState<Related[]>([]);
    const [state, setState] = useState<'idle' | 'loading' | 'ready' | 'unavailable'>('idle');
    const [active, setActive] = useState(0);
    const input = useRef<HTMLInputElement>(null);
    const list = useRef<HTMLUListElement>(null);

    useEffect(() => setEverywhere(!here), [here]);

    // Ctrl+K or / opens it.
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            const typing = (e.target as HTMLElement)?.closest('input, textarea, [contenteditable="true"]');
            if ((e.key === 'k' && (e.ctrlKey || e.metaKey)) || (e.key === '/' && !typing)) {
                e.preventDefault();
                setOpen(true);
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    useEffect(() => {
        if (!open) return;
        input.current?.focus();
        document.body.style.overflow = 'hidden';
        return () => void (document.body.style.overflow = '');
    }, [open]);

    useEffect(() => {
        if (!open) return;
        let cancelled = false;
        const q = query.trim();
        if (!q) {
            setResults([]);
            return;
        }
        setState((s) => (s === 'unavailable' ? s : 'loading'));
        loadPagefind(base)
            .then(async (pf) => {
                const search = await pf.debouncedSearch(q, everywhere || !here ? {} : {filters: {section: here}}, 150);
                if (!search || cancelled) return;
                const data = await Promise.all(search.results.slice(0, LIMIT).map((r) => r.data()));
                if (cancelled) return;
                setResults(data);
                setActive(0);
                setState('ready');
            })
            .catch(() => !cancelled && setState('unavailable'));
        return () => void (cancelled = true);
    }, [query, everywhere, here, open, base]);

    // Related pages by meaning, from the site's Worker (/api/search), for searches of a few words. Anything that goes
    // wrong (offline, the daily cap, a local build without the Worker) just leaves this list empty.
    useEffect(() => {
        const q = query.trim();
        setRelated([]);
        if (!open || q.split(/\s+/).length < 2 || q.length < 8) return;
        const controller = new AbortController();
        const timer = setTimeout(() => {
            const area = everywhere || !here ? '' : here.toLowerCase();
            fetch(`${base}api/search?q=${encodeURIComponent(q)}${area ? `&area=${area}` : ''}`, {signal: controller.signal})
                .then((r) => (r.ok ? r.json() : {results: []}))
                // Only links within this site (a path starting with one slash).
                .then((d: {results?: Related[]}) => setRelated((d.results ?? []).filter((r) => typeof r.url === 'string' && /^\/(?!\/)/.test(r.url))))
                .catch(() => undefined);
        }, 450);
        return () => {
            clearTimeout(timer);
            controller.abort();
        };
    }, [query, everywhere, here, open, base]);

    const close = useCallback(() => {
        setOpen(false);
        setActive(0);
    }, []);

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') close();
        else if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActive((a) => Math.min(a + 1, results.length - 1));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActive((a) => Math.max(a - 1, 0));
        } else if (e.key === 'Enter' && results[active]) {
            e.preventDefault();
            list.current?.querySelectorAll<HTMLAnchorElement>('a.tavern-search-result')[active]?.click();
        }
    };

    // Result URLs come back with the base path; Link wants them without it.
    const toPath = (url: string) => (url.startsWith(base) ? '/' + url.slice(base.length) : url);

    return (
        <>
            <button type="button" className="tavern-search-button" onClick={() => setOpen(true)} aria-label="Search the docs">
                <svg width="16" height="16" viewBox="0 0 20 20" aria-hidden="true"><path d="M14.4 12.9 19 17.5 17.5 19l-4.6-4.6a7.5 7.5 0 1 1 1.5-1.5ZM8.5 14a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" fill="currentColor" /></svg>
                <span>Search{here ? ` ${here}` : ''}</span>
                <kbd>Ctrl K</kbd>
            </button>
            {open && (
                <div className="tavern-search-backdrop" onMouseDown={(e) => e.target === e.currentTarget && close()}>
                    <div className="tavern-search-dialog" role="dialog" aria-modal="true" aria-label="Search the docs" onKeyDown={onKeyDown}>
                        <div className="tavern-search-top">
                            <input
                                ref={input}
                                type="search"
                                placeholder={everywhere || !here ? 'Search all of TavernDocs' : `Search ${here}`}
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                aria-controls="tavern-search-results"
                            />
                            {here && (
                                <div className="tavern-search-scope" role="group" aria-label="Where to search">
                                    <button type="button" aria-pressed={!everywhere} onClick={() => (setEverywhere(false), input.current?.focus())}>{here}</button>
                                    <button type="button" aria-pressed={everywhere} onClick={() => (setEverywhere(true), input.current?.focus())}>Everywhere</button>
                                </div>
                            )}
                        </div>
                        <ul id="tavern-search-results" ref={list} className="tavern-search-results">
                            {results.map((r, i) => (
                                <li key={r.url} className={i === active ? 'active' : undefined} onMouseEnter={() => setActive(i)}>
                                    <Link className="tavern-search-result" to={toPath(r.url)} onClick={close}>
                                        <strong>{r.meta.title ?? r.url}</strong>
                                        <span dangerouslySetInnerHTML={{__html: r.excerpt}} />
                                    </Link>
                                    {(r.sub_results ?? []).filter((s) => s.url !== r.url).slice(0, 2).map((s) => (
                                        <Link key={s.url} className="tavern-search-sub" to={toPath(s.url)} onClick={close}>
                                            {s.title}
                                        </Link>
                                    ))}
                                </li>
                            ))}
                        </ul>
                        {(() => {
                            const shown = new Set(results.flatMap((r) => [r.url, ...(r.sub_results ?? []).map((x) => x.url)]));
                            const extra = related.filter((r) => !shown.has(r.url) && !shown.has(r.url.split('#')[0])).slice(0, 5);
                            return extra.length ? (
                                <div className="tavern-search-related">
                                    <p>Related</p>
                                    {extra.map((r) => (
                                        <Link key={r.url} to={r.url} onClick={close}>
                                            <span>{KIND_LABELS[r.kind] ?? r.kind}</span>
                                            {r.title}
                                        </Link>
                                    ))}
                                </div>
                            ) : null;
                        })()}
                        <p className="tavern-search-status" aria-live="polite">
                            {state === 'unavailable'
                                ? "Search isn't available here. It works on the published site, after a build."
                                : query.trim() && state === 'ready' && !results.length && !related.length
                                  ? `Nothing found${!everywhere && here ? ` in ${here}. Try Everywhere.` : '.'}`
                                  : !query.trim()
                                    ? 'Type to search. Esc closes.'
                                    : ''}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
