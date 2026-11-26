import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { untrusted } from './limits';

describe('untrusted text', () => {
    it('shows the real address of a named link', () => {
        assert.equal(untrusted('Get it [here](https://evil.example/x) now'), 'Get it here (https://evil.example/x) now');
        assert.equal(untrusted('[free nitro](<https://evil.example>)'), 'free nitro (https://evil.example)');
    });

    it('leaves plain text alone', () => {
        assert.equal(untrusted('More iron, fewer bugs.'), 'More iron, fewer bugs.');
        assert.equal(untrusted(undefined), '');
    });
});
