---
title: "HealthObject.RegenUnit"
description: "Protected helper that pairs a regeneration amount with a duration."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HealthObject.RegenUnit

A **protected class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Protected helper that pairs a regeneration amount with a duration. Nothing in `HealthObject` uses it.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Nested in** [`HealthObject`](/mod/game-api/types/global-e-h/healthobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RegenUnit(float amount, int duration)"}</code> | <span className="api-desc">Creates a `HealthObject.RegenUnit` from `amount` and `duration`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-amount" /><code>{"private float amount"}</code> | <span className="api-desc">Backing field for `Amount`.</span> |
| <Link id="m-duration" /><code>{"private int duration"}</code> | <span className="api-desc">Backing field for `Duration`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-amount-2" /><code>{"float Amount { get; }"}</code> | <span className="api-desc">Health to regenerate.</span> |
| <Link id="m-duration-2" /><code>{"int Duration { get; }"}</code> | <span className="api-desc">Duration of the regeneration.</span> |
