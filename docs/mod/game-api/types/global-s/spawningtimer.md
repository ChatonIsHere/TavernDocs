---
title: "SpawningTimer"
description: "Editor test tool that times spawning, instantiating, initializing and destroying network prefabs, for one prefab or all of them into a CSV."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawningTimer

A **class** in `Root.Township`, the global namespace.

Editor test tool that times spawning, instantiating, initializing and destroying network prefabs, for one prefab or all of them into a CSV.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`ResultTimes`](/mod/game-api/types/global-s/spawningtimer-resulttimes)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawningTimer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isspawning" /><code>{"private bool isSpawning"}</code> | <span className="api-desc">Inspector button that runs `Spawn`.</span> |
| <Link id="m-istestingall" /><code>{"private bool isTestingAll"}</code> | <span className="api-desc">Inspector button that runs the slow all-prefabs test.</span> |
| <Link id="m-numberoftimestospawn" /><code>{"private int numberOfTimesToSpawn"}</code> | <span className="api-desc">How many copies each test makes.</span> |
| <Link id="m-prefabtospawn" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefabToSpawn"}</code> | <span className="api-desc">Prefab timed by `Spawn`.</span> |
| <Link id="m-scene" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkscene">{"NetworkScene"}</Link>{" scene"}</code> | <span className="api-desc">Network scene whose spawner is used.</span> |
| <Link id="m-stopwatch" /><code>{"private Stopwatch stopwatch"}</code> | <span className="api-desc">Stopwatch reused by `TimeFunction`.</span> |

</details>

## Methods

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Finds the `NetworkScene` if none is set.</span> |
| <Link id="m-spawn" /><code>{"private void Spawn()"}</code> | <span className="api-desc">Times the chosen prefab and logs each average as an error so it shows up.</span> |
| <Link id="m-spawnall" /><code>{"private IEnumerator SpawnAll() (iterator)"}</code> | <span className="api-desc">Coroutine that times every prefab under `Resources/Network Prefabs/` and writes `spawn-times.csv` in the data folder.</span> |
| <Link id="m-startspawningall" /><code>{"private void StartSpawningAll()"}</code> | <span className="api-desc">Starts `SpawnAll`.</span> |
| <Link id="m-timefunction" /><code>{"private double TimeFunction(Action functionToTime)"}</code> | <span className="api-desc">Runs an action and returns the milliseconds it took, or -1 if it threw.</span> |
| <Link id="m-timespawnprefab" /><code>{"private "}<Link to="/mod/game-api/types/global-s/spawningtimer-resulttimes">{"SpawningTimer.ResultTimes"}</Link>{" TimeSpawnPrefab("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefabToSpawn)"}</code> | <span className="api-desc">Spawns, instantiates, initializes, rescales and destroys a prefab many times and returns the total times.</span> |

</details>
