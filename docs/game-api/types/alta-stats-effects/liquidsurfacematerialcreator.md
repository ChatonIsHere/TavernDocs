---
title: "LiquidSurfaceMaterialCreator"
description: "class LiquidSurfaceMaterialCreator in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidSurfaceMaterialCreator

A **class** in `Root.Township`, `Alta.Liquid`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`MaterialCreator<LiquidVisualData>`](/game-api/types/alta-stats-effects/materialcreator-t)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LiquidSurfaceMaterialCreator()"}</code> |

## Fields

<details>
<summary>21 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-depth" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" depth"}</code> |
| <Link id="m-fresnelcolor" /><code>{"private "}<Link to="/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" fresnelColor"}</code> |
| <Link id="m-fresnelexponent" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" fresnelExponent"}</code> |
| <Link id="m-glossiness" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" glossiness"}</code> |
| <Link id="m-liquidcolor" /><code>{"private "}<Link to="/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" liquidColor"}</code> |
| <Link id="m-liquiddepthcolor" /><code>{"private "}<Link to="/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" liquidDepthColor"}</code> |
| <Link id="m-lodcolor" /><code>{"private "}<Link to="/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" lodColor"}</code> |
| <Link id="m-refractionamount" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" refractionAmount"}</code> |
| <Link id="m-rimcolor" /><code>{"private "}<Link to="/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" rimColor"}</code> |
| <Link id="m-rimfalloff" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" rimFalloff"}</code> |
| <Link id="m-rimsize" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" rimSize"}</code> |
| <Link id="m-rimtiling" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" rimTiling"}</code> |
| <Link id="m-stencilnumber" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" stencilNumber"}</code> |
| <Link id="m-surfacehighlight" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" surfaceHighlight"}</code> |
| <Link id="m-surfacehighlightcolor" /><code>{"private "}<Link to="/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" surfaceHighlightColor"}</code> |
| <Link id="m-surfacehighlightsize" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" surfaceHighlightSize"}</code> |
| <Link id="m-surfacehighlighttiling" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" surfaceHighlightTiling"}</code> |
| <Link id="m-tiling" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" tiling"}</code> |
| <Link id="m-transparency" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" transparency"}</code> |
| <Link id="m-wavespeed" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" waveSpeed"}</code> |
| <Link id="m-wavestrength" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" waveStrength"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-liquidcolor-2" /><code><Link to="/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" LiquidColor { get; }"}</code> |
| <Link id="m-lodcolor-2" /><code><Link to="/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" LODColor { get; }"}</code> |
| <Link id="m-stencilnumber-2" /><code><Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" StencilNumber { get; }"}</code> |
| <Link id="m-wavespeed-2" /><code><Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" WaveSpeed { get; }"}</code> |
| <Link id="m-wavestrength-2" /><code><Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" WaveStrength { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-creatematerial" /><code>{"override Material CreateMaterial("}<Link to="/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" settings, Material materialTemplate)"}</code> |

## Used in

Members of other types that take, return or hold a `LiquidSurfaceMaterialCreator`:

[`CookingLiquidVisual.MaterialCreator`](/game-api/types/alta-crafting/cookingliquidvisual#m-materialcreator).
