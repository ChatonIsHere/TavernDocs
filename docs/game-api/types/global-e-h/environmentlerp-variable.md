---
title: "EnvironmentLerp.Variable"
description: "One float in an EnvironmentLerp that blends from a start value to a target."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnvironmentLerp.Variable

A **class** in `Root.Township`, no namespace.

One float in an `EnvironmentLerp` that blends from a start value to a target.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Nested in** [`EnvironmentLerp`](/game-api/types/global-e-h/environmentlerp)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Variable()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-from" /><code>{"float From { get; private set; }"}</code> | Value the blend starts from. |
| <Link id="m-to" /><code>{"float To { get; private set; }"}</code> | Target value. |
| <Link id="m-value" /><code>{"float Value { get; private set; }"}</code> | Current blended value. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"event Action<float> Changed"}</code> | Raised with the new value when it changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-lerp" /><code>{"void Lerp(float lerp)"}</code> | Sets the value between `From` and `To` at the given fraction. |
| <Link id="m-setto" /><code>{"void SetTo(float target, bool isSnapping)"}</code> | Sets a new target. With snapping, jumps straight to it. |

## Used in

Members of other types that take, return or hold a `Variable`:

[`EnvironmentLerp.Reverb`](/game-api/types/global-e-h/environmentlerp#m-reverb).
