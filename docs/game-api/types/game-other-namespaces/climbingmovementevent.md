---
title: "ClimbingMovementEvent"
description: "Analytics event carrying numbered jump velocity, stamina usage and distance climbed properties."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClimbingMovementEvent

A **internal class** in `Root.Township`, `Features.Climbing`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Analytics event carrying numbered jump velocity, stamina usage and distance climbed properties. Its constructor empties the lists it is given.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`AnalyticsEvent`](/game-api/types/assembly-other/analyticsevent)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ClimbingMovementEvent(List<float> jumpValueRecords, List<"}<Link to="/game-api/types/game-other-namespaces/staminausagerecord">{"StaminaUsageRecord"}</Link>{"> staminaUsageRecords)"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distanceclimbedpropertyprefix" /><code>{"private const string DistanceClimbedPropertyPrefix"}</code> | Property name prefix for each climb's distance, followed by its index. |
| <Link id="m-eventtypekey" /><code>{"private const string EventTypeKey"}</code> | Event name, "Climbing Movement Event". |
| <Link id="m-jumppropertyprefix" /><code>{"private const string JumpPropertyPrefix"}</code> | Property name prefix for each jump velocity, followed by its index. |
| <Link id="m-staminausagepropertyprefix" /><code>{"private const string StaminaUsagePropertyPrefix"}</code> | Property name prefix for each climb's stamina used, followed by its index. |

</details>
