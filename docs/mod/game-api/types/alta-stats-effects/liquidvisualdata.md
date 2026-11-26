---
title: "LiquidVisualData"
description: "Asset with the look of a liquid (colours, rim, fresnel, highlight, waves) that liquid surfaces apply as material properties."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidVisualData

A **class** in `Root.Township`, `Alta.Liquid`.

Asset with the look of a liquid (colours, rim, fresnel, highlight, waves) that liquid surfaces apply as material properties. Client visuals only.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`MaterialPropertyBlockSettings<LiquidVisualData>`](/mod/game-api/types/alta-utilities/materialpropertyblocksettings-t)
- **Derived types** [`BoilingParticlesMaterialCreator`](/mod/game-api/types/alta-stats-effects/boilingparticlesmaterialcreator), [`BottleLiquidMaterialCreator`](/mod/game-api/types/alta-stats-effects/bottleliquidmaterialcreator), [`LiquidFoamMaterialCreator`](/mod/game-api/types/alta-stats-effects/liquidfoammaterialcreator), [`LiquidPouringMaterialCreator`](/mod/game-api/types/alta-stats-effects/liquidpouringmaterialcreator), [`LiquidSurfaceMaterialCreator`](/mod/game-api/types/alta-stats-effects/liquidsurfacematerialcreator), [`LiquidVisualData`](/mod/game-api/types/alta-stats-effects/liquidvisualdata)
- **Attributes** `HashedPath`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidVisualData()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maxthickness" /><code>{"const int MaxThickness"}</code> | <span className="api-desc">Constant 100, the top of the `Thickness` range.</span> |

