---
title: "MemoizeOne<TInput, TOutput>"
description: "Caches the result of a function for the last input only."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MemoizeOne&lt;TInput, TOutput&gt;

A **class** in `Root.Township`, the global namespace.

Caches the result of a function for the last input only. A new input reruns the function.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Derived types** [`MemoizeComponentOne<T>`](/mod/game-api/types/global-m-o/memoizecomponentone-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MemoizeOne(Func<TInput, TOutput> evaluate, IEqualityComparer<TInput> comparer = null)"}</code> | <span className="api-desc">Creates a `MemoizeOne` from `evaluate` and `comparer`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-comparer" /><code>{"private IEqualityComparer<TInput> comparer"}</code> | <span className="api-desc">Comparer used to match inputs.</span> |
| <Link id="m-evaluate" /><code>{"private Func<TInput, TOutput> evaluate"}</code> | <span className="api-desc">The function being cached.</span> |
| <Link id="m-lastinput" /><code>{"private TInput lastInput"}</code> | <span className="api-desc">The last input evaluated.</span> |
| <Link id="m-lastoutput" /><code>{"private TOutput lastOutput"}</code> | <span className="api-desc">The result for `lastInput`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forget" /><code>{"void Forget()"}</code> | <span className="api-desc">Clears the cached input and output.</span> |
| <Link id="m-get" /><code>{"TOutput Get(TInput input)"}</code> | <span className="api-desc">Returns the cached output if the input matches the last one, otherwise evaluates and caches. A default input on first call returns default without evaluating.</span> |

## Used in

Members of other types that take, return or hold a `MemoizeOne&lt;TInput, TOutput>`:

<div className="api-used-in">

[`PickupContainer.moveToDock`](/mod/game-api/types/global-p/pickupcontainer#m-movetodock), [`PositionSerializer.getContext`](/mod/game-api/types/global-p/positionserializer#m-getcontext).

</div>
