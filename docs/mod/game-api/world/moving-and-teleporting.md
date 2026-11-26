---
title: Moving and teleporting
description: Move objects from a server mod, teleport players nearby or across the world, and use the game's spawn areas.
sidebar_position: 10
---

# Moving and teleporting

Objects and players move in different ways. The server owns where a loose object is. A player's own game owns where that player is, so the server has to ask it to move.

## Moving an object

On the server, set the transform, then call `ForcePositionSync()` on the prefab root:

```csharp
// Move an object on the server and tell everyone.
public static void MoveObject(NetworkEntity entity, Vector3 position)
{
    if (!NetworkSceneManager.IsServer) return;
    NetworkEntity root = entity.PrefabRoot;
    root.transform.position = position;
    Rigidbody body = root.GetComponent<Rigidbody>();
    if (body != null) body.velocity = Vector3.zero;
    root.ForcePositionSync(); // re-chunks it and sends the move
}
```

`ForcePositionSync` (server only) runs `EvaluateChunk`, then sends a `MoveEntity` message with the position (packed against its chunk) and rotation to every player in its chunks. Clients set the transform and tell every `IUpdateOnMove` component on it. This is what all the `select move` and `select rotate` commands do.

- An object with a chunking parent (docked, or part of a structure) moves with its parent. Undock it first.
- Moving into a chunk that isn't loaded hands the object to that chunk's save, or destroys it. See [Spawning](spawning.md#into-an-unloaded-chunk).
- Moving outside every chunk destroys it (or posts it to the player who last held it). See [Destroying](destroying.md#falling-out-of-the-world).
- Physics objects keep syncing through their own `NetworkRigidbody` afterwards. See [Entity sync](../networking/entity-sync.md#serialized-state).

## Teleporting a player

The calls, from shortest to longest trip. All are called on the server. [Locomotion](../networking/locomotion.md#moving-a-player-from-the-server) covers the body side in more depth.

| Call | What it does | Use it for |
| --- | --- | --- |
| `PlayerController.ForceTeleportTo(Vector3 target)` | Uses the body's `PlayerEffectController.Teleport` (with its effect), or `LocomotionController.MoveTo(target, LocomotionFunction.Reposition)` if it has none. | Short hops within loaded ground. |
| `LocomotionController.MoveTo(Vector3 position, LocomotionFunction function)` | Sends the move to the player's game, which teleports its own feet there. | The same without the effect. |
| `Player.SafeMoveToChunk(LocationChunk chunk, Vector3 controllerPosition, Action callback)` | Parks the body in the void chunk, loads the destination for the player on the server and waits for their game to say it has loaded it, then forces the position and puts the body back in a real chunk. Calls `callback` at the end. | Long trips: across the map, into caves. |
| `LocomotionController.ServerForcePosition(Vector3 position)` | Server only: sets the position the server holds and marks it for sync. | Used by `SafeMoveToChunk`. On its own it fights the client. |

```csharp
// A short hop for a player in loaded ground.
public static void Hop(Player player, Vector3 position)
{
    player.PlayerController?.ForceTeleportTo(position);
}

// A long trip, waiting for the player's game to load the place first.
public static void Travel(Player player, Vector3 position, Action arrived)
{
    LocationChunk chunk = LocationChunkHelper.GetBestContaining(position);
    if (chunk == null) return;
    player.SafeMoveToChunk(chunk, position, arrived);
}
```

How the effect teleport works: on the server, `PlayerEffectController.Teleport(position, strength, type)` sends a `TeleportRequest` to the player. Their game plays the effect, teleports its feet there instantly, and waits for the chunk to load behind a fade. Then it raises `PlayerEffectController.PlayerRepositioned` on that client.

### Things to know

- **A 2 second cooldown, on the client.** After a teleport the player's game ignores further effect teleports for 2 seconds (`EffectHandler.TeleportCooldown`). The server doesn't know, so a second `ForceTeleportTo` straight after the first is lost.
- **`SafeMoveToChunk` is `async void`.** It returns at once. Use the callback. While it waits, the body is in the void chunk and its senses are zeroed, so creatures lose track of the player. If the player disconnects meanwhile, the wait looks like it never ends.
- **To the same chunk**, `SafeMoveToChunk` skips loading ("is already in chunk") but still waits for the client. Use `ForceTeleportTo` for short moves.
- **Landing in no chunk.** If the position is outside every chunk the player's chunk manager logs "is in a null chunk" and sends them to a respawn point.
- **Player-made teleports** (the arc a player throws) are client code with their own rules. Rover's findings cover them.

## Spawn areas

`SpawnArea` (no namespace) marks named places to put players. `SpawnArea.InstanceMap` is a static `Dictionary<SpawnAreaIdentifier, SpawnArea>` filled as they wake.

| Member | What it does |
| --- | --- |
| `static Dictionary<SpawnAreaIdentifier, SpawnArea> InstanceMap` | Every spawn area in the scene. |
| `SpawnAreaIdentifier Identifier { get; }` | Which one it is. |
| `Vector3 GetRandomSpawnPosition()` | A point in it. |
| `SpawnPoint GetSpawnPosition(int index)` | A repeatable point for an index. |

`SpawnAreaIdentifier` values include `OriginalSpawnPoint`, `RespawnPoint`, `OutsideCave`, `OutsideForest`, `OutsideTower`, `TowerCP1` to `TowerCP5`, `TowerEnd`, `OutsideLake`, `OutsideRockArena`, `MountainPass`, `Glades`, `BattleField`, `TestingArea` and `Home`. `Home` isn't an area: the game uses `player.GetSpawnPosition(true)` for it (the player's respawn point).

The main world scene has 22 of them under `Overworld Spawn Points`: Return From Customization, SpawnPoint, Respawn Destination, MineSpawnPoint, Testing point, Outside Forest, Outside Lake, Outside Tower, Tower CP1 to CP5, Tower End, Holiday Zone, Glades, Mountain Pass, Mountain Pass End, Battle Field, and the Woodcutting, Archery and Melee shrines.

The forest's reset sends everyone inside to `OutsideForest`, and `spawn` with no player uses `OriginalSpawnPoint`.

## Cave teleporters

The cave teleporters (on every tenth layer) go through `CaveTeleporterManager.TeleportPlayer(IPlayer player, Vector3 toPosition, int toLayer, Action<IPlayer> finished)` (`Alta.Caves`, server). It plays the departure effect, waits `CaveTeleportSettings.TeleportDelay` on the timeline, then calls `SafeMoveToChunk`, plays the arrival effect and gives the player a moment of immunity to hits (the server's `ImpactInvincibilityTime` setting). See [Caves](caves.md).

## Console commands

The game itself has no `player teleport` command in either build; TavernLib adds one in its port of the `player` module: `player teleport <players> <target player>` (in front of the target, via `ForceTeleportTo`) and `player teleport <players> [area]` (to a `SpawnAreaIdentifier`, via `PlayerEffectController.Teleport`).

The server build's `WorldCommandModule` (module `world`, `[ServerOnly]`) has two more:

- `world forest teleport <players> <forest> [node]` (alias `tp`): `ForceTeleportTo` the forest's first entrance, or with a node index, that node's `Position3d`. An index past the last node throws.
- `world caves teleport <players> <layer>`: if the layer doesn't exist yet, it generates every layer down to it (`ProgressCommandModule.GenerateCavesTo`, up to 100) and teleports the players to its portal with `PlayerEffectController.Teleport`. If the layer already exists it does nothing at all, because the layer it would teleport to is only set on the generating path. That's the bug Rover ran into. For an existing layer, move players yourself with `SafeMoveToChunk` to `layer.PortalTransform.position`.

## Hooking it

| Target | Why |
| --- | --- |
| `PlayerEffectController.Teleport(Vector3, float, TeleportType)` | Every effect teleport. Override of `EffectHandler.Teleport`; patch the override. Runs on server (sends) and on the player's client (moves). |
| `PlayerLocomotionController.MoveTo(Vector3, LocomotionFunction)` | Every server-requested move. Override. |
| `Player.SafeMoveToChunk` | Long trips. `async void`, so a postfix runs before the move is done. Prefix only, or wrap the callback. |
| `PlayerChunkManager.ChunkChanged` event | The player's chunk changed. Per player (`player.ChunkManager`). |

Portal Gun is a good worked example: it moves objects on the server (position, velocity, then `EvaluateChunk`) and moves players on their own client with `LocomotionController.MoveTo`.

## See also

- [Chunks](chunks.md)
- [Locomotion](../networking/locomotion.md), for how a player's body moves and `MoveTo` on each side
- [Movement and pathfinding](../creatures/movement-and-pathfinding.md), for moving creatures (`Director.TeleportTo`)
