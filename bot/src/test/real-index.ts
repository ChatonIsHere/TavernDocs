// Loads the index from the site's last local build (../build/bot), for the real-data test and the benchmark.
import fs from 'node:fs';
import path from 'node:path';
import type { LoadedIndex } from '../index/loaded-index';

export const BUILD_DIR = path.resolve(__dirname, '..', '..', '..', 'build', 'bot');

export function realIndex(): LoadedIndex | null {
    if (!fs.existsSync(path.join(BUILD_DIR, 'manifest.json'))) return null;
    const read = (n: string) => JSON.parse(fs.readFileSync(path.join(BUILD_DIR, n + '.json'), 'utf8'));
    const manifest = read('manifest');
    return {
        manifest, baseUrl: manifest.baseUrl, guides: read('guides'), typesGame: read('types-game'), typesTavernlib: read('types-tavernlib'),
        reference: read('reference'), snippets: read('snippets'), aliases: read('aliases'), mods: null, modsPage: 'https://example.com', loadedAt: new Date(),
    };
}
