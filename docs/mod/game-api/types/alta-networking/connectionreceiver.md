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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** `IDisposable`
- **Derived types** [`NormalConnectionReceiver`](/mod/game-api/types/alta-networking/normalconnectionreceiver), [`QueuedConnectionReceiver`](/mod/game-api/types/alta-networking/queuedconnectionreceiver)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ConnectionReceiver("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel)"}</code> | <span className="api-desc">Creates a `ConnectionReceiver` from `connection` and `channel`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"protected readonly "}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel"}</code> | <span className="api-desc">The channel this receives on.</span> |
| <Link id="m-connection" /><code>{"protected readonly "}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection"}</code> | <span className="api-desc">The connection this receives for.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"virtual void Dispose()"}</code> | <span className="api-desc">Cleans up. Does nothing here.</span> |
| <Link id="m-processexistingqueues" /><code>{"abstract void ProcessExistingQueues()"}</code> | <span className="api-desc">Processes queued packets.</span> |
| <Link id="m-receivepacket" /><code>{"abstract void ReceivePacket("}<Link to="/mod/game-api/types/assembly-other/itransportsocket">{"ITransportSocket"}</Link>{" socket, ArraySegment<byte> data)"}</code> | <span className="api-desc">Handles a packet that just arrived.</span> |

## Used in

Members of other types that take, return or hold a `ConnectionReceiver`:

<div className="api-used-in">

[`Connection.receivers`](/mod/game-api/types/alta-networking/connection#m-receivers), [`ConnectionChannel.CreateConnectionReceiver`](/mod/game-api/types/alta-networking/connectionchannel#m-createconnectionreceiver).

</div>
