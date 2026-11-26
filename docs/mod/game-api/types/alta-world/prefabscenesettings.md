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
| <Link id="m-ctor" /><code>{"PrefabSceneSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>27 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btncopy" /><code>{"private bool btnCopy"}</code> | Inspector button that runs `Copy`. |
| <Link id="m-cloudscoloroverday" /><code>{"private Gradient cloudsColorOverDay"}</code> | Backing field for `CloudsColorOverDay`. |
| <Link id="m-debugdayprogress" /><code>{"private float debugDayProgress"}</code> | Editor preview of the time of day, from 0 to 1. |
| <Link id="m-debugmonthprogress" /><code>{"private float debugMonthProgress"}</code> | Editor preview of the month (moon) progress, from 0 to 1. |
| <Link id="m-fogcolorduringday" /><code>{"private Gradient fogColorDuringDay"}</code> | Backing field for `FogColorDuringDay`. |
| <Link id="m-fogdensityduringday" /><code>{"private AnimationCurve fogDensityDuringDay"}</code> | Backing field for `FogDensityDuringDay`. |
| <Link id="m-haloinversesizeoverday" /><code>{"private AnimationCurve haloInverseSizeOverDay"}</code> | Backing field for `HaloInverseSizeOverDay`. |
| <Link id="m-moonambience" /><code>{"private Gradient moonAmbience"}</code> | Backing field for `MoonAmbience`. |
| <Link id="m-moonfadeintime" /><code>{"private float moonFadeInTime"}</code> | Backing field for `MoonFadeInTime` (default 30). |
| <Link id="m-moonlightintensitycurve" /><code>{"private AnimationCurve moonLightIntensityCurve"}</code> | Backing field for `MoonLightIntensityCurve`. |
| <Link id="m-moonspiningaxis" /><code>{"private Vector3 moonSpiningAxis"}</code> | Backing field for `MoonSpiningAxis`. |
| <Link id="m-moontosundotshift" /><code>{"private float moonToSunDotShift"}</code> | Sun height below the horizon where ambient light starts blending from moon to sun ambience. |
| <Link id="m-nighttimeshift" /><code>{"private float nightTimeShift"}</code> | Backing field for `NightTimeShift`. |
| <Link id="m-skybotcolor" /><code>{"private Gradient skyBotcolor"}</code> | Backing field for `SkyBotcolor`. |
| <Link id="m-skyboxmaterial" /><code>{"private Material skyBoxMaterial"}</code> | Backing field for `SkyBoxMaterial`. |
| <Link id="m-skycolorbotbending" /><code>{"private AnimationCurve skyColorBotBending"}</code> | Backing field for `SkyColorBotBending`. |
| <Link id="m-skycolormidpointposition" /><code>{"private AnimationCurve skyColorMidPointPosition"}</code> | Backing field for `SkyColorMidPointPosition`. |
| <Link id="m-skycolortopbending" /><code>{"private AnimationCurve skyColorTopBending"}</code> | Backing field for `SkyColorTopBending`. |
| <Link id="m-skymidcolor" /><code>{"private Gradient skyMidcolor"}</code> | Backing field for `SkyMidcolor`. |
| <Link id="m-skytopcolor" /><code>{"private Gradient skyTopcolor"}</code> | Backing field for `SkyTopcolor`. |
| <Link id="m-sunambience" /><code>{"private Gradient sunAmbience"}</code> | Backing field for `SunAmbience`. |
| <Link id="m-suncolor" /><code>{"private Gradient sunColor"}</code> | Backing field for `SunColor`. |
| <Link id="m-suninversesizeoverday" /><code>{"private AnimationCurve sunInverseSizeOverDay"}</code> | Backing field for `SunInverseSizeOverDay`. |
| <Link id="m-sunlightduringday" /><code>{"private Gradient sunlightDuringDay"}</code> | Backing field for `SunlightDuringDay`. |
| <Link id="m-sunlightintensitycurve" /><code>{"private AnimationCurve sunLightIntensityCurve"}</code> | Backing field for `SunLightIntensityCurve`. |
| <Link id="m-sunspiningaxis" /><code>{"private Vector3 sunSpiningAxis"}</code> | Backing field for `SunSpiningAxis`. |
| <Link id="m-sunupskew" /><code>{"private float sunUpSkew"}</code> | Backing field for `SunUpSkew`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cloudscoloroverday-2" /><code>{"Gradient CloudsColorOverDay { get; }"}</code> | Cloud colour through the day. |
| <Link id="m-debugdayprogress-2" /><code>{"float DebugDayProgress { get; }"}</code> | Editor preview of day progress (0 to 1). |
| <Link id="m-debugmonthprogress-2" /><code>{"float DebugMonthProgress { get; }"}</code> | Editor preview of month progress (0 to 1). |
| <Link id="m-fogcolorduringday-2" /><code>{"Gradient FogColorDuringDay { get; }"}</code> | Fog colour through the day. |
| <Link id="m-fogdensityduringday-2" /><code>{"AnimationCurve FogDensityDuringDay { get; }"}</code> | Fog density through the day. |
| <Link id="m-haloinversesizeoverday-2" /><code>{"AnimationCurve HaloInverseSizeOverDay { get; }"}</code> | Inverse size of the sun halo through the day. |
| <Link id="m-moonambience-2" /><code>{"Gradient MoonAmbience { get; }"}</code> | Ambient colour from the moon. |
| <Link id="m-moonfadeintime-2" /><code>{"float MoonFadeInTime { get; }"}</code> | Time the moon takes to fade in. |
| <Link id="m-moonlightintensitycurve-2" /><code>{"AnimationCurve MoonLightIntensityCurve { get; }"}</code> | Moonlight intensity through the night. |
| <Link id="m-moonspiningaxis-2" /><code>{"Vector3 MoonSpiningAxis { get; }"}</code> | Axis the moon turns around. |
| <Link id="m-moontosundotshift-2" /><code>{"float MoonToSunDotShift { get; }"}</code> | Shift between moon and sun positions, lerped from this value to 0. |
| <Link id="m-nighttimeshift-2" /><code>{"float NightTimeShift { get; }"}</code> | Skybox shift used at night (default -0.004). |
| <Link id="m-skybotcolor-2" /><code>{"Gradient SkyBotcolor { get; }"}</code> | Sky colour near the horizon through the day. |
| <Link id="m-skyboxmaterial-2" /><code>{"Material SkyBoxMaterial { get; }"}</code> | The skybox material these values drive. |
| <Link id="m-skycolorbotbending-2" /><code>{"AnimationCurve SkyColorBotBending { get; }"}</code> | How the lower sky gradient bends through the day. |
| <Link id="m-skycolormidpointposition-2" /><code>{"AnimationCurve SkyColorMidPointPosition { get; }"}</code> | Where the middle sky colour sits through the day. |
| <Link id="m-skycolortopbending-2" /><code>{"AnimationCurve SkyColorTopBending { get; }"}</code> | How the upper sky gradient bends through the day. |
| <Link id="m-skymidcolor-2" /><code>{"Gradient SkyMidcolor { get; }"}</code> | Middle sky colour through the day. |
| <Link id="m-skytopcolor-2" /><code>{"Gradient SkyTopcolor { get; }"}</code> | Sky colour overhead through the day. |
| <Link id="m-sunambience-2" /><code>{"Gradient SunAmbience { get; }"}</code> | Ambient colour from the sun through the day. |
| <Link id="m-suncolor-2" /><code>{"Gradient SunColor { get; }"}</code> | Sun colour through the day. |
| <Link id="m-suninversesizeoverday-2" /><code>{"AnimationCurve SunInverseSizeOverDay { get; }"}</code> | Inverse size of the sun disc through the day. |
| <Link id="m-sunlightduringday-2" /><code>{"Gradient SunlightDuringDay { get; }"}</code> | Sunlight colour through the day. |
| <Link id="m-sunlightintensitycurve-2" /><code>{"AnimationCurve SunLightIntensityCurve { get; }"}</code> | Sunlight intensity through the day. |
| <Link id="m-sunspiningaxis-2" /><code>{"Vector3 SunSpiningAxis { get; }"}</code> | Axis the sun turns around. |
| <Link id="m-sunupskew-2" /><code>{"float SunUpSkew { get; }"}</code> | Degrees added past each horizon to the sun's daytime arc, so the sun is up for more than half the cycle. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copy" /><code>{"void Copy()"}</code> | Editor helper: copies every field with a matching name from the scene's `DayTimeManager` into this asset. |

## Used in

Members of other types that take, return or hold a `PrefabSceneSettings`:

[`PrefabSceneDayTimeManager.settings`](/mod/game-api/types/alta-world/prefabscenedaytimemanager#m-settings).
