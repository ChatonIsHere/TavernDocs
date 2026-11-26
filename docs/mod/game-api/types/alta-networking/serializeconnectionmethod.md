---
title: "SerializeConnectionMethod"
description: "A method that writes (or reads) a message body for one connection on a stream."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SerializeConnectionMethod

A **delegate** in `Root.Township`, `Alta.Networking`.

A method that writes (or reads) a message body for one connection on a stream. Passed to `Connection` and `OutgoingPacketManager` send methods.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SerializeConnectionMethod(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Standard delegate method for calling it asynchronously.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Standard delegate method that waits for an asynchronous call to finish.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Runs the method with the connection and stream.</span> |

## Used in

Members of other types that take, return or hold a `SerializeConnectionMethod`:

<div className="api-used-in">

[`Connection.messageHandlers`](/mod/game-api/types/alta-networking/connection#m-messagehandlers), [`Connection.Send`](/mod/game-api/types/alta-networking/connection#m-send), [`Connection.SetHandler`](/mod/game-api/types/alta-networking/connection#m-sethandler), [`Connection.TryGetMessageHandler`](/mod/game-api/types/alta-networking/connection#m-trygetmessagehandler), [`FakeSocket.SendToAll`](/mod/game-api/types/alta-networking/fakesocket#m-sendtoall), [`FakeSocket.SendToPlayers`](/mod/game-api/types/alta-networking/fakesocket#m-sendtoplayers), [`OutgoingPacketManager.Send`](/mod/game-api/types/alta-networking/outgoingpacketmanager#m-send), [`OutgoingPacketManager.SendWithQueued`](/mod/game-api/types/alta-networking/outgoingpacketmanager#m-sendwithqueued-2), [`OutgoingPacketManager.SerializeToWriter`](/mod/game-api/types/alta-networking/outgoingpacketmanager#m-serializetowriter), [`ISocket.SendToAll`](/mod/game-api/types/alta-networking/isocket#m-sendtoall), [`ISocket.SendToPlayers`](/mod/game-api/types/alta-networking/isocket#m-sendtoplayers), [`Socket.SendToAll`](/mod/game-api/types/alta-networking/socket#m-sendtoall), [`Socket.SendToPlayers`](/mod/game-api/types/alta-networking/socket#m-sendtoplayers).

</div>
