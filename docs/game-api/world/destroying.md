---
title: Destroying and despawning
description: Remove entities properly from a server mod, the difference between destroying and unloading, and how entities fall out of the world.
sidebar_position: 5
---

# Destroying and despawning

Three different things make an entity go away, and they look alike from a hook:

| What | Who | The entity |
| --- | --- | --- |
| **Destroy** | The server decides it's gone: eaten, burnt, broken, `select destroy`. | Gone for good. |
| **Unload** | Its chunk unloads on the server. | Saved first if it's a `Base` entity, then destroyed. It comes back, with a new id, when the chunk loads. |
| **Despawn for a player** | A player's game stops having it, because they moved away. | Still there on the server. |

On the server only the first two run the destroy code. For the third, the server sends that player a destroy message and their game destroys its copy.

## Destroying from a mod

On the server, call `SceneDestroy()` on the prefab's root:

```csharp
entity.PrefabRoot.SceneDestroy();
```

| Member | Side | What it does |
| --- | --- | --- |
| `NetworkEntity.SceneDestroy()` | Server; does nothing on clients | `Spawner.Destroy(this)`. |
| `NetworkEntity.DelayedSceneDestroy()` | Server | The same, 0.1 s later. Use it from inside a callback of the entity itself. |
| `SpawnManager.Destroy(NetworkEntity entity, bool isUnload = false)` | Server | What `SceneDestroy` calls. The client version only logs "Destroy should not be called on clients". |
| `SpawnManager.DestroyLocal(INetworkEntity entity, bool isUnload)` | Both | The part that runs everywhere. Clients run it when the server's destroy message arrives. |

What a destroy does, in order:

1. `IsBeingDestroyed = true`.
2. `PreDestroy` on the prefab: raises `NetworkPrefab.PreDestroyed`, clears its chunking parent, then sets its chunk to null. Leaving the chunk sends a destroy message to every player who had it.
3. `DestroyedByScene(entity, isUnload)` on the entity.
4. Frees its id.
5. The same for every embedded entity.
6. Prefabs nested under it in the transform hierarchy (docked items, for example): on the server, `Child`, `Creature` and `Ignore` ones are destroyed too (with the same `isUnload`). Others are moved to `DefaultSpawnedFolder`, with the error "Unchilding child of destroyed prefab".
7. `Object.Destroy` on the game object.

Destroying an embedded entity on its own logs "Attempted to destroy child ... without parent", then "Why is a non-prefab being destroyed?", and stops there. Destroy the `PrefabRoot`.

:::danger[Don't use Object.Destroy]
`UnityEngine.Object.Destroy` on an entity skips all of the above. Clients keep a ghost of it and the chunk still lists it. `NetworkEntity.OnDisable` logs "Entity being unofficially destroyed" when this happens.
:::

## Telling destroy from unload

`isUnload` is true when the destroy is part of a chunk unloading (or another non-final removal). Game code that cleans up for good checks it. For example a population counts a real destroy as a lost member (it respawns later), but an unload only frees the spawn point.

```csharp
using Alta.Networking;
using HarmonyLib;
using MelonLoader;

// Tell real destroys from chunk unloads. Runs on server and clients.
[HarmonyPatch(typeof(SpawnManager), nameof(SpawnManager.DestroyLocal))]
static class WatchDestroys
{
    static void Prefix(INetworkEntity entity, bool isUnload)
    {
        if (entity == null || isUnload) return;
        MelonLogger.Msg($"Destroyed {entity.Transform.name}");
    }
}
```

Or per entity, `entity.DestroyedByScene += (e, isUnload) => ...`. It fires once and is then cleared.

`DestroyLocal` isn't virtual and both `ServerSpawnManager` and `ClientSpawnManager` go through it, so one patch covers both sides. `LocalSpawnManager` has its own destroy and doesn't.

## Falling out of the world

On the server, an entity that moves checks which chunk it's in (`Chunker.EvaluateChunk`, run by `ChunkDetector` every frame its transform has changed, by `NetworkRigidbody`, and by `ForcePositionSync`). If its position is in no chunk at all, it happens in two steps. The first check moves it out of its old chunk into no chunk, so players lose it but it stays on the server. The next check that finds it still chunkless acts:

- A loose pickup that a player last touched is posted to that player's postbox (`PostboxManager`) instead. If it's docked, nothing happens.
- Anything else is destroyed with `isUnload: true` and a warning: "ran out of chunks".

`ChunkDetector` only checks when the transform has changed, so something that comes to rest just outside the world can stay there chunkless, unseen and unsaved.

Entities with a chunking parent don't check; they follow the parent.

The edges of the world are where the chunk boxes end. `LocationChunkHelper.GetBestContaining(position)` returning null means "outside". See [Chunks](chunks.md).

## When things are destroyed for you

- **Chunk unloads.** Every prefab entity in the chunk is destroyed with `isUnload: true` after the chunk saves. See [Chunk loading and saving](chunk-loading-and-saving.md).
- **Entering an unloaded chunk.** See [Spawning](spawning.md#into-an-unloaded-chunk).
- **Populations.** `PopulationSpawnArea` destroys its spawned entities when it's destroyed, if `destroySpawnedWithThis` is set. Creatures (`SaveMode.Creature`) are never saved and don't come back from a save. See [Populations](populations.md).
- **Loot refills.** `LootHelper.Spawn` empties every dock before it rolls new loot. See [Loot](loot.md).
- **Wipes.** Forest resets, `save wipe` and cave resets clear chunk saves.

## See also

- [Spawning](spawning.md)
- [NetworkEntity](network-entity.md)
- [Entity sync](../networking/entity-sync.md), for the entity messages
