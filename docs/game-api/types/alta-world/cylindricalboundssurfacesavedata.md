---
title: "CylindricalBoundsSurfaceSaveData"
description: "Saved settings for a CylindricalBoundsSurface: the arc, height and radii it raycasts across to find spawn positions."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CylindricalBoundsSurfaceSaveData

A **class** in `Root.Township`, `Alta.Chunks`.

Saved settings for a `CylindricalBoundsSurface`: the arc, height and radii it raycasts across to find spawn positions.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`NewSaveData<CylindricalBoundsSurface, CylindricalBoundsSurfaceSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`CylindricalBoundsSurface`](/game-api/types/alta-world/cylindricalboundssurface), [`CylindricalBoundsSurfaceSaveData`](/game-api/types/alta-world/cylindricalboundssurfacesavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CylindricalBoundsSurfaceSaveData()"}</code> | Creates a `CylindricalBoundsSurfaceSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-arc" /><code>{"float arc"}</code> | How far round the cylinder rays can start, in radians (entered in degrees and converted on load). |
| <Link id="m-height" /><code>{"float height"}</code> | Maximum height above the surface's origin that a ray can start at. |
| <Link id="m-maxoffset" /><code>{"float maxOffset"}</code> | Maximum sideways offset of a ray's start point, either side of the radial direction. |
| <Link id="m-raycastendradius" /><code>{"float raycastEndRadius"}</code> | Radius the ray stops at. If it is less than the start radius, the ray is cast inwards instead. |
| <Link id="m-raycaststartradius" /><code>{"float raycastStartRadius"}</code> | Radius the ray starts at, measured out from the surface's centre. |

## Used in

Members of other types that take, return or hold a `CylindricalBoundsSurfaceSaveData`:

[`CylindricalBoundsSurface.config`](/game-api/types/alta-world/cylindricalboundssurface#m-config).
