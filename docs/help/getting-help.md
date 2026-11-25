---
title: Getting help
description: Where to ask, what to include, and what never to send.
---

# Getting help

Ask on [The Modding Tavern's Discord](https://discord.gg/jNQUUDAYSj). Everyone there is a volunteer, so the more you tell them up front, the quicker they can help.

## Before you ask

Have a look at the troubleshooting page for what you were doing. Your problem might already be there:

- [Playing](../play/troubleshooting.md)
- [Hosting](../host/troubleshooting.md)
- [Making mods](../mod/troubleshooting.md)

## What to include

- **What you were trying to do**, and what happened instead.
- **The exact error message.** Copy it, or take a screenshot.
- **Your launcher version.** It's at the top of the launcher, like `v1.8.6`.
- **Your headset**, if it's about playing: SteamVR, Quest over Link, or the standalone Quest.
- **Your logs.** The useful ones are:
  - `MelonLoader\Latest.log` in your game folder
  - `%APPDATA%\A Township Tale\Client\logs\unity-log.csv` for playing
  - the server's log, if you host (see [where the logs are](../host/troubleshooting.md))

## Never send these

:::danger

These are keys to your accounts and your server. Nobody helping you needs them, and anyone who asks for them is up to no good.

- Anything in `%APPDATA%\TheModdingTavern\tokens`
- Your **console token**, or `console_token.txt`
- `server_secret.key`
- `users.json` (it has every player's token in it)

Check screenshots for them before you post. If you've shared one by accident, see [If a token leaks](../host/console-and-tokens.md#if-a-token-leaks) for console tokens, or ask the server's admin to reset your account token.

:::

## Game files

We can't give out the game's files, and staff won't help you find them. If you've lost your copy, you can ask the community.

## Found a bug?

Open an issue on the project's GitHub, with the same details as above:

- [TavernLauncher](https://github.com/ModdingTavern/TavernLauncher/issues)
- [TavernLib](https://github.com/ModdingTavern/TavernLib/issues)
- [TavernMods](https://github.com/ModdingTavern/TavernMods/issues), for the mod index and its site
- [a-township-container](https://github.com/ChatonIsHere/a-township-container/issues), for Docker and panels
