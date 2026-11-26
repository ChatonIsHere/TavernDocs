import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { Logger, type LogLevel } from '@nestjs/common';
import { AppModule } from './app.module';

const LEVELS: LogLevel[] = ['fatal', 'error', 'warn', 'log', 'debug', 'verbose'];

/** LOG_LEVEL=debug turns on that level and everything above it; unset gives log, warn and error. */
function logLevels(): LogLevel[] {
    const raw = (process.env.LOG_LEVEL ?? '').trim().toLowerCase() as LogLevel;
    return LEVELS.includes(raw) ? LEVELS.slice(0, LEVELS.indexOf(raw) + 1) : ['fatal', 'error', 'warn', 'log'];
}

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule, { logger: logLevels() });
    app.enableShutdownHooks();
    new Logger('Bootstrap').log('TavernDocs bot is starting');
}

void bootstrap();
