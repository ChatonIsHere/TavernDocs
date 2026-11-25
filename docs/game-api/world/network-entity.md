---
title: NetworkEntity
description: The component every networked thing has. Its ids, lifecycle, behaviours, chunk parents and events, and the good places to hook it.
sidebar_position: 2
---

# NetworkEntity

`Alta.Networking.NetworkEntity` in `Root.Township`. A `MonoBehaviour`. Runs on server and clients.

Every networked thing has one: items, creatures, players' bodies and their parts, chunks, managers. It carries the entity's runtime id, its place in the chunk tree, its serializer and the list of its `INetworkEntityBehaviour`s. You don't add it yourself; it's on the prefab.

How to get one:

- From a component on the object: `GetComponent<NetworkEntity>()`, or `Entity` on any `NetworkEntityBehaviour`.
- From a pickup: `pickup.Entity`. From a prefab: `prefab.Entity`.
- By id: `NetworkSceneManager.Current.GetEntity(identifier)`.
- By walking chunks or the entity list: see [Finding entities](finding-entities.md).

## Three kinds of id

| Id | What it is | Stable? |
| --- | --- | --- |
| `uint Identifier` | The runtime id, an index into the scene's entity table (up to 100,000 slots). This is what messages and console commands use. | No. It changes every time the entity spawns or its chunk loads again. |
| `uint Hash` | The entity's own hash inside its prefab. Embedded entities are found by it when a save loads. | Yes, it's set in the editor. |
| `Prefab.Hash` | The prefab's hash, which says what kind of thing it is. | Yes. See [Prefabs](prefabs.md). |

Never save an `Identifier`. Save a prefab hash and a position, or let the chunk save the entity for you.

## Members

| Member | What it does | Notes |
| --- | --- | --- |
| `uint Identifier { get; }` | Runtime id. | 0 until initialized. |
| `string OriginalName { get; set; }` | The object's name before `Initialize` renamed it to `"<id> - <name>"`. | |
| `string SafeName { get; }` | `"<id> - <OriginalName>"`, handy for logs. | |
| `NetworkPrefab Prefab { get; }` | The prefab component on the same object, or null for embedded entities and scene objects. | |
| `NetworkEntity PrefabRoot { get; }` | The top entity of the prefab this belongs to. For an embedded part, its prefab's entity. For a prefab, itself. | Destroy and save the root, not a part. |
| `NetworkEntity Parent { get; }` | For an embedded entity, the prefab entity it's embedded in. Null otherwise. | Not the same as `ChunkingParent`. |
| `int EmbeddedId { get; set; }` | Index in its prefab's embedded list. | |
| `Chunk Chunk { get; set; }` | The chunk it's in. Setting it moves it to another chunk. | Server: ignored while it has a `ChunkingParent`. See below. |
| `NetworkEntity ChunkingParent { get; set; }` | The entity it rides with (a docked item's dock owner, a part's structure). It takes its parent's chunk. | Server. |
| `Chunk PositionChunk { get; }` | The chunk its position is written against: the chunking parent's chunk, or its own. | |
| `IEnumerable<NetworkEntity> Children`, `int ChildCount` | Entities that have this as `ChunkingParent`. | |
| `IEnumerable<IPlayer> PlayersSpawnedFor`, `int PlayersSpawnedForCount` | Players whose game currently has this entity. | Server. |
| `bool IsSpawnedFor(Player player)` | Whether that player has it. | Server. |
| `SpawnManager Spawner { get; }` | The scene's spawner. | |
| `INetworkScene Scene { get; }` | The scene it belongs to. | |
| `bool IsInitialized { get; }` | True after `Initialize`. | |
| `bool IsBeingDestroyed { get; set; }` | True once a destroy or unload has started. | Check it in delayed callbacks. |
| `Pickup CommonPickup`, `Interactable CommonInteractable`, `ImpactTool CommonImpactTool` | Cached components, or null. | See the Items area. |
| `EntitySerializer Serializer`, `bool IsSerialized` | State sync for its `INetworkSerialized` behaviours. | See the Networking area. |
| `int SyncPriority { get; }` | Lower syncs first when a chunk is sent to a player. | |
| `Vector3 FramePosition { get; }` | `transform.position`, cached once per frame. | Cheap in hot loops. |
| `static int SpawnedCount { get; }` | Live `NetworkEntity` components in the process. | Counts embedded parts too. |
| `void EvaluateChunk(bool isLoggingOnFailure = true)` | Server: puts it in the chunk that holds its position. | See [Chunks](chunks.md). Can destroy it. |
| `void ForcePositionSync()` | Server: re-evaluates its chunk and sends its position and rotation to everyone in its chunks. | Use after moving it. |
| `void SceneDestroy()` | Server: destroys it properly. Does nothing on clients. | See [Destroying](destroying.md). |
| `void DelayedSceneDestroy()` | `SceneDestroy` 0.1 s later. | |
| `NetworkEntity SpawnAndReplaceWith(uint prefabHash, bool isDestroying = true)` | Server: spawns another prefab in its place, copying position, chunk and parent, and destroys this one. | Also takes a `NetworkPrefab`. |
| `T GetComponentOnEntity<T>()`, `GetComponentsOnEntity<T>()` | Looks only through its behaviour list. | Faster than `GetComponent`, but only finds behaviours. |
| `AltaCoroutine StartCoroutine(IEnumerator)` | A coroutine that stops when the entity is destroyed by the scene. | Hides `MonoBehaviour.StartCoroutine`. |

