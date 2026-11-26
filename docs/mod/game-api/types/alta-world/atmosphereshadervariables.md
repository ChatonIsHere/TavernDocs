---
title: "AtmosphereShaderVariables"
description: "Internal cache of shader property IDs for the sky, sun, moon, fog and clouds, used by the atmosphere and wind managers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AtmosphereShaderVariables

A **internal static class** in `Root.Township`, `Alta.Environmental.Atmosphere`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal cache of shader property IDs for the sky, sun, moon, fog and clouds, used by the atmosphere and wind managers.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)

## Fields

<details>
<summary>23 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidmooncolortint" /><code>{"internal static readonly int _androidMoonColorTint"}</code> | ID of `_ColorTint`, the moon tint on Android. |
| <Link id="m-cloudscolor" /><code>{"internal static readonly int _cloudsColor"}</code> | ID of `_CloudColor`. |
| <Link id="m-cloudsrotationcos" /><code>{"internal static readonly int _CloudsRotationCos"}</code> | ID of `_CloudsRotationCos`, set by the wind managers. |
| <Link id="m-cloudsrotationsin" /><code>{"internal static readonly int _CloudsRotationSin"}</code> | ID of `_CloudsRotationSin`, set by the wind managers. |
| <Link id="m-dotsunmoon" /><code>{"internal static readonly int _dotSunMoon"}</code> | ID of `_DotSunMoon`. |
| <Link id="m-fogcolor" /><code>{"internal static readonly int _fogColor"}</code> | ID of `_CustomFogColor`. |
| <Link id="m-fogdensity" /><code>{"internal static readonly int _fogDensity"}</code> | ID of `_FogDensity`. |
| <Link id="m-halosize" /><code>{"internal static readonly int _haloSize"}</code> | ID of `_HaloSize`. |
| <Link id="m-isenabled" /><code>{"internal static readonly int _isEnabled"}</code> | ID of `_IsSkyBoxEnabled`. |
| <Link id="m-moonrightvector" /><code>{"internal static readonly int _moonRightVector"}</code> | ID of `_MoonRightVector`. |
| <Link id="m-moonupvector" /><code>{"internal static readonly int _moonUpVector"}</code> | ID of `_MoonUpVector`. |
| <Link id="m-moonvector" /><code>{"internal static readonly int _moonVector"}</code> | ID of `_MoonVector`. |
| <Link id="m-nighttimeshift" /><code>{"internal static readonly int _nightTimeShift"}</code> | ID of `_ShiftDirection`. |
| <Link id="m-skycolor" /><code>{"internal static readonly int _skyColor"}</code> | ID of `_SkyColor`. |
| <Link id="m-skycolorbot" /><code>{"internal static readonly int _skyColorBot"}</code> | ID of `_ColorBot`. |
| <Link id="m-skycolordisablefade" /><code>{"internal static readonly int _SkyColorDisableFade"}</code> | ID of `_Fade`. |
| <Link id="m-skycolormid" /><code>{"internal static readonly int _skyColorMid"}</code> | ID of `_ColorMid`. |
| <Link id="m-skycolorpoint" /><code>{"internal static readonly int _skyColorPoint"}</code> | ID of `_SkyColorPoint`. |
| <Link id="m-skycolortop" /><code>{"internal static readonly int _skyColorTop"}</code> | ID of `_ColorTop`. |
| <Link id="m-suncolor" /><code>{"internal static readonly int _sunColor"}</code> | ID of `_SunColor`. |
| <Link id="m-suninthesky" /><code>{"internal static readonly int _sunInTheSky"}</code> | ID of `_SunPositionInTheSky`. |
| <Link id="m-suninversesize" /><code>{"internal static readonly int _sunInverseSize"}</code> | ID of `_SunDistance`. |
| <Link id="m-sunvector" /><code>{"internal static readonly int _sunVector"}</code> | ID of `_SunVector`. |

</details>
