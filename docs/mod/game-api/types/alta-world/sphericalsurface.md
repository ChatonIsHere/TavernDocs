---
title: "SphericalSurface"
description: "Spawn surface that finds points by raycasting outward in random directions from the object's centre, optionally only over the upper hemisphere."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SphericalSurface

A **class** in `Root.Township`, `Alta.Chunks`.

Spawn surface that finds points by raycasting outward in random directions from the object's centre, optionally only over the upper hemisphere. Its settings are saved with the object.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`PositionSurfaceDefinition`](/mod/game-api/types/alta-world/positionsurfacedefinition), [`ISavable<SphericalSurfaceSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<SphericalSurfaceSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`SphericalSurfaceSaveData`](/mod/game-api/types/alta-world/sphericalsurfacesavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SphericalSurface()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ishemisphere" /><code>{"private bool isHemisphere"}</code> | <span className="api-desc">Only cast over the half facing the object's up.</span> |
| <Link id="m-radius" /><code>{"private float radius"}</code> | <span className="api-desc">How far the raycasts reach.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code>{"override bool GetPosition(out Vector3 position, out Vector3 normal)"}</code> | <span className="api-desc">Tries up to the global retry count of random outward raycasts of `radius` length and returns the first hit.</span> |
| <Link id="m-setsize" /><code>{"override void SetSize(float size)"}</code> | <span className="api-desc">Sets the radius.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the sphere in the scene view (not for a hemisphere).</span> |

</details>
