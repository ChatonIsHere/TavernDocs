---
title: "ConnectionEventHandler"
description: "Handler for events about a network Connection, such as a player connecting or disconnecting."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConnectionEventHandler

A **delegate** in `Root.Township`, `Alta.Networking`.

Handler for events about a network `Connection`, such as a player connecting or disconnecting.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConnectionEventHandler(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `ConnectionEventHandler`:

<div className="api-used-in">

[`Connection.Approved`](/mod/game-api/types/alta-networking/connection#m-approved), [`Connection.Disconnected`](/mod/game-api/types/alta-networking/connection#m-disconnected), [`FakeSocket.ConnectionCreated`](/mod/game-api/types/alta-networking/fakesocket#m-connectioncreated), [`FakeSocket.ConnectionDestroyed`](/mod/game-api/types/alta-networking/fakesocket#m-connectiondestroyed), [`ISocket.ConnectionCreated`](/mod/game-api/types/alta-networking/isocket#m-connectioncreated), [`ISocket.ConnectionDestroyed`](/mod/game-api/types/alta-networking/isocket#m-connectiondestroyed), [`Socket.ConnectionCreated`](/mod/game-api/types/alta-networking/socket#m-connectioncreated), [`Socket.ConnectionDestroyed`](/mod/game-api/types/alta-networking/socket#m-connectiondestroyed).

</div>
