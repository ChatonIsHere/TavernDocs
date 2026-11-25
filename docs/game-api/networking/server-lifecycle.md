---
title: Server lifecycle
description: How a server starts from /start_server, the bootup steps and events in order, and how it stops.
sidebar_position: 2
---

# Server lifecycle

Server only. This page follows a server from the command line to accepting players, then to shutdown. The types are `ApplicationStartupManager`, `GameModeManager`, `ServerHostingGameMode` (all with no namespace) and `Alta.Networking.Servers.ServerLifetimePipeline` and `ServerHandler`.

## Starting

A TavernLib server is started like this (from the Docker image):

```
A Township Tale.exe -batchmode -nographics /start_server -1 false 1757 /force_offline /fly /access_token ... /refresh_token ... /identity_token ...
```

What happens, in order:

1. The game logs in with the tokens on the command line (see [Command-line flags](command-line.md#login-and-api)).
2. On login, `ApplicationStartupManager.RunStartupActions` runs. It reads `/start_server` and expects three values after it: **server id**, **isHeadless** (`true`/`false`) and **port**. Bad values log "Could not parse ..." and the server doesn't start.
3. Server id `-1` means a local server, made from `MenuSettings.LocalGameServerAccess(0)`. Any other id asks Alta's API for that server, which no longer exists.
4. `GameModeManager.StartServer` makes a `ServerHostingGameMode` and activates it. It loads the server's scene (`ServerInfo.SceneIndex`).
5. If isHeadless is `true` but the process isn't already headless, the game relaunches itself with `-batchmode -nographics` and quits. TavernLib's servers pass `false` and add `-batchmode` themselves, so this never happens.
6. `ServerLifetimePipeline.AttemptToStartServer` opens a server socket on the port (`NetworkManager.CreateSocket(isServer: true, ...)`), sets `NetworkSceneManager.IsServer = true` and makes the `ServerHandler`.
7. `ServerHandler`'s constructor sets `ServerHandler.Current`, picks the save folder, loads `ServerConfiguration.json`, starts the world autosave (if saving is on) and queues its first bootup step.
8. `ServerHandler.Bootup()` runs the bootup steps one at a time: first the handler's own `Initialize` (registers with the API, starts the web server on 1761, raises `GeneralGameEvents.ServerStarted`, starts the API ping loop), then the scene's `Initialize` (loads the global and void chunks, spawns the scene's embedded entities as server, raises `NetworkScene.ServerStarted`).
9. When the queue is empty, `BootupFinished` is raised and the status becomes "Ready".

Players can connect during bootup. Their join waits: the server sends them the bootup status ("Initializing Scene 1/2" and so on) as `ServerStatus` messages until it's done.

## Events in order

| When | Event | Notes |
| --- | --- | --- |
| Handler made | `ServerHandler.Initialized` (static) | Raised from the constructor. `AddBootupStep` and `AddConnectionStep` don't work yet. Also raised by the main menu's dummy server, and with `null` when the server stops. |
| First bootup step | `GeneralGameEvents.ServerStarted` (static) | After the API registration. The scene isn't loaded yet. |
| Scene ready | `NetworkSceneManager.Current.ServerStarted` | Global chunk loaded, embedded entities spawned. Only exists on `NetworkScene`, cast `NetworkSceneManager.Current` to it. |
| All steps done | `ServerHandler.Current.BootupFinished` | Safe point to call `AddConnectionStep`. |
| Each player | `PlayerJoined` / `PlayerLeft` | See [ServerHandler](server-handler.md#events). |
| Stopping | `GeneralGameEvents.ServerEnded` (static) | From `OnServerStopped`, after the socket has closed. |

All of these run on Unity's main thread.

## Adding your own bootup step

`ServerHandler.AddBootupStep(BootupStep step)` queues an async step that runs before players are let in. `BootupStep` is `Task (Action<string> progressNotification)`. The queue only exists between the end of the constructor and the end of `Bootup()`, so `Initialized` is too early (the queue isn't made yet and the call logs "Too late to add bootup step"). The game's own advice in that error is to add steps from an embedded entity's `InitializeAsServer`. From a mod, a postfix on `ServerHandler`'s public constructor works:

```csharp
using System.Threading.Tasks;
using Alta.Api.Client.HighLevel;
using Alta.Networking;
using Alta.Networking.Servers;
using HarmonyLib;

[HarmonyPatch(typeof(ServerHandler), MethodType.Constructor,
    new[] { typeof(ISocket), typeof(IServerAccess), typeof(bool) })]
static class AddMyBootupStep
{
    static void Postfix(ServerHandler __instance)
    {
        __instance.AddBootupStep(async progress =>
        {
            progress("Loading my mod's data");
            await Task.Delay(100);
        });
    }
}
```

`IServerAccess` is in `Alta.Api.Client.dll`, so add a reference to it. The step runs after the handler's own `Initialize` and before the scene loads (the scene's step is added after the constructor returns).

## Stopping

`ServerHandler.StopAsync(ShutdownReason reason)`:

1. Stops the ping loop.
2. Saves the world instantly (`StreamerManager.Instance.SaveWorld(isInstant: true)`, which blocks), unless a wipe is running.
3. Closes the socket, which disconnects everyone.
4. Disposes the web server, raises `GeneralGameEvents.ServerEnded`, tells the API it's stopping.
5. Unloads the save files and sets `ServerHandler.Current` to `null`.

`ServerHostingGameMode.StopModeAsync` calls it, so `GameModeManager.StopCurrentModeAsync(reason)` stops the server the normal way. `ApplicationManager.ExternalOnApplicationQuit(new ShutdownReason(reason, isExpected: true))` quits the whole program, which is what TavernLib's "return to menu" patch does.

A player is saved when they leave (see [Saving](saving.md)). Players still connected at shutdown are saved by the instant world save before the socket closes, since it ends with `Player.SaveAll()`.

## Other types

| Type | What it is |
| --- | --- |
| `GameModeManager` | Static. `CurrentMode`, `CurrentGameServerInfo`, `StartServer`, `JoinServer`, `StartLocalTest`, `StopCurrentModeAsync`, event `ModeChanged`. One mode at a time: starting a second logs "Already have a game mode active". |
| `GameMode` | Abstract base: `IsClient`, `IsServer`, `ActivateAsync()`, `StopModeAsync`. Subclasses: `ServerHostingGameMode`, `JoinedServerGameMode`, `LocalTestGameMode`. |
| `ServerLifetimePipeline` | Static. Opens the server socket and makes the handler. `GetServerRegion()`, `GetServerFleet()`. |
| `ServerLockCollection`, `ServerJoinLock` | `ServerHandler.ServerLocks`. While any lock is in it, every join is refused with the highest lock's message plus ", check Discord". TavernLib's chunk merge command uses one. |
| `GarbageCollectTimer` | On the scene. Enabled on servers; runs a full GC every interval (30 s shipped). TavernLib makes the interval configurable. |

## See also

- [ServerHandler](server-handler.md)
- [Joining a server](joining.md)
- [Command-line flags](command-line.md)
