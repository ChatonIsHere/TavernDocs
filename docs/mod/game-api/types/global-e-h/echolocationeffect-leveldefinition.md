---
title: "EcholocationEffect.LevelDefinition"
description: "Private serialized settings for one effect level: a duration curve and a size."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EcholocationEffect.LevelDefinition

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private serialized settings for one effect level: a duration curve and a size.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Nested in** [`EcholocationEffect`](/mod/game-api/types/global-e-h/echolocationeffect)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LevelDefinition()"}</code> | <span className="api-desc">Creates an `EcholocationEffect.LevelDefinition` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effectdurationcurve" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" effectDurationCurve"}</code> | <span className="api-desc">Curve and duration of the level.</span> |
| <Link id="m-size" /><code>{"private float size"}</code> | <span className="api-desc">Uniform size of the effect.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-curve" /><code>{"AnimationCurve Curve { get; }"}</code> | <span className="api-desc">Animation curve of the level.</span> |
| <Link id="m-duration" /><code>{"float Duration { get; }"}</code> | <span className="api-desc">Length of the effect in seconds.</span> |
| <Link id="m-scale" /><code>{"Vector3 Scale { get; }"}</code> | <span className="api-desc">`size` as a uniform scale vector.</span> |
