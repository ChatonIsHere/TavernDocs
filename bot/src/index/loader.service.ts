import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EventEmitter } from 'node:events';
import { INDEX_FILES, SCHEMA_VERSION, checkIndexFile, checkManifest, type IndexFileName, type Manifest } from './schema';
import type { LoadedIndex, ModsFile } from './loaded-index';

const REFRESH_MS = 60 * 60 * 1000;
const RETRY_MS = 5 * 60 * 1000;

export type RefreshResult = { changed: boolean; build: string; error?: string };

/**
 * Fetches the bot index the TavernDocs build publishes (and TavernMods' repository.json), checks it, and swaps it in
 * all at once. Checks hourly; /admin refresh calls refresh() directly. A failed fetch keeps the last good index and
 * tries again in 5 minutes, so a bad deploy never takes the bot down.
 */
@Injectable()
export class IndexLoader implements OnModuleInit, OnModuleDestroy {
    private readonly logger = new Logger(IndexLoader.name);
    private readonly events = new EventEmitter();
    private current: LoadedIndex | null = null;
    private raw: Partial<Record<IndexFileName, { sha256: string; data: unknown }>> = {};
    private timer?: NodeJS.Timeout;
    private running: Promise<RefreshResult> | null = null;

    constructor(private readonly config: ConfigService) {}

    get index(): LoadedIndex | null {
        return this.current;
    }

    /** Called with each new index, after it's been swapped in. */
    onLoad(listener: (index: LoadedIndex) => void): void {
        this.events.on('load', listener);
        if (this.current) listener(this.current);
    }

    onModuleInit() {
        // Don't block startup; commands answer "still loading" until the first index lands.
        void this.refresh().then(() => this.schedule());
    }

    onModuleDestroy() {
        clearTimeout(this.timer);
    }

    private schedule(ms = REFRESH_MS) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => void this.refresh().then((r) => this.schedule(r.error ? RETRY_MS : REFRESH_MS)), ms);
        this.timer.unref();
    }

    refresh(): Promise<RefreshResult> {
        this.running ??= this.load().finally(() => (this.running = null));
        return this.running;
    }

    private async load(): Promise<RefreshResult> {
        const indexUrl = this.config.get<string>('INDEX_URL')!.replace(/\/$/, '');
        try {
            const manifest = (await this.fetchJson(`${indexUrl}/manifest.json`)) as Manifest;
            const problems = checkManifest(manifest);
            if (problems.length) throw new Error('manifest: ' + problems.join('; '));
            if (manifest.schema !== SCHEMA_VERSION) throw new Error(`index schema ${manifest.schema}, this bot reads ${SCHEMA_VERSION}`);

            const raw = { ...this.raw };
            for (const name of INDEX_FILES) {
                const want = manifest.files[name];
                if (raw[name]?.sha256 === want.sha256) continue; // unchanged since last time
                const data = await this.fetchJson(`${indexUrl}/${want.path.replace(/^bot\//, '')}`);
                const fileProblems = checkIndexFile(name, data);
                if (fileProblems.length) throw new Error(`${name}: ${fileProblems.join('; ')}`);
                raw[name] = { sha256: want.sha256, data };
            }
            const mods = await this.loadMods();
            const changed = !this.current || this.current.manifest.build !== manifest.build || !!mods !== !!this.current.mods;
            this.raw = raw;
            this.current = {
                manifest,
                baseUrl: manifest.baseUrl.replace(/\/$/, ''),
                guides: raw.guides!.data as LoadedIndex['guides'],
                typesGame: raw['types-game']!.data as LoadedIndex['typesGame'],
                typesTavernlib: raw['types-tavernlib']!.data as LoadedIndex['typesTavernlib'],
                reference: raw.reference!.data as LoadedIndex['reference'],
                snippets: raw.snippets!.data as LoadedIndex['snippets'],
                aliases: raw.aliases!.data as LoadedIndex['aliases'],
                mods,
                modsPage: this.config.get<string>('TAVERNMODS_PAGE')!,
                loadedAt: new Date(),
            };
            this.events.emit('load', this.current);
            this.logger.log(`Index ${manifest.build} loaded (${this.current.guides.guides.length} guides, ${this.current.typesGame.types.length} game types)`);
            return { changed, build: manifest.build };
        } catch (err) {
            const error = (err as Error).message;
            this.logger.warn(`Index refresh failed, keeping ${this.current?.manifest.build ?? 'nothing'}: ${error}`);
            return { changed: false, build: this.current?.manifest.build ?? 'none', error };
        }
    }

    /** Overridden in tests. */
    protected fetchJson(url: string): Promise<unknown> {
        return getJson(url);
    }

    private async loadMods(): Promise<ModsFile | null> {
        const url = this.config.get<string>('TAVERNMODS_URL');
        if (!url) return null;
        try {
            const data = (await this.fetchJson(url)) as ModsFile;
            if (data?.index_version !== 2 || typeof data.mods !== 'object') throw new Error(`index_version ${data?.index_version}`);
            return data;
        } catch (err) {
            this.logger.warn(`TavernMods index unavailable: ${(err as Error).message}`);
            return this.current?.mods ?? null;
        }
    }
}

async function getJson(url: string): Promise<unknown> {
    const res = await fetch(url, { headers: { 'User-Agent': 'TavernDocs-bot' }, signal: AbortSignal.timeout(30_000) });
    if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
    return res.json();
}
