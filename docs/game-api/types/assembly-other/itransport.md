---
title: "ITransport"
description: "interface ITransport in Alta.NetworkTransport.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ITransport

An **interface** in `Alta.NetworkTransport.Runtime`, `Alta.NetworkingTransport`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Derived types** [`KcpTransport`](/game-api/types/assembly-other/kcptransport)

## Properties

| Member |
| --- |
| <Link id="m-byteoffset" /><code>{"int ByteOffset { get; }"}</code> |
| <Link id="m-packetsize" /><code>{"int PacketSize { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-connect" /><code><Link to="/game-api/types/assembly-other/itransportclient">{"ITransportClient"}</Link>{" Connect(string ipAddress, int port)"}</code> |
| <Link id="m-createchannel" /><code>{"int CreateChannel(bool isReliable)"}</code> |
| <Link id="m-createserver" /><code><Link to="/game-api/types/assembly-other/itransportserver">{"ITransportServer"}</Link>{" CreateServer(int port)"}</code> |
| <Link id="m-terminate" /><code>{"void Terminate()"}</code> |

## Used in

Members of other types that take, return or hold a `ITransport`:

[`NetworkManager.Transport`](/game-api/types/alta-networking/networkmanager#m-transport), [`Socket.Socket`](/game-api/types/alta-networking/socket#m-ctor), [`Socket.Transport`](/game-api/types/alta-networking/socket#m-transport).
