---
title: ServerHandler
description: The running server's handler, with its player limit, join and leave events, save utility and config.
sidebar_position: 3
---

# ServerHandler

`Alta.Networking.Servers.ServerHandler` in `Root.Township`. Server only.

There's one per running server. It owns the server socket, the join handler, the save folders and the game's server settings, and it spawns each player once they're let in. Get it from `ServerHandler.Current`. On a client that's `null`, except in the main menu, where the game makes a **dummy** handler (`IsDummyLocalServer` is `true`) just so settings have somewhere to live.

```csharp
var server = ServerHandler.Current;
if (server == null || server.IsDummyLocalServer) return; // not a real server
```

## Members

| Member | What it does | Notes |
| --- | --- | --- |
| `static ServerHandler Current { get; }` | The running handler. | Set in the constructor, `null` again after `StopAsync`. |
| `static event Action<ServerHandler> Initialized` | Raised whenever `Current` changes, including to `null`. | Static, so you can subscribe at mod load. |
| `static int CurrentServerId { get; }` | `-1` in local test, else `JoinedServerInfo.Current.Identifier`. | Meant for clients. |
| `bool IsDummyLocalServer { get; }` | The main menu's stand-in. | |
| `bool IsRunning { get; }` | True from the end of `Initialize` until stop. Controls the API ping loop. | |
| `bool IsBottingUp { get; }` | True while bootup steps run. (Alta's spelling.) | |
| `int PlayerLimit { get; }` | `ServerConfig.Settings.PlayerLimit`. `0` or less means no limit, except on a Quest ("simple") server, where anything outside 1 to 8 becomes 8. | TavernLib replaces it with `server_settings.json`'s `max_players` (24 if that's missing or 0 or less), so a TavernLib server always has a limit. |
| `int Connections { get; }` | Open connections on the socket, including ones still joining. | |
| `SettingsFileAccess<ServerSettings> ServerConfig { get; }` | The game's settings, from `ServerConfiguration.json`. | See [Server settings](server-settings.md). |
| `ServerSaveUtility SaveUtility { get; }` | Save folders and player save loading. | See [Saving](saving.md). |
| `IServerAccess ServerApiAccess { get; }` | Alta's API client for this server. | Mostly dead calls now. |
| `GameServerInfo ServerInfo { get; }` | `ServerApiAccess.ServerInfo`. `Identifier` is `-1` on a TavernLib server. | |
| `ServerConfiguration Config { get; }`, `bool IsUsingConfig` | An allow or block list from Alta's hosting. | Nothing sets it in this build, so it's always `null`. |
| `ServerLockCollection ServerLocks { get; }` | Join locks. While any are in it, joins are refused. | |
| `event Action<Player> PlayerJoined` | A player has been spawned and their save loaded. | Body not spawned yet. |
| `event Action<Player> PlayerLeft` | A player's entity has been saved and destroyed. | |
| `event Action BootupFinished` | All bootup steps done. | |
| `void AddBootupStep(BootupStep step)` | Queue an async step before the server opens. | See [Server lifecycle](server-lifecycle.md#adding-your-own-bootup-step). |
| `void AddConnectionStep(ConnectionStep step)` | Queue an async step every joining player goes through. | See [Joining a server](joining.md#connection-steps). |
| `Task StopAsync(ShutdownReason reason)` | Save, close the socket, deregister. | |
| `Task StopForMigration(ShutdownReason reason)`, `void StopPinging()` | Stop talking to the API without closing. | |
| `Task WipeServer(bool isSettingOffline)`, `void WipeCache()` | Wipe the world, or the file cache. | Destructive. |
| `ServerPlayerConnectionHandlerOld playerJoinHandler` | The join handler. | Private field. Reach it through att-stubs or `AccessTools.Field`. |
| `void SpawnPlayerToClient(Connection, Stream)` | Handles `ClientIsReadyToSpawn`: loads the save, spawns the `Player`, raises `PlayerJoined`. | Private `async void`. |
| `void UserLeft(Connection)`, `void RemovePlayer(IPlayer)` | Saves and removes a leaving player, then raises `PlayerLeft`. | Private. |

## Events

Subscribe from `Initialized`, which you can hook at mod load:

```csharp
using System;
using Alta.Networking.Servers;
using MelonLoader;

public static class JoinLeaveLog
{
    public static void Start()
    {
        ServerHandler.Initialized += OnInitialized;
    }

    private static void OnInitialized(ServerHandler server)
    {
        // Raised again with null when the server stops.
        if (server == null || server.IsDummyLocalServer) return;

        server.PlayerJoined += OnJoined;
        server.PlayerLeft += OnLeft;
        server.BootupFinished += () => MelonLogger.Msg($"Server ready, limit {server.PlayerLimit}");
    }

    private static void OnJoined(Player player)
    {
        // A handler that throws stops the ones after it, so never let one escape.
        try
        {
            MelonLogger.Msg($"{player.UserInfo.Username} ({player.UserInfo.Identifier}) joined in {player.PlayerMode}");
        }
        catch (Exception e)
        {
            MelonLogger.Error(e);
        }
    }

    private static void OnLeft(Player player)
    {
        try
        {
            MelonLogger.Msg($"{player.UserInfo.Username} left");
        }
        catch (Exception e)
        {
            MelonLogger.Error(e);
        }
    }
}
```

What's true when each one fires:

- **`PlayerJoined`**: the `Player` entity exists, has its `UserInfo` and `ConnectionToRemotePlayer`, has been told it's the client's own player, and has loaded its save (states, progression). The body (`PlayerController`) is usually still `null`: the server spawns it once the client reports the spawn chunk loaded. Use `player.PlayerControllerSet` or `player.FinishedLoadingController` to wait for it. See [Player](player.md#events).
- **`PlayerLeft`**: the player has been saved, `PlayerController.OnPlayerLeaving` has run (anything in their hands is either unloaded with them or let go), and the entity has been destroyed. `UserInfo` still works; the body is gone.

Both run on the main thread. `PlayerLeft` runs at the end of the frame the disconnect happened in (the game delays it with `AltaCoroutine.DelayCall`).

:::warning[Unsubscribe, and don't throw]

`PlayerJoined` is a plain multicast event raised inside a `try` that logs "Error in SpawnPlayerToClient". If one handler throws, the ones after it don't run. Steady found one of the game's own objects (`TradeVendor`) doing exactly that after being destroyed. Anything you subscribe from an object that can be destroyed must unsubscribe, or it keeps that object alive and may throw later.

:::

The game doesn't raise `ConsoleEvents.PlayerJoined` or `ConsoleEvents.PlayerLeft` itself. TavernLib does, from a postfix on `Player.InitializePlayerOnServer` and from the join handler's `UserLeft`, so the remote console's subscriptions work.

## Hooking it

- **`PlayerLimit` getter**: TavernLib's postfix sets it from `server_settings.json` (or its default). Your own postfix on it runs in Harmony's order with TavernLib's, so give yours a `[HarmonyPriority]` lower than normal if you want the last word. The game's join check that reads it is `ServerPlayerConnectionHandlerOld.CheckConnectionLimit`, which compares against `Socket.Current.ConnectionCount` (so connections still joining count, including the one asking). TavernLib replaces that check with its own, which counts the same way (see [Joining a server](joining.md#what-tavernlib-changes)).
- **`SpawnPlayerToClient`** is a private `async void`. A prefix or postfix runs only as far as its first `await` (waiting for the scene, then loading the save). Use `PlayerJoined` instead, or a postfix on `Player.InitializePlayerOnServer` (also async, so the postfix runs at its first `await`, after `UserInfo`, the connection and the save are set).
- **`ConnectionCreated(Connection)`** is private and runs for every new connection, before the join request. It sets the connection's message handlers. A postfix is the place to add your own handler to every connection (SyncLib does this). See [Connection messages](messages.md#your-own-message-type).
- **The constructor** `ServerHandler(ISocket, IServerAccess, bool)` is the place to add bootup steps.

## See also

- [Server lifecycle](server-lifecycle.md)
- [Joining a server](joining.md)
- [Player](player.md)
