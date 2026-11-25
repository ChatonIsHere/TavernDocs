---
title: "ChunkEntityManager"
description: "Server: the list of network entities currently in one chunk, used when syncing the chunk to players."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkEntityManager

A **class** in `Root.Township`, `Alta.Chunks`.

Server: the list of network entities currently in one chunk, used when syncing the chunk to players. Each `Chunk` has one.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkEntityManager("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-entities" /><code>{"private List<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> entities"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-temppriorities" /><code>{"private static List<int> tempPriorities"}</code> |  |
| <Link id="m-tempsort" /><code>{"private static List<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> tempSort"}</code> |  |
| <Link id="m-tempsortmap" /><code>{"private static Dictionary<int, List<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{">> tempSortMap"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" { get; }"}</code> | The chunk this list belongs to. |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | Number of entities in the chunk. |
| <Link id="m-entities-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> Entities { get; }"}</code> | The entities in the chunk. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-added" /><code>{"event Action<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> Added"}</code> | Raised when an entity is added. |
| <Link id="m-enteredwhileunloaded" /><code>{"event Action<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> EnteredWhileUnloaded"}</code> | Raised when a non-embedded entity is put in this chunk while it isn't loaded. |
| <Link id="m-removed" /><code>{"event Action<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> Removed"}</code> | Raised when an entity is removed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"bool Add("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Adds an entity. Refuses destroyed entities and duplicates; if the chunk isn't loaded it raises `EnteredWhileUnloaded` instead. |
| <Link id="m-cache" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"[] Cache(bool isSpawning, Comparison<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> finalSort, out int count)"}</code> | Copies the entities into a pooled array grouped by `SyncPriority`, highest group first when spawning and reversed when not. |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Empties the list without raising events. |
| <Link id="m-comparefeet" /><code>{"static Comparison<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> CompareFeet("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, bool isSpawning)"}</code> | Sorts by distance to the player's feet: nearest first when spawning, farthest first otherwise. Its distance maths is off (z plus z). |
| <Link id="m-contains" /><code>{"bool Contains("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Whether the entity is in this chunk. |
| <Link id="m-remove" /><code>{"bool Remove("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Removes an entity by identifier and raises `Removed`. False if it wasn't there. |
| <Link id="m-compareentitiesposition" /><code>{"private static int CompareEntitiesPosition("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" a, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" b, Vector3 position)"}</code> |  |
| <Link id="m-handlechunknotloaded" /><code>{"private void HandleChunkNotLoaded("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-onadded" /><code>{"private void OnAdded("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-onremoved" /><code>{"private void OnRemoved("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-sort" /><code>{"private void Sort("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"[] cache, int firstFail, bool isSpawning, Comparison<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> finalSort, out int count)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ChunkEntityManager`:

[`Chunk.Entities`](/game-api/types/alta-world/chunk#m-entities), [`ChunkSync.InitializeAndStart`](/game-api/types/alta-world/chunksync#m-initializeandstart), [`ChunkSync.Start`](/game-api/types/alta-world/chunksync#m-start).
