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

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`PositionSurfaceDefinition`](/game-api/types/alta-world/positionsurfacedefinition), [`ISavable<DirectionalBoundsSurfaceSave>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<DirectionalBoundsSurfaceSave>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`DirectionalBoundsSurfaceSave`](/game-api/types/alta-world/directionalboundssurfacesave)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DirectionalBoundsSurface()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-extents" /><code>{"private Vector3 extents"}</code> | Half-size of the box the raycasts are made in. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code>{"override bool GetPosition(out Vector3 position, out Vector3 normal)"}</code> | Tries up to the global retry count of downward raycasts across the box height and returns the first hit. |
| <Link id="m-setsize" /><code>{"override void SetSize(float size)"}</code> | Sets all three extents to the given size. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the box in the scene view. |

</details>
