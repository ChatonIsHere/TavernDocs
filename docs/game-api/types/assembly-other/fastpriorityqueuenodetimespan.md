---
title: "FastPriorityQueueNodeTimeSpan"
description: "Base class for items in a FastPriorityQueueTimeSpan, with a TimeSpan priority."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FastPriorityQueueNodeTimeSpan

A **class** in `Alta.Timing.Runtime`, `Alta.Timing.PriorityQueue`.

Base class for items in a `FastPriorityQueueTimeSpan`, with a `TimeSpan` priority. `Timeline` entries use it.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Derived types** [`Timeline.Entry`](/game-api/types/assembly-other/timeline-entry)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FastPriorityQueueNodeTimeSpan()"}</code> | Creates a `FastPriorityQueueNodeTimeSpan` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-priority" /><code>{"TimeSpan Priority { get; protected internal set; }"}</code> | The time the node was queued with. Earlier times come out first. |
| <Link id="m-queueindex" /><code>{"int QueueIndex { get; internal set; }"}</code> | The node's slot in the queue's heap array. |
