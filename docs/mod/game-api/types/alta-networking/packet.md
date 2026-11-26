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
| <Link id="m-ctor" /><code>{"Packet(int size)"}</code> | Creates a `Packet` from `size`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code>{"private readonly byte[] data"}</code> | The packet's byte buffer. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for misuse and send errors. |
| <Link id="m-size" /><code>{"private readonly ushort[] size"}</code> | One-element buffer used to copy each message's 2-byte length into the packet. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isempty" /><code>{"bool IsEmpty { get; }"}</code> | True when nothing has been written. |
| <Link id="m-ispooled" /><code>{"bool IsPooled { get; set; }"}</code> | Set while the packet is in a pool. Using it then logs an error. |
| <Link id="m-position" /><code>{"int Position { get; private set; }"}</code> | Write position in the buffer. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-byteoffset" /><code>{"private static int ByteOffset { get; }"}</code> | The transport's reserved bytes at the start of the buffer; writing starts after them. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-hasspace" /><code>{"bool HasSpace(int byteCount)"}</code> | True if that many more bytes fit. |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | Clears the packet for reuse. |
| <Link id="m-send" /><code>{"bool Send("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel)"}</code> | Sends the packet on the connection and channel. Resets it on success, or always on unreliable channels. |
| <Link id="m-write" /><code>{"void Write("}<Link to="/mod/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" writer, int byteCount)"}</code> | Appends a message: its byte length, then its bytes. |

## Used in

Members of other types that take, return or hold a `Packet`:

[`OutgoingPacketManager.CreatePacket`](/mod/game-api/types/alta-networking/outgoingpacketmanager#m-createpacket), [`OutgoingPacketManager.CurrentPacket`](/mod/game-api/types/alta-networking/outgoingpacketmanager#m-currentpacket), [`OutgoingPacketManager.FailedPacketsQueue`](/mod/game-api/types/alta-networking/outgoingpacketmanager#m-failedpacketsqueue), [`OutgoingPacketManager.FreePackets`](/mod/game-api/types/alta-networking/outgoingpacketmanager#m-freepackets), [`OutgoingPacketManager.ReleasePacket`](/mod/game-api/types/alta-networking/outgoingpacketmanager#m-releasepacket), [`OutgoingPacketManager.SendPacket`](/mod/game-api/types/alta-networking/outgoingpacketmanager#m-sendpacket).
