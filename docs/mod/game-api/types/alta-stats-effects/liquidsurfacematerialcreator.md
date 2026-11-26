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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`MaterialCreator<LiquidVisualData>`](/mod/game-api/types/alta-stats-effects/materialcreator-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidSurfaceMaterialCreator()"}</code> | <span className="api-desc">Creates a `LiquidSurfaceMaterialCreator` with default values.</span> |

## Fields

<details className="api-private">
<summary>21 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-depth" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" depth"}</code> | <span className="api-desc">The `_Depth` shader property.</span> |
| <Link id="m-fresnelcolor" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" fresnelColor"}</code> | <span className="api-desc">The `_FresnelColor` shader property.</span> |
| <Link id="m-fresnelexponent" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" fresnelExponent"}</code> | <span className="api-desc">The `_Fresnelexponent` shader property.</span> |
| <Link id="m-glossiness" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" glossiness"}</code> | <span className="api-desc">The `_Glossiness` shader property.</span> |
| <Link id="m-liquidcolor" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" liquidColor"}</code> | <span className="api-desc">Backing field for `LiquidColor`.</span> |
| <Link id="m-liquiddepthcolor" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" liquidDepthColor"}</code> | <span className="api-desc">The `_WaterColor` shader property, the deep colour.</span> |
| <Link id="m-lodcolor" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" lodColor"}</code> | <span className="api-desc">Backing field for `LODColor`.</span> |
| <Link id="m-refractionamount" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" refractionAmount"}</code> | <span className="api-desc">The `_RefractionAmount` shader property.</span> |
| <Link id="m-rimcolor" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" rimColor"}</code> | <span className="api-desc">The `_RimColor` shader property.</span> |
| <Link id="m-rimfalloff" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" rimFalloff"}</code> | <span className="api-desc">The `_Rimfalloff` shader property.</span> |
| <Link id="m-rimsize" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" rimSize"}</code> | <span className="api-desc">The `_RimSize` shader property.</span> |
| <Link id="m-rimtiling" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" rimTiling"}</code> | <span className="api-desc">The `_Rimtiling` shader property.</span> |
| <Link id="m-stencilnumber" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" stencilNumber"}</code> | <span className="api-desc">Backing field for `StencilNumber`.</span> |
| <Link id="m-surfacehighlight" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" surfaceHighlight"}</code> | <span className="api-desc">The `_FoamOpacity` shader property.</span> |
| <Link id="m-surfacehighlightcolor" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" surfaceHighlightColor"}</code> | <span className="api-desc">The `_FoamColor` shader property.</span> |
| <Link id="m-surfacehighlightsize" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" surfaceHighlightSize"}</code> | <span className="api-desc">The `_FoamSize` shader property.</span> |
| <Link id="m-surfacehighlighttiling" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" surfaceHighlightTiling"}</code> | <span className="api-desc">The `_FoamTiling` shader property.</span> |
| <Link id="m-tiling" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" tiling"}</code> | <span className="api-desc">The `_Worldspacetiling` shader property.</span> |
| <Link id="m-transparency" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" transparency"}</code> | <span className="api-desc">The `_Transparency` shader property.</span> |
| <Link id="m-wavespeed" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" waveSpeed"}</code> | <span className="api-desc">Backing field for `WaveSpeed`.</span> |
| <Link id="m-wavestrength" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" waveStrength"}</code> | <span className="api-desc">Backing field for `WaveStrength`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-liquidcolor-2" /><code><Link to="/mod/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" LiquidColor { get; }"}</code> | <span className="api-desc">The `_WaterShallowColor` shader property.</span> |
| <Link id="m-lodcolor-2" /><code><Link to="/mod/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" LODColor { get; }"}</code> | <span className="api-desc">The `_Color` shader property, set to the tinted liquid colour per renderer.</span> |
| <Link id="m-stencilnumber-2" /><code><Link to="/mod/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" StencilNumber { get; }"}</code> | <span className="api-desc">The `_Stencil` shader property, set by `LiquidStencilShaderController`.</span> |
| <Link id="m-wavespeed-2" /><code><Link to="/mod/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" WaveSpeed { get; }"}</code> | <span className="api-desc">The `_Wavesspeed` shader property, changed with temperature when cooking.</span> |
| <Link id="m-wavestrength-2" /><code><Link to="/mod/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" WaveStrength { get; }"}</code> | <span className="api-desc">The `_WaveHeight` shader property, changed with temperature when cooking.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-creatematerial" /><code>{"override Material CreateMaterial("}<Link to="/mod/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" settings, Material materialTemplate)"}</code> | <span className="api-desc">Copies the template and sets every surface property from the liquid visual except stencil and LOD colour.</span> |

## Used in

Members of other types that take, return or hold a `LiquidSurfaceMaterialCreator`:

<div className="api-used-in">

[`CookingLiquidVisual.MaterialCreator`](/mod/game-api/types/alta-crafting/cookingliquidvisual#m-materialcreator).

</div>
