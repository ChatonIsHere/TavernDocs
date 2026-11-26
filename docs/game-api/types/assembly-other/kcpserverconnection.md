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

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`ITransportConnection`](/game-api/types/assembly-other/itransportconnection)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"KcpServerConnection("}<Link to="/game-api/types/assembly-other/kcptransport">{"KcpTransport"}</Link>{" transport, KcpServer server, int connectionId)"}</code> | Creates a `KcpServerConnection` from `transport`, `server` and `connectionId`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-internalconnection" /><code>{"private readonly KcpServerConnection internalConnection"}</code> | The kcp2k server connection, looked up by id when created. |
| <Link id="m-server" /><code>{"private readonly KcpServer server"}</code> | The kcp2k server. |
| <Link id="m-transport" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/kcptransport">{"KcpTransport"}</Link>{" transport"}</code> | The `KcpTransport`, used to map game channels to KCP channels. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-id" /><code>{"int Id { get; }"}</code> | The kcp2k connection id. |
| <Link id="m-isflooded" /><code>{"bool IsFlooded { get; }"}</code> | Always false for KCP. |
| <Link id="m-outgoingbytestotal" /><code>{"int OutgoingBytesTotal { get; private set; }"}</code> | Total bytes sent through `Send` (empty sends not counted). |
| <Link id="m-outgoingpacketstotal" /><code>{"int OutgoingPacketsTotal { get; private set; }"}</code> | Total packets sent through `Send` (empty sends not counted). |
| <Link id="m-outgoingqueuesize" /><code>{"int OutgoingQueueSize { get; }"}</code> | Number of messages in this connection's KCP send queue. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-disconnected" /><code>{"event Action<"}<Link to="/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{"> Disconnected"}</code> | Raised by `OnDisconnected` when the connection drops. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disconnect" /><code><Link to="/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" Disconnect()"}</code> | Disconnects this client from the KCP server. |
| <Link id="m-ondisconnected" /><code>{"void OnDisconnected()"}</code> | Raises `Disconnected`; called by the transport. |
| <Link id="m-send" /><code><Link to="/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" Send(byte[] data, int byteCount, int highLevelChannel)"}</code> | Sends the bytes to this client on the mapped KCP channel, writing the game channel into the first byte. |

## Used in

Members of other types that take, return or hold a `KcpServerConnection`:

[`KcpServerWrapper.connections`](/game-api/types/assembly-other/kcpserverwrapper#m-connections).
