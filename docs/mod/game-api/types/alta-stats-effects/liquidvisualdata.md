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
| <Link id="m-ctor" /><code>{"LiquidVisualData()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maxthickness" /><code>{"const int MaxThickness"}</code> | Constant 100, the top of the `Thickness` range. |

<details>
<summary>24 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidliquidcolor" /><code>{"private Color androidLiquidColor"}</code> | Liquid colour used on Android. |
| <Link id="m-depth" /><code>{"private float depth"}</code> | Backing field for `Depth`, the shader's liquid depth value. |
| <Link id="m-fresnelcolor" /><code>{"private Color fresnelColor"}</code> | Backing field for `FresnelColor`, the edge glow colour. |
| <Link id="m-fresnelexponent" /><code>{"private float fresnelExponent"}</code> | Backing field for `FresnelExponent`, how tight the edge glow is. |
| <Link id="m-glossiness" /><code>{"private float glossiness"}</code> | Backing field for `Glossiness`. |
| <Link id="m-liquidcolor" /><code>{"private Color liquidColor"}</code> | Backing field for `LiquidColor`, the main liquid colour. |
| <Link id="m-liquiddepthcolor" /><code>{"private Color liquidDepthColor"}</code> | Backing field for `LiquidDepthColor`, the colour deeper in the liquid. |
| <Link id="m-refractionamount" /><code>{"private float refractionAmount"}</code> | Backing field for `RefractionAmount`. |
| <Link id="m-rimcolor" /><code>{"private Color rimColor"}</code> | Backing field for `RimColor`, the colour of the rim where the liquid meets the container. |
| <Link id="m-rimfalloff" /><code>{"private float rimFalloff"}</code> | Backing field for `RimFalloff`. |
| <Link id="m-rimsize" /><code>{"private float rimSize"}</code> | Backing field for `RimSize`. |
| <Link id="m-rimtiling" /><code>{"private float rimTiling"}</code> | Backing field for `RimTiling`. |
| <Link id="m-sharedmaterials" /><code>{"private Dictionary<Material, Material> sharedMaterials"}</code> | Materials made from these settings, one per template material, reused by `GetSharedMaterial`. |
| <Link id="m-surfacehighlight" /><code>{"private float surfaceHighlight"}</code> | Backing field for `SurfaceHighlight`. |
| <Link id="m-surfacehighlightcolor" /><code>{"private Color surfaceHighlightColor"}</code> | Backing field for `SurfaceHighlightColor`. |
| <Link id="m-surfacehighlightsize" /><code>{"private float surfaceHighlightSize"}</code> | Backing field for `SurfaceHighlightSize`. |
| <Link id="m-surfacehighlighttiling" /><code>{"private float surfaceHighlightTiling"}</code> | Backing field for `SurfaceHighlightTiling`. |
| <Link id="m-thickness" /><code>{"private int thickness"}</code> | Backing field for `Thickness` (1 by default, up to `MaxThickness` of 100). |
| <Link id="m-tiling" /><code>{"private float tiling"}</code> | Backing field for `Tiling`. |
| <Link id="m-transparency" /><code>{"private float transparency"}</code> | Backing field for `Transparency`. |
| <Link id="m-wavespeed" /><code>{"private float waveSpeed"}</code> | Backing field for `WaveSpeed`, the surface wave speed at rest. |
| <Link id="m-wavespeedbytemperature" /><code>{"private AnimationCurve waveSpeedByTemperature"}</code> | Backing field for `WaveSpeedByTemperature`, the curve used for boiling. |
| <Link id="m-wavestrength" /><code>{"private float waveStrength"}</code> | Backing field for `WaveStrength`, the surface wave strength at rest. |
| <Link id="m-wavestrengthbytemperature" /><code>{"private AnimationCurve waveStrengthByTemperature"}</code> | Backing field for `WaveStrengthByTemperature`, the curve used for boiling. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-depth-2" /><code>{"float Depth { get; }"}</code> | Shader depth value for the liquid. |
| <Link id="m-fresnelcolor-2" /><code>{"Color FresnelColor { get; }"}</code> | Colour of the fresnel edge glow. |
| <Link id="m-fresnelexponent-2" /><code>{"float FresnelExponent { get; }"}</code> | Sharpness of the fresnel effect. |
| <Link id="m-glossiness-2" /><code>{"float Glossiness { get; }"}</code> | Surface glossiness. |
| <Link id="m-liquidcolor-2" /><code>{"Color LiquidColor { get; }"}</code> | Main colour of the liquid. |
| <Link id="m-liquiddepthcolor-2" /><code>{"Color LiquidDepthColor { get; }"}</code> | Colour used deeper in the liquid. |
| <Link id="m-refractionamount-2" /><code>{"float RefractionAmount { get; }"}</code> | How much the liquid distorts what is behind it. |
| <Link id="m-rimcolor-2" /><code>{"Color RimColor { get; }"}</code> | Colour of the rim where the liquid meets the container. |
| <Link id="m-rimfalloff-2" /><code>{"float RimFalloff { get; }"}</code> | How quickly the rim colour fades. |
| <Link id="m-rimsize-2" /><code>{"float RimSize { get; }"}</code> | Width of the rim. |
| <Link id="m-rimtiling-2" /><code>{"float RimTiling { get; }"}</code> | Texture tiling of the rim. |
| <Link id="m-surfacehighlight-2" /><code>{"float SurfaceHighlight { get; }"}</code> | Strength of the surface highlight. |
| <Link id="m-surfacehighlightcolor-2" /><code>{"Color SurfaceHighlightColor { get; }"}</code> | Colour of the surface highlight. |
| <Link id="m-surfacehighlightsize-2" /><code>{"float SurfaceHighlightSize { get; }"}</code> | Size of the surface highlight. |
| <Link id="m-surfacehighlighttiling-2" /><code>{"float SurfaceHighlightTiling { get; }"}</code> | Texture tiling of the surface highlight. |
| <Link id="m-thickness-2" /><code>{"int Thickness { get; }"}</code> | How thick the liquid is, passed to the liquid gravity effect when pouring and sloshing (default 1). |
| <Link id="m-tiling-2" /><code>{"float Tiling { get; }"}</code> | Main texture tiling. |
| <Link id="m-transparency-2" /><code>{"float Transparency { get; }"}</code> | How see-through the liquid is. |
| <Link id="m-wavespeed-2" /><code>{"float WaveSpeed { get; }"}</code> | Speed of surface waves. |
| <Link id="m-wavespeedbytemperature-2" /><code>{"AnimationCurve WaveSpeedByTemperature { get; }"}</code> | Wave speed by temperature, for boiling. |
| <Link id="m-wavestrength-2" /><code>{"float WaveStrength { get; }"}</code> | Height of surface waves. |
| <Link id="m-wavestrengthbytemperature-2" /><code>{"AnimationCurve WaveStrengthByTemperature { get; }"}</code> | Wave strength by temperature, for boiling. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getsharedmaterial" /><code>{"Material GetSharedMaterial(Material materialTemplate, Func<"}<Link to="/mod/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{", Material, Material> createNewMaterialFromSettings)"}</code> | Returns one shared material per template for this liquid, creating it on first use with the given function. Logs an error on clients if the template is null. |

## Used in

Members of other types that take, return or hold a `LiquidVisualData`:

[`CookingLiquidVisual.SetupMaterialFromLiquidVisualSettings`](/mod/game-api/types/alta-crafting/cookingliquidvisual#m-setupmaterialfromliquidvisualsettings), [`StewComponent.liquidVisualData`](/mod/game-api/types/alta-crafting/stewcomponent#m-liquidvisualdata), [`StewComponent.LiquidVisualData`](/mod/game-api/types/alta-crafting/stewcomponent#m-liquidvisualdata-2), [`BoilingParticlesMaterialCreator.CreateMaterial`](/mod/game-api/types/alta-stats-effects/boilingparticlesmaterialcreator#m-creatematerial), [`BottledLiquid.SetupMaterialFromLiquidVisualSettings`](/mod/game-api/types/alta-stats-effects/bottledliquid#m-setupmaterialfromliquidvisualsettings), [`BottleLiquidMaterialCreator.CreateMaterial`](/mod/game-api/types/alta-stats-effects/bottleliquidmaterialcreator#m-creatematerial), [`LiquidContainerSaveData.CustomData.liquidVisualData`](/mod/game-api/types/alta-stats-effects/liquidcontainersavedata-customdata#m-liquidvisualdata), [`LiquidData.LiquidData`](/mod/game-api/types/alta-stats-effects/liquiddata#m-ctor), [`LiquidData.liquidVisual`](/mod/game-api/types/alta-stats-effects/liquiddata#m-liquidvisual), [`LiquidData.LiquidVisual`](/mod/game-api/types/alta-stats-effects/liquiddata#m-liquidvisual-2), [`LiquidFoamMaterialCreator.CreateMaterial`](/mod/game-api/types/alta-stats-effects/liquidfoammaterialcreator#m-creatematerial), [`LiquidPouringMaterialCreator.CreateMaterial`](/mod/game-api/types/alta-stats-effects/liquidpouringmaterialcreator#m-creatematerial), [`LiquidSurfaceMaterialCreator.CreateMaterial`](/mod/game-api/types/alta-stats-effects/liquidsurfacematerialcreator#m-creatematerial), [`LiquidSurfaceVisual.SetupMaterialFromLiquidVisualSettings`](/mod/game-api/types/alta-stats-effects/liquidsurfacevisual#m-setupmaterialfromliquidvisualsettings), [`LiquidParticlesRendererColorer.SetParticleRenderersMaterials`](/mod/game-api/types/global-i-l/liquidparticlesrenderercolorer#m-setparticlerenderersmaterials).
