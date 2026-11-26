---
title: Discord bot
description: The TavernDocs bot links guides, game types and answers in Discord. What it does, what it keeps, and the rules for using it.
# It names every command and what the bot keeps, so it would match almost any question. Found by name only.
bot_text: false
---

# The TavernDocs Discord bot

The TavernDocs bot answers questions in Discord with links to these docs. Start typing a command and it suggests matches as you type.

<div className="bot-install">
  <a className="button button--primary button--lg" href="https://discord.com/oauth2/authorize?client_id=1575473485227098202&permissions=0&integration_type=0&scope=bot+applications.commands">Add to a server</a>
  <a className="button button--secondary button--lg" href="https://discord.com/oauth2/authorize?client_id=1575473485227098202&integration_type=1&scope=applications.commands">Add to your account</a>
</div>

**Add to a server** puts it in a server you manage, for everyone there. It asks for no permissions: it only answers commands. **Add to your account** lets you use it yourself in any server, DM or group chat, even where it isn't added. A server can still turn off apps added this way in its settings.

## Commands

| Command | What it does |
| --- | --- |
| `/guide` | Links a guide. Add `summary` for the short version, or `steps` to go through it one step at a time (only you see the steps in a server). |
| `/type` | Looks up a game or TavernLib type, or one of its members, like `PlayerChunkManager.WipeChunk`. |
| `/search` | Searches everything below at once. |
| `/config` | A setting from the [config reference](../host/config-reference.md). |
| `/command` | A console command. |
| `/log` | What a line in the game's log means. |
| `/faq` | An answer from the [FAQ](faq.md). |
| `/troubleshoot` | The fix for a common problem. |
| `/snippet` | A short answer to a common question, like where your logs are. |
| `/mod` | A mod on [TavernMods](https://moddingtavern.github.io/TavernMods/). |
| `/lookup` | Any of the reference tables, picked from a list. |
| **Find in TavernDocs** | Right-click a message, then **Apps**: suggests pages that match it. |
| `/admin refresh` and `/admin stats` | For server managers: load the newest docs now, and see searches that found nothing. |

Replies are posted in the channel. The person who asked, or anyone with **Manage Server**, can remove one with its **Delete** button.

## For server admins

- **Choosing where it works:** in **Server Settings**, **Integrations**, pick the bot to allow or block each command in certain channels or for certain roles.
- **Permissions:** it answers through Discord's commands, so it needs no special permissions, and it doesn't read messages on its own.
- **Spam:** each person can post one reply every few seconds. Suggestions while typing aren't limited.

## Privacy

This is everything the bot does with information, in plain words.

**What it keeps.** When a search finds nothing, the bot adds one to a count for that command and the text that was searched, like `/config max player`. That count is the only thing it saves. It doesn't save who searched, or which server or channel it was in. We use it to see what the docs are missing.

**What it sees but doesn't keep.**

- **Commands:** when you use a command, Discord sends the bot what you typed, along with your user and server ids. The bot uses them to answer and to run the **Delete** button, then forgets them.
- **The cooldown:** to stop spam, the bot remembers your user id for a few seconds after you post, in memory only. It's gone within ten minutes, and whenever the bot restarts.
- **Find in TavernDocs:** this sends the bot the text of the message you picked. The bot searches for it and doesn't keep it. If nothing matches, the searched words count toward the gap list above, without anything to say who wrote them.

**What it doesn't do.** It doesn't read messages unless you use **Find in TavernDocs** on one. It doesn't keep a list of users. It doesn't store messages, files or anything people post. It doesn't sell or share anything, and there's nothing personal to share.

**Logs.** The bot's own logs record errors and slow searches, with the search text but no user or server ids. They're kept for 30 days, then deleted.

**Discord.** Everything goes through Discord, which handles it under [Discord's privacy policy](https://discord.com/privacy).

**Questions or removal.** Ask on [The Modding Tavern's Discord](https://discord.gg/jNQUUDAYSj). Since nothing saved can be tied to you, there's nothing of yours to look up or delete, but we're happy to explain.

## Terms

By using the bot, you agree to these:

- **It's free and as is.** It's a volunteer project. It might be wrong, out of date, or offline, and we can't promise otherwise. Check the page it links to before relying on an answer.
- **Use it fairly.** Don't use it to spam, to get around a server's rules, or to try to break it. Server admins decide where it can be used in their server.
- **We can change it.** The bot, its commands and these terms can change. A change to these terms is shown on this page.
- **We can stop it.** We can stop the bot answering in a server, or stop running it, at any time.
- **Not official.** The Modding Tavern isn't made by or affiliated with Alta or Discord.

Last changed: 26 November 2026.
