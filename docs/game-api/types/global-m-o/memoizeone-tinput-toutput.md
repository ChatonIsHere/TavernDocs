---
title: "MemoizeOne<TInput, TOutput>"
description: "class MemoizeOne<TInput, TOutput> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MemoizeOne&lt;TInput, TOutput&gt;

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Derived types** [`MemoizeComponentOne<T>`](/game-api/types/global-m-o/memoizecomponentone-t)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MemoizeOne(Func<TInput, TOutput> evaluate, IEqualityComparer<TInput> comparer = null)"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-comparer" /><code>{"private IEqualityComparer<TInput> comparer"}</code> |
| <Link id="m-evaluate" /><code>{"private Func<TInput, TOutput> evaluate"}</code> |
| <Link id="m-lastinput" /><code>{"private TInput lastInput"}</code> |
| <Link id="m-lastoutput" /><code>{"private TOutput lastOutput"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-forget" /><code>{"void Forget()"}</code> |
| <Link id="m-get" /><code>{"TOutput Get(TInput input)"}</code> |

## Used in

Members of other types that take, return or hold a `MemoizeOne&lt;TInput, TOutput>`:

[`PickupContainer.moveToDock`](/game-api/types/global-p/pickupcontainer#m-movetodock), [`PositionSerializer.getContext`](/game-api/types/global-p/positionserializer#m-getcontext).
