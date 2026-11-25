---
title: "FruitNinja"
description: "A test spawner (editor Start and Stop buttons) that spawns random itemsToSpawn, faster over time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FruitNinja

A **class** in `Root.Township`, `Alta.Cooking`.

A test spawner (editor Start and Stop buttons) that spawns random `itemsToSpawn`, faster over time.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Cooking](/game-api/game-systems/cooking)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FruitNinja()"}</code> |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-anglerange" /><code>{"private float angleRange"}</code> |
| <Link id="m-isstarting" /><code>{"private bool isStarting"}</code> |
| <Link id="m-isstopping" /><code>{"private bool isStopping"}</code> |
| <Link id="m-itemstospawn" /><code>{"private List<"}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{"> itemsToSpawn"}</code> |
| <Link id="m-maxvelocity" /><code>{"private float maxVelocity"}</code> |
| <Link id="m-minvelocity" /><code>{"private float minVelocity"}</code> |
| <Link id="m-spawnedentities" /><code>{"private List<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> spawnedEntities"}</code> |
| <Link id="m-spawningroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" spawningRoutine"}</code> |
| <Link id="m-spawnlength" /><code>{"private float spawnLength"}</code> |
| <Link id="m-spawnspeedupvariationpercent" /><code>{"private float spawnSpeedUpVariationPercent"}</code> |
| <Link id="m-speedupovertime" /><code>{"private AnimationCurve speedUpOvertime"}</code> |
| <Link id="m-startspawninterval" /><code>{"private float startSpawnInterval"}</code> |
| <Link id="m-starttime" /><code>{"private float startTime"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-startspawning" /><code>{"void StartSpawning()"}</code> |
| <Link id="m-stopspawning" /><code>{"void StopSpawning()"}</code> |

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |
| <Link id="m-spawn" /><code>{"private IEnumerator Spawn() (iterator)"}</code> |
| <Link id="m-spawnitem" /><code>{"private void SpawnItem("}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" toSpawn)"}</code> |
| <Link id="m-spawnrandomitem" /><code>{"private void SpawnRandomItem()"}</code> |

</details>
