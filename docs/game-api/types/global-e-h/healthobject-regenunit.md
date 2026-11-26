---
title: "HealthObject.RegenUnit"
description: "Protected helper that pairs a regeneration amount with a duration."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HealthObject.RegenUnit

A **protected class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Protected helper that pairs a regeneration amount with a duration. Nothing in `HealthObject` uses it.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Nested in** [`HealthObject`](/game-api/types/global-e-h/healthobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RegenUnit(float amount, int duration)"}</code> | Creates a `HealthObject.RegenUnit` from `amount` and `duration`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-amount" /><code>{"private float amount"}</code> | Backing field for `Amount`. |
| <Link id="m-duration" /><code>{"private int duration"}</code> | Backing field for `Duration`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-amount-2" /><code>{"float Amount { get; }"}</code> | Health to regenerate. |
| <Link id="m-duration-2" /><code>{"int Duration { get; }"}</code> | Duration of the regeneration. |
