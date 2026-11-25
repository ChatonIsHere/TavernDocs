---
title: "Array2dGenerationHelper.ThreadRowsAction<TContext, T, TData>"
description: "delegate Array2dGenerationHelper.ThreadRowsAction<TContext, T, TData> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Array2dGenerationHelper.ThreadRowsAction&lt;TContext, T, TData&gt;

A **delegate** in `Root.Township`, `Alta.Forests`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested in** [`Array2dGenerationHelper`](/game-api/types/alta-world-generation/array2dgenerationhelper)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ThreadRowsAction(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(TContext context, Random random, T[,] values, TData data, int xMin, int yMin, int xMax, int yMax, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual Task EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual Task Invoke(TContext context, Random random, T[,] values, TData data, int xMin, int yMin, int xMax, int yMax)"}</code> |

## Used in

Members of other types that take, return or hold a `ThreadRowsAction&lt;TContext, T, TData>`:

[`Array2dGenerationHelper.ThreadRows`](/game-api/types/alta-world-generation/array2dgenerationhelper#m-threadrows-2).
