# Adding to the TavernDocs bot

Most of what the bot knows comes from the docs themselves, so most changes need no code. Content changes reach the bot after the next site deploy: within the hour, or straight away with `/admin refresh`.

## Without code

| You want to | Do this |
| --- | --- |
| Make a guide show bullets in `/guide summary:true` | Add a `summary:` list (3 to 5 short bullets) to the page's frontmatter. |
| Make a page easier to find | Add `bot_aliases: [words, people, use]` to its frontmatter. |
| Hide a page from the bot | Add `bot_hidden: true` to its frontmatter. |
| Keep a page out of text search, but still findable by its title | Add `bot_text: false`. For pages that mention everything, like the bot's own page. |
| Teach every search a word | Add a line to `content/aliases.yml`, e.g. `mm: [mod manager]`. |
| Add a canned answer for `/snippet` | Add `content/snippets/<name>.md`. See `content/snippets/README.md`. |
| Make a docs table or a page of questions searchable | Add an entry to `content/sources.yml`. It works in `/search` and `/lookup` straight away. |

Frontmatter example:

```yaml
---
title: Set up the game
description: Point the launcher at your game and let Setup get it ready.
summary:
    - Click Browse and pick A Township Tale.exe.
    - Click Setup, then Automatic Setup.
    - You're done when all three parts say Up to date.
bot_aliases: [setup, install melonloader]
---
```

Write like the rest of the docs: short and plain, no dashes. The voice check covers these files too.

## With code

The bot is NestJS with Necord, in TypeScript. Run it locally:

```bash
cd bot
npm install
cp .env.example .env      # add a bot token and DEV_GUILD_ID
npm run dev
npm test                  # unit tests; also checks the real index if the site has been built
npm run bench             # autocomplete speed against the real index
```

### Give a reference table its own command

Add one line to `REFERENCE_COMMANDS` in `src/sources/reference/reference.commands.ts`:

```ts
{ name: 'port', table: 'port', description: 'Look up a port', option: 'The port number' },
```

### Add a new kind of lookup

Every lookup is a **source** (`src/sources/source.ts`). `/search` and **Find in TavernDocs** go through all of them.

1. Copy `src/sources/snippets/` (the simplest source) to a new folder.
2. In the source: build a `SearchIndex` in `load()`, and draw the reply in `render()` with `discord/style.ts`.
3. Add the class to `src/sources/index.ts`.
4. For its own slash command, add a commands file like `snippets.commands.ts` and list it in `src/app.module.ts`.
5. Add a test next to it, and check `npm test` passes. The render tests make sure every embed fits Discord's limits.

If the source needs new data from the site, add it to `src/index/schema.ts` and to the site plugin that writes it, `src/plugins/bot-index/index.ts` in the site folder. Bump `SCHEMA_VERSION` if an old bot couldn't read the new index.

### Rules that hold everywhere

- Replies go through `ReplyService`. It adds the Open and Delete buttons, applies the cooldown, and turns off pings so text from a search can never mention anyone.
- Never log or store user, server or channel ids. The only thing saved is the anonymous gap count (`src/gaps`). The [privacy page](../docs/help/discord-bot.md) says so, and it has to stay true.
- Autocomplete answers from memory. Don't call the network from it.
