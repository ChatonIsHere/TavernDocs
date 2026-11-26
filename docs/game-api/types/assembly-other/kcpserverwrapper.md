---
title: "KcpServerWrapper"
description: "Server side of the KCP transport: wraps a kcp2k KcpServer as an ITransportServer and keeps one KcpServerConnection per connected player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# KcpServerWrapper

A **class** in `Alta.NetworkTransport.Runtime`, `Alta.NetworkingTransport.Kcp`.

Server side of the KCP transport: wraps a kcp2k `KcpServer` as an `ITransportServer` and keeps one `KcpServerConnection` per connected player.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`ITransportServer`](/game-api/types/assembly-other/itransportserver), [`ITransportSocket`](/game-api/types/assembly-other/itransportsocket)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"KcpServerWrapper("}<Link to="/game-api/types/assembly-other/kcptransport">{"KcpTransport"}</Link>{" transport, "}<Link to="/game-api/types/assembly-other/kcpsettings">{"KcpSettings"}</Link>{" settings)"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-connections" /><code>{"private readonly Dictionary<int, "}<Link to="/game-api/types/assembly-other/kcpserverconnection">{"KcpServerConnection"}</Link>{"> connections"}</code> | Current connections keyed by kcp2k connection id. |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> | NLog logger for this class. |
| <Link id="m-processor" /><code>{"private "}<Link to="/game-api/types/assembly-other/ipacketprocessor">{"IPacketProcessor"}</Link>{" processor"}</code> | The packet processor passed to the last `ProcessIncoming` call. |
| <Link id="m-receivebufferscache" /><code>{"private List<byte[]> receiveBuffersCache"}</code> | Declared but never used in this build. |
| <Link id="m-server" /><code>{"private readonly KcpServer server"}</code> | The kcp2k server; a `KcpServerNonAlloc` when `KcpSettings.NonAlloc` is on. |
| <Link id="m-settings" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/kcpsettings">{"KcpSettings"}</Link>{" settings"}</code> | Declared but never assigned; the constructor reads its settings argument directly. |
| <Link id="m-transport" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/kcptransport">{"KcpTransport"}</Link>{" transport"}</code> | The `KcpTransport` this server belongs to, passed to each new connection. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-incomingpacketstotal" /><code>{"int IncomingPacketsTotal { get; private set; }"}</code> | Count of data packets received from all clients since the server wrapper was made. |
| <Link id="m-outgoingbytestotal" /><code>{"int OutgoingBytesTotal { get; }"}</code> | Total bytes sent, summed over all current connections. |
| <Link id="m-outgoingpacketstotal" /><code>{"int OutgoingPacketsTotal { get; }"}</code> | Total packets sent, summed over all current connections. |
| <Link id="m-outgoingqueuesize" /><code>{"int OutgoingQueueSize { get; }"}</code> | Messages waiting in kcp2k's send queues, summed over all connections. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-connectioncreated" /><code>{"event Action<"}<Link to="/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{"> ConnectionCreated"}</code> | Raised with the new connection when a client connects. |
| <Link id="m-connectiondestroyed" /><code>{"event Action<"}<Link to="/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{"> ConnectionDestroyed"}</code> | Raised with the connection after a client disconnects and it is removed from the list. |
| <Link id="m-onerror" /><code>{"event Action<"}<Link to="/game-api/types/assembly-other/altanetworkerror">{"AltaNetworkError"}</Link>{"> OnError"}</code> | Raised with the converted error whenever kcp2k reports one for any connection. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copydataforcache" /><code>{"ArraySegment<byte> CopyDataForCache(ArraySegment<byte> input, int processedBytes = 0)"}</code> | Copies the unprocessed part of a received segment into a pooled 64 KB buffer from `MessageReceivePool`, so it can be kept after the callback. |
| <Link id="m-processincoming" /><code><Link to="/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" ProcessIncoming("}<Link to="/game-api/types/assembly-other/ipacketprocessor">{"IPacketProcessor"}</Link>{" processor)"}</code> | Stores the processor for `HandleData`, then ticks kcp2k's incoming side. Always returns success. |
| <Link id="m-processoutgoing" /><code><Link to="/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" ProcessOutgoing()"}</code> | Ticks kcp2k's outgoing side, flushing queued sends. Always returns success. |
| <Link id="m-start" /><code>{"void Start(ushort port)"}</code> | Starts the kcp2k server listening on the given port. |
| <Link id="m-terminate" /><code><Link to="/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" Terminate()"}</code> | Stops the kcp2k server. Always returns success. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleconnection" /><code>{"private void HandleConnection(int connectionIdentifier)"}</code> | kcp2k connect callback; creates a `KcpServerConnection` for the id, stores it and raises `ConnectionCreated`. |
| <Link id="m-handledata" /><code>{"private void HandleData(int connectionId, ArraySegment<byte> data, KcpChannel channel)"}</code> | kcp2k data callback. Reads the first byte as the game's channel and passes the rest to the processor; logs details and rethrows if that fails. |
| <Link id="m-handledisconnection" /><code>{"private void HandleDisconnection(int connectionIdentifier)"}</code> | kcp2k disconnect callback; removes the connection, marks it disconnected and raises `ConnectionDestroyed`. |
| <Link id="m-handleerror" /><code>{"private void HandleError(int connectionId, ErrorCode error, string message)"}</code> | kcp2k error callback; converts the code to an `AltaNetworkError`, raises `OnError` and logs it with the connection id. |

</details>
