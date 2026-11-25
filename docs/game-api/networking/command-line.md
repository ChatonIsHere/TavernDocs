---
title: Command-line flags
description: The command-line flags the game reads that matter for servers and clients, what each does in the code, and the ones TavernLib adds.
sidebar_position: 15
---

# Command-line flags

The game reads its command line through `CommandLineArguments` (no namespace, in `Alta.CommandLine.dll`). Flags are matched **without caring about case**, and the values after a flag keep their case.

| Member | What it does |
| --- | --- |
| `static bool Contains(string argument)` | Is the flag there. |
| `static bool TryGetNextArguments(string argument, int numberOfArgumentsExpected, out string[] nextArguments, bool isOptionalArgs = false)` | The values after a flag. `false` if the flag is missing or there aren't enough values after it. |
| `static List<string> AllArguments` | Every argument, lowercased. |
| `static string RawCommandLine` | The command line without the program's path. |
| `const string StartServerArgument = "/start_server"` and others | The flag names. They're `const`, so they're compiled into your mod. |

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
| `/heartbeat` | Starts Alta's heartbeat monitor. |
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

`TavernLib.TavernArgs` holds these names.

| Flag | Side | What it does |
| --- | --- | --- |
| `/join_local_server` | client | Instead of the main menu, join a server straight away (a prefix on `ApplicationStartupManager.RunStartupActions`). Address from `/dev_server_ip` (default 127.0.0.1), port from `/dev_server_port` (default 1757). |
| `/dev_server_ip <ip>` | client | The address for `/join_local_server`. |
| `/dev_server_port <port>` | client | The game port for `/join_local_server`, and for the local `GameServerInfo`. |
| `/dev_server_web_port <port>` | client | The server's web port (from TavernLib's auth reply), if it isn't 1761. |
| `/tutorialScene`, `/questScene` | both | Force scene index 1 (tutorial) or 4 (quest; also marks the server as allowing Quest). On a server, also what the listing says. |
| `/modlist <file>` | server | A mod list to make the `Mods` folder match before loading. |
| `/launcherauth` | server | TavernLauncher manages logins, the whitelist, backups and `Mods` for this server, so TavernLib doesn't. |
| `/listing_api <url>` | server | The server list to report to. |
| `/tavern_rejoin` | client | Set by the launcher on a rejoin after installing a server's mods. |
| `/debug_helper` | both | Copies the game's own NLog output into MelonLoader's log. |

TavernLib's own server mode is decided by `/start_server`, the same as the game's.

## The Docker image's server line

```
-batchmode -nographics /start_server -1 false 1757 /force_offline /fly /access_token <jwt> /refresh_token <jwt> /identity_token <jwt> --melonloader.hideconsole
```

`/fly` keeps the server from starting VR, `/force_offline` keeps it off Alta's API, and the tokens are fixed offline ones. Ports, scene and `/modlist` come from its settings.

## See also

- [Server lifecycle](server-lifecycle.md)
- [Joining a server](joining.md)
- [Client, server or both](../../mod/tavernlib/client-server-or-both.md)
