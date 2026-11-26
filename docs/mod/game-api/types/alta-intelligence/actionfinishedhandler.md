---
title: "ActionFinishedHandler"
description: "Callback for an AI action that finished or was cancelled, used by BasicActiveAction.Finished and Cancelled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActionFinishedHandler

A **delegate** in `Root.Township`, `Alta.Intelligence`.

Callback for an AI action that finished or was cancelled, used by `BasicActiveAction.Finished` and `Cancelled`.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActionFinishedHandler(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `ActionFinishedHandler`:

<div className="api-used-in">

[`BasicActiveAction<TAgent>.Cancelled`](/mod/game-api/types/alta-intelligence/basicactiveaction-tagent#m-cancelled), [`BasicActiveAction<TAgent>.Finished`](/mod/game-api/types/alta-intelligence/basicactiveaction-tagent#m-finished), [`IActiveAction.Cancelled`](/mod/game-api/types/alta-intelligence/iactiveaction#m-cancelled), [`IActiveAction.Finished`](/mod/game-api/types/alta-intelligence/iactiveaction#m-finished).

</div>
