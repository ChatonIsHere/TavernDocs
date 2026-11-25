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

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`PrefabSceneSettings.Prefab_Scene_Settings`](/game-api/types/alta-world/prefabscenesettings-prefab_scene_settings)
- **Nested types** [`Prefab_Scene_Settings`](/game-api/types/alta-world/prefabscenesettings-prefab_scene_settings)
- **Documented in** [Time and environment](/game-api/world/time-and-environment)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PrefabSceneSettings()"}</code> |

## Fields

<details>
<summary>27 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-btncopy" /><code>{"private bool btnCopy"}</code> |
| <Link id="m-cloudscoloroverday" /><code>{"private Gradient cloudsColorOverDay"}</code> |
| <Link id="m-debugdayprogress" /><code>{"private float debugDayProgress"}</code> |
| <Link id="m-debugmonthprogress" /><code>{"private float debugMonthProgress"}</code> |
| <Link id="m-fogcolorduringday" /><code>{"private Gradient fogColorDuringDay"}</code> |
| <Link id="m-fogdensityduringday" /><code>{"private AnimationCurve fogDensityDuringDay"}</code> |
| <Link id="m-haloinversesizeoverday" /><code>{"private AnimationCurve haloInverseSizeOverDay"}</code> |
| <Link id="m-moonambience" /><code>{"private Gradient moonAmbience"}</code> |
| <Link id="m-moonfadeintime" /><code>{"private float moonFadeInTime"}</code> |
| <Link id="m-moonlightintensitycurve" /><code>{"private AnimationCurve moonLightIntensityCurve"}</code> |
| <Link id="m-moonspiningaxis" /><code>{"private Vector3 moonSpiningAxis"}</code> |
| <Link id="m-moontosundotshift" /><code>{"private float moonToSunDotShift"}</code> |
| <Link id="m-nighttimeshift" /><code>{"private float nightTimeShift"}</code> |
| <Link id="m-skybotcolor" /><code>{"private Gradient skyBotcolor"}</code> |
| <Link id="m-skyboxmaterial" /><code>{"private Material skyBoxMaterial"}</code> |
| <Link id="m-skycolorbotbending" /><code>{"private AnimationCurve skyColorBotBending"}</code> |
| <Link id="m-skycolormidpointposition" /><code>{"private AnimationCurve skyColorMidPointPosition"}</code> |
| <Link id="m-skycolortopbending" /><code>{"private AnimationCurve skyColorTopBending"}</code> |
| <Link id="m-skymidcolor" /><code>{"private Gradient skyMidcolor"}</code> |
| <Link id="m-skytopcolor" /><code>{"private Gradient skyTopcolor"}</code> |
| <Link id="m-sunambience" /><code>{"private Gradient sunAmbience"}</code> |
| <Link id="m-suncolor" /><code>{"private Gradient sunColor"}</code> |
| <Link id="m-suninversesizeoverday" /><code>{"private AnimationCurve sunInverseSizeOverDay"}</code> |
| <Link id="m-sunlightduringday" /><code>{"private Gradient sunlightDuringDay"}</code> |
| <Link id="m-sunlightintensitycurve" /><code>{"private AnimationCurve sunLightIntensityCurve"}</code> |
| <Link id="m-sunspiningaxis" /><code>{"private Vector3 sunSpiningAxis"}</code> |
| <Link id="m-sunupskew" /><code>{"private float sunUpSkew"}</code> |

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
| <Link id="m-nighttimeshift-2" /><code>{"float NightTimeShift { get; }"}</code> |  |
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
| <Link id="m-sunupskew-2" /><code>{"float SunUpSkew { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copy" /><code>{"void Copy()"}</code> | Editor helper: copies every field with a matching name from the scene's `DayTimeManager` into this asset. |

## Used in

Members of other types that take, return or hold a `PrefabSceneSettings`:

[`PrefabSceneDayTimeManager.settings`](/game-api/types/alta-world/prefabscenedaytimemanager#m-settings).
