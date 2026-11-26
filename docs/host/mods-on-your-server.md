---
title: Mods on your server
description: Install mods on a server, keep them installed with a modlist, and how players get matched to them.
summary:
    - "Mods run code on your server, so stick to the default TavernMods source unless you trust another one."
    - "On the Windows Server launcher, stop the server, install mods in **Mod Manager**, then start it again."
    - "Headless servers keep mods with a `modlist.json` in TavernLib's config folder, or the `MODLIST` setting."
    - "Players who join through the launcher get matched to your mods automatically."
    - "To add another mod source, run `modmanager addrepo <url>` in the console."
---

# Mods on your server

Mods on a server work like mods in your game: TavernLib loads whatever's installed in the game folder. Players who join through the launcher get matched to your mods automatically before the game starts.

:::warning

Mods run code on your server. Stick to the default TavernMods source unless you trust the other one. TavernMods checks and scans every mod it lists. Other sources aren't checked by anyone.

:::

## How players get matched

When a player joins, their launcher compares their mods with yours and shows what it'll change. Each mod's author decides how strict it is:

- **Exact version required.** The player needs the same version as your server. The launcher installs it for them.
- **Any compatible version.** The launcher recommends it, but the player can skip it.

Mods that only run on the server (a server-only mod has no client build) need nothing from players.

A player who joins with mods that don't match is refused with "You are missing mods that are required for this server." Their launcher then installs the right versions and joins again.

## Windows Server launcher

1. Stop the server.
2. Open **Mod Manager**, then **Get Mods**, and install what you want. Mods the server needs get installed with it.
3. Start the server again. Mod changes only take effect on the next start.

You can also build a list on the [Server Modlist](https://moddingtavern.github.io/TavernMods/#modlist) page and load it with **Mod Manager**, **Import Modlist**.

If the client and server launchers share a game folder, they share its mods too. That's fine: joining another server never turns off a mod your server runs.

## Headless servers: the modlist

A server without the launcher (Docker, Wine, a panel) keeps its mods in line with a **modlist**: a `modlist.json` file in TavernLib's config folder. On every start, TavernLib installs and updates what the list names (and the mods they need), and turns off any other server mods. It never deletes them.

There are three ways to make one.

**The `MODLIST` setting (Docker and panels).** Put the mods in `.env` (or the panel's **Mod list** field), comma-separated:

```ini
MODLIST=ModdingTavern.TavernEssentials,ChatonIsHere.Steady@26.11.7
```

`Author.Mod` gets the latest version. `Author.Mod@1.2.0` pins that version. The container writes `modlist.json` from it on every start.

**The Server Modlist page.** Pick mods on [moddingtavern.github.io/TavernMods/#modlist](https://moddingtavern.github.io/TavernMods/#modlist). It gives you a `modlist.json` to download and a `MODLIST` value to copy.

**Export it from the launcher.** Set up the mods in the Mod Manager, then **Export Modlist**. Good for copying a setup you tested at home.

Where the file goes:

| Setup | Folder |
| --- | --- |
| Docker | `tavern-config` |
| Panels | `tavern-config` in the server's directory |
| Wine | `~/att-server/config` (see [the Wine guide](wine.md#7-tavernlibs-config-folder-and-ports)) |
| Windows, no launcher | `%APPDATA%\TheModdingTavern` |

The server also needs `/modlist modlist.json` on its command line. The container, the panel images and the Wine `start.sh` add it when the file exists. Then restart the server.

Installing a modlist on the first start can take a few minutes. TavernLib gives it up to 5 minutes before the server carries on.

## Mods from other sources

A modlist only installs from the default TavernMods source and sources you've added on the server. Naming a source inside a modlist doesn't count, so a list someone sends you can't pull in mods from somewhere you didn't choose.

To add one, run this in the server's [console](console-and-tokens.md):

```
modmanager addrepo https://raw.githubusercontent.com/SomeOwner/SomeMods/main
```

It checks the address really is a mod source before adding it. `modmanager list` shows every mod installed and whether it's on.

## Adding mods by hand

You can still drop a mod's `.dll` into the game folder's `Mods` folder. The Mod Manager shows it as **Untracked**. Untracked mods aren't matched for players, so everyone needs to install them the same way.

## Something went wrong?

See [Server troubleshooting](troubleshooting.md#mods).
