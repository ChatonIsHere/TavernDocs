---
title: "Socket"
description: "The game's network socket over a transport: holds all connections, pumps receiving and sending, and sends messages to many players at once."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Socket

A **class** in `Root.Township`, `Alta.Networking`.

The game's network socket over a transport: holds all connections, pumps receiving and sending, and sends messages to many players at once. The live one is `Socket.Current`.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`ISocket`](/mod/game-api/types/alta-networking/isocket), `IDisposable`
- **Documented in** [Sockets and connections](/mod/game-api/networking/connections#socket)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Socket("}<Link to="/mod/game-api/types/assembly-other/itransport">{"ITransport"}</Link>{" transport, int port, bool isServer, "}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{"[] channels, "}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" defaultChannel)"}</code> | Creates a `Socket` from `transport`, `port`, `isServer`, `channels` and `defaultChannel`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-connectionmap" /><code>{"private Dictionary<int, "}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{"> connectionMap"}</code> | Connections by transport connection ID. |
| <Link id="m-connections" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{"> connections"}</code> | All live connections. |
| <Link id="m-connectionstart" /><code>{"private int connectionStart"}</code> | Rotating start index so each frame's send begins with a different connection. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger for this class. |
| <Link id="m-packetreceiver" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/ipacketreceiver">{"IPacketReceiver"}</Link>{" packetReceiver"}</code> | Server or client packet receiver; null until the socket is serving or connected. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectioncount" /><code>{"int ConnectionCount { get; }"}</code> | Number of open connections. |
| <Link id="m-connections-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{"> Connections { get; }"}</code> | All open connections. |
| <Link id="m-current" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" Current { get; set; }"}</code> | The socket in use. Set when a socket is created, or to `FakeSocket.Instance` by `SetFake`. |
| <Link id="m-defaultchannel" /><code><Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" DefaultChannel { get; set; }"}</code> | Channel new connections use by default. |
| <Link id="m-isserver" /><code>{"bool IsServer { get; private set; }"}</code> | True if this socket was created as the server. |
| <Link id="m-outgoingqueuesize" /><code>{"int OutgoingQueueSize { get; set; }"}</code> | Transport's outgoing queue size, refreshed on each `UpdateSend`. |
| <Link id="m-transportsocket" /><code><Link to="/mod/game-api/types/assembly-other/itransportsocket">{"ITransportSocket"}</Link>{" TransportSocket { get; private set; }"}</code> | The underlying transport server or client. |
| <Link id="m-channels" /><code>{"protected "}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{"[] Channels { get; private set; }"}</code> | All channels set up for each connection. |
| <Link id="m-transport" /><code>{"protected "}<Link to="/mod/game-api/types/assembly-other/itransport">{"ITransport"}</Link>{" Transport { get; private set; }"}</code> | The transport this socket runs on. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-connectioncreated" /><code>{"event "}<Link to="/mod/game-api/types/alta-networking/connectioneventhandler">{"ConnectionEventHandler"}</Link>{" ConnectionCreated"}</code> | Raised when a connection is added. |
| <Link id="m-connectiondestroyed" /><code>{"event "}<Link to="/mod/game-api/types/alta-networking/connectioneventhandler">{"ConnectionEventHandler"}</Link>{" ConnectionDestroyed"}</code> | Raised after a connection is removed and disposed. |
| <Link id="m-endofreceival" /><code>{"static event Action EndOfReceival"}</code> | Static one-shot event raised after a receive pass. Handlers are cleared after it fires. |
| <Link id="m-socketdestroyed" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{"> SocketDestroyed"}</code> | Raised when the socket is disposed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createconnection" /><code><Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" CreateConnection(string ipAddress, int port)"}</code> | Client: connects to an address and port. Server: wraps an incoming transport connection. Returns null on failure. |
| <Link id="m-createconnection-2" /><code><Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" CreateConnection("}<Link to="/mod/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{" transportConnection, string ipAddress)"}</code> | Client: connects to an address and port. Server: wraps an incoming transport connection. Returns null on failure. |
| <Link id="m-destroyconnection" /><code>{"void DestroyConnection("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, bool isFlushing = false)"}</code> | Removes and disposes a connection, optionally flushing what's queued first. |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Disposes every connection, terminates the transport and raises `SocketDestroyed`. |
| <Link id="m-getconnection" /><code><Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" GetConnection(int identifier)"}</code> | Finds a connection by its transport id, or null. |
| <Link id="m-sendtoall" /><code>{"bool SendToAll("}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel, "}<Link to="/mod/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type, "}<Link to="/mod/game-api/types/alta-networking/serializeconnectionmethod">{"SerializeConnectionMethod"}</Link>{" method)"}</code> | Serializes a message once and sends it to every connection. False if any send failed. |
| <Link id="m-sendtoplayers" /><code>{"bool SendToPlayers("}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel, "}<Link to="/mod/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type, "}<Link to="/mod/game-api/types/alta-networking/serializeconnectionmethod">{"SerializeConnectionMethod"}</Link>{" method, IEnumerable<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> players)"}</code> | Serializes a message once and sends it to each listed player's connection. False if any send failed. |
| <Link id="m-setfake" /><code>{"static void SetFake()"}</code> | Points `Current` at the fake socket, for running without a network. |
| <Link id="m-updatereceive" /><code>{"void UpdateReceive()"}</code> | Processes queued messages on each connection, receives new packets, then fires `EndOfReceival`. |
| <Link id="m-updatesend" /><code>{"void UpdateSend()"}</code> | Flushes each connection's packet managers (rotating which goes first each frame) and processes the transport's outgoing queue. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onconnectioncreated" /><code>{"private void OnConnectionCreated("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | Raises `ConnectionCreated`. |
| <Link id="m-onconnectiondestroyed" /><code>{"private void OnConnectionDestroyed("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | Raises `ConnectionDestroyed`. |
| <Link id="m-ontransportsocketerror" /><code>{"private void OnTransportSocketError("}<Link to="/mod/game-api/types/assembly-other/altanetworkerror">{"AltaNetworkError"}</Link>{" error)"}</code> | Server: counts each transport error by type in the `NetworkManager` error counters. |

</details>
