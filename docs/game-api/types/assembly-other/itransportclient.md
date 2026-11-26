---
title: "ITransportClient"
description: "Client side of a transport: one connection to a server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ITransportClient

An **interface** in `Alta.NetworkTransport.Runtime`, `Alta.NetworkingTransport`.

Client side of a transport: one connection to a server. `ITransport.Connect` returns one.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`ITransportSocket`](/game-api/types/assembly-other/itransportsocket)
- **Derived types** [`KcpClientWrapper`](/game-api/types/assembly-other/kcpclientwrapper)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connection" /><code><Link to="/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{" Connection { get; }"}</code> | The connection to the server. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-approved" /><code>{"event Action<"}<Link to="/game-api/types/assembly-other/itransportclient">{"ITransportClient"}</Link>{"> Approved"}</code> | Raised when the server accepts the connection. |
| <Link id="m-disconnected" /><code>{"event Action<"}<Link to="/game-api/types/assembly-other/itransportclient">{"ITransportClient"}</Link>{"> Disconnected"}</code> | Raised when the connection drops. |

## Used in

Members of other types that take, return or hold a `ITransportClient`:

[`ClientPacketReceiver.CreateConnection`](/game-api/types/alta-networking/clientpacketreceiver#m-createconnection), [`ClientPacketReceiver.DestroyConnection`](/game-api/types/alta-networking/clientpacketreceiver#m-destroyconnection), [`ITransport.Connect`](/game-api/types/assembly-other/itransport#m-connect), [`KcpClientWrapper.Approved`](/game-api/types/assembly-other/kcpclientwrapper#m-approved), [`KcpClientWrapper.Disconnected`](/game-api/types/assembly-other/kcpclientwrapper#m-disconnected), [`KcpTransport.Connect`](/game-api/types/assembly-other/kcptransport#m-connect).
