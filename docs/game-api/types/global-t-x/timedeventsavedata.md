---
title: "TimedEventSaveData"
description: "Save data (version 1) for SerializedTimedEvent: whether its timers have started and how far each one has got."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimedEventSaveData

A **class** in `Root.Township`, no namespace.

Save data (version 1) for `SerializedTimedEvent`: whether its timers have started and how far each one has got.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`NewSaveData<SerializedTimedEvent, TimedEventSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`SerializedTimedEvent`](/game-api/types/global-s/serializedtimedevent), [`TimedEventSaveData`](/game-api/types/global-t-x/timedeventsavedata)
- **Nested types** [`TimerData`](/game-api/types/global-t-x/timedeventsavedata-timerdata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TimedEventSaveData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-hasstarted" /><code>{"bool hasStarted"}</code> | Whether the timed event had been started when saved. |
| <Link id="m-timers" /><code><Link to="/game-api/types/global-t-x/timedeventsavedata-timerdata">{"TimedEventSaveData.TimerData"}</Link>{"[] timers"}</code> | The pending timers, each with its remaining `TimeSpan` and the index of the setup it belongs to. |
