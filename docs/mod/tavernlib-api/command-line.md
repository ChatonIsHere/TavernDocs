---
title: Command-line arguments
description: Every command-line argument TavernLib reads, and TavernArgs.
sidebar_position: 11
---

# Command-line arguments

`TavernLib.TavernArgs` in `TavernLib.dll`. Both sides.

TavernLib reads its arguments with the game's `CommandLineArguments` (in `Alta.CommandLine`, no namespace), which ignores case. `TavernArgs` has the names of TavernLib's own as `const string`s, so your mod can check for them too.

## Server

| Argument | `TavernArgs` | What TavernLib does |
| --- | --- | --- |
| `/start_server` | (the game's `CommandLineArguments.StartServerArgument`) | Starts TavernLib in server mode: console tokens, `TavernManager`, roles, the login server, backups. Without it, TavernLib runs as a client. |
| `/launcherauth` | `DontManageAuth` | The Windows Server launcher is in charge. TavernLib doesn't run its login server, ignores `/modlist` (with a warning), doesn't archive logs or make backups, ignores whitelist requests, and only turns the whitelist on from `whitelist_enabled`. `TavernManager` and its configs are still there. |
| `/modlist <file>` | `ModsListFile` | Reconciles `Mods` with that modlist before mods load. A relative path is under `TheModdingTavern`. See [Sources and reconcile](mod-manager/sources-and-reconcile.md#modreconciler). |
| `/questScene` | `QuestScene` | Runs the Quest scene (scene index 4). Also the scene reconcile and the listing go by. |
| `/tutorialScene` | `TutorialScene` | Runs the tutorial scene (scene index 1). Beats `/questScene`. |
| `/listing_api <url>` | `ListingApi` | Where the Community Servers listing is sent. Default `http://themoddingtavern.com:1763`. For testing against a local stub. |

## Client

| Argument | `TavernArgs` | What TavernLib does |
| --- | --- | --- |
| `/join_local_server` | `JoinLocalServer` | Skips the game's startup and joins a server straight away. |
| `/dev_server_ip <ip>` | `DevServerIp` | The address for `/join_local_server`. Default `127.0.0.1`. |
| `/dev_server_port <port>` | `DevServerPort` | Its game port. Default `1757`. |
| `/dev_server_web_port <port>` | `DevServerWebPort` | Its web port, which the launcher gets from the server's login reply. Without it the game uses 1761. |
| `/tavern_rejoin` | `Rejoin` | The launcher is rejoining after installing a server's mods. A refusal now doesn't hand over to the launcher again, so it can't loop. |
| `/force_offline` | (the game's) | The launcher passes it on its own launches. TavernLib takes it to mean the launcher is watching, so it doesn't start the launcher itself after a mod refusal. |

## Both

| Argument | What TavernLib does |
| --- | --- |
| `/debug_helper` | Registers `DebugHelper`: the game's NLog output goes to MelonLoader's log too, with on-screen toggles per level. |

## Checking for a server

The guides ([Client, server or both](../tavernlib/client-server-or-both.md#telling-them-apart-in-code)) check `Environment.GetCommandLineArgs()` for `/start_server`, which works without any references. If you already reference `Alta.CommandLine`, this is the same check TavernLib makes:

```csharp
using TavernLib;

public static class Launch
{
    public static bool IsServer => CommandLineArguments.Contains(CommandLineArguments.StartServerArgument);
    public static bool QuestScene => CommandLineArguments.Contains(TavernArgs.QuestScene);
    public static bool LauncherRunsServer => CommandLineArguments.Contains(TavernArgs.DontManageAuth);

    public static string ModList =>
        CommandLineArguments.TryGetNextArguments(TavernArgs.ModsListFile, 1, out var args) ? args[0] : null;
}
```

- `Contains` ignores case.
- `TryGetNextArguments(name, count, out values)` gives the `count` arguments after `name`, with their case kept. It's `false` if `name` isn't there or there aren't enough after it.
- Don't use `NetworkSceneManager.IsServer` to tell a server from the game. It starts `false`, so it's `false` during mod start-up even on a server, and the game's local scene (`LocalNetworkScene`) sets it to `true` on a client.

## See also

- [Client, server or both](../tavernlib/client-server-or-both.md)
- [Command-line flags](../game-api/networking/command-line.md) for the game's own flags
- [CommandLineArguments](../game-api/console-and-utilities/startup-and-app-state.md#commandlinearguments) in the game API
- [Files](files.md)