<details className="api-private">
<summary>24 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidliquidcolor" /><code>{"private Color androidLiquidColor"}</code> | <span className="api-desc">Liquid colour used on Android.</span> |
| <Link id="m-depth" /><code>{"private float depth"}</code> | <span className="api-desc">Backing field for `Depth`, the shader's liquid depth value.</span> |
| <Link id="m-fresnelcolor" /><code>{"private Color fresnelColor"}</code> | <span className="api-desc">Backing field for `FresnelColor`, the edge glow colour.</span> |
| <Link id="m-fresnelexponent" /><code>{"private float fresnelExponent"}</code> | <span className="api-desc">Backing field for `FresnelExponent`, how tight the edge glow is.</span> |
| <Link id="m-glossiness" /><code>{"private float glossiness"}</code> | <span className="api-desc">Backing field for `Glossiness`.</span> |
| <Link id="m-liquidcolor" /><code>{"private Color liquidColor"}</code> | <span className="api-desc">Backing field for `LiquidColor`, the main liquid colour.</span> |
| <Link id="m-liquiddepthcolor" /><code>{"private Color liquidDepthColor"}</code> | <span className="api-desc">Backing field for `LiquidDepthColor`, the colour deeper in the liquid.</span> |
| <Link id="m-refractionamount" /><code>{"private float refractionAmount"}</code> | <span className="api-desc">Backing field for `RefractionAmount`.</span> |
| <Link id="m-rimcolor" /><code>{"private Color rimColor"}</code> | <span className="api-desc">Backing field for `RimColor`, the colour of the rim where the liquid meets the container.</span> |
| <Link id="m-rimfalloff" /><code>{"private float rimFalloff"}</code> | <span className="api-desc">Backing field for `RimFalloff`.</span> |
| <Link id="m-rimsize" /><code>{"private float rimSize"}</code> | <span className="api-desc">Backing field for `RimSize`.</span> |
| <Link id="m-rimtiling" /><code>{"private float rimTiling"}</code> | <span className="api-desc">Backing field for `RimTiling`.</span> |
| <Link id="m-sharedmaterials" /><code>{"private Dictionary<Material, Material> sharedMaterials"}</code> | <span className="api-desc">Materials made from these settings, one per template material, reused by `GetSharedMaterial`.</span> |
| <Link id="m-surfacehighlight" /><code>{"private float surfaceHighlight"}</code> | <span className="api-desc">Backing field for `SurfaceHighlight`.</span> |
| <Link id="m-surfacehighlightcolor" /><code>{"private Color surfaceHighlightColor"}</code> | <span className="api-desc">Backing field for `SurfaceHighlightColor`.</span> |
| <Link id="m-surfacehighlightsize" /><code>{"private float surfaceHighlightSize"}</code> | <span className="api-desc">Backing field for `SurfaceHighlightSize`.</span> |
| <Link id="m-surfacehighlighttiling" /><code>{"private float surfaceHighlightTiling"}</code> | <span className="api-desc">Backing field for `SurfaceHighlightTiling`.</span> |
| <Link id="m-thickness" /><code>{"private int thickness"}</code> | <span className="api-desc">Backing field for `Thickness` (1 by default, up to `MaxThickness` of 100).</span> |
| <Link id="m-tiling" /><code>{"private float tiling"}</code> | <span className="api-desc">Backing field for `Tiling`.</span> |
| <Link id="m-transparency" /><code>{"private float transparency"}</code> | <span className="api-desc">Backing field for `Transparency`.</span> |
| <Link id="m-wavespeed" /><code>{"private float waveSpeed"}</code> | <span className="api-desc">Backing field for `WaveSpeed`, the surface wave speed at rest.</span> |
| <Link id="m-wavespeedbytemperature" /><code>{"private AnimationCurve waveSpeedByTemperature"}</code> | <span className="api-desc">Backing field for `WaveSpeedByTemperature`, the curve used for boiling.</span> |
| <Link id="m-wavestrength" /><code>{"private float waveStrength"}</code> | <span className="api-desc">Backing field for `WaveStrength`, the surface wave strength at rest.</span> |
| <Link id="m-wavestrengthbytemperature" /><code>{"private AnimationCurve waveStrengthByTemperature"}</code> | <span className="api-desc">Backing field for `WaveStrengthByTemperature`, the curve used for boiling.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-depth-2" /><code>{"float Depth { get; }"}</code> | <span className="api-desc">Shader depth value for the liquid.</span> |
| <Link id="m-fresnelcolor-2" /><code>{"Color FresnelColor { get; }"}</code> | <span className="api-desc">Colour of the fresnel edge glow.</span> |
| <Link id="m-fresnelexponent-2" /><code>{"float FresnelExponent { get; }"}</code> | <span className="api-desc">Sharpness of the fresnel effect.</span> |
| <Link id="m-glossiness-2" /><code>{"float Glossiness { get; }"}</code> | <span className="api-desc">Surface glossiness.</span> |
| <Link id="m-liquidcolor-2" /><code>{"Color LiquidColor { get; }"}</code> | <span className="api-desc">Main colour of the liquid.</span> |
| <Link id="m-liquiddepthcolor-2" /><code>{"Color LiquidDepthColor { get; }"}</code> | <span className="api-desc">Colour used deeper in the liquid.</span> |
| <Link id="m-refractionamount-2" /><code>{"float RefractionAmount { get; }"}</code> | <span className="api-desc">How much the liquid distorts what is behind it.</span> |
| <Link id="m-rimcolor-2" /><code>{"Color RimColor { get; }"}</code> | <span className="api-desc">Colour of the rim where the liquid meets the container.</span> |
| <Link id="m-rimfalloff-2" /><code>{"float RimFalloff { get; }"}</code> | <span className="api-desc">How quickly the rim colour fades.</span> |
| <Link id="m-rimsize-2" /><code>{"float RimSize { get; }"}</code> | <span className="api-desc">Width of the rim.</span> |
| <Link id="m-rimtiling-2" /><code>{"float RimTiling { get; }"}</code> | <span className="api-desc">Texture tiling of the rim.</span> |
| <Link id="m-surfacehighlight-2" /><code>{"float SurfaceHighlight { get; }"}</code> | <span className="api-desc">Strength of the surface highlight.</span> |
| <Link id="m-surfacehighlightcolor-2" /><code>{"Color SurfaceHighlightColor { get; }"}</code> | <span className="api-desc">Colour of the surface highlight.</span> |
| <Link id="m-surfacehighlightsize-2" /><code>{"float SurfaceHighlightSize { get; }"}</code> | <span className="api-desc">Size of the surface highlight.</span> |
| <Link id="m-surfacehighlighttiling-2" /><code>{"float SurfaceHighlightTiling { get; }"}</code> | <span className="api-desc">Texture tiling of the surface highlight.</span> |
| <Link id="m-thickness-2" /><code>{"int Thickness { get; }"}</code> | <span className="api-desc">How thick the liquid is, passed to the liquid gravity effect when pouring and sloshing (default 1).</span> |
| <Link id="m-tiling-2" /><code>{"float Tiling { get; }"}</code> | <span className="api-desc">Main texture tiling.</span> |
| <Link id="m-transparency-2" /><code>{"float Transparency { get; }"}</code> | <span className="api-desc">How see-through the liquid is.</span> |
| <Link id="m-wavespeed-2" /><code>{"float WaveSpeed { get; }"}</code> | <span className="api-desc">Speed of surface waves.</span> |
| <Link id="m-wavespeedbytemperature-2" /><code>{"AnimationCurve WaveSpeedByTemperature { get; }"}</code> | <span className="api-desc">Wave speed by temperature, for boiling.</span> |
| <Link id="m-wavestrength-2" /><code>{"float WaveStrength { get; }"}</code> | <span className="api-desc">Height of surface waves.</span> |
| <Link id="m-wavestrengthbytemperature-2" /><code>{"AnimationCurve WaveStrengthByTemperature { get; }"}</code> | <span className="api-desc">Wave strength by temperature, for boiling.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getsharedmaterial" /><code>{"Material GetSharedMaterial(Material materialTemplate, Func<"}<Link to="/mod/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{", Material, Material> createNewMaterialFromSettings)"}</code> | <span className="api-desc">Returns one shared material per template for this liquid, creating it on first use with the given function. Logs an error on clients if the template is null.</span> |

## Used in

Members of other types that take, return or hold a `LiquidVisualData`:

<div className="api-used-in">

[`CookingLiquidVisual.SetupMaterialFromLiquidVisualSettings`](/mod/game-api/types/alta-crafting/cookingliquidvisual#m-setupmaterialfromliquidvisualsettings), [`StewComponent.liquidVisualData`](/mod/game-api/types/alta-crafting/stewcomponent#m-liquidvisualdata), [`StewComponent.LiquidVisualData`](/mod/game-api/types/alta-crafting/stewcomponent#m-liquidvisualdata-2), [`BoilingParticlesMaterialCreator.CreateMaterial`](/mod/game-api/types/alta-stats-effects/boilingparticlesmaterialcreator#m-creatematerial), [`BottledLiquid.SetupMaterialFromLiquidVisualSettings`](/mod/game-api/types/alta-stats-effects/bottledliquid#m-setupmaterialfromliquidvisualsettings), [`BottleLiquidMaterialCreator.CreateMaterial`](/mod/game-api/types/alta-stats-effects/bottleliquidmaterialcreator#m-creatematerial), [`LiquidContainerSaveData.CustomData.liquidVisualData`](/mod/game-api/types/alta-stats-effects/liquidcontainersavedata-customdata#m-liquidvisualdata), [`LiquidData.LiquidData`](/mod/game-api/types/alta-stats-effects/liquiddata#m-ctor), [`LiquidData.liquidVisual`](/mod/game-api/types/alta-stats-effects/liquiddata#m-liquidvisual), [`LiquidData.LiquidVisual`](/mod/game-api/types/alta-stats-effects/liquiddata#m-liquidvisual-2), [`LiquidFoamMaterialCreator.CreateMaterial`](/mod/game-api/types/alta-stats-effects/liquidfoammaterialcreator#m-creatematerial), [`LiquidPouringMaterialCreator.CreateMaterial`](/mod/game-api/types/alta-stats-effects/liquidpouringmaterialcreator#m-creatematerial), [`LiquidSurfaceMaterialCreator.CreateMaterial`](/mod/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-creatematerial), [`LiquidSurfaceVisual.SetupMaterialFromLiquidVisualSettings`](/mod/game-api/types/alta-stats-effects/liquidsurfacevisual#m-setupmaterialfromliquidvisualsettings), [`LiquidParticlesRendererColorer.SetParticleRenderersMaterials`](/mod/game-api/types/global-i-l/liquidparticlesrenderercolorer#m-setparticlerenderersmaterials).

</div>
