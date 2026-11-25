---
title: "PlayerVisionComfortSettings"
description: "class PlayerVisionComfortSettings in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerVisionComfortSettings

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`GlobalSettings<PlayerVisionComfortSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`PlayerVisionComfortSettings`](/game-api/types/global-p/playervisioncomfortsettings), [`PlayerVisionComfortSettings.Create`](/game-api/types/global-p/playervisioncomfortsettings-create)
- **Nested types** [`Create`](/game-api/types/global-p/playervisioncomfortsettings-create)
- **Attributes** `GlobalSettings`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerVisionComfortSettings()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-comfortprogresstovignette" /><code>{"private AnimationCurve comfortProgressToVignette"}</code> |
| <Link id="m-confortincreasespeedlevel" /><code>{"private float[] confortIncreaseSpeedLevel"}</code> |
| <Link id="m-confortrampspeed" /><code>{"private float confortRampSpeed"}</code> |
| <Link id="m-maxconfortintensities" /><code>{"private float[] maxConfortIntensities"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-confortrampspeed-2" /><code>{"float ConfortRampSpeed { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-getcomfortspeed" /><code>{"float GetComfortSpeed("}<Link to="/game-api/types/global-m-o/movementconfortspeed">{"MovementConfortSpeed"}</Link>{" speed)"}</code> |
| <Link id="m-getcurrentconfortintensity" /><code>{"float GetCurrentConfortIntensity(float currentComfort)"}</code> |
| <Link id="m-getmaxconfortintensity" /><code>{"float GetMaxConfortIntensity("}<Link to="/game-api/types/global-m-o/movementconfortstrength">{"MovementConfortStrength"}</Link>{" strength)"}</code> |

## Used in

Members of other types that take, return or hold a `PlayerVisionComfortSettings`:

[`PlayerVisionComfort.settings`](/game-api/types/global-p/playervisioncomfort#m-settings).
