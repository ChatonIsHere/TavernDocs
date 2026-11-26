---
title: Static objects
description: The world's static scenery, how it streams in per chunk, modifiable and destroyable static objects, static instructions and StaticObjectCombiner.
sidebar_position: 9
---

# Static objects

Most of what you see in the world isn't an entity. Cliffs, buildings, fences, the town's fixtures and the forest's trees and rocks are static scenery: plain Unity objects with no id, never sent over the network. Each player's game loads its own copy. Only a few switchable pieces sync, through `ModifiableStaticManager`.

## Static scenery: chunk pointers

A `LocationChunk` lists its scenery as Addressables keys, called pointers: `NormalPointer` (the full scenery, a separate list on Android) and `ColliderOnlyPointer` (just colliders). The chunk's `StaticChunkContentManager` loads them:

- **Servers load `ColliderOnlyPointer`** (when `ApplicationManager.IsHeadless`). The server has the collision of the world but no visuals.
- **Clients load `NormalPointer`.**

`ChunkPrefabPointer` (in `Alta.Chunks`, a `ScriptableObject`) does the work with static methods:

| Member | What it does |
| --- | --- |
| `static Task Use(string reference, Chunk chunk)` | Loads the Addressable if needed and adds the chunk as a user. |
| `static void Unuse(string reference, Chunk chunk)` | Drops the chunk; the last user releases it. |
| `static Task WaitForLoad(string reference)` | Waits until it's instantiated. |
| `static void LoadAndUnload(float allowance)` | Instantiates and destroys queued pointers for up to `allowance` ms. `StreamerManager.Update` calls it every frame with `streamingMillisecondsAllowance` (2 ms default). |
| `static int CurrentlyLoaded { get; }` | Pointers instantiated right now. |

Pointers are shared between chunks: two chunks using the same piece instantiate it once.

`StaticChunkContentManager` has three public static switches: `IsLoadingPointers` (false skips scenery), `IsLoadingSequentially` and `PointersToLoadPerFrame` (default 10). TavernLib's `chunks set-static-load`, `set-static-sequence` and `set-static-per-frame` set them.

Because the scenery is local, a mod can't add or remove a tree for everyone by changing the scenery on the server. Change it on every client, or use an entity.

## Modifiable static objects

A `ModifiableStaticObject` is a piece of static scenery with two looks: its original objects and its modified objects. Its state is one bool, kept by hash in `ModifiableStaticManager` and synced to everyone. The console calls them "such as bridges". Repair boxes (`RepairBox`) use them: finishing a repair sets the object to modified, which shows the built structure.

`Alta.Networking.ModifiableStaticObject`, `MonoBehaviour`, both sides:

| Member | What it does | Notes |
| --- | --- | --- |
| `uint Hash { get; set; }` | Its id, set in the editor. | |
| `void Modify(bool hasEvents = true)` | Shows the modified objects. Destroys the original objects, unless `canReturn` is set, in which case it keeps them active. | Local only; doesn't sync. |
| `void UnModify(bool hasEvents = true)` | Shows the originals, hides the modified ones. | Local only. |
| `ModifiableStaticEvent ModifiedEvent`, `UnModifiedEvent` | Raised by `Modify` and `UnModify`. | |

It listens to `ModifiableStaticManager.ObjectChanged` and applies its state on `Start`, so it catches up when its chunk's scenery loads.

`Alta.Networking.ModifiableStaticManager`, a scene `NetworkEntityBehaviour`, `static ModifiableStaticManager instance`:

| Member | What it does | Side |
| --- | --- | --- |
| `static void ChangeModifications(uint objectHash, bool isModified)` | Sets an object's state. On the server it also sends the change to everyone. | Call it on the server. |
| `static void GetState(uint objectHash, ref bool isModified)` | Reads it. Unknown hashes read false. | Both |
| `static event StaticChangeEvent ObjectChanged` | `(objectHash, isModified)` whenever a state actually changes. | Both |
| `static bool GetObject(uint hash, out GameObject gameObject)` | The loaded object with that hash, if its scenery is loaded here. | Both |
| `static Dictionary<uint, bool> objectMap` | All states. Saved with the global chunk. | |

The `debug static` console module reads and sets these: `debug static check-current`, `debug static list`, `debug static modify <hash> <state>` and `debug static fix <hashes...>`.

A joining player gets the whole map in one message. The count is written as a number from 0 to 1,023, so a server with more than that many changed objects looks like it would send a broken list.

```csharp
// Hear when a destroyable scene object (a wall, a boulder) changes state.
public static void WatchStatics()
{
    ModifiableStaticManager.ObjectChanged += (hash, isModified) =>
        MelonLogger.Msg($"Static object {hash} is now {(isModified ? "modified" : "back to normal")}");
}
```

### DestroyableStaticObject

`Alta.Networking.DestroyableStaticObject` derives from `ModifiableStaticObject` and adds health. On the server it listens to its `ImpactDetector`s. While modified it has `modifiedHealth`; hits take health off (with per-impact-type multipliers and armour), and at zero it calls `ChangeModifications(Hash, false)`, putting it back to its original look for everyone. So "modified" is the built or blocking state, and breaking it returns it to normal. See [Impacts](../items/impacts.md) and [Health and damage](../items/health-and-damage.md).

## Static instructions

Procedural scenery (the forest's trees, rocks and paths) is a list of instructions per chunk rather than pointers.

| Type | What it is |
| --- | --- |
| `Alta.Static.InstructionSet` | A list of `Instruction`s and the results of running them. Cached on disk. `Execute(context, instructionsPerFrame = 10)` runs them as a coroutine, 10 a frame; `Undo()` undoes every result. |
| `Alta.Static.Instruction` | One step. Subclasses include `SpawnInstruction` (place a `StaticEnvironmentPiece` at a position, rotation and scale) and the forest's own instructions. |
| `Alta.Static.StaticEnvironmentPiece` | A `ScriptableObject` with an index, a surface material and a `StaticEnvironmentPieceInstance` prefab. `Spawn(position, rotation, scale)` makes one. |
| `Alta.Static.CacheManager` | Generates or loads cached data by name (`GetCache`). `CacheManager.Instance` is a `ServerCacheManager` on servers (files in `Save/Cache`) and a `ClientCacheManager` on clients, which downloads caches from the server. See [Forest](forest.md). |

Forest Performance (ATT-Optimizations) lowers the forest's batch from 10 instructions a frame to 1 by patching `InstructionSet.ExecuteInternal`, to cut frame spikes. See [Forest](forest.md).

## StaticObjectCombiner

`StaticObjectCombiner` (no namespace) and its subclasses `SceneStaticObjectCombiner` and `DynamicObjectCombiner` merge meshes, join LOD groups, flatten colliders and cut hidden triangles. Nothing in the game's runtime code calls their `Bake()`; they run when the scenery is built in the editor, and the results ship as the pointers above. The static event `OnCreatedRenderers` fires during a bake. For a mod they mostly explain why scenery comes as a few big merged meshes and colliders rather than one object per rock.

## See also

- [Chunk loading and saving](chunk-loading-and-saving.md)
- [Forest](forest.md)
