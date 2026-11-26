import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NecordModule } from 'necord';
import { GatewayIntentBits } from 'discord.js';
import { envSchema } from './config/env';
import { IndexLoader } from './index/loader.service';
import { SourcesService } from './sources/sources.service';
import { SOURCE_CLASSES } from './sources';
import { GuideCommands } from './sources/guides/guides.commands';
import { TypeCommands } from './sources/types/types.commands';
import { SnippetCommands } from './sources/snippets/snippets.commands';
import { ModCommands } from './sources/mods/mods.commands';
import { LookupCommand, REFERENCE_COMMAND_CLASSES, ReferenceHandler } from './sources/reference/reference.commands';
import { SearchCommands } from './search/search.commands';
import { AdminCommands } from './admin/admin.commands';
import { DocsAutocomplete } from './discord/autocomplete';
import { CooldownService } from './discord/cooldown.service';
import { ReplyService } from './discord/reply.service';
import { DeleteButton } from './discord/delete.button';
import { GapsService } from './gaps/gaps.service';
import { HealthService } from './health/health.service';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true, validationSchema: envSchema }),
        NecordModule.forRootAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                token: config.get<string>('DISCORD_TOKEN')!,
                // Guilds only: no message content or member list, so no privileged intents.
                intents: [GatewayIntentBits.Guilds],
                development: config.get<string>('DEV_GUILD_ID') ? [config.get<string>('DEV_GUILD_ID')!] : false,
            }),
        }),
    ],
    providers: [
        IndexLoader,
        SourcesService,
        ...SOURCE_CLASSES,
        DocsAutocomplete,
        CooldownService,
        ReplyService,
        DeleteButton,
        GapsService,
        HealthService,
        ReferenceHandler,
        GuideCommands,
        TypeCommands,
        SnippetCommands,
        ModCommands,
        LookupCommand,
        ...REFERENCE_COMMAND_CLASSES,
        SearchCommands,
        AdminCommands,
    ],
})
export class AppModule {}
