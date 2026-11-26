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

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Derived types** [`ITransportClient`](/mod/game-api/types/assembly-other/itransportclient), [`ITransportServer`](/mod/game-api/types/assembly-other/itransportserver), [`KcpClientWrapper`](/mod/game-api/types/assembly-other/kcpclientwrapper), [`KcpServerWrapper`](/mod/game-api/types/assembly-other/kcpserverwrapper)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-incomingpacketstotal" /><code>{"int IncomingPacketsTotal { get; }"}</code> | <span className="api-desc">Count of packets received.</span> |
| <Link id="m-outgoingbytestotal" /><code>{"int OutgoingBytesTotal { get; }"}</code> | <span className="api-desc">Count of bytes sent.</span> |
| <Link id="m-outgoingpacketstotal" /><code>{"int OutgoingPacketsTotal { get; }"}</code> | <span className="api-desc">Count of packets sent.</span> |
| <Link id="m-outgoingqueuesize" /><code>{"int OutgoingQueueSize { get; }"}</code> | <span className="api-desc">How many outgoing messages are waiting to be sent.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onerror" /><code>{"event Action<"}<Link to="/mod/game-api/types/assembly-other/altanetworkerror">{"AltaNetworkError"}</Link>{"> OnError"}</code> | <span className="api-desc">Raised when the socket hits a transport error, as an `AltaNetworkError`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copydataforcache" /><code>{"ArraySegment<byte> CopyDataForCache(ArraySegment<byte> input, int processedBytes = 0)"}</code> | <span className="api-desc">Copies received bytes (skipping already-processed ones) into a pooled buffer, so packets can be queued after the receive buffer is reused.</span> |
| <Link id="m-processincoming" /><code><Link to="/mod/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" ProcessIncoming("}<Link to="/mod/game-api/types/assembly-other/ipacketprocessor">{"IPacketProcessor"}</Link>{" processor)"}</code> | <span className="api-desc">Reads waiting incoming data and hands each packet to the given processor.</span> |
| <Link id="m-processoutgoing" /><code><Link to="/mod/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" ProcessOutgoing()"}</code> | <span className="api-desc">Flushes queued outgoing data.</span> |
| <Link id="m-terminate" /><code><Link to="/mod/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" Terminate()"}</code> | <span className="api-desc">Shuts the socket down.</span> |

## Used in

Members of other types that take, return or hold a `ITransportSocket`:

<div className="api-used-in">

[`ClientPacketReceiver.Process`](/mod/game-api/types/alta-networking/clientpacketreceiver#m-process), [`FakeSocket.TransportSocket`](/mod/game-api/types/alta-networking/fakesocket#m-transportsocket), [`ConnectionReceiver.ReceivePacket`](/mod/game-api/types/alta-networking/connectionreceiver#m-receivepacket), [`NormalConnectionReceiver.ReceivePacket`](/mod/game-api/types/alta-networking/normalconnectionreceiver#m-receivepacket), [`QueuedConnectionReceiver.ReceivePacket`](/mod/game-api/types/alta-networking/queuedconnectionreceiver#m-receivepacket), [`ISocket.TransportSocket`](/mod/game-api/types/alta-networking/isocket#m-transportsocket), [`ServerPacketReceiver.Process`](/mod/game-api/types/alta-networking/serverpacketreceiver#m-process), [`Socket.TransportSocket`](/mod/game-api/types/alta-networking/socket#m-transportsocket), [`IPacketProcessor.Process`](/mod/game-api/types/assembly-other/ipacketprocessor#m-process).

</div>
