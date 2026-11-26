---
title: "TimedEventSaveData.TimerData"
description: "Saved state of one running timer of a SerializedTimedEvent."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimedEventSaveData.TimerData

A **class** in `Root.Township`, the global namespace.

Saved state of one running timer of a `SerializedTimedEvent`.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Nested in** [`TimedEventSaveData`](/mod/game-api/types/global-t-x/timedeventsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimerData()"}</code> | <span className="api-desc">Creates a `TimedEventSaveData.TimerData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-index" /><code>{"int index"}</code> | <span className="api-desc">Index of the timed event setup this timer belongs to.</span> |
| <Link id="m-timer" /><code>{"TimeSpan timer"}</code> | <span className="api-desc">Saved timeline entry for the timer (a time span).</span> |

## Used in

Members of other types that take, return or hold a `TimerData`:

<div className="api-used-in">

[`SerializedTimedEvent.TimerData.Save`](/mod/game-api/types/global-s/serializedtimedevent-timerdata#m-save), [`TimedEventSaveData.timers`](/mod/game-api/types/global-t-x/timedeventsavedata#m-timers).

</div>
