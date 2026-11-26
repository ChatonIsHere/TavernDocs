---
title: "Array2dGenerationHelper.ThreadRowsAction<T, TData>"
description: "Work for one block of a 2D array in Array2dGenerationHelper.ThreadRows, given the block's bounds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Array2dGenerationHelper.ThreadRowsAction&lt;T, TData&gt;

A **delegate** in `Root.Township`, `Alta.Forests`.

Work for one block of a 2D array in `Array2dGenerationHelper.ThreadRows`, given the block's bounds. Blocks are up to 64 by 64 and run as separate tasks.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested in** [`Array2dGenerationHelper`](/game-api/types/alta-world-generation/array2dgenerationhelper)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ThreadRowsAction(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(Random random, T[,] values, TData data, int xMin, int yMin, int xMax, int yMax, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual Task EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual Task Invoke(Random random, T[,] values, TData data, int xMin, int yMin, int xMax, int yMax)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `ThreadRowsAction&lt;T, TData>`:

[`Array2dGenerationHelper.ThreadRows`](/game-api/types/alta-world-generation/array2dgenerationhelper#m-threadrows-4).
