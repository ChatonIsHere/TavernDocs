---
title: "SkillShrineTestingArea.SpawnedEntity"
description: "One practice object spawned in a skill shrine's testing area."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillShrineTestingArea.SpawnedEntity

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One practice object spawned in a skill shrine's testing area. Server side: it respawns the object when destroyed and, for movable ones, when it wanders too far.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Nested in** [`SkillShrineTestingArea`](/mod/game-api/types/global-s/skillshrinetestingarea)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnedEntity("}<Link to="/mod/game-api/types/global-p/positionednetworkprefab">{"PositionedNetworkPrefab"}</Link>{" positionedPrefab, "}<Link to="/mod/game-api/types/global-s/skillshrinetestingarea">{"SkillShrineTestingArea"}</Link>{" testingArea)"}</code> | Creates a `SkillShrineTestingArea.SpawnedEntity` from `positionedPrefab` and `testingArea`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-positionedprefab" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionednetworkprefab">{"PositionedNetworkPrefab"}</Link>{" positionedPrefab"}</code> | The prefab and its spot in the testing area. |
| <Link id="m-spawnedentity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" spawnedEntity"}</code> | The currently spawned object. |
| <Link id="m-testingarea" /><code>{"private "}<Link to="/mod/game-api/types/global-s/skillshrinetestingarea">{"SkillShrineTestingArea"}</Link>{" testingArea"}</code> | The testing area this object belongs to. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-needtocheck" /><code>{"bool NeedToCheck { get; }"}</code> | Whether the prefab can move, so distance checks and resets apply. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkdistance" /><code>{"void CheckDistance(Vector3 center)"}</code> | For movable objects, respawns it if it is further than the area's max distance from the centre (ignoring height). |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Destroys the spawned object without respawning it. |
| <Link id="m-resetifneeded" /><code>{"void ResetIfNeeded()"}</code> | Respawns movable objects. Called when the same skill orb is opened again. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroyandrestart" /><code>{"private void DestroyAndRestart("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Respawns the object when it is destroyed, unless that was a chunk unload. |
| <Link id="m-spawnentity" /><code>{"private void SpawnEntity()"}</code> | Spawns the prefab in the area, sets it up for the open skill and player, and marks it not to be saved. |

</details>

## Used in

Members of other types that take, return or hold a `SpawnedEntity`:

[`SkillShrineTestingArea.spawnedEntities`](/mod/game-api/types/global-s/skillshrinetestingarea#m-spawnedentities).
