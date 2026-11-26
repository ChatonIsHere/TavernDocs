---
title: "ServerPacketReceiver"
description: "The server's packet receiver."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerPacketReceiver

A **class** in `Root.Township`, `Alta.Networking`.

The server's packet receiver. Each frame it takes packets from the transport, handles unreliable ones per connection, then handles buffered reliable ones, and records timing stats. Server only.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`IPacketReceiver`](/mod/game-api/types/alta-networking/ipacketreceiver), [`IPacketProcessor`](/mod/game-api/types/assembly-other/ipacketprocessor)
- **Nested types** [`ReceivedMessageFromConnection`](/mod/game-api/types/alta-networking/serverpacketreceiver-receivedmessagefromconnection)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerPacketReceiver("}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket)"}</code> | Creates a `ServerPacketReceiver` from `socket`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maximummessagesize" /><code>{"const int MaximumMessageSize"}</code> | Largest message size in bytes (1500). |
| <Link id="m-processingreliablems" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" ProcessingReliableMs"}</code> | Average time spent handling reliable packets per frame. |
| <Link id="m-processingunreliablems" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" ProcessingUnreliableMs"}</code> | Average time spent handling unreliable packets per frame. |
| <Link id="m-receivingms" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" ReceivingMs"}</code> | Average time spent reading from the transport per frame. |
| <Link id="m-reliablemessagesperframe" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" ReliableMessagesPerFrame"}</code> | Average reliable packets handled per frame. |
| <Link id="m-unreliablemessagesperframe" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" UnreliableMessagesPerFrame"}</code> | Average unreliable packets handled per frame. |

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-channels" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{"[] channels"}</code> | The channels from `NetworkingSettings`, used to tell reliable from unreliable. |
| <Link id="m-error" /><code>{"private byte error"}</code> | Unused. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-processingreliabletimer" /><code>{"private Stopwatch processingReliableTimer"}</code> | Stopwatch for reliable handling. |
| <Link id="m-processingunreliabletimer" /><code>{"private Stopwatch processingUnreliableTimer"}</code> | Stopwatch for unreliable handling. |
| <Link id="m-receivers" /><code>{"private Dictionary<int, "}<Link to="/mod/game-api/types/alta-networking/servermessagereceiverperconnection">{"ServerMessageReceiverPerConnection"}</Link>{"> receivers"}</code> | Per-connection receivers by connection id. |
| <Link id="m-receivingtimer" /><code>{"private Stopwatch receivingTimer"}</code> | Stopwatch for reading from the transport. |
| <Link id="m-reliablebuffers" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-networking/serverpacketreceiver-receivedmessagefromconnection">{"ServerPacketReceiver.ReceivedMessageFromConnection"}</Link>{"> reliableBuffers"}</code> | Reliable packets received this frame, reused between frames. |
| <Link id="m-reliablereceivedcount" /><code>{"private int reliableReceivedCount"}</code> | How many entries of `reliableBuffers` are in use this frame. |
| <Link id="m-unregisteredconnectionidentifiers" /><code>{"private HashSet<int> unregisteredConnectionIdentifiers"}</code> | Unknown connection ids already logged, so each is only logged once. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-socket" /><code>{"protected "}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" Socket { get; set; }"}</code> | The socket this receiver works for. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-receivepackets" /><code>{"void ReceivePackets()"}</code> | Runs one frame of receiving and handling, then records the stats. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createconnection" /><code>{"private void CreateConnection("}<Link to="/mod/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{" connection)"}</code> | On a new transport connection, makes or reuses its per-connection receiver and passes the event on. |
| <Link id="m-destroyconnection" /><code>{"private void DestroyConnection("}<Link to="/mod/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{" connection)"}</code> | On transport disconnect, tells the per-connection receiver and removes it. |
| <Link id="m-process" /><code>{"private void Alta.NetworkingTransport.IPacketProcessor.Process("}<Link to="/mod/game-api/types/assembly-other/itransportsocket">{"ITransportSocket"}</Link>{" socket, int connectionId, ArraySegment<byte> data, int channel)"}</code> | Copies a received packet; reliable ones are buffered for this frame, unreliable ones go to the connection's receiver. |

</details>
