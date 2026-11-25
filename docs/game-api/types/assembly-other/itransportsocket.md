---
title: "ITransportSocket"
description: "interface ITransportSocket in Alta.NetworkTransport.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ITransportSocket

An **interface** in `Alta.NetworkTransport.Runtime`, `Alta.NetworkingTransport`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Derived types** [`ITransportClient`](/game-api/types/assembly-other/itransportclient), [`ITransportServer`](/game-api/types/assembly-other/itransportserver), [`KcpClientWrapper`](/game-api/types/assembly-other/kcpclientwrapper), [`KcpServerWrapper`](/game-api/types/assembly-other/kcpserverwrapper)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-incomingpacketstotal" /><code>{"int IncomingPacketsTotal { get; }"}</code> |  |
| <Link id="m-outgoingbytestotal" /><code>{"int OutgoingBytesTotal { get; }"}</code> |  |
| <Link id="m-outgoingpacketstotal" /><code>{"int OutgoingPacketsTotal { get; }"}</code> |  |
| <Link id="m-outgoingqueuesize" /><code>{"int OutgoingQueueSize { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onerror" /><code>{"event Action<"}<Link to="/game-api/types/assembly-other/altanetworkerror">{"AltaNetworkError"}</Link>{"> OnError"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copydataforcache" /><code>{"ArraySegment<byte> CopyDataForCache(ArraySegment<byte> input, int processedBytes = 0)"}</code> |  |
| <Link id="m-processincoming" /><code><Link to="/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" ProcessIncoming("}<Link to="/game-api/types/assembly-other/ipacketprocessor">{"IPacketProcessor"}</Link>{" processor)"}</code> |  |
| <Link id="m-processoutgoing" /><code><Link to="/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" ProcessOutgoing()"}</code> |  |
| <Link id="m-terminate" /><code><Link to="/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" Terminate()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ITransportSocket`:

[`ClientPacketReceiver.Process`](/game-api/types/alta-networking/clientpacketreceiver#m-process), [`FakeSocket.TransportSocket`](/game-api/types/alta-networking/fakesocket#m-transportsocket), [`ConnectionReceiver.ReceivePacket`](/game-api/types/alta-networking/connectionreceiver#m-receivepacket), [`NormalConnectionReceiver.ReceivePacket`](/game-api/types/alta-networking/normalconnectionreceiver#m-receivepacket), [`QueuedConnectionReceiver.ReceivePacket`](/game-api/types/alta-networking/queuedconnectionreceiver#m-receivepacket), [`ISocket.TransportSocket`](/game-api/types/alta-networking/isocket#m-transportsocket), [`ServerPacketReceiver.Process`](/game-api/types/alta-networking/serverpacketreceiver#m-process), [`Socket.TransportSocket`](/game-api/types/alta-networking/socket#m-transportsocket), [`IPacketProcessor.Process`](/game-api/types/assembly-other/ipacketprocessor#m-process).
