---
title: "ISocket"
description: "The game's network socket: owns the list of Connections and sends messages over the transport."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ISocket

An **interface** in `Root.Township`, `Alta.Networking`.

The game's network socket: owns the list of `Connection`s and sends messages over the transport. The live one is `Socket.Current` (a `FakeSocket` when offline); on a server it holds one connection per player.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `IDisposable`
- **Derived types** [`FakeSocket`](/game-api/types/alta-networking/fakesocket), [`Socket`](/game-api/types/alta-networking/socket)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectioncount" /><code>{"int ConnectionCount { get; }"}</code> | Number of open connections. |
| <Link id="m-connections" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{"> Connections { get; }"}</code> | All open connections. |
| <Link id="m-defaultchannel" /><code><Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" DefaultChannel { get; set; }"}</code> | Channel given to new connections as their default. |
| <Link id="m-isserver" /><code>{"bool IsServer { get; }"}</code> | True when this socket was opened as a server. |
| <Link id="m-outgoingqueuesize" /><code>{"int OutgoingQueueSize { get; set; }"}</code> | Size of the transport's outgoing queue, updated each send. |
| <Link id="m-transportsocket" /><code><Link to="/game-api/types/assembly-other/itransportsocket">{"ITransportSocket"}</Link>{" TransportSocket { get; }"}</code> | The low level transport socket underneath. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-connectioncreated" /><code>{"event "}<Link to="/game-api/types/alta-networking/connectioneventhandler">{"ConnectionEventHandler"}</Link>{" ConnectionCreated"}</code> | Raised when a connection is added. |
| <Link id="m-connectiondestroyed" /><code>{"event "}<Link to="/game-api/types/alta-networking/connectioneventhandler">{"ConnectionEventHandler"}</Link>{" ConnectionDestroyed"}</code> | Raised after a connection is removed and disposed. |
| <Link id="m-socketdestroyed" /><code>{"event Action<"}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{"> SocketDestroyed"}</code> | Raised when the socket is shut down. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createconnection" /><code><Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" CreateConnection("}<Link to="/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{" transportConnection, string ipAddress)"}</code> | Adds a connection, either wrapping an incoming transport connection or connecting out to an address and port (`localhost` means 127.0.0.1). |
| <Link id="m-createconnection-2" /><code><Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" CreateConnection(string ipAddress, int port)"}</code> | Adds a connection, either wrapping an incoming transport connection or connecting out to an address and port (`localhost` means 127.0.0.1). |
| <Link id="m-destroyconnection" /><code>{"void DestroyConnection("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, bool isFlushing = false)"}</code> | Removes and disposes a connection, optionally sending its queued packets first, then raises `ConnectionDestroyed`. |
| <Link id="m-getconnection" /><code><Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" GetConnection(int identifier)"}</code> | Finds a connection by its transport id, or null. |
| <Link id="m-sendtoall" /><code>{"bool SendToAll("}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel, "}<Link to="/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type, "}<Link to="/game-api/types/alta-networking/serializeconnectionmethod">{"SerializeConnectionMethod"}</Link>{" handler)"}</code> | Serialises a message once and sends it to every connection. Returns false if any send failed. |
| <Link id="m-sendtoplayers" /><code>{"bool SendToPlayers("}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel, "}<Link to="/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type, "}<Link to="/game-api/types/alta-networking/serializeconnectionmethod">{"SerializeConnectionMethod"}</Link>{" handler, IEnumerable<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> players)"}</code> | Serialises a message once (using the first player's connection) and sends it to each listed player. |
| <Link id="m-updatereceive" /><code>{"void UpdateReceive()"}</code> | Processes each connection's queued messages, then reads new packets from the transport. |
| <Link id="m-updatesend" /><code>{"void UpdateSend()"}</code> | Flushes each connection's outgoing packet managers (rotating who goes first) and sends them. |

## Used in

Members of other types that take, return or hold a `ISocket`:

[`ClientPacketReceiver.ClientPacketReceiver`](/game-api/types/alta-networking/clientpacketreceiver#m-ctor), [`ClientPacketReceiver.Socket`](/game-api/types/alta-networking/clientpacketreceiver#m-socket), [`Connection.Connection`](/game-api/types/alta-networking/connection#m-ctor), [`Connection.Socket`](/game-api/types/alta-networking/connection#m-socket), [`FakeSocket.SocketDestroyed`](/game-api/types/alta-networking/fakesocket#m-socketdestroyed), [`INetworkSceneInternal.Initialize`](/game-api/types/alta-networking/inetworksceneinternal#m-initialize), [`SceneSerializer.SendSerialized`](/game-api/types/alta-networking/sceneserializer#m-sendserialized), [`NetworkManager.CloseSocket`](/game-api/types/alta-networking/networkmanager#m-closesocket), [`NetworkManager.CreateSocket`](/game-api/types/alta-networking/networkmanager#m-createsocket), [`NetworkManager.sockets`](/game-api/types/alta-networking/networkmanager#m-sockets), [`NetworkScene.clientSocket`](/game-api/types/alta-networking/networkscene#m-clientsocket), [`NetworkScene.Initialize`](/game-api/types/alta-networking/networkscene#m-initialize), [`NetworkScene.SendSerialized`](/game-api/types/alta-networking/networkscene#m-sendserialized), [`NetworkScene.serverSocket`](/game-api/types/alta-networking/networkscene#m-serversocket), [`ServerMessageReceiverPerConnection.ServerMessageReceiverPerConnection`](/game-api/types/alta-networking/servermessagereceiverperconnection#m-ctor), [`ServerMessageReceiverPerConnection.socket`](/game-api/types/alta-networking/servermessagereceiverperconnection#m-socket), [`ServerPacketReceiver.ServerPacketReceiver`](/game-api/types/alta-networking/serverpacketreceiver#m-ctor), [`ServerPacketReceiver.Socket`](/game-api/types/alta-networking/serverpacketreceiver#m-socket), [`ConnectToServerUtility.CleanStaticSocket`](/game-api/types/alta-networking/connecttoserverutility#m-cleanstaticsocket), [`ConnectToServerUtility.socket`](/game-api/types/alta-networking/connecttoserverutility#m-socket), [`ServerHandler.ServerHandler`](/game-api/types/alta-networking/serverhandler#m-ctor-2), [`ServerHandler.socket`](/game-api/types/alta-networking/serverhandler#m-socket), [`ServerLifetimePipeline.ServerEnded`](/game-api/types/alta-networking/serverlifetimepipeline#m-serverended), [`Socket.Current`](/game-api/types/alta-networking/socket#m-current), [`Socket.SocketDestroyed`](/game-api/types/alta-networking/socket#m-socketdestroyed), [`SocketEventHandler.BeginInvoke`](/game-api/types/alta-networking/socketeventhandler#m-begininvoke), [`SocketEventHandler.Invoke`](/game-api/types/alta-networking/socketeventhandler#m-invoke), [`JoinServerGameModeBase.DisconnectedFromServer`](/game-api/types/global-i-l/joinservergamemodebase#m-disconnectedfromserver), [`JoinServerPipeline.JoinServerPipeline`](/game-api/types/global-i-l/joinserverpipeline#m-ctor), [`JoinServerPipeline.socket`](/game-api/types/global-i-l/joinserverpipeline#m-socket), [`LocalNetworkScene.Initialize`](/game-api/types/global-i-l/localnetworkscene#m-initialize), [`LocalNetworkScene.SendSerialized`](/game-api/types/global-i-l/localnetworkscene#m-sendserialized).
