---
title: "ServerHandler.ConnectionStep"
description: "An async step run for each connecting player, added with ServerHandler.AddConnectionStep."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerHandler.ConnectionStep

A **delegate** in `Root.Township`, `Alta.Networking.Servers`.

An async step run for each connecting player, added with `ServerHandler.AddConnectionStep`. Gets the connection and a progress text callback.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Nested in** [`ServerHandler`](/mod/game-api/types/alta-networking/serverhandler)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConnectionStep(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, Action<string> progressNotification, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual Task EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual Task Invoke("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, Action<string> progressNotification)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `ConnectionStep`:

<div className="api-used-in">

[`ServerHandler.AddConnectionStep`](/mod/game-api/types/alta-networking/serverhandler#m-addconnectionstep), [`ServerHandler.connectionSteps`](/mod/game-api/types/alta-networking/serverhandler#m-connectionsteps).

</div>
