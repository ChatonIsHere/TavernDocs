---
title: "LightFader"
description: "class LightFader in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LightFader

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LightFader()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-baseintensity" /><code>{"private float baseIntensity"}</code> |  |
| <Link id="m-currentunmultipliedintensity" /><code>{"private float currentUnmultipliedIntensity"}</code> |  |
| <Link id="m-islit" /><code>{"private bool isLit"}</code> |  |
| <Link id="m-lightendmultiplier" /><code>{"private AnimationCurve lightEndMultiplier"}</code> |  |
| <Link id="m-lightstartmultiplier" /><code>{"private AnimationCurve lightStartMultiplier"}</code> |  |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> |  |
| <Link id="m-target" /><code>{"private "}<Link to="/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" target"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-islit-2" /><code>{"bool IsLit { get; set; }"}</code> |  |
| <Link id="m-multiplier-2" /><code>{"float Multiplier { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-fadelight" /><code>{"private IEnumerator FadeLight() (iterator)"}</code> |  |
| <Link id="m-findclosesttime" /><code>{"private float FindClosestTime(AnimationCurve curve, float value, int steps)"}</code> |  |

## Used in

Members of other types that take, return or hold a `LightFader`:

[`Bellows.lightFader`](/game-api/types/global-a-b/bellows#m-lightfader), [`QuestCompleteEffect.lightFader`](/game-api/types/global-q-r/questcompleteeffect#m-lightfader), [`TemperatureVisuals.lightFaders`](/game-api/types/global-t-x/temperaturevisuals#m-lightfaders).
