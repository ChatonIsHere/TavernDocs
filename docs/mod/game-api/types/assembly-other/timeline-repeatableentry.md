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

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Nested in** [`Timeline`](/mod/game-api/types/assembly-other/timeline)
- **Inherits or implements** [`Timeline.Entry`](/mod/game-api/types/assembly-other/timeline-entry)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RepeatableEntry(Action callback)"}</code> | <span className="api-desc">Creates a `Timeline.RepeatableEntry` from `callback`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-repeatcalllimitonload" /><code>{"const int RepeatCallLimitOnLoad"}</code> | <span className="api-desc">Constant 1000. Not used anywhere in this build.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-repeatinterval" /><code>{"TimeSpan RepeatInterval { get; private set; }"}</code> | <span className="api-desc">Time between runs.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkentryreuse" /><code>{"override bool CheckEntryReuse("}<Link to="/mod/game-api/types/assembly-other/timeline">{"Timeline"}</Link>{" timeline)"}</code> | <span className="api-desc">After a run, moves the target time on by the interval and queues the entry again. Returns false once released.</span> |
| <Link id="m-get" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/timeline-repeatableentry">{"Timeline.RepeatableEntry"}</Link>{" Get(Action callback, TimeSpan time, TimeSpan repeatInterval)"}</code> | <span className="api-desc">Creates an entry for a callback with a first run time and a repeat interval.</span> |
| <Link id="m-release" /><code>{"override void Release()"}</code> | <span className="api-desc">Clears the callback so the entry stops repeating.</span> |
