---
title: World, entities and spawning
description: How things exist in the world of A Township Tale, how the world is cut into chunks that load and save, and how a mod spawns, finds, moves and removes things.
sidebar_position: 1
---

# World, entities and spawning

Everything you can see, hold or fight in A Township Tale is a networked object called an entity. Entities live in chunks, chunks load around players, and a chunk saves its entities when it unloads. The forest, the caves, creatures, ore, loot and the day and night cycle are all built on top of that. This area covers those pieces, all in `Root.Township`.

## The big picture

- **An entity is a `NetworkEntity`.** It has a runtime id (`Identifier`) that changes every time it spawns or loads. Its behaviours implement `INetworkEntityBehaviour`, usually by deriving from `NetworkEntityBehaviour`. See [NetworkEntity](network-entity.md).
- **A thing you can spawn is a `NetworkPrefab`.** Each one has a fixed `Hash` (a `uint`). `PrefabManager` maps hashes and names to prefabs. A prefab can hold more entities inside it, called embedded entities. See [Prefabs and prefab hashes](prefabs.md).
- **Only the server spawns and destroys.** It calls `SpawnHelper` (or `SpawnManager`), gives the new entity a chunk, and clients are told. See [Spawning](spawning.md) and [Destroying and despawning](destroying.md).
- **The world is cut into chunks.** A `LocationChunk` is a box in the world. On the server every entity players can see belongs to one chunk, or rides on another entity that does. There is also one global chunk and one void chunk. See [Chunks](chunks.md).
- **Chunks load around players and save when they unload.** Loading pulls in the chunk's static scenery, runs any procedural generation, then spawns its saved entities. See [Chunk loading and saving](chunk-loading-and-saving.md).
- **Static scenery is not entities.** Trees, rocks and buildings placed by the designers mostly come in as static content, with a few switchable "modifiable" objects. See [Static objects](static-objects.md).
- **Procedural parts are made from a seed.** The forest ([Forest](forest.md)) and the mine's cave layers ([Caves](caves.md)) make their chunks from a seed. Creatures, ore and plants come from populations ([Populations and spawners](populations.md)). Containers fill from loot tables ([Loot](loot.md)).
- **Time runs on a timeline.** `Timeline` drives everything that waits (respawns, decay, loot refills) and saves with the server. `GameTimeManager` turns it into a day and night. See [Time and environment](time-and-environment.md).

## Who decides what

| What | Decided by | Notes |
| --- | --- | --- |
| Spawning and destroying entities | Server | `ClientSpawnManager.SpawnInternal` and `Destroy` only log an error. |
| Which chunk an entity is in | Server | Clients don't keep chunk entity lists at all: `Chunk.Entities` and `Chunk.Players` are null there. |
| Which chunks load | Server, per player | `PlayerChunkManager` on the server works out the chunks around each player and tells their game which to load. |
| Where an object is | Mostly server | The server moves loose objects and sends `MoveEntity` (`ForcePositionSync`). How held items and physics sync is in [Entity sync](../networking/entity-sync.md) and [Items](../items/overview.md). |
| Where a player is | That player's client | The server asks the client to move (`PlayerEffectController.Teleport`, `LocomotionController.MoveTo`). See [Moving and teleporting](moving-and-teleporting.md). |
| Forest and cave layout | Server | Clients download the forest's cache files from the server. For caves they get the seed and build the same rock themselves. |
| Populations, loot, ore respawns | Server | All run from `Timeline` callbacks on the server. |
| Time of day | Server | It syncs `GameTimeManager` every 10 seconds (the `syncRefreshRate` default). Clients ease towards it. |
| Sky, fog, ambience | Client | `AtmosphereManager` and `DayTimeManager` do nothing visual on headless servers. |

## Threading

Nearly all of it runs on Unity's main thread. Chunk loading, unloading and saving are `async` methods (`Task`), and they resume on the main thread through Unity's synchronization context, so you can touch game objects after an `await` that started on the main thread. A few parts of forest and cave generation run on worker threads (`Task.Run`) and only hand finished data back. Don't call game code from your own threads.

## A note on the source

The game ships two builds of `Root.Township` (both assembly version 0.0.39.2). The client download has the server code compiled out: in it `NetworkScene.InitializeAsServer` and `ChunkFileHelper.GetFolder` are empty, and `ServerCacheManager`, `ServerWipeManager`, `WorldCommandModule` and `SavingCommandModule` aren't there at all. Tavern servers run the server build, which TavernDefaults puts in place and att-stubs is made from. These pages were checked against that server build. Most world code is the same in both; where only the server build has something, the page says so.

