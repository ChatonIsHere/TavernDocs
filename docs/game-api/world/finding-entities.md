---
title: Finding entities
description: Enumerate entities by chunk, by prefab, by id or near a point, what Canary's census does, and what the select console commands call.
sidebar_position: 6
---

# Finding entities

There's no "find all chests" call. You either walk the scene's entity table, walk the chunks, or look one up by id.

| Way | Side | Covers | Cost |
| --- | --- | --- | --- |
| `EntityManager.IterateEntities()` | Both | Every entity with an id, in or out of a chunk, embedded parts included. | Walks a linked list of the used slots. Cheap per entity. |
| `Chunk.ChunksByIndex` then `chunk.Entities.Entities` | Server | Entities directly in a chunk (not their chunking children). | One list per chunk. |
| `NetworkSceneManager.Current.GetEntity(id)` | Both | One entity by runtime id. | An array lookup. |
| `Object.FindObjectsOfType<T>()` | Both | Every live component of a type. | Slow; it searches the whole scene. `select prefab` does this. |

All of these are main thread only. Don't hold on to the results across frames: entities come and go as chunks load.

## Every entity: EntityManager

`Alta.Networking.Internal.EntityManager` in `Root.Township`. One per scene, in a private field of `NetworkScene`.

| Member | What it does |
| --- | --- |
| `IEnumerable<NetworkEntity> IterateEntities()` | Every filled slot. Skip nulls, as Canary does: an entity whose game object was destroyed outside the spawner still holds its slot. |
| `NetworkEntity GetEntity(uint identifier)` | One entity. |
| `const int MaximumEntities = 100000` | Size of the table. |
| `void CheckHealth(Logger logger)` | Logs how many slots are full, empty and broken. `NetworkScene.PrintHealth` calls it. |

`NetworkScene` doesn't expose it, so reach it with `AccessTools`, as Canary's census does:

```csharp
// Every entity in the scene, any chunk or none. Works on server and client.
static readonly FieldInfo EntityManagerField = AccessTools.Field(typeof(NetworkScene), "entityManager");

public static IEnumerable<NetworkEntity> AllEntities()
{
    if (NetworkSceneManager.Current is not NetworkScene scene) yield break;
    if (EntityManagerField?.GetValue(scene) is not EntityManager manager) yield break;
    foreach (NetworkEntity entity in manager.IterateEntities())
    {
        if (entity != null) yield return entity;
    }
}

// Count entities by prefab name.
public static Dictionary<string, int> CountByPrefab()
{
    var counts = new Dictionary<string, int>();
    foreach (NetworkEntity entity in AllEntities())
    {
        if (entity.Prefab == null) continue; // placed in the scene, or an embedded part
        string name = entity.Prefab.name;
        counts.TryGetValue(name, out int n);
        counts[name] = n + 1;
    }
    return counts;
}
```

`entityManager` is private. att-stubs makes it public, so `scene.entityManager` would compile against the stubs but not against a game install. Use the field as above.

### Canary's census

Canary (a ModdingTavern server mod) records a census every so often: total entities, counts by prefab name and the 25 busiest chunks, plus awake rigidbodies. It's a good model:

- It walks `IterateEntities()` once and counts by `entity.Prefab` (or "placed in the scene" when there's no prefab) and by `entity.Chunk.ChunkIdentifier`.
- It caches names by prefab hash and chunk, because Unity's `name` getter allocates a new string each call.
- It strips the `"<id> - "` prefix and `"(Clone)"` suffix from object names.
- It times itself, since it runs on the main thread.

On a busy server that's tens of thousands of entities, so do it every few seconds at most, not every frame.

## By chunk

`Chunk.ChunksByIndex` is a static `Dictionary<uint, Chunk>` of every chunk with an index. On the server each chunk has an `Entities` manager:

```csharp
// Prefab roots near a point, from the server's chunk lists.
public static List<NetworkEntity> Near(Vector3 point, float radius)
{
    var found = new HashSet<NetworkEntity>();
    foreach (Chunk chunk in Chunk.ChunksByIndex.Values)
    {
        if (chunk == null || chunk.Entities == null || !chunk.IsLoaded) continue;
        foreach (NetworkEntity entity in chunk.Entities.Entities)
        {
            if (entity != null && (entity.transform.position - point).sqrMagnitude <= radius * radius)
                found.Add(entity.PrefabRoot);
        }
    }
    return found.ToList();
}
```

`ChunkEntityManager` (in `Alta.Chunks`, server only):

| Member | What it does |
| --- | --- |
| `IEnumerable<NetworkEntity> Entities { get; }`, `int Count { get; }` | Entities whose `Chunk` is this one. |
| `bool Contains(NetworkEntity entity)` | Linear search. |
| `event Action<NetworkEntity> Added`, `Removed` | An entity entered or left. |
| `event Action<NetworkEntity> EnteredWhileUnloaded` | An entity was put in this chunk while it wasn't loaded. |

Entities riding on a chunking parent (docked items, a bag's contents, mine parts) aren't in the list; they're in `entity.Children`. A docked item's `Chunk` is still its parent's chunk.

A chunk that isn't loaded has no entities in memory. They're in its save. Loaded on demand with `ForceLoad`, see [Chunk loading and saving](chunk-loading-and-saving.md).

## By id

`NetworkSceneManager.Current.GetEntity(identifier)`. Ids are only good for this session and only while the entity is loaded. Players see ids in the console: `select get` shows them.

## On a client

Clients don't keep chunk entity lists (`chunk.Entities` is null there). Use `IterateEntities` or `FindObjectsOfType`. A client only has the entities of chunks near it.

## The select commands

`SelectionCommandModule` (`Alta.Console.Commands`) is the `select` module, alias `s`. It works on the console's current selection, `CommandService.CurrentContext.Selection.Current`. Spawning with `spawn` also selects the new entity.

| Command | What it calls |
| --- | --- |
| `select <id>` (aliases `object`, `entity`) | `NetworkSceneManager.Current.GetEntity(id)` and selects it. |
| `select get [id]` | Position, rotation, name, id and root id of the selection or of `id`. |
| `select find <player> [distance]` | Every prefab root within `distance` (default 10 m) of the player, by walking every chunk's `Entities`. TavernLib replaces this method with a copy that skips null entities, since the original fails on one. |
| `select prefab <prefab> <player>` | `FindObjectsOfType<NetworkPrefab>()`, then the nearest one with that hash. |
| `select destroy` (aliases `del`, `rm`) | `selection.Spawner.Destroy(selection)`. Doesn't go to `PrefabRoot` first. |
| `select tostring` (aliases `str`, `export`) | `SavedDynamicObject.GetSaveOf(selection.PrefabRoot).StringVersion()`, copied to the clipboard. |
| `select move ...`, `select rotate ...`, `select look-at`, `select snap-to`, `select snap-ground` | Changes the selection's transform, then `ForcePositionSync()`. |
| `select unselect` | Clears it. |

The module is `[NonSimpleServer("debug_features")]`.

## See also

- [Chunks](chunks.md)
- [NetworkEntity](network-entity.md)
- Canary's source: `Canary/src/Recording/Census.cs`
