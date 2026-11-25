---
title: "KcpClientConnection"
description: "class KcpClientConnection in Alta.NetworkTransport.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# KcpClientConnection

A **class** in `Alta.NetworkTransport.Runtime`, `Alta.NetworkingTransport.Kcp`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`ITransportConnection`](/game-api/types/assembly-other/itransportconnection)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"KcpClientConnection("}<Link to="/game-api/types/assembly-other/kcptransport">{"KcpTransport"}</Link>{" transport, KcpClient client)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-client" /><code>{"private readonly KcpClient client"}</code> |  |
| <Link id="m-transport" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/kcptransport">{"KcpTransport"}</Link>{" transport"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-id" /><code>{"int Id { get; }"}</code> |  |
| <Link id="m-isflooded" /><code>{"bool IsFlooded { get; }"}</code> |  |
| <Link id="m-outgoingbytestotal" /><code>{"int OutgoingBytesTotal { get; private set; }"}</code> |  |
| <Link id="m-outgoingpacketstotal" /><code>{"int OutgoingPacketsTotal { get; private set; }"}</code> |  |
| <Link id="m-outgoingqueuesize" /><code>{"int OutgoingQueueSize { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-disconnected" /><code>{"event Action<"}<Link to="/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{"> Disconnected"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disconnect" /><code><Link to="/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" Disconnect()"}</code> |  |
| <Link id="m-ondisconnected" /><code>{"void OnDisconnected()"}</code> |  |
| <Link id="m-send" /><code><Link to="/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" Send(byte[] data, int byteCount, int highLevelChannel)"}</code> |  |

## Used in

Members of other types that take, return or hold a `KcpClientConnection`:

[`KcpClientWrapper.clientConnection`](/game-api/types/assembly-other/kcpclientwrapper#m-clientconnection).
