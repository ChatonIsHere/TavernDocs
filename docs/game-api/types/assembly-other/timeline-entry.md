---
title: "Timeline.Entry"
description: "class Timeline.Entry in Alta.Timing.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Timeline.Entry

A **private class** in `Alta.Timing.Runtime`, `Alta.Timing`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Nested in** [`Timeline`](/game-api/types/assembly-other/timeline)
- **Inherits or implements** [`FastPriorityQueueNodeTimeSpan`](/game-api/types/assembly-other/fastpriorityqueuenodetimespan), [`Timeline.IEntry`](/game-api/types/assembly-other/timeline-ientry)
- **Derived types** [`Timeline.RepeatableEntry`](/game-api/types/assembly-other/timeline-repeatableentry)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Entry(Action callback)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-callback" /><code>{"Action callback"}</code> |  |
| <Link id="m-targettime" /><code>{"TimeSpan targetTime"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-alta-timing-timeline-ientry-isactive" /><code>{"private bool Alta.Timing.Timeline.IEntry.IsActive { get; }"}</code> |  |
| <Link id="m-alta-timing-timeline-ientry-time" /><code>{"private TimeSpan Alta.Timing.Timeline.IEntry.Time { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkentryreuse" /><code>{"virtual bool CheckEntryReuse("}<Link to="/game-api/types/assembly-other/timeline">{"Timeline"}</Link>{" timeline)"}</code> |  |
| <Link id="m-get" /><code>{"static "}<Link to="/game-api/types/assembly-other/timeline-entry">{"Timeline.Entry"}</Link>{" Get(Action callback, TimeSpan time)"}</code> |  |
| <Link id="m-release" /><code>{"virtual void Release()"}</code> |  |

## Used in

Members of other types that take, return or hold a `Entry`:

[`Timeline.EnqueEntry`](/game-api/types/assembly-other/timeline#m-enqueentry), [`Timeline.entries`](/game-api/types/assembly-other/timeline#m-entries).
