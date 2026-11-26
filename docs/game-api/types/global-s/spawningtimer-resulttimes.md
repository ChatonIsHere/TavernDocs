---
title: "SpawningTimer.ResultTimes"
description: "Totals in milliseconds from one SpawningTimer benchmark run of a network prefab."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawningTimer.ResultTimes

A **private struct** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Totals in milliseconds from one `SpawningTimer` benchmark run of a network prefab. Editor/debug tool only.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Nested in** [`SpawningTimer`](/game-api/types/global-s/spawningtimer)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-destroyduration" /><code>{"double destroyDuration"}</code> | Total time to destroy the entities spawned in the run. |
| <Link id="m-instantiatetime" /><code>{"double instantiateTime"}</code> | Total time for plain `Object.Instantiate` of the prefab, without the network spawner. |
| <Link id="m-setownedtime" /><code>{"double setOwnedTime"}</code> | Total time to call `InitializeAsServer` on the instantiated copies. |
| <Link id="m-setscaletime" /><code>{"double setScaleTime"}</code> | Total time to set a random local scale on each instantiated copy. |
| <Link id="m-spawnduration" /><code>{"double spawnDuration"}</code> | Total time to spawn the prefab through the network spawner's `SpawnInternal`. |
| <Link id="m-spawnexistingtime" /><code>{"double spawnExistingTime"}</code> | Total time to register the instantiated copies with `SpawnExisting`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaveragetimes" /><code>{"string GetAverageTimes(int numberOfTimesToSpawn)"}</code> | Returns the per-spawn averages as one CSV row (spawn, instantiate, spawn existing, set owned, destroy, set scale). |

## Used in

Members of other types that take, return or hold a `ResultTimes`:

[`SpawningTimer.TimeSpawnPrefab`](/game-api/types/global-s/spawningtimer#m-timespawnprefab).
