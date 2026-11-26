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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`AnalyticsEvent`](/mod/game-api/types/assembly-other/analyticsevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClimbingMovementEvent(List<float> jumpValueRecords, List<"}<Link to="/mod/game-api/types/game-other-namespaces/staminausagerecord">{"StaminaUsageRecord"}</Link>{"> staminaUsageRecords)"}</code> | <span className="api-desc">Creates a `ClimbingMovementEvent` from `jumpValueRecords` and `staminaUsageRecords`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distanceclimbedpropertyprefix" /><code>{"private const string DistanceClimbedPropertyPrefix"}</code> | <span className="api-desc">Property name prefix for each climb's distance, followed by its index.</span> |
| <Link id="m-eventtypekey" /><code>{"private const string EventTypeKey"}</code> | <span className="api-desc">Event name, "Climbing Movement Event".</span> |
| <Link id="m-jumppropertyprefix" /><code>{"private const string JumpPropertyPrefix"}</code> | <span className="api-desc">Property name prefix for each jump velocity, followed by its index.</span> |
| <Link id="m-staminausagepropertyprefix" /><code>{"private const string StaminaUsagePropertyPrefix"}</code> | <span className="api-desc">Property name prefix for each climb's stamina used, followed by its index.</span> |

</details>
