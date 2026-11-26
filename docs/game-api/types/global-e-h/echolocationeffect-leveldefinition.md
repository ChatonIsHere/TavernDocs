---
title: "EcholocationEffect.LevelDefinition"
description: "Private serialized settings for one effect level: a duration curve and a size."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EcholocationEffect.LevelDefinition

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private serialized settings for one effect level: a duration curve and a size.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Nested in** [`EcholocationEffect`](/game-api/types/global-e-h/echolocationeffect)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LevelDefinition()"}</code> | Creates an `EcholocationEffect.LevelDefinition` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effectdurationcurve" /><code>{"private "}<Link to="/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" effectDurationCurve"}</code> | Curve and duration of the level. |
| <Link id="m-size" /><code>{"private float size"}</code> | Uniform size of the effect. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-curve" /><code>{"AnimationCurve Curve { get; }"}</code> | Animation curve of the level. |
| <Link id="m-duration" /><code>{"float Duration { get; }"}</code> | Length of the effect in seconds. |
| <Link id="m-scale" /><code>{"Vector3 Scale { get; }"}</code> | `size` as a uniform scale vector. |
