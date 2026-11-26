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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimberPieceDelegate(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/alta-crafting/timberpiecebase">{"TimberPieceBase"}</Link>{" piece, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/alta-crafting/timberpiecebase">{"TimberPieceBase"}</Link>{" piece)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `TimberPieceDelegate`:

<div className="api-used-in">

[`TimberPieceBase.OnChanged`](/mod/game-api/types/alta-crafting/timberpiecebase#m-onchanged), [`TimberPieceBase.OnDone`](/mod/game-api/types/alta-crafting/timberpiecebase#m-ondone).

</div>
