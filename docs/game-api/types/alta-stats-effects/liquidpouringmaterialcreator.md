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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`MaterialCreator<LiquidVisualData>`](/game-api/types/alta-stats-effects/materialcreator-t)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LiquidPouringMaterialCreator()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-glossiness" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" glossiness"}</code> | The `_Glossiness` shader property. |
| <Link id="m-liquidcolor" /><code>{"private "}<Link to="/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" liquidColor"}</code> | Backing field for `LiquidColor`. |
| <Link id="m-transparency" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" transparency"}</code> | The `_Transparency` shader property. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-basecolor" /><code><Link to="/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" BaseColor { get; }"}</code> | The `_Color` shader property, set to the tinted liquid colour per renderer. |
| <Link id="m-liquidcolor-2" /><code><Link to="/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" LiquidColor { get; }"}</code> | The `_WaterColor` shader property. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-creatematerial" /><code>{"override Material CreateMaterial("}<Link to="/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" settings, Material materialTemplate)"}</code> | Copies the template and sets the liquid colour, transparency and glossiness on it. |

## Used in

Members of other types that take, return or hold a `LiquidPouringMaterialCreator`:

[`LiquidParticlesRendererColorer.pouringMaterialCreator`](/game-api/types/global-i-l/liquidparticlesrenderercolorer#m-pouringmaterialcreator).
