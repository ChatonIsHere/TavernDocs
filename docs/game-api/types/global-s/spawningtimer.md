---
title: "SpawningTimer"
description: "Editor test tool that times spawning, instantiating, initializing and destroying network prefabs, for one prefab or all of them into a CSV."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawningTimer

A **class** in `Root.Township`, no namespace.

Editor test tool that times spawning, instantiating, initializing and destroying network prefabs, for one prefab or all of them into a CSV.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`ResultTimes`](/game-api/types/global-s/spawningtimer-resulttimes)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SpawningTimer()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isspawning" /><code>{"private bool isSpawning"}</code> | Inspector button that runs `Spawn`. |
| <Link id="m-istestingall" /><code>{"private bool isTestingAll"}</code> | Inspector button that runs the slow all-prefabs test. |
| <Link id="m-numberoftimestospawn" /><code>{"private int numberOfTimesToSpawn"}</code> | How many copies each test makes. |
| <Link id="m-prefabtospawn" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefabToSpawn"}</code> | Prefab timed by `Spawn`. |
| <Link id="m-scene" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkscene">{"NetworkScene"}</Link>{" scene"}</code> | Network scene whose spawner is used. |
| <Link id="m-stopwatch" /><code>{"private Stopwatch stopwatch"}</code> | Stopwatch reused by `TimeFunction`. |

</details>

## Methods

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Finds the `NetworkScene` if none is set. |
| <Link id="m-spawn" /><code>{"private void Spawn()"}</code> | Times the chosen prefab and logs each average as an error so it shows up. |
| <Link id="m-spawnall" /><code>{"private IEnumerator SpawnAll() (iterator)"}</code> | Coroutine that times every prefab under `Resources/Network Prefabs/` and writes `spawn-times.csv` in the data folder. |
| <Link id="m-startspawningall" /><code>{"private void StartSpawningAll()"}</code> | Starts `SpawnAll`. |
| <Link id="m-timefunction" /><code>{"private double TimeFunction(Action functionToTime)"}</code> | Runs an action and returns the milliseconds it took, or -1 if it threw. |
| <Link id="m-timespawnprefab" /><code>{"private "}<Link to="/game-api/types/global-s/spawningtimer-resulttimes">{"SpawningTimer.ResultTimes"}</Link>{" TimeSpawnPrefab("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefabToSpawn)"}</code> | Spawns, instantiates, initializes, rescales and destroys a prefab many times and returns the total times. |

</details>
