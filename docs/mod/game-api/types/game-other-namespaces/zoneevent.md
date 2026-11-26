---
title: "ZoneEvent"
description: "Base ScriptableObject for an action a zone trigger runs, such as an analytics event or setting a challenge checkpoint."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ZoneEvent

An **abstract class** in `Root.Township`, `ATT.Triggers`.

Base ScriptableObject for an action a zone trigger runs, such as an analytics event or setting a challenge checkpoint.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`DebugTriggerEvent`](/mod/game-api/types/game-other-namespaces/debugtriggerevent), [`SetChallengeCheckpointTriggerEvent`](/mod/game-api/types/game-other-namespaces/setchallengecheckpointtriggerevent), [`ZoneAnalyticsTriggerEvent`](/mod/game-api/types/game-other-namespaces/zoneanalyticstriggerevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ZoneEvent()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-trigger" /><code>{"abstract void Trigger("}<Link to="/mod/game-api/types/game-other-namespaces/itriggereventdata">{"ITriggerEventData"}</Link>{" eventData, int durationInSeconds)"}</code> | Runs the event with the trigger's event data and a duration in seconds. |

## Used in

Members of other types that take, return or hold a `ZoneEvent`:

[`TriggerZone.onExitTriggers`](/mod/game-api/types/game-other-namespaces/triggerzone#m-onexittriggers).
