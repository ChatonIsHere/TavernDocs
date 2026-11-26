---
title: "Timeline.Entry"
description: "A one-shot scheduled callback in a Timeline priority queue, ordered by target time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Timeline.Entry

A **private class** in `Alta.Timing.Runtime`, `Alta.Timing`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A one-shot scheduled callback in a `Timeline` priority queue, ordered by target time. `RepeatableEntry` extends it to reschedule itself.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Nested in** [`Timeline`](/mod/game-api/types/assembly-other/timeline)
- **Inherits or implements** [`FastPriorityQueueNodeTimeSpan`](/mod/game-api/types/assembly-other/fastpriorityqueuenodetimespan), [`Timeline.IEntry`](/mod/game-api/types/assembly-other/timeline-ientry)
- **Derived types** [`Timeline.RepeatableEntry`](/mod/game-api/types/assembly-other/timeline-repeatableentry)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Entry(Action callback)"}</code> | <span className="api-desc">Creates a `Timeline.Entry` from `callback`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-callback" /><code>{"Action callback"}</code> | <span className="api-desc">Action run when the entry fires. Null once released.</span> |
| <Link id="m-targettime" /><code>{"TimeSpan targetTime"}</code> | <span className="api-desc">Timeline time the entry fires at.</span> |

## Properties

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-timing-timeline-ientry-isactive" /><code>{"private bool Alta.Timing.Timeline.IEntry.IsActive { get; }"}</code> | <span className="api-desc">True until the entry is released, as long as it still has a callback.</span> |
| <Link id="m-alta-timing-timeline-ientry-time" /><code>{"private TimeSpan Alta.Timing.Timeline.IEntry.Time { get; }"}</code> | <span className="api-desc">The timeline time the entry fires at.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkentryreuse" /><code>{"virtual bool CheckEntryReuse("}<Link to="/mod/game-api/types/assembly-other/timeline">{"Timeline"}</Link>{" timeline)"}</code> | <span className="api-desc">Called after the entry fires. Returns false so the timeline releases it; repeatable entries requeue instead.</span> |
| <Link id="m-get" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/timeline-entry">{"Timeline.Entry"}</Link>{" Get(Action callback, TimeSpan time)"}</code> | <span className="api-desc">Makes a new entry for the callback at the given time.</span> |
| <Link id="m-release" /><code>{"virtual void Release()"}</code> | <span className="api-desc">Clears the callback, which marks the entry inactive.</span> |

## Used in

Members of other types that take, return or hold a `Entry`:

<div className="api-used-in">

[`Timeline.EnqueEntry`](/mod/game-api/types/assembly-other/timeline#m-enqueentry), [`Timeline.entries`](/mod/game-api/types/assembly-other/timeline#m-entries).

</div>
