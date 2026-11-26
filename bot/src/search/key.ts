import { createHash } from 'node:crypto';

/** A short, stable key for any string: 10 hex characters of its SHA-1. Fits in autocomplete values and button ids. */
export function shortKey(text: string): string {
    return createHash('sha1').update(text).digest('hex').slice(0, 10);
}
