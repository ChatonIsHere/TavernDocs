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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StaminaUsageRecord(float distance, float leftStamina, float rightStamina)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-distance" /><code>{"readonly float distance"}</code> | Distance travelled during the climb. |
| <Link id="m-maxusedstamina" /><code>{"readonly float maxUsedStamina"}</code> | The higher of the left and right hand stamina used. |

## Used in

Members of other types that take, return or hold a `StaminaUsageRecord`:

[`ClimbingHandlerAnalytics.staminaUsageRecords`](/game-api/types/game-other-namespaces/climbinghandleranalytics#m-staminausagerecords), [`ClimbingMovementEvent.ClimbingMovementEvent`](/game-api/types/game-other-namespaces/climbingmovementevent#m-ctor).
