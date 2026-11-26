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

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`ITransportClient`](/game-api/types/assembly-other/itransportclient), [`ITransportSocket`](/game-api/types/assembly-other/itransportsocket)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"KcpClientWrapper("}<Link to="/game-api/types/assembly-other/kcptransport">{"KcpTransport"}</Link>{" transport, "}<Link to="/game-api/types/assembly-other/kcpsettings">{"KcpSettings"}</Link>{" settings)"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-client" /><code>{"private readonly KcpClient client"}</code> | The kcp2k client; a `KcpClientNonAlloc` when `KcpSettings.NonAlloc` is on. |
| <Link id="m-clientconnection" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/kcpclientconnection">{"KcpClientConnection"}</Link>{" clientConnection"}</code> | Backing field for `Connection`. |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> | NLog logger for this class. |
| <Link id="m-processor" /><code>{"private "}<Link to="/game-api/types/assembly-other/ipacketprocessor">{"IPacketProcessor"}</Link>{" processor"}</code> | The packet processor passed to the last `ProcessIncoming` call. |
| <Link id="m-settings" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/kcpsettings">{"KcpSettings"}</Link>{" settings"}</code> | The KCP tuning settings this client was made with. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connection" /><code><Link to="/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{" Connection { get; }"}</code> | The single `KcpClientConnection` to the server, used to send data. |
| <Link id="m-incomingpacketstotal" /><code>{"int IncomingPacketsTotal { get; private set; }"}</code> | Count of data packets received and handed to the processor since this wrapper was made. |
| <Link id="m-outgoingbytestotal" /><code>{"int OutgoingBytesTotal { get; }"}</code> | Total bytes sent, taken from the connection. |
| <Link id="m-outgoingpacketstotal" /><code>{"int OutgoingPacketsTotal { get; }"}</code> | Total packets sent, taken from the connection. |
| <Link id="m-outgoingqueuesize" /><code>{"int OutgoingQueueSize { get; }"}</code> | Number of messages waiting in kcp2k's send queue. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-approved" /><code>{"event Action<"}<Link to="/game-api/types/assembly-other/itransportclient">{"ITransportClient"}</Link>{"> Approved"}</code> | Raised when kcp2k reports the connection to the server is up. |
| <Link id="m-disconnected" /><code>{"event Action<"}<Link to="/game-api/types/assembly-other/itransportclient">{"ITransportClient"}</Link>{"> Disconnected"}</code> | Raised after kcp2k reports the connection closed, once the connection object has been told. |
| <Link id="m-onerror" /><code>{"event Action<"}<Link to="/game-api/types/assembly-other/altanetworkerror">{"AltaNetworkError"}</Link>{"> OnError"}</code> | Raised with the converted error whenever kcp2k reports one. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-connect" /><code>{"void Connect(string ipAddress, ushort port)"}</code> | Starts connecting to the given IP and port, passing every tuning value from the `KcpSettings` to kcp2k. |
| <Link id="m-copydataforcache" /><code>{"ArraySegment<byte> CopyDataForCache(ArraySegment<byte> input, int processedBytes = 0)"}</code> | Copies the unprocessed part of a received segment into a pooled 64 KB buffer from `MessageReceivePool`, so it can be kept after the callback. |
| <Link id="m-processincoming" /><code><Link to="/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" ProcessIncoming("}<Link to="/game-api/types/assembly-other/ipacketprocessor">{"IPacketProcessor"}</Link>{" processor)"}</code> | Stores the processor for `HandleData` to use, then ticks kcp2k's incoming side. Always returns success. |
| <Link id="m-processoutgoing" /><code><Link to="/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" ProcessOutgoing()"}</code> | Ticks kcp2k's outgoing side, flushing queued sends. Always returns success. |
| <Link id="m-terminate" /><code><Link to="/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" Terminate()"}</code> | Disconnects the kcp2k client. Always returns success. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleapproved" /><code>{"private void HandleApproved()"}</code> | kcp2k connected callback; raises `Approved`. |
| <Link id="m-handledata" /><code>{"private void HandleData(ArraySegment<byte> data, KcpChannel channel)"}</code> | kcp2k data callback. Reads the first byte as the game's channel, strips it and hands the rest to the current packet processor. |
| <Link id="m-handledisconnected" /><code>{"private void HandleDisconnected()"}</code> | kcp2k disconnected callback; marks the connection disconnected and raises `Disconnected`. |
| <Link id="m-handleerror" /><code>{"private void HandleError(ErrorCode error, string message)"}</code> | kcp2k error callback; converts the code to an `AltaNetworkError`, raises `OnError` and logs it. |

</details>
