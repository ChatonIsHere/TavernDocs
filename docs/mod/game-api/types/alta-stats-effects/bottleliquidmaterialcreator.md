---
title: "BottleLiquidMaterialCreator"
description: "Makes the liquid material for bottled liquid (BottledLiquid), with properties for the liquid's colour and fill plane."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BottleLiquidMaterialCreator

A **class** in `Root.Township`, `Alta.Liquid`.

Makes the liquid material for bottled liquid (`BottledLiquid`), with properties for the liquid's colour and fill plane.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`MaterialCreator<LiquidVisualData>`](/mod/game-api/types/alta-stats-effects/materialcreator-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BottleLiquidMaterialCreator()"}</code> | <span className="api-desc">Creates a `BottleLiquidMaterialCreator` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anchor" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/vector3materialproperty">{"Vector3MaterialProperty"}</Link>{" anchor"}</code> | <span className="api-desc">Backing field for `Anchor`.</span> |
| <Link id="m-liquidcolor" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" liquidColor"}</code> | <span className="api-desc">Backing field for `LiquidColor`.</span> |
| <Link id="m-point" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/vector3materialproperty">{"Vector3MaterialProperty"}</Link>{" point"}</code> | <span className="api-desc">Backing field for `Point`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-anchor-2" /><code><Link to="/mod/game-api/types/alta-utilities/vector3materialproperty">{"Vector3MaterialProperty"}</Link>{" Anchor { get; }"}</code> | <span className="api-desc">The `_Anchor` shader property, set to the bottle's up direction.</span> |
| <Link id="m-liquidcolor-2" /><code><Link to="/mod/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" LiquidColor { get; }"}</code> | <span className="api-desc">The `_Color` shader property.</span> |
| <Link id="m-point-2" /><code><Link to="/mod/game-api/types/alta-utilities/vector3materialproperty">{"Vector3MaterialProperty"}</Link>{" Point { get; }"}</code> | <span className="api-desc">The `_Point` shader property, set to up times the fill level.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-creatematerial" /><code>{"override Material CreateMaterial("}<Link to="/mod/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" settings, Material materialTemplate)"}</code> | <span className="api-desc">Copies the template and sets the liquid colour on it.</span> |

## Used in

Members of other types that take, return or hold a `BottleLiquidMaterialCreator`:

<div className="api-used-in">

[`BottledLiquid.materialCreator`](/mod/game-api/types/alta-stats-effects/bottledliquid#m-materialcreator).

</div>
