---
title: "Packet"
description: "An outgoing packet buffer that several messages are written into, each with a 2-byte length, before it is sent on a connection."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Packet

A **class** in `Root.Township`, `Alta.Networking.Internal`.

An outgoing packet buffer that several messages are written into, each with a 2-byte length, before it is sent on a connection.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Packet(int size)"}</code> | <span className="api-desc">Creates a `Packet` from `size`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code>{"private readonly byte[] data"}</code> | <span className="api-desc">The packet's byte buffer.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for misuse and send errors.</span> |
| <Link id="m-size" /><code>{"private readonly ushort[] size"}</code> | <span className="api-desc">One-element buffer used to copy each message's 2-byte length into the packet.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isempty" /><code>{"bool IsEmpty { get; }"}</code> | <span className="api-desc">True when nothing has been written.</span> |
| <Link id="m-ispooled" /><code>{"bool IsPooled { get; set; }"}</code> | <span className="api-desc">Set while the packet is in a pool. Using it then logs an error.</span> |
| <Link id="m-position" /><code>{"int Position { get; private set; }"}</code> | <span className="api-desc">Write position in the buffer.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-byteoffset" /><code>{"private static int ByteOffset { get; }"}</code> | <span className="api-desc">The transport's reserved bytes at the start of the buffer; writing starts after them.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-hasspace" /><code>{"bool HasSpace(int byteCount)"}</code> | <span className="api-desc">True if that many more bytes fit.</span> |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | <span className="api-desc">Clears the packet for reuse.</span> |
| <Link id="m-send" /><code>{"bool Send("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel)"}</code> | <span className="api-desc">Sends the packet on the connection and channel. Resets it on success, or always on unreliable channels.</span> |
| <Link id="m-write" /><code>{"void Write("}<Link to="/mod/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" writer, int byteCount)"}</code> | <span className="api-desc">Appends a message: its byte length, then its bytes.</span> |

## Used in

Members of other types that take, return or hold a `Packet`:

<div className="api-used-in">

[`OutgoingPacketManager.CreatePacket`](/mod/game-api/types/alta-networking/outgoingpacketmanager#m-createpacket), [`OutgoingPacketManager.CurrentPacket`](/mod/game-api/types/alta-networking/outgoingpacketmanager#m-currentpacket), [`OutgoingPacketManager.FailedPacketsQueue`](/mod/game-api/types/alta-networking/outgoingpacketmanager#m-failedpacketsqueue), [`OutgoingPacketManager.FreePackets`](/mod/game-api/types/alta-networking/outgoingpacketmanager#m-freepackets), [`OutgoingPacketManager.ReleasePacket`](/mod/game-api/types/alta-networking/outgoingpacketmanager#m-releasepacket), [`OutgoingPacketManager.SendPacket`](/mod/game-api/types/alta-networking/outgoingpacketmanager#m-sendpacket).

</div>
