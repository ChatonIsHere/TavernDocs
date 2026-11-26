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

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`QueuedConnectionReceiver`](/game-api/types/alta-networking/queuedconnectionreceiver)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CountedQueuedConnectionReceiver("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel)"}</code> | Creates a `CountedQueuedConnectionReceiver` from `connection` and `channel`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-shouldpacketbequeued" /><code>{"protected override bool ShouldPacketBeQueued()"}</code> | Starts queueing for the rest of the frame once `MaxReliableMessagesPerFrame` from `ConnectionReceiveSettings` is reached. |
