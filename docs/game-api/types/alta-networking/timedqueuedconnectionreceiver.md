---
title: "TimedQueuedConnectionReceiver"
description: "class TimedQueuedConnectionReceiver in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimedQueuedConnectionReceiver

A **class** in `Root.Township`, `Alta.Networking.Internal`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`QueuedConnectionReceiver`](/game-api/types/alta-networking/queuedconnectionreceiver)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TimedQueuedConnectionReceiver("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel)"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-isready" /><code>{"private bool isReady"}</code> |
| <Link id="m-processedmessagesduration" /><code>{"private readonly Stopwatch processedMessagesDuration"}</code> |
| <Link id="m-processingallowance" /><code>{"private float processingAllowance"}</code> |
| <Link id="m-settings" /><code>{"private readonly "}<Link to="/game-api/types/alta-networking/connectionreceivesettings">{"ConnectionReceiveSettings"}</Link>{" settings"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-processexistingqueues" /><code>{"override void ProcessExistingQueues()"}</code> |
| <Link id="m-processreceivedpacket" /><code>{"protected override bool ProcessReceivedPacket(ArraySegment<byte> data, out int progressed)"}</code> |
| <Link id="m-shouldpacketbequeued" /><code>{"protected override bool ShouldPacketBeQueued()"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-handlescenesync" /><code>{"private void HandleSceneSync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |

</details>
