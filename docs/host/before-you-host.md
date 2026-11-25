---
title: Before you host
description: What you're signing up for when you run a server, and how to keep it and yourself safe.
---

# Before you host

Running your own server is how most people play A Township Tale now. It's not hard, but a public server is a computer that strangers on the internet can reach, so read this page before you open anything up.

:::danger[Read this first]

- **Port forwarding opens your home network to the internet.** Anyone can try to connect to the ports you open, not just your friends. Only forward the ports listed in [Ports and port forwarding](ports.md), and nothing else.
- **Never open the console port (1760) unless you really need to.** The console can do anything to your server. If you do open it, treat your console token like a password.
- **Your console token is the keys to your server.** Whoever has it is an admin. Don't post it in Discord, don't show it in screenshots, and rotate it if it leaks (see [Console and tokens](console-and-tokens.md)).
- **Listing your server shows your IP address.** Everyone who opens Community Servers can see it. If you host from home and don't want that, leave listing off and give your address to friends yourself.
- **Use a password or the whitelist for private games.** Without one, anyone who finds your address can join and change your world.
- **Mods run code on your machine.** Only install mods from sources you trust. The default TavernMods source is checked and scanned, anything else isn't.
- **Keep things updated.** Update the launcher, TavernLib and your OS when updates come out.
- **A VPS keeps your home out of it.** If you want a public server that's up all the time, renting a small server is safer than opening your home router. See [On a VPS](docker/vps.md).
- **If you're under 18, ask whoever looks after your internet before changing router settings.** It's their network too.

:::

## What you need

- Your own copy of the game files. The game can't be downloaded any more, so if you haven't already, [back up your game](../play/getting-started/back-up-your-game.md) first.
- A computer that can stay on while people play. See [How big a server you need](#how-big-a-server-you-need) below.
- For a public server: either a router you can port forward on, or a VPS.

## How big a server you need

What matters most isn't how many people play, it's where they go. Around Town the server stays small. The procedural forest is what eats memory, and the server doesn't give it back until it restarts.

| | Players | CPU | RAM for the server | RAM for the whole machine |
| --- | --- | --- | --- | --- |
| **Minimum** | Up to about 5, mostly around Town | 2 cores | 3.5 GB | 4 GB, plus [swap](troubleshooting.md#docker) |
| **Recommended** | Up to about 12, exploring the forest and caves | 4 cores | 7.5 GB | 8 GB |
| **Big** | Up to 20 | 4 fast cores | 11 GB | 12 GB, and restart it every few hours |

- **Faster cores beat more cores.** The game does most of its work on one main thread. Past 4 cores, more don't help, but a faster CPU does.
- **20 players is about as many as the game copes with.** In testing the server kept up, but its slowest frames took 50 to 100 ms, whatever it ran on.
- **A busy server's memory keeps climbing**, by up to about 1 GB an hour with 20 players. Restart it regularly: turn on **Auto-reboot** in the [Server launcher's settings](windows/settings.md), or with Docker add `0 5 * * * cd ~/att-server && docker compose restart` to `crontab -e` for a restart at 5am every day.
- **A new world uses all the CPU it can** for its first few minutes while it makes the forest. If you cap the server's CPU, keep at least 4 cores.
- **On Windows**, with the Server launcher, the server uses a little less memory, since it doesn't need Wine.

These numbers were measured with the [Canary](https://github.com/ChatonIsHere/Canary) mod on test servers with test players (real game clients run as bots), and no performance mods. Yours will vary with your world, your mods and what your players get up to.

## Local or public?

A **local** server is only for you, or for people on the same Wi-Fi. You don't need to port forward anything.

A **public** server is one people can join from anywhere. That needs port forwarding (or a VPS) and everything in the box above.

You can start local and make it public later. Nothing about the world changes.

## Next

[Pick how to host](pick-how-to-host.md).
