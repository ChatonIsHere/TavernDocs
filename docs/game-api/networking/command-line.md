---
title: Command-line flags
description: The command-line flags the game reads that matter for servers and clients, what each does in the code, and the ones TavernLib adds.
sidebar_position: 15
---

# Command-line flags

The game reads its command line through `CommandLineArguments` (no namespace, in `Alta.CommandLine.dll`). Flags are matched **without caring about case**, and the values after a flag keep their case. Its members, its quirks and how to read your own flags are on [Startup and app state](../console-and-utilities/startup-and-app-state.md#commandlinearguments). This page is the server's view of the flags.

```csharp
public static bool IsServer => CommandLineArguments.Contains(CommandLineArguments.StartServerArgument);

public static int? ServerPort =>
    CommandLineArguments.TryGetNextArguments("/start_server", 3, out var args) && int.TryParse(args[2], out var port)
        ? port
        : (int?)null;
```

`CommandLineArguments` works from the very start, before the game has loaded anything, so it's the safe way to tell a server from a client in `OnInitializeMelon`.

## Servers

| Flag | What it does |
| --- | --- |
| `/start_server <id> <isHeadless> <port>` | Start a server once logged in. `-1` is a local server (what TavernLib uses). `isHeadless` is `true` or `false`; `true` in a non-headless process makes the game relaunch itself headless and quit. See [Server lifecycle](server-lifecycle.md). |
| `-batchmode`, `-nographics` | Unity's own. Either makes `ApplicationManager.IsHeadless` true: no main menu after startup, server garbage collection timer, things that need a GPU switched off. |
| `/console` | Opens the game's own console window on start, for accounts with the `debug_features` permission. |
| `/wipe` | **Wipes the world** when the server starts. |
| `/heartbeat <program> <ms>` | Once the server starts, launches `<program>` as a watchdog, passing it the interval, the server's name, the process id and the command line, and sends it heartbeats. |
| `/db_settings` | Read server settings from Alta's database, not `ServerConfiguration.json`. |
| `/app_data_path <path>` | Where saves and the game's data go, instead of `%APPDATA%\A Township Tale`. Rover gives each bot its own. |
| `/remote_saves <type> <path>`, `/s3_credentials <key> <secret>` | Keep saves in S3 (`s3`, `bucket:path`) or another folder. |
| `/logging_config_path <path>`, `-logFile <path>` | NLog config, and Unity's log file. |
| `/agones` | Alta's hosting. Skips the launch analytics. |

## Clients

| Flag | What it does |
| --- | --- |
| `/fly` | Play in fly mode (keyboard and mouse, `PlayerMode.Fly`), with no VR. Servers run with it too, so they don't start VR. |
| `/vrmode <mode>` or `-vrmode <mode>` | `valve` or `openvr` picks SteamVR (`PlayerMode.OpenVR`). Anything else logs "Unknown VR mode". Without it the game uses OpenXR. `/fly` wins over this. |
| `/join_server <id>` | Join a server by id after login, through Alta's API (gone). |
| `/source <name>` | The launch source for analytics. |

## Login and API

| Flag | What it does |
| --- | --- |
| `/access_token <jwt>`, `/refresh_token <jwt>`, `/identity_token <jwt>` | Log in with these tokens. All three are needed. The game scrubs them from the command line it logs. |
| `/login <user> <password>`, `/login_hash <user> <hash>` | Log in with a name and password. A headless relaunch needs one of these. |
| `/oauth_login <a> <b> <c>` | OAuth login (three values). |
| `/force_offline` | Use the offline API clients from the start. TavernLib's launcher passes it to every game it starts, and TavernLib uses it to tell its launcher is watching. |
| `/ignore_offline` | Don't drop to offline mode when there's no internet. |
| `/development_api`, `/local_api`, `/latest_api`, `/test_api`, `/custom_api <url>` | Point the API client at another endpoint. `/local_api` is `http://localhost:13490/`. |
| `/vivox_sandbox` | Vivox's test servers (voice is gone). |
| `/mods_path <path>` | Where the game's own C# script loader (`DemoLoadScripts`, from Alta's own modding tests) looks. Not MelonLoader. |

Defined in `CommandLineArguments` but not read anywhere we found in this build: `/autocam`, `/listen_to_api`, `/remote_console`, `/version`, `/spot_instance`, `/skip-tests`, `/hosting_platform`.

## Added by TavernLib

TavernLib reads its own flags with the same `CommandLineArguments`, and `TavernLib.TavernArgs` holds their names. The ones that change how the game networks:

- `/join_local_server` (client) skips the main menu and joins a server straight away, at `/dev_server_ip` (default 127.0.0.1) and `/dev_server_port` (default 1757). It's a prefix on `ApplicationStartupManager.RunStartupActions`.
- `/tutorialScene` and `/questScene` force scene index 1 or 4. Scene 4 also adds Quest to the server's `Target`, which makes it a "simple server" (see [Player](player.md#platformtarget)).
- `/launcherauth` (server) hands logins, the whitelist, backups and `Mods` to the Windows launcher.

TavernLib's own server mode is decided by `/start_server`, the same as the game's. Every TavernLib flag, with its `TavernArgs` name, is on [TavernLib's command-line arguments](../../tavernlib-api/command-line.md).

## The Docker image's server line

```
-batchmode -nographics /start_server -1 false 1757 /force_offline /fly /access_token <jwt> /refresh_token <jwt> /identity_token <jwt> --melonloader.hideconsole
```

`/fly` keeps the server from starting VR, `/force_offline` keeps it off Alta's API, and the tokens are fixed offline ones. Ports, scene and `/modlist` come from its settings.

## See also

- [Server lifecycle](server-lifecycle.md)
- [Joining a server](joining.md)
- [Client, server or both](../../mod/tavernlib/client-server-or-both.md)
