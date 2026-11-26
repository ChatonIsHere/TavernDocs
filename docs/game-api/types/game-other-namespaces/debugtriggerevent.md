---
title: "DebugTriggerEvent"
description: "Zone event asset that logs the event name, time spent and a message, for testing trigger zones."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DebugTriggerEvent

A **class** in `Root.Township`, `ATT.Triggers`.

Zone event asset that logs the event name, time spent and a message, for testing trigger zones.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`ZoneEvent`](/game-api/types/game-other-namespaces/zoneevent)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DebugTriggerEvent()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-message" /><code>{"private string message"}</code> | Text added to the log line. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-trigger" /><code>{"override void Trigger("}<Link to="/game-api/types/game-other-namespaces/itriggereventdata">{"ITriggerEventData"}</Link>{" eventData, int durationInSeconds)"}</code> | Logs the event name, duration and message as an error. |
