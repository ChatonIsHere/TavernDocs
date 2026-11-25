---
title: Forest
description: The procedural forest east of town. ForestGenerator, its seed, its caches, what it does per chunk, how it resets, and why it costs a server so much memory.
sidebar_position: 11
---

# Forest

The forest (east of town; Rover's capture put its overworld chunks at grid x 27 to 55) is generated from a seed. A path network of nodes and edges is laid out inside an outline, the terrain under it is reshaped and painted, rivers are carved, then each chunk gets its trees, rocks, encounters and creatures as it loads. Most of it is cached on disk by seed, so a server only generates it once per seed, and players download the server's cache files instead of generating anything.

Everything here is in `Alta.Forests` in `Root.Township`, unless noted.

## ForestGenerator

`Alta.Forests.ForestGenerator`, a `NetworkEntityBehaviour` placed in the scene. One per forest; `ForestGenerator.All` lists them. The scene's forest uses the cache name `"The Forest"` (the `cache` field's default, and what `world forest teleport <players> "The Forest" <node>` takes).

| Member | What it does | Side |
| --- | --- | --- |
| `static IEnumerable<ForestGenerator> All { get; }` | Every forest in the scene. | Both |
| `static Task<ForestGenerator> Get(Vector2 position)` | The forest whose outline holds an x/z point. Waits for generation. | Both |
| `string Cache { get; }` | The forest's name in cache files. | Both |
| `Task<ForestGeneration> GetGenerationAsync()` | The generated layout. Starts generation the first time, then returns the same task. | Both |
| `ForestGeneration GetGenerated(bool isThrowingError = true)` | The layout if it's done, else null (and an "Early request" error). | Both |
| `ICollection<Node> Entrances { get; }` | The entrance nodes. | Both |
| `RiverGenerator RiverGenerator { get; }` | Rivers, lakes and waterfalls. | Both |
| `event Action<LocationChunk> GeneratedDynamic` | A chunk got its creatures and items. | Server |
| `Task Wipe(int newSeed = -1)` | Resets the forest. See below. | Server |
| `void RegenerateNavmesh()` | Rebuilds the server navmesh inside the outline. | Server |
| `Task RequestStatic(LocationChunk, bool, CancellationToken)`, `Task RequestDynamic(LocationChunk)`, `ReleaseStatic`, `ReleaseDynamic` | Per-chunk work, called by `ForestChunk`. | Both / server |

The seed is a saved field. With none (`-1`), the server picks a random one in `InitializeAsServer` and sends it to each player in `OnConnected`. A client that asks for the layout before the seed arrives waits for it.

## ForestGeneration

`Alta.Forests.ForestGeneration`, the layout. It's an `ICacheable`, so it's stored in the cache.

| Member | What it is |
| --- | --- |
| `uint Seed`, `Bounds Bounds`, `float Area` | |
| `IReadOnlyList<Node> Nodes`, `IReadOnlyList<Edge> Edges`, `IEnumerable<Space> Spaces`, `int NodeCount` | The path graph. A `Node` has `Index`, `Position` (x/z), `Height`, `Position3d` and `Radius`. |
| `ICollection<Node> EntranceNodes`, `ICollection<Vector3> Outline`, `ICollection<Vector3> Entrances` | |
| `bool Contains(Vector2 point)` | Whether an x/z point is inside the outline. |
| `Node ClosestNode(Vector2 point, out bool isWithinRadius)` | Nearest node. |
| `float DistanceToPath(Vector2 point, Predicate<Edge> predicate, bool isIncludingRadius = true)` | Distance to the nearest path edge. |
| `IEnumerable<Node> GetNodesWithinChunk(LocationChunk)`, `GetEdgesWithinChunk` | |
| `BiomeSphereManager BiomeSphereManager` | Biome areas inside the forest. |

```csharp
// Log each forest's seed and size once it has generated.
public static async Task LogForests()
{
    foreach (ForestGenerator forest in ForestGenerator.All)
    {
        ForestGeneration generation = await forest.GetGenerationAsync();
        if (generation == null) continue;
        MelonLogger.Msg($"{forest.Cache}: seed {generation.Seed}, {generation.NodeCount} nodes, bounds {generation.Bounds}");
    }
}
```

## What happens, in order

**The first time anything asks** (`GetGenerationAsync`), the layout is generated or read from cache. In practice that's the first overworld chunk to load: every `OverworldChunk` in the main scene dump (200 of them listed) also has a `ForestChunk`, whose `LoadStatic` asks every forest for its layout to find out whether it overlaps. `ForestGenerator` has private `Bootup` and `Connection` methods that would run this at server start and make joining clients download the caches, but nothing registers them in this build, so they never run. Generation:

1. **Nodes** (cache `"Forest Nodes The Forest"`): the path graph. Heavy parts run on worker threads.
2. **Terrain** (cache `"Forest Terrain - The Forest"`): heights and splat (ground paint) for the area, then rivers. Worked out on worker threads, then applied to the Unity terrain on the main thread.
3. **First time only**: every chunk save under the forest's bounds is cleared, then each chunk's static instructions are generated, five chunks at a time.

**When a forest chunk loads** (its `ForestChunk`, an `IProceduralGenerationStreamer`):

- Static: the chunk's `InstructionSet` (cache `"<chunk> - Forest Static - The Forest"`) is executed, 10 instructions a frame. That places trees, rocks, cliffs and path pieces. On the server, the navmesh is updated over the chunk's bounds.
- Dynamic, server, only if the chunk had no save: each `IForestGeneration` part (`ForestEncounters`, populations, and so on) spawns its creatures and items, then every generation core runs its dynamic step with a seed of forest seed plus chunk seed. Then `GeneratedDynamic` fires.

