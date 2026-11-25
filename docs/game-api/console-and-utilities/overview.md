---
title: Console, utilities and Alta assemblies
description: The game's console and command system, the helpers mods use every day, and what is in each of Alta's separate assemblies.
sidebar_position: 1
---

# Console, utilities and Alta assemblies

This area covers the parts of the game that aren't gameplay: the console and its commands, the update loop, logging, the command line, settings and files, and the 29 small `Alta.*` assemblies that sit next to `Root.Township.dll`. Most mods touch at least one of these. Commands are the usual way to give hosts control of a mod, and `UpdateModule`, NLog and `CommandLineArguments` are what the game itself uses everywhere.

Everything here was checked against the decompiled server build that Tavern installs (assembly version 0.0.39.2; clients run it too), and compared with the original client download (`main-1.7.2.1.42203`), which has the server code compiled out. Where they differ, the page says so.

## Pages

| Page | What's in it |
| --- | --- |
| [Writing commands](commands.md) | `CommandService`, `CommandCollection.Collect`, `[Module]`, `[Command]` and every other console attribute, requirements and permissions. |
| [Arguments and results](arguments-and-results.md) | How a line is split and matched, type converters, what a command's return value turns into, errors. |
| [Built-in commands](built-in-commands.md) | Every module the game registers, one line each, and which ones only the server build has. |
| [Remote console](remote-console.md) | The websocket console on 1760, its JSON, logins, the 1758 and REST consoles, what TavernLib changes. |
| [Console events](console-events.md) | `websocket subscribe`, every built-in event, log events, making your own. |
| [Logging](logging.md) | The game's NLog setup, its `Debug` class, `NLog.config`, where log files go. |
| [Update modules](update-modules.md) | `UnityUpdateManager`, `UpdateModule` (the "Shared Update Module" Canary records) and `BudgetedUpdateModule`. |
| [Threads, coroutines and the timeline](threads-coroutines-and-timeline.md) | `MainThreadDispatcher`, `AltaCoroutine`, `Timeline` (`Alta.Timing.Runtime`), `RateLimiter`. |
| [Startup and app state](startup-and-app-state.md) | `CommandLineArguments` and every flag the game reads, `ApplicationManager`, headless detection, `AltaSceneManager`, player mode and XR. |
| [Settings and files](settings-and-files.md) | `SettingsManager`, `GameSettings`, `SettingsFileAccess`, `AltaIO` folders, `PlayerPreferences`, `GlobalSettings`. |
| [Event buses and services](event-buses-and-services.md) | The township event bus (crafting, forging, grabbing), analytics events, VContainer scopes and `StaticLifetimeScope`. |
| [Alta's web API](alta-web-api.md) | `Alta.Api.Client`: the dead `webapi.townshiptale.com` client, what calls it, what times out, what mods stub out. |
| [Alta assemblies](alta-assemblies.md) | A section for each `Alta.*` assembly: what's in it and what matters to a modder. |

## Where things live

| You want | Type | Assembly |
| --- | --- | --- |
| Add console commands | `Alta.Console.CommandService`, `ModuleAttribute`, `CommandAttribute` | `Root.Township` |
| Push data to console clients | `Alta.Console.ConsoleEvent<T>` | `Root.Township` |
| Run something every frame without a `MonoBehaviour` | `UnityUpdateManager.UpdateModule` | `Root.Township` (no namespace) |
| Get back to Unity's main thread | `Alta.Core.Threading.MainThreadDispatcher` | `Township.Core.Runtime` |
| Call something later in game time | `Alta.Timing.Timeline` | `Alta.Timing.Runtime` |
| Log into the game's own logs | NLog `LogManager.GetLogger` | `NLog` |
| Read a `/flag` | `CommandLineArguments` (no namespace) | `Alta.CommandLine` |
| Know if there's no window | `ApplicationManager.IsHeadless` | `Root.Township` (no namespace) |
| Find the game's data folders | `Alta.Utilities.AltaIO` | `Alta.IO` |
| Hear about crafting on the server | `ATT.EventBus.EventBusLocator`, `ItemCraftedEvent` | `Root.Township` |

`Township.Core.Runtime` isn't one of the `Alta.*` assemblies, but it holds a lot of the plumbing they use: `MainThreadDispatcher`, the `Alta.Core.Settings` base classes, `Alta.Core.EventBus`, `StaticLifetimeScope` and many extension methods. It's covered where it comes up.

## Traps worth knowing first

- **Command and alias names must be lower case.** The typed line is lower-cased before matching, but your names aren't. `[Command("Ping")]` can never be run.
- **A module with the same name as another replaces it.** `Collect` removes any top-level module with the same name first. Call yours `player` and the game's (or TavernLib's) `player` is gone.
- **A failed requirement hides the command.** `[ServerOnly]` on a client in a game, or a missing permission, gives "Command not found", not "not allowed". (In a client's main menu `[ServerOnly]` passes: the menu runs a dummy `ServerHandler`.)
- **`PlatformProvider.IsServer()` only means "running on Linux".** A Windows server is a client by that test. Check the `/start_server` flag instead, or `ServerHandler.Current` (which is a dummy in a client's main menu: check `IsDummyLocalServer`).
- **A method that throws in an `UpdateModule` is removed for good.** The game logs the error once and never calls it again.
- **`MainThreadDispatcher.Run` always queues,** even when you're already on the main thread. The action runs in the dispatcher's next `Update`, not straight away.
- **Alta's web services are gone.** Anything that calls `ApiAccess.ApiClient` waits for a timeout unless a mod answers first. See [Alta's web API](alta-web-api.md).

## See also

- The guide pages [Console commands](../../mod/tavernlib/console-commands.md) and [Client, server or both](../../mod/tavernlib/client-server-or-both.md).
- [Console and tokens](../../host/console-and-tokens.md) for the host's side of the console.
- The Networking area: [ServerHandler](../networking/server-handler.md), [Sockets and connections](../networking/connections.md) for `Connection`, and [Stream](../networking/stream.md) for `Alta.Serialization`.
