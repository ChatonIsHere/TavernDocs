import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { TextIndex, terms, words } from './text';

describe('text search', () => {
    it('splits camelCase words but keeps the whole word too', () => {
        assert.deepEqual(words('MelonLoader'), ['melonloader', 'melon', 'loader']);
    });

    it('drops filler words and stems the rest', () => {
        assert.deepEqual(terms('How do I install the games?'), ['install', 'game']);
    });

    it('finds a page by a word only in its text, and prefers one with every word', () => {
        const idx = new TextIndex([
            { value: 'setup', fields: [{ text: 'Set up the game', weight: 4 }, { text: 'Setup installs MelonLoader and TavernLib into your game.', weight: 1 }] },
            { value: 'mods', fields: [{ text: 'Getting mods', weight: 4 }, { text: 'Mods need MelonLoader.', weight: 1 }] },
            { value: 'ports', fields: [{ text: 'Ports', weight: 4 }, { text: 'Open 1757.', weight: 1 }] },
        ]);
        assert.deepEqual(idx.search('melonloader').map((h) => h.value).sort(), ['mods', 'setup']);
        assert.equal(idx.search('install game')[0].value, 'setup');
        assert.deepEqual(idx.search('the and of'), []);
    });
});
