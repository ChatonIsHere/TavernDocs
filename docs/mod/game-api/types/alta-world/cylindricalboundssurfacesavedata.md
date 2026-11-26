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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`NewSaveData<CylindricalBoundsSurface, CylindricalBoundsSurfaceSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`CylindricalBoundsSurface`](/mod/game-api/types/alta-world/cylindricalboundssurface), [`CylindricalBoundsSurfaceSaveData`](/mod/game-api/types/alta-world/cylindricalboundssurfacesavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CylindricalBoundsSurfaceSaveData()"}</code> | <span className="api-desc">Creates a `CylindricalBoundsSurfaceSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-arc" /><code>{"float arc"}</code> | <span className="api-desc">How far round the cylinder rays can start, in radians (entered in degrees and converted on load).</span> |
| <Link id="m-height" /><code>{"float height"}</code> | <span className="api-desc">Maximum height above the surface's origin that a ray can start at.</span> |
| <Link id="m-maxoffset" /><code>{"float maxOffset"}</code> | <span className="api-desc">Maximum sideways offset of a ray's start point, either side of the radial direction.</span> |
| <Link id="m-raycastendradius" /><code>{"float raycastEndRadius"}</code> | <span className="api-desc">Radius the ray stops at. If it is less than the start radius, the ray is cast inwards instead.</span> |
| <Link id="m-raycaststartradius" /><code>{"float raycastStartRadius"}</code> | <span className="api-desc">Radius the ray starts at, measured out from the surface's centre.</span> |

## Used in

Members of other types that take, return or hold a `CylindricalBoundsSurfaceSaveData`:

<div className="api-used-in">

[`CylindricalBoundsSurface.config`](/mod/game-api/types/alta-world/cylindricalboundssurface#m-config).

</div>
