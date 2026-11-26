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
| <Link id="m-ctor" /><code>{"ChunkEntityManager("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Creates a `ChunkEntityManager` from `chunk`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entities" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> entities"}</code> | <span className="api-desc">The entities currently in this chunk. `Add` refuses duplicates by `Identifier`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-temppriorities" /><code>{"private static List<int> tempPriorities"}</code> | <span className="api-desc">Shared scratch list of sync priorities used by `Sort`.</span> |
| <Link id="m-tempsort" /><code>{"private static List<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> tempSort"}</code> | <span className="api-desc">Shared scratch list used by `Cache` to sort entities when they all have the same priority.</span> |
| <Link id="m-tempsortmap" /><code>{"private static Dictionary<int, List<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{">> tempSortMap"}</code> | <span className="api-desc">Shared scratch map from sync priority to entities, used by `Sort`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" { get; }"}</code> | <span className="api-desc">The chunk this list belongs to.</span> |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | <span className="api-desc">Number of entities in the chunk.</span> |
| <Link id="m-entities-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> Entities { get; }"}</code> | <span className="api-desc">The entities in the chunk.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-added" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> Added"}</code> | <span className="api-desc">Raised when an entity is added.</span> |
| <Link id="m-enteredwhileunloaded" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> EnteredWhileUnloaded"}</code> | <span className="api-desc">Raised when a non-embedded entity is put in this chunk while it isn't loaded.</span> |
| <Link id="m-removed" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> Removed"}</code> | <span className="api-desc">Raised when an entity is removed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"bool Add("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Adds an entity. Refuses destroyed entities and duplicates; if the chunk isn't loaded it raises `EnteredWhileUnloaded` instead.</span> |
| <Link id="m-cache" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"[] Cache(bool isSpawning, Comparison<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> finalSort, out int count)"}</code> | <span className="api-desc">Copies the entities into a pooled array grouped by `SyncPriority`, highest group first when spawning and reversed when not.</span> |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Empties the list without raising events.</span> |
| <Link id="m-comparefeet" /><code>{"static Comparison<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> CompareFeet("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, bool isSpawning)"}</code> | <span className="api-desc">Sorts by distance to the player's feet: nearest first when spawning, farthest first otherwise. Its distance maths is off (z plus z).</span> |
| <Link id="m-contains" /><code>{"bool Contains("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Whether the entity is in this chunk.</span> |
| <Link id="m-remove" /><code>{"bool Remove("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Removes an entity by identifier and raises `Removed`. False if it wasn't there.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-compareentitiesposition" /><code>{"private static int CompareEntitiesPosition("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" a, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" b, Vector3 position)"}</code> | <span className="api-desc">Compares two entities by flat distance from a position, for `CompareFeet`. Bug: it adds `z` twice instead of squaring it, so the order is only roughly by distance.</span> |
| <Link id="m-handlechunknotloaded" /><code>{"private void HandleChunkNotLoaded("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Called by `Add` when the chunk isn't loaded: logs, and for non-embedded entities raises `EnteredWhileUnloaded`.</span> |
| <Link id="m-onadded" /><code>{"private void OnAdded("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Raises `Added` after `Add` puts an entity in the list.</span> |
| <Link id="m-onremoved" /><code>{"private void OnRemoved("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Raises `Removed` after `Remove` takes an entity out of the list.</span> |
| <Link id="m-sort" /><code>{"private void Sort("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"[] cache, int firstFail, bool isSpawning, Comparison<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> finalSort, out int count)"}</code> | <span className="api-desc">Used by `Cache` when the entities have mixed `SyncPriority`: groups them by priority, orders the groups and applies the final sort in each.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ChunkEntityManager`:

<div className="api-used-in">

[`Chunk.Entities`](/mod/game-api/types/alta-world/chunk#m-entities), [`ChunkSync.InitializeAndStart`](/mod/game-api/types/alta-world/chunksync#m-initializeandstart), [`ChunkSync.Start`](/mod/game-api/types/alta-world/chunksync#m-start).

</div>
