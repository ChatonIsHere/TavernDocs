---
title: "SerializedTimedEvent.TimedEventSetup"
description: "One timed step on a SerializedTimedEvent: an event to fire a set time after the timers start."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SerializedTimedEvent.TimedEventSetup

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One timed step on a `SerializedTimedEvent`: an event to fire a set time after the timers start.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Nested in** [`SerializedTimedEvent`](/mod/game-api/types/global-s/serializedtimedevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimedEventSetup()"}</code> | <span className="api-desc">Creates a `SerializedTimedEvent.TimedEventSetup` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ontimereached" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onTimeReached"}</code> | <span className="api-desc">Backing field for `OnTimeReached`.</span> |
| <Link id="m-timeinseconds" /><code>{"private float timeInSeconds"}</code> | <span className="api-desc">Backing field for `TimeInSeconds`. Defaults to 10.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ontimereached-2" /><code><Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" OnTimeReached { get; }"}</code> | <span className="api-desc">Event fired when the time is up.</span> |
| <Link id="m-timeinseconds-2" /><code>{"float TimeInSeconds { get; }"}</code> | <span className="api-desc">Seconds after start before the event fires.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-invoke" /><code>{"void Invoke()"}</code> | <span className="api-desc">Fires `onTimeReached`.</span> |

## Used in

Members of other types that take, return or hold a `TimedEventSetup`:

<div className="api-used-in">

[`SerializedTimedEvent.setup`](/mod/game-api/types/global-s/serializedtimedevent#m-setup).

</div>
