---
title: "ConnectionEventHandler"
description: "delegate ConnectionEventHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConnectionEventHandler

A **delegate** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ConnectionEventHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> |

## Used in

Members of other types that take, return or hold a `ConnectionEventHandler`:

[`Connection.Approved`](/game-api/types/alta-networking/connection#m-approved), [`Connection.Disconnected`](/game-api/types/alta-networking/connection#m-disconnected), [`FakeSocket.ConnectionCreated`](/game-api/types/alta-networking/fakesocket#m-connectioncreated), [`FakeSocket.ConnectionDestroyed`](/game-api/types/alta-networking/fakesocket#m-connectiondestroyed), [`ISocket.ConnectionCreated`](/game-api/types/alta-networking/isocket#m-connectioncreated), [`ISocket.ConnectionDestroyed`](/game-api/types/alta-networking/isocket#m-connectiondestroyed), [`Socket.ConnectionCreated`](/game-api/types/alta-networking/socket#m-connectioncreated), [`Socket.ConnectionDestroyed`](/game-api/types/alta-networking/socket#m-connectiondestroyed).
