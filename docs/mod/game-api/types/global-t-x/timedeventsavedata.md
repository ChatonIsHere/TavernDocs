---
title: "TimedEventSaveData"
description: "Save data (version 1) for SerializedTimedEvent: whether its timers have started and how far each one has got."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimedEventSaveData

A **class** in `Root.Township`, the global namespace.

Save data (version 1) for `SerializedTimedEvent`: whether its timers have started and how far each one has got.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`NewSaveData<SerializedTimedEvent, TimedEventSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`SerializedTimedEvent`](/mod/game-api/types/global-s/serializedtimedevent), [`TimedEventSaveData`](/mod/game-api/types/global-t-x/timedeventsavedata)
- **Nested types** [`TimerData`](/mod/game-api/types/global-t-x/timedeventsavedata-timerdata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimedEventSaveData()"}</code> | <span className="api-desc">Creates a `TimedEventSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-hasstarted" /><code>{"bool hasStarted"}</code> | <span className="api-desc">Whether the timed event had been started when saved.</span> |
| <Link id="m-timers" /><code><Link to="/mod/game-api/types/global-t-x/timedeventsavedata-timerdata">{"TimedEventSaveData.TimerData"}</Link>{"[] timers"}</code> | <span className="api-desc">The pending timers, each with its remaining `TimeSpan` and the index of the setup it belongs to.</span> |
