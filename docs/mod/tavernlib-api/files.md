---
title: Files
description: Every file TavernLib reads or writes, on which side, and when.
sidebar_position: 12
---

# Files

Every file TavernLib reads or writes. For what's inside the config files, see the [config reference](../../host/config-reference.md). For the property that gives each path, see [Folders](directories.md).

R is read, W is written.

## TheModdingTavern

`%APPDATA%\TheModdingTavern` (`TavernDirectories.ModdingTavern`). In Docker and on panels, `tavern-config`.

| File | Side | | When |
| --- | --- | --- | --- |
| `server_settings.json` | Server | R W | Read at start and again on logins, joins and console logins. Created with the defaults if missing. Written when a plain password is hashed or the listing token is made. See [Server settings](config/server-settings.md). |
| `users.json` | Server | R W | Read at start, polled every second for roles, read on every login and join. Created if missing. Written on registration, on each join's mod list, and by `player ban` and `player unban`. See [User config](config/user-config.md). |
| `tavern_server.json` | Server | R | Read once at start. Created with the defaults if missing. See [Ports](config/tavern-server.md). |
| `whitelist_requests.json` | Server | R W | Added to when a player asks to join a whitelisted server. Created if missing. |
| `console_token.txt` | Server | R W | The owner console token. Written at start if missing or out of date, and by `token rotate owner`. |
| `server_secret.key` | Server | R W | Signs every console token. Made once if missing, never replaced. |
| `console_tokens.json` | Server | R W | Named tokens. Read at start, written by `token` commands and when a named token logs in (its last use). See [Other config files](config/other-config-files.md#console-tokens). |
| `console_token_log.jsonl` | Server | W | One line per console connect, disconnect, command and refused login. Moved to `console_token_log.jsonl.1` at 5 MB. |
| `mod_repos.json` | Server | R W | Read by the `/modlist` reconcile, written by `modmanager addrepo`. |
| the `/modlist` file | Server | R | Any name. Read once at start. |
| `last_rejection.json` | Client | R W | Written when a server refuses you for mods, for the launcher to fix and rejoin. |
| `launcher_path.txt` | Client | R | Where the launcher is, so TavernLib can start it after a refusal. The launcher writes it. |
| `quick_join` | Client | R W | Quick join is on while it exists. Made or deleted when the `QuickJoin` preference changes. |

Files written through [`ServerConfigFile`](config/server-config-file.md) (the four JSON configs, `console_tokens.json`, `mod_repos.json`) also leave `<file>.bak`, the version before the last write, and briefly `<file>.tmp`.

`blacklist.json` and `whitelist.json` have properties on `TavernDirectories`, but this TavernLib doesn't read them.

## The game folder

The folder with `A Township Tale.exe` (`MelonEnvironment.GameRootDirectory`).

| File or folder | Side | | When |
| --- | --- | --- | --- |
| `Mods\` | Both | R | Scanned at start to tell MelonLoader which build folders to load, and on the server on every ping and join (cached 5 seconds). |
| `Mods\<id>\manifest.json`, `manifest.disabled.json`, `.server\`, `.client_windows\` | Server | W | By the `/modlist` reconcile: installs, updates, enables and disables. Downloads go to a `.tavern_dl_*.part` file first. |
| `UserLibs\` and its `.meta.json` files | Server | W | Libraries installed by reconcile. |
| `UserData\MelonPreferences.cfg` | Client | R W | MelonLoader keeps the `TavernLib` category's `QuickJoin` entry here. |

On a client, the launcher installs mods, not TavernLib.

## The game's own folder

`%APPDATA%\A Township Tale` (`TavernDirectories.ATTSave`). In Docker and on panels, `server-data`. The `document` row is the exception: it's wherever the game's download folder is.

| File or folder | Side | | When |
| --- | --- | --- | --- |
| `Servers\-1\Backups\ServerBackup_yyyy-MM-dd_HH-mm-ss.zip` | Server | W | Automatic backups of `Servers\-1`, leaving out `Backups` and `Logs`. Checked every minute against `server_backup_time`. Not with `/launcherauth`. |
| The game log's `Archives\` folder | Server | W | `unity-log.csv` moved to `unity-log.N.csv`, 20 kept: 10 seconds after start, then whenever it passes 10 MB (checked every minute). Not with `/launcherauth`. |
| `presets\<id>.preset` | Client | R W | Your cosmetic presets, kept locally instead of on Alta's servers. |
| `Command Documentation\` | Both | W | Written by the `document` command, in the game's download folder (`Alta.FileDownload`, one folder per calling user id). It downloads a template from Alta's storage the first time. |

## See also

- [Config reference](../../host/config-reference.md)
- [Where files live](../../help/where-files-live.md)
