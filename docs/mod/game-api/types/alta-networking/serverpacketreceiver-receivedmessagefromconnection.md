---
title: "ServerPacketReceiver.ReceivedMessageFromConnection"
description: "Server: one buffered reliable packet and the connection it came from, held until the frame's processing step."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerPacketReceiver.ReceivedMessageFromConnection

A **private struct** in `Root.Township`, `Alta.Networking`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Server: one buffered reliable packet and the connection it came from, held until the frame's processing step.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Nested in** [`ServerPacketReceiver`](/mod/game-api/types/alta-networking/serverpacketreceiver)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-connectionidentifier" /><code>{"int connectionIdentifier"}</code> | <span className="api-desc">Transport id of the sending connection.</span> |
| <Link id="m-data" /><code>{"ArraySegment<byte> data"}</code> | <span className="api-desc">The packet bytes, from `MessageReceivePool`.</span> |

## Used in

Members of other types that take, return or hold a `ReceivedMessageFromConnection`:

<div className="api-used-in">

[`ServerPacketReceiver.reliableBuffers`](/mod/game-api/types/alta-networking/serverpacketreceiver#m-reliablebuffers).

</div>
