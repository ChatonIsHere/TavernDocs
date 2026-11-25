---
title: "StatBarSimple.MaterialValue"
description: "class StatBarSimple.MaterialValue in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatBarSimple.MaterialValue

A **protected class** in `Root.Township`, `Alta.StatSystem`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Nested in** [`StatBarSimple`](/game-api/types/alta-stats-effects/statbarsimple)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MaterialValue(string property, "}<Link to="/game-api/types/alta-stats-effects/statbarsimple">{"StatBarSimple"}</Link>{" bar, float lerpSpeed)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bar" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statbarsimple">{"StatBarSimple"}</Link>{" bar"}</code> |  |
| <Link id="m-currentvalue" /><code>{"private float currentValue"}</code> |  |
| <Link id="m-islerping" /><code>{"private bool isLerping"}</code> |  |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> |  |
| <Link id="m-lerptarget" /><code>{"private float lerpTarget"}</code> |  |
| <Link id="m-material" /><code>{"private Material material"}</code> |  |
| <Link id="m-propertyid" /><code>{"private int propertyID"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-value" /><code>{"float Value { get; set; }"}</code> |  |
| <Link id="m-currentvalue-2" /><code>{"private float CurrentValue { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-lerp" /><code>{"void Lerp(float target)"}</code> |  |
| <Link id="m-lerp-2" /><code>{"private void Lerp(ref bool isLerping)"}</code> |  |

## Used in

Members of other types that take, return or hold a `MaterialValue`:

[`StatBarSimple.fill`](/game-api/types/alta-stats-effects/statbarsimple#m-fill), [`StatBarSimple.negativeChange`](/game-api/types/alta-stats-effects/statbarsimple#m-negativechange), [`StatBarSimple.positiveChange`](/game-api/types/alta-stats-effects/statbarsimple#m-positivechange).
