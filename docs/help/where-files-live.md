---
title: Where files live
description: Every folder the launcher, the game and TavernLib use on your PC.
summary:
    - "To open a folder, press `Win+R`, paste the path and press Enter."
    - 'The launcher and your tokens are in `%APPDATA%\\TheModdingTavern`.'
    - 'The game''s settings and logs are in `%APPDATA%\\A Township Tale`.'
    - 'Your game folder is usually `C:\\Games\\Alta\\A Township Tale`. Your mods are in `Mods\\`.'
    - 'Never share your `tokens\\` folder.'
---

# Where files live

To open any of these, press `Win+R`, paste the path and press Enter.

## The launcher and TavernLib

`%APPDATA%\TheModdingTavern`

| File or folder | What it is |
| --- | --- |
| `tavern_launcher.json` | The client launcher's settings: game path, username, saved servers, mod sources, pinned mods. |
| `tokens\` | Your account token for each server. **Keep these safe. Never share them.** |
| `mod_cache\` | Mods the launcher downloaded, so it doesn't download them twice. |
| `client_enabled_addons.json` | Which addons are on in the client launcher. |
| `addon_load_errors.log` | Errors from addons, and from the launcher itself crashing. |
| `last_rejection.json` | Why the last server turned you away, used to fix your mods and rejoin. |

If you also host with the Server launcher, its files are here too: `server_settings.json`, `users.json`, `tavern_server.json` and the console token. See [Config reference](../host/config-reference.md).

## The game's own folder

`%APPDATA%\A Township Tale`

| File or folder | What it is |
| --- | --- |
| `Client\logs\unity-log.csv` | The game's log when you play. Older ones are in `Archives`. |
| `GameConfiguration.json` | Your in-game settings. The launcher's **Game Settings** edits it. |
| `Servers\-1\` | A server's world, if you host one. |

Some settings may be in `%USERPROFILE%\AppData\LocalLow\Alta\A Township Tale` instead.

## Your game folder

Usually `C:\Games\Alta\A Township Tale`, or wherever you installed it.

| File or folder | What it is |
| --- | --- |
| `A Township Tale.exe` | The game. |
| `A Township Tale_Data\Managed\Root.Township.dll` | The game's code. Setup's **Patch** replaces it. |
| `MelonLoader\` and `version.dll` | The mod loader. |
| `MelonLoader\Latest.log` | MelonLoader's log: which mods loaded, and errors. |
| `Plugins\TavernLib.dll` | TavernLib. |
| `Mods\` | Your mods. Each installed mod has its own folder. |
| `UserLibs\` | Libraries that mods need. |
| `UserData\` | Mod settings, like `MelonPreferences.cfg`. |
| `.tavern_mods_meta.json` | What Setup installed and when. |

## The launcher itself

Wherever you extracted it. The `Patch` folder next to the `.exe` holds offline copies of the patch, MelonLoader and TavernLib, for when downloads fail. Keep it there. The `addons` folder holds [launcher addons](../mod/addons/how-addons-work.md).

The update log, if an update goes wrong, is `%TEMP%\tavern_update_log.txt`.
