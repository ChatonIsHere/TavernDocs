---
title: "SerializedTimedEvent.TimerData"
description: "A running Timeline timer on a SerializedTimedEvent and which setup step it belongs to, so it can be saved and reloaded."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SerializedTimedEvent.TimerData

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A running `Timeline` timer on a `SerializedTimedEvent` and which setup step it belongs to, so it can be saved and reloaded.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Nested in** [`SerializedTimedEvent`](/mod/game-api/types/global-s/serializedtimedevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimerData()"}</code> | <span className="api-desc">Creates a `SerializedTimedEvent.TimerData` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-index" /><code>{"int Index { get; set; }"}</code> | <span className="api-desc">Index of the setup step this timer fires.</span> |
| <Link id="m-timer" /><code><Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" Timer { get; set; }"}</code> | <span className="api-desc">The `Timeline` entry counting down.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-save" /><code><Link to="/mod/game-api/types/global-t-x/timedeventsavedata-timerdata">{"TimedEventSaveData.TimerData"}</Link>{" Save()"}</code> | <span className="api-desc">Turns the timer into save data.</span> |

## Used in

Members of other types that take, return or hold a `TimerData`:

<div className="api-used-in">

[`SerializedTimedEvent.timers`](/mod/game-api/types/global-s/serializedtimedevent#m-timers).

</div>
