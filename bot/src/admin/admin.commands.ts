import { Injectable, Logger } from '@nestjs/common';
import { Client, InteractionContextType, MessageFlags, PermissionFlagsBits, Team, type ChatInputCommandInteraction } from 'discord.js';
import { Context, createCommandGroupDecorator, type SlashCommandContext, Subcommand } from 'necord';
import { IndexLoader } from '../index/loader.service';
import { GapsService } from '../gaps/gaps.service';
import { ReplyService } from '../discord/reply.service';
import { embed } from '../discord/style';
import { truncate } from '../discord/limits';

// Shown to members with Manage Server. Allowed for them in that server, and for the app's owner anywhere.
const AdminGroup = createCommandGroupDecorator({
    name: 'admin',
    description: 'Bot tools for server managers',
    defaultMemberPermissions: PermissionFlagsBits.ManageGuild,
    contexts: [InteractionContextType.Guild, InteractionContextType.BotDM],
});

@AdminGroup()
@Injectable()
export class AdminCommands {
    private readonly logger = new Logger(AdminCommands.name);
    private owners: Set<string> | null = null;

    constructor(
        private readonly client: Client,
        private readonly loader: IndexLoader,
        private readonly gaps: GapsService,
        private readonly replies: ReplyService,
    ) {}

    /** The application's owner, or every member of its team, read from Discord once. */
    private async ownerIds(): Promise<Set<string>> {
        if (this.owners) return this.owners;
        try {
            const app = await this.client.application!.fetch();
            this.owners = new Set(app.owner instanceof Team ? app.owner.members.map((m) => m.id) : app.owner ? [app.owner.id] : []);
        } catch (err) {
            this.logger.warn(`Couldn't read the application owner: ${(err as Error).message}`);
            return new Set();
        }
        return this.owners;
    }

    private async allowed(interaction: ChatInputCommandInteraction): Promise<boolean> {
        if (interaction.inGuild() && interaction.memberPermissions?.has(PermissionFlagsBits.ManageGuild)) return true;
        return (await this.ownerIds()).has(interaction.user.id);
    }

    @Subcommand({ name: 'refresh', description: 'Load the latest docs index now' })
    async onRefresh(@Context() [interaction]: SlashCommandContext) {
        if (!(await this.allowed(interaction))) return this.replies.fail(interaction, 'OWNER_ONLY');
        await interaction.deferReply({ flags: MessageFlags.Ephemeral });
        const before = this.loader.index?.manifest.build ?? 'none';
        const r = await this.loader.refresh();
        const content = r.error
            ? `Refresh failed, still on ${before}: ${truncate(r.error, 1500)}`
            : r.changed ? `Loaded build ${r.build} (was ${before}).` : `Already up to date: build ${r.build}.`;
        await interaction.editReply({ content, allowedMentions: { parse: [] } });
    }

    @Subcommand({ name: 'stats', description: 'What people searched for and found nothing' })
    async onStats(@Context() [interaction]: SlashCommandContext) {
        if (!(await this.allowed(interaction))) return this.replies.fail(interaction, 'OWNER_ONLY');
        const index = this.loader.index;
        const lines = this.gaps.top(25).map((g) => `\`${g.count}\` /${g.command} ${g.query}`);
        const e = embed({
            title: 'Searches that found nothing',
            description: lines.join('\n') || 'None yet.',
            footer: `Since ${this.gaps.since.slice(0, 10)} · index ${index?.manifest.build ?? 'none'}, loaded ${index?.loadedAt.toISOString().slice(0, 16).replace('T', ' ') ?? 'never'} UTC`,
        });
        await interaction.reply({ embeds: [e], flags: MessageFlags.Ephemeral, allowedMentions: { parse: [] } });
    }
}
