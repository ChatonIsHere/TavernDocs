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

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`ITransportServer`](/mod/game-api/types/assembly-other/itransportserver), [`ITransportSocket`](/mod/game-api/types/assembly-other/itransportsocket)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"KcpServerWrapper("}<Link to="/mod/game-api/types/assembly-other/kcptransport">{"KcpTransport"}</Link>{" transport, "}<Link to="/mod/game-api/types/assembly-other/kcpsettings">{"KcpSettings"}</Link>{" settings)"}</code> | <span className="api-desc">Creates a `KcpServerWrapper` from `transport` and `settings`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-connections" /><code>{"private readonly Dictionary<int, "}<Link to="/mod/game-api/types/assembly-other/kcpserverconnection">{"KcpServerConnection"}</Link>{"> connections"}</code> | <span className="api-desc">Current connections keyed by kcp2k connection id.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-processor" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/ipacketprocessor">{"IPacketProcessor"}</Link>{" processor"}</code> | <span className="api-desc">The packet processor passed to the last `ProcessIncoming` call.</span> |
| <Link id="m-receivebufferscache" /><code>{"private List<byte[]> receiveBuffersCache"}</code> | <span className="api-desc">Declared but never used in this build.</span> |
| <Link id="m-server" /><code>{"private readonly KcpServer server"}</code> | <span className="api-desc">The kcp2k server; a `KcpServerNonAlloc` when `KcpSettings.NonAlloc` is on.</span> |
| <Link id="m-settings" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-other/kcpsettings">{"KcpSettings"}</Link>{" settings"}</code> | <span className="api-desc">Declared but never assigned; the constructor reads its settings argument directly.</span> |
| <Link id="m-transport" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-other/kcptransport">{"KcpTransport"}</Link>{" transport"}</code> | <span className="api-desc">The `KcpTransport` this server belongs to, passed to each new connection.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-incomingpacketstotal" /><code>{"int IncomingPacketsTotal { get; private set; }"}</code> | <span className="api-desc">Count of data packets received from all clients since the server wrapper was made.</span> |
| <Link id="m-outgoingbytestotal" /><code>{"int OutgoingBytesTotal { get; }"}</code> | <span className="api-desc">Total bytes sent, summed over all current connections.</span> |
| <Link id="m-outgoingpacketstotal" /><code>{"int OutgoingPacketsTotal { get; }"}</code> | <span className="api-desc">Total packets sent, summed over all current connections.</span> |
| <Link id="m-outgoingqueuesize" /><code>{"int OutgoingQueueSize { get; }"}</code> | <span className="api-desc">Messages waiting in kcp2k's send queues, summed over all connections.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-connectioncreated" /><code>{"event Action<"}<Link to="/mod/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{"> ConnectionCreated"}</code> | <span className="api-desc">Raised with the new connection when a client connects.</span> |
| <Link id="m-connectiondestroyed" /><code>{"event Action<"}<Link to="/mod/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{"> ConnectionDestroyed"}</code> | <span className="api-desc">Raised with the connection after a client disconnects and it is removed from the list.</span> |
| <Link id="m-onerror" /><code>{"event Action<"}<Link to="/mod/game-api/types/assembly-other/altanetworkerror">{"AltaNetworkError"}</Link>{"> OnError"}</code> | <span className="api-desc">Raised with the converted error whenever kcp2k reports one for any connection.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copydataforcache" /><code>{"ArraySegment<byte> CopyDataForCache(ArraySegment<byte> input, int processedBytes = 0)"}</code> | <span className="api-desc">Copies the unprocessed part of a received segment into a pooled 64 KB buffer from `MessageReceivePool`, so it can be kept after the callback.</span> |
| <Link id="m-processincoming" /><code><Link to="/mod/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" ProcessIncoming("}<Link to="/mod/game-api/types/assembly-other/ipacketprocessor">{"IPacketProcessor"}</Link>{" processor)"}</code> | <span className="api-desc">Stores the processor for `HandleData`, then ticks kcp2k's incoming side. Always returns success.</span> |
| <Link id="m-processoutgoing" /><code><Link to="/mod/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" ProcessOutgoing()"}</code> | <span className="api-desc">Ticks kcp2k's outgoing side, flushing queued sends. Always returns success.</span> |
| <Link id="m-start" /><code>{"void Start(ushort port)"}</code> | <span className="api-desc">Starts the kcp2k server listening on the given port.</span> |
| <Link id="m-terminate" /><code><Link to="/mod/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" Terminate()"}</code> | <span className="api-desc">Stops the kcp2k server. Always returns success.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleconnection" /><code>{"private void HandleConnection(int connectionIdentifier)"}</code> | <span className="api-desc">kcp2k connect callback; creates a `KcpServerConnection` for the id, stores it and raises `ConnectionCreated`.</span> |
| <Link id="m-handledata" /><code>{"private void HandleData(int connectionId, ArraySegment<byte> data, KcpChannel channel)"}</code> | <span className="api-desc">kcp2k data callback. Reads the first byte as the game's channel and passes the rest to the processor; logs details and rethrows if that fails.</span> |
| <Link id="m-handledisconnection" /><code>{"private void HandleDisconnection(int connectionIdentifier)"}</code> | <span className="api-desc">kcp2k disconnect callback; removes the connection, marks it disconnected and raises `ConnectionDestroyed`.</span> |
| <Link id="m-handleerror" /><code>{"private void HandleError(int connectionId, ErrorCode error, string message)"}</code> | <span className="api-desc">kcp2k error callback; converts the code to an `AltaNetworkError`, raises `OnError` and logs it with the connection id.</span> |

</details>
