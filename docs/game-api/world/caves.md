---
title: Caves
description: The mine's procedural cave layers. CaveLayerManager, CaveLayerStreamer, how layers are made, generated and saved, cave teleporters and mine structures.
sidebar_position: 12
---

# Caves

Below the mine entrance north of the blacksmith, the caves are a stack of procedural layers, each deeper than the last, with no fixed bottom. Each layer is its own chunk. Layers are made on demand as players go down, and their rock is rebuilt from a seed every time they load. Only the entities on them are saved.

Everything here is in `Alta.Caves` and `Alta.Chunks` in `Root.Township`.

## How a layer comes to exist

1. `CaveLayerManager` (one in the scene) prepares on the server as soon as it has a chunk. It picks the cave seed: the saved one (its `Load` restores the seed, layer prefabs, entrances and depths; a save with no seed deletes the old layers' chunk files instead), else the `PregeneratedCave` asset's, else `CaveSettings<GeneralSettings>.Instance.Seed`. If that is still -1 it picks a random seed and deletes old `Cave Layer` chunk files (`ChunkFileHelper.CleanCavesSave`). It then makes layer 0.
2. Making a layer (`SpawnWithoutGenerating(layer)`) spawns a cave streamer prefab into the global chunk, under the manager, `HeightSeparation` (15 m in the shipped `1. General Settings` asset) deeper than the layer above (or at a saved depth), with `SaveMode.Ignore`. The prefab is `StreamingSettings.CaveStreamerPrefab`, or a special one for some layer numbers (`SpecialLayers`: the shipped settings have special prefabs for layers 20, 40 and 60). Its chunk is a `CaveLayerChunk` named `"Cave Layer <n>"`, connected to the layer above (layer 0 to the mine's entrance chunk). On the normal streamer prefab (`Cave Layer Chunk`) that chunk is a box 400 m by 400 m and 15 m tall, priority 2, region `caves`, with chunk effects for darkness, portal occlusion, hiding the overworld terrain and unloading distant landmarks. The first layer's opening is at x -899, z -173 (`topOpening`), the mine shaft's portal Rover found.
3. When a layer's chunk is fully loaded, or the chunk lookup or loader looks at its neighbours, the server makes the layers above and below it exist too (`CaveLayerChunk.PrepareAdjacentLayers`). Existing isn't loading; it just means the chunk is there to be loaded.
4. When the layer's chunk loads, its streamer waits for its entrance position (set when the layer above finds its exit), then generates.

So walking down creates layers one ahead of the deepest player. Rover's notes: layers and their navmesh only appear on the server as a player goes down.

### Generation

`CaveLayerStreamer.Generate` spawns the layer's content prefab (`GeneralSettings.LayerPrefab`, `SaveMode.Ignore`) and its `GenerationBase` runs:

- It gets the layer's biome (`CaveLayerManager.GetBiome(layer)`: each biome is made from the one above, from a seed per layer) and gives the chunk a `SpawnData` with that biome. Loot, ore mixes and creatures read its attributes.
- It sends the seed to clients (`CaveSeedArguments`), who build the same rock themselves.
- It splits the layer into map chunks of `chunkSize` 256 (the shipped `Cave Layer Generation` prefab uses one, 1 wide and 1 high). Each map chunk's data generates on its own thread (`ChunkThread`, one `System.Threading.Thread` each). Rendering then runs on the main thread, one layer at a time (`GenerationBase.CurrentlyRendering`), for up to `MillisecondAllowance` minus the last frame's time each frame (at least 1 ms). The shipped allowance is 20 ms, so a layer being rendered can take most of a server frame. CavePerformance (ATT-Optimizations) replaces this with a shared 4 ms target (its `generation_ms` setting).
- On the server, after rendering, it builds the layer's pathfinding graph (`CaveLayerStreamer.GeneratePathfinding`).
- Plugins (the `Plugins` `PluginList` asset, run as `PluginInstance`s) do the work: blob, floor plan, tunnels, room fixes, ceiling and floor passes, marching cubes and so on build the rock, and other plugins place things. A plugin marked dynamic is only enabled while `IsGeneratingDynamic`, which is true on the server the first time a layer ever generates. That flag is saved with the layer. In the shipped assets the dynamic plugins are Cave Explosion Boulders, Crystal Structures, Crystals, Grass, Large Cave Mushroom, Mining Crystals, Mushrooms, Natural Resource Mounds, Structures, Teleport Totem Positions and Wall Supports. So mining crystal spots, crystal structures and the teleport totem's spot are only worked out once, which is why CheetosOreSpawnFix found mined crystals never come back. Normal and sandstone boulders use non-dynamic plugins, so their spawn points are rebuilt every load.

While a layer's map chunks generate, the server force-loads the layer's chunk, and when rendering finishes it sets `IsForceLoaded` back to false (`GenerationBase.UpdateRendering`). If you force-load a layer yourself, expect that to undo your force-load; CheetosOreSpawnFix patches the setter to keep its pinned levels loaded.

The layer's own state (its depth, entrance, `isGenerated`) saves as the chunk's data, since the streamer itself is `Ignore`. Its entities save in the `"Cave Layer <n>"` chunk file like any chunk.

## CaveLayerManager

`Alta.Caves.CaveLayerManager`, a scene `NetworkEntityBehaviour`. `static CaveLayerManager Instance`. Mostly server.

| Member | What it does | Notes |
| --- | --- | --- |
| `Dictionary<int, ICaveLayer> Layers { get; }` | The layers that exist, by number. | |
| `int Seed { get; }`, `HashFunction LayersSeedHash { get; }` | The cave seed and the hash layers derive theirs from. | Synced to clients. |
| `PregeneratedCave Pregenerated { get; }` | Optional asset with fixed layers. | The game ships one, `Cave 2144311704` (that seed, with meshes for 10 layers). The scene dump doesn't say whether the manager points at it. |
| `ICaveLayer SpawnWithoutGenerating(int layer)` | Makes a layer exist (or returns it). Doesn't load it. | Server. Makes only that layer; the ones between are made as neighbours load. |
| `Task<GeneratedBiome> GetBiome(int layer)` | The layer's biome, making the ones above if needed. | |
| `Task WaitForEntranceInformation(int layer)` | Waits until the layer's entrance is known. | |
| `Task ClearCaveSystem()` | Unloads and clears every layer's save, destroys the streamers, picks a new seed and makes layer 0 again. | Server. Players still in the caves aren't moved by this method. `world caves reset` and `save wipecaves` call `ServerWipeManager.WipeCaves()`, which locks joins, moves every player who isn't in an overworld chunk to the `OutsideCave` spawn area with `SafeMoveToChunk`, calls this, then raises `ServerWipeManager.CaveWipe` (the `CaveTeleporterManager` resets its teleporters on it). |

`ICaveLayer` (in `Alta.Chunks`) is what `Layers` holds: `CaveLayerStreamer` or `StaticCaveChunk`. It has `LayerIdentifier`, `Chunk` (the `LocationChunk`), `Entity`, `Depth`, `Entrance`, `PortalTransform` and `Manager`.

```csharp
// List the cave layers the server has made so far.
public static void LogLayers()
{
    CaveLayerManager manager = CaveLayerManager.Instance;
    if (manager == null) return;
    foreach (var pair in manager.Layers.OrderBy(p => p.Key))
    {
        ICaveLayer layer = pair.Value;
        MelonLogger.Msg($"Layer {pair.Key}: depth {layer.Depth}, chunk {layer.Chunk.ChunkIdentifier}, loaded {layer.Chunk.IsFullyLoaded}");
    }
}

// Make a layer exist and load it, without a player. Server only, slow.
public static async Task<ICaveLayer> LoadLayer(int layer)
{
    ICaveLayer cave = CaveLayerManager.Instance.SpawnWithoutGenerating(layer);
    await cave.Chunk.ForceLoad();
    return cave;
}
```

`LoadLayer` on a layer whose upper neighbour has never generated waits for that layer's exit, which may never come. The game's `generatecaves <layer>` command (in `ProgressCommandModule`) shows the safe way to go deep: for each layer from 0 down, make it, `await ForceLoad()`, then `ForceUnloadAndSave()`. It refuses more than 100 layers.

## CaveLayerStreamer

`Alta.Chunks.CaveLayerStreamer`, on the streamer prefab. It's the layer's `ICaveLayer` and its chunk's `IProceduralGenerationStreamer`.

| Member | What it does |
| --- | --- |
| `int LayerIdentifier`, `LocationChunk Chunk`, `CaveLayerManager Manager`, `GenerationBase Generator` | |
| `bool IsGeneratingDynamic { get; }` | See above. |
| `Ecosystem Ecosystem { get; }` | The layer's creatures and plants. See [Populations](populations.md). |
| `Bounds Bounds`, `Vector2 Entrance`, `float Depth` | |
| `event Action<int, float, Vector2, Vector2> ExitReady` | The layer found its exit; the manager uses it to place the next layer. |
| `Task Generate()` | Builds the layer. Called from its chunk's dynamic load. |
| `bool NeedToGeneratePathFinding`, `IEnumerator GeneratePathfinding()` | The layer's navigation graph, server. |

Its `IProceduralGenerationStreamer` methods are explicit interface implementations: `LoadStatic` does nothing, `LoadDynamic` generates, `UnloadDynamic` drops the generator, `UnloadStatic` clears renderers. CavePerformance (ATT-Optimizations) patches `"Alta.Chunks.IProceduralGenerationStreamer.LoadDynamic"` on it and `GenerationBase.UpdateRendering` (private) to pace generation.

## What lives on a layer

A cave layer's `Ecosystem` (on the `Cave Layer Chunk` prefab) sets up its populations when the layer generates. Shipped values:

| Population | Average maximum | Starts with | Spawn points from |
| --- | --- | --- | --- |
| Wyrm Population | 25 | 2 or more | Wyrm Positions plugin |
| Crystal Wyrm Population | 12 | 1 or more | Crystal Wyrm Positions plugin |
| Turabada Cave Population | 20 | 3 or more | Turabada Positions plugin |
| Boulder Population (ore) | all its points | full | Normal Boulders plugin |
| Sandstone Population Population | all its points | full | Sandstone Boulders plugin |
| Mining Crystals Population | 20 | 2 or more | Mining Crystals plugin (dynamic) |
| Crystal Structures Population | 15 | 2 or more | Crystal Structures plugin (dynamic) |
| Geode Population | 3 | 3 | |
| Basic Diggables Cave Population | 5 | 5 | |
| Teleport Totem Population | 1 | 1 | Teleport Totem Positions plugin (dynamic) |

How the numbers become a sample (`Ecosystem.PopulationApplication.InitializeSample`): the maximum is the average maximum times each of the definition's attribute impacts for the layer's biome, rounded, then times `maxPopulationMultiplierOnSimpleServers` on a simple server (0.5 for the three creature kinds). The start is a random value between the minimum start and that maximum. Populations marked `isLimitedBySpawnPoints` (boulders, sandstone) instead take their maximum from the number of spawn points the plugin found, and start full. See [Populations](populations.md) for how they tick.

## Cave teleporters

`CaveTeleporter` (a `NetworkEntityBehaviour`) sits on every tenth layer. It needs fuel in its dock; on `Teleport(IPlayer)` it takes the fuel and calls `CaveTeleporterManager.TeleportPlayer`, which moves the player with `SafeMoveToChunk`. See [Moving and teleporting](moving-and-teleporting.md#cave-teleporters). `repaircaveteleporters <layer>` (`ProgressCommandModule`) repairs them down to a layer.

## Mine structures

`MiningBaseGenerator` (no namespace, a `GeneratedNetworkEntityBehaviour`) builds a mine structure out of `StructurePart` pieces on a grid (12 by 12 by 12 cells in the shipped `Mining Base Generator` prefab), from 10 to 80 parts there, choosing parts by chance and biome attributes. On generate it spawns each part with `SpawnHelper.Spawn(..., Entity, SaveMode.Child, ...)`, so the parts ride on the structure and save inside it. Spawned with `SpawnData.DontGenerate`, it builds nothing.

`ClusterGenerator` (in `Alta.Caves.Displays`) places clusters of children (ore boulders, for one). CheetosOreSpawnFix patches its `Generate` and `PositionChild` to choose ore and keep boulders out of the rock.

## Costs and traps

- **Generation is the expensive part.** Rock data on threads, rendering a few ms a frame, a pathfinding scan on the server. Generating many layers in a row (the `generatecaves` command) is slow.
- **Rover's measurements:** three players on layer 1 cost little (75 to 78 fps on the server). Ten bots going down to layer 4 needed god mode; creatures on layers 1 and 2 kill unarmed bots.
- **The rock isn't saved, only rebuilt.** Anything that depends on exact rock shape (a buried check, a spawn point) is recomputed each load. Things placed in the rock by dynamic plugins aren't placed again.
- **`world caves teleport` only works for a layer that hasn't generated** (Rover). For an existing layer, use `SafeMoveToChunk` to a point in it.
- **Cave chunks get their indices at runtime.** A server with many layers uses many chunk indices; the limit is 8,192 chunks, and running out shuts the server down ("Ran out of chunk indices").

## Other types in this area

| Type | What it is |
| --- | --- |
| `GeneratedBiome`, `Biome`, `CaveBiomeGenerator`, `BiomeSettings`, `AttributeSet`, `BiomeAttribute` | Layer biomes and their attributes (prosperity and so on). |
| `Distribution` | A weighted list (of prefabs, materials) whose weights depend on biome attributes. `GetRandomAs<T>(AttributeSet)`. Populations and material parts use it. CG-Nik's CustomDistributionAPI builds new ones by reflection. |
| `StreamingSettings`, `GeneralSettings`, `CaveSettings<T>` | Settings assets. `CaveSettings<T>.Instance`. |
| `MapChunk`, `MapChunkLayer`, `ChunkThread` | One square of a layer's generated data. |
| `Plugin`, `PluginInstance`, `PluginParts.*` | Generation steps. |
| `Displays.*` | Turn generated data into meshes and objects (`MarchingCubesChunkDisplay`, `GameObjectDisplay`, `ClusterGenerator`). |
| `CaveTeleporterManager`, `CaveTeleportConnection`, `CaveTeleportSettings`, `LevelSelectCaveTeleporter` | Teleporters between layers. |
| `PregeneratedCave` | Fixed layers in an asset. |

## See also

- [Chunk loading and saving](chunk-loading-and-saving.md)
- [Populations and spawners](populations.md)
- [Loot](loot.md)
