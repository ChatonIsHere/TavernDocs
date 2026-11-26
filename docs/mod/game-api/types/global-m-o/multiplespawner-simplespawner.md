---
title: "MultipleSpawner.SimpleSpawner"
description: "One spawn rule inside a MultipleSpawner: a prefab or random distribution, how many, and which spawn points."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MultipleSpawner.SimpleSpawner

A **class** in `Root.Township`, the global namespace.

One spawn rule inside a `MultipleSpawner`: a prefab or random distribution, how many, and which spawn points. Server only; runs from `MultipleSpawner.Spawn`.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Nested in** [`MultipleSpawner`](/mod/game-api/types/global-m-o/multiplespawner)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SimpleSpawner()"}</code> | <span className="api-desc">Creates a `MultipleSpawner.SimpleSpawner` with default values.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"private int count"}</code> | <span className="api-desc">Backing field for `Count` (default 1).</span> |
| <Link id="m-distribution" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" distribution"}</code> | <span className="api-desc">Backing field for `Distribution`.</span> |
| <Link id="m-isallsame" /><code>{"private bool isAllSame"}</code> | <span className="api-desc">Backing field for `IsAllSame`.</span> |
| <Link id="m-isrotationrandom" /><code>{"private bool isRotationRandom"}</code> | <span className="api-desc">Backing field for `IsRotationRandom` (default on).</span> |
| <Link id="m-method" /><code>{"private "}<Link to="/mod/game-api/types/global-s/spawnmethod">{"SpawnMethod"}</Link>{" method"}</code> | <span className="api-desc">Backing field for `Method`.</span> |
| <Link id="m-nextid" /><code>{"private int nextId"}</code> | <span className="api-desc">Index of the last spawn point used in sequence mode.</span> |
| <Link id="m-prefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> | <span className="api-desc">Backing field for `Prefab`.</span> |
| <Link id="m-radius" /><code>{"private float radius"}</code> | <span className="api-desc">Backing field for `Radius`.</span> |
| <Link id="m-spawnpoints" /><code>{"private Transform[] spawnPoints"}</code> | <span className="api-desc">Backing field for `SpawnPoints`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count-2" /><code>{"int Count { get; set; }"}</code> | <span className="api-desc">How many to spawn.</span> |
| <Link id="m-distribution-2" /><code><Link to="/mod/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Random prefab table used when `Prefab` is null.</span> |
| <Link id="m-isallsame-2" /><code>{"bool IsAllSame { get; set; }"}</code> | <span className="api-desc">If on, one random prefab is picked and used for the whole count.</span> |
| <Link id="m-isrotationrandom-2" /><code>{"bool IsRotationRandom { get; set; }"}</code> | <span className="api-desc">If on, spawns get a random rotation instead of the spawn point's.</span> |
| <Link id="m-method-2" /><code><Link to="/mod/game-api/types/global-s/spawnmethod">{"SpawnMethod"}</Link>{" Method { get; set; }"}</code> | <span className="api-desc">How spawn points are picked: in sequence (looping) or at random.</span> |
| <Link id="m-prefab-2" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" Prefab { get; set; }"}</code> | <span className="api-desc">Fixed prefab to spawn; if null, `Distribution` picks one each time.</span> |
| <Link id="m-radius-2" /><code>{"float Radius { get; set; }"}</code> | <span className="api-desc">Radius setting; not used by the spawning code here.</span> |
| <Link id="m-spawnpoints-2" /><code>{"Transform[] SpawnPoints { get; set; }"}</code> | <span className="api-desc">Transforms to spawn at.</span> |

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; set; }"}</code> | <span className="api-desc">The spawner's entity, set by `Spawn`; its chunk and biome are used.</span> |
| <Link id="m-nextspawnpoint" /><code>{"private Transform NextSpawnPoint { get; }"}</code> | <span className="api-desc">Returns the next spawn point based on `Method`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawn" /><code>{"void Spawn("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Spawns the prefabs into the entity's chunk at the spawn points, using the chunk's biome.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-spawn-2" /><code>{"private void Spawn("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, int count)"}</code> | <span className="api-desc">Spawns the prefabs into the entity's chunk at the spawn points, using the chunk's biome.</span> |

</details>

## Used in

Members of other types that take, return or hold a `SimpleSpawner`:

<div className="api-used-in">

[`MultipleSpawner.spawners`](/mod/game-api/types/global-m-o/multiplespawner#m-spawners), [`MultipleSpawner.Spawners`](/mod/game-api/types/global-m-o/multiplespawner#m-spawners-2).

</div>
