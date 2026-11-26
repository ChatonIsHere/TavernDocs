---
title: "PlayerVisionComfortSettings"
description: "Global settings for the movement comfort vignette."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerVisionComfortSettings

A **class** in `Root.Township`, the global namespace.

Global settings for the movement comfort vignette. Get it with `GlobalSettings<PlayerVisionComfortSettings>.Instance`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`GlobalSettings<PlayerVisionComfortSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`PlayerVisionComfortSettings`](/mod/game-api/types/global-p/playervisioncomfortsettings), [`PlayerVisionComfortSettings.Create`](/mod/game-api/types/global-p/playervisioncomfortsettings-create)
- **Nested types** [`Create`](/mod/game-api/types/global-p/playervisioncomfortsettings-create)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerVisionComfortSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-comfortprogresstovignette" /><code>{"private AnimationCurve comfortProgressToVignette"}</code> | Curve from ramp value to vignette amount. |
| <Link id="m-confortincreasespeedlevel" /><code>{"private float[] confortIncreaseSpeedLevel"}</code> | Ramp up multiplier for each `MovementConfortSpeed` value. |
| <Link id="m-confortrampspeed" /><code>{"private float confortRampSpeed"}</code> | Backing field for `ConfortRampSpeed`. |
| <Link id="m-maxconfortintensities" /><code>{"private float[] maxConfortIntensities"}</code> | Vignette strength for each `MovementConfortStrength` value after Disabled. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-confortrampspeed-2" /><code>{"float ConfortRampSpeed { get; }"}</code> | How fast the comfort ramps down after movement stops. Also scales the ramp up speed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcomfortspeed" /><code>{"float GetComfortSpeed("}<Link to="/mod/game-api/types/global-m-o/movementconfortspeed">{"MovementConfortSpeed"}</Link>{" speed)"}</code> | Returns the ramp up speed for a comfort speed setting. |
| <Link id="m-getcurrentconfortintensity" /><code>{"float GetCurrentConfortIntensity(float currentComfort)"}</code> | Maps the comfort ramp value through the vignette curve. |
| <Link id="m-getmaxconfortintensity" /><code>{"float GetMaxConfortIntensity("}<Link to="/mod/game-api/types/global-m-o/movementconfortstrength">{"MovementConfortStrength"}</Link>{" strength)"}</code> | Returns the vignette strength for a comfort strength setting (not for Disabled). |

## Used in

Members of other types that take, return or hold a `PlayerVisionComfortSettings`:

[`PlayerVisionComfort.settings`](/mod/game-api/types/global-p/playervisioncomfort#m-settings).
