---
title: "KcpClientConnection"
description: "Client: the ITransportConnection for the client's single KCP connection to the server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# KcpClientConnection

A **class** in `Alta.NetworkTransport.Runtime`, `Alta.NetworkingTransport.Kcp`.

Client: the `ITransportConnection` for the client's single KCP connection to the server.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`ITransportConnection`](/game-api/types/assembly-other/itransportconnection)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"KcpClientConnection("}<Link to="/game-api/types/assembly-other/kcptransport">{"KcpTransport"}</Link>{" transport, KcpClient client)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-client" /><code>{"private readonly KcpClient client"}</code> | The kcp2k client. |
| <Link id="m-transport" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/kcptransport">{"KcpTransport"}</Link>{" transport"}</code> | The `KcpTransport`, used to map game channels to KCP channels. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-id" /><code>{"int Id { get; }"}</code> | Always 0; the client has only one connection. |
| <Link id="m-isflooded" /><code>{"bool IsFlooded { get; }"}</code> | Always false for KCP. |
| <Link id="m-outgoingbytestotal" /><code>{"int OutgoingBytesTotal { get; private set; }"}</code> | Total bytes sent through `Send` (empty sends not counted). |
| <Link id="m-outgoingpacketstotal" /><code>{"int OutgoingPacketsTotal { get; private set; }"}</code> | Total packets sent through `Send` (empty sends not counted). |
| <Link id="m-outgoingqueuesize" /><code>{"int OutgoingQueueSize { get; }"}</code> | Number of messages in the KCP send queue. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-disconnected" /><code>{"event Action<"}<Link to="/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{"> Disconnected"}</code> | Raised by `OnDisconnected` when the connection drops. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disconnect" /><code><Link to="/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" Disconnect()"}</code> | Disconnects the KCP client. |
| <Link id="m-ondisconnected" /><code>{"void OnDisconnected()"}</code> | Raises `Disconnected`; called by the transport. |
| <Link id="m-send" /><code><Link to="/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" Send(byte[] data, int byteCount, int highLevelChannel)"}</code> | Sends the bytes on the KCP channel mapped from the game channel, writing the game channel into the first byte. |

## Used in

Members of other types that take, return or hold a `KcpClientConnection`:

[`KcpClientWrapper.clientConnection`](/game-api/types/assembly-other/kcpclientwrapper#m-clientconnection).
