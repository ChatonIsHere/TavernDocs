import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import path from 'node:path';
import { IndexLoader } from '../index/loader.service';

/** One embedded piece of the docs, as written by the site's semantic/embed.mjs (chunks.json). */
export interface Chunk {
    id: string;
    title: string;
    url: string;
    area: string;
    kind: string;
    h: string;
}

export interface SemanticHit {
    chunk: Chunk;
    /** Cosine similarity, 0 to 1. */
    score: number;
}

const MODEL = 'Xenova/bge-small-en-v1.5';
const DIMENSIONS = 384;
/** Below this, a match is more likely noise than help. */
const MIN_SCORE = 0.6;

/** The vector file format from semantic/lib.mjs: per chunk, a float32 scale then 384 int8 values. */
export function readVectors(buf: Buffer, count: number): Float32Array[] {
    const out: Float32Array[] = [];
    const stride = 4 + DIMENSIONS;
    for (let i = 0; i < count; i++) {
        const scale = buf.readFloatLE(i * stride);
        const v = new Float32Array(DIMENSIONS);
        for (let d = 0; d < DIMENSIONS; d++) v[d] = (buf.readInt8(i * stride + 4 + d) * scale) / 127;
        out.push(v);
    }
    return out;
}

/** The best chunks for a query vector: cosine similarity (the vectors are normalised, so a dot product). */
export function nearest(query: ArrayLike<number>, chunks: Chunk[], vectors: Float32Array[], limit: number, area?: string): SemanticHit[] {
    const scored: SemanticHit[] = [];
    for (let i = 0; i < chunks.length; i++) {
        if (area && chunks[i].area !== area) continue;
        const v = vectors[i];
        let dot = 0;
        for (let d = 0; d < DIMENSIONS; d++) dot += v[d] * query[d];
        if (dot >= MIN_SCORE) scored.push({ chunk: chunks[i], score: dot });
    }
    return scored.sort((a, b) => b.score - a.score).slice(0, limit);
}

type Extractor = (texts: string[], opts: Record<string, unknown>) => Promise<{ tolist: () => number[][] }>;

/**
 * Search by meaning, inside the bot: the same small model the site build used, run here on the bot's server, against
 * the page vectors the site publishes (/semantic/). No outside service sees the query. Used by /search and
 * "Find in TavernDocs"; autocomplete stays on the faster word search. Until the model and vectors have loaded, or if
 * they can't, search() returns nothing and everything works as before.
 */
@Injectable()
export class SemanticService implements OnModuleInit {
    private readonly logger = new Logger(SemanticService.name);
    private extractor: Extractor | null = null;
    private chunks: Chunk[] = [];
    private vectors: Float32Array[] = [];
    private loadedFor = '';

    constructor(
        private readonly config: ConfigService,
        private readonly loader: IndexLoader,
    ) {}

    get ready(): boolean {
        return !!this.extractor && this.chunks.length > 0;
    }

    onModuleInit() {
        void this.loadModel();
        // New vectors come with each new site build.
        this.loader.onLoad((index) => void this.loadVectors(index.manifest.build));
    }

    private url(): string {
        return this.config.get<string>('SEMANTIC_URL') || this.config.get<string>('INDEX_URL')!.replace(/\/bot\/?$/, '/semantic');
    }

    private async loadModel() {
        try {
            // ESM only, and this project compiles to CommonJS, so load it with Node's own import().
            const nativeImport = new Function('m', 'return import(m)') as (m: string) => Promise<any>;
            const { pipeline, env } = await nativeImport('@huggingface/transformers');
            env.cacheDir = path.join(this.config.get<string>('DATA_DIR') ?? './data', 'models');
            this.extractor = (await pipeline('feature-extraction', MODEL, { dtype: 'q8' })) as Extractor;
            this.logger.log('Semantic model loaded');
        } catch (err) {
            this.logger.warn(`Semantic model unavailable, word search only: ${(err as Error).message}`);
        }
    }

    private async loadVectors(build: string) {
        if (build === this.loadedFor) return;
        try {
            const base = this.url();
            const chunks = (await (await fetch(`${base}/chunks.json`, { signal: AbortSignal.timeout(30_000) })).json()) as Chunk[];
            const res = await fetch(`${base}/vectors.bin`, { signal: AbortSignal.timeout(60_000) });
            if (!res.ok) throw new Error(`vectors.bin: HTTP ${res.status}`);
            const buf = Buffer.from(await res.arrayBuffer());
            if (buf.length !== chunks.length * (4 + DIMENSIONS)) throw new Error('vectors.bin does not match chunks.json');
            this.vectors = readVectors(buf, chunks.length);
            this.chunks = chunks;
            this.loadedFor = build;
            this.logger.log(`Semantic vectors loaded: ${chunks.length}`);
        } catch (err) {
            this.logger.warn(`Semantic vectors unavailable, keeping ${this.chunks.length}: ${(err as Error).message}`);
        }
    }

    /** Chunks closest in meaning to the text, best first. Empty when not ready. */
    async search(text: string, limit = 10, area?: string): Promise<SemanticHit[]> {
        if (!this.ready || !text.trim()) return [];
        const out = await this.extractor!([text.slice(0, 500)], { pooling: 'cls', normalize: true });
        return nearest(out.tolist()[0], this.chunks, this.vectors, limit, area);
    }
}
