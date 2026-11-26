import { Injectable, Logger } from '@nestjs/common';
import {
    ActionRowBuilder, ButtonBuilder, ButtonStyle, MessageFlags,
    type ButtonInteraction, type ChatInputCommandInteraction, type InteractionReplyOptions, type MessageContextMenuCommandInteraction,
} from 'discord.js';
import { CooldownService } from './cooldown.service';
import { errorText, type ErrorKey } from './errors';
import { LIMITS, truncate } from './limits';
import type { Reply } from '../sources/source';

type Replyable = ChatInputCommandInteraction | MessageContextMenuCommandInteraction | ButtonInteraction;

/** "td-del/<user id>": the Delete button on every reply. */
export const DELETE_BUTTON = 'td-del/:owner';

/**
 * Every reply goes through here, so these hold everywhere:
 * - public replies count against the user's cooldown
 * - mentions never ping (search text is shown back, and "@everyone" typed into a query must stay text)
 * - each reply gets an Open link and a Delete button
 */
@Injectable()
export class ReplyService {
    private readonly logger = new Logger(ReplyService.name);

    constructor(private readonly cooldown: CooldownService) {}

    payload(reply: Reply, userId: string): InteractionReplyOptions {
        const actions = new ActionRowBuilder<ButtonBuilder>();
        if (reply.url) actions.addComponents(new ButtonBuilder().setStyle(ButtonStyle.Link).setURL(reply.url).setLabel(truncate(reply.urlLabel ?? 'Open', LIMITS.buttonLabel)));
        actions.addComponents(new ButtonBuilder().setCustomId(`td-del/${userId}`).setStyle(ButtonStyle.Secondary).setLabel('Delete'));
        return { embeds: reply.embeds, components: [...(reply.rows ?? []).slice(0, 4), actions], allowedMentions: { parse: [] } };
    }

    /** Post a reply publicly, unless the user is on cooldown. */
    async send(interaction: ChatInputCommandInteraction | MessageContextMenuCommandInteraction, reply: Reply): Promise<void> {
        const wait = this.cooldown.take(interaction.user.id);
        if (wait) return this.fail(interaction, 'COOLDOWN', { seconds: wait });
        await interaction.reply(this.payload(reply, interaction.user.id));
    }

    /** Replace the message a button is on (step-through). */
    async update(interaction: ButtonInteraction, reply: Reply, ownerId: string): Promise<void> {
        await interaction.update({ ...this.payload(reply, ownerId), allowedMentions: { parse: [] } } as never);
    }

    /** A private error with its code. */
    async fail(interaction: Replyable, key: ErrorKey, vars: Record<string, string | number> = {}): Promise<void> {
        const content = errorText(key, vars);
        try {
            if (interaction.replied || interaction.deferred) await interaction.followUp({ content, flags: MessageFlags.Ephemeral, allowedMentions: { parse: [] } });
            else await interaction.reply({ content, flags: MessageFlags.Ephemeral, allowedMentions: { parse: [] } });
        } catch (err) {
            this.logger.warn(`Couldn't send ${key}: ${(err as Error).message}`);
        }
    }
}
