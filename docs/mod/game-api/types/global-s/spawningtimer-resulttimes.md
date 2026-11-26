---
title: "SpawningTimer.ResultTimes"
description: "Totals in milliseconds from one SpawningTimer benchmark run of a network prefab."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawningTimer.ResultTimes

A **private struct** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Totals in milliseconds from one `SpawningTimer` benchmark run of a network prefab. Editor/debug tool only.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Nested in** [`SpawningTimer`](/mod/game-api/types/global-s/spawningtimer)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-destroyduration" /><code>{"double destroyDuration"}</code> | <span className="api-desc">Total time to destroy the entities spawned in the run.</span> |
| <Link id="m-instantiatetime" /><code>{"double instantiateTime"}</code> | <span className="api-desc">Total time for plain `Object.Instantiate` of the prefab, without the network spawner.</span> |
| <Link id="m-setownedtime" /><code>{"double setOwnedTime"}</code> | <span className="api-desc">Total time to call `InitializeAsServer` on the instantiated copies.</span> |
| <Link id="m-setscaletime" /><code>{"double setScaleTime"}</code> | <span className="api-desc">Total time to set a random local scale on each instantiated copy.</span> |
| <Link id="m-spawnduration" /><code>{"double spawnDuration"}</code> | <span className="api-desc">Total time to spawn the prefab through the network spawner's `SpawnInternal`.</span> |
| <Link id="m-spawnexistingtime" /><code>{"double spawnExistingTime"}</code> | <span className="api-desc">Total time to register the instantiated copies with `SpawnExisting`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaveragetimes" /><code>{"string GetAverageTimes(int numberOfTimesToSpawn)"}</code> | <span className="api-desc">Returns the per-spawn averages as one CSV row (spawn, instantiate, spawn existing, set owned, destroy, set scale).</span> |

## Used in

Members of other types that take, return or hold a `ResultTimes`:

<div className="api-used-in">

[`SpawningTimer.TimeSpawnPrefab`](/mod/game-api/types/global-s/spawningtimer#m-timespawnprefab).

</div>
