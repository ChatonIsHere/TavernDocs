---
title: "TimedQueuedConnectionReceiver"
description: "Client connection receiver that spends a time budget per frame on messages and queues the rest, to keep the frame rate up."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimedQueuedConnectionReceiver

A **class** in `Root.Township`, `Alta.Networking.Internal`.

Client connection receiver that spends a time budget per frame on messages and queues the rest, to keep the frame rate up. Queues everything until the local player is set.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`QueuedConnectionReceiver`](/game-api/types/alta-networking/queuedconnectionreceiver)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimedQueuedConnectionReceiver("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel)"}</code> | Creates a `TimedQueuedConnectionReceiver` from `connection` and `channel`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isready" /><code>{"private bool isReady"}</code> | True once the local player has been set. |
| <Link id="m-processedmessagesduration" /><code>{"private readonly Stopwatch processedMessagesDuration"}</code> | Stopwatch used to time each message. |
| <Link id="m-processingallowance" /><code>{"private float processingAllowance"}</code> | Remaining time budget in milliseconds. |
| <Link id="m-settings" /><code>{"private readonly "}<Link to="/game-api/types/alta-networking/connectionreceivesettings">{"ConnectionReceiveSettings"}</Link>{" settings"}</code> | The global `ConnectionReceiveSettings`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-processexistingqueues" /><code>{"override void ProcessExistingQueues()"}</code> | Adds to the time budget from the frame time and settings (capped), then works through the queue. |
| <Link id="m-processreceivedpacket" /><code>{"protected override bool ProcessReceivedPacket(ArraySegment<byte> data, out int progressed)"}</code> | Handles messages from a packet while budget remains, timing each one; returns true if the packet was finished. |
| <Link id="m-shouldpacketbequeued" /><code>{"protected override bool ShouldPacketBeQueued()"}</code> | Queues if not ready or the budget is below `MinAllowanceToProcess`; never queues while `RenderLock` is locked. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handlescenesync" /><code>{"private void HandleSceneSync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | When the local player is set, marks the receiver ready so messages start being handled. |

</details>
