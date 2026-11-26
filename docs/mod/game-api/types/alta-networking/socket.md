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
| <Link id="m-ctor" /><code>{"Socket("}<Link to="/mod/game-api/types/assembly-other/itransport">{"ITransport"}</Link>{" transport, int port, bool isServer, "}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{"[] channels, "}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" defaultChannel)"}</code> | <span className="api-desc">Creates a `Socket` from `transport`, `port`, `isServer`, `channels` and `defaultChannel`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-connectionmap" /><code>{"private Dictionary<int, "}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{"> connectionMap"}</code> | <span className="api-desc">Connections by transport connection ID.</span> |
| <Link id="m-connections" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{"> connections"}</code> | <span className="api-desc">All live connections.</span> |
| <Link id="m-connectionstart" /><code>{"private int connectionStart"}</code> | <span className="api-desc">Rotating start index so each frame's send begins with a different connection.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for this class.</span> |
| <Link id="m-packetreceiver" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/ipacketreceiver">{"IPacketReceiver"}</Link>{" packetReceiver"}</code> | <span className="api-desc">Server or client packet receiver; null until the socket is serving or connected.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectioncount" /><code>{"int ConnectionCount { get; }"}</code> | <span className="api-desc">Number of open connections.</span> |
| <Link id="m-connections-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{"> Connections { get; }"}</code> | <span className="api-desc">All open connections.</span> |
| <Link id="m-current" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" Current { get; set; }"}</code> | <span className="api-desc">The socket in use. Set when a socket is created, or to `FakeSocket.Instance` by `SetFake`.</span> |
| <Link id="m-defaultchannel" /><code><Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" DefaultChannel { get; set; }"}</code> | <span className="api-desc">Channel new connections use by default.</span> |
| <Link id="m-isserver" /><code>{"bool IsServer { get; private set; }"}</code> | <span className="api-desc">True if this socket was created as the server.</span> |
| <Link id="m-outgoingqueuesize" /><code>{"int OutgoingQueueSize { get; set; }"}</code> | <span className="api-desc">Transport's outgoing queue size, refreshed on each `UpdateSend`.</span> |
| <Link id="m-transportsocket" /><code><Link to="/mod/game-api/types/assembly-other/itransportsocket">{"ITransportSocket"}</Link>{" TransportSocket { get; private set; }"}</code> | <span className="api-desc">The underlying transport server or client.</span> |
| <Link id="m-channels" /><code>{"protected "}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{"[] Channels { get; private set; }"}</code> | <span className="api-desc">All channels set up for each connection.</span> |
| <Link id="m-transport" /><code>{"protected "}<Link to="/mod/game-api/types/assembly-other/itransport">{"ITransport"}</Link>{" Transport { get; private set; }"}</code> | <span className="api-desc">The transport this socket runs on.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-connectioncreated" /><code>{"event "}<Link to="/mod/game-api/types/alta-networking/connectioneventhandler">{"ConnectionEventHandler"}</Link>{" ConnectionCreated"}</code> | <span className="api-desc">Raised when a connection is added.</span> |
| <Link id="m-connectiondestroyed" /><code>{"event "}<Link to="/mod/game-api/types/alta-networking/connectioneventhandler">{"ConnectionEventHandler"}</Link>{" ConnectionDestroyed"}</code> | <span className="api-desc">Raised after a connection is removed and disposed.</span> |
| <Link id="m-endofreceival" /><code>{"static event Action EndOfReceival"}</code> | <span className="api-desc">Static one-shot event raised after a receive pass. Handlers are cleared after it fires.</span> |
| <Link id="m-socketdestroyed" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{"> SocketDestroyed"}</code> | <span className="api-desc">Raised when the socket is disposed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createconnection" /><code><Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" CreateConnection(string ipAddress, int port)"}</code> | <span className="api-desc">Client: connects to an address and port. Server: wraps an incoming transport connection. Returns null on failure.</span> |
| <Link id="m-createconnection-2" /><code><Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" CreateConnection("}<Link to="/mod/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{" transportConnection, string ipAddress)"}</code> | <span className="api-desc">Client: connects to an address and port. Server: wraps an incoming transport connection. Returns null on failure.</span> |
| <Link id="m-destroyconnection" /><code>{"void DestroyConnection("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, bool isFlushing = false)"}</code> | <span className="api-desc">Removes and disposes a connection, optionally flushing what's queued first.</span> |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | <span className="api-desc">Disposes every connection, terminates the transport and raises `SocketDestroyed`.</span> |
| <Link id="m-getconnection" /><code><Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" GetConnection(int identifier)"}</code> | <span className="api-desc">Finds a connection by its transport id, or null.</span> |
| <Link id="m-sendtoall" /><code>{"bool SendToAll("}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel, "}<Link to="/mod/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type, "}<Link to="/mod/game-api/types/alta-networking/serializeconnectionmethod">{"SerializeConnectionMethod"}</Link>{" method)"}</code> | <span className="api-desc">Serializes a message once and sends it to every connection. False if any send failed.</span> |
| <Link id="m-sendtoplayers" /><code>{"bool SendToPlayers("}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel, "}<Link to="/mod/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type, "}<Link to="/mod/game-api/types/alta-networking/serializeconnectionmethod">{"SerializeConnectionMethod"}</Link>{" method, IEnumerable<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> players)"}</code> | <span className="api-desc">Serializes a message once and sends it to each listed player's connection. False if any send failed.</span> |
| <Link id="m-setfake" /><code>{"static void SetFake()"}</code> | <span className="api-desc">Points `Current` at the fake socket, for running without a network.</span> |
| <Link id="m-updatereceive" /><code>{"void UpdateReceive()"}</code> | <span className="api-desc">Processes queued messages on each connection, receives new packets, then fires `EndOfReceival`.</span> |
| <Link id="m-updatesend" /><code>{"void UpdateSend()"}</code> | <span className="api-desc">Flushes each connection's packet managers (rotating which goes first each frame) and processes the transport's outgoing queue.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onconnectioncreated" /><code>{"private void OnConnectionCreated("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | <span className="api-desc">Raises `ConnectionCreated`.</span> |
| <Link id="m-onconnectiondestroyed" /><code>{"private void OnConnectionDestroyed("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | <span className="api-desc">Raises `ConnectionDestroyed`.</span> |
| <Link id="m-ontransportsocketerror" /><code>{"private void OnTransportSocketError("}<Link to="/mod/game-api/types/assembly-other/altanetworkerror">{"AltaNetworkError"}</Link>{" error)"}</code> | <span className="api-desc">Server: counts each transport error by type in the `NetworkManager` error counters.</span> |

</details>
