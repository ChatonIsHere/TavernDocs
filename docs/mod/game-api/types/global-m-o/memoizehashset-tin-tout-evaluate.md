---
title: "MemoizeHashset<TIn, TOut>.Evaluate"
description: "Function that MemoizeHashset calls to work out a value for a new key; returns false to skip storing it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MemoizeHashset&lt;TIn, TOut&gt;.Evaluate

A **delegate** in `Root.Township`, the global namespace.

Function that `MemoizeHashset` calls to work out a value for a new key; returns false to skip storing it.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Nested in** [`MemoizeHashset<TIn, TOut>`](/mod/game-api/types/global-m-o/memoizehashset-tin-tout)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Evaluate(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(TIn input, out TOut output, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual bool EndInvoke(out TOut output, IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual bool Invoke(TIn input, out TOut output)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `Evaluate`:

<div className="api-used-in">

[`MemoizeHashset<TIn, TOut>.evaluate`](/mod/game-api/types/global-m-o/memoizehashset-tin-tout#m-evaluate), [`MemoizeHashset<TIn, TOut>.MemoizeHashset<TIn, TOut>`](/mod/game-api/types/global-m-o/memoizehashset-tin-tout#m-ctor), [`MemoizeHashsetCountTracker<TIn, TOut>.MemoizeHashsetCountTracker<TIn, TOut>`](/mod/game-api/types/global-m-o/memoizehashsetcounttracker-tin-tout#m-ctor).

</div>
