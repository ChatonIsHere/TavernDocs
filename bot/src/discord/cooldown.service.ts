import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/** One public reply per user every COOLDOWN_SECONDS. Autocomplete and buttons aren't limited. */
@Injectable()
export class CooldownService {
    private readonly last = new Map<string, number>();
    private readonly ms: number;

    constructor(config: ConfigService) {
        this.ms = Number(config.get('COOLDOWN_SECONDS') ?? 5) * 1000;
        setInterval(() => this.sweep(), 10 * 60 * 1000).unref();
    }

    /** Seconds left to wait, or 0 (and the cooldown starts now). */
    take(userId: string, now = Date.now()): number {
        const at = this.last.get(userId);
        if (at !== undefined && now - at < this.ms) return Math.ceil((this.ms - (now - at)) / 1000);
        this.last.set(userId, now);
        return 0;
    }

    private sweep(now = Date.now()) {
        for (const [user, at] of this.last) if (now - at >= this.ms) this.last.delete(user);
    }
}
