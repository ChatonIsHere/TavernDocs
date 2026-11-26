---
title: "LightFader"
description: "Fades a PlatformLight on and off along curves when IsLit changes, with an extra intensity multiplier."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LightFader

A **class** in `Root.Township`, no namespace.

Fades a `PlatformLight` on and off along curves when `IsLit` changes, with an extra intensity multiplier. A component next to the light.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LightFader()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-baseintensity" /><code>{"private float baseIntensity"}</code> | The light's intensity at start, the 1.0 point of the curves. |
| <Link id="m-currentunmultipliedintensity" /><code>{"private float currentUnmultipliedIntensity"}</code> | Current faded intensity before `Multiplier`. |
| <Link id="m-islit" /><code>{"private bool isLit"}</code> | Backing field for `IsLit`. |
| <Link id="m-lightendmultiplier" /><code>{"private AnimationCurve lightEndMultiplier"}</code> | Curve used when fading out. |
| <Link id="m-lightstartmultiplier" /><code>{"private AnimationCurve lightStartMultiplier"}</code> | Curve used when fading in. |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> | Backing field for `Multiplier`. |
| <Link id="m-target" /><code>{"private "}<Link to="/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" target"}</code> | The light being faded. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-islit-2" /><code>{"bool IsLit { get; set; }"}</code> | Turns the light on or off with a fade. |
| <Link id="m-multiplier-2" /><code>{"float Multiplier { get; set; }"}</code> | Extra intensity multiplier applied on top of the fade. |

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Reads the light's base intensity, turns the light off, and starts fading in if `isLit` is set. |
| <Link id="m-fadelight" /><code>{"private IEnumerator FadeLight() (iterator)"}</code> | Coroutine that plays the start or end curve from the point closest to the current intensity. |
| <Link id="m-findclosesttime" /><code>{"private float FindClosestTime(AnimationCurve curve, float value, int steps)"}</code> | Samples a curve to find the time whose value is nearest the given one. |

</details>

## Used in

Members of other types that take, return or hold a `LightFader`:

[`Bellows.lightFader`](/game-api/types/global-a-b/bellows#m-lightfader), [`QuestCompleteEffect.lightFader`](/game-api/types/global-q-r/questcompleteeffect#m-lightfader), [`TemperatureVisuals.lightFaders`](/game-api/types/global-t-x/temperaturevisuals#m-lightfaders).
