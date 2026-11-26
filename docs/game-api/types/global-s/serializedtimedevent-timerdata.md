---
title: "SerializedTimedEvent.TimerData"
description: "A running Timeline timer on a SerializedTimedEvent and which setup step it belongs to, so it can be saved and reloaded."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SerializedTimedEvent.TimerData

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A running `Timeline` timer on a `SerializedTimedEvent` and which setup step it belongs to, so it can be saved and reloaded.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Nested in** [`SerializedTimedEvent`](/game-api/types/global-s/serializedtimedevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimerData()"}</code> | Creates a `SerializedTimedEvent.TimerData` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-index" /><code>{"int Index { get; set; }"}</code> | Index of the setup step this timer fires. |
| <Link id="m-timer" /><code><Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" Timer { get; set; }"}</code> | The `Timeline` entry counting down. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-save" /><code><Link to="/game-api/types/global-t-x/timedeventsavedata-timerdata">{"TimedEventSaveData.TimerData"}</Link>{" Save()"}</code> | Turns the timer into save data. |

## Used in

Members of other types that take, return or hold a `TimerData`:

[`SerializedTimedEvent.timers`](/game-api/types/global-s/serializedtimedevent#m-timers).
