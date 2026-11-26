// The site's Worker. Static pages are served by Cloudflare straight from build/ (wrangler.jsonc); only /api/* runs
// this code, so page views stay free.
//
// GET /api/search?q=<text>&area=<play|host|mod|help>  Related pages by meaning (semantic search). The query is turned
// into an embedding by Workers AI (the same model and pooling the build used for the pages, see semantic/) and looked
// up in Vectorize. A daily cap keeps it inside the free plan; when it's reached the answer is empty and the site's
// search box just shows its normal (Pagefind) results. Nothing about the query is logged or stored, except the
// cached answer for an identical query for a day.

interface Env {
    ASSETS: { fetch: (request: Request) => Promise<Response> };
    AI: { run: (model: string, input: unknown) => Promise<{ data: number[][] }> };
    VECTORIZE: {
        query: (vector: number[], options: Record<string, unknown>) => Promise<{ matches: { score: number; metadata?: Record<string, string> }[] }>;
    };
    QUOTA: { idFromName: (name: string) => unknown; get: (id: unknown) => { fetch: (url: string) => Promise<Response> } };
}

const MODEL = '@cf/baai/bge-small-en-v1.5';
/** Searches a day. Vectorize's free allowance is about 70,000 a month at our index size; this stays well under. */
const DAILY_CAP = 1500;
const MIN_SCORE = 0.66;
const AREAS = new Set(['play', 'host', 'mod', 'help']);
const DAY = 86400;

function json(body: unknown, maxAge = 0): Response {
    return new Response(JSON.stringify(body), {
        headers: { 'Content-Type': 'application/json', 'Cache-Control': maxAge ? `public, max-age=${maxAge}` : 'no-store' },
    });
}

export default {
    async fetch(request: Request, env: Env, ctx: { waitUntil: (p: Promise<unknown>) => void }): Promise<Response> {
        const url = new URL(request.url);
        if (url.pathname !== '/api/search') return env.ASSETS.fetch(request);
        if (request.method !== 'GET') return new Response('GET only', { status: 405 });

        const q = (url.searchParams.get('q') ?? '').replace(/\s+/g, ' ').trim().slice(0, 200);
        const area = url.searchParams.get('area') ?? '';
        if (q.length < 3) return json({ results: [] });

        // The same search within a day gets the same answer, without using the quota again.
        const cache = (caches as unknown as { default: Cache }).default;
        const key = new Request(`https://cache.invalid/search/v2?q=${encodeURIComponent(q.toLowerCase())}&area=${AREAS.has(area) ? area : ''}`);
        const cached = await cache.match(key);
        if (cached) return cached;

        const quota = env.QUOTA.get(env.QUOTA.idFromName('daily'));
        const { allowed } = (await (await quota.fetch('https://quota/take')).json()) as { allowed: boolean };
        if (!allowed) return json({ results: [], capped: true }, 300);

        try {
            const embedded = await env.AI.run(MODEL, { text: [q], pooling: 'cls' });
            const found = await env.VECTORIZE.query(embedded.data[0], {
                topK: 8,
                returnMetadata: 'all',
                ...(AREAS.has(area) ? { filter: { area } } : {}),
            });
            const results = found.matches
                .filter((m) => m.score >= MIN_SCORE && m.metadata?.url)
                .map((m) => ({ title: m.metadata!.title, url: m.metadata!.url, kind: m.metadata!.kind, area: m.metadata!.area, score: Math.round(m.score * 1000) / 1000 }));
            // Only answers with something in them are kept: an empty one may just mean the index is still updating.
            // matched and best say how the lookup went (how many came back, the closest score), not what was searched.
            const response = json({ results, matched: found.matches.length, best: Math.round((found.matches[0]?.score ?? 0) * 1000) / 1000 }, results.length ? DAY : 0);
            if (results.length) ctx.waitUntil(cache.put(key, response.clone()));
            return response;
        } catch (err) {
            return json({ results: [], unavailable: true, error: (err as Error).message.slice(0, 200) });
        }
    },
};

/** Counts today's searches across every Cloudflare location. Keeps one number per day and drops older ones. */
export class Quota {
    constructor(private readonly state: { storage: { get: (k: string) => Promise<unknown>; put: (k: string, v: unknown) => Promise<void>; list: () => Promise<Map<string, unknown>>; delete: (k: string) => Promise<boolean> } }) {}

    async fetch(): Promise<Response> {
        const today = new Date().toISOString().slice(0, 10);
        const used = ((await this.state.storage.get(today)) as number | undefined) ?? 0;
        if (used >= DAILY_CAP) return Response.json({ allowed: false });
        await this.state.storage.put(today, used + 1);
        if (used === 0) for (const k of (await this.state.storage.list()).keys()) if (k !== today) await this.state.storage.delete(k);
        return Response.json({ allowed: true });
    }
}
