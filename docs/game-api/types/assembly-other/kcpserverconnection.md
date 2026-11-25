---
title: "KcpServerConnection"
description: "class KcpServerConnection in Alta.NetworkTransport.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# KcpServerConnection

A **class** in `Alta.NetworkTransport.Runtime`, `Alta.NetworkingTransport.Kcp`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`ITransportConnection`](/game-api/types/assembly-other/itransportconnection)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"KcpServerConnection("}<Link to="/game-api/types/assembly-other/kcptransport">{"KcpTransport"}</Link>{" transport, KcpServer server, int connectionId)"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-internalconnection" /><code>{"private readonly KcpServerConnection internalConnection"}</code> |
| <Link id="m-server" /><code>{"private readonly KcpServer server"}</code> |
| <Link id="m-transport" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/kcptransport">{"KcpTransport"}</Link>{" transport"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-id" /><code>{"int Id { get; }"}</code> |
| <Link id="m-isflooded" /><code>{"bool IsFlooded { get; }"}</code> |
| <Link id="m-outgoingbytestotal" /><code>{"int OutgoingBytesTotal { get; private set; }"}</code> |
| <Link id="m-outgoingpacketstotal" /><code>{"int OutgoingPacketsTotal { get; private set; }"}</code> |
| <Link id="m-outgoingqueuesize" /><code>{"int OutgoingQueueSize { get; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-disconnected" /><code>{"event Action<"}<Link to="/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{"> Disconnected"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-disconnect" /><code><Link to="/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" Disconnect()"}</code> |
| <Link id="m-ondisconnected" /><code>{"void OnDisconnected()"}</code> |
| <Link id="m-send" /><code><Link to="/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" Send(byte[] data, int byteCount, int highLevelChannel)"}</code> |

## Used in

Members of other types that take, return or hold a `KcpServerConnection`:

[`KcpServerWrapper.connections`](/game-api/types/assembly-other/kcpserverwrapper#m-connections).
