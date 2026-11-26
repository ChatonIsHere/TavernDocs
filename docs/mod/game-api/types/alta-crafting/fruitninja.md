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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Cooking](/mod/game-api/game-systems/cooking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FruitNinja()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anglerange" /><code>{"private float angleRange"}</code> | <span className="api-desc">Total spread in degrees of the launch angle.</span> |
| <Link id="m-isstarting" /><code>{"private bool isStarting"}</code> | <span className="api-desc">Inspector Start button.</span> |
| <Link id="m-isstopping" /><code>{"private bool isStopping"}</code> | <span className="api-desc">Inspector Stop button.</span> |
| <Link id="m-itemstospawn" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{"> itemsToSpawn"}</code> | <span className="api-desc">Items picked from at random.</span> |
| <Link id="m-maxvelocity" /><code>{"private float maxVelocity"}</code> | <span className="api-desc">Highest launch speed.</span> |
| <Link id="m-minvelocity" /><code>{"private float minVelocity"}</code> | <span className="api-desc">Lowest launch speed.</span> |
| <Link id="m-spawnedentities" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> spawnedEntities"}</code> | <span className="api-desc">Every entity this spawner made. Never cleared.</span> |
| <Link id="m-spawningroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" spawningRoutine"}</code> | <span className="api-desc">The running spawn coroutine, or null.</span> |
| <Link id="m-spawnlength" /><code>{"private float spawnLength"}</code> | <span className="api-desc">Length of the spawn line along the object's x axis.</span> |
| <Link id="m-spawnspeedupvariationpercent" /><code>{"private float spawnSpeedUpVariationPercent"}</code> | <span className="api-desc">Random variation applied to the spawn rate each time.</span> |
| <Link id="m-speedupovertime" /><code>{"private AnimationCurve speedUpOvertime"}</code> | <span className="api-desc">Spawn rate multiplier over seconds since starting.</span> |
| <Link id="m-startspawninterval" /><code>{"private float startSpawnInterval"}</code> | <span className="api-desc">Seconds between spawns at a rate of 1.</span> |
| <Link id="m-starttime" /><code>{"private float startTime"}</code> | <span className="api-desc">When spawning started.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-startspawning" /><code>{"void StartSpawning()"}</code> | <span className="api-desc">Starts (or restarts) the spawn coroutine.</span> |
| <Link id="m-stopspawning" /><code>{"void StopSpawning()"}</code> | <span className="api-desc">Stops the spawn coroutine.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the spawn line in the editor.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Runs the inspector Start or Stop buttons.</span> |
| <Link id="m-spawn" /><code>{"private IEnumerator Spawn() (iterator)"}</code> | <span className="api-desc">Coroutine that spawns an item, then waits a shorter time as the speed-up curve rises.</span> |
| <Link id="m-spawnitem" /><code>{"private void SpawnItem("}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" toSpawn)"}</code> | <span className="api-desc">Spawns an item at a random point on the line and launches it upward at a random angle and speed.</span> |
| <Link id="m-spawnrandomitem" /><code>{"private void SpawnRandomItem()"}</code> | <span className="api-desc">Spawns a random item from the list, ignoring errors.</span> |

</details>
