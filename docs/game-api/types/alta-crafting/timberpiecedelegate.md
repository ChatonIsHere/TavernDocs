---
title: "TimberPieceDelegate"
description: "Callback for a timber piece event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimberPieceDelegate

A **delegate** in `Root.Township`, `Alta.Carpentry`.

Callback for a timber piece event. Used for `TimberPieceBase.OnChanged` and `OnDone`, which `TimberBlock` stages hook on the server.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimberPieceDelegate(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-crafting/timberpiecebase">{"TimberPieceBase"}</Link>{" piece, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-crafting/timberpiecebase">{"TimberPieceBase"}</Link>{" piece)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `TimberPieceDelegate`:

[`TimberPieceBase.OnChanged`](/game-api/types/alta-crafting/timberpiecebase#m-onchanged), [`TimberPieceBase.OnDone`](/game-api/types/alta-crafting/timberpiecebase#m-ondone).
