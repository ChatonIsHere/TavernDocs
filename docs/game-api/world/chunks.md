---
title: Chunks
description: Chunk, LocationChunk, OverworldChunk, the global and void chunks, Chunker and LocationChunkHelper. How the world is divided and how to find the chunk for a point.
sidebar_position: 7
---

# Chunks

The world is cut into chunks. A chunk is the unit that loads, unloads and saves. Each one is itself an entity (an embedded entity of the scene, or a spawned prefab for cave layers) with a `Chunk` behaviour.

| Type | What it is |
| --- | --- |
| `Chunk` | The base class. Has an id, an index, a content manager and, on the server, entity and player lists. The global and void chunks are plain `Chunk`s. |
| `LocationChunk` | A chunk with a box in the world (`Bounds`). Everything a player can stand in. |
| `OverworldChunk` | A `LocationChunk` in the square grid that covers the outdoor map. Named `"Chunk <x>-<z>"`. |
| `CaveLayerChunk` | A `LocationChunk` for one cave layer. See [Caves](caves.md). |
| `StaticCaveChunk` and others | Hand-made interiors and special areas. |

All are in `Alta.Chunks` in `Root.Township`. Rover's capture of a live server had 4,114 chunks, 4,109 of them with bounds.

## Chunk

`Alta.Chunks.Chunk`, a `NetworkEntityBehaviour`. Both sides, but most of it only does anything on the server.

| Member | What it does | Side |
| --- | --- | --- |
| `string ChunkIdentifier { get; set; }` | The chunk's name, which is also its save file name. Stable. | Both |
| `uint Index { get; }` | A small number (13 bits, under 8,192) given out by the server and sent to clients. Positions on the wire are written relative to a chunk index. | Both |
| `uint Seed { get; }` | A hash of `ChunkIdentifier`. Procedural content uses it. | Both |
| `static Dictionary<uint, Chunk> ChunksByIndex { get; }` | Every chunk that has an index. | Both |
| `static Dictionary<string, Chunk> ChunksByIdentifier { get; }` | Every chunk by name. | Both |
| `static int LoadedCount { get; }` | Chunks that are loaded or loading. | Both |
| `bool IsGlobal { get; }`, `bool AutoSyncs { get; }` | The global chunk. | Both |
| `bool IsLoaded`, `IsFullyLoaded`, `IsFullyUnloaded` | Wanted loaded; loaded and finished; unloaded and finished. | Both |
| `bool IsForceLoaded { get; set; }`, `Task ForceLoad()` | Keep it loaded with nobody in it. | Server |
| `ChunkEntityManager Entities { get; }` | The entities in it. | Server only; null on clients |
| `ChunkPlayerManager Players { get; }` | Players who have it loaded (not only those standing in it). | Server only; null on clients |
| `ChunkContentManager ContentManager { get; }` | Its loader. See [Chunk loading and saving](chunk-loading-and-saving.md). | Both |
| `IProceduralGenerationStreamer ProceduralStreamer { get; }` | The forest or cave generator for it, if any. | Both |
| `virtual SpawnData SpawnData { get; }` | The `SpawnData` things generated in this chunk get. `LocationChunk` returns its environment's, with its biome. | Server |
| `Task Save()`, `Task ClearSave()`, `void ForceUnloadAndSave()` | See [Chunk loading and saving](chunk-loading-and-saving.md). | Server |
| `event Action<Chunk> FullyLoaded`, `BeganUnloading`, `FullyUnloaded` | | Both |
| `List<Task> UnloadingGate { get; }` | Tasks an unload waits for. | Server |

## LocationChunk

`Alta.Chunks.LocationChunk`, derives from `Chunk`.

| Member | What it does | Notes |
| --- | --- | --- |
| `Bounds Bounds { get; set; }` | The chunk's box. | |
| `Bounds BufferBounds { get; }` | The box grown by 10 m. Positions in this chunk are packed into this range at 1 mm steps on the wire. | |
| `int Priority { get; }` | Where boxes overlap, the highest priority wins. Interiors sit inside overworld chunks this way. | |
| `ChunkRegion ChunkRegion { get; }` | Which named area it is (`town`, `tavern`, `caves`, and so on, in `Alta.FriendLocation`). | |
| `ChunkEnvironment Environment { get; }` | Biome and environment. `SpawnData` comes from here. | |
| `ChunkConnections Connections { get; }` | Forced neighbours with a load cost. Cave layers connect to the layer above this way. | |
| `ChunkPositions Positions { get; }` | Spawn surfaces. Chunks with surfaces are in `ContentLocationChunks`. | |
| `float DynamicLoadStrength`, `StaticLoadStrength` | How far loading spreads from this chunk. | See loading. |
| `void SetOverrideLoadDistance(float distance, bool isOverriding = true)` | Give this chunk its own load distance. | |
| `ChunkEffect[] chunkEffects` | `ScriptableObject`s whose `Apply(bool isContained)` runs when the local player enters or leaves. | Client only; skipped on headless. |
| `bool HasLocalPlayer`, `static LocationChunk ChunkWithLocalPlayer`, `event Action<bool> HasLocalPlayerChanged`, `static Action<LocationChunk> OnChunkWithLocalPlayerChanged` | The local player's chunk. | Client |
| `virtual void PlayerEnteredChunk(Player player)` | Called when a player's current chunk becomes this one. | Both. `CaveLayerChunk` uses it for the deepest-layer task. |
| `static HashSet<LocationChunk> AllLocationChunks`, `ContentLocationChunks` | All of them; those with spawn surfaces. | |

## The global chunk and the void chunk

