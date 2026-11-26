---
title: "Spawner"
description: "Server: spawns count copies of one prefab, or random picks from a distribution, at its spawn points."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Spawner

A **class** in `Root.Township`, no namespace.

Server: spawns `count` copies of one prefab, or random picks from a distribution, at its spawn points. A component on a networked prefab.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`SpawnerBase`](/game-api/types/global-s/spawnerbase)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Spawner()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"private int count"}</code> | How many to spawn (5 by default). |
| <Link id="m-distribution" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" distribution"}</code> | Distribution to pick prefabs from when `prefab` is not set, using the chunk's spawn attributes. |
| <Link id="m-isallsame" /><code>{"private bool isAllSame"}</code> | When true, picks one prefab and spawns it once with a count of `count` instead of picking each time. |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> | Fixed prefab to spawn. Use this or `distribution`, not both. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawn" /><code>{"override void Spawn()"}</code> | Server: spawns the items, unless the entity has no chunk or is being destroyed. With `isAllSame` it spawns one stack of `count`. |
| <Link id="m-spawnandreplace" /><code>{"void SpawnAndReplace()"}</code> | Server: spawns, then replaces this entity with the last thing spawned, keeping the spawned item's position. |

## Used in

Members of other types that take, return or hold a `Spawner`:

[`Interactable.ReplaceWith`](/game-api/types/global-i-l/interactable#m-replacewith-2), [`Pickup.ReplaceWith`](/game-api/types/global-p/pickup#m-replacewith-2), [`PickupDockPedestalSpawn.spawner`](/game-api/types/global-p/pickupdockpedestalspawn#m-spawner).
