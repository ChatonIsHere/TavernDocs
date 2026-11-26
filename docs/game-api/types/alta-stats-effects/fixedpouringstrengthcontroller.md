---
title: "FixedPouringStrengthController"
description: "Pouring strength controller with a strength set from code instead of from tipping."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FixedPouringStrengthController

A **class** in `Root.Township`, `Alta.Liquid`.

Pouring strength controller with a strength set from code instead of from tipping.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`PouringStrengthController`](/game-api/types/alta-stats-effects/pouringstrengthcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FixedPouringStrengthController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentpouringstrength" /><code>{"private float currentPouringStrength"}</code> | The set strength. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpouringstrength" /><code>{"override float GetPouringStrength(out bool isFullyPouring)"}</code> | Returns the set strength times the pouring multiplier. Never reports fully pouring. |
| <Link id="m-setpouringstrength" /><code>{"void SetPouringStrength(float newPouringStrength)"}</code> | Sets the strength. |
