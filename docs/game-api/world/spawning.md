---
title: Spawning
description: Spawn prefabs from a server mod with SpawnHelper and SpawnManager, what SpawnData controls, and what the spawn console commands call.
sidebar_position: 4
---

# Spawning

Only the server spawns entities. It makes the object, gives it an id, lets its behaviours set themselves up, then puts it in a chunk. Putting it in a chunk is what sends it to players. Do all of this on the main thread.

## The short version

```csharp
// Spawn a prefab by name two metres in front of a player. Server only.
public static NetworkEntity SpawnInFront(Player player, string prefabName)
{
    if (!NetworkSceneManager.IsServer || player?.PlayerController == null) return null;

    NetworkPrefab prefab = PrefabManager.GetPrefab(prefabName.ToLowerInvariant());
    if (prefab == null) return null;

    Transform head = player.PlayerController.Head;
    Vector3 forward = head.forward;
    forward.y = 0f;
    Vector3 position = head.position + forward.normalized * 2f;

    LocationChunk chunk = LocationChunkHelper.GetBestContaining(position);
    if (chunk == null || !chunk.IsFullyLoaded) return null; // outside the world, or nobody nearby

    return SpawnHelper.Spawn(prefab, SpawnData.Default, chunk, position, Quaternion.identity);
}
```

