---
title: "MultiSpawner"
description: "Spawner that spawns set counts of several prefabs and distributions into its entity's chunk."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MultiSpawner

A **class** in `Root.Township`, the global namespace.

Spawner that spawns set counts of several prefabs and distributions into its entity's chunk. Server only.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`SpawnerBase`](/mod/game-api/types/global-s/spawnerbase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MultiSpawner()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"private List<int> count"}</code> | Backing field for `Count`. |
| <Link id="m-distributions" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{"> distributions"}</code> | Backing field for `Distributions`. |
| <Link id="m-isallsame" /><code>{"private bool isAllSame"}</code> | If true, each distribution rolls once and spawns that one prefab for its whole count. |
| <Link id="m-prefabs" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"> prefabs"}</code> | Backing field for `Prefabs`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count-2" /><code>{"List<int> Count { get; }"}</code> | Spawn counts: first one per prefab, then one per distribution, in that order. |
| <Link id="m-distributions-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{"> Distributions { get; }"}</code> | Distributions to roll prefabs from, using the chunk's biome attributes. |
| <Link id="m-prefabs-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"> Prefabs { get; }"}</code> | Prefabs spawned directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawn" /><code>{"override void Spawn()"}</code> | Server: spawns every prefab and distribution entry by its count, if the entity is in a chunk. The impact overload does the same and ignores the hit. |
| <Link id="m-spawn-2" /><code>{"void Spawn("}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | Server: spawns every prefab and distribution entry by its count, if the entity is in a chunk. The impact overload does the same and ignores the hit. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-spawndistribution" /><code>{"private void SpawnDistribution("}<Link to="/mod/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" distribution, int count)"}</code> | Rolls a prefab from the distribution for each count, or rolls once and spawns that prefab `count` times if `isAllSame` is set. |

</details>
