---
title: "Vector3MaterialProperty"
description: "A named shader property that takes a Vector3, set by cached property id."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Vector3MaterialProperty

A **class** in `Root.Township`, `Alta.Utilities`.

A named shader property that takes a `Vector3`, set by cached property id.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`MaterialProperty<Vector3>`](/mod/game-api/types/alta-utilities/materialproperty-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Vector3MaterialProperty(string propertyName)"}</code> | <span className="api-desc">Creates a `Vector3MaterialProperty` from `propertyName`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setonmaterial" /><code>{"override void SetOnMaterial(Vector3 value, Material material)"}</code> | <span className="api-desc">Sets the vector on a material.</span> |
| <Link id="m-setonpropertyblock" /><code>{"override void SetOnPropertyBlock(Vector3 value, MaterialPropertyBlock propertyBlock)"}</code> | <span className="api-desc">Sets the vector on a material property block.</span> |

## Used in

Members of other types that take, return or hold a `Vector3MaterialProperty`:

<div className="api-used-in">

[`BottleLiquidMaterialCreator.anchor`](/mod/game-api/types/alta-stats-effects/bottleliquidmaterialcreator#m-anchor), [`BottleLiquidMaterialCreator.Anchor`](/mod/game-api/types/alta-stats-effects/bottleliquidmaterialcreator#m-anchor-2), [`BottleLiquidMaterialCreator.point`](/mod/game-api/types/alta-stats-effects/bottleliquidmaterialcreator#m-point), [`BottleLiquidMaterialCreator.Point`](/mod/game-api/types/alta-stats-effects/bottleliquidmaterialcreator#m-point-2).

</div>