The chunk check matters. Spawning into a chunk that isn't loaded doesn't fail loudly; see [Into an unloaded chunk](#into-an-unloaded-chunk).

## SpawnHelper

`SpawnHelper` in `Root.Township`, no namespace. Static. Server only (it calls `SpawnManager.SpawnInternal`, which only works on the server).

Every `Spawn` overload does the same steps, in this order:

1. `Manager.SpawnInternal(hash)`: instantiate, take an id, run `Initialize` on every behaviour.
2. Place it: the `position` callback, or the position and rotation you passed, or the parent transform and local position.
3. Set `Prefab.SaveMode`, in the overloads that take one.
4. `InitializeWithChildrenAsServer(spawnData)`: every behaviour's `InitializeAsServer`. Contents generate here.
5. The `preChunking` callback, if you passed one.
6. Set the chunk (`entity.Chunk = chunk`) or the chunking parent (`entity.ChunkingParent = parent`). Players in that chunk are sent the entity now.

So anything you set before step 6 reaches clients in the first spawn, and anything after goes out as an update (if the behaviour syncs it at all). Use `preChunking` for setup that must be there from the start.

| Member | What it does |
| --- | --- |
| `static SpawnManager Manager { get; set; }` | The spawner. Set by whichever `SpawnManager` was made last. |
| `static NetworkEntity Spawn(NetworkPrefab prefab, SpawnData spawnData, Chunk chunk, Vector3 position, Quaternion rotation = default, SpawningCallback preChunking = null)` | Spawn at a world position into a chunk. A default rotation becomes `Quaternion.identity`. |
| `static NetworkEntity Spawn(NetworkPrefab prefab, SpawnData spawnData, Chunk chunk, SpawningCallback position = null, SpawningCallback preChunking = null)` | Same, but you place it in the `position` callback. |
| `static NetworkEntity Spawn(NetworkPrefab prefab, SpawnData spawnData, Chunk chunk, Transform parent, Vector3 localPosition = default, Quaternion localRotation = default, SpawningCallback preChunking = null)` | Parent its transform under `parent` first. |
| `static NetworkEntity Spawn(NetworkPrefab prefab, SpawnData spawnData, NetworkEntity chunkingParent, SaveMode saveMode, ...)` | The same three shapes, but it rides with `chunkingParent` (and its chunk) and gets `saveMode`. Use `SaveMode.Child` so it saves with the parent. |
| `static NetworkEntity SpawnUnchunked(NetworkPrefab prefab, SpawnData spawnData)` | Steps 1 and 4 only. No position, no chunk: nobody sees it until you set `Chunk` yourself. |
| `static NetworkEntity SpawnPouchOrPickup(Item item, int count, SpawnData spawnData, Chunk chunk, Vector3 position, Quaternion rotation = default)` | A stackable item with `count` above 1 comes as a pouch holding the stack. Otherwise one item. |
| `static bool SpawnDocked(Item item, int count, SpawnData spawnData, PickupDock dock, Chunk fallbackChunk = null, Action<Pickup> preDockModify = null)` | Spawns straight into a dock. If the dock refuses, the item is dropped at the dock into `fallbackChunk` (or the dock's chunk), or destroyed if there's no chunk. Returns false then. |

Each overload that takes a `NetworkPrefab` also has a `uint prefabHash` version. `SpawningCallback` is `delegate void SpawningCallback(NetworkEntity networkEntity)`.

### Stacks

```csharp
// A stack in a pouch, the way the spawn command does it.
public static NetworkEntity SpawnStack(uint prefabHash, int count, Vector3 position)
{
    NetworkPrefab prefab = PrefabManager.GetPrefab(prefabHash);
    Pickup pickup = prefab?.Entity.CommonPickup;
    if (pickup == null) return null;

    LocationChunk chunk = LocationChunkHelper.GetBestContaining(position);
    return SpawnHelper.SpawnPouchOrPickup(pickup.Item, count, SpawnData.Default, chunk, position);
}
```

For a whole player inventory or a specific dock, see the Items area.

## SpawnData

`SpawnData` in `Root.Township`, no namespace. Passed to every `InitializeAsServer`. It says whether the thing should generate its contents, and which biome it's in.

| Member | What it does | Notes |
| --- | --- | --- |
| `static SpawnData Default { get; }` | Generate contents, no biome. | A new object each call. |
| `static SpawnData DontGenerate { get; }` | Don't generate. | An empty chest stays empty. |
| `static SpawnData WithArgs(IEnumerable<string> arguments)` | Generate, and carry extra words for the behaviours. | What packages use. |
| `bool IsGenerating { get; }` | | |
| `bool IsFirstChunkLoad { get; }` | True for entities loading from a chunk's default save (never saved by this server yet). | |
| `GeneratedBiome Biome { get; }`, `AttributeSet Attributes { get; }` | Biome and its attributes, from a cave layer or chunk. | Loot and distributions read these. |
| `IEnumerable<string> Arguments { get; }` | | |
| `SpawnData(GeneratedBiome biome, bool isGenerating = true, bool isFirstChunkLoad = false)` | | |
| `void OverrideAttribute(BiomeAttribute attribute, float value)` | Copies the attribute set once, then changes it. | |
| `SpawnData CreateChild(bool isGenerating)` | A copy for a child spawn. | |
| `static bool ShouldGenerate(SpawnData data, bool isGeneratingFirstLoad = false)` | False for null. True when `IsGenerating`. Otherwise true only if both `IsFirstChunkLoad` and `isGeneratingFirstLoad`. | |

Entities loading from a save get `IsGenerating` false, so they don't generate again. Loot containers pass `isGeneratingFirstLoad: true`, so they fill on the first load of a chunk's default save.

`GeneratedNetworkEntityBehaviour` (in `Alta.Networking`) is the base for behaviours that build something once: `MiningBaseGenerator`, `ClusterGenerator`, `PhysicalMaterialPart`, `SpawnBuried`, `Mould`, `PageInstance`, `LiquidContainer`, `DockByDefault`, `PotatoSapling`. Its `InitializeAsServer` calls the abstract `Generate(SpawnData)` when `ShouldGenerate` passes. Pick `SpawnData.Default` for "as if the world made it", and `SpawnData.DontGenerate` when you'll fill it yourself.

## SpawnManager

`Alta.Networking.SpawnManager` in `Root.Township`. Abstract. Get it from `NetworkSceneManager.Current.Spawner`, `entity.Spawner` or `SpawnHelper.Manager`.

| Subclass | Where | What `SpawnInternal` does |
| --- | --- | --- |
| `ServerSpawnManager` | Server | Takes the next free id, instantiates, initializes. |
| `ClientSpawnManager` | Client | Logs "Cant spawn as client" and returns null. Clients spawn only from server messages (`SpawnAsClient`). |
| `LocalSpawnManager` | Offline scenes with a `LocalNetworkScene` | Instantiates without an id and marks interactables as not networked. |

| Member | What it does | Notes |
| --- | --- | --- |
| `abstract NetworkEntity SpawnInternal(uint prefab)` | Step 1 above. | Doesn't run `InitializeAsServer` or set a chunk. |
| `NetworkEntity Spawn(NetworkPrefab prefab)` | `SpawnInternal(prefab.Hash)`. | Same caveat. |
| `abstract void Destroy(NetworkEntity networkEntity, bool isUnload = false)` | See [Destroying](destroying.md). | Client version logs an error. |
| `void DestroyLocal(INetworkEntity entity, bool isUnload)` | The destroy that actually runs, on both sides. | Good hook. |
| `abstract bool WaitForSpawn(uint entityIdentifier, EntitySpawnedHandler handler)` | Client: calls `handler` once that id has spawned. Server: calls it now if it exists. | |
| `Task<NetworkEntity> WaitForSpawnAsync(uint entityIdentifier)` | The same as a task. | |
| `Transform DefaultSpawnedFolder { get; }` | Where unparented children go. | |

`SpawnHelper.Manager` is set in the `SpawnManager` constructor, so it points at the last one made. In the normal game that's the server's or client's. A scene with a `LocalNetworkScene` would replace it.

The scene's entity table has 100,000 slots, with two in every 50 reserved. When the server runs out it logs "No Free Entity Links" and `SpawnInternal` fails. Busy servers run in the thousands to low tens of thousands (Rover's tests saw about 4,000 idle and up to 20,000 with players in the forest), so only a leak gets there.

## What the spawn commands call

`SpawnCommandModule` (`Alta.Console.Commands`) is the `spawn` console module. All its spawning commands are `[ServerOnly]`.

| Command | What it does in code |
| --- | --- |
| `spawn <players> <prefab> [args...]` | For each player with a body, two metres in front of the head at head height. With no players, at a random point of the `OriginalSpawnPoint` spawn area. Calls `SpawnHelper.Spawn(prefab, SpawnData.Default, null, position, rotation)`, then the args, then sets `Chunk` to `LocationChunkHelper.GetBestContaining(position)`. |
| `spawn exact <position> <rotation> <prefab> [args...]` | The same at an exact position and Euler rotation. Alias `e`. |
| `spawn multi <players> <text> [args...]` | Spawns every prefab whose name contains the text. |
| `spawn string <players> [string]` | Spawns a saved object from text (see [Cloning](#cloning-an-entity)), from the clipboard if no string. |
| `spawn list`, `spawn find <text>`, `spawn infodump` | Read only. Only prefabs with `CanBeSpawnedThroughCommand`. |
| `spawn population <player> <population> [type] [size] [start] [max]` | Spawns a population spawn area on the ground in front of the player. See [Populations](populations.md). |
| `spawn package drop <players> <name> [args...]` | Spawns a debug package (`PackageManager.DropPackage`). See [Loot](loot.md). |

The args after a prefab:

- The first whole number of 1 or more is the count. Above 1, a stackable item is spawned once and docked into a new pouch with that count.
- Every component with `ISpawnArguments` gets the args. `PhysicalMaterialPart` takes the first one that names a physical material, so `spawn Placeholder <prefab> gold` asks for a gold version (if that prefab has a material part).
- The new entity becomes the console's selection, so `select` commands act on it next. See [Finding entities](finding-entities.md#the-select-commands).

The prefab argument goes through `NetworkPrefabConverter`: a number is a hash, anything else is lowercased and looked up by name. A prefab with `CanBeSpawnedThroughCommand` off comes back as null.

## Cloning an entity

`SavedDynamicObject` (in `Alta.Chunks`) is one entity's save: prefab hash plus the bits its behaviours wrote. It's what chunks save, and what `select tostring` and `spawn string` pass around as text.

```csharp
// Copy an entity with its saved state (what "select tostring" + "spawn string" do).
public static NetworkEntity Clone(NetworkEntity original, Vector3 position)
{
    using SavedDynamicObject save = SavedDynamicObject.GetSaveOf(original.PrefabRoot);
    NetworkEntity copy = save.SpawnOwned(Alta.Saving.SavingSystem.LatestChunkVersioning);
    if (copy == null) return null;
    copy.transform.position = position;
    copy.Chunk = LocationChunkHelper.GetBestContaining(position);
    return copy;
}
```

`SpawnOwned` spawns, loads the saved state (including docked contents and other `Child` entities), and runs `InitializeAsServer` with a null `SpawnData`, so nothing regenerates. `GetSaveOf` takes pooled buffers, so dispose the save when you're done. `StringVersion()` turns a save into text and `SerializedSavedDynamicObject.SpawnFromString(text, saveMode)` turns it back.

## Into an unloaded chunk

When you set the chunk of an entity, the chunk's `ChunkEntityManager.Add` refuses it if the chunk's content isn't loaded, and raises `EnteredWhileUnloaded`. The chunk then deals with it (`DynamicChunkContentManager.UnloadSingle`):

- `Creature` and `Ignore` entities are destroyed.
- A `Base` entity is written into the chunk's save and destroyed. It appears when the chunk next loads. This only works if the chunk has a save already (in memory or on disk); otherwise it's destroyed with the error "entered chunk that has never loaded/generated".
- A `Child` entity is left alone.

The entity's own `Chunk` property still says the new chunk until it's gone, so check `chunk.IsFullyLoaded` before you spawn, or `await chunk.ForceLoad()` first. See [Chunk loading and saving](chunk-loading-and-saving.md).

## Hooking spawns

| Target | Why |
| --- | --- |
| `NetworkEntity.InitializeAsServer(SpawnData)` | Every entity the server sets up, spawned or loaded. See [NetworkEntity](network-entity.md#hooking-it). |
| `ServerSpawnManager.SpawnInternal(uint)` | Every spawn on the server, right after initialize. Postfix gets the entity as `__result`. ATT-Optimizations times this one. Behaviours haven't run `InitializeAsServer` yet. |
| `ChunkEntityManager.Add(NetworkEntity)` | An entity entering a chunk (spawn, load or move). Server. Returns false when refused. |
| A specific behaviour's `InitializeAsServer` override | Change one kind of thing as it spawns. |

`ClientSpawnManager.SpawnAsClient(...)` is the client side of a spawn message, if you need to see things arrive on a client. It's covered with the messages in the Networking area.

## See also

- [Destroying and despawning](destroying.md)
- [Prefabs and prefab hashes](prefabs.md)
- [Chunks](chunks.md)
