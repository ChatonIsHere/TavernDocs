---
title: Prefabs and prefab hashes
description: NetworkPrefab, PrefabManager, prefab hashes, embedded entities and SaveMode. How the game knows what a thing is and whether it saves.
sidebar_position: 3
---

# Prefabs and prefab hashes

Anything the game can spawn is a prefab with a `NetworkPrefab` component. The prefab's `Hash` is the name the network and the save files use for it. `PrefabManager` keeps the list.

## NetworkPrefab

`Alta.Networking.NetworkPrefab` in `Root.Township`. A `MonoBehaviour` next to the prefab's `NetworkEntity`. Both sides.

It's also an `INetworkEntityBehaviour` and the owner of the prefab's embedded entities (it derives from `NetworkEntityParent`). Get it with `entity.Prefab` on a prefab's root entity, or from `PrefabManager`.

| Member | What it does | Notes |
| --- | --- | --- |
| `uint Hash { get; }` | The prefab's hash. Fixed in the editor, the same in every game build. | What saves, spawn messages and `spawn <hash>` use. |
| `NetworkEntity Entity { get; }` | The prefab's root entity. | |
| `SaveMode SaveMode { get; set; }` | How this instance is saved. See [SaveMode](#savemode). | Per instance, not saved in the asset. Defaults to `Base`. |
| `List<NetworkEntity> Embedded { get; }` | The entities built into the prefab: a chest's lid, a body's hands, a stat holder. | From `NetworkEntityParent`. |
| `NetworkEntity GetEmbedded(uint hash)` | An embedded entity by its `Hash`. | |
| `T GetComponentInPrefab<T>()`, `IEnumerable<T> GetComponentsInPrefab<T>()` | Searches the behaviour lists of the root and every embedded entity. | Finds only `INetworkEntityBehaviour`s. |
| `bool CanBeSpawnedThroughCommand { get; }`, `void DisableSpawnThroughCommands()` | Whether `spawn` will accept it. | The console's prefab parser returns null for prefabs with this off. |
| `bool IsServerOnly { get; set; }` | Setting it true despawns the prefab (and its embedded entities) for every player that has it. | Nothing in either build reads it when a player arrives later (`StartSpawn` ignores it), so a player who comes into range afterwards still gets the prefab. It looks half finished. |
| `bool IsSyncingPosition`, `LockPositionSync(PositionSyncBlocker)`, `UnlockPositionSync(...)` | Flags that stop position sync. | |
| `event NetworkPrefabEventHandler PreDestroyed` | Just before a destroy or unload, while it still has its chunk. | Both sides. |
| `static int SpawnedCount { get; }` | Live prefab instances in the process. | |

### Embedded entities

An embedded entity is a `NetworkEntity` inside a prefab that isn't a prefab itself. It gets its own `Identifier` when the prefab spawns (the server takes free ids for them, then tells clients which ids go with which index). Its `Parent` is the prefab's entity and its `Prefab` is null. It spawns, saves and dies with its prefab. Never destroy one on its own: `PrepareForDestroy` logs "Attempted to destroy child ... without parent".

The scene itself (`NetworkScene`) is also a `NetworkEntityParent`. Its embedded entities are the managers and fixtures placed in the scene: `GameTimeManager`, `CaveLayerManager`, the `LocationChunk`s and so on. They sit in the [global chunk](chunks.md#the-global-chunk-and-the-void-chunk) and save through it.

## PrefabManager

`Alta.Networking.PrefabManager` in `Root.Township`. Static. Both sides.

It loads every `NetworkPrefab` under `Resources/Network Prefabs` the first time anything asks, into a private `Dictionary<uint, NetworkPrefab>`.

| Member | What it does | Notes |
| --- | --- | --- |
| `static NetworkPrefab GetPrefab(uint hash)` | The prefab with that hash, or null. | Dictionary lookup. |
| `static NetworkPrefab GetPrefab(string name)` | Matches the hash as text, the lowercase name, or the lowercase name with spaces removed. | Your text must already be lowercase. A linear search over every prefab, so cache the result. |
| `static bool Exists(uint hash)` | Whether a hash is known. | |
| `static IEnumerable<NetworkPrefab> AllPrefabs { get; }` | Every prefab. | Call `PrepareSpawnSetups()` first: before the map is built this throws a `NullReferenceException`. |
| `static void PrepareSpawnSetups()` | Loads the prefabs if they aren't loaded. | Slow the first time. |

Two prefabs with the same hash: the first one wins and an error is logged ("share a prefab hash").

:::warning[Servers have no meshes]
On a headless game (a server) `PrepareSpawnSetups` goes through every `GameObject` in `Resources` and removes materials and meshes, and turns off renderers, lights and cameras. Code that reads a mesh or a renderer's bounds on the server gets nothing. Use colliders.
:::

`PrefabNameMap` (a `GlobalSettings` asset) maps hashes to the prefab's path in the project. It's used for logs and tools.

### Getting a hash

- In game: `spawn list` and `spawn find <text>` on the console list names and hashes. `spawn infodump` dumps more.
- From an item: `item.Prefab.Hash`, or `pickup.Entity.Prefab.Hash`.
- From code: `PrefabManager.AllPrefabs.Where(p => p.name.Contains("Bag"))`.

Prefer hashes over names in mods. Names have spaces and capitals, and some are shared.

### Your own prefabs

The prefab map is private and filled once. Adding a prefab of your own means putting it in that dictionary on the server and on every client, with the same hash, before anything needs it. Portal Gun does this through SyncLib's `RegisterCustomPrefab`; that library's source isn't covered here. Whatever you use, pick a hash nothing else uses: the duplicate check only runs when the map is first built, so a clash added later goes unnoticed.

## SaveMode

`ATT.Saving.SaveMode` in `Root.Township`. What happens to a spawned instance when its chunk saves or unloads. It's set on the instance (`prefab.SaveMode`); the spawn helpers that take a `SaveMode` set it for you.

| Value | Saved | When its chunk unloads | Used for |
| --- | --- | --- | --- |
| `Base` | In its chunk's save file, on its own. | Saved, then destroyed. | Loose items, placed things. The default. |
| `Child` | Inside its chunking parent's save. | Goes with its parent. | Contents of docks, loot, mine structure parts, ore and plants from populations. |
| `Ignore` | Never. | Destroyed. | Cave layer streamers, temporary things. |
| `Creature` | Never. | Destroyed. | Creatures from populations. They respawn from the population instead. |
| `Player` | Not with the chunk. | | Player bodies (`PlayerCharacter` returns it). Players save elsewhere. |

Docks switch what they hold to `Child`, and back to the pickup's `BaseSaveMode` when it leaves. If you change how a pickup saves, set `pickup.BaseSaveMode` too, or the next undock undoes it.

The chunk also drops `Base` entities with a y position under -15,000 when it saves. See [Chunk loading and saving](chunk-loading-and-saving.md).

When a prefab is destroyed, the prefabs nested under it in the transform hierarchy that are `Child`, `Creature` or `Ignore` are destroyed too. A `Base` one is moved out and an error logged. See [Destroying](destroying.md).

## See also

- [Spawning](spawning.md)
- [NetworkEntity](network-entity.md)
- Items and their `Item.Prefab` link are in [Items, interaction and damage](../items/overview.md)
