---
title: "KcpClientWrapper"
description: "Client side of the KCP transport: wraps a kcp2k KcpClient as an ITransportClient, so the game's networking can connect, tick and receive through it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# KcpClientWrapper

A **class** in `Alta.NetworkTransport.Runtime`, `Alta.NetworkingTransport.Kcp`.

Client side of the KCP transport: wraps a kcp2k `KcpClient` as an `ITransportClient`, so the game's networking can connect, tick and receive through it.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`ITransportClient`](/mod/game-api/types/assembly-other/itransportclient), [`ITransportSocket`](/mod/game-api/types/assembly-other/itransportsocket)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"KcpClientWrapper("}<Link to="/mod/game-api/types/assembly-other/kcptransport">{"KcpTransport"}</Link>{" transport, "}<Link to="/mod/game-api/types/assembly-other/kcpsettings">{"KcpSettings"}</Link>{" settings)"}</code> | <span className="api-desc">Creates a `KcpClientWrapper` from `transport` and `settings`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-client" /><code>{"private readonly KcpClient client"}</code> | <span className="api-desc">The kcp2k client; a `KcpClientNonAlloc` when `KcpSettings.NonAlloc` is on.</span> |
| <Link id="m-clientconnection" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-other/kcpclientconnection">{"KcpClientConnection"}</Link>{" clientConnection"}</code> | <span className="api-desc">Backing field for `Connection`.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-processor" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/ipacketprocessor">{"IPacketProcessor"}</Link>{" processor"}</code> | <span className="api-desc">The packet processor passed to the last `ProcessIncoming` call.</span> |
| <Link id="m-settings" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-other/kcpsettings">{"KcpSettings"}</Link>{" settings"}</code> | <span className="api-desc">The KCP tuning settings this client was made with.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connection" /><code><Link to="/mod/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{" Connection { get; }"}</code> | <span className="api-desc">The single `KcpClientConnection` to the server, used to send data.</span> |
| <Link id="m-incomingpacketstotal" /><code>{"int IncomingPacketsTotal { get; private set; }"}</code> | <span className="api-desc">Count of data packets received and handed to the processor since this wrapper was made.</span> |
| <Link id="m-outgoingbytestotal" /><code>{"int OutgoingBytesTotal { get; }"}</code> | <span className="api-desc">Total bytes sent, taken from the connection.</span> |
| <Link id="m-outgoingpacketstotal" /><code>{"int OutgoingPacketsTotal { get; }"}</code> | <span className="api-desc">Total packets sent, taken from the connection.</span> |
| <Link id="m-outgoingqueuesize" /><code>{"int OutgoingQueueSize { get; }"}</code> | <span className="api-desc">Number of messages waiting in kcp2k's send queue.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-approved" /><code>{"event Action<"}<Link to="/mod/game-api/types/assembly-other/itransportclient">{"ITransportClient"}</Link>{"> Approved"}</code> | <span className="api-desc">Raised when kcp2k reports the connection to the server is up.</span> |
| <Link id="m-disconnected" /><code>{"event Action<"}<Link to="/mod/game-api/types/assembly-other/itransportclient">{"ITransportClient"}</Link>{"> Disconnected"}</code> | <span className="api-desc">Raised after kcp2k reports the connection closed, once the connection object has been told.</span> |
| <Link id="m-onerror" /><code>{"event Action<"}<Link to="/mod/game-api/types/assembly-other/altanetworkerror">{"AltaNetworkError"}</Link>{"> OnError"}</code> | <span className="api-desc">Raised with the converted error whenever kcp2k reports one.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-connect" /><code>{"void Connect(string ipAddress, ushort port)"}</code> | <span className="api-desc">Starts connecting to the given IP and port, passing every tuning value from the `KcpSettings` to kcp2k.</span> |
| <Link id="m-copydataforcache" /><code>{"ArraySegment<byte> CopyDataForCache(ArraySegment<byte> input, int processedBytes = 0)"}</code> | <span className="api-desc">Copies the unprocessed part of a received segment into a pooled 64 KB buffer from `MessageReceivePool`, so it can be kept after the callback.</span> |
| <Link id="m-processincoming" /><code><Link to="/mod/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" ProcessIncoming("}<Link to="/mod/game-api/types/assembly-other/ipacketprocessor">{"IPacketProcessor"}</Link>{" processor)"}</code> | <span className="api-desc">Stores the processor for `HandleData` to use, then ticks kcp2k's incoming side. Always returns success.</span> |
| <Link id="m-processoutgoing" /><code><Link to="/mod/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" ProcessOutgoing()"}</code> | <span className="api-desc">Ticks kcp2k's outgoing side, flushing queued sends. Always returns success.</span> |
| <Link id="m-terminate" /><code><Link to="/mod/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" Terminate()"}</code> | <span className="api-desc">Disconnects the kcp2k client. Always returns success.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleapproved" /><code>{"private void HandleApproved()"}</code> | <span className="api-desc">kcp2k connected callback; raises `Approved`.</span> |
| <Link id="m-handledata" /><code>{"private void HandleData(ArraySegment<byte> data, KcpChannel channel)"}</code> | <span className="api-desc">kcp2k data callback. Reads the first byte as the game's channel, strips it and hands the rest to the current packet processor.</span> |
| <Link id="m-handledisconnected" /><code>{"private void HandleDisconnected()"}</code> | <span className="api-desc">kcp2k disconnected callback; marks the connection disconnected and raises `Disconnected`.</span> |
| <Link id="m-handleerror" /><code>{"private void HandleError(ErrorCode error, string message)"}</code> | <span className="api-desc">kcp2k error callback; converts the code to an `AltaNetworkError`, raises `OnError` and logs it.</span> |

</details>
