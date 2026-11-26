---
title: "PresetWayPointPath"
description: "Server: a fixed path of positions and rotations that other code can sample by distance, through IPositionRotationPath."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PresetWayPointPath

A **class** in `Root.Township`, no namespace.

Server: a fixed path of positions and rotations that other code can sample by distance, through `IPositionRotationPath`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IPositionRotationPath`](/game-api/types/global-i-l/ipositionrotationpath)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PresetWayPointPath()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lengths" /><code>{"private float[] lengths"}</code> | Length of each segment. Null until set up. |
| <Link id="m-localpositions" /><code>{"private Vector3[] localPositions"}</code> | Path points. Local in the inspector, overwritten with world positions on setup. |
| <Link id="m-localrotations" /><code>{"private Quaternion[] localRotations"}</code> | Path rotations. Local in the inspector, overwritten with world rotations on setup. |
| <Link id="m-totaldistance" /><code>{"private float totalDistance"}</code> | Total path length. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: converts the points to world space and measures the path. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code>{"private void IPositionRotationPath.GetPosition(float value, out Vector3 position, out Quaternion rotation, bool isNormalized)"}</code> | Returns the position and rotation at a distance along the path, or at a 0 to 1 fraction if normalized. |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | Turns the local points into world points and works out each segment's length and the total. |

</details>
