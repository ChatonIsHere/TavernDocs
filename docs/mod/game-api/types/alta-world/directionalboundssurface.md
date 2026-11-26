---
title: "DirectionalBoundsSurface"
description: "Spawn surface that finds points by raycasting straight down (in local space) from random spots on the top of a box."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DirectionalBoundsSurface

A **class** in `Root.Township`, `Alta.Chunks`.

Spawn surface that finds points by raycasting straight down (in local space) from random spots on the top of a box. Its extents are saved with the object.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`PositionSurfaceDefinition`](/mod/game-api/types/alta-world/positionsurfacedefinition), [`ISavable<DirectionalBoundsSurfaceSave>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<DirectionalBoundsSurfaceSave>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`DirectionalBoundsSurfaceSave`](/mod/game-api/types/alta-world/directionalboundssurfacesave)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DirectionalBoundsSurface()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-extents" /><code>{"private Vector3 extents"}</code> | <span className="api-desc">Half-size of the box the raycasts are made in.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code>{"override bool GetPosition(out Vector3 position, out Vector3 normal)"}</code> | <span className="api-desc">Tries up to the global retry count of downward raycasts across the box height and returns the first hit.</span> |
| <Link id="m-setsize" /><code>{"override void SetSize(float size)"}</code> | <span className="api-desc">Sets all three extents to the given size.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the box in the scene view.</span> |

</details>