`NetworkSceneManager.Current.GlobalChunk` holds the scene's own entities: managers, fixtures and the chunk entities themselves. The server force-loads it at start (`NetworkScene.InitializeAsServer`) and adds every player to its `Players` when they join (`ServerHandler`), so it's always loaded and every player has all of it. Clients never unload it, and the server sends it to a player all at once rather than a few entities at a time (`IsGlobal` makes `AutoSyncs` true and its sync finish immediately). Cave layer streamers are spawned into it too.

It saves only the scene's embedded entities. **A prefab you put in the global chunk is never saved**; if its `SaveMode` is `Base` the save logs "Prefab ... in the global chunk won't be saved!". Positions in it go over the wire as three full floats.

`NetworkSceneManager.Current.VoidChunk` is a parking place. `Player.SafeMoveToChunk` moves a body there while the destination loads. See [Moving and teleporting](moving-and-teleporting.md).

## Finding the chunk for a point

`Alta.Chunks.LocationChunkHelper`, static, both sides.

| Member | What it does |
| --- | --- |
| `static LocationChunk GetBestContaining(Vector3 position, LocationChunk currentChunk = null)` | The highest-priority chunk whose box holds the point, or null if none does. Pass the current chunk when you have one: it checks it and its neighbours first. |
| `static IEnumerable<LocationChunk> GetAllContaining(Bounds bounds)` | Every chunk whose box meets the bounds. |
| `static bool IsInOverworldChunk(Vector3 position)` | Whether the point is in the overworld grid. |
| `static OverworldChunk GetOverworldChunkAtPosition(Vector3 position)` | The grid chunk under a point. |
| `static HashSet<Chunk> GetChunksWithinRadius(OverworldChunk chunk, float distance)` | Grid chunks within `distance` cells, plus their connected chunks. |
| `static void GetChunksToLoad(LocationChunk chunk, HashSet<Chunk> dynamicChunks, HashSet<Chunk> staticChunks)` | The chunks a player standing in `chunk` loads. |
| `static void RegisterOtherChunk(LocationChunk)`, `DeregisterOtherChunk`, `RemoveOtherChunk`, `ResetOtherChunksBounds()` | For chunks made at runtime (cave layers). |

The lookup is a grid for overworld chunks (a direct index from x and z) plus a list of other chunks checked by box. It's cheap; call it freely.

```csharp
// Which chunk a point is in, and what it says about itself.
public static string Describe(Vector3 position)
{
    LocationChunk chunk = LocationChunkHelper.GetBestContaining(position);
    if (chunk == null) return "outside every chunk";
    return $"{chunk.ChunkIdentifier} (index {chunk.Index}, {chunk.ChunkRegion}, loaded {chunk.IsFullyLoaded})";
}
```

## Chunker: how an entity belongs to a chunk

`Chunker` in `Root.Township`, no namespace. Every `NetworkEntity` makes one in its constructor. It's `protected` on `NetworkEntity` (reach it as `((IChunkedEntity)entity).Chunker`). You rarely need it: `entity.Chunk`, `entity.ChunkingParent`, `entity.Children` and the chunk events wrap it.

| Member | What it does |
| --- | --- |
| `Chunk Chunk { get; }`, `void SetChunk(Chunk)` | The chunk. On the server `SetChunk` does nothing while there's a parent. |
| `Chunker Parent { get; }`, `void SetParent(Chunker target, bool isDestroying = false)` | Chunking parent. Children always take the parent's chunk, recursively. |
| `IEnumerable<Chunker> Children`, `int ChildCount` | |
| `HashSet<Player> SpawnedForPlayers { get; }` | Players whose game has this entity. |
| `bool IsServerOnly`, `void SetServerOnly(bool)` | See [Prefabs](prefabs.md). |
| `void EvaluateChunk(bool isLoggingOnFailure)` | Server, no parent: if the position has left the current chunk's box, move to the best chunk for it. No chunk at all means the entity is posted or destroyed. See [Destroying](destroying.md#falling-out-of-the-world). |
| `event ChunkEventHandler EnteredChunk`, `LeftChunk`, `event ChunkerChangedHandler ParentChanged` | |

Moving to a chunk adds the entity to the new chunk's `Entities` (which sends it to that chunk's players) and removes it from the old one (which despawns it for players who don't have the new chunk).

### ChunkDetector

`ChunkDetector` (a `NetworkEntityBehaviour`, no namespace) is how most moving things keep their chunk right. On the server, once a frame, if its target transform's `hasChanged` is set, it calls `EvaluateChunk` and clears the flag. It switches itself off while the entity has a chunking parent, and in the global chunk. Things without one (most static props) never re-chunk unless you call `EvaluateChunk` or `ForcePositionSync`.

## Hooking chunks

| Target | Why | Watch out |
| --- | --- | --- |
| `Chunk.FullyLoaded`, `FullyUnloaded`, `BeganUnloading` events | Per chunk; subscribe from a loop over `ChunksByIndex`. | Subscribe on the main thread. |
| `ChunkEntityManager.Add` / `Remove` | Every entity entering or leaving any chunk. | Very hot during loads and with physics objects moving about. |
| `LocationChunk.PlayerEnteredChunk(Player)` | A player's current chunk changed. | Virtual, overridden by `CaveLayerChunk`; patch the base and the override if you need both. |
| `Chunker.EvaluateChunk(bool)` | Avoid. | Runs for every moving entity every frame it moves. |
| `ConsoleEvents.PlayerMovedChunk` | Server: a player moved from one chunk to another, as a console event. | See the Console area. |

## See also

- [Chunk loading and saving](chunk-loading-and-saving.md)
- [Finding entities](finding-entities.md)
