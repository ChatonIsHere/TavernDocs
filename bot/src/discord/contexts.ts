import { ApplicationIntegrationType, InteractionContextType } from 'discord.js';

/**
 * Where commands work: added to a server, or installed by a person on their own account (then usable in any server,
 * DMs and group chats). Spread into each command's options.
 */
export const EVERYWHERE = {
    contexts: [InteractionContextType.Guild, InteractionContextType.BotDM, InteractionContextType.PrivateChannel],
    integrationTypes: [ApplicationIntegrationType.GuildInstall, ApplicationIntegrationType.UserInstall],
};
