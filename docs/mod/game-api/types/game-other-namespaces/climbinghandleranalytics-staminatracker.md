---
title: "ClimbingHandlerAnalytics.StaminaTracker"
description: "Private helper in climbing analytics that adds up how much stamina a hand's stat has lost since tracking started."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClimbingHandlerAnalytics.StaminaTracker

A **private struct** in `Root.Township`, `Features.Climbing`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private helper in climbing analytics that adds up how much stamina a hand's stat has lost since tracking started.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Nested in** [`ClimbingHandlerAnalytics`](/mod/game-api/types/game-other-namespaces/climbinghandleranalytics)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StaminaTracker("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" staminaStat)"}</code> | <span className="api-desc">Creates a `ClimbingHandlerAnalytics.StaminaTracker` from `staminaStat`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lastvalue" /><code>{"private float lastValue"}</code> | <span className="api-desc">Stat value at the previous tick.</span> |
| <Link id="m-staminastat" /><code>{"private readonly "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" staminaStat"}</code> | <span className="api-desc">The stamina `Stat` being watched.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-consumedstamina" /><code>{"float ConsumedStamina { get; private set; }"}</code> | <span className="api-desc">Total stamina drop counted so far. Gains are ignored.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tick" /><code>{"void Tick()"}</code> | <span className="api-desc">Reads the stat and adds any drop since the last tick to `ConsumedStamina`.</span> |

## Used in

Members of other types that take, return or hold a `StaminaTracker`:

<div className="api-used-in">

[`ClimbingHandlerAnalytics.staminaTrackerLeftHand`](/mod/game-api/types/game-other-namespaces/climbinghandleranalytics#m-staminatrackerlefthand), [`ClimbingHandlerAnalytics.staminaTrackerRightHand`](/mod/game-api/types/game-other-namespaces/climbinghandleranalytics#m-staminatrackerrighthand).

</div>
