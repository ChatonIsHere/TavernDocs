---
title: "StaticChangeEvent"
description: "Callback for ModifiableStaticManager.ObjectChanged, with a static object's hash and whether it is now modified."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticChangeEvent

A **delegate** in `Root.Township`, `Alta.Networking`.

Callback for `ModifiableStaticManager.ObjectChanged`, with a static object's hash and whether it is now modified.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StaticChangeEvent(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(uint objectHash, bool isModified, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(uint objectHash, bool isModified)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `StaticChangeEvent`:

<div className="api-used-in">

[`ModifiableStaticManager.ObjectChanged`](/mod/game-api/types/alta-networking/modifiablestaticmanager#m-objectchanged).

</div>
