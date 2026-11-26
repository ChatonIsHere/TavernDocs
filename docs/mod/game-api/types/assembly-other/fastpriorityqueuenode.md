---
title: "FastPriorityQueueNode"
description: "Base class for items in a FastPriorityQueue with a float priority."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FastPriorityQueueNode

A **class** in `Alta.Timing.Runtime`, `Alta.Timing.PriorityQueue`.

Base class for items in a `FastPriorityQueue` with a float priority. The queue sets both properties.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Derived types** [`StatEffectShellAnimator.ShellAnimationHandlerNode`](/mod/game-api/types/alta-player/stateffectshellanimator-shellanimationhandlernode), [`StablePriorityQueueNode`](/mod/game-api/types/assembly-other/stablepriorityqueuenode)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FastPriorityQueueNode()"}</code> | Creates a `FastPriorityQueueNode` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-priority" /><code>{"float Priority { get; protected internal set; }"}</code> | The priority the node was queued with. Lower values come out first. |
| <Link id="m-queueindex" /><code>{"int QueueIndex { get; internal set; }"}</code> | The node's slot in the queue's heap array. |
