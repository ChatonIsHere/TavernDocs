---
title: "ShakeablePouringStrengthController"
description: "Pouring strength controller where shaking the container adds to the pour from tipping."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShakeablePouringStrengthController

A **class** in `Root.Township`, `Alta.Liquid`.

Pouring strength controller where shaking the container adds to the pour from tipping.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`PouringStrengthController`](/mod/game-api/types/alta-stats-effects/pouringstrengthcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShakeablePouringStrengthController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maxpouringfromshaking" /><code>{"private float maxPouringFromShaking"}</code> | <span className="api-desc">Most pouring strength shaking can add.</span> |
| <Link id="m-shakedetector" /><code>{"private "}<Link to="/mod/game-api/types/global-s/shakedetector">{"ShakeDetector"}</Link>{" shakeDetector"}</code> | <span className="api-desc">Detects how hard the container is shaken.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpouringstrength" /><code>{"override float GetPouringStrength(out bool isFullyPouring)"}</code> | <span className="api-desc">Tipping value plus the shake strength squared (capped by `maxPouringFromShaking`), times the multipliers.</span> |
