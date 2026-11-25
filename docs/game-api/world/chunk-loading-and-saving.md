---
title: Chunk loading and saving
description: How chunks load around players, stream their entities to clients, unload and save, and how to force-load or wipe a chunk from a mod.
sidebar_position: 8
---

# Chunk loading and saving

A chunk on the server is loaded while some player needs it, or while something forces it. Loading brings in its scenery, runs procedural generation, then spawns its saved entities. Unloading saves its entities and destroys them. All of it is `async` code on the main thread.

## Which chunks load

On the server, each `Player` has a `PlayerChunkManager` (`player.ChunkManager`). Every time the player's body moves (`LocomotionController.PositionChanged`), it:

1. Finds the chunk at the new position. If there's none, it logs "is in a null chunk" and sends the player to a respawn point.
2. Asks its chunk loader for two sets around that chunk: **dynamic** chunks (entities load) and **static** chunks (scenery loads). PC players use `NormalChunkLoader`; Quest players use `OptimisedChunkLoader`.
3. Adds the player to each dynamic chunk's `Players` and removes them from the ones they left. A chunk's first player starts its load; its last player leaving starts its unload.
4. Sends the player their current chunk and the static list. The player's game force-loads those chunks itself to show their scenery.
5. If the current chunk changed: sets the body's chunk, calls `PlayerEnteredChunk`, raises `ChunkChanged`, and fires the `PlayerMovedChunk` console event.

The sets come from `LocationChunkHelper.GetChunksToLoad`. Each chunk has a load budget (`DynamicLoadStrength`, `StaticLoadStrength`). In the overworld grid the budget is a radius in grid cells. Through connections (cave portals, for example) the budget goes down by each connection's cost. The defaults come from the `2. Streaming Settings` asset (`CaveSettings<StreamingSettings>.Instance`): `dynamicChunkLoadRadius` 1.5, `staticChunkLoadRadius` 3 and `caveConnectionCost` 1 in the shipped game. Each is multiplied by `DynamicLoadDistanceMultiplier` or `StaticLoadDistanceMultiplier`, plain properties that start at 1 and that a mod can set (the game's own `quality dynamic-load-multiplier` and `quality static-load-multiplier` console commands set them, server only). A chunk can override its own with `SetOverrideLoadDistance` (its `loadDistance` field).

So in the overworld a player loads the entities of their grid cell and the 8 around it (the diagonals are 1.41 cells away, inside 1.5), and the scenery of every cell within 3. Raising the dynamic multiplier loads more chunks per player, which multiplies entity counts and sync work.

## A chunk's load, step by step

`Chunk.UpdateLoadedAsync` (private) decides. A chunk should be loaded if it's force-loaded, or it has players, or a player sync to it is still running, or it's partway through loading. When that changes it calls `ContentManager.Load()` or `Unload()`.

On the server the content manager is a `ServerChunkContentManager` with two parts:

| Part | Loads | Saves |
| --- | --- | --- |
| `StaticChunkContentManager` | The chunk's static scenery pointers. Servers load the collider-only version. | Nothing of the world. |
| `DynamicChunkContentManager` | The chunk's save file, procedural content, then its entities. | The chunk's entities. |

`DynamicChunkContentManager` loads in this order:

1. Starts reading the save file in the background.
2. `ProceduralStreamer.LoadStatic`: the forest runs its static instructions for this chunk (trees, rocks, terrain), and on the server updates the navmesh for it.
3. Finishes reading the save. If there is no save (or it's too old for the chunk's `MinimumSaveVersion`), it reads the chunk's default save from `Resources/Save/<ChunkIdentifier>`, and if there's none of that either, starts empty.
4. `ProceduralStreamer.LoadDynamic(hasGenerated)`, where `hasGenerated` means a server save was found. The forest only spawns its creatures and items when there was no save. A cave layer rebuilds its rock every time, but runs its dynamic plugins only the first time ever. See [Caves](caves.md).
5. Spawns every saved entity, runs `InitializeAsServer` with a non-generating `SpawnData`, then sets their chunk. Unknown prefab hashes are skipped.

