---
title: "StatBarSimple.MaterialValue"
description: "One float on a stat bar's material that can be set straight away or eased towards a target."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatBarSimple.MaterialValue

A **protected class** in `Root.Township`, `Alta.StatSystem`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One float on a stat bar's material that can be set straight away or eased towards a target. Easing runs on the bar's `Lerping` event.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Nested in** [`StatBarSimple`](/mod/game-api/types/alta-stats-effects/statbarsimple)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MaterialValue(string property, "}<Link to="/mod/game-api/types/alta-stats-effects/statbarsimple">{"StatBarSimple"}</Link>{" bar, float lerpSpeed)"}</code> | Creates a `StatBarSimple.MaterialValue` from `property`, `bar` and `lerpSpeed`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bar" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statbarsimple">{"StatBarSimple"}</Link>{" bar"}</code> | The stat bar whose material and `Lerping` event are used. |
| <Link id="m-currentvalue" /><code>{"private float currentValue"}</code> | Backing field for `CurrentValue`. |
| <Link id="m-islerping" /><code>{"private bool isLerping"}</code> | True while hooked to the bar's `Lerping` event. |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> | How fast the value moves towards the target, per second. |
| <Link id="m-lerptarget" /><code>{"private float lerpTarget"}</code> | The value being eased towards. |
| <Link id="m-material" /><code>{"private Material material"}</code> | The bar's material that holds the property. |
| <Link id="m-propertyid" /><code>{"private int propertyID"}</code> | Shader property id of the float. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-value" /><code>{"float Value { get; set; }"}</code> | Get or set the value directly. Setting it stops at the new value with no easing. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue-2" /><code>{"private float CurrentValue { get; set; }"}</code> | The value currently on the material. Setting it writes the shader property. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-lerp" /><code>{"void Lerp(float target)"}</code> | Starts easing towards a target at `lerpSpeed` per second, hooking the bar's `Lerping` event until it arrives. Sets it straight away if already there. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lerp-2" /><code>{"private void Lerp(ref bool isLerping)"}</code> | Starts easing towards a target at `lerpSpeed` per second, hooking the bar's `Lerping` event until it arrives. Sets it straight away if already there. |

</details>

## Used in

Members of other types that take, return or hold a `MaterialValue`:

[`StatBarSimple.fill`](/mod/game-api/types/alta-stats-effects/statbarsimple#m-fill), [`StatBarSimple.negativeChange`](/mod/game-api/types/alta-stats-effects/statbarsimple#m-negativechange), [`StatBarSimple.positiveChange`](/mod/game-api/types/alta-stats-effects/statbarsimple#m-positivechange).
