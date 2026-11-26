import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
import type { Guide } from '../../index/schema';
import { imageUrl, siteUrl, type LoadedIndex } from '../../index/loaded-index';
import { addFields, embed, trail } from '../../discord/style';
import { LIMITS, truncate } from '../../discord/limits';
import { shortKey } from '../../search/key';
import type { RenderOptions, Reply } from '../source';
import type { GuideEntry } from './guides.source';

/** A guide or one of its headings: the description, plus the summary (or an outline) when asked for. */
export function renderGuide(index: LoadedIndex, entry: GuideEntry, url: string, opts: RenderOptions): Reply {
    const { guide, heading } = entry;
    const footer = trail([guide.section, ...guide.path]);
    if (heading) {
        // A heading: the text of its section when it's an h2, else the page's description.
        const section = guide.sections.find((s) => s.id === heading.id);
        const e = embed({ title: `${guide.title} › ${heading.text}`, url, description: section?.text || guide.description, footer, image: section?.image ? imageUrl(index, section.image) : null });
        return { embeds: [e], url, urlLabel: 'Open section' };
    }
    const e = embed({ title: guide.title, url, description: guide.description, footer });
    if (opts.summary) {
        if (guide.summary.length) {
            addFields(e, [{ name: 'In short', value: guide.summary.map((b) => `- ${b}`).join('\n') }]);
        } else {
            addFields(e, [{ name: 'On this page', value: outline(index, guide) }]);
        }
    }
    return { embeds: [e], url, urlLabel: 'Open guide' };
}

/** The page's h2 headings as links, for pages without a hand-written summary. */
export function outline(index: LoadedIndex, guide: Guide): string {
    const lines: string[] = [];
    let length = 0;
    for (const h of guide.headings.filter((x) => x.level === 2)) {
        const line = `- [${h.text.replace(/[[\]]/g, '')}](${siteUrl(index, guide.url + '#' + h.id)})`;
        if (length + line.length + 1 > LIMITS.fieldValue - 2) break;
        lines.push(line);
        length += line.length + 1;
    }
    return lines.join('\n') || guide.description;
}

// ── step-through ────────────────────────────────────────
// Button ids: "td-step/<user id>/<guide key>/<step index>". Only the user who started it can turn the pages.

export const STEP_BUTTON = 'td-step/:owner/:guide/:step';

export function stepButtonId(owner: string, guide: Guide, step: number): string {
    return `td-step/${owner}/${shortKey(guide.id)}/${step}`;
}

/** The steps of a guide: its sections that have text or a picture. */
export function stepsOf(guide: Guide) {
    return guide.sections.filter((s) => s.text || s.image);
}

export function renderStep(index: LoadedIndex, guide: Guide, step: number, owner: string): Reply {
    const steps = stepsOf(guide);
    const n = Number.isFinite(step) ? Math.max(0, Math.min(Math.trunc(step), steps.length - 1)) : 0;
    const s = steps[n];
    const url = siteUrl(index, guide.url + (s?.id ? '#' + s.id : ''));
    const title = s && s.title !== guide.title ? `${guide.title} › ${s.title}` : guide.title;
    const e = embed({
        title,
        url,
        description: s?.text || guide.description,
        footer: `Step ${n + 1} of ${steps.length} · ${trail([guide.section, ...guide.path])}`,
        image: s?.image ? imageUrl(index, s.image) : null,
    });
    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
        new ButtonBuilder().setCustomId(stepButtonId(owner, guide, n - 1)).setLabel('Back').setStyle(ButtonStyle.Secondary).setDisabled(n === 0),
        new ButtonBuilder().setCustomId(stepButtonId(owner, guide, n + 1)).setLabel('Next').setStyle(ButtonStyle.Primary).setDisabled(n >= steps.length - 1),
    );
    return { embeds: [e], rows: [row], url, urlLabel: truncate('Open guide', LIMITS.buttonLabel) };
}
