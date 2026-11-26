---
title: "TestSpawner"
description: "Developer test behaviour that, on the server, spawns a prefab many times in a grid or scattered pattern into this entity's chunk."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TestSpawner

A **class** in `Root.Township`, no namespace.

Developer test behaviour that, on the server, spawns a prefab many times in a grid or scattered pattern into this entity's chunk.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`Mode`](/game-api/types/global-t-x/testspawner-mode)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TestSpawner()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gridsize" /><code>{"private int gridSize"}</code> | Number of rows and columns for grid mode. |
| <Link id="m-gridspacing" /><code>{"private float gridSpacing"}</code> | Distance between grid points. |
| <Link id="m-mode" /><code>{"private "}<Link to="/game-api/types/global-t-x/testspawner-mode">{"TestSpawner.Mode"}</Link>{" mode"}</code> | Which spawn pattern to use. |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> | Prefab to spawn. |
| <Link id="m-radius" /><code>{"private float radius"}</code> | Size of the area for rect mode. |
| <Link id="m-scattercount" /><code>{"private int scatterCount"}</code> | Number of spawns for the scatter modes. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: spawns the prefab in the chosen pattern. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gizmo" /><code>{"private void Gizmo(Vector3 position)"}</code> | Draws a small cube at a spawn position. |
| <Link id="m-grid" /><code>{"private void Grid(Action<Vector3> spawn)"}</code> | Calls the spawn action on a `gridSize` by `gridSize` grid centred here. |
| <Link id="m-handle" /><code>{"private void Handle(Action<Vector3> spawn)"}</code> | Runs the pattern chosen by `mode` with the given action. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Previews the spawn pattern with yellow cubes. Random modes show new points every redraw. |
| <Link id="m-scatterevencircle" /><code>{"private void ScatterEvenCircle(Action<Vector3> spawn)"}</code> | Random points in a circle of radius 1 around this object; `radius` isn't used. |
| <Link id="m-scatterrect" /><code>{"private void ScatterRect(Action<Vector3> spawn)"}</code> | Random points in a square `radius` wide centred here. |
| <Link id="m-scatterweightedcircle" /><code>{"private void ScatterWeightedCircle(Action<Vector3> spawn)"}</code> | Random points from a unit sphere flattened onto the ground, so more fall near the centre. |
| <Link id="m-spawn" /><code>{"private void Spawn(Vector3 position)"}</code> | Spawns the prefab at a position in this entity's chunk. |

</details>
