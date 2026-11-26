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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`ZoneEvent`](/mod/game-api/types/game-other-namespaces/zoneevent)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DebugTriggerEvent()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-message" /><code>{"private string message"}</code> | <span className="api-desc">Text added to the log line.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-trigger" /><code>{"override void Trigger("}<Link to="/mod/game-api/types/game-other-namespaces/itriggereventdata">{"ITriggerEventData"}</Link>{" eventData, int durationInSeconds)"}</code> | <span className="api-desc">Logs the event name, duration and message as an error.</span> |
