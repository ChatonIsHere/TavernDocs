---
title: "IPacketReceiver"
description: "Something that pulls incoming packets off the transport each frame."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPacketReceiver

An **interface** in `Root.Township`, `Alta.Networking`.

Something that pulls incoming packets off the transport each frame. `ServerPacketReceiver` and `ClientPacketReceiver` implement it, and `Socket` holds one.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Derived types** [`ClientPacketReceiver`](/mod/game-api/types/alta-networking/clientpacketreceiver), [`ServerPacketReceiver`](/mod/game-api/types/alta-networking/serverpacketreceiver)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-receivepackets" /><code>{"void ReceivePackets()"}</code> | <span className="api-desc">Receives and processes this frame's waiting packets.</span> |

## Used in

Members of other types that take, return or hold a `IPacketReceiver`:

<div className="api-used-in">

[`Socket.packetReceiver`](/mod/game-api/types/alta-networking/socket#m-packetreceiver).

</div>
