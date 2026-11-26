import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import fs from 'node:fs';
import path from 'node:path';
import { normalize } from '../search/rank';

interface GapFile {
    since: string;
    /** "command|query" -> times it found nothing. */
    misses: Record<string, number>;
}

const SAVE_MS = 5 * 60 * 1000;
const MAX_KEYS = 5000;

/**
 * Counts searches that found nothing, to show what the docs are missing. Only the command and the query text are kept:
 * no user, server or channel. Saved to DATA_DIR/gaps.json.
 */
@Injectable()
export class GapsService implements OnModuleInit, OnModuleDestroy {
    private readonly logger = new Logger(GapsService.name);
    private readonly file: string;
    private data: GapFile = { since: new Date().toISOString(), misses: {} };
    private dirty = false;
    private timer?: NodeJS.Timeout;

    constructor(config: ConfigService) {
        this.file = path.join(config.get<string>('DATA_DIR') ?? './data', 'gaps.json');
    }

    onModuleInit() {
        try {
            if (fs.existsSync(this.file)) this.data = JSON.parse(fs.readFileSync(this.file, 'utf8'));
        } catch (err) {
            this.logger.warn(`Couldn't read ${this.file}, starting fresh: ${(err as Error).message}`);
        }
        this.timer = setInterval(() => this.save(), SAVE_MS);
        this.timer.unref();
    }

    onModuleDestroy() {
        clearInterval(this.timer);
        this.save();
    }

    record(command: string, query: string): void {
        const q = normalize(query).slice(0, 100);
        if (!q) return;
        const key = `${command}|${q}`;
        if (!(key in this.data.misses) && Object.keys(this.data.misses).length >= MAX_KEYS) return;
        this.data.misses[key] = (this.data.misses[key] ?? 0) + 1;
        this.dirty = true;
    }

    top(n = 20): { command: string; query: string; count: number }[] {
        return Object.entries(this.data.misses)
            .sort((a, b) => b[1] - a[1])
            .slice(0, n)
            .map(([key, count]) => {
                const [command, query] = key.split('|');
                return { command, query, count };
            });
    }

    get since(): string {
        return this.data.since;
    }

    private save() {
        if (!this.dirty) return;
        try {
            fs.mkdirSync(path.dirname(this.file), { recursive: true });
            fs.writeFileSync(this.file + '.tmp', JSON.stringify(this.data));
            fs.renameSync(this.file + '.tmp', this.file);
            this.dirty = false;
        } catch (err) {
            this.logger.warn(`Couldn't save ${this.file}: ${(err as Error).message}`);
        }
    }
}