## The scenes

The game's scenes, going by the scene dumps: `level4` is the main world (one `NetworkScene` named "Scene 'A'" with about 4,160 embedded entities, the `ForestGenerator`, the `CaveLayerManager` under "Mines", and managers under "Managers"). `level5` is the tutorial islands, with its own `NetworkScene`. `level3` and `level7` are menu scenes with a `LocalNetworkScene`. `level6` is another world scene with chunks and caves but no `ForestGenerator` in its dump, and `level8` a small scene with a `ChunkDisplayTool`, which looks like a test level. Mods that look for objects by name should check which scene they're in.

## Quick recipes

| You want to | Use |
| --- | --- |
| Spawn something in front of a player | `PrefabManager.GetPrefab`, `LocationChunkHelper.GetBestContaining`, `SpawnHelper.Spawn` ([Spawning](spawning.md)) |
| Spawn a stack of items | `SpawnHelper.SpawnPouchOrPickup` |
| Remove an entity | `entity.PrefabRoot.SceneDestroy()` on the server ([Destroying](destroying.md)) |
| Find everything near a point | Walk `Chunk.ChunksByIndex` and each chunk's `Entities` ([Finding entities](finding-entities.md)) |
| Count every entity by prefab | `EntityManager.IterateEntities`, as Canary's census does |
| Know when an area is ready | `Chunk.FullyLoaded`, `Chunk.IsFullyLoaded` ([Chunk loading and saving](chunk-loading-and-saving.md)) |
| Keep an area loaded | `await chunk.ForceLoad()`, later `chunk.IsForceLoaded = false` |
| Move an object | Set its position, then `ForcePositionSync()` ([Moving and teleporting](moving-and-teleporting.md)) |
| Teleport a player far away | `player.SafeMoveToChunk(chunk, position, callback)` |
| React to night | `GameTimeManager.DuskReached` and `DawnReached` |
| Change how fast creatures or ore come back | `PopulationDefinitionManager.SetValue` ([Populations](populations.md)) |

## Pages in this area

| Page | What's on it |
| --- | --- |
| [NetworkEntity](network-entity.md) | The entity component: ids, lifecycle, behaviours, parents, events. |
| [Prefabs and prefab hashes](prefabs.md) | `NetworkPrefab`, `PrefabManager`, hashes, embedded entities, `SaveMode`. |
| [Spawning](spawning.md) | `SpawnHelper`, `SpawnManager`, `SpawnData`, what the `spawn` command does. |
| [Destroying and despawning](destroying.md) | `SceneDestroy`, destroy versus unload, entities that fall out of the world. |
| [Finding entities](finding-entities.md) | Enumerating entities, by chunk, by id, by prefab. The `select` commands. |
| [Chunks](chunks.md) | `Chunk`, `LocationChunk`, the global and void chunks, `Chunker`, chunk lookup. |
| [Chunk loading and saving](chunk-loading-and-saving.md) | How chunks load, sync to players, unload and save. |
| [Static objects](static-objects.md) | Static scenery, modifiable and destroyable static objects, static instructions. |
| [Moving and teleporting](moving-and-teleporting.md) | Moving objects and players, safely and across the world. |
| [Forest](forest.md) | The procedural forest: `ForestGenerator`, its caches, its cost. |
| [Caves](caves.md) | Cave layers, `CaveLayerManager`, `CaveLayerStreamer`, mine structures. |
| [Populations and spawners](populations.md) | How creatures, ore and plants spawn and respawn. |
| [Loot](loot.md) | Loot tables, rarities, origins, containers that refill. |
| [Time and environment](time-and-environment.md) | `Timeline`, `TimeManager`, `GameTimeManager`, sky and fog. |
| [Map and landmarks](map-and-landmarks.md) | The map, map pieces and landmarks. |

## Related areas

Messages, `MethodSync` and how entity state reaches clients are in [Networking](../networking/overview.md). Items, docks and pickups are in [Items, interaction and damage](../items/overview.md). Creature AI is in [Creatures](../creatures/overview.md), and console commands in general are in [Console and utilities](../console-and-utilities/overview.md). The generated [reference tables](../reference/overview.md) list every spawnable prefab with its hash.
