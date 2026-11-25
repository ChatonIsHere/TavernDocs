---
title: "ServerPacketReceiver"
description: "class ServerPacketReceiver in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerPacketReceiver

A **class** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`IPacketReceiver`](/game-api/types/alta-networking/ipacketreceiver), [`IPacketProcessor`](/game-api/types/assembly-other/ipacketprocessor)
- **Nested types** [`ReceivedMessageFromConnection`](/game-api/types/alta-networking/serverpacketreceiver-receivedmessagefromconnection)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerPacketReceiver("}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maximummessagesize" /><code>{"const int MaximumMessageSize"}</code> |  |
| <Link id="m-processingreliablems" /><code>{"static "}<Link to="/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" ProcessingReliableMs"}</code> |  |
| <Link id="m-processingunreliablems" /><code>{"static "}<Link to="/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" ProcessingUnreliableMs"}</code> |  |
| <Link id="m-receivingms" /><code>{"static "}<Link to="/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" ReceivingMs"}</code> |  |
| <Link id="m-reliablemessagesperframe" /><code>{"static "}<Link to="/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" ReliableMessagesPerFrame"}</code> |  |
| <Link id="m-unreliablemessagesperframe" /><code>{"static "}<Link to="/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" UnreliableMessagesPerFrame"}</code> |  |
| <Link id="m-channels" /><code>{"private "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{"[] channels"}</code> |  |
| <Link id="m-error" /><code>{"private byte error"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-processingreliabletimer" /><code>{"private Stopwatch processingReliableTimer"}</code> |  |
| <Link id="m-processingunreliabletimer" /><code>{"private Stopwatch processingUnreliableTimer"}</code> |  |
| <Link id="m-receivers" /><code>{"private Dictionary<int, "}<Link to="/game-api/types/alta-networking/servermessagereceiverperconnection">{"ServerMessageReceiverPerConnection"}</Link>{"> receivers"}</code> |  |
| <Link id="m-receivingtimer" /><code>{"private Stopwatch receivingTimer"}</code> |  |
| <Link id="m-reliablebuffers" /><code>{"private List<"}<Link to="/game-api/types/alta-networking/serverpacketreceiver-receivedmessagefromconnection">{"ServerPacketReceiver.ReceivedMessageFromConnection"}</Link>{"> reliableBuffers"}</code> |  |
| <Link id="m-reliablereceivedcount" /><code>{"private int reliableReceivedCount"}</code> |  |
| <Link id="m-unregisteredconnectionidentifiers" /><code>{"private HashSet<int> unregisteredConnectionIdentifiers"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-socket" /><code>{"protected "}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" Socket { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-receivepackets" /><code>{"void ReceivePackets()"}</code> |  |
| <Link id="m-createconnection" /><code>{"private void CreateConnection("}<Link to="/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{" connection)"}</code> |  |
| <Link id="m-destroyconnection" /><code>{"private void DestroyConnection("}<Link to="/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{" connection)"}</code> |  |
| <Link id="m-process" /><code>{"private void Alta.NetworkingTransport.IPacketProcessor.Process("}<Link to="/game-api/types/assembly-other/itransportsocket">{"ITransportSocket"}</Link>{" socket, int connectionId, ArraySegment<byte> data, int channel)"}</code> |  |
