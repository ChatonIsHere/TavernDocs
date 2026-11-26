---
title: "BuilderDock.BoolDelegate"
description: "Callback for BuilderDock.ActiveChanged, passed the dock's new IsActive value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BuilderDock.BoolDelegate

A **delegate** in `Root.Township`, `Alta.Carpentry`.

Callback for `BuilderDock.ActiveChanged`, passed the dock's new `IsActive` value.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Nested in** [`BuilderDock`](/mod/game-api/types/alta-crafting/builderdock)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BoolDelegate(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(bool value, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(bool value)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `BoolDelegate`:

<div className="api-used-in">

[`BuilderDock.ActiveChanged`](/mod/game-api/types/alta-crafting/builderdock#m-activechanged).

</div>
