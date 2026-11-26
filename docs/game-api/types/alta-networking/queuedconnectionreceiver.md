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

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`ConnectionReceiver`](/game-api/types/alta-networking/connectionreceiver)
- **Derived types** [`CountedQueuedConnectionReceiver`](/game-api/types/alta-networking/countedqueuedconnectionreceiver), [`TimedQueuedConnectionReceiver`](/game-api/types/alta-networking/timedqueuedconnectionreceiver)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected QueuedConnectionReceiver("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel)"}</code> | Creates a `QueuedConnectionReceiver` from `connection` and `channel`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isqueueingthisframe" /><code>{"protected bool isQueueingThisFrame"}</code> | Set when processing stopped part way this frame. |
| <Link id="m-messagesprocessedthisframe" /><code>{"protected int messagesProcessedThisFrame"}</code> | Messages processed since the last `ProcessExistingQueues`. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-incomingqueue" /><code>{"private readonly Queue<"}<Link to="/game-api/types/alta-networking/pooleddataqueueitem">{"PooledDataQueueItem"}</Link>{"> incomingQueue"}</code> | Packets (or the unprocessed rest of them) waiting to be handled by `ProcessExistingQueues`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hasqueue" /><code>{"bool HasQueue { get; }"}</code> | True when packets are waiting to be processed. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-finishedqueue" /><code>{"event Action FinishedQueue"}</code> | Raised after each `ProcessExistingQueues` pass. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"override void Dispose()"}</code> | Stops the receiver and releases any queued packets. |
| <Link id="m-processexistingqueues" /><code>{"override void ProcessExistingQueues()"}</code> | Processes queued packets in order, stopping part way through one if processing has to pause. |
| <Link id="m-receivepacket" /><code>{"override void ReceivePacket("}<Link to="/game-api/types/assembly-other/itransportsocket">{"ITransportSocket"}</Link>{" socket, ArraySegment<byte> data)"}</code> | Processes a packet straight away or queues it. Whatever is left of a part-processed packet is queued. |
| <Link id="m-cancontinueprocessingpacket" /><code>{"protected virtual bool CanContinueProcessingPacket()"}</code> | Whether to keep reading messages from the current packet. By default, while `ShouldPacketBeQueued` is false. |
| <Link id="m-processreceivedpacket" /><code>{"protected virtual bool ProcessReceivedPacket(ArraySegment<byte> data, out int progress)"}</code> | Processes messages in a packet one at a time. Returns false with the bytes used if it had to stop early. |
| <Link id="m-shouldpacketbequeued" /><code>{"protected abstract bool ShouldPacketBeQueued()"}</code> | Whether new packets should be queued instead of processed now. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-queuepacketdata" /><code>{"private void QueuePacketData(ArraySegment<byte> data)"}</code> | Wraps packet data in a pooled item and adds it to `incomingQueue`. |

</details>

## Used in

Members of other types that take, return or hold a `QueuedConnectionReceiver`:

[`QueuedConnectionHelper.Deregister`](/game-api/types/alta-networking/queuedconnectionhelper#m-deregister), [`QueuedConnectionHelper.receivers`](/game-api/types/alta-networking/queuedconnectionhelper#m-receivers), [`QueuedConnectionHelper.Register`](/game-api/types/alta-networking/queuedconnectionhelper#m-register).
