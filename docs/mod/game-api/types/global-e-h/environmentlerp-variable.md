---
title: "EnvironmentLerp.Variable"
description: "One float in an EnvironmentLerp that blends from a start value to a target."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnvironmentLerp.Variable

A **class** in `Root.Township`, the global namespace.

One float in an `EnvironmentLerp` that blends from a start value to a target.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Nested in** [`EnvironmentLerp`](/mod/game-api/types/global-e-h/environmentlerp)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Variable()"}</code> | <span className="api-desc">Creates an `EnvironmentLerp.Variable` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-from" /><code>{"float From { get; private set; }"}</code> | <span className="api-desc">Value the blend starts from.</span> |
| <Link id="m-to" /><code>{"float To { get; private set; }"}</code> | <span className="api-desc">Target value.</span> |
| <Link id="m-value" /><code>{"float Value { get; private set; }"}</code> | <span className="api-desc">Current blended value.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"event Action<float> Changed"}</code> | <span className="api-desc">Raised with the new value when it changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-lerp" /><code>{"void Lerp(float lerp)"}</code> | <span className="api-desc">Sets the value between `From` and `To` at the given fraction.</span> |
| <Link id="m-setto" /><code>{"void SetTo(float target, bool isSnapping)"}</code> | <span className="api-desc">Sets a new target. With snapping, jumps straight to it.</span> |

## Used in

Members of other types that take, return or hold a `Variable`:

<div className="api-used-in">

[`EnvironmentLerp.Reverb`](/mod/game-api/types/global-e-h/environmentlerp#m-reverb).

</div>
