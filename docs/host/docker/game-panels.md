---
title: Game panels
description: Run the server under Pterodactyl, Pelican, Calagopus or CubeCoders AMP.
---

# Game panels

For Pterodactyl, Pelican and Calagopus (one egg covers all three) and CubeCoders AMP (its own template). If you're running Docker Compose yourself, you don't need this page.

Panels change a lot and not every version gets tested. If a button has moved, have a quick search before asking.

## The images

| Image | For |
| --- | --- |
| `ghcr.io/chatonishere/a-township-container:latest` | Docker Compose |
| `ghcr.io/chatonishere/a-township-container:latest-egg` | Pterodactyl, Pelican and Calagopus |
| `ghcr.io/chatonishere/a-township-container:latest-amp` | CubeCoders AMP |

They run and patch the game the same way. The panel images keep everything in the one directory a panel gives each server.

## Before you start

You provide the game files: a `game-source` folder with `A Township Tale.exe` and `A Township Tale_Data` directly inside it (see [Making the game-source folder](own-machine.md#making-the-game-source-folder)). The server won't start if they're missing or nested in another folder, and says so in the console.

The server needs these ports:

| Port | Protocol | For |
| --- | --- | --- |
| 1757 (`SERVER_PORT`) | UDP | The game |
| 1760 (`RCON_PORT`) | TCP | The console. Keep it closed to the internet unless you need remote admin |
| 1761 (`WEB_PORT`) | TCP | The game's web server |
| 1762 (`AUTH_PORT`) | TCP | TavernLib's login |

All four can be changed. Players only need the server's name or IP, since the launcher finds the rest from the login port. See [Join by name](../srv-records.md).

## Pterodactyl, Pelican and Calagopus

### Importing the egg

1. Download [`egg-a-township-tale.json`](https://github.com/ChatonIsHere/a-township-container/blob/main/egg/egg-a-township-tale.json).
2. In the admin area, go to **Nests** (Pterodactyl) or **Eggs** (Pelican, Calagopus) and click **Import Egg**.
3. Pick the file and a nest or category for it.

### Creating the server

- **Allocations.** The primary allocation is the game port (`1757` by default). Add three more for the console, web server and login, and set **Console port**, **Web server port** and **Login port** to them (`1760`, `1761` and `1762` by default).
- **Resources.** 2 CPU cores and 3.5 GB of RAM for a few players around Town, 4 cores and 7.5 GB if they'll explore the forest. See [How big a server you need](../before-you-host.md#how-big-a-server-you-need). For disk, allow the game (about 4.4GB) plus a couple of GB.

The install script doesn't download anything (there's nothing it legally can). It just reminds you what to upload.

### Uploading the game files

Upload the contents of your `game-source` folder into the server's `game-source` directory (it's created on the first start if it isn't there). Thousands of files over SFTP is painfully slow, so zip the contents, upload the zip, use the file manager's **Unarchive**, then delete the zip.

### First start

The first start copies the Wine prefix into place and downloads MelonLoader, TavernLib and the patch, so it needs internet. The panel shows the server as online once TavernLib logs `Starting auth listening cycle`. Later starts only download what's out of date.

- The server directory holds `game-source`, `.wine` (the prefix), `server-data` (world saves) and `tavern-config` (TavernLib's config). Back up the last two.
- **Auto patch** set to `false` skips patching. To force a full re-patch, delete `.att-patch-meta.json` and restart.
- **Scene** picks the scene: `normal`, `quest` or `tutorial`. Empty keeps whatever `server_settings.json` says.
- **Mod list** keeps mods installed: `Author.Mod` or `Author.Mod@1.2.0`, comma-separated. Or leave it empty and put a `modlist.json` in `tavern-config`. See [Mods on your server](../mods-on-your-server.md).

## CubeCoders AMP

This is the newest and least tested part. If something doesn't line up, please [open an issue](https://github.com/ChatonIsHere/a-township-container/issues) with your AMP version and what the console said.

The node running the instance needs Docker, since the server runs in the `latest-amp` image. That means AMP installed on the host, not in a container. With a Controller/Target setup it's the target that needs it.

### Adding the template

In AMP, go to **Configuration**, **Instance Deployment**, add the configuration repository `ChatonIsHere/a-township-container:amp-templates`, click **Fetch**, and refresh the page.

With Controller/Target, every target that hosts an instance needs the repository too. Templates aren't copied from the controller.

### Creating the instance

1. Create an instance and pick **A Township Tale**.
2. Keep the default ports unless you're running more than one server on the address. Set a memory limit (see [How big a server you need](../before-you-host.md#how-big-a-server-you-need)).
3. Upload the contents of your `game-source` folder into the instance's `game-source` directory. Zip it and unzip it there rather than uploading 4.4GB of loose files.
4. Start it. AMP marks it running once TavernLib logs `Starting auth listening cycle`.

**Auto patch**, **Debug helper**, **Mod list** and the three token fields are the same as the compose setup's `AUTO_PATCH`, `DEBUG`, `MODLIST` and `ATT_*_TOKEN`. Leave the tokens empty.

The rest of the **A Township Tale** settings edit the server's own config files. **Listing** and **Access** (name, password, player limit, region, whitelist, scenes) are TavernLib's `server_settings.json`. **Saving** through **Performance** are the game's `ServerConfiguration.json`. Both files are written on the first successful start, so the values show up after that.

You can type commands into AMP's console. They go to TavernLib's console, and replies show up next to the log once the server has started.

## Building the panel images

Both need the repo root as the build context:

```bash
docker build -f egg/Dockerfile -t a-township-container:egg .
docker build -f amp/Dockerfile -t a-township-container:amp .
```

## Something went wrong?

See [Server troubleshooting](../troubleshooting.md#game-panels).
