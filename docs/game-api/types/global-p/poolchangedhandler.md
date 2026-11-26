---
title: "PoolChangedHandler"
description: "Handler for PooledObject.Released and PooledObject.Requested, given the pooled object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PoolChangedHandler

A **delegate** in `Root.Township`, no namespace.

Handler for `PooledObject.Released` and `PooledObject.Requested`, given the pooled object.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PoolChangedHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `PoolChangedHandler`:

[`PooledObject.Released`](/game-api/types/global-p/pooledobject#m-released), [`PooledObject.Requested`](/game-api/types/global-p/pooledobject#m-requested).
