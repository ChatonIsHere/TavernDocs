---
title: "FloatMaterialProperty"
description: "A cached shader property id for a float value, set on a material or a property block."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FloatMaterialProperty

A **class** in `Root.Township`, `Alta.Utilities`.

A cached shader property id for a float value, set on a material or a property block.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`MaterialProperty<float>`](/mod/game-api/types/alta-utilities/materialproperty-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FloatMaterialProperty(string propertyName)"}</code> | <span className="api-desc">Creates a `FloatMaterialProperty` from `propertyName`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setonmaterial" /><code>{"override void SetOnMaterial(float value, Material material)"}</code> | <span className="api-desc">Sets the float on a material.</span> |
| <Link id="m-setonpropertyblock" /><code>{"override void SetOnPropertyBlock(float value, MaterialPropertyBlock propertyBlock)"}</code> | <span className="api-desc">Sets the float on a material property block.</span> |

## Used in

Members of other types that take, return or hold a `FloatMaterialProperty`:

<div className="api-used-in">

[`BoilingParticlesMaterialCreator.glossiness`](/mod/game-api/types/alta-stats-effects/boilingparticlesmaterialcreator#m-glossiness), [`BoilingParticlesMaterialCreator.transparency`](/mod/game-api/types/alta-stats-effects/boilingparticlesmaterialcreator#m-transparency), [`BoilingParticlesMaterialCreator.Transparency`](/mod/game-api/types/alta-stats-effects/boilingparticlesmaterialcreator#m-transparency-2), [`LiquidPouringMaterialCreator.glossiness`](/mod/game-api/types/alta-stats-effects/liquidpouringmaterialcreator#m-glossiness), [`LiquidPouringMaterialCreator.transparency`](/mod/game-api/types/alta-stats-effects/liquidpouringmaterialcreator#m-transparency), [`LiquidSurfaceMaterialCreator.depth`](/mod/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-depth), [`LiquidSurfaceMaterialCreator.fresnelExponent`](/mod/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-fresnelexponent), [`LiquidSurfaceMaterialCreator.glossiness`](/mod/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-glossiness), [`LiquidSurfaceMaterialCreator.refractionAmount`](/mod/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-refractionamount), [`LiquidSurfaceMaterialCreator.rimFalloff`](/mod/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-rimfalloff), [`LiquidSurfaceMaterialCreator.rimSize`](/mod/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-rimsize), [`LiquidSurfaceMaterialCreator.rimTiling`](/mod/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-rimtiling), [`LiquidSurfaceMaterialCreator.stencilNumber`](/mod/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-stencilnumber), [`LiquidSurfaceMaterialCreator.StencilNumber`](/mod/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-stencilnumber-2), [`LiquidSurfaceMaterialCreator.surfaceHighlight`](/mod/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-surfacehighlight), [`LiquidSurfaceMaterialCreator.surfaceHighlightSize`](/mod/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-surfacehighlightsize), [`LiquidSurfaceMaterialCreator.surfaceHighlightTiling`](/mod/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-surfacehighlighttiling), [`LiquidSurfaceMaterialCreator.tiling`](/mod/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-tiling), [`LiquidSurfaceMaterialCreator.transparency`](/mod/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-transparency), [`LiquidSurfaceMaterialCreator.waveSpeed`](/mod/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-wavespeed), [`LiquidSurfaceMaterialCreator.WaveSpeed`](/mod/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-wavespeed-2), [`LiquidSurfaceMaterialCreator.waveStrength`](/mod/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-wavestrength), [`LiquidSurfaceMaterialCreator.WaveStrength`](/mod/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-wavestrength-2).

</div>
