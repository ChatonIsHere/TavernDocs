---
title: "StaminaUsageRecord"
description: "Internal record of one climb for analytics: distance travelled and the larger stamina use of the two hands."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaminaUsageRecord

A **internal struct** in `Root.Township`, `Features.Climbing`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal record of one climb for analytics: distance travelled and the larger stamina use of the two hands.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StaminaUsageRecord(float distance, float leftStamina, float rightStamina)"}</code> | <span className="api-desc">Creates a `StaminaUsageRecord` from `distance`, `leftStamina` and `rightStamina`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-distance" /><code>{"readonly float distance"}</code> | <span className="api-desc">Distance travelled during the climb.</span> |
| <Link id="m-maxusedstamina" /><code>{"readonly float maxUsedStamina"}</code> | <span className="api-desc">The higher of the left and right hand stamina used.</span> |

## Used in

Members of other types that take, return or hold a `StaminaUsageRecord`:

<div className="api-used-in">

[`ClimbingHandlerAnalytics.staminaUsageRecords`](/mod/game-api/types/game-other-namespaces/climbinghandleranalytics#m-staminausagerecords), [`ClimbingMovementEvent.ClimbingMovementEvent`](/mod/game-api/types/game-other-namespaces/climbingmovementevent#m-ctor).

</div>
