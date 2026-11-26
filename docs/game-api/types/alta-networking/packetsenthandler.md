---
title: "PacketSentHandler"
description: "Callback for Connection.PacketSent, with the connection, the bytes sent, their count, the channel and the transport result."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PacketSentHandler

A **delegate** in `Root.Township`, `Alta.Networking`.

Callback for `Connection.PacketSent`, with the connection, the bytes sent, their count, the channel and the transport result.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PacketSentHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, byte[] data, int byteCount, "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel, "}<Link to="/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" result, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, byte[] data, int byteCount, "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel, "}<Link to="/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" result)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `PacketSentHandler`:

[`Connection.PacketSent`](/game-api/types/alta-networking/connection#m-packetsent).
