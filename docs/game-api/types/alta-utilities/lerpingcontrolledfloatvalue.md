---
title: "LerpingControlledFloatValue"
description: "class LerpingControlledFloatValue in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LerpingControlledFloatValue

A **class** in `Root.Township`, `Alta.Utilities`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LerpingControlledFloatValue(Action<float> setValue)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-control" /><code>{"private float control"}</code> |  |
| <Link id="m-gettarget" /><code>{"private Func<float> getTarget"}</code> |  |
| <Link id="m-initial" /><code>{"private float initial"}</code> |  |
| <Link id="m-iscontrolled" /><code>{"private bool isControlled"}</code> |  |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> |  |
| <Link id="m-progress" /><code>{"private float progress"}</code> |  |
| <Link id="m-setvalue" /><code>{"private Action<float> setValue"}</code> |  |
| <Link id="m-snapvalue" /><code>{"private float snapValue"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"float Current { get; private set; }"}</code> |  |
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
| <Link id="m-setcontrol" /><code>{"void SetControl(float control)"}</code> |  |
| <Link id="m-snap" /><code>{"void Snap(float newTarget)"}</code> |  |
| <Link id="m-snapifnotlerping" /><code>{"void SnapIfNotLerping(float newTarget)"}</code> |  |
| <Link id="m-stopcontrol" /><code>{"void StopControl()"}</code> |  |
| <Link id="m-update" /><code>{"void Update()"}</code> |  |
| <Link id="m-lerp" /><code>{"protected float Lerp(float target)"}</code> |  |
| <Link id="m-snapvalue-2" /><code>{"private float SnapValue()"}</code> |  |

## Used in

Members of other types that take, return or hold a `LerpingControlledFloatValue`:

[`AtmosphereManager.FogDensity`](/game-api/types/alta-world/atmospheremanager#m-fogdensity).
