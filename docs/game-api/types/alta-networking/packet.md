---
title: "Packet"
description: "class Packet in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Packet

A **class** in `Root.Township`, `Alta.Networking.Internal`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Packet(int size)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code>{"private readonly byte[] data"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-size" /><code>{"private readonly ushort[] size"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isempty" /><code>{"bool IsEmpty { get; }"}</code> |  |
| <Link id="m-ispooled" /><code>{"bool IsPooled { get; set; }"}</code> |  |
| <Link id="m-position" /><code>{"int Position { get; private set; }"}</code> |  |
| <Link id="m-byteoffset" /><code>{"private static int ByteOffset { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-hasspace" /><code>{"bool HasSpace(int byteCount)"}</code> |  |
| <Link id="m-reset" /><code>{"void Reset()"}</code> |  |
| <Link id="m-send" /><code>{"bool Send("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel)"}</code> |  |
| <Link id="m-write" /><code>{"void Write("}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" writer, int byteCount)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Packet`:

[`OutgoingPacketManager.CreatePacket`](/game-api/types/alta-networking/outgoingpacketmanager#m-createpacket), [`OutgoingPacketManager.CurrentPacket`](/game-api/types/alta-networking/outgoingpacketmanager#m-currentpacket), [`OutgoingPacketManager.FailedPacketsQueue`](/game-api/types/alta-networking/outgoingpacketmanager#m-failedpacketsqueue), [`OutgoingPacketManager.FreePackets`](/game-api/types/alta-networking/outgoingpacketmanager#m-freepackets), [`OutgoingPacketManager.ReleasePacket`](/game-api/types/alta-networking/outgoingpacketmanager#m-releasepacket), [`OutgoingPacketManager.SendPacket`](/game-api/types/alta-networking/outgoingpacketmanager#m-sendpacket).
