---
title: "ConnectionReceiver"
description: "Takes received packets for one connection channel and processes them now or queues them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConnectionReceiver

An **abstract class** in `Root.Township`, `Alta.Networking.Internal`.

Takes received packets for one connection channel and processes them now or queues them. The channel picks normal, timed or counted; servers always use normal.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `IDisposable`
- **Derived types** [`NormalConnectionReceiver`](/game-api/types/alta-networking/normalconnectionreceiver), [`QueuedConnectionReceiver`](/game-api/types/alta-networking/queuedconnectionreceiver)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected ConnectionReceiver("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"protected readonly "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel"}</code> | The channel this receives on. |
| <Link id="m-connection" /><code>{"protected readonly "}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection"}</code> | The connection this receives for. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"virtual void Dispose()"}</code> | Cleans up. Does nothing here. |
| <Link id="m-processexistingqueues" /><code>{"abstract void ProcessExistingQueues()"}</code> | Processes queued packets. |
| <Link id="m-receivepacket" /><code>{"abstract void ReceivePacket("}<Link to="/game-api/types/assembly-other/itransportsocket">{"ITransportSocket"}</Link>{" socket, ArraySegment<byte> data)"}</code> | Handles a packet that just arrived. |

## Used in

Members of other types that take, return or hold a `ConnectionReceiver`:

[`Connection.receivers`](/game-api/types/alta-networking/connection#m-receivers), [`ConnectionChannel.CreateConnectionReceiver`](/game-api/types/alta-networking/connectionchannel#m-createconnectionreceiver).
