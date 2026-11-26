---
title: "LiquidPouringMaterialCreator"
description: "Makes the material for a pouring liquid stream from the liquid's visual data."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidPouringMaterialCreator

A **class** in `Root.Township`, `Alta.Liquid`.

Makes the material for a pouring liquid stream from the liquid's visual data.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`MaterialCreator<LiquidVisualData>`](/mod/game-api/types/alta-stats-effects/materialcreator-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidPouringMaterialCreator()"}</code> | <span className="api-desc">Creates a `LiquidPouringMaterialCreator` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-glossiness" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" glossiness"}</code> | <span className="api-desc">The `_Glossiness` shader property.</span> |
| <Link id="m-liquidcolor" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" liquidColor"}</code> | <span className="api-desc">Backing field for `LiquidColor`.</span> |
| <Link id="m-transparency" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" transparency"}</code> | <span className="api-desc">The `_Transparency` shader property.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-basecolor" /><code><Link to="/mod/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" BaseColor { get; }"}</code> | <span className="api-desc">The `_Color` shader property, set to the tinted liquid colour per renderer.</span> |
| <Link id="m-liquidcolor-2" /><code><Link to="/mod/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" LiquidColor { get; }"}</code> | <span className="api-desc">The `_WaterColor` shader property.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-creatematerial" /><code>{"override Material CreateMaterial("}<Link to="/mod/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" settings, Material materialTemplate)"}</code> | <span className="api-desc">Copies the template and sets the liquid colour, transparency and glossiness on it.</span> |

## Used in

Members of other types that take, return or hold a `LiquidPouringMaterialCreator`:

<div className="api-used-in">

[`LiquidParticlesRendererColorer.pouringMaterialCreator`](/mod/game-api/types/global-i-l/liquidparticlesrenderercolorer#m-pouringmaterialcreator).

</div>
