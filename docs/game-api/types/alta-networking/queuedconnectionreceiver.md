---
title: "QueuedConnectionReceiver"
description: "abstract class QueuedConnectionReceiver in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QueuedConnectionReceiver

An **abstract class** in `Root.Township`, `Alta.Networking.Internal`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`ConnectionReceiver`](/game-api/types/alta-networking/connectionreceiver)
- **Derived types** [`CountedQueuedConnectionReceiver`](/game-api/types/alta-networking/countedqueuedconnectionreceiver), [`TimedQueuedConnectionReceiver`](/game-api/types/alta-networking/timedqueuedconnectionreceiver)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected QueuedConnectionReceiver("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-incomingqueue" /><code>{"private readonly Queue<"}<Link to="/game-api/types/alta-networking/pooleddataqueueitem">{"PooledDataQueueItem"}</Link>{"> incomingQueue"}</code> |  |
| <Link id="m-isqueueingthisframe" /><code>{"protected bool isQueueingThisFrame"}</code> |  |
| <Link id="m-messagesprocessedthisframe" /><code>{"protected int messagesProcessedThisFrame"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hasqueue" /><code>{"bool HasQueue { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-finishedqueue" /><code>{"event Action FinishedQueue"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"override void Dispose()"}</code> |  |
| <Link id="m-processexistingqueues" /><code>{"override void ProcessExistingQueues()"}</code> |  |
| <Link id="m-receivepacket" /><code>{"override void ReceivePacket("}<Link to="/game-api/types/assembly-other/itransportsocket">{"ITransportSocket"}</Link>{" socket, ArraySegment<byte> data)"}</code> |  |
| <Link id="m-cancontinueprocessingpacket" /><code>{"protected virtual bool CanContinueProcessingPacket()"}</code> |  |
| <Link id="m-processreceivedpacket" /><code>{"protected virtual bool ProcessReceivedPacket(ArraySegment<byte> data, out int progress)"}</code> |  |
| <Link id="m-queuepacketdata" /><code>{"private void QueuePacketData(ArraySegment<byte> data)"}</code> |  |
| <Link id="m-shouldpacketbequeued" /><code>{"protected abstract bool ShouldPacketBeQueued()"}</code> |  |

## Used in

Members of other types that take, return or hold a `QueuedConnectionReceiver`:

[`QueuedConnectionHelper.Deregister`](/game-api/types/alta-networking/queuedconnectionhelper#m-deregister), [`QueuedConnectionHelper.receivers`](/game-api/types/alta-networking/queuedconnectionhelper#m-receivers), [`QueuedConnectionHelper.Register`](/game-api/types/alta-networking/queuedconnectionhelper#m-register).
