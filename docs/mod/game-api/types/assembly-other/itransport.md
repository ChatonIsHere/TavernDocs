---
title: "ITransport"
description: "A low-level network transport that Socket sends packets over."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ITransport

An **interface** in `Alta.NetworkTransport.Runtime`, `Alta.NetworkingTransport`.

A low-level network transport that `Socket` sends packets over. `KcpTransport` is the implementation in this build.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Derived types** [`KcpTransport`](/mod/game-api/types/assembly-other/kcptransport)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-byteoffset" /><code>{"int ByteOffset { get; }"}</code> | Bytes the transport reserves at the start of each packet for its own header. |
| <Link id="m-packetsize" /><code>{"int PacketSize { get; }"}</code> | Largest packet the transport sends, in bytes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-connect" /><code><Link to="/mod/game-api/types/assembly-other/itransportclient">{"ITransportClient"}</Link>{" Connect(string ipAddress, int port)"}</code> | Opens a client connection to an IP address and port. |
| <Link id="m-createchannel" /><code>{"int CreateChannel(bool isReliable)"}</code> | Creates a reliable or unreliable channel and returns its id. |
| <Link id="m-createserver" /><code><Link to="/mod/game-api/types/assembly-other/itransportserver">{"ITransportServer"}</Link>{" CreateServer(int port)"}</code> | Starts listening for connections on a port. |
| <Link id="m-terminate" /><code>{"void Terminate()"}</code> | Shuts the transport down. |

## Used in

Members of other types that take, return or hold a `ITransport`:

[`NetworkManager.Transport`](/mod/game-api/types/alta-networking/networkmanager#m-transport), [`Socket.Socket`](/mod/game-api/types/alta-networking/socket#m-ctor), [`Socket.Transport`](/mod/game-api/types/alta-networking/socket#m-transport).
