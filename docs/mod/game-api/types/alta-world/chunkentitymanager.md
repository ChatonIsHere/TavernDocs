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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkEntityManager("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Creates a `ChunkEntityManager` from `chunk`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entities" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> entities"}</code> | The entities currently in this chunk. `Add` refuses duplicates by `Identifier`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-temppriorities" /><code>{"private static List<int> tempPriorities"}</code> | Shared scratch list of sync priorities used by `Sort`. |
| <Link id="m-tempsort" /><code>{"private static List<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> tempSort"}</code> | Shared scratch list used by `Cache` to sort entities when they all have the same priority. |
| <Link id="m-tempsortmap" /><code>{"private static Dictionary<int, List<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{">> tempSortMap"}</code> | Shared scratch map from sync priority to entities, used by `Sort`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" { get; }"}</code> | The chunk this list belongs to. |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | Number of entities in the chunk. |
| <Link id="m-entities-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> Entities { get; }"}</code> | The entities in the chunk. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-added" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> Added"}</code> | Raised when an entity is added. |
| <Link id="m-enteredwhileunloaded" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> EnteredWhileUnloaded"}</code> | Raised when a non-embedded entity is put in this chunk while it isn't loaded. |
| <Link id="m-removed" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> Removed"}</code> | Raised when an entity is removed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"bool Add("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Adds an entity. Refuses destroyed entities and duplicates; if the chunk isn't loaded it raises `EnteredWhileUnloaded` instead. |
| <Link id="m-cache" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"[] Cache(bool isSpawning, Comparison<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> finalSort, out int count)"}</code> | Copies the entities into a pooled array grouped by `SyncPriority`, highest group first when spawning and reversed when not. |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Empties the list without raising events. |
| <Link id="m-comparefeet" /><code>{"static Comparison<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> CompareFeet("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, bool isSpawning)"}</code> | Sorts by distance to the player's feet: nearest first when spawning, farthest first otherwise. Its distance maths is off (z plus z). |
| <Link id="m-contains" /><code>{"bool Contains("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Whether the entity is in this chunk. |
| <Link id="m-remove" /><code>{"bool Remove("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Removes an entity by identifier and raises `Removed`. False if it wasn't there. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-compareentitiesposition" /><code>{"private static int CompareEntitiesPosition("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" a, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" b, Vector3 position)"}</code> | Compares two entities by flat distance from a position, for `CompareFeet`. Bug: it adds `z` twice instead of squaring it, so the order is only roughly by distance. |
| <Link id="m-handlechunknotloaded" /><code>{"private void HandleChunkNotLoaded("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Called by `Add` when the chunk isn't loaded: logs, and for non-embedded entities raises `EnteredWhileUnloaded`. |
| <Link id="m-onadded" /><code>{"private void OnAdded("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Raises `Added` after `Add` puts an entity in the list. |
| <Link id="m-onremoved" /><code>{"private void OnRemoved("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Raises `Removed` after `Remove` takes an entity out of the list. |
| <Link id="m-sort" /><code>{"private void Sort("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"[] cache, int firstFail, bool isSpawning, Comparison<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> finalSort, out int count)"}</code> | Used by `Cache` when the entities have mixed `SyncPriority`: groups them by priority, orders the groups and applies the final sort in each. |

</details>

## Used in

Members of other types that take, return or hold a `ChunkEntityManager`:

[`Chunk.Entities`](/mod/game-api/types/alta-world/chunk#m-entities), [`ChunkSync.InitializeAndStart`](/mod/game-api/types/alta-world/chunksync#m-initializeandstart), [`ChunkSync.Start`](/mod/game-api/types/alta-world/chunksync#m-start).
