---
title: "NormalConnectionReceiver"
description: "Connection receiver that handles every message in a packet straight away, with no queueing."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NormalConnectionReceiver

A **class** in `Root.Township`, `Alta.Networking.Internal`.

Connection receiver that handles every message in a packet straight away, with no queueing. Always used on the server, and on clients for channels set to Normal.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`ConnectionReceiver`](/game-api/types/alta-networking/connectionreceiver)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NormalConnectionReceiver("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel)"}</code> | Creates a `NormalConnectionReceiver` from `connection` and `channel`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-processexistingqueues" /><code>{"override void ProcessExistingQueues()"}</code> | Does nothing, as nothing is queued. |
| <Link id="m-receivepacket" /><code>{"override void ReceivePacket("}<Link to="/game-api/types/assembly-other/itransportsocket">{"ITransportSocket"}</Link>{" socket, ArraySegment<byte> data)"}</code> | Handles each message in the packet in turn through `MessageProcessor`. |