### Events

| Event | When | Side |
| --- | --- | --- |
| `OneTimeEvent<NetworkEntityHandler> InitializationFinished` | After `Initialize` ran its behaviours. A handler added after that runs straight away. Add with `+= new NetworkEntityHandler(...)`. | Both |
| `EntityDespawnedHandler DestroyedByScene` | Destroyed or unloaded through the spawner. Gets `(entity, isUnload)`. Cleared after it fires. | Both |
| `ChunkEventHandler AddedToChunk`, `RemovedFromChunk` | Its chunk changed. | Server in practice |
| `ParentChangedHandler ParentChanged`, `NetworkEntityHandler ChildAdded`, `ChildRemoved` | Its chunking parent or children changed. | Server in practice |

## Lifecycle

On the server a spawn goes like this. The page [Spawning](spawning.md) has the calls.

1. `Object.Instantiate` of the prefab. `Awake` runs.
2. `Initialize(scene, parent, identifier, embeddedIdentifiers, isInitializingBehaviours)`: takes an id, renames the object, builds the serializer, gives embedded entities their ids, then calls `Initialize()` on every behaviour. Then `InitializationFinished`.
3. `InitializeAsServer(SpawnData)`, through `InitializeWithChildrenAsServer`: calls `InitializeAsServer` on every behaviour. This is where things generate their contents. It runs once per entity; a second call returns early.
4. The entity gets a chunk (`Chunk = ...`) or a chunking parent. Only now is it sent to the players in that chunk.
5. For each player who gets it: `OnConnected(player)` on every behaviour, after the spawn and first serialize messages. When the player loses it: `OnDisconnected(player)`.

On a client the spawn message does steps 1 and 2. Clients never run `InitializeAsServer`.

### Entity behaviours

`INetworkEntityBehaviour` (in `Alta.Networking`) has `Entity`, `Initialize()`, `InitializeAsServer(SpawnData)`, `OnConnected(Player)` and `OnDisconnected(Player)`. `NetworkEntityBehaviour` is the usual base class, with empty virtual versions of all four and a serialized `Entity` field. The entity calls them for each behaviour in its serialized `networkEntityBehaviours` list, which is filled in the editor. Nothing in the game refills it at runtime, so a behaviour you `AddComponent` later looks like it never gets these calls.

`OnConnected(player)` is the place where the game's behaviours send a newly arrived player their current state (`MethodSync.SendToPlayer`). It runs on the server each time the entity is spawned for a player, not when the player joins the server.

`GeneratedNetworkEntityBehaviour` adds an abstract `Generate(SpawnData)` that runs from `InitializeAsServer` only when `SpawnData.ShouldGenerate` says so. Mine structures, page contents, moulds, buried things and material parts use it. See [Spawning](spawning.md#spawndata).

## Hooking it

| Target | Why | Watch out |
| --- | --- | --- |
| `NetworkEntity.InitializeAsServer(SpawnData)` | Every entity the server sets up, spawned or loaded from a save. | Runs for embedded parts too; filter on `__instance.PrefabRoot == __instance`. Runs before the entity has a chunk. Public, not virtual. |
| `NetworkEntity.Initialize(...)` | Every entity on either side, as soon as it has an id. | Virtual. Runs before `InitializeAsServer`; behaviours haven't generated anything yet. |
| `NetworkEntity.OnConnected(Player)` | An entity was sent to a player. | Virtual. Runs for every entity of every chunk sent to a player, so keep it cheap. |
| Your behaviour's own `InitializeAsServer` override | If you patch one game behaviour, patch its override, not the base. | Many game classes override it; patch the declared method (`AccessTools.DeclaredMethod`), as CookingLib does for `Cookable`. |

```csharp
// See every entity the server sets up, spawned or loaded from a save.
[HarmonyPatch(typeof(NetworkEntity), nameof(NetworkEntity.InitializeAsServer))]
static class WatchServerSpawns
{
    static void Postfix(NetworkEntity __instance, SpawnData spawnData)
    {
        if (__instance.Prefab == null || __instance.PrefabRoot != __instance) return; // embedded parts
        bool fresh = SpawnData.ShouldGenerate(spawnData);
        MelonLogger.Msg($"{(fresh ? "Spawned" : "Loaded")} {__instance.SafeName}");
    }
}
```

`fresh` is false for entities loading from a chunk save, which get a `SpawnData` with `IsGenerating` false.

## Traps

- **Don't `Object.Destroy` an entity.** `OnDisable` logs "Entity being unofficially destroyed", clients are never told, and the chunk still lists it. Use `SceneDestroy`.
- **`Chunk` setter is ignored on the server while the entity has a `ChunkingParent`.** Docked items and parts follow their parent. Clear `ChunkingParent` first.
- **`Identifier` is not a save key.** See above.
- **Embedded entities have no `Prefab`.** `entity.Prefab` is null on a player's hand, a chest's lid and so on. Go to `PrefabRoot`.

## See also

- [Prefabs and prefab hashes](prefabs.md)
- [Chunks](chunks.md), for `Chunker` and chunk events
- The Networking area, for `MethodSync`, `EntitySerializer` and entity messages
