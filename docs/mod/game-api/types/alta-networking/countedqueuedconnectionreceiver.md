---
title: "CountedQueuedConnectionReceiver"
description: "Client connection receiver that handles a set number of messages per frame and queues the rest."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CountedQueuedConnectionReceiver

A **class** in `Root.Township`, `Alta.Networking.Internal`.

Client connection receiver that handles a set number of messages per frame and queues the rest. Chosen by a `ConnectionChannel` with the Counted receiver type.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`QueuedConnectionReceiver`](/mod/game-api/types/alta-networking/queuedconnectionreceiver)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CountedQueuedConnectionReceiver("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel)"}</code> | <span className="api-desc">Creates a `CountedQueuedConnectionReceiver` from `connection` and `channel`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-shouldpacketbequeued" /><code>{"protected override bool ShouldPacketBeQueued()"}</code> | <span className="api-desc">Starts queueing for the rest of the frame once `MaxReliableMessagesPerFrame` from `ConnectionReceiveSettings` is reached.</span> |
