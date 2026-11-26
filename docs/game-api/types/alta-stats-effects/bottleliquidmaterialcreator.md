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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`MaterialCreator<LiquidVisualData>`](/game-api/types/alta-stats-effects/materialcreator-t)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BottleLiquidMaterialCreator()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anchor" /><code>{"private "}<Link to="/game-api/types/alta-utilities/vector3materialproperty">{"Vector3MaterialProperty"}</Link>{" anchor"}</code> | Backing field for `Anchor`. |
| <Link id="m-liquidcolor" /><code>{"private "}<Link to="/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" liquidColor"}</code> | Backing field for `LiquidColor`. |
| <Link id="m-point" /><code>{"private "}<Link to="/game-api/types/alta-utilities/vector3materialproperty">{"Vector3MaterialProperty"}</Link>{" point"}</code> | Backing field for `Point`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-anchor-2" /><code><Link to="/game-api/types/alta-utilities/vector3materialproperty">{"Vector3MaterialProperty"}</Link>{" Anchor { get; }"}</code> | The `_Anchor` shader property, set to the bottle's up direction. |
| <Link id="m-liquidcolor-2" /><code><Link to="/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" LiquidColor { get; }"}</code> | The `_Color` shader property. |
| <Link id="m-point-2" /><code><Link to="/game-api/types/alta-utilities/vector3materialproperty">{"Vector3MaterialProperty"}</Link>{" Point { get; }"}</code> | The `_Point` shader property, set to up times the fill level. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-creatematerial" /><code>{"override Material CreateMaterial("}<Link to="/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" settings, Material materialTemplate)"}</code> | Copies the template and sets the liquid colour on it. |

## Used in

Members of other types that take, return or hold a `BottleLiquidMaterialCreator`:

[`BottledLiquid.materialCreator`](/game-api/types/alta-stats-effects/bottledliquid#m-materialcreator).
