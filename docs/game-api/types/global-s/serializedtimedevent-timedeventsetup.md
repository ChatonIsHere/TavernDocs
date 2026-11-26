---
title: "SerializedTimedEvent.TimedEventSetup"
description: "One timed step on a SerializedTimedEvent: an event to fire a set time after the timers start."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SerializedTimedEvent.TimedEventSetup

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One timed step on a `SerializedTimedEvent`: an event to fire a set time after the timers start.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Nested in** [`SerializedTimedEvent`](/game-api/types/global-s/serializedtimedevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimedEventSetup()"}</code> | Creates a `SerializedTimedEvent.TimedEventSetup` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ontimereached" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onTimeReached"}</code> | Backing field for `OnTimeReached`. |
| <Link id="m-timeinseconds" /><code>{"private float timeInSeconds"}</code> | Backing field for `TimeInSeconds`. Defaults to 10. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ontimereached-2" /><code><Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" OnTimeReached { get; }"}</code> | Event fired when the time is up. |
| <Link id="m-timeinseconds-2" /><code>{"float TimeInSeconds { get; }"}</code> | Seconds after start before the event fires. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-invoke" /><code>{"void Invoke()"}</code> | Fires `onTimeReached`. |

## Used in

Members of other types that take, return or hold a `TimedEventSetup`:

[`SerializedTimedEvent.setup`](/game-api/types/global-s/serializedtimedevent#m-setup).
