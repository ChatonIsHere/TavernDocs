---
title: "ITransportSocket"
description: "A network socket in Alta's transport layer, with traffic counters and process calls."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ITransportSocket

An **interface** in `Alta.NetworkTransport.Runtime`, `Alta.NetworkingTransport`.

A network socket in Alta's transport layer, with traffic counters and process calls. KCP client and server wrappers implement it.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Derived types** [`ITransportClient`](/game-api/types/assembly-other/itransportclient), [`ITransportServer`](/game-api/types/assembly-other/itransportserver), [`KcpClientWrapper`](/game-api/types/assembly-other/kcpclientwrapper), [`KcpServerWrapper`](/game-api/types/assembly-other/kcpserverwrapper)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-incomingpacketstotal" /><code>{"int IncomingPacketsTotal { get; }"}</code> | Count of packets received. |
| <Link id="m-outgoingbytestotal" /><code>{"int OutgoingBytesTotal { get; }"}</code> | Count of bytes sent. |
| <Link id="m-outgoingpacketstotal" /><code>{"int OutgoingPacketsTotal { get; }"}</code> | Count of packets sent. |
| <Link id="m-outgoingqueuesize" /><code>{"int OutgoingQueueSize { get; }"}</code> | How many outgoing messages are waiting to be sent. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onerror" /><code>{"event Action<"}<Link to="/game-api/types/assembly-other/altanetworkerror">{"AltaNetworkError"}</Link>{"> OnError"}</code> | Raised when the socket hits a transport error, as an `AltaNetworkError`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copydataforcache" /><code>{"ArraySegment<byte> CopyDataForCache(ArraySegment<byte> input, int processedBytes = 0)"}</code> | Copies received bytes (skipping already-processed ones) into a pooled buffer, so packets can be queued after the receive buffer is reused. |
| <Link id="m-processincoming" /><code><Link to="/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" ProcessIncoming("}<Link to="/game-api/types/assembly-other/ipacketprocessor">{"IPacketProcessor"}</Link>{" processor)"}</code> | Reads waiting incoming data and hands each packet to the given processor. |
| <Link id="m-processoutgoing" /><code><Link to="/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" ProcessOutgoing()"}</code> | Flushes queued outgoing data. |
| <Link id="m-terminate" /><code><Link to="/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" Terminate()"}</code> | Shuts the socket down. |

## Used in

Members of other types that take, return or hold a `ITransportSocket`:

[`ClientPacketReceiver.Process`](/game-api/types/alta-networking/clientpacketreceiver#m-process), [`FakeSocket.TransportSocket`](/game-api/types/alta-networking/fakesocket#m-transportsocket), [`ConnectionReceiver.ReceivePacket`](/game-api/types/alta-networking/connectionreceiver#m-receivepacket), [`NormalConnectionReceiver.ReceivePacket`](/game-api/types/alta-networking/normalconnectionreceiver#m-receivepacket), [`QueuedConnectionReceiver.ReceivePacket`](/game-api/types/alta-networking/queuedconnectionreceiver#m-receivepacket), [`ISocket.TransportSocket`](/game-api/types/alta-networking/isocket#m-transportsocket), [`ServerPacketReceiver.Process`](/game-api/types/alta-networking/serverpacketreceiver#m-process), [`Socket.TransportSocket`](/game-api/types/alta-networking/socket#m-transportsocket), [`IPacketProcessor.Process`](/game-api/types/assembly-other/ipacketprocessor#m-process).
