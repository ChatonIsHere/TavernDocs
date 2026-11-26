---
title: "MemoizeOne<TInput, TOutput>"
description: "Caches the result of a function for the last input only."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MemoizeOne&lt;TInput, TOutput&gt;

A **class** in `Root.Township`, no namespace.

Caches the result of a function for the last input only. A new input reruns the function.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Derived types** [`MemoizeComponentOne<T>`](/game-api/types/global-m-o/memoizecomponentone-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MemoizeOne(Func<TInput, TOutput> evaluate, IEqualityComparer<TInput> comparer = null)"}</code> | Creates a `MemoizeOne` from `evaluate` and `comparer`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-comparer" /><code>{"private IEqualityComparer<TInput> comparer"}</code> | Comparer used to match inputs. |
| <Link id="m-evaluate" /><code>{"private Func<TInput, TOutput> evaluate"}</code> | The function being cached. |
| <Link id="m-lastinput" /><code>{"private TInput lastInput"}</code> | The last input evaluated. |
| <Link id="m-lastoutput" /><code>{"private TOutput lastOutput"}</code> | The result for `lastInput`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forget" /><code>{"void Forget()"}</code> | Clears the cached input and output. |
| <Link id="m-get" /><code>{"TOutput Get(TInput input)"}</code> | Returns the cached output if the input matches the last one, otherwise evaluates and caches. A default input on first call returns default without evaluating. |

## Used in

Members of other types that take, return or hold a `MemoizeOne&lt;TInput, TOutput>`:

[`PickupContainer.moveToDock`](/game-api/types/global-p/pickupcontainer#m-movetodock), [`PositionSerializer.getContext`](/game-api/types/global-p/positionserializer#m-getcontext).
