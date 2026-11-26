---
title: "Timeline.RepeatableEntry"
description: "Private Timeline entry that queues itself again after each run, for callbacks that repeat at a fixed interval."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Timeline.RepeatableEntry

A **private class** in `Alta.Timing.Runtime`, `Alta.Timing`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private `Timeline` entry that queues itself again after each run, for callbacks that repeat at a fixed interval.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Nested in** [`Timeline`](/game-api/types/assembly-other/timeline)
- **Inherits or implements** [`Timeline.Entry`](/game-api/types/assembly-other/timeline-entry)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RepeatableEntry(Action callback)"}</code> | Creates a `Timeline.RepeatableEntry` from `callback`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-repeatcalllimitonload" /><code>{"const int RepeatCallLimitOnLoad"}</code> | Constant 1000. Not used anywhere in this build. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-repeatinterval" /><code>{"TimeSpan RepeatInterval { get; private set; }"}</code> | Time between runs. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkentryreuse" /><code>{"override bool CheckEntryReuse("}<Link to="/game-api/types/assembly-other/timeline">{"Timeline"}</Link>{" timeline)"}</code> | After a run, moves the target time on by the interval and queues the entry again. Returns false once released. |
| <Link id="m-get" /><code>{"static "}<Link to="/game-api/types/assembly-other/timeline-repeatableentry">{"Timeline.RepeatableEntry"}</Link>{" Get(Action callback, TimeSpan time, TimeSpan repeatInterval)"}</code> | Creates an entry for a callback with a first run time and a repeat interval. |
| <Link id="m-release" /><code>{"override void Release()"}</code> | Clears the callback so the entry stops repeating. |
