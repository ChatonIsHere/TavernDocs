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

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Derived types** [`KcpClientConnection`](/mod/game-api/types/assembly-other/kcpclientconnection), [`KcpServerConnection`](/mod/game-api/types/assembly-other/kcpserverconnection)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-id" /><code>{"int Id { get; }"}</code> | <span className="api-desc">Transport connection id.</span> |
| <Link id="m-isflooded" /><code>{"bool IsFlooded { get; }"}</code> | <span className="api-desc">Whether the connection is overloaded. Always false for the KCP connection.</span> |
| <Link id="m-outgoingbytestotal" /><code>{"int OutgoingBytesTotal { get; }"}</code> | <span className="api-desc">Total bytes sent on this connection.</span> |
| <Link id="m-outgoingpacketstotal" /><code>{"int OutgoingPacketsTotal { get; }"}</code> | <span className="api-desc">Total packets sent on this connection.</span> |
| <Link id="m-outgoingqueuesize" /><code>{"int OutgoingQueueSize { get; }"}</code> | <span className="api-desc">Messages waiting in the send queue.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-disconnected" /><code>{"event Action<"}<Link to="/mod/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{"> Disconnected"}</code> | <span className="api-desc">Raised when the connection drops.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disconnect" /><code><Link to="/mod/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" Disconnect()"}</code> | <span className="api-desc">Closes the connection.</span> |
| <Link id="m-send" /><code><Link to="/mod/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" Send(byte[] data, int byteCount, int highLevelChannel)"}</code> | <span className="api-desc">Sends the first `byteCount` bytes on a channel. The KCP version overwrites byte 0 with the channel number.</span> |

## Used in

Members of other types that take, return or hold a `ITransportConnection`:

<div className="api-used-in">

[`Connection.Connection`](/mod/game-api/types/alta-networking/connection#m-ctor), [`Connection.TransportConnection`](/mod/game-api/types/alta-networking/connection#m-transportconnection), [`FakeSocket.CreateConnection`](/mod/game-api/types/alta-networking/fakesocket#m-createconnection-2), [`ISocket.CreateConnection`](/mod/game-api/types/alta-networking/isocket#m-createconnection), [`ServerMessageReceiverPerConnection.HandleConnectionEvent`](/mod/game-api/types/alta-networking/servermessagereceiverperconnection#m-handleconnectionevent), [`ServerPacketReceiver.CreateConnection`](/mod/game-api/types/alta-networking/serverpacketreceiver#m-createconnection), [`ServerPacketReceiver.DestroyConnection`](/mod/game-api/types/alta-networking/serverpacketreceiver#m-destroyconnection), [`Socket.CreateConnection`](/mod/game-api/types/alta-networking/socket#m-createconnection-2), [`ITransportClient.Connection`](/mod/game-api/types/assembly-other/itransportclient#m-connection), [`ITransportServer.ConnectionCreated`](/mod/game-api/types/assembly-other/itransportserver#m-connectioncreated), [`ITransportServer.ConnectionDestroyed`](/mod/game-api/types/assembly-other/itransportserver#m-connectiondestroyed), [`KcpClientConnection.Disconnected`](/mod/game-api/types/assembly-other/kcpclientconnection#m-disconnected), [`KcpClientWrapper.Connection`](/mod/game-api/types/assembly-other/kcpclientwrapper#m-connection), [`KcpServerConnection.Disconnected`](/mod/game-api/types/assembly-other/kcpserverconnection#m-disconnected), [`KcpServerWrapper.ConnectionCreated`](/mod/game-api/types/assembly-other/kcpserverwrapper#m-connectioncreated), [`KcpServerWrapper.ConnectionDestroyed`](/mod/game-api/types/assembly-other/kcpserverwrapper#m-connectiondestroyed).

</div>
