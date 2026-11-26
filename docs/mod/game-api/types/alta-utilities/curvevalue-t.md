---
title: "CurveValue<T>"
description: "Pairs a topic with an animation curve."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CurveValue&lt;T&gt;

A **class** in `Root.Township`, `Alta`.

Pairs a topic with an animation curve. Base of `AttributeCurveValue` for biome attributes.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Derived types** [`AttributeCurveValue`](/mod/game-api/types/global-a-b/attributecurvevalue)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CurveValue()"}</code> | Creates a `CurveValue` from `topic` and `curve`. |
| <Link id="m-ctor-2" /><code>{"CurveValue(T topic, AnimationCurve curve)"}</code> | Creates a `CurveValue` from `topic` and `curve`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-curve" /><code>{"private AnimationCurve curve"}</code> | Backing field for `Curve`. |
| <Link id="m-topic" /><code>{"private T topic"}</code> | Backing field for `Topic`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-curve-2" /><code>{"AnimationCurve Curve { get; }"}</code> | The curve for the topic. |
| <Link id="m-topic-2" /><code>{"T Topic { get; }"}</code> | What the curve applies to. |