Then `FullyLoaded` fires. During all of this the chunk counts as loaded (`IsLoaded` true, `IsFullyLoaded` false).

On a client, `ClientChunkContentManager` loads only static scenery and procedural static content. Entities come from the server.

## Sending a chunk to a player

When a player is added to a loaded chunk, `PlayerEntitySyncServer` starts a `ChunkSync` (internal) for them. It doesn't send the whole chunk at once: every `ChunkSync.SendInterval` seconds (0.1) it sends up to `ChunkSync.SendCount` entities (30) across all of that player's chunk syncs, spawns first, then despawns. That's about 300 entities a second per player. A chunk with a thousand entities takes a few seconds to fill in for them. Entities are sorted by `SyncPriority`; Quest players also get the nearest ones first.

Both values are public static fields. TavernLib's `chunks set-sync-amount` and `chunks set-sync-interval` commands change them. Raise them and joins fill in faster but frames get longer.

For each entity sent: a spawn message, the first serialize if it has synced state, then `OnConnected(player)` on its behaviours.

## Unloading and saving

A chunk unloads when it should no longer be loaded and its content manager allows it (not while entities are still loading in). Order:

1. `BeganUnloading` fires. Anything added to `UnloadingGate` in a handler is awaited first.
2. If the server saves (`HasSaveFiles`, from the server's `IsSaving` setting): builds a save of its entities, holds it as the chunk file's content in memory, then destroys every prefab entity in it with `isUnload: true`. If it doesn't save, it only destroys them.
3. Procedural content is released (the forest undoes its static instructions). In this build that only happens on the saving path.
4. Static scenery is released.
5. `FullyUnloaded` fires.

What goes in the save: every entity in the chunk's `Entities` with a prefab, whose `SaveMode` is `Base`, and whose y position is above -15,000. Each is a `SavedDynamicObject`, which includes its `Child` entities (dock contents and so on). See [Prefabs](prefabs.md#savemode).

The file itself is written by `Chunk.Save()` (`ContentManager.Save()`): it builds a fresh save if the chunk is loaded, then writes the file in the background and lets it unload from memory.

### World saves

`StreamerManager` (no namespace, a scene `MonoBehaviour`, `static StreamerManager Instance`) runs world saves on the server. This part is only in the server build.

| Member | What it does |
| --- | --- |
| `void StartAutoSave()` | Called by `ServerHandler` at start when the server saves. If the `IsAutoSaving` setting is on (default true), saves every `MinutesBetweenAutoSaving` minutes (default 5) with `Task.Delay`, skipping while a wipe or another save is running. |
| `Task SaveWorld(bool isInstant)` | Does nothing unless the server saves (`HasSaveFiles`). If a save is already running, a normal save returns and an instant one cancels it. |
| `static List<IAutoSave> AutoSavingBehaviours` | Things that save themselves on each world save. Add your own `IAutoSave` here. |

A normal save calls `Save()` on every chunk in `Chunk.ChunksByIndex`, yielding a frame whenever it has used `streamingMillisecondsAllowance` (2 ms) minus the last frame's time, so it's spread over many frames. Then it runs every `IAutoSave`, saves every player (`Player.SaveAll()`), waits for all file writes, and backs up changed files. An instant save does the same without yielding, blocking the main thread until it's done. The console's `save` is a normal save, `save now` an instant one, and a server stopping runs an instant save (unless it's wiping).

Chunk files are named `<ChunkIdentifier>.bytes` and live in the server's `Save/Chunks` folder (`ServerHandler.Current.SaveUtility.ChunksFolder`, through `ChunkFileHelper.GetFolder()`). Player-specific chunks (`PersonalChunk`, such as lockboxes) go in `Save/Players/<player id>/`.

### The global chunk

The global chunk saves only the scene's own embedded entities, each by its `Hash`. Prefabs in it aren't saved. See [Chunks](chunks.md#the-global-chunk-and-the-void-chunk).

## From a mod

### Force-load

```csharp
// Keep a chunk loaded with nobody in it, then let it go. Server only.
// Start it from the main thread: Unity's synchronization context brings each await back there.
public static async Task HoldLoaded(Chunk chunk, int seconds)
{
    await chunk.ForceLoad();          // finishes once the chunk's content is in
    await Task.Delay(seconds * 1000);
    chunk.IsForceLoaded = false;      // unloads once no player needs it
}
```

`ForceLoad` returns when the load it started has finished. Force-loading the forest or a cave layer runs its generation, which is slow and uses a lot of memory on the server. See [Forest](forest.md) and [Caves](caves.md).

### Wait for your own work before an unload

```csharp
// Make a chunk wait for your own work before it unloads.
public static void HoldUnloads(Chunk chunk)
{
    chunk.BeganUnloading += c => c.UnloadingGate.Add(SaveMyThingsAsync(c));
}

static async Task SaveMyThingsAsync(Chunk chunk)
{
    await Task.Yield(); // your own async save goes here
    MelonLogger.Msg($"Saved extras for {chunk.ChunkIdentifier}");
}
```

The gate is cleared just before `BeganUnloading` fires, so add to it from the handler.

### Other calls

| Member | What it does | Notes |
| --- | --- | --- |
| `Task Chunk.Save()` | Write this chunk's save now. | Skips quietly while it's still loading. |
| `void Chunk.ForceUnloadAndSave()` | Unload now (removes every player from it and finishes their syncs), then save. Waits on the tasks synchronously. | What cave generation commands use between layers. Players in it lose their chunk. |
| `Task Chunk.ClearSave()` | Delete the chunk's save file (and its backup). The next load uses the default save. | Do it while unloaded. |
| `Task DynamicChunkContentManager.MergeWithResources(uint hash)` | In the save, replace every object with that prefab hash with the ones from the default save. | Waits for the chunk to unload first. The `chunks merge` command uses it. |
| `static int StaticChunkContentManager.PointersToLoadPerFrame`, `IsLoadingSequentially`, `IsLoadingPointers` | Static scenery pacing. | `IsLoadingPointers = false` skips scenery entirely. |

TavernLib restores the game's old `chunks` console module (`ChunkCommandModule`): `chunks entities`, `chunks info`, `chunks print-loaded`, `chunks force-load`, `chunks loadall`, `chunks wipe`, `chunks merge` and the sync settings above. Its `chunks wipe` is a good model of a safe wipe: move the players out, stop force-loading, wait a second, save, then `ClearSave`.

## Hooking it

| Target | Why |
| --- | --- |
| `Chunk.FullyLoaded` and friends | Per-chunk events. No patch needed. |
| `DynamicChunkContentManager.LoadEntities(ChunkSaveFormat, bool)` | Private. All of a chunk's saved entities are spawned in this one call; ATT-Optimizations' loading gates wrap it to spread the cost over frames. |
| `ForestChunk` and `CaveLayerStreamer`'s `IProceduralGenerationStreamer.LoadDynamic(bool)` | Explicit interface methods; find them by their full name, as ATT-Optimizations does: `"Alta.Chunks.IProceduralGenerationStreamer.LoadDynamic"`. |
| `Chunk.ForceUnloadAndSave()`, `StreamerManager.SaveWorld(bool)` | Saves in progress. The public `SaveWorld(bool)` wraps a private `SaveWorld(bool, CancellationToken)` that does the work. |
| `Chunk.IsForceLoaded` setter | Every force-load change (players' clients use it too for static chunks). CheetosOreSpawnFix hooks it to know when mine levels load. |

## Costs

- Loading a chunk spawns all its entities in one go on the main thread. A full chunk (a busy base, a mine level) can take a long frame.
- Each player has its own sync queue, so a crowd arriving at once multiplies the sync work.
- After an unload the chunk's save looks like it stays in memory as the file's content until the next `Save()` writes it out and queues it to unload.

## See also

- [Chunks](chunks.md)
- [Spawning](spawning.md#into-an-unloaded-chunk)
- [Static objects](static-objects.md)
