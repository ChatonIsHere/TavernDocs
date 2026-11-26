import Joi from 'joi';

/** Every setting the bot reads, with its default. See .env.example. */
export const envSchema = Joi.object({
    DISCORD_TOKEN: Joi.string().required(),
    /** Where the site publishes the index (the folder holding manifest.json). */
    INDEX_URL: Joi.string().uri().default('https://townshiptale.dev/bot'),
    /** The site's semantic vectors (chunks.json, vectors.bin). Empty: INDEX_URL with /bot swapped for /semantic. */
    SEMANTIC_URL: Joi.string().uri().allow('').default(''),
    TAVERNMODS_URL: Joi.string().uri().allow('').default('https://raw.githubusercontent.com/ModdingTavern/TavernMods/main/repository.json'),
    TAVERNMODS_PAGE: Joi.string().uri().default('https://moddingtavern.github.io/TavernMods/#mods'),
    /** Register commands in this server only (instant), for development. Unset: global commands. */
    DEV_GUILD_ID: Joi.string().allow('').default(''),
    COOLDOWN_SECONDS: Joi.number().min(0).max(300).default(5),
    DATA_DIR: Joi.string().default('./data'),
    /** 0 turns the health check off. */
    HEALTH_PORT: Joi.number().port().default(0),
    LOG_LEVEL: Joi.string().allow('').default(''),
});
