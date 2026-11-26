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

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Nested in** [`Timeline`](/game-api/types/assembly-other/timeline)
- **Inherits or implements** [`FastPriorityQueueNodeTimeSpan`](/game-api/types/assembly-other/fastpriorityqueuenodetimespan), [`Timeline.IEntry`](/game-api/types/assembly-other/timeline-ientry)
- **Derived types** [`Timeline.RepeatableEntry`](/game-api/types/assembly-other/timeline-repeatableentry)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Entry(Action callback)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-callback" /><code>{"Action callback"}</code> | Action run when the entry fires. Null once released. |
| <Link id="m-targettime" /><code>{"TimeSpan targetTime"}</code> | Timeline time the entry fires at. |

## Properties

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-timing-timeline-ientry-isactive" /><code>{"private bool Alta.Timing.Timeline.IEntry.IsActive { get; }"}</code> | True until the entry is released, as long as it still has a callback. |
| <Link id="m-alta-timing-timeline-ientry-time" /><code>{"private TimeSpan Alta.Timing.Timeline.IEntry.Time { get; }"}</code> | The timeline time the entry fires at. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkentryreuse" /><code>{"virtual bool CheckEntryReuse("}<Link to="/game-api/types/assembly-other/timeline">{"Timeline"}</Link>{" timeline)"}</code> | Called after the entry fires. Returns false so the timeline releases it; repeatable entries requeue instead. |
| <Link id="m-get" /><code>{"static "}<Link to="/game-api/types/assembly-other/timeline-entry">{"Timeline.Entry"}</Link>{" Get(Action callback, TimeSpan time)"}</code> | Makes a new entry for the callback at the given time. |
| <Link id="m-release" /><code>{"virtual void Release()"}</code> | Clears the callback, which marks the entry inactive. |

## Used in

Members of other types that take, return or hold a `Entry`:

[`Timeline.EnqueEntry`](/game-api/types/assembly-other/timeline#m-enqueentry), [`Timeline.entries`](/game-api/types/assembly-other/timeline#m-entries).
