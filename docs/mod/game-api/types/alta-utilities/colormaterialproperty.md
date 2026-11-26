---
title: "ColorMaterialProperty"
description: "A colour shader property, looked up by name once, that can be set on a material or a property block."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ColorMaterialProperty

A **class** in `Root.Township`, `Alta.Utilities`.

A colour shader property, looked up by name once, that can be set on a material or a property block.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`MaterialProperty<Color>`](/mod/game-api/types/alta-utilities/materialproperty-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ColorMaterialProperty(string propertyName)"}</code> | Creates a `ColorMaterialProperty` from `propertyName`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setonmaterial" /><code>{"override void SetOnMaterial(Color value, Material material)"}</code> | Sets the colour on a material. |
| <Link id="m-setonpropertyblock" /><code>{"override void SetOnPropertyBlock(Color value, MaterialPropertyBlock propertyBlock)"}</code> | Sets the colour on a material property block. |

## Used in

Members of other types that take, return or hold a `ColorMaterialProperty`:

[`BoilingParticlesMaterialCreator.liquidColor`](/mod/game-api/types/alta-stats-effects/boilingparticlesmaterialcreator#m-liquidcolor), [`BoilingParticlesMaterialCreator.LiquidColor`](/mod/game-api/types/alta-stats-effects/boilingparticlesmaterialcreator#m-liquidcolor-2), [`BottleLiquidMaterialCreator.liquidColor`](/mod/game-api/types/alta-stats-effects/bottleliquidmaterialcreator#m-liquidcolor), [`BottleLiquidMaterialCreator.LiquidColor`](/mod/game-api/types/alta-stats-effects/bottleliquidmaterialcreator#m-liquidcolor-2), [`LiquidFoamMaterialCreator.rimColor`](/mod/game-api/types/alta-stats-effects/liquidfoammaterialcreator#m-rimcolor), [`LiquidPouringMaterialCreator.BaseColor`](/mod/game-api/types/alta-stats-effects/liquidpouringmaterialcreator#m-basecolor), [`LiquidPouringMaterialCreator.liquidColor`](/mod/game-api/types/alta-stats-effects/liquidpouringmaterialcreator#m-liquidcolor), [`LiquidPouringMaterialCreator.LiquidColor`](/mod/game-api/types/alta-stats-effects/liquidpouringmaterialcreator#m-liquidcolor-2), [`LiquidSurfaceMaterialCreator.fresnelColor`](/mod/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-fresnelcolor), [`LiquidSurfaceMaterialCreator.liquidColor`](/mod/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-liquidcolor), [`LiquidSurfaceMaterialCreator.LiquidColor`](/mod/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-liquidcolor-2), [`LiquidSurfaceMaterialCreator.liquidDepthColor`](/mod/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-liquiddepthcolor), [`LiquidSurfaceMaterialCreator.lodColor`](/mod/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-lodcolor), [`LiquidSurfaceMaterialCreator.LODColor`](/mod/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-lodcolor-2), [`LiquidSurfaceMaterialCreator.rimColor`](/mod/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-rimcolor), [`LiquidSurfaceMaterialCreator.surfaceHighlightColor`](/mod/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-surfacehighlightcolor).
