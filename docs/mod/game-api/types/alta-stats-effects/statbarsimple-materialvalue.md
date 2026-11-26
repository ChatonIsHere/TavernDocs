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
| <Link id="m-ctor" /><code>{"MaterialValue(string property, "}<Link to="/mod/game-api/types/alta-stats-effects/statbarsimple">{"StatBarSimple"}</Link>{" bar, float lerpSpeed)"}</code> | <span className="api-desc">Creates a `StatBarSimple.MaterialValue` from `property`, `bar` and `lerpSpeed`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bar" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statbarsimple">{"StatBarSimple"}</Link>{" bar"}</code> | <span className="api-desc">The stat bar whose material and `Lerping` event are used.</span> |
| <Link id="m-currentvalue" /><code>{"private float currentValue"}</code> | <span className="api-desc">Backing field for `CurrentValue`.</span> |
| <Link id="m-islerping" /><code>{"private bool isLerping"}</code> | <span className="api-desc">True while hooked to the bar's `Lerping` event.</span> |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> | <span className="api-desc">How fast the value moves towards the target, per second.</span> |
| <Link id="m-lerptarget" /><code>{"private float lerpTarget"}</code> | <span className="api-desc">The value being eased towards.</span> |
| <Link id="m-material" /><code>{"private Material material"}</code> | <span className="api-desc">The bar's material that holds the property.</span> |
| <Link id="m-propertyid" /><code>{"private int propertyID"}</code> | <span className="api-desc">Shader property id of the float.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-value" /><code>{"float Value { get; set; }"}</code> | <span className="api-desc">Get or set the value directly. Setting it stops at the new value with no easing.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue-2" /><code>{"private float CurrentValue { get; set; }"}</code> | <span className="api-desc">The value currently on the material. Setting it writes the shader property.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-lerp" /><code>{"void Lerp(float target)"}</code> | <span className="api-desc">Starts easing towards a target at `lerpSpeed` per second, hooking the bar's `Lerping` event until it arrives. Sets it straight away if already there.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lerp-2" /><code>{"private void Lerp(ref bool isLerping)"}</code> | <span className="api-desc">Starts easing towards a target at `lerpSpeed` per second, hooking the bar's `Lerping` event until it arrives. Sets it straight away if already there.</span> |

</details>

## Used in

Members of other types that take, return or hold a `MaterialValue`:

<div className="api-used-in">

[`StatBarSimple.fill`](/mod/game-api/types/alta-stats-effects/statbarsimple#m-fill), [`StatBarSimple.negativeChange`](/mod/game-api/types/alta-stats-effects/statbarsimple#m-negativechange), [`StatBarSimple.positiveChange`](/mod/game-api/types/alta-stats-effects/statbarsimple#m-positivechange).

</div>
