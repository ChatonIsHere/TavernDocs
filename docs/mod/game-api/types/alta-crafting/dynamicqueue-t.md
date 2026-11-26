---
title: "DynamicQueue<T>"
description: "A circular doubly linked queue of elements that link themselves (IDynamicQueueElement)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DynamicQueue&lt;T&gt;

A **class** in `Root.Township`, `Alta.Blacksmithing`.

A circular doubly linked queue of elements that link themselves (`IDynamicQueueElement`). `Recycler` uses it to rotate through its output slots.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DynamicQueue()"}</code> | Creates a `DynamicQueue` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-first" /><code>{"T First { get; private set; }"}</code> | The element at the front of the queue. |
| <Link id="m-isempty" /><code>{"bool IsEmpty { get; private set; }"}</code> | True until the first element is added. Nothing sets it back. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-enque" /><code>{"void Enque(T element)"}</code> | Adds the element at the back of the queue, just before `First`. |
| <Link id="m-update" /><code>{"void Update(T element)"}</code> | Moves the element to the back of the queue. If it is `First`, the next element becomes `First`. |

## Used in

Members of other types that take, return or hold a `DynamicQueue&lt;T>`:

[`Recycler.orderedSlots`](/mod/game-api/types/alta-crafting/recycler#m-orderedslots).
