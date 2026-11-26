---
title: "AreaTriggerAnalyticsEvent"
description: "Analytics event for leaving a trigger area, with the area name and time spent in it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AreaTriggerAnalyticsEvent

A **class** in `Root.Township`, `ATT.Analytics`.

Analytics event for leaving a trigger area, with the area name and time spent in it.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`TownshipAnalyticsEvent`](/mod/game-api/types/game-other-namespaces/townshipanalyticsevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AreaTriggerAnalyticsEvent(string eventName, "}<Link to="/mod/game-api/types/game-other-namespaces/itriggereventdata">{"ITriggerEventData"}</Link>{" eventData, int duration)"}</code> | Creates an `AreaTriggerAnalyticsEvent` from `eventName`, `eventData` and `duration`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-areaexit" /><code>{"const string AreaExit"}</code> | Event name for leaving an area: "Area Exited". |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-areakey" /><code>{"private const string AreaKey"}</code> | Property key for the area's name. |
| <Link id="m-duration" /><code>{"private const string Duration"}</code> | Property key for the time spent in the area. |

</details>
