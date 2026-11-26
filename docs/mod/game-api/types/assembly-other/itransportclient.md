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

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`ITransportSocket`](/mod/game-api/types/assembly-other/itransportsocket)
- **Derived types** [`KcpClientWrapper`](/mod/game-api/types/assembly-other/kcpclientwrapper)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connection" /><code><Link to="/mod/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{" Connection { get; }"}</code> | <span className="api-desc">The connection to the server.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-approved" /><code>{"event Action<"}<Link to="/mod/game-api/types/assembly-other/itransportclient">{"ITransportClient"}</Link>{"> Approved"}</code> | <span className="api-desc">Raised when the server accepts the connection.</span> |
| <Link id="m-disconnected" /><code>{"event Action<"}<Link to="/mod/game-api/types/assembly-other/itransportclient">{"ITransportClient"}</Link>{"> Disconnected"}</code> | <span className="api-desc">Raised when the connection drops.</span> |

## Used in

Members of other types that take, return or hold a `ITransportClient`:

<div className="api-used-in">

[`ClientPacketReceiver.CreateConnection`](/mod/game-api/types/alta-networking/clientpacketreceiver#m-createconnection), [`ClientPacketReceiver.DestroyConnection`](/mod/game-api/types/alta-networking/clientpacketreceiver#m-destroyconnection), [`ITransport.Connect`](/mod/game-api/types/assembly-other/itransport#m-connect), [`KcpClientWrapper.Approved`](/mod/game-api/types/assembly-other/kcpclientwrapper#m-approved), [`KcpClientWrapper.Disconnected`](/mod/game-api/types/assembly-other/kcpclientwrapper#m-disconnected), [`KcpTransport.Connect`](/mod/game-api/types/assembly-other/kcptransport#m-connect).

</div>
