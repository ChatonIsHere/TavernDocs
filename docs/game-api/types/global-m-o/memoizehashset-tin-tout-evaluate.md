---
title: "MemoizeHashset<TIn, TOut>.Evaluate"
description: "Function that MemoizeHashset calls to work out a value for a new key; returns false to skip storing it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MemoizeHashset&lt;TIn, TOut&gt;.Evaluate

A **delegate** in `Root.Township`, no namespace.

Function that `MemoizeHashset` calls to work out a value for a new key; returns false to skip storing it.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Nested in** [`MemoizeHashset<TIn, TOut>`](/game-api/types/global-m-o/memoizehashset-tin-tout)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Evaluate(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(TIn input, out TOut output, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual bool EndInvoke(out TOut output, IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual bool Invoke(TIn input, out TOut output)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `Evaluate`:

[`MemoizeHashset<TIn, TOut>.evaluate`](/game-api/types/global-m-o/memoizehashset-tin-tout#m-evaluate), [`MemoizeHashset<TIn, TOut>.MemoizeHashset<TIn, TOut>`](/game-api/types/global-m-o/memoizehashset-tin-tout#m-ctor), [`MemoizeHashsetCountTracker<TIn, TOut>.MemoizeHashsetCountTracker<TIn, TOut>`](/game-api/types/global-m-o/memoizehashsetcounttracker-tin-tout#m-ctor).
