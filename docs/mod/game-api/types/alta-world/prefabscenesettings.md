---
title: "PrefabSceneSettings"
description: "Asset with day and night sky, sun, moon and fog curves for a prefab scene, read by PrefabSceneDayTimeManager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PrefabSceneSettings

A **class** in `Root.Township`, `Alta.Environmental.Atmosphere`.

Asset with day and night sky, sun, moon and fog curves for a prefab scene, read by `PrefabSceneDayTimeManager`. `Copy` pulls matching values from the scene's `DayTimeManager`.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`PrefabSceneSettings.Prefab_Scene_Settings`](/mod/game-api/types/alta-world/prefabscenesettings-prefab_scene_settings)
- **Nested types** [`Prefab_Scene_Settings`](/mod/game-api/types/alta-world/prefabscenesettings-prefab_scene_settings)
- **Documented in** [Time and environment](/mod/game-api/world/time-and-environment)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PrefabSceneSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>27 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btncopy" /><code>{"private bool btnCopy"}</code> | <span className="api-desc">Inspector button that runs `Copy`.</span> |
| <Link id="m-cloudscoloroverday" /><code>{"private Gradient cloudsColorOverDay"}</code> | <span className="api-desc">Backing field for `CloudsColorOverDay`.</span> |
| <Link id="m-debugdayprogress" /><code>{"private float debugDayProgress"}</code> | <span className="api-desc">Editor preview of the time of day, from 0 to 1.</span> |
| <Link id="m-debugmonthprogress" /><code>{"private float debugMonthProgress"}</code> | <span className="api-desc">Editor preview of the month (moon) progress, from 0 to 1.</span> |
| <Link id="m-fogcolorduringday" /><code>{"private Gradient fogColorDuringDay"}</code> | <span className="api-desc">Backing field for `FogColorDuringDay`.</span> |
| <Link id="m-fogdensityduringday" /><code>{"private AnimationCurve fogDensityDuringDay"}</code> | <span className="api-desc">Backing field for `FogDensityDuringDay`.</span> |
| <Link id="m-haloinversesizeoverday" /><code>{"private AnimationCurve haloInverseSizeOverDay"}</code> | <span className="api-desc">Backing field for `HaloInverseSizeOverDay`.</span> |
| <Link id="m-moonambience" /><code>{"private Gradient moonAmbience"}</code> | <span className="api-desc">Backing field for `MoonAmbience`.</span> |
| <Link id="m-moonfadeintime" /><code>{"private float moonFadeInTime"}</code> | <span className="api-desc">Backing field for `MoonFadeInTime` (default 30).</span> |
| <Link id="m-moonlightintensitycurve" /><code>{"private AnimationCurve moonLightIntensityCurve"}</code> | <span className="api-desc">Backing field for `MoonLightIntensityCurve`.</span> |
| <Link id="m-moonspiningaxis" /><code>{"private Vector3 moonSpiningAxis"}</code> | <span className="api-desc">Backing field for `MoonSpiningAxis`.</span> |
| <Link id="m-moontosundotshift" /><code>{"private float moonToSunDotShift"}</code> | <span className="api-desc">Sun height below the horizon where ambient light starts blending from moon to sun ambience.</span> |
| <Link id="m-nighttimeshift" /><code>{"private float nightTimeShift"}</code> | <span className="api-desc">Backing field for `NightTimeShift`.</span> |
| <Link id="m-skybotcolor" /><code>{"private Gradient skyBotcolor"}</code> | <span className="api-desc">Backing field for `SkyBotcolor`.</span> |
| <Link id="m-skyboxmaterial" /><code>{"private Material skyBoxMaterial"}</code> | <span className="api-desc">Backing field for `SkyBoxMaterial`.</span> |
| <Link id="m-skycolorbotbending" /><code>{"private AnimationCurve skyColorBotBending"}</code> | <span className="api-desc">Backing field for `SkyColorBotBending`.</span> |
| <Link id="m-skycolormidpointposition" /><code>{"private AnimationCurve skyColorMidPointPosition"}</code> | <span className="api-desc">Backing field for `SkyColorMidPointPosition`.</span> |
| <Link id="m-skycolortopbending" /><code>{"private AnimationCurve skyColorTopBending"}</code> | <span className="api-desc">Backing field for `SkyColorTopBending`.</span> |
| <Link id="m-skymidcolor" /><code>{"private Gradient skyMidcolor"}</code> | <span className="api-desc">Backing field for `SkyMidcolor`.</span> |
| <Link id="m-skytopcolor" /><code>{"private Gradient skyTopcolor"}</code> | <span className="api-desc">Backing field for `SkyTopcolor`.</span> |
| <Link id="m-sunambience" /><code>{"private Gradient sunAmbience"}</code> | <span className="api-desc">Backing field for `SunAmbience`.</span> |
| <Link id="m-suncolor" /><code>{"private Gradient sunColor"}</code> | <span className="api-desc">Backing field for `SunColor`.</span> |
| <Link id="m-suninversesizeoverday" /><code>{"private AnimationCurve sunInverseSizeOverDay"}</code> | <span className="api-desc">Backing field for `SunInverseSizeOverDay`.</span> |
| <Link id="m-sunlightduringday" /><code>{"private Gradient sunlightDuringDay"}</code> | <span className="api-desc">Backing field for `SunlightDuringDay`.</span> |
| <Link id="m-sunlightintensitycurve" /><code>{"private AnimationCurve sunLightIntensityCurve"}</code> | <span className="api-desc">Backing field for `SunLightIntensityCurve`.</span> |
| <Link id="m-sunspiningaxis" /><code>{"private Vector3 sunSpiningAxis"}</code> | <span className="api-desc">Backing field for `SunSpiningAxis`.</span> |
| <Link id="m-sunupskew" /><code>{"private float sunUpSkew"}</code> | <span className="api-desc">Backing field for `SunUpSkew`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cloudscoloroverday-2" /><code>{"Gradient CloudsColorOverDay { get; }"}</code> | <span className="api-desc">Cloud colour through the day.</span> |
| <Link id="m-debugdayprogress-2" /><code>{"float DebugDayProgress { get; }"}</code> | <span className="api-desc">Editor preview of day progress (0 to 1).</span> |
| <Link id="m-debugmonthprogress-2" /><code>{"float DebugMonthProgress { get; }"}</code> | <span className="api-desc">Editor preview of month progress (0 to 1).</span> |
| <Link id="m-fogcolorduringday-2" /><code>{"Gradient FogColorDuringDay { get; }"}</code> | <span className="api-desc">Fog colour through the day.</span> |
| <Link id="m-fogdensityduringday-2" /><code>{"AnimationCurve FogDensityDuringDay { get; }"}</code> | <span className="api-desc">Fog density through the day.</span> |
| <Link id="m-haloinversesizeoverday-2" /><code>{"AnimationCurve HaloInverseSizeOverDay { get; }"}</code> | <span className="api-desc">Inverse size of the sun halo through the day.</span> |
| <Link id="m-moonambience-2" /><code>{"Gradient MoonAmbience { get; }"}</code> | <span className="api-desc">Ambient colour from the moon.</span> |
| <Link id="m-moonfadeintime-2" /><code>{"float MoonFadeInTime { get; }"}</code> | <span className="api-desc">Time the moon takes to fade in.</span> |
| <Link id="m-moonlightintensitycurve-2" /><code>{"AnimationCurve MoonLightIntensityCurve { get; }"}</code> | <span className="api-desc">Moonlight intensity through the night.</span> |
| <Link id="m-moonspiningaxis-2" /><code>{"Vector3 MoonSpiningAxis { get; }"}</code> | <span className="api-desc">Axis the moon turns around.</span> |
| <Link id="m-moontosundotshift-2" /><code>{"float MoonToSunDotShift { get; }"}</code> | <span className="api-desc">Shift between moon and sun positions, lerped from this value to 0.</span> |
| <Link id="m-nighttimeshift-2" /><code>{"float NightTimeShift { get; }"}</code> | <span className="api-desc">Skybox shift used at night (default -0.004).</span> |
| <Link id="m-skybotcolor-2" /><code>{"Gradient SkyBotcolor { get; }"}</code> | <span className="api-desc">Sky colour near the horizon through the day.</span> |
| <Link id="m-skyboxmaterial-2" /><code>{"Material SkyBoxMaterial { get; }"}</code> | <span className="api-desc">The skybox material these values drive.</span> |
| <Link id="m-skycolorbotbending-2" /><code>{"AnimationCurve SkyColorBotBending { get; }"}</code> | <span className="api-desc">How the lower sky gradient bends through the day.</span> |
| <Link id="m-skycolormidpointposition-2" /><code>{"AnimationCurve SkyColorMidPointPosition { get; }"}</code> | <span className="api-desc">Where the middle sky colour sits through the day.</span> |
| <Link id="m-skycolortopbending-2" /><code>{"AnimationCurve SkyColorTopBending { get; }"}</code> | <span className="api-desc">How the upper sky gradient bends through the day.</span> |
| <Link id="m-skymidcolor-2" /><code>{"Gradient SkyMidcolor { get; }"}</code> | <span className="api-desc">Middle sky colour through the day.</span> |
| <Link id="m-skytopcolor-2" /><code>{"Gradient SkyTopcolor { get; }"}</code> | <span className="api-desc">Sky colour overhead through the day.</span> |
| <Link id="m-sunambience-2" /><code>{"Gradient SunAmbience { get; }"}</code> | <span className="api-desc">Ambient colour from the sun through the day.</span> |
| <Link id="m-suncolor-2" /><code>{"Gradient SunColor { get; }"}</code> | <span className="api-desc">Sun colour through the day.</span> |
| <Link id="m-suninversesizeoverday-2" /><code>{"AnimationCurve SunInverseSizeOverDay { get; }"}</code> | <span className="api-desc">Inverse size of the sun disc through the day.</span> |
| <Link id="m-sunlightduringday-2" /><code>{"Gradient SunlightDuringDay { get; }"}</code> | <span className="api-desc">Sunlight colour through the day.</span> |
| <Link id="m-sunlightintensitycurve-2" /><code>{"AnimationCurve SunLightIntensityCurve { get; }"}</code> | <span className="api-desc">Sunlight intensity through the day.</span> |
| <Link id="m-sunspiningaxis-2" /><code>{"Vector3 SunSpiningAxis { get; }"}</code> | <span className="api-desc">Axis the sun turns around.</span> |
| <Link id="m-sunupskew-2" /><code>{"float SunUpSkew { get; }"}</code> | <span className="api-desc">Degrees added past each horizon to the sun's daytime arc, so the sun is up for more than half the cycle.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copy" /><code>{"void Copy()"}</code> | <span className="api-desc">Editor helper: copies every field with a matching name from the scene's `DayTimeManager` into this asset.</span> |

## Used in

Members of other types that take, return or hold a `PrefabSceneSettings`:

<div className="api-used-in">

[`PrefabSceneDayTimeManager.settings`](/mod/game-api/types/alta-world/prefabscenedaytimemanager#m-settings).

</div>
