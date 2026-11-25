---
title: "LerpingFloatValue"
description: "class LerpingFloatValue in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LerpingFloatValue

A **class** in `Root.Township`, `Alta.Utilities`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LerpingFloatValue(Action<float> setValue)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"private float current"}</code> |  |
| <Link id="m-gettarget" /><code>{"private Func<float> getTarget"}</code> |  |
| <Link id="m-initial" /><code>{"private float initial"}</code> |  |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> |  |
| <Link id="m-progress" /><code>{"private float progress"}</code> |  |
| <Link id="m-setvalue" /><code>{"private Action<float> setValue"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-current-2" /><code>{"float Current { get; }"}</code> |  |
| <Link id="m-islerping" /><code>{"bool IsLerping { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-finishedlerp" /><code>{"event Action FinishedLerp"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-kill" /><code>{"void Kill()"}</code> |  |
| <Link id="m-lerp-2" /><code>{"void Lerp(float target, float lerpSpeed)"}</code> |  |
| <Link id="m-lerp-3" /><code>{"void Lerp(Func<float> getTarget)"}</code> |  |
| <Link id="m-snap" /><code>{"void Snap(float newTarget)"}</code> |  |
| <Link id="m-snapifnotlerping" /><code>{"void SnapIfNotLerping(float newTarget)"}</code> |  |
| <Link id="m-update" /><code>{"void Update()"}</code> |  |
| <Link id="m-lerp" /><code>{"protected float Lerp(float initial, float target, float progress)"}</code> |  |

## Used in

Members of other types that take, return or hold a `LerpingFloatValue`:

[`AtmosphereManager.AmbienceAudio`](/game-api/types/alta-world/atmospheremanager#m-ambienceaudio), [`DayTimeManager.LightIntensityModifier`](/game-api/types/alta-world/daytimemanager#m-lightintensitymodifier), [`DayTimeManager.skyColorFade`](/game-api/types/alta-world/daytimemanager#m-skycolorfade), [`ScaleLerpPooledObject.scale`](/game-api/types/global-s/scalelerppooledobject#m-scale).
