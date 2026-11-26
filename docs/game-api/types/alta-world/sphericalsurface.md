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

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`PositionSurfaceDefinition`](/game-api/types/alta-world/positionsurfacedefinition), [`ISavable<SphericalSurfaceSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<SphericalSurfaceSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`SphericalSurfaceSaveData`](/game-api/types/alta-world/sphericalsurfacesavedata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SphericalSurface()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ishemisphere" /><code>{"private bool isHemisphere"}</code> | Only cast over the half facing the object's up. |
| <Link id="m-radius" /><code>{"private float radius"}</code> | How far the raycasts reach. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code>{"override bool GetPosition(out Vector3 position, out Vector3 normal)"}</code> | Tries up to the global retry count of random outward raycasts of `radius` length and returns the first hit. |
| <Link id="m-setsize" /><code>{"override void SetSize(float size)"}</code> | Sets the radius. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the sphere in the scene view (not for a hemisphere). |

</details>
