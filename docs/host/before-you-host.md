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
- A computer that can stay on while people play. The server uses about 2 CPU cores and 4GB of RAM, more while a new world is being made.
- For a public server: either a router you can port forward on, or a VPS.

## Local or public?

A **local** server is only for you, or for people on the same Wi-Fi. You don't need to port forward anything.

A **public** server is one people can join from anywhere. That needs port forwarding (or a VPS) and everything in the box above.

You can start local and make it public later. Nothing about the world changes.

## Next

[Pick how to host](pick-how-to-host.md).
