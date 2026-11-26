---
title: "ZoneAnalyticsTriggerEvent"
description: "Zone trigger event asset that sends an \"Area Exited\" analytics event with how long the player was in the zone."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ZoneAnalyticsTriggerEvent

A **class** in `Root.Township`, `ATT.Triggers`.

Zone trigger event asset that sends an "Area Exited" analytics event with how long the player was in the zone.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`ZoneEvent`](/game-api/types/game-other-namespaces/zoneevent)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ZoneAnalyticsTriggerEvent()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | Analytics service set by `Inject`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> | Receives the analytics service by dependency injection. |
| <Link id="m-trigger" /><code>{"override void Trigger("}<Link to="/game-api/types/game-other-namespaces/itriggereventdata">{"ITriggerEventData"}</Link>{" eventData, int durationInSeconds)"}</code> | Sends the area exited analytics event with the trigger data and duration in seconds. |

## Used in

Members of other types that take, return or hold a `ZoneAnalyticsTriggerEvent`:

[`AnalyticsInstaller.enterEvent`](/game-api/types/assembly-other/analyticsinstaller#m-enterevent), [`AnalyticsInstaller.exitEvent`](/game-api/types/assembly-other/analyticsinstaller#m-exitevent).
