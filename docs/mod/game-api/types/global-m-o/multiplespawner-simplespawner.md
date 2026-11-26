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
| <Link id="m-ctor" /><code>{"SimpleSpawner()"}</code> | Creates a `MultipleSpawner.SimpleSpawner` with default values. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"private int count"}</code> | Backing field for `Count` (default 1). |
| <Link id="m-distribution" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" distribution"}</code> | Backing field for `Distribution`. |
| <Link id="m-isallsame" /><code>{"private bool isAllSame"}</code> | Backing field for `IsAllSame`. |
| <Link id="m-isrotationrandom" /><code>{"private bool isRotationRandom"}</code> | Backing field for `IsRotationRandom` (default on). |
| <Link id="m-method" /><code>{"private "}<Link to="/mod/game-api/types/global-s/spawnmethod">{"SpawnMethod"}</Link>{" method"}</code> | Backing field for `Method`. |
| <Link id="m-nextid" /><code>{"private int nextId"}</code> | Index of the last spawn point used in sequence mode. |
| <Link id="m-prefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> | Backing field for `Prefab`. |
| <Link id="m-radius" /><code>{"private float radius"}</code> | Backing field for `Radius`. |
| <Link id="m-spawnpoints" /><code>{"private Transform[] spawnPoints"}</code> | Backing field for `SpawnPoints`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count-2" /><code>{"int Count { get; set; }"}</code> | How many to spawn. |
| <Link id="m-distribution-2" /><code><Link to="/mod/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" { get; set; }"}</code> | Random prefab table used when `Prefab` is null. |
| <Link id="m-isallsame-2" /><code>{"bool IsAllSame { get; set; }"}</code> | If on, one random prefab is picked and used for the whole count. |
| <Link id="m-isrotationrandom-2" /><code>{"bool IsRotationRandom { get; set; }"}</code> | If on, spawns get a random rotation instead of the spawn point's. |
| <Link id="m-method-2" /><code><Link to="/mod/game-api/types/global-s/spawnmethod">{"SpawnMethod"}</Link>{" Method { get; set; }"}</code> | How spawn points are picked: in sequence (looping) or at random. |
| <Link id="m-prefab-2" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" Prefab { get; set; }"}</code> | Fixed prefab to spawn; if null, `Distribution` picks one each time. |
| <Link id="m-radius-2" /><code>{"float Radius { get; set; }"}</code> | Radius setting; not used by the spawning code here. |
| <Link id="m-spawnpoints-2" /><code>{"Transform[] SpawnPoints { get; set; }"}</code> | Transforms to spawn at. |

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; set; }"}</code> | The spawner's entity, set by `Spawn`; its chunk and biome are used. |
| <Link id="m-nextspawnpoint" /><code>{"private Transform NextSpawnPoint { get; }"}</code> | Returns the next spawn point based on `Method`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawn" /><code>{"void Spawn("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Spawns the prefabs into the entity's chunk at the spawn points, using the chunk's biome. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-spawn-2" /><code>{"private void Spawn("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, int count)"}</code> | Spawns the prefabs into the entity's chunk at the spawn points, using the chunk's biome. |

</details>

## Used in

Members of other types that take, return or hold a `SimpleSpawner`:

[`MultipleSpawner.spawners`](/mod/game-api/types/global-m-o/multiplespawner#m-spawners), [`MultipleSpawner.Spawners`](/mod/game-api/types/global-m-o/multiplespawner#m-spawners-2).
