---
title: "ClimbingHandlerAnalytics.StaminaTracker"
description: "struct ClimbingHandlerAnalytics.StaminaTracker in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClimbingHandlerAnalytics.StaminaTracker

A **private struct** in `Root.Township`, `Features.Climbing`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Nested in** [`ClimbingHandlerAnalytics`](/game-api/types/game-other-namespaces/climbinghandleranalytics)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StaminaTracker("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" staminaStat)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-lastvalue" /><code>{"private float lastValue"}</code> |
| <Link id="m-staminastat" /><code>{"private readonly "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" staminaStat"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-consumedstamina" /><code>{"float ConsumedStamina { get; private set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-tick" /><code>{"void Tick()"}</code> |

## Used in

Members of other types that take, return or hold a `StaminaTracker`:

[`ClimbingHandlerAnalytics.staminaTrackerLeftHand`](/game-api/types/game-other-namespaces/climbinghandleranalytics#m-staminatrackerlefthand), [`ClimbingHandlerAnalytics.staminaTrackerRightHand`](/game-api/types/game-other-namespaces/climbinghandleranalytics#m-staminatrackerrighthand).
