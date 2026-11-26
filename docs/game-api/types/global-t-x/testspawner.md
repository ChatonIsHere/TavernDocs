---
title: "TestSpawner"
description: "class TestSpawner in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TestSpawner

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`Mode`](/game-api/types/global-t-x/testspawner-mode)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TestSpawner()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-gridsize" /><code>{"private int gridSize"}</code> |
| <Link id="m-gridspacing" /><code>{"private float gridSpacing"}</code> |
| <Link id="m-mode" /><code>{"private "}<Link to="/game-api/types/global-t-x/testspawner-mode">{"TestSpawner.Mode"}</Link>{" mode"}</code> |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> |
| <Link id="m-radius" /><code>{"private float radius"}</code> |
| <Link id="m-scattercount" /><code>{"private int scatterCount"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |

<details>
<summary>8 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-gizmo" /><code>{"private void Gizmo(Vector3 position)"}</code> |
| <Link id="m-grid" /><code>{"private void Grid(Action<Vector3> spawn)"}</code> |
| <Link id="m-handle" /><code>{"private void Handle(Action<Vector3> spawn)"}</code> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |
| <Link id="m-scatterevencircle" /><code>{"private void ScatterEvenCircle(Action<Vector3> spawn)"}</code> |
| <Link id="m-scatterrect" /><code>{"private void ScatterRect(Action<Vector3> spawn)"}</code> |
| <Link id="m-scatterweightedcircle" /><code>{"private void ScatterWeightedCircle(Action<Vector3> spawn)"}</code> |
| <Link id="m-spawn" /><code>{"private void Spawn(Vector3 position)"}</code> |

</details>
