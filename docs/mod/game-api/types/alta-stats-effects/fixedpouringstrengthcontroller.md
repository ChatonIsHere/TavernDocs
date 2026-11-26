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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`PouringStrengthController`](/mod/game-api/types/alta-stats-effects/pouringstrengthcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FixedPouringStrengthController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentpouringstrength" /><code>{"private float currentPouringStrength"}</code> | <span className="api-desc">The set strength.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpouringstrength" /><code>{"override float GetPouringStrength(out bool isFullyPouring)"}</code> | <span className="api-desc">Returns the set strength times the pouring multiplier. Never reports fully pouring.</span> |
| <Link id="m-setpouringstrength" /><code>{"void SetPouringStrength(float newPouringStrength)"}</code> | <span className="api-desc">Sets the strength.</span> |
