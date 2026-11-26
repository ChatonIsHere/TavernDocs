---
title: "FruitNinja"
description: "Test spawner that throws random items upward from a line, faster and faster over time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FruitNinja

A **class** in `Root.Township`, `Alta.Cooking`.

Test spawner that throws random items upward from a line, faster and faster over time. Has Start and Stop buttons in the inspector.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Cooking](/game-api/game-systems/cooking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FruitNinja()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anglerange" /><code>{"private float angleRange"}</code> | Total spread in degrees of the launch angle. |
| <Link id="m-isstarting" /><code>{"private bool isStarting"}</code> | Inspector Start button. |
| <Link id="m-isstopping" /><code>{"private bool isStopping"}</code> | Inspector Stop button. |
| <Link id="m-itemstospawn" /><code>{"private List<"}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{"> itemsToSpawn"}</code> | Items picked from at random. |
| <Link id="m-maxvelocity" /><code>{"private float maxVelocity"}</code> | Highest launch speed. |
| <Link id="m-minvelocity" /><code>{"private float minVelocity"}</code> | Lowest launch speed. |
| <Link id="m-spawnedentities" /><code>{"private List<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> spawnedEntities"}</code> | Every entity this spawner made. Never cleared. |
| <Link id="m-spawningroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" spawningRoutine"}</code> | The running spawn coroutine, or null. |
| <Link id="m-spawnlength" /><code>{"private float spawnLength"}</code> | Length of the spawn line along the object's x axis. |
| <Link id="m-spawnspeedupvariationpercent" /><code>{"private float spawnSpeedUpVariationPercent"}</code> | Random variation applied to the spawn rate each time. |
| <Link id="m-speedupovertime" /><code>{"private AnimationCurve speedUpOvertime"}</code> | Spawn rate multiplier over seconds since starting. |
| <Link id="m-startspawninterval" /><code>{"private float startSpawnInterval"}</code> | Seconds between spawns at a rate of 1. |
| <Link id="m-starttime" /><code>{"private float startTime"}</code> | When spawning started. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-startspawning" /><code>{"void StartSpawning()"}</code> | Starts (or restarts) the spawn coroutine. |
| <Link id="m-stopspawning" /><code>{"void StopSpawning()"}</code> | Stops the spawn coroutine. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the spawn line in the editor. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Runs the inspector Start or Stop buttons. |
| <Link id="m-spawn" /><code>{"private IEnumerator Spawn() (iterator)"}</code> | Coroutine that spawns an item, then waits a shorter time as the speed-up curve rises. |
| <Link id="m-spawnitem" /><code>{"private void SpawnItem("}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" toSpawn)"}</code> | Spawns an item at a random point on the line and launches it upward at a random angle and speed. |
| <Link id="m-spawnrandomitem" /><code>{"private void SpawnRandomItem()"}</code> | Spawns a random item from the list, ignoring errors. |

</details>
