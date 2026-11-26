---
title: "SpawnInCircle"
description: "Server: spawns items from a pipeline in a ring around the entity on first generation, as saved children."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnInCircle

A **class** in `Root.Township`, the global namespace.

Server: spawns items from a pipeline in a ring around the entity on first generation, as saved children.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<SpawnInCircleSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<SpawnInCircleSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`SpawnInCircleSaveData`](/mod/game-api/types/global-s/spawnincirclesavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnInCircle()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-items" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" items"}</code> | Object pipeline that picks the prefab for each item. |
| <Link id="m-maxradius" /><code>{"private float maxRadius"}</code> | Largest ring radius. |
| <Link id="m-minradius" /><code>{"private float minRadius"}</code> | Smallest ring radius. |
| <Link id="m-numofitems" /><code>{"private int numOfItems"}</code> | How many items to place round the ring. |
| <Link id="m-randomoffset" /><code>{"private Vector3 randomOffset"}</code> | Extra random X and Z jitter per item. |
| <Link id="m-shouldbekinematic" /><code>{"private bool shouldBeKinematic"}</code> | Makes the spawned items' rigidbodies kinematic. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-circlespawn" /><code>{"void CircleSpawn()"}</code> | Spawns about `numOfItems` items spaced round a circle at random radii and offsets, with random Y rotation. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Spawns the ring when the spawn data says this is a fresh generation. |
