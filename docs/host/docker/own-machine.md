---
title: On your own Linux machine
description: Run a-township-container with Docker on a Linux box you own, or in WSL on Windows.
summary:
    - "You need a 64-bit x86_64 Linux machine (or WSL), Docker Engine with Compose, and about 10GB of free disk."
    - "Put your game files directly in `~/att-server/game-source`, with `A Township Tale.exe` and `A Township Tale_Data` inside it."
    - "Create `docker-compose.yml`, then run `docker compose up -d` and `docker compose logs -f`."
    - "The first start is slow, and a new world needs a few minutes to make the forest before anyone joins."
    - "Back up `server-data` (world saves) and `tavern-config` (`server_settings.json`, `users.json`)."
---

# Docker on your own Linux machine

[a-township-container](https://github.com/ChatonIsHere/a-township-container) is a Docker image that runs the game's server under Wine on Linux. You bring the game files, it does the patching, and it keeps MelonLoader, TavernLib and the patch up to date by itself.

This page is for a machine you already have: a home server, an old PC running Linux, or WSL on Windows. Renting one? Use [On a VPS](vps.md) instead. It covers the same setup plus securing a fresh server.

## What you need

- A 64-bit (x86_64) Linux machine. ARM, like a Raspberry Pi, won't work.
- 2 CPU cores and 4 GB of RAM for a few friends around Town, 4 cores and 8 GB if people will explore the forest. See [How big a server you need](../before-you-host.md#how-big-a-server-you-need).
- About 10GB of free disk for the game, the image and your saves.
- Docker Engine with the Compose plugin. [Docker's install guide](https://docs.docker.com/engine/install/) has steps for every distro, or follow the [Installing Docker](vps.md#installing-docker) part of the VPS guide on Ubuntu.
- Your game files. See [Making the game-source folder](#making-the-game-source-folder) below.

:::tip[On Windows]

Run it inside WSL, with Docker Engine installed in your WSL distro, and keep the server folder in the Linux side (for example `~/att-server`, not `/mnt/c/...`). Docker Desktop for Windows has trouble running the game straight from a mounted Windows folder.

:::

## Making the game-source folder

The server runs from its own copy of the game, not the one you play on.

1. Make a copy of your [game backup](../../play/getting-started/back-up-your-game.md).
2. Make sure `A Township Tale.exe` and the `A Township Tale_Data` folder are **directly** inside the folder, not inside another folder. This is the most common setup mistake.

You don't need to patch it. The container does that on every start. A copy you already patched with the launcher works too.

## Setting it up

Make a folder for the server, with the game in `game-source` inside it:

```bash
mkdir -p ~/att-server/game-source
cd ~/att-server
```

Copy your game files into `~/att-server/game-source`, then check:

```bash
ls ~/att-server/game-source
```

It should list `A Township Tale.exe` and `A Township Tale_Data`.

Now make `docker-compose.yml`:

```bash
nano docker-compose.yml
```

Paste this in, then press `Ctrl+O`, `Enter` to save and `Ctrl+X` to exit:

```yaml
services:
    a-township-container:
        image: ghcr.io/chatonishere/a-township-container:latest
        container_name: a-township-container
        restart: unless-stopped
        # time to save the world when stopping
        stop_grace_period: 5m
        # cpus: 4
        # mem_limit: 4g
        volumes:
            - ./game-source:/game-files
            - ./server-data:/root/.wine/drive_c/users/root/AppData/Roaming/A Township Tale
            - ./tavern-config:/root/.wine/drive_c/users/root/AppData/Roaming/TheModdingTavern
            - wine-prefix:/root/.wine
        ports:
            - '${SERVER_PORT:-1757}:${SERVER_PORT:-1757}/udp' # game
            - '127.0.0.1:${RCON_PORT:-1760}:${RCON_PORT:-1760}/tcp' # console, this machine only
            - '${WEB_PORT:-1761}:${WEB_PORT:-1761}/tcp' # the game's web server
            - '${AUTH_PORT:-1762}:${AUTH_PORT:-1762}/tcp' # TavernLib's login
        environment:
            SERVER_PORT: ${SERVER_PORT:-1757}
            RCON_PORT: ${RCON_PORT:-1760}
            WEB_PORT: ${WEB_PORT:-1761}
            AUTH_PORT: ${AUTH_PORT:-1762}
            AUTO_PATCH: ${AUTO_PATCH:-true}
            DEBUG: ${DEBUG:-false}
            SCENE: ${SCENE:-}
            MODLIST: ${MODLIST:-}
            PUID: ${PUID:-}
            PGID: ${PGID:-}
            ATT_ACCESS_TOKEN: ${ATT_ACCESS_TOKEN:-}
            ATT_REFRESH_TOKEN: ${ATT_REFRESH_TOKEN:-}
            ATT_IDENTITY_TOKEN: ${ATT_IDENTITY_TOKEN:-}

volumes:
    wine-prefix:
```

## Starting it

```bash
docker compose up -d
docker compose logs -f
```

The first start is slow. Docker downloads the image, then the container downloads MelonLoader, TavernLib and the patch from GitHub before the game boots, so it needs internet. Press `Ctrl+C` to stop watching the logs. The server keeps running in the background.

:::warning[Wait before joining a new world]

A new world spends its first few minutes generating the forest, using all the CPU it can. Anyone who joins before that finishes gets a broken forest. Give it a few minutes after the logs settle.

:::

Then join from the launcher with the machine's IP. On the same network that's its local IP (`hostname -I` shows it). For players elsewhere, see [Ports and port forwarding](../ports.md).

## Day to day

```bash
docker compose logs -f     # watch the logs
docker compose ps          # is it running?
docker compose restart     # restart it
docker compose down        # stop it (saves first)
docker compose up -d       # start it again
```

Stopping saves the world first. It can take a few minutes while a new world is still generating, so let it finish.

## Where your stuff is

Two folders appear next to the compose file:

- `server-data`: the game's own folder, with your world saves.
- `tavern-config`: TavernLib's config, like `server_settings.json` and `users.json`.

Those are what you back up. The server runs as whoever owns `game-source`, so you can edit them without `sudo`.

## Next

- [Settings and updates](settings-and-updates.md): name, password, scene, mods, updating.
- [Config reference](../config-reference.md): every setting in `server_settings.json`.

## Something went wrong?

See [Server troubleshooting](../troubleshooting.md).
