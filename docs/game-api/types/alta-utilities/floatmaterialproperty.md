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

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`MaterialProperty<float>`](/game-api/types/alta-utilities/materialproperty-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FloatMaterialProperty(string propertyName)"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setonmaterial" /><code>{"override void SetOnMaterial(float value, Material material)"}</code> | Sets the float on a material. |
| <Link id="m-setonpropertyblock" /><code>{"override void SetOnPropertyBlock(float value, MaterialPropertyBlock propertyBlock)"}</code> | Sets the float on a material property block. |

## Used in

Members of other types that take, return or hold a `FloatMaterialProperty`:

[`BoilingParticlesMaterialCreator.glossiness`](/game-api/types/alta-stats-effects/boilingparticlesmaterialcreator#m-glossiness), [`BoilingParticlesMaterialCreator.transparency`](/game-api/types/alta-stats-effects/boilingparticlesmaterialcreator#m-transparency), [`BoilingParticlesMaterialCreator.Transparency`](/game-api/types/alta-stats-effects/boilingparticlesmaterialcreator#m-transparency-2), [`LiquidPouringMaterialCreator.glossiness`](/game-api/types/alta-stats-effects/liquidpouringmaterialcreator#m-glossiness), [`LiquidPouringMaterialCreator.transparency`](/game-api/types/alta-stats-effects/liquidpouringmaterialcreator#m-transparency), [`LiquidSurfaceMaterialCreator.depth`](/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-depth), [`LiquidSurfaceMaterialCreator.fresnelExponent`](/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-fresnelexponent), [`LiquidSurfaceMaterialCreator.glossiness`](/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-glossiness), [`LiquidSurfaceMaterialCreator.refractionAmount`](/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-refractionamount), [`LiquidSurfaceMaterialCreator.rimFalloff`](/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-rimfalloff), [`LiquidSurfaceMaterialCreator.rimSize`](/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-rimsize), [`LiquidSurfaceMaterialCreator.rimTiling`](/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-rimtiling), [`LiquidSurfaceMaterialCreator.stencilNumber`](/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-stencilnumber), [`LiquidSurfaceMaterialCreator.StencilNumber`](/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-stencilnumber-2), [`LiquidSurfaceMaterialCreator.surfaceHighlight`](/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-surfacehighlight), [`LiquidSurfaceMaterialCreator.surfaceHighlightSize`](/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-surfacehighlightsize), [`LiquidSurfaceMaterialCreator.surfaceHighlightTiling`](/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-surfacehighlighttiling), [`LiquidSurfaceMaterialCreator.tiling`](/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-tiling), [`LiquidSurfaceMaterialCreator.transparency`](/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-transparency), [`LiquidSurfaceMaterialCreator.waveSpeed`](/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-wavespeed), [`LiquidSurfaceMaterialCreator.WaveSpeed`](/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-wavespeed-2), [`LiquidSurfaceMaterialCreator.waveStrength`](/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-wavestrength), [`LiquidSurfaceMaterialCreator.WaveStrength`](/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-wavestrength-2).
