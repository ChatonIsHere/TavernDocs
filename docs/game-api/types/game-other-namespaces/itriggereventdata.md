---
title: "ITriggerEventData"
description: "Data for a zone trigger event, passed to ZoneEvent.Trigger and used for area analytics events."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ITriggerEventData

An **interface** in `Root.Township`, `ATT.Triggers`.

Data for a zone trigger event, passed to `ZoneEvent.Trigger` and used for area analytics events.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Derived types** [`TriggerEventData`](/game-api/types/game-other-namespaces/triggereventdata)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-eventname" /><code>{"string EventName { get; }"}</code> | Name of the event, as sent to analytics. |

## Used in

Members of other types that take, return or hold a `ITriggerEventData`:

[`AreaTriggerAnalyticsEvent.AreaTriggerAnalyticsEvent`](/game-api/types/game-other-namespaces/areatriggeranalyticsevent#m-ctor), [`DebugTriggerEvent.Trigger`](/game-api/types/game-other-namespaces/debugtriggerevent#m-trigger), [`SetChallengeCheckpointTriggerEvent.Trigger`](/game-api/types/game-other-namespaces/setchallengecheckpointtriggerevent#m-trigger), [`ZoneAnalyticsTriggerEvent.Trigger`](/game-api/types/game-other-namespaces/zoneanalyticstriggerevent#m-trigger), [`ZoneEvent.Trigger`](/game-api/types/game-other-namespaces/zoneevent#m-trigger).
