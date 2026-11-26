---
title: "Spawner"
description: "Server: spawns count copies of one prefab, or random picks from a distribution, at its spawn points."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Spawner

A **class** in `Root.Township`, the global namespace.

Server: spawns `count` copies of one prefab, or random picks from a distribution, at its spawn points. A component on a networked prefab.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`SpawnerBase`](/mod/game-api/types/global-s/spawnerbase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Spawner()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"private int count"}</code> | <span className="api-desc">How many to spawn (5 by default).</span> |
| <Link id="m-distribution" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" distribution"}</code> | <span className="api-desc">Distribution to pick prefabs from when `prefab` is not set, using the chunk's spawn attributes.</span> |
| <Link id="m-isallsame" /><code>{"private bool isAllSame"}</code> | <span className="api-desc">When true, picks one prefab and spawns it once with a count of `count` instead of picking each time.</span> |
| <Link id="m-prefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> | <span className="api-desc">Fixed prefab to spawn. Use this or `distribution`, not both.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawn" /><code>{"override void Spawn()"}</code> | <span className="api-desc">Server: spawns the items, unless the entity has no chunk or is being destroyed. With `isAllSame` it spawns one stack of `count`.</span> |
| <Link id="m-spawnandreplace" /><code>{"void SpawnAndReplace()"}</code> | <span className="api-desc">Server: spawns, then replaces this entity with the last thing spawned, keeping the spawned item's position.</span> |

## Used in

Members of other types that take, return or hold a `Spawner`:

<div className="api-used-in">

[`Interactable.ReplaceWith`](/mod/game-api/types/global-i-l/interactable#m-replacewith-2), [`Pickup.ReplaceWith`](/mod/game-api/types/global-p/pickup#m-replacewith-2), [`PickupDockPedestalSpawn.spawner`](/mod/game-api/types/global-p/pickupdockpedestalspawn#m-spawner).

</div>
