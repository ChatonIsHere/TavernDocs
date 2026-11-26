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
| <Link id="m-ctor" /><code>{"ServerPacketReceiver("}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket)"}</code> | <span className="api-desc">Creates a `ServerPacketReceiver` from `socket`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maximummessagesize" /><code>{"const int MaximumMessageSize"}</code> | <span className="api-desc">Largest message size in bytes (1500).</span> |
| <Link id="m-processingreliablems" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" ProcessingReliableMs"}</code> | <span className="api-desc">Average time spent handling reliable packets per frame.</span> |
| <Link id="m-processingunreliablems" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" ProcessingUnreliableMs"}</code> | <span className="api-desc">Average time spent handling unreliable packets per frame.</span> |
| <Link id="m-receivingms" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" ReceivingMs"}</code> | <span className="api-desc">Average time spent reading from the transport per frame.</span> |
| <Link id="m-reliablemessagesperframe" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" ReliableMessagesPerFrame"}</code> | <span className="api-desc">Average reliable packets handled per frame.</span> |
| <Link id="m-unreliablemessagesperframe" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" UnreliableMessagesPerFrame"}</code> | <span className="api-desc">Average unreliable packets handled per frame.</span> |

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-channels" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{"[] channels"}</code> | <span className="api-desc">The channels from `NetworkingSettings`, used to tell reliable from unreliable.</span> |
| <Link id="m-error" /><code>{"private byte error"}</code> | <span className="api-desc">Unused.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-processingreliabletimer" /><code>{"private Stopwatch processingReliableTimer"}</code> | <span className="api-desc">Stopwatch for reliable handling.</span> |
| <Link id="m-processingunreliabletimer" /><code>{"private Stopwatch processingUnreliableTimer"}</code> | <span className="api-desc">Stopwatch for unreliable handling.</span> |
| <Link id="m-receivers" /><code>{"private Dictionary<int, "}<Link to="/mod/game-api/types/alta-networking/servermessagereceiverperconnection">{"ServerMessageReceiverPerConnection"}</Link>{"> receivers"}</code> | <span className="api-desc">Per-connection receivers by connection id.</span> |
| <Link id="m-receivingtimer" /><code>{"private Stopwatch receivingTimer"}</code> | <span className="api-desc">Stopwatch for reading from the transport.</span> |
| <Link id="m-reliablebuffers" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-networking/serverpacketreceiver-receivedmessagefromconnection">{"ServerPacketReceiver.ReceivedMessageFromConnection"}</Link>{"> reliableBuffers"}</code> | <span className="api-desc">Reliable packets received this frame, reused between frames.</span> |
| <Link id="m-reliablereceivedcount" /><code>{"private int reliableReceivedCount"}</code> | <span className="api-desc">How many entries of `reliableBuffers` are in use this frame.</span> |
| <Link id="m-unregisteredconnectionidentifiers" /><code>{"private HashSet<int> unregisteredConnectionIdentifiers"}</code> | <span className="api-desc">Unknown connection ids already logged, so each is only logged once.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-socket" /><code>{"protected "}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" Socket { get; set; }"}</code> | <span className="api-desc">The socket this receiver works for.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-receivepackets" /><code>{"void ReceivePackets()"}</code> | <span className="api-desc">Runs one frame of receiving and handling, then records the stats.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createconnection" /><code>{"private void CreateConnection("}<Link to="/mod/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{" connection)"}</code> | <span className="api-desc">On a new transport connection, makes or reuses its per-connection receiver and passes the event on.</span> |
| <Link id="m-destroyconnection" /><code>{"private void DestroyConnection("}<Link to="/mod/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{" connection)"}</code> | <span className="api-desc">On transport disconnect, tells the per-connection receiver and removes it.</span> |
| <Link id="m-process" /><code>{"private void Alta.NetworkingTransport.IPacketProcessor.Process("}<Link to="/mod/game-api/types/assembly-other/itransportsocket">{"ITransportSocket"}</Link>{" socket, int connectionId, ArraySegment<byte> data, int channel)"}</code> | <span className="api-desc">Copies a received packet; reliable ones are buffered for this frame, unreliable ones go to the connection's receiver.</span> |

</details>
