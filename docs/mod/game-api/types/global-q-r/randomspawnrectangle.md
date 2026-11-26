---
title: "RandomSpawnRectangle"
description: "Server: spawns a random number of items from a distribution at random points in a box, then removes itself."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomSpawnRectangle

A **class** in `Root.Township`, the global namespace.

Server: spawns a random number of items from a distribution at random points in a box, then removes itself. Saved so it can be placed in saves.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<RandomSpawnRectangleSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<RandomSpawnRectangleSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`RandomSpawnRectangleSaveData`](/mod/game-api/types/global-q-r/randomspawnrectanglesavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RandomSpawnRectangle()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distribution" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" distribution"}</code> | <span className="api-desc">Distribution the spawned prefabs are picked from.</span> |
| <Link id="m-maximum" /><code>{"private int maximum"}</code> | <span className="api-desc">Exclusive upper bound on the item count.</span> |
| <Link id="m-minimum" /><code>{"private int minimum"}</code> | <span className="api-desc">Inclusive lower bound on the item count.</span> |
| <Link id="m-minimumup" /><code>{"private float minimumUp"}</code> | <span className="api-desc">Smallest up component of a spawned item's up vector, limiting tilt.</span> |
| <Link id="m-size" /><code>{"private Vector3 size"}</code> | <span className="api-desc">Size of the spawn box in local space, from the object's origin.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Spawns the items now if the entity is in a chunk, or once it's added to one.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Editor: draws the spawn box in translucent blue.</span> |
| <Link id="m-spawnitems" /><code>{"private void SpawnItems("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Spawns a random count of prefabs from the distribution in the box, tilted no further than `minimumUp`, then destroys this entity (or clears the distribution if it has no prefab).</span> |

</details>
