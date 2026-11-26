import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createServer, type Server } from 'node:http';
import { Client } from 'discord.js';
import { IndexLoader } from '../index/loader.service';

const STALE_MS = 3 * 60 * 60 * 1000;

/**
 * GET /health on HEALTH_PORT, for the monitoring stack (compose network only, never published).
 * 200 when connected to Discord with an index loaded in the last 3 hours, 503 otherwise.
 */
@Injectable()
export class HealthService implements OnModuleInit, OnModuleDestroy {
    private readonly logger = new Logger(HealthService.name);
    private server?: Server;

    constructor(
        private readonly config: ConfigService,
        private readonly loader: IndexLoader,
        private readonly client: Client,
    ) {}

    onModuleInit() {
        const port = Number(this.config.get('HEALTH_PORT') ?? 0);
        if (!port) return;
        this.server = createServer((req, res) => {
            if (req.url !== '/health') {
                res.writeHead(404).end();
                return;
            }
            const index = this.loader.index;
            const age = index ? Date.now() - index.loadedAt.getTime() : null;
            const ok = this.client.isReady() && age !== null && age < STALE_MS;
            res.writeHead(ok ? 200 : 503, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ ok, discord: this.client.isReady(), build: index?.manifest.build ?? null, indexAgeSeconds: age === null ? null : Math.round(age / 1000), guilds: this.client.guilds.cache.size }));
        });
        this.server.listen(port, () => this.logger.log(`Health check on :${port}/health`));
    }

    onModuleDestroy() {
        this.server?.close();
    }
}
