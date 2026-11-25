---
title: Pick how to host
description: The three ways to run a server, and who each one suits.
---

# Pick how to host

There are three ways to run a server. They all run the same game with the same mods, so players can't tell the difference.

| | Runs on | Good for | You'll need |
| --- | --- | --- | --- |
| [**Windows: Server launcher**](windows/set-up-and-start.md) | Your Windows PC | Playing with friends, trying things out | Nothing extra |
| [**Docker: a-township-container**](docker/own-machine.md) | Linux (a home server, WSL or a VPS) | A server that's always on | Basic Linux and Docker |
| [**Linux: Wine without Docker**](wine.md) | Linux | People who don't want Docker | Comfortable with Linux and Wine |

If you're not sure, start with the **Server launcher**. It has buttons for everything, and you can move your world to Docker later by copying two folders.

## Moving a world between them

A world is two folders. Copy both and the new server picks up where the old one stopped.

| | Windows (Server launcher) | Docker |
| --- | --- | --- |
| World saves | `%APPDATA%\A Township Tale` | `server-data` |
| Server config (`server_settings.json`, `users.json`) | `%APPDATA%\TheModdingTavern` | `tavern-config` |

Stop the server before you copy anything.
