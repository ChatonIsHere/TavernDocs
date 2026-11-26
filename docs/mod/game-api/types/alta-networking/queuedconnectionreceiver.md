---
title: "QueuedConnectionReceiver"
description: "A connection receiver that can hold packets back and process them later, so incoming messages can be spread over frames."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QueuedConnectionReceiver

An **abstract class** in `Root.Township`, `Alta.Networking.Internal`.

A connection receiver that can hold packets back and process them later, so incoming messages can be spread over frames. Subclasses decide when to queue.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`ConnectionReceiver`](/mod/game-api/types/alta-networking/connectionreceiver)
- **Derived types** [`CountedQueuedConnectionReceiver`](/mod/game-api/types/alta-networking/countedqueuedconnectionreceiver), [`TimedQueuedConnectionReceiver`](/mod/game-api/types/alta-networking/timedqueuedconnectionreceiver)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected QueuedConnectionReceiver("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel)"}</code> | <span className="api-desc">Creates a `QueuedConnectionReceiver` from `connection` and `channel`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isqueueingthisframe" /><code>{"protected bool isQueueingThisFrame"}</code> | <span className="api-desc">Set when processing stopped part way this frame.</span> |
| <Link id="m-messagesprocessedthisframe" /><code>{"protected int messagesProcessedThisFrame"}</code> | <span className="api-desc">Messages processed since the last `ProcessExistingQueues`.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-incomingqueue" /><code>{"private readonly Queue<"}<Link to="/mod/game-api/types/alta-networking/pooleddataqueueitem">{"PooledDataQueueItem"}</Link>{"> incomingQueue"}</code> | <span className="api-desc">Packets (or the unprocessed rest of them) waiting to be handled by `ProcessExistingQueues`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hasqueue" /><code>{"bool HasQueue { get; }"}</code> | <span className="api-desc">True when packets are waiting to be processed.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-finishedqueue" /><code>{"event Action FinishedQueue"}</code> | <span className="api-desc">Raised after each `ProcessExistingQueues` pass.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"override void Dispose()"}</code> | <span className="api-desc">Stops the receiver and releases any queued packets.</span> |
| <Link id="m-processexistingqueues" /><code>{"override void ProcessExistingQueues()"}</code> | <span className="api-desc">Processes queued packets in order, stopping part way through one if processing has to pause.</span> |
| <Link id="m-receivepacket" /><code>{"override void ReceivePacket("}<Link to="/mod/game-api/types/assembly-other/itransportsocket">{"ITransportSocket"}</Link>{" socket, ArraySegment<byte> data)"}</code> | <span className="api-desc">Processes a packet straight away or queues it. Whatever is left of a part-processed packet is queued.</span> |
| <Link id="m-cancontinueprocessingpacket" /><code>{"protected virtual bool CanContinueProcessingPacket()"}</code> | <span className="api-desc">Whether to keep reading messages from the current packet. By default, while `ShouldPacketBeQueued` is false.</span> |
| <Link id="m-processreceivedpacket" /><code>{"protected virtual bool ProcessReceivedPacket(ArraySegment<byte> data, out int progress)"}</code> | <span className="api-desc">Processes messages in a packet one at a time. Returns false with the bytes used if it had to stop early.</span> |
| <Link id="m-shouldpacketbequeued" /><code>{"protected abstract bool ShouldPacketBeQueued()"}</code> | <span className="api-desc">Whether new packets should be queued instead of processed now.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-queuepacketdata" /><code>{"private void QueuePacketData(ArraySegment<byte> data)"}</code> | <span className="api-desc">Wraps packet data in a pooled item and adds it to `incomingQueue`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `QueuedConnectionReceiver`:

<div className="api-used-in">

[`QueuedConnectionHelper.Deregister`](/mod/game-api/types/alta-networking/queuedconnectionhelper#m-deregister), [`QueuedConnectionHelper.receivers`](/mod/game-api/types/alta-networking/queuedconnectionhelper#m-receivers), [`QueuedConnectionHelper.Register`](/mod/game-api/types/alta-networking/queuedconnectionhelper#m-register).

</div>
