---
title: Player
description: The Player entity, who a player is (UserInfo, member status, player mode), finding players, and the events to subscribe to.
sidebar_position: 9
---

# Player

`Player` in `Root.Township` (no namespace). A `NetworkEntity`, and it implements `IPlayer` (`Alta.Networking.Scripts.Player`). Both sides.

Each person on a server has one `Player` entity for as long as they're connected. It holds who they are, their connection, their save, their states and progression. Their **body** is a separate entity, the `PlayerController`, that comes and goes (it's destroyed when they die and a new one is spawned when they respawn). See [PlayerController and the body](player-controller.md).

On the server, every connected player has a `Player`. On a client, you have your own and one for every other player on the server: the server spawns all `Player` entities for everyone, in the global chunk.

## Getting one

| Member | What it gives you | Notes |
| --- | --- | --- |
| `static HashSet<IPlayer> AllPlayers { get; }` | Every `Player` entity this side knows about. | Cast to `Player` if you need its non-interface members. |
| `static IPlayer Current { get; }` | The local player. | Client only. `null` on a server. |
| `static IPlayer Get(int userId)` | By user id, from a lookup. | Filled on the server at join, on a client once that player's identity has arrived. |
| `static Player GetPlayer(int playerId)`, `static bool SafeGetPlayer(int playerId, out Player result)` | By user id, searching `AllPlayers`. | |
| `static Player GetPlayer(string playerName)` | By username, any case. | |
| `static bool IsOnServer(int playerId)` | | |
| `PlayerController.NetworkPlayer` | From a body. | |
| `connection.Player` | From a server connection. | |

```csharp
foreach (IPlayer player in Player.AllPlayers)
{
    var body = player.PlayerController;
    string where = body != null ? body.PlayerFeetPosition.ToString() : "no body";
    MelonLogger.Msg($"{player.UserInfo.Username}: {player.StateManager.CurrentStateType}, {where}");
}
```

## Members

