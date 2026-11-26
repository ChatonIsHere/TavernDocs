// Discord's size limits, and helpers that cut text to fit them without breaking words or code blocks.

export const LIMITS = {
    title: 256,
    description: 4096,
    fieldName: 256,
    fieldValue: 1024,
    fields: 25,
    footer: 2048,
    author: 256,
    embedTotal: 6000,
    choiceName: 100,
    choiceValue: 100,
    choices: 25,
    customId: 100,
    buttonLabel: 80,
} as const;

/** Cut to `max` characters at a word boundary, with an ellipsis. Closes an open ``` block. */
export function truncate(text: string, max: number): string {
    if (text.length <= max) return text;
    let cut = text.slice(0, max - 1);
    const space = cut.lastIndexOf(' ');
    if (space > max * 0.6) cut = cut.slice(0, space);
    cut = cut.replace(/[\s,.;:]+$/, '') + '…';
    if ((cut.match(/```/g) ?? []).length % 2 === 1) {
        cut = truncate(text, max - 4).replace(/…$/, '') + '\n```…';
    }
    return cut.length <= max ? cut : cut.slice(0, max);
}

/** A choice label for autocomplete: one line, at most 100 characters. */
export function choiceName(text: string): string {
    return truncate(text.replace(/\s+/g, ' ').trim(), LIMITS.choiceName);
}

/**
 * Text from outside the docs (TavernMods descriptions, changelogs) as safe embed text: a named link [text](url) shows
 * its real address, so it can't pass a phishing link off as something else. Mentions need nothing here: every reply
 * turns pings off (ReplyService).
 */
export function untrusted(text: string | undefined | null): string {
    return (text ?? '').replace(/\[([^\]]*)\]\(\s*<?([^)>\s]+)>?[^)]*\)/g, (_, label, url) => `${label} (${url})`);
}

/** Remove markdown that doesn't belong in a one-line label. */
export function plain(text: string): string {
    return text.replace(/\*\*|__|`/g, '');
}
