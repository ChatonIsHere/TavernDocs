---
title: "ITransportConnection"
description: "One player's connection on the server-side network transport (KCP in this build): send data, disconnect and read traffic counters."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ITransportConnection

An **interface** in `Alta.NetworkTransport.Runtime`, `Alta.NetworkingTransport`.

One player's connection on the server-side network transport (KCP in this build): send data, disconnect and read traffic counters.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Derived types** [`KcpClientConnection`](/game-api/types/assembly-other/kcpclientconnection), [`KcpServerConnection`](/game-api/types/assembly-other/kcpserverconnection)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-id" /><code>{"int Id { get; }"}</code> | Transport connection id. |
| <Link id="m-isflooded" /><code>{"bool IsFlooded { get; }"}</code> | Whether the connection is overloaded. Always false for the KCP connection. |
| <Link id="m-outgoingbytestotal" /><code>{"int OutgoingBytesTotal { get; }"}</code> | Total bytes sent on this connection. |
| <Link id="m-outgoingpacketstotal" /><code>{"int OutgoingPacketsTotal { get; }"}</code> | Total packets sent on this connection. |
| <Link id="m-outgoingqueuesize" /><code>{"int OutgoingQueueSize { get; }"}</code> | Messages waiting in the send queue. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-disconnected" /><code>{"event Action<"}<Link to="/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{"> Disconnected"}</code> | Raised when the connection drops. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disconnect" /><code><Link to="/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" Disconnect()"}</code> | Closes the connection. |
| <Link id="m-send" /><code><Link to="/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" Send(byte[] data, int byteCount, int highLevelChannel)"}</code> | Sends the first `byteCount` bytes on a channel. The KCP version overwrites byte 0 with the channel number. |

## Used in

Members of other types that take, return or hold a `ITransportConnection`:

[`Connection.Connection`](/game-api/types/alta-networking/connection#m-ctor), [`Connection.TransportConnection`](/game-api/types/alta-networking/connection#m-transportconnection), [`FakeSocket.CreateConnection`](/game-api/types/alta-networking/fakesocket#m-createconnection-2), [`ISocket.CreateConnection`](/game-api/types/alta-networking/isocket#m-createconnection), [`ServerMessageReceiverPerConnection.HandleConnectionEvent`](/game-api/types/alta-networking/servermessagereceiverperconnection#m-handleconnectionevent), [`ServerPacketReceiver.CreateConnection`](/game-api/types/alta-networking/serverpacketreceiver#m-createconnection), [`ServerPacketReceiver.DestroyConnection`](/game-api/types/alta-networking/serverpacketreceiver#m-destroyconnection), [`Socket.CreateConnection`](/game-api/types/alta-networking/socket#m-createconnection-2), [`ITransportClient.Connection`](/game-api/types/assembly-other/itransportclient#m-connection), [`ITransportServer.ConnectionCreated`](/game-api/types/assembly-other/itransportserver#m-connectioncreated), [`ITransportServer.ConnectionDestroyed`](/game-api/types/assembly-other/itransportserver#m-connectiondestroyed), [`KcpClientConnection.Disconnected`](/game-api/types/assembly-other/kcpclientconnection#m-disconnected), [`KcpClientWrapper.Connection`](/game-api/types/assembly-other/kcpclientwrapper#m-connection), [`KcpServerConnection.Disconnected`](/game-api/types/assembly-other/kcpserverconnection#m-disconnected), [`KcpServerWrapper.ConnectionCreated`](/game-api/types/assembly-other/kcpserverwrapper#m-connectioncreated), [`KcpServerWrapper.ConnectionDestroyed`](/game-api/types/assembly-other/kcpserverwrapper#m-connectiondestroyed).
