---
title: "SetChallengeCheckpointTriggerEvent"
description: "Zone event asset that records the zone as the last challenge checkpoint, for challenge respawn analytics."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SetChallengeCheckpointTriggerEvent

A **class** in `Root.Township`, `ATT.Triggers`.

Zone event asset that records the zone as the last challenge checkpoint, for challenge respawn analytics.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`ZoneEvent`](/game-api/types/game-other-namespaces/zoneevent)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SetChallengeCheckpointTriggerEvent()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-trigger" /><code>{"override void Trigger("}<Link to="/game-api/types/game-other-namespaces/itriggereventdata">{"ITriggerEventData"}</Link>{" eventData, int durationInSeconds)"}</code> | Sets `PlayerUnlockAnalytics.RecentCheckpointName` to the event name. |
