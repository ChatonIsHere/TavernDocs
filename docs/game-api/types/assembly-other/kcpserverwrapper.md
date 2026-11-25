---
title: "KcpServerWrapper"
description: "class KcpServerWrapper in Alta.NetworkTransport.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# KcpServerWrapper

A **class** in `Alta.NetworkTransport.Runtime`, `Alta.NetworkingTransport.Kcp`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`ITransportServer`](/game-api/types/assembly-other/itransportserver), [`ITransportSocket`](/game-api/types/assembly-other/itransportsocket)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"KcpServerWrapper("}<Link to="/game-api/types/assembly-other/kcptransport">{"KcpTransport"}</Link>{" transport, "}<Link to="/game-api/types/assembly-other/kcpsettings">{"KcpSettings"}</Link>{" settings)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-connections" /><code>{"private readonly Dictionary<int, "}<Link to="/game-api/types/assembly-other/kcpserverconnection">{"KcpServerConnection"}</Link>{"> connections"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> |  |
| <Link id="m-processor" /><code>{"private "}<Link to="/game-api/types/assembly-other/ipacketprocessor">{"IPacketProcessor"}</Link>{" processor"}</code> |  |
| <Link id="m-receivebufferscache" /><code>{"private List<byte[]> receiveBuffersCache"}</code> |  |
| <Link id="m-server" /><code>{"private readonly KcpServer server"}</code> |  |
| <Link id="m-settings" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/kcpsettings">{"KcpSettings"}</Link>{" settings"}</code> |  |
| <Link id="m-transport" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/kcptransport">{"KcpTransport"}</Link>{" transport"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-incomingpacketstotal" /><code>{"int IncomingPacketsTotal { get; private set; }"}</code> |  |
| <Link id="m-outgoingbytestotal" /><code>{"int OutgoingBytesTotal { get; }"}</code> |  |
| <Link id="m-outgoingpacketstotal" /><code>{"int OutgoingPacketsTotal { get; }"}</code> |  |
| <Link id="m-outgoingqueuesize" /><code>{"int OutgoingQueueSize { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-connectioncreated" /><code>{"event Action<"}<Link to="/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{"> ConnectionCreated"}</code> |  |
| <Link id="m-connectiondestroyed" /><code>{"event Action<"}<Link to="/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{"> ConnectionDestroyed"}</code> |  |
| <Link id="m-onerror" /><code>{"event Action<"}<Link to="/game-api/types/assembly-other/altanetworkerror">{"AltaNetworkError"}</Link>{"> OnError"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copydataforcache" /><code>{"ArraySegment<byte> CopyDataForCache(ArraySegment<byte> input, int processedBytes = 0)"}</code> |  |
| <Link id="m-processincoming" /><code><Link to="/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" ProcessIncoming("}<Link to="/game-api/types/assembly-other/ipacketprocessor">{"IPacketProcessor"}</Link>{" processor)"}</code> |  |
| <Link id="m-processoutgoing" /><code><Link to="/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" ProcessOutgoing()"}</code> |  |
| <Link id="m-start" /><code>{"void Start(ushort port)"}</code> |  |
| <Link id="m-terminate" /><code><Link to="/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" Terminate()"}</code> |  |
| <Link id="m-handleconnection" /><code>{"private void HandleConnection(int connectionIdentifier)"}</code> |  |
| <Link id="m-handledata" /><code>{"private void HandleData(int connectionId, ArraySegment<byte> data, KcpChannel channel)"}</code> |  |
| <Link id="m-handledisconnection" /><code>{"private void HandleDisconnection(int connectionIdentifier)"}</code> |  |
| <Link id="m-handleerror" /><code>{"private void HandleError(int connectionId, ErrorCode error, string message)"}</code> |  |
