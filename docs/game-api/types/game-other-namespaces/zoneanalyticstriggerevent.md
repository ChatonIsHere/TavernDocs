---
title: "ZoneAnalyticsTriggerEvent"
description: "class ZoneAnalyticsTriggerEvent in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ZoneAnalyticsTriggerEvent

A **class** in `Root.Township`, `ATT.Triggers`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`ZoneEvent`](/game-api/types/game-other-namespaces/zoneevent)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ZoneAnalyticsTriggerEvent()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> |  |
| <Link id="m-trigger" /><code>{"override void Trigger("}<Link to="/game-api/types/game-other-namespaces/itriggereventdata">{"ITriggerEventData"}</Link>{" eventData, int durationInSeconds)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ZoneAnalyticsTriggerEvent`:

[`AnalyticsInstaller.enterEvent`](/game-api/types/assembly-other/analyticsinstaller#m-enterevent), [`AnalyticsInstaller.exitEvent`](/game-api/types/assembly-other/analyticsinstaller#m-exitevent).
