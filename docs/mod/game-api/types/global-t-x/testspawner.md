---
title: "TestSpawner"
description: "Developer test behaviour that, on the server, spawns a prefab many times in a grid or scattered pattern into this entity's chunk."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TestSpawner

A **class** in `Root.Township`, the global namespace.

Developer test behaviour that, on the server, spawns a prefab many times in a grid or scattered pattern into this entity's chunk.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`Mode`](/mod/game-api/types/global-t-x/testspawner-mode)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TestSpawner()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gridsize" /><code>{"private int gridSize"}</code> | <span className="api-desc">Number of rows and columns for grid mode.</span> |
| <Link id="m-gridspacing" /><code>{"private float gridSpacing"}</code> | <span className="api-desc">Distance between grid points.</span> |
| <Link id="m-mode" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/testspawner-mode">{"TestSpawner.Mode"}</Link>{" mode"}</code> | <span className="api-desc">Which spawn pattern to use.</span> |
| <Link id="m-prefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> | <span className="api-desc">Prefab to spawn.</span> |
| <Link id="m-radius" /><code>{"private float radius"}</code> | <span className="api-desc">Size of the area for rect mode.</span> |
| <Link id="m-scattercount" /><code>{"private int scatterCount"}</code> | <span className="api-desc">Number of spawns for the scatter modes.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: spawns the prefab in the chosen pattern.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gizmo" /><code>{"private void Gizmo(Vector3 position)"}</code> | <span className="api-desc">Draws a small cube at a spawn position.</span> |
| <Link id="m-grid" /><code>{"private void Grid(Action<Vector3> spawn)"}</code> | <span className="api-desc">Calls the spawn action on a `gridSize` by `gridSize` grid centred here.</span> |
| <Link id="m-handle" /><code>{"private void Handle(Action<Vector3> spawn)"}</code> | <span className="api-desc">Runs the pattern chosen by `mode` with the given action.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Previews the spawn pattern with yellow cubes. Random modes show new points every redraw.</span> |
| <Link id="m-scatterevencircle" /><code>{"private void ScatterEvenCircle(Action<Vector3> spawn)"}</code> | <span className="api-desc">Random points in a circle of radius 1 around this object; `radius` isn't used.</span> |
| <Link id="m-scatterrect" /><code>{"private void ScatterRect(Action<Vector3> spawn)"}</code> | <span className="api-desc">Random points in a square `radius` wide centred here.</span> |
| <Link id="m-scatterweightedcircle" /><code>{"private void ScatterWeightedCircle(Action<Vector3> spawn)"}</code> | <span className="api-desc">Random points from a unit sphere flattened onto the ground, so more fall near the centre.</span> |
| <Link id="m-spawn" /><code>{"private void Spawn(Vector3 position)"}</code> | <span className="api-desc">Spawns the prefab at a position in this entity's chunk.</span> |

</details>
