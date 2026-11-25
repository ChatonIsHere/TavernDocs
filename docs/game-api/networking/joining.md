---
title: Joining a server
description: The join handshake on the client and the server, every check the server makes, and where TavernLib adds its own.
sidebar_position: 4
---

# Joining a server

Both sides. A join is a short conversation over one `Connection`, then the client loads the scene and the server spawns its player. The client half is `JoinedServerGameMode` and `JoinServerPipeline` (no namespace). The server half is `Alta.Networking.Servers.ServerPlayerConnectionHandlerOld` and `ServerHandler`.

## The conversation

| # | From | Message | What it carries |
| --- | --- | --- | --- |
| 1 | client | kcp2k connect | When the transport connects, both sides raise `Connection.Approved`. Nothing about the player is known yet. |
| 2 | client | `RequestJoin` (9) | `RequestJoinMessage`: player id, identity token (a JWT), `PlayerMode`, `PlatformTarget`, game version string. |
| 3 | server | `RequestJoinResponse` (10) | `ConfirmJoinMessage` with `isAllowed: true, isDoingPrerequisites: true` and a `JoinedServerInfo` (id, name). Or a refusal with an error string. |
| 4 | server | `ServerStatus` (7), any number | A status string while bootup or connection steps run. The client shows it if it doesn't change for 2 seconds. |
| 5 | server | `RequestJoinResponse` (10) | `isAllowed: true, isDoingPrerequisites: false`: you're in. |
| 6 | client | (loads the scene) | `JoinedServerGameMode.LoadGameScene` sets `NetworkSceneManager.IsServer = false`, loads the scene, sets up the client scene. |
| 7 | client | `ClientIsReadyToSpawn` (11) | Empty. If it doesn't arrive within 2 minutes the server disconnects with "Client did not respond with 'ready to spawn'". |
| 8 | server | spawns | `ServerHandler.SpawnPlayerToClient` loads the save, spawns the `Player`, sends the scene's state, then `SetLocal` to that player. |

`RequestJoinMessage` and `ConfirmJoinMessage` are `internal`; you can use them through att-stubs' publicized `Root.Township`. Their layout, if you're writing a client yourself (Rover Lite does): RequestJoin is an int in 0 to `int.MaxValue`, a string, 7 bits of player mode, 4 bits of platform, a string. ConfirmJoin is two bools and an `int`, then the error string if refused, or the `JoinedServerInfo` if it's the first acceptance.

## What the server checks

`CheckApproved` reads the request, then:

1. **Join locks.** If `ServerHandler.ServerLocks` has any, refuse with the highest lock's message.
2. **Who's allowed.** If `ServerInfo.Identifier == -1` (any local or TavernLib server) it calls `CheckIfPlayerIsAllowedCustom`, else `CheckIfPlayerIsAllowed`. Both are `protected virtual` and return a `PlayerJoinResult` (a `protected` struct: `UserInfo`, `Error`, `IsSuccessful`).
3. **Already connected.** Another connection with the same user id: refused with "Already connected to this server."
4. **Prerequisites.** Sends the first acceptance, then waits for bootup to finish and runs every connection step (see below). If a step throws: "Failed join prerequisites."
5. Sends the final acceptance and raises the handler's `UserJoined`, which makes `ServerHandler` wait for `ClientIsReadyToSpawn`.

`CheckIfPlayerIsAllowedCustom`, the one local servers use, checks:

| Check | Refusal |
| --- | --- |
| The token's `UserId` claim equals the request's player id | "Token was for a different user: ..." |
| Under the player limit (`PlayerLimit`, 0 or less is no limit) | "Reached player limit of: ..." |
| Same `BuildVersion.CurrentVersion` string | "Wrong game version, update to: ..." |
| `Config` allow or block list | "Request rejected due to server ..." |
| No `Player` with that id already | "Player: ... is already on the server" |
| Fly mode needs member status Developer or above | "You will need a VR headset to play" |

The token's signature isn't checked on this path. `JWTUtility.CreateFromString` only decodes it. Alta's own servers (`CheckIfPlayerIsAllowed`) also checked a `server_id` claim, the platform and the token with Alta's API, which is gone.

A refusal sends the error, waits 2 seconds and closes the connection (`PlayerDenied`, a private static).

### What TavernLib changes

On a TavernLib server, the join goes through more checks first:

