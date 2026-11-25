---
title: "Socket"
description: "Get the current one from Socket.Current (a static ISocket, the last socket made)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Socket

A **class** in `Root.Township`, `Alta.Networking`.

Get the current one from `Socket.Current` (a static `ISocket`, the last socket made).

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`ISocket`](/game-api/types/alta-networking/isocket), `IDisposable`
- **Documented in** [Sockets and connections](/game-api/networking/connections#socket)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Socket("}<Link to="/game-api/types/assembly-other/itransport">{"ITransport"}</Link>{" transport, int port, bool isServer, "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{"[] channels, "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" defaultChannel)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-connectionmap" /><code>{"private Dictionary<int, "}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{"> connectionMap"}</code> |  |
| <Link id="m-connections" /><code>{"private List<"}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{"> connections"}</code> |  |
| <Link id="m-connectionstart" /><code>{"private int connectionStart"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-packetreceiver" /><code>{"private "}<Link to="/game-api/types/alta-networking/ipacketreceiver">{"IPacketReceiver"}</Link>{" packetReceiver"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectioncount" /><code>{"int ConnectionCount { get; }"}</code> |  |
| <Link id="m-connections-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{"> Connections { get; }"}</code> |  |
| <Link id="m-current" /><code>{"static "}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" Current { get; set; }"}</code> |  |
| <Link id="m-defaultchannel" /><code><Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" DefaultChannel { get; set; }"}</code> |  |
| <Link id="m-isserver" /><code>{"bool IsServer { get; private set; }"}</code> |  |
| <Link id="m-outgoingqueuesize" /><code>{"int OutgoingQueueSize { get; set; }"}</code> |  |
| <Link id="m-transportsocket" /><code><Link to="/game-api/types/assembly-other/itransportsocket">{"ITransportSocket"}</Link>{" TransportSocket { get; private set; }"}</code> |  |
| <Link id="m-channels" /><code>{"protected "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{"[] Channels { get; private set; }"}</code> |  |
| <Link id="m-transport" /><code>{"protected "}<Link to="/game-api/types/assembly-other/itransport">{"ITransport"}</Link>{" Transport { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-connectioncreated" /><code>{"event "}<Link to="/game-api/types/alta-networking/connectioneventhandler">{"ConnectionEventHandler"}</Link>{" ConnectionCreated"}</code> |  |
| <Link id="m-connectiondestroyed" /><code>{"event "}<Link to="/game-api/types/alta-networking/connectioneventhandler">{"ConnectionEventHandler"}</Link>{" ConnectionDestroyed"}</code> |  |
| <Link id="m-endofreceival" /><code>{"static event Action EndOfReceival"}</code> |  |
| <Link id="m-socketdestroyed" /><code>{"event Action<"}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{"> SocketDestroyed"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createconnection" /><code><Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" CreateConnection(string ipAddress, int port)"}</code> |  |
| <Link id="m-createconnection-2" /><code><Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" CreateConnection("}<Link to="/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{" transportConnection, string ipAddress)"}</code> |  |
| <Link id="m-destroyconnection" /><code>{"void DestroyConnection("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, bool isFlushing = false)"}</code> |  |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> |  |
| <Link id="m-getconnection" /><code><Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" GetConnection(int identifier)"}</code> |  |
| <Link id="m-sendtoall" /><code>{"bool SendToAll("}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel, "}<Link to="/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type, "}<Link to="/game-api/types/alta-networking/serializeconnectionmethod">{"SerializeConnectionMethod"}</Link>{" method)"}</code> |  |
| <Link id="m-sendtoplayers" /><code>{"bool SendToPlayers("}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel, "}<Link to="/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type, "}<Link to="/game-api/types/alta-networking/serializeconnectionmethod">{"SerializeConnectionMethod"}</Link>{" method, IEnumerable<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> players)"}</code> |  |
| <Link id="m-setfake" /><code>{"static void SetFake()"}</code> |  |
| <Link id="m-updatereceive" /><code>{"void UpdateReceive()"}</code> |  |
| <Link id="m-updatesend" /><code>{"void UpdateSend()"}</code> |  |
| <Link id="m-onconnectioncreated" /><code>{"private void OnConnectionCreated("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> |  |
| <Link id="m-onconnectiondestroyed" /><code>{"private void OnConnectionDestroyed("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> |  |
| <Link id="m-ontransportsocketerror" /><code>{"private void OnTransportSocketError("}<Link to="/game-api/types/assembly-other/altanetworkerror">{"AltaNetworkError"}</Link>{" error)"}</code> |  |
