---
title: "KcpServerConnection"
description: "Server: the ITransportConnection for one client's KCP connection, wrapping a kcp2k server connection by id."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# KcpServerConnection

A **class** in `Alta.NetworkTransport.Runtime`, `Alta.NetworkingTransport.Kcp`.

Server: the `ITransportConnection` for one client's KCP connection, wrapping a kcp2k server connection by id.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`ITransportConnection`](/mod/game-api/types/assembly-other/itransportconnection)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"KcpServerConnection("}<Link to="/mod/game-api/types/assembly-other/kcptransport">{"KcpTransport"}</Link>{" transport, KcpServer server, int connectionId)"}</code> | <span className="api-desc">Creates a `KcpServerConnection` from `transport`, `server` and `connectionId`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-internalconnection" /><code>{"private readonly KcpServerConnection internalConnection"}</code> | <span className="api-desc">The kcp2k server connection, looked up by id when created.</span> |
| <Link id="m-server" /><code>{"private readonly KcpServer server"}</code> | <span className="api-desc">The kcp2k server.</span> |
| <Link id="m-transport" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-other/kcptransport">{"KcpTransport"}</Link>{" transport"}</code> | <span className="api-desc">The `KcpTransport`, used to map game channels to KCP channels.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-id" /><code>{"int Id { get; }"}</code> | <span className="api-desc">The kcp2k connection id.</span> |
| <Link id="m-isflooded" /><code>{"bool IsFlooded { get; }"}</code> | <span className="api-desc">Always false for KCP.</span> |
| <Link id="m-outgoingbytestotal" /><code>{"int OutgoingBytesTotal { get; private set; }"}</code> | <span className="api-desc">Total bytes sent through `Send` (empty sends not counted).</span> |
| <Link id="m-outgoingpacketstotal" /><code>{"int OutgoingPacketsTotal { get; private set; }"}</code> | <span className="api-desc">Total packets sent through `Send` (empty sends not counted).</span> |
| <Link id="m-outgoingqueuesize" /><code>{"int OutgoingQueueSize { get; }"}</code> | <span className="api-desc">Number of messages in this connection's KCP send queue.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-disconnected" /><code>{"event Action<"}<Link to="/mod/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{"> Disconnected"}</code> | <span className="api-desc">Raised by `OnDisconnected` when the connection drops.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disconnect" /><code><Link to="/mod/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" Disconnect()"}</code> | <span className="api-desc">Disconnects this client from the KCP server.</span> |
| <Link id="m-ondisconnected" /><code>{"void OnDisconnected()"}</code> | <span className="api-desc">Raises `Disconnected`; called by the transport.</span> |
| <Link id="m-send" /><code><Link to="/mod/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" Send(byte[] data, int byteCount, int highLevelChannel)"}</code> | <span className="api-desc">Sends the bytes to this client on the mapped KCP channel, writing the game channel into the first byte.</span> |

## Used in

Members of other types that take, return or hold a `KcpServerConnection`:

<div className="api-used-in">

[`KcpServerWrapper.connections`](/mod/game-api/types/assembly-other/kcpserverwrapper#m-connections).

</div>
