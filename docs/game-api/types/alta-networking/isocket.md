---
title: "ISocket"
description: "interface ISocket in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ISocket

An **interface** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `IDisposable`
- **Derived types** [`FakeSocket`](/game-api/types/alta-networking/fakesocket), [`Socket`](/game-api/types/alta-networking/socket)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectioncount" /><code>{"int ConnectionCount { get; }"}</code> |  |
| <Link id="m-connections" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{"> Connections { get; }"}</code> |  |
| <Link id="m-defaultchannel" /><code><Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" DefaultChannel { get; set; }"}</code> |  |
| <Link id="m-isserver" /><code>{"bool IsServer { get; }"}</code> |  |
| <Link id="m-outgoingqueuesize" /><code>{"int OutgoingQueueSize { get; set; }"}</code> |  |
| <Link id="m-transportsocket" /><code><Link to="/game-api/types/assembly-other/itransportsocket">{"ITransportSocket"}</Link>{" TransportSocket { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-connectioncreated" /><code>{"event "}<Link to="/game-api/types/alta-networking/connectioneventhandler">{"ConnectionEventHandler"}</Link>{" ConnectionCreated"}</code> |  |
| <Link id="m-connectiondestroyed" /><code>{"event "}<Link to="/game-api/types/alta-networking/connectioneventhandler">{"ConnectionEventHandler"}</Link>{" ConnectionDestroyed"}</code> |  |
| <Link id="m-socketdestroyed" /><code>{"event Action<"}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{"> SocketDestroyed"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createconnection" /><code><Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" CreateConnection("}<Link to="/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{" transportConnection, string ipAddress)"}</code> |  |
| <Link id="m-createconnection-2" /><code><Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" CreateConnection(string ipAddress, int port)"}</code> |  |
| <Link id="m-destroyconnection" /><code>{"void DestroyConnection("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, bool isFlushing = false)"}</code> |  |
| <Link id="m-getconnection" /><code><Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" GetConnection(int identifier)"}</code> |  |
| <Link id="m-sendtoall" /><code>{"bool SendToAll("}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel, "}<Link to="/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type, "}<Link to="/game-api/types/alta-networking/serializeconnectionmethod">{"SerializeConnectionMethod"}</Link>{" handler)"}</code> |  |
| <Link id="m-sendtoplayers" /><code>{"bool SendToPlayers("}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel, "}<Link to="/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type, "}<Link to="/game-api/types/alta-networking/serializeconnectionmethod">{"SerializeConnectionMethod"}</Link>{" handler, IEnumerable<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> players)"}</code> |  |
| <Link id="m-updatereceive" /><code>{"void UpdateReceive()"}</code> |  |
| <Link id="m-updatesend" /><code>{"void UpdateSend()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ISocket`:

[`ClientPacketReceiver.ClientPacketReceiver`](/game-api/types/alta-networking/clientpacketreceiver#m-ctor), [`ClientPacketReceiver.Socket`](/game-api/types/alta-networking/clientpacketreceiver#m-socket), [`Connection.Connection`](/game-api/types/alta-networking/connection#m-ctor), [`Connection.Socket`](/game-api/types/alta-networking/connection#m-socket), [`FakeSocket.SocketDestroyed`](/game-api/types/alta-networking/fakesocket#m-socketdestroyed), [`INetworkSceneInternal.Initialize`](/game-api/types/alta-networking/inetworksceneinternal#m-initialize), [`SceneSerializer.SendSerialized`](/game-api/types/alta-networking/sceneserializer#m-sendserialized), [`NetworkManager.CloseSocket`](/game-api/types/alta-networking/networkmanager#m-closesocket), [`NetworkManager.CreateSocket`](/game-api/types/alta-networking/networkmanager#m-createsocket), [`NetworkManager.sockets`](/game-api/types/alta-networking/networkmanager#m-sockets), [`NetworkScene.clientSocket`](/game-api/types/alta-networking/networkscene#m-clientsocket), [`NetworkScene.Initialize`](/game-api/types/alta-networking/networkscene#m-initialize), [`NetworkScene.SendSerialized`](/game-api/types/alta-networking/networkscene#m-sendserialized), [`NetworkScene.serverSocket`](/game-api/types/alta-networking/networkscene#m-serversocket), [`ServerMessageReceiverPerConnection.ServerMessageReceiverPerConnection`](/game-api/types/alta-networking/servermessagereceiverperconnection#m-ctor), [`ServerMessageReceiverPerConnection.socket`](/game-api/types/alta-networking/servermessagereceiverperconnection#m-socket), [`ServerPacketReceiver.ServerPacketReceiver`](/game-api/types/alta-networking/serverpacketreceiver#m-ctor), [`ServerPacketReceiver.Socket`](/game-api/types/alta-networking/serverpacketreceiver#m-socket), [`ConnectToServerUtility.CleanStaticSocket`](/game-api/types/alta-networking/connecttoserverutility#m-cleanstaticsocket), [`ConnectToServerUtility.socket`](/game-api/types/alta-networking/connecttoserverutility#m-socket), [`ServerHandler.ServerHandler`](/game-api/types/alta-networking/serverhandler#m-ctor-2), [`ServerHandler.socket`](/game-api/types/alta-networking/serverhandler#m-socket), [`ServerLifetimePipeline.ServerEnded`](/game-api/types/alta-networking/serverlifetimepipeline#m-serverended), [`Socket.Current`](/game-api/types/alta-networking/socket#m-current), [`Socket.SocketDestroyed`](/game-api/types/alta-networking/socket#m-socketdestroyed), [`SocketEventHandler.BeginInvoke`](/game-api/types/alta-networking/socketeventhandler#m-begininvoke), [`SocketEventHandler.Invoke`](/game-api/types/alta-networking/socketeventhandler#m-invoke), [`JoinServerGameModeBase.DisconnectedFromServer`](/game-api/types/global-i-l/joinservergamemodebase#m-disconnectedfromserver), [`JoinServerPipeline.JoinServerPipeline`](/game-api/types/global-i-l/joinserverpipeline#m-ctor), [`JoinServerPipeline.socket`](/game-api/types/global-i-l/joinserverpipeline#m-socket), [`LocalNetworkScene.Initialize`](/game-api/types/global-i-l/localnetworkscene#m-initialize), [`LocalNetworkScene.SendSerialized`](/game-api/types/global-i-l/localnetworkscene#m-sendserialized).
