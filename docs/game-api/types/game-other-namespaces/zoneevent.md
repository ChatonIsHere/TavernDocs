---
title: "ZoneEvent"
description: "abstract class ZoneEvent in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ZoneEvent

An **abstract class** in `Root.Township`, `ATT.Triggers`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`DebugTriggerEvent`](/game-api/types/game-other-namespaces/debugtriggerevent), [`SetChallengeCheckpointTriggerEvent`](/game-api/types/game-other-namespaces/setchallengecheckpointtriggerevent), [`ZoneAnalyticsTriggerEvent`](/game-api/types/game-other-namespaces/zoneanalyticstriggerevent)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected ZoneEvent()"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-trigger" /><code>{"abstract void Trigger("}<Link to="/game-api/types/game-other-namespaces/itriggereventdata">{"ITriggerEventData"}</Link>{" eventData, int durationInSeconds)"}</code> |

## Used in

Members of other types that take, return or hold a `ZoneEvent`:

[`TriggerZone.onExitTriggers`](/game-api/types/game-other-namespaces/triggerzone#m-onexittriggers).
