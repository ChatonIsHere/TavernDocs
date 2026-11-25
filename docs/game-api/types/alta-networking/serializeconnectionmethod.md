---
title: "SerializeConnectionMethod"
description: "delegate SerializeConnectionMethod in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SerializeConnectionMethod

A **delegate** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SerializeConnectionMethod(object object, IntPtr method)"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, AsyncCallback callback, object object)"}</code> |  |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |  |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `SerializeConnectionMethod`:

[`Connection.messageHandlers`](/game-api/types/alta-networking/connection#m-messagehandlers), [`Connection.Send`](/game-api/types/alta-networking/connection#m-send), [`Connection.SetHandler`](/game-api/types/alta-networking/connection#m-sethandler), [`Connection.TryGetMessageHandler`](/game-api/types/alta-networking/connection#m-trygetmessagehandler), [`FakeSocket.SendToAll`](/game-api/types/alta-networking/fakesocket#m-sendtoall), [`FakeSocket.SendToPlayers`](/game-api/types/alta-networking/fakesocket#m-sendtoplayers), [`OutgoingPacketManager.Send`](/game-api/types/alta-networking/outgoingpacketmanager#m-send), [`OutgoingPacketManager.SendWithQueued`](/game-api/types/alta-networking/outgoingpacketmanager#m-sendwithqueued-2), [`OutgoingPacketManager.SerializeToWriter`](/game-api/types/alta-networking/outgoingpacketmanager#m-serializetowriter), [`ISocket.SendToAll`](/game-api/types/alta-networking/isocket#m-sendtoall), [`ISocket.SendToPlayers`](/game-api/types/alta-networking/isocket#m-sendtoplayers), [`Socket.SendToAll`](/game-api/types/alta-networking/socket#m-sendtoall), [`Socket.SendToPlayers`](/game-api/types/alta-networking/socket#m-sendtoplayers).
