---
title: "KcpClientWrapper"
description: "class KcpClientWrapper in Alta.NetworkTransport.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# KcpClientWrapper

A **class** in `Alta.NetworkTransport.Runtime`, `Alta.NetworkingTransport.Kcp`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`ITransportClient`](/game-api/types/assembly-other/itransportclient), [`ITransportSocket`](/game-api/types/assembly-other/itransportsocket)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"KcpClientWrapper("}<Link to="/game-api/types/assembly-other/kcptransport">{"KcpTransport"}</Link>{" transport, "}<Link to="/game-api/types/assembly-other/kcpsettings">{"KcpSettings"}</Link>{" settings)"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-client" /><code>{"private readonly KcpClient client"}</code> |
| <Link id="m-clientconnection" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/kcpclientconnection">{"KcpClientConnection"}</Link>{" clientConnection"}</code> |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> |
| <Link id="m-processor" /><code>{"private "}<Link to="/game-api/types/assembly-other/ipacketprocessor">{"IPacketProcessor"}</Link>{" processor"}</code> |
| <Link id="m-settings" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/kcpsettings">{"KcpSettings"}</Link>{" settings"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-connection" /><code><Link to="/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{" Connection { get; }"}</code> |
| <Link id="m-incomingpacketstotal" /><code>{"int IncomingPacketsTotal { get; private set; }"}</code> |
| <Link id="m-outgoingbytestotal" /><code>{"int OutgoingBytesTotal { get; }"}</code> |
| <Link id="m-outgoingpacketstotal" /><code>{"int OutgoingPacketsTotal { get; }"}</code> |
| <Link id="m-outgoingqueuesize" /><code>{"int OutgoingQueueSize { get; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-approved" /><code>{"event Action<"}<Link to="/game-api/types/assembly-other/itransportclient">{"ITransportClient"}</Link>{"> Approved"}</code> |
| <Link id="m-disconnected" /><code>{"event Action<"}<Link to="/game-api/types/assembly-other/itransportclient">{"ITransportClient"}</Link>{"> Disconnected"}</code> |
| <Link id="m-onerror" /><code>{"event Action<"}<Link to="/game-api/types/assembly-other/altanetworkerror">{"AltaNetworkError"}</Link>{"> OnError"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-connect" /><code>{"void Connect(string ipAddress, ushort port)"}</code> |
| <Link id="m-copydataforcache" /><code>{"ArraySegment<byte> CopyDataForCache(ArraySegment<byte> input, int processedBytes = 0)"}</code> |
| <Link id="m-processincoming" /><code><Link to="/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" ProcessIncoming("}<Link to="/game-api/types/assembly-other/ipacketprocessor">{"IPacketProcessor"}</Link>{" processor)"}</code> |
| <Link id="m-processoutgoing" /><code><Link to="/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" ProcessOutgoing()"}</code> |
| <Link id="m-terminate" /><code><Link to="/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" Terminate()"}</code> |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-handleapproved" /><code>{"private void HandleApproved()"}</code> |
| <Link id="m-handledata" /><code>{"private void HandleData(ArraySegment<byte> data, KcpChannel channel)"}</code> |
| <Link id="m-handledisconnected" /><code>{"private void HandleDisconnected()"}</code> |
| <Link id="m-handleerror" /><code>{"private void HandleError(ErrorCode error, string message)"}</code> |

</details>
