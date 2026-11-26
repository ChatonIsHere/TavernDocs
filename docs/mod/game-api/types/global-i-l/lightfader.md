---
title: "LightFader"
description: "Fades a PlatformLight on and off along curves when IsLit changes, with an extra intensity multiplier."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LightFader

A **class** in `Root.Township`, the global namespace.

Fades a `PlatformLight` on and off along curves when `IsLit` changes, with an extra intensity multiplier. A component next to the light.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LightFader()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-baseintensity" /><code>{"private float baseIntensity"}</code> | <span className="api-desc">The light's intensity at start, the 1.0 point of the curves.</span> |
| <Link id="m-currentunmultipliedintensity" /><code>{"private float currentUnmultipliedIntensity"}</code> | <span className="api-desc">Current faded intensity before `Multiplier`.</span> |
| <Link id="m-islit" /><code>{"private bool isLit"}</code> | <span className="api-desc">Backing field for `IsLit`.</span> |
| <Link id="m-lightendmultiplier" /><code>{"private AnimationCurve lightEndMultiplier"}</code> | <span className="api-desc">Curve used when fading out.</span> |
| <Link id="m-lightstartmultiplier" /><code>{"private AnimationCurve lightStartMultiplier"}</code> | <span className="api-desc">Curve used when fading in.</span> |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> | <span className="api-desc">Backing field for `Multiplier`.</span> |
| <Link id="m-target" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" target"}</code> | <span className="api-desc">The light being faded.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-islit-2" /><code>{"bool IsLit { get; set; }"}</code> | <span className="api-desc">Turns the light on or off with a fade.</span> |
| <Link id="m-multiplier-2" /><code>{"float Multiplier { get; set; }"}</code> | <span className="api-desc">Extra intensity multiplier applied on top of the fade.</span> |

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Reads the light's base intensity, turns the light off, and starts fading in if `isLit` is set.</span> |
| <Link id="m-fadelight" /><code>{"private IEnumerator FadeLight() (iterator)"}</code> | <span className="api-desc">Coroutine that plays the start or end curve from the point closest to the current intensity.</span> |
| <Link id="m-findclosesttime" /><code>{"private float FindClosestTime(AnimationCurve curve, float value, int steps)"}</code> | <span className="api-desc">Samples a curve to find the time whose value is nearest the given one.</span> |

</details>

## Used in

Members of other types that take, return or hold a `LightFader`:

<div className="api-used-in">

[`Bellows.lightFader`](/mod/game-api/types/global-a-b/bellows#m-lightfader), [`QuestCompleteEffect.lightFader`](/mod/game-api/types/global-q-r/questcompleteeffect#m-lightfader), [`TemperatureVisuals.lightFaders`](/mod/game-api/types/global-t-x/temperaturevisuals#m-lightfaders).

</div>
