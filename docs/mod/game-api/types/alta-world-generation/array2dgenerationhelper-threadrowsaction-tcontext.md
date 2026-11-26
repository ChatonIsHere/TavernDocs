---
title: "Array2dGenerationHelper.ThreadRowsAction<TContext>"
description: "Like ThreadRowsAction, with a context object passed to every row."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Array2dGenerationHelper.ThreadRowsAction&lt;TContext&gt;

A **delegate** in `Root.Township`, `Alta.Forests`.

Like `ThreadRowsAction`, with a context object passed to every row.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`Array2dGenerationHelper`](/mod/game-api/types/alta-world-generation/array2dgenerationhelper)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ThreadRowsAction(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(TContext context, Random random, int row, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual Task EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual Task Invoke(TContext context, Random random, int row)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `ThreadRowsAction&lt;TContext>`:

<div className="api-used-in">

[`Array2dGenerationHelper.ThreadRows`](/mod/game-api/types/alta-world-generation/array2dgenerationhelper#m-threadrows).

</div>
