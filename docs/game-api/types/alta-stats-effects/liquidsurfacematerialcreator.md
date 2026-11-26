---
title: "LiquidSurfaceMaterialCreator"
description: "Makes the liquid surface material from a liquid's visual data: colours, rim, fresnel, foam, waves and refraction."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidSurfaceMaterialCreator

A **class** in `Root.Township`, `Alta.Liquid`.

Makes the liquid surface material from a liquid's visual data: colours, rim, fresnel, foam, waves and refraction. Shared through `CookingLiquidVisual.MaterialCreator`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`MaterialCreator<LiquidVisualData>`](/game-api/types/alta-stats-effects/materialcreator-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidSurfaceMaterialCreator()"}</code> | Creates a `LiquidSurfaceMaterialCreator` with default values. |

## Fields

<details>
<summary>21 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-depth" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" depth"}</code> | The `_Depth` shader property. |
| <Link id="m-fresnelcolor" /><code>{"private "}<Link to="/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" fresnelColor"}</code> | The `_FresnelColor` shader property. |
| <Link id="m-fresnelexponent" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" fresnelExponent"}</code> | The `_Fresnelexponent` shader property. |
| <Link id="m-glossiness" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" glossiness"}</code> | The `_Glossiness` shader property. |
| <Link id="m-liquidcolor" /><code>{"private "}<Link to="/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" liquidColor"}</code> | Backing field for `LiquidColor`. |
| <Link id="m-liquiddepthcolor" /><code>{"private "}<Link to="/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" liquidDepthColor"}</code> | The `_WaterColor` shader property, the deep colour. |
| <Link id="m-lodcolor" /><code>{"private "}<Link to="/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" lodColor"}</code> | Backing field for `LODColor`. |
| <Link id="m-refractionamount" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" refractionAmount"}</code> | The `_RefractionAmount` shader property. |
| <Link id="m-rimcolor" /><code>{"private "}<Link to="/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" rimColor"}</code> | The `_RimColor` shader property. |
| <Link id="m-rimfalloff" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" rimFalloff"}</code> | The `_Rimfalloff` shader property. |
| <Link id="m-rimsize" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" rimSize"}</code> | The `_RimSize` shader property. |
| <Link id="m-rimtiling" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" rimTiling"}</code> | The `_Rimtiling` shader property. |
| <Link id="m-stencilnumber" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" stencilNumber"}</code> | Backing field for `StencilNumber`. |
| <Link id="m-surfacehighlight" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" surfaceHighlight"}</code> | The `_FoamOpacity` shader property. |
| <Link id="m-surfacehighlightcolor" /><code>{"private "}<Link to="/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" surfaceHighlightColor"}</code> | The `_FoamColor` shader property. |
| <Link id="m-surfacehighlightsize" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" surfaceHighlightSize"}</code> | The `_FoamSize` shader property. |
| <Link id="m-surfacehighlighttiling" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" surfaceHighlightTiling"}</code> | The `_FoamTiling` shader property. |
| <Link id="m-tiling" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" tiling"}</code> | The `_Worldspacetiling` shader property. |
| <Link id="m-transparency" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" transparency"}</code> | The `_Transparency` shader property. |
| <Link id="m-wavespeed" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" waveSpeed"}</code> | Backing field for `WaveSpeed`. |
| <Link id="m-wavestrength" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" waveStrength"}</code> | Backing field for `WaveStrength`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-liquidcolor-2" /><code><Link to="/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" LiquidColor { get; }"}</code> | The `_WaterShallowColor` shader property. |
| <Link id="m-lodcolor-2" /><code><Link to="/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" LODColor { get; }"}</code> | The `_Color` shader property, set to the tinted liquid colour per renderer. |
| <Link id="m-stencilnumber-2" /><code><Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" StencilNumber { get; }"}</code> | The `_Stencil` shader property, set by `LiquidStencilShaderController`. |
| <Link id="m-wavespeed-2" /><code><Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" WaveSpeed { get; }"}</code> | The `_Wavesspeed` shader property, changed with temperature when cooking. |
| <Link id="m-wavestrength-2" /><code><Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" WaveStrength { get; }"}</code> | The `_WaveHeight` shader property, changed with temperature when cooking. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-creatematerial" /><code>{"override Material CreateMaterial("}<Link to="/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" settings, Material materialTemplate)"}</code> | Copies the template and sets every surface property from the liquid visual except stencil and LOD colour. |

## Used in

Members of other types that take, return or hold a `LiquidSurfaceMaterialCreator`:

[`CookingLiquidVisual.MaterialCreator`](/game-api/types/alta-crafting/cookingliquidvisual#m-materialcreator).
