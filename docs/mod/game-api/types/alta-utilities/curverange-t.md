---
title: "CurveRange<T>"
description: "A topic with two values and an animation curve, evaluated across the range between the values."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CurveRange&lt;T&gt;

A **class** in `Root.Township`, `Alta`.

A topic with two values and an animation curve, evaluated across the range between the values. Base of `AttributeCurveRange` for biome attributes.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`DoubleValue<T>`](/mod/game-api/types/alta-utilities/doublevalue-t)
- **Derived types** [`AttributeCurveRange`](/mod/game-api/types/global-a-b/attributecurverange)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CurveRange()"}</code> | Creates a `CurveRange` from `topic`, `curve`, `value1` and `value2`. |
| <Link id="m-ctor-2" /><code>{"CurveRange(T topic, AnimationCurve curve, float value1, float value2)"}</code> | Creates a `CurveRange` from `topic`, `curve`, `value1` and `value2`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-curve" /><code>{"private AnimationCurve curve"}</code> | Backing field for `Curve`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-curve-2" /><code>{"AnimationCurve Curve { get; }"}</code> | The curve; defaults to 0 at both ends and 1 in the middle. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluateasminmax" /><code>{"float EvaluateAsMinMax(float value)"}</code> | Maps the value to 0 to 1 between the two values and evaluates the curve there. |
