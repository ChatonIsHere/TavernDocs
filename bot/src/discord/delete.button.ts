import { Injectable, Logger } from '@nestjs/common';
import { PermissionFlagsBits } from 'discord.js';
import { Button, type ButtonContext, ComponentParam, Context } from 'necord';
import { DELETE_BUTTON, ReplyService } from './reply.service';

/** The Delete button: the person who ran the command, or anyone who can manage messages, removes the reply. */
@Injectable()
export class DeleteButton {
    private readonly logger = new Logger(DeleteButton.name);

    constructor(private readonly replies: ReplyService) {}

    @Button(DELETE_BUTTON)
    async onDelete(@Context() [interaction]: ButtonContext, @ComponentParam('owner') owner: string) {
        const allowed = interaction.user.id === owner || interaction.memberPermissions?.has(PermissionFlagsBits.ManageMessages);
        if (!allowed) return this.replies.fail(interaction, 'NOT_YOURS');
        try {
            await interaction.deferUpdate();
            await interaction.message.delete();
        } catch (err) {
            // A reply the bot can no longer reach (channel permissions changed): remove it through the interaction instead.
            this.logger.debug(`message.delete failed, trying the webhook: ${(err as Error).message}`);
            await interaction.deleteReply().catch(() => this.replies.fail(interaction, 'FAILED'));
        }
    }
}
