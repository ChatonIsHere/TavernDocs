---
title: "StablePriorityQueueNode"
description: "Base class for items in a StablePriorityQueue."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StablePriorityQueueNode

A **class** in `Alta.Timing.Runtime`, `Alta.Timing.PriorityQueue`.

Base class for items in a `StablePriorityQueue`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`FastPriorityQueueNode`](/game-api/types/assembly-other/fastpriorityqueuenode)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StablePriorityQueueNode()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-insertionindex" /><code>{"long InsertionIndex { get; internal set; }"}</code> | Order in which the node was queued, used to keep equal priorities first in, first out. |
