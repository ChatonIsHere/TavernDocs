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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`QueuedConnectionReceiver`](/mod/game-api/types/alta-networking/queuedconnectionreceiver)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimedQueuedConnectionReceiver("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel)"}</code> | <span className="api-desc">Creates a `TimedQueuedConnectionReceiver` from `connection` and `channel`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isready" /><code>{"private bool isReady"}</code> | <span className="api-desc">True once the local player has been set.</span> |
| <Link id="m-processedmessagesduration" /><code>{"private readonly Stopwatch processedMessagesDuration"}</code> | <span className="api-desc">Stopwatch used to time each message.</span> |
| <Link id="m-processingallowance" /><code>{"private float processingAllowance"}</code> | <span className="api-desc">Remaining time budget in milliseconds.</span> |
| <Link id="m-settings" /><code>{"private readonly "}<Link to="/mod/game-api/types/alta-networking/connectionreceivesettings">{"ConnectionReceiveSettings"}</Link>{" settings"}</code> | <span className="api-desc">The global `ConnectionReceiveSettings`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-processexistingqueues" /><code>{"override void ProcessExistingQueues()"}</code> | <span className="api-desc">Adds to the time budget from the frame time and settings (capped), then works through the queue.</span> |
| <Link id="m-processreceivedpacket" /><code>{"protected override bool ProcessReceivedPacket(ArraySegment<byte> data, out int progressed)"}</code> | <span className="api-desc">Handles messages from a packet while budget remains, timing each one; returns true if the packet was finished.</span> |
| <Link id="m-shouldpacketbequeued" /><code>{"protected override bool ShouldPacketBeQueued()"}</code> | <span className="api-desc">Queues if not ready or the budget is below `MinAllowanceToProcess`; never queues while `RenderLock` is locked.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handlescenesync" /><code>{"private void HandleSceneSync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">When the local player is set, marks the receiver ready so messages start being handled.</span> |

</details>