**When it unloads**, the chunk's instructions are undone (their objects removed).

Cache file names come from `CacheManager.GetCacheName(context, chunk, seed)`: `"<server id> - <chunk> - <context> - <seed>.cache"`. A new seed means new files; old ones stay until something cleans them. On the server, `ServerCacheManager` (set up by `ServerHandler` at start) keeps them in the server's `Save/Cache` folder (`SaveUtility.CacheFolder`). Its `GetCache` reads the file if it exists, or runs the generator, writes the result to the file and returns it. It doesn't keep results in memory between calls, but requests for a name that's still generating wait for that one generation. `save wipecache` deletes the whole folder (`ServerHandler.WipeCache`), and a full `save wipe` deletes it along with the chunk saves.

Clients never generate: `ClientCacheManager.GetCache` downloads each cache file it lacks from the server and reads it, so a player's layout, terrain and scenery come from the server's files. A client asks for each file the first time it needs it, so the node and terrain caches come down with the first chunk it loads, and per-chunk static caches as each forest chunk loads. A client keeps them in its own cache folder, and `ClientCacheManager.Clean(limit)` trims it (200 MB default).

## Resetting the forest

`ForestGenerator.Wipe(int newSeed = -1)` (server; `world forest reset`, alias `wipe`, just calls it):

1. With `newSeed` below 0 (the default), picks a new random seed. **It never uses `newSeed`**: a value of 0 or more just keeps the current seed, so you can't pick one through this method. Set the private `seed` field first if you need a particular one.
2. Deletes the node and terrain cache files. The names are built after step 1, so they carry the new seed: the old seed's files stay on disk.
3. For every chunk in the forest's bounds: stops force-loading it, waits a second, saves it, clears its save, and deletes its static cache (again under the new seed's name).
4. Teleports every player in those chunks to the `OutsideForest` spawn area.
5. Resets the rivers, then awaits `GetGenerationAsync()` again. Nothing clears the stored generation task, so this returns the old layout at once.

So in this build a reset clears the chunk saves and changes the saved seed, but the layout itself looks like it only changes when the server restarts. Chunks that load before then name their static caches after the new seed while building them from the old layout. The players' games also still have the old terrain and scenery loaded. Forest Performance (ATT-Optimizations) treats a reset as maintenance (disconnect players, lock joins, restart after); its ForestResetFix exists to make the reset wait for cache work before it commits the new seed. A separate ForestSeedUtil mod handles seed preferences; it isn't covered here.

## Cost

The forest is the most expensive part of the world for a server.

- **Memory.** In Rover's test six bots in the forest took the server's heap from 0.9 GB to 3.3 GB and its process from 3.2 GB to 6.6 GB. It didn't come back down after the forest emptied (2.4 GB heap, 5.2 GB process). Unity's Mono uses the Boehm collector, which never returns heap to the system, and each forced garbage collection pause grows with the heap.
- **Entities.** The same test went from about 9,000 entities to 17,000 to 20,000.
- **Frames.** The server fell from about 80 fps to 33 to 46, with many spikes over a second. The worst frames spent little time in the game's tracked update modules, so the time goes elsewhere (instruction batches, navmesh updates and entity loads are the likely suspects; Forest Performance targets exactly these).
- **Navmesh.** Each forest chunk load on the server queues an A* graph update over the chunk's bounds and waits for it.

If your mod adds work per forest chunk, hook `GeneratedDynamic` or the chunk's `FullyLoaded` rather than polling, and keep it small.

## Hooking it

| Target | Why |
| --- | --- |
| `ForestGenerator.GeneratedDynamic` event | A chunk was filled for the first time. |
| `InstructionSet.ExecuteInternal(object, Task, int)` | The per-frame instruction batch. Private iterator; Forest Performance changes its batch size (`instructionsPerFrame`) here. |
| `ForestChunk`'s `"Alta.Chunks.IProceduralGenerationStreamer.LoadDynamic"` | The dynamic step per chunk. Explicit interface method. |
| An `IForestGeneration` part, such as `ForestEncounters.GenerateDynamic` | What one part spawns. Explicit interface methods too. |

```csharp
// Run after the forest has filled a chunk with its creatures and items.
public static void WatchForestChunks()
{
    foreach (ForestGenerator forest in ForestGenerator.All)
        forest.GeneratedDynamic += chunk => MelonLogger.Msg($"Forest filled {chunk.ChunkIdentifier}");
}
```

## Other types in this area

| Type | What it is |
| --- | --- |
| `IForestGeneration` | A forest part: `GenerateGlobal`, `GenerateStatic` (adds instructions), `GenerateDynamic`, `ClearStatic`, `ClearDynamic`. |
| `ForestEncounters` | Places encounters along the paths. |
| `ForestPopulationArea`, `ForestPopulationCreator`, `PerChunkForestSpawner` | Creature and plant populations inside the forest. |
| `ForestFill`, `CliffFill`, `CutoutPathEdgeFill`, `RiverEdgeFill`, `RiverCenterFill` | Fill the ground with scenery instructions. |
| `RiverGenerator`, `LakeGenerator`, `WaterfallEffectGenerator` | Water. |
| `ForestBridges`, `LandBridgeModifier`, `ForestConnectivityIncreaser` | Make sure paths join up. |
| `Node`, `Edge`, `Path`, `Space` | The path graph. |
| `ForestGCoreInstruction`, `SplineInstruction` | Forest instructions. |
| `ForestChunk` (no namespace) | The per-chunk streamer. |

## See also

- [Static objects](static-objects.md#static-instructions)
- [Chunk loading and saving](chunk-loading-and-saving.md)
- [Populations and spawners](populations.md)
