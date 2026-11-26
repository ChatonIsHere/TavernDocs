import { EmbedBuilder } from 'discord.js';
import { LIMITS, truncate } from './limits';

/** The Tavern's amber, as on the site. */
export const COLOR = 0xf0b24a;

/** An embed with the house style and every text cut to Discord's limits. */
export function embed(opts: { title: string; url?: string; description?: string; footer?: string; image?: string | null; thumbnail?: string | null }): EmbedBuilder {
    const e = new EmbedBuilder().setColor(COLOR).setTitle(truncate(opts.title, LIMITS.title));
    if (opts.url) e.setURL(opts.url);
    if (opts.description) e.setDescription(truncate(opts.description, LIMITS.description));
    if (opts.footer) e.setFooter({ text: truncate(opts.footer, LIMITS.footer) });
    if (opts.image) e.setImage(opts.image);
    if (opts.thumbnail) e.setThumbnail(opts.thumbnail);
    return e;
}

/** Add fields, skipping empty ones and cutting each to fit. */
export function addFields(e: EmbedBuilder, fields: { name: string; value: string | undefined | null; inline?: boolean }[]): EmbedBuilder {
    for (const f of fields) {
        if (!f.value) continue;
        if ((e.data.fields?.length ?? 0) >= LIMITS.fields) break;
        e.addFields({ name: truncate(f.name, LIMITS.fieldName), value: truncate(f.value, LIMITS.fieldValue), inline: f.inline ?? false });
    }
    return e;
}

/** One line with the steps of a path, e.g. "Play › Getting started". */
export function trail(parts: (string | undefined)[]): string {
    return parts.filter(Boolean).join(' › ');
}