| Member | What it is | Side |
| --- | --- | --- |
| `UserInfoAndRole UserInfo { get; }` | Who it is. See [Identity](#identity). | Both, but see the warning below. |
| `Connection ConnectionToRemotePlayer { get; }` | Their connection. | Server. `null` on a client. |
| `bool IsLocalPlayer { get; }` | This is `Player.Current`. | Client. |
| `PlayerMode PlayerMode { get; set; }` | VR, fly cam and so on. Raises `PlatformChanged` when it changes. | Both. |
| `PlatformTarget PlatformTarget { get; }` | PC or Quest. | Server. |
| `PlayerController PlayerController { get; }` | The body, or `null` while there isn't one. | Both. |
| `PlayerCharacter PlayerCharacter { get; }` | The body cast to the VR body. Throws (invalid cast) if the body is a fly cam. | Both. |
| `Transform PlayerTransform { get; }` | The body's transform if there is one, else the `Player`'s. | Both. |
| `PlayerStateManager StateManager { get; }` | Their states. See [Player states](player-states.md). | Both. |
| `PlayerProgressionManager ProgressionManager`, `PlayerUnlockManager UnlockManager` | Skills and unlocks. | See [Progression](../game-systems/progression.md) and [Skills and unlocks](../game-systems/skills-and-unlocks.md). |
| `PlayerEventsManager PlayerEventsManager { get; }` | Gameplay events about this player (armed, and others). | |
| `PlayerChunkManager ChunkManager { get; }` | Which chunks are loaded for them. | Server mostly. See [Chunk loading and saving](../world/chunk-loading-and-saving.md). |
| `PlayerCharacterCustomizationManager Customization { get; }` | Their cosmetics. | |
| `FriendshipManager FriendshipManager { get; }` | Friends (Alta's API, dead). | |
| `PlayerSave Save { get; }` | Their save data. See [Saving](saving.md). | Server. |
| `bool IsSavingBlocked { get; }`, `void AddSaveBlocker(object)`, `void RemoveSaveBlocker(object)` | Stop their save being written while any blocker is in. | Server. |
| `HashSet<Chunk> LoadedChunks { get; }` | | |
| `bool IsLoaded { get; set; }` | Set when the body's chunk finished loading. | |
| `DamageDisplayer DamageDisplayer { get; }` | | |
| `void Kick(string reason)` | Disconnect them. | Server. Does nothing on a client. |
| `Vector3 GetSpawnPosition(bool isRespawning)` | Where they'd spawn: the saved position on join, the respawn point (or saved home) on respawn, the scene spawn point plus 1.5 m in fly mode. | Server. |
| `Task SpawnNewController(PlayerController prefab, bool isRespawn)` | Spawn a body. Waits for their client to load the chunk first. | Server. The states call this. |
| `void SafeMoveToChunk(LocationChunk chunk, Vector3 position, Action callback)` | Move them into a chunk, waiting for their client to load it. Zeroes their body's senses meanwhile (probably so creatures ignore them) and parks the body in the void chunk. | Server, `async void`. |
| `void DestroyPlayerControllerAndOldEntities(bool isUndocking, bool isUnloading)` | Destroy the body and what's linked to it. | Server. |
| `void SaveControllerAndState(bool isSavingIfDead = false)`, `void WriteSave(bool isUnloading)`, `bool IsInSavableState(bool isSavingIfDead = false)` | Saving. | Server. |
| `static void SaveAll()` | Save every player. | Server. |
| `Task InitializePlayerOnServer(Connection, PlayerMode, PlatformTarget, IAltaFile saveFile)` | Set up a new `Player` for a connection. | Server. Called by `ServerHandler`. |
| `void SetLocal()` | Tell the client this `Player` is theirs. | Server. |

:::warning[UserInfo on a client is wrong at first]

On a client, every `Player` starts with **the local user's** `UserInfo` (from the logged-in account), whoever it really is. The real one arrives a moment later in the player's `SyncA` message, which sets `UserInfo` and adds it to `Player.Get`'s lookup. So in `OnPlayerAdded` on a client, `UserInfo` is not yet right. Wait for the body (`PlayerControllerSet`), or check again later.

:::

## Events

| Event | When | Side |
| --- | --- | --- |
| `static event Action<Player> OnPlayerAdded` | A `Player` entity was set up (`Initialize`). | Both. On the server, before `UserInfo` is set. |
| `static event Action<Player> OnPlayerRemoved` | A `Player` was destroyed. | Both. |
| `static event PlayerHandler LocalPlayerSet` | The server said which `Player` is ours. `PlayerHandler` is `void (IPlayer)`. | Client. |
| `event PlayerControllerHandler PlayerControllerSet` | The body was set or cleared. Handlers get `(Player, PlayerController)`; the controller is `null` when it's cleared. Each handler is called on its own, and exceptions are logged. | Both. |
| `event Action<PlayerController> FinishedLoadingController` | A new body has been spawned and loaded from the save. | Server. |
| `event Action LoadComplete` | The `Player` loaded its save (states, progression). | Server. |
| `event PlatformHandler PlatformChanged` | `PlayerMode` changed. | Both. |
| `event PlayerSystemHandler PlayerSystemChanged` | `PlatformTarget` changed. | Both. |

For join and leave on the server, use `ServerHandler.Current.PlayerJoined` and `PlayerLeft` ([ServerHandler](server-handler.md#events)). They fire later than `OnPlayerAdded`, once the player is fully set up.

Every `Player`'s `Awake` subscribes to the static `LocalPlayerSet`, and on a server nothing ever raises it to unsubscribe them, so every player who ever joined stays referenced (Steady clears these).

## Identity

### UserInfoAndRole

`UserInfoAndRole` (no namespace) is what `Player.UserInfo` and `Connection.UserInfo` hold.

| Member | What it is |
| --- | --- |
| `UserInfo UserInfo { get; }` | Id and name. |
| `int Identifier { get; }` | The user id. On TavernLib servers, the id from `users.json`. |
| `string Username { get; }` | The name. |
| `PlayerSubscriberStatus MemberStatus { get; }` | See below. |
| `bool IsSubscriber { get; }` | Subscriber, Developer or AltaMod. |
| `ToString()` | `(name:id)`. |

### UserInfo

`Alta.Api.DataTransferModels.Models.Responses.UserInfo` in `Alta.Api.DataTransferModels`: `int Identifier`, `string Username`. Two are equal when their ids are equal, whatever the names.

### PlayerSubscriberStatus

`None`, `Subscriber`, `Developer`, `AltaMod` (0 to 3). The game checks it with `<` and `>=`, so `AltaMod` passes every `>= Developer` check: moderators can do what developers can, including joining in fly mode. On a TavernLib server, TavernLib sets it from the player's roles: `dev` gives Developer, `mod` gives AltaMod, `supporter` gives Subscriber. It's sent to every client with the player's identity.

### PlayerMode

`PlayerMode` (no namespace, in `Alta.Platform.dll`), a flags enum:

| Value | Name |
| --- | --- |
| 0 | `Unassigned` |
| 1 | `Fly` (keyboard and mouse fly cam) |
| 2 | `AutoCam` |
| 4 | `OpenVR` (SteamVR) |
| 8 | `Oculus` |
| 0x1C | `OpenXR` |
| 0x28 | `MetaQuest` |
| 0x40 | `PicoXR` |

`PlayerModeUtilities.IsNormalPlayerMode(mode)` is `false` for `Fly` and `AutoCam`. Those players aren't saved and don't load a save. Which body each mode gets is on [PlayerController and the body](player-controller.md#which-body).

### PlatformTarget

`PC = 1`, `Quest = 2` (flags, in `Alta.Platform.dll`). The client sends it in its join request. A server whose `ServerInfo.Target` includes Quest is a "simple server": `NetworkScene.IsSimpleServer`, player limit at most 8.

## Hooking it

- **`InitializePlayerOnServer`**: `async Task`, so a postfix runs at its first `await`, after `UserInfo`, `ConnectionToRemotePlayer` and the save data are set, and before cosmetics load. TavernLib postfixes it to send roles and raise `ConsoleEvents.PlayerJoined`.

```csharp
using HarmonyLib;
using MelonLoader;

[HarmonyPatch(typeof(Player), nameof(Player.InitializePlayerOnServer))]
static class OnPlayerInitialized
{
    static void Postfix(Player __instance)
    {
        MelonLogger.Msg($"{__instance.UserInfo.Username} is being set up on connection {__instance.ConnectionToRemotePlayer.Identifier}");
    }
}
```

- **`SyncModeControllerAndUserInfoWithRemote(IPlayer, Stream)`** (private) is where a client learns each player's id, name, mode and status. A postfix there is the reliable "now I know who this is" point on a client.
- **`SyncCosmetics`** is `async void`. TavernLib replaces it with a prefix to serve cosmetics from the save.
- **`StartUp()`** loads the save on the server (or starts the first-join state for a new player).
- `Kick` only works on the server, and the player sees a lost connection, not your reason.

## See also

- [PlayerController and the body](player-controller.md)
- [Player states](player-states.md)
- [Saving](saving.md)
- [ServerHandler](server-handler.md)