- A prefix on `InitializeConnection` swaps the `RequestJoin` handler for TavernLib's own filter. It reads a clone of the stream, so the original is still unread when it hands over.
- **Fly cam filter**: `Fly`, `AutoCam` and `Unassigned` modes are refused ("Bizarre mode detected.") unless `users.json` lets that user fly.
- **Token check**: the token must have exactly one `TavernToken`, `UserId` and `Username` claim, and the `TavernToken` must match the user's token in `users.json`. Blacklist and whitelist are applied here.
- **Mod parity**: the client's mod list (sent earlier over TavernLib's auth handshake) must match the server's required mods ("Mod mismatch").
- Then the game's own `CheckApproved` runs. TavernLib replaces `CheckIfPlayerIsAllowedCustom` completely (a prefix returning `false`): it checks the token's user id matches and gives the player a `PlayerSubscriberStatus` from their roles (`dev`, `mod`, `supporter`). So **none of the checks in the table above run on a TavernLib server**, including the player limit and the game version. We found nothing else in TavernLib's source that checks the player count at join, so `PlayerLimit` there looks like it only reaches the server listing. If your mod needs a hard limit, add it yourself (see [Hooking it](#hooking-it)).

See [Roles](../../mod/tavernlib/roles.md) and the host [config reference](../../host/config-reference.md#roles).

## The client side

`GameModeManager.JoinServer(GameServerInfo)` starts a `JoinedServerGameMode`, which calls `ConnectToServerUtility.ConnectToServer` up to 24 times, 5 seconds apart, while the failure is "recoverable". Each try makes a `JoinServerPipeline`:

1. `GameServerInfo.JoinServerAsync()` gets the address. For a `DevGameServerInfo` or a server with id `-1`, this skips Alta's API.
2. If the address is this machine's public IP, it swaps in the local one. This asks Alta's API for the public IP, which now times out after about a minute (Rover's finding).
3. `Socket.CreateConnection(ip, port)`, retried up to 15 times.
4. On `Approved`, it sends `RequestJoin` with `PlayerModeUtilities.PlayerMode` and `BuildVersion.CurrentVersion`.
5. It waits for the answers above and returns a `JoinResult`.

| `JoinResult` member | What it is |
| --- | --- |
| `ClientJoinResult Result` | Why it ended. |
| `bool WasSuccessful` | Joined. |
| `string Message` | The server's error text, if it sent one. |
| `string ErrorMessage` | A canned message for `Result`. Shown in the loading scene. |
| `bool IsRecoverableFailure` | Whether `JoinedServerGameMode` tries again. |
| `Connection ConnectionToServer`, `JoinedServerInfo ServerInfo` | On success. |

:::warning[A refusal is retried]

The server's refusals use the 4-argument `ConfirmJoinMessage` constructor, which sets the result to `ClientJoinResult.JoinAccepted`. The client turns that into a failed `JoinResult` with `Result == JoinAccepted`, which counts as recoverable, so the game tries again (up to 24 times) and shows "Successfully connected to server." while it does. The real reason is in `JoinResult.Message`. TavernLib's `JoinRejectionRecorder` steps in here to tell the launcher.

:::

## Connection steps

`ServerHandler.AddConnectionStep(ConnectionStep step)` adds an async step that every joining player goes through during prerequisites, after bootup. `ConnectionStep` is `Task (Connection connection, Action<string> progressNotification)`. Each call to the progress action sends that text to the client as a `ServerStatus` message, which they see while they wait.

```csharp
using System;
using System.Threading.Tasks;
using Alta.Networking;
using Alta.Networking.Servers;

public static class RulesStep
{
    public static void Start()
    {
        ServerHandler.Initialized += server =>
        {
            if (server == null || server.IsDummyLocalServer) return;
            // Too early to add steps here: wait for bootup to finish.
            server.BootupFinished += () => server.AddConnectionStep(ShowRules);
        };
    }

    private static async Task ShowRules(Connection connection, Action<string> progress)
    {
        progress("Be kind. No griefing.");
        await Task.Delay(TimeSpan.FromSeconds(3));
    }
}
```

- When the step runs, `connection.UserInfo` is set (who they are), but there's no `Player` yet.
- Throwing from a step refuses the join with "Failed join prerequisites.". To refuse with your own message, call `connection.Disconnect(reason)`; the steps stop when the connection is disposed. The player sees a lost connection rather than your text.
- Adding a step after a player has joined logs an error: that player missed it.

## Hooking it

- **Every refusal, server side**: postfix the `ConfirmJoinMessage` constructor, like TavernLib does. It's `internal`, so this compiles against att-stubs only:

```csharp
using Alta.Networking;
using HarmonyLib;
using MelonLoader;

[HarmonyPatch(typeof(ConfirmJoinMessage), MethodType.Constructor,
    new[] { typeof(bool), typeof(bool), typeof(ClientJoinResult), typeof(JoinedServerInfo), typeof(string) })]
static class LogRefusals
{
    static void Postfix(bool isAllowed, string error)
    {
        if (!isAllowed) MelonLogger.Msg($"Join refused: {error}");
    }
}
```

- **How a join ended, client side**: `ConnectToServerUtility.ConnectToServer` is public and returns `Task<JoinResult>`. Postfix it and wait on the task:

```csharp
using System.Threading.Tasks;
using Alta.Networking.Servers;
using HarmonyLib;
using MelonLoader;

[HarmonyPatch(typeof(ConnectToServerUtility), nameof(ConnectToServerUtility.ConnectToServer))]
static class LogJoinResult
{
    static void Postfix(Task<JoinResult> __result)
    {
        __result.ContinueWith(task =>
        {
            if (task.Status == TaskStatus.RanToCompletion)
                MelonLogger.Msg($"Join finished: {task.Result.Result} {task.Result.Message}");
        });
    }
}
```

`ContinueWith` without a scheduler runs on a thread-pool thread, so don't touch Unity objects in it.

- **Your own allow rule, server side**: a postfix on `CheckIfPlayerIsAllowedCustom` sees TavernLib's `Task<PlayerJoinResult>` as `__result` and can replace it with a denial. Harmony runs postfixes even when a prefix skipped the original. Both the method and `PlayerJoinResult` are `protected`, so this compiles against att-stubs only. This one puts the player limit back:

```csharp
using System.Threading.Tasks;
using Alta.Networking;
using Alta.Networking.Servers;
using HarmonyLib;

[HarmonyPatch(typeof(ServerPlayerConnectionHandlerOld), nameof(ServerPlayerConnectionHandlerOld.CheckIfPlayerIsAllowedCustom))]
static class HardPlayerLimit
{
    static void Postfix(ref Task<ServerPlayerConnectionHandlerOld.PlayerJoinResult> __result)
    {
        // The connection asking to join counts itself, as in the game's own check.
        int limit = ServerHandler.Current.PlayerLimit;
        if (limit > 0 && Socket.Current.ConnectionCount > limit)
            __result = Task.FromResult(ServerPlayerConnectionHandlerOld.PlayerJoinResult.CreateDeniedResult("The server is full"));
    }
}
```
- **`CheckApproved`** and **`SpawnPlayerToClient`** are `async void`: a patch only covers the code up to the first `await`. Prefer the events and steps above.
- Don't patch `InitializeConnection` with a prefix that returns `false` as well: TavernLib's already does, and only one of you would install a handler.

## Other types

| Type | What it is |
| --- | --- |
| `JoinedServerInfo` | `Alta.Networking`. The server you're on: `static Current`, `Identifier`, `Name`, `ConnectionInfo`, `IsLocalServer` (id `-1`). Set on the client at the first acceptance. |
| `ClientJoinResult` | Enum of join outcomes, 1 to 13 from Alta's API, 30 to 35 from the connection. |
| `DevGameServerInfo` | A `GameServerInfo` with a fixed `ConnectionInfo`. `GetDevServer(ip, port, sceneIndex)`. TavernLib's `/join_local_server` uses it. |
| `ConnectToServerUtility` | Static. Owns the client socket and the current pipeline. `StopCurrentConnectionAttempt()`. Registers the in-game message handlers once a join succeeds. |
| `GeneralGameEvents.ClientStarted` | Static event raised on the client when a join succeeds, before the scene loads. |
| `PlayerModeUtilities` | Static. `PlayerMode` (what this client will join as), `OverrideMode` (set it before joining to join as something else; Rover does), `IsNormalPlayerMode(mode)` (false for Fly and AutoCam, which aren't saved). |

## See also

- [Connection messages](messages.md)
- [Player](player.md)
- [Command-line flags](command-line.md)
