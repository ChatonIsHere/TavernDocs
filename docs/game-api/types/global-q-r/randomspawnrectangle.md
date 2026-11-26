---
title: "RandomSpawnRectangle"
description: "Server: spawns a random number of items from a distribution at random points in a box, then removes itself."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomSpawnRectangle

A **class** in `Root.Township`, no namespace.

Server: spawns a random number of items from a distribution at random points in a box, then removes itself. Saved so it can be placed in saves.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<RandomSpawnRectangleSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<RandomSpawnRectangleSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`RandomSpawnRectangleSaveData`](/game-api/types/global-q-r/randomspawnrectanglesavedata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RandomSpawnRectangle()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distribution" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" distribution"}</code> | Distribution the spawned prefabs are picked from. |
| <Link id="m-maximum" /><code>{"private int maximum"}</code> | Exclusive upper bound on the item count. |
| <Link id="m-minimum" /><code>{"private int minimum"}</code> | Inclusive lower bound on the item count. |
| <Link id="m-minimumup" /><code>{"private float minimumUp"}</code> | Smallest up component of a spawned item's up vector, limiting tilt. |
| <Link id="m-size" /><code>{"private Vector3 size"}</code> | Size of the spawn box in local space, from the object's origin. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Spawns the items now if the entity is in a chunk, or once it's added to one. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Editor: draws the spawn box in translucent blue. |
| <Link id="m-spawnitems" /><code>{"private void SpawnItems("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Spawns a random count of prefabs from the distribution in the box, tilted no further than `minimumUp`, then destroys this entity (or clears the distribution if it has no prefab). |

</details>
