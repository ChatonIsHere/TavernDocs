---
title: "PresetWayPointPath"
description: "Server: a fixed path of positions and rotations that other code can sample by distance, through IPositionRotationPath."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PresetWayPointPath

A **class** in `Root.Township`, the global namespace.

Server: a fixed path of positions and rotations that other code can sample by distance, through `IPositionRotationPath`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IPositionRotationPath`](/mod/game-api/types/global-i-l/ipositionrotationpath)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PresetWayPointPath()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lengths" /><code>{"private float[] lengths"}</code> | <span className="api-desc">Length of each segment. Null until set up.</span> |
| <Link id="m-localpositions" /><code>{"private Vector3[] localPositions"}</code> | <span className="api-desc">Path points. Local in the inspector, overwritten with world positions on setup.</span> |
| <Link id="m-localrotations" /><code>{"private Quaternion[] localRotations"}</code> | <span className="api-desc">Path rotations. Local in the inspector, overwritten with world rotations on setup.</span> |
| <Link id="m-totaldistance" /><code>{"private float totalDistance"}</code> | <span className="api-desc">Total path length.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: converts the points to world space and measures the path.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code>{"private void IPositionRotationPath.GetPosition(float value, out Vector3 position, out Quaternion rotation, bool isNormalized)"}</code> | <span className="api-desc">Returns the position and rotation at a distance along the path, or at a 0 to 1 fraction if normalized.</span> |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | <span className="api-desc">Turns the local points into world points and works out each segment's length and the total.</span> |

</details>
