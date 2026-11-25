---
title: "Connection"
description: "One network link between the server and a client: per channel send queues, receivers and a table of message handlers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Connection

A **class** in `Root.Township`, `Alta.Networking`.

One network link between the server and a client: per channel send queues, receivers and a table of message handlers. The server has one per connected client (`Player.ConnectionToRemotePlayer`); a client has one to the server.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`IConnection`](/game-api/types/global-i-l/iconnection)
- **Documented in** [Sockets and connections](/game-api/networking/connections#connection)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Connection("}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket, "}<Link to="/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{" connection, string ipAddress, "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{"[] channels)"}</code> |

## Fields

<details>
<summary>17 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-channels" /><code>{"private "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{"[] channels"}</code> |
| <Link id="m-clientpausedisconnectcancel" /><code>{"private CancellationTokenSource clientPauseDisconnectCancel"}</code> |
| <Link id="m-ipaddress" /><code>{"private readonly string IpAddress"}</code> |
| <Link id="m-isdisposed" /><code>{"private bool isDisposed"}</code> |
| <Link id="m-isflooded" /><code>{"private bool isFlooded"}</code> |
| <Link id="m-isqueuelimitwarned" /><code>{"private bool isQueueLimitWarned"}</code> |
| <Link id="m-isqueuingsends" /><code>{"private bool IsQueuingSends"}</code> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |
| <Link id="m-maxconnectionqueuesize" /><code>{"private readonly int MaxConnectionQueueSize"}</code> |
| <Link id="m-maxserverqueuesize" /><code>{"private readonly int MaxServerQueueSize"}</code> |
| <Link id="m-messagehandlers" /><code>{"private readonly Dictionary<"}<Link to="/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{", "}<Link to="/game-api/types/alta-networking/serializeconnectionmethod">{"SerializeConnectionMethod"}</Link>{"> messageHandlers"}</code> |
| <Link id="m-outgoingpacketmanagers" /><code>{"private readonly List<"}<Link to="/game-api/types/alta-networking/outgoingpacketmanager">{"OutgoingPacketManager"}</Link>{"> outgoingPacketManagers"}</code> |
| <Link id="m-outgoingqueuesize" /><code>{"private int outgoingQueueSize"}</code> |
| <Link id="m-packetmanagermap" /><code>{"private readonly Dictionary<"}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{", "}<Link to="/game-api/types/alta-networking/outgoingpacketmanager">{"OutgoingPacketManager"}</Link>{"> packetManagerMap"}</code> |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player"}</code> |
| <Link id="m-receivers" /><code>{"private readonly Dictionary<int, "}<Link to="/game-api/types/alta-networking/connectionreceiver">{"ConnectionReceiver"}</Link>{"> receivers"}</code> |
| <Link id="m-sendlock" /><code>{"private static readonly object sendLock"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-defaultchannel" /><code><Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" DefaultChannel { get; set; }"}</code> | Channel used when a send passes a null channel. |
| <Link id="m-identifier" /><code>{"int Identifier { get; }"}</code> | The transport connection id. |
| <Link id="m-isapproved" /><code>{"bool IsApproved { get; private set; }"}</code> | Whether the connection has been approved. Sends still queue before this, but nothing is flushed. |
| <Link id="m-isdisposed-2" /><code>{"bool IsDisposed { get; }"}</code> | True once `Dispose` has run. Sends then return false. |
| <Link id="m-player-2" /><code><Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" Player { get; set; }"}</code> | The `IPlayer` on the other end. Setting it updates `PlayerName` and raises `PlayerSet`. |
| <Link id="m-playername" /><code>{"string PlayerName { get; private set; }"}</code> | Username of the linked player, or `Unknown Player` before one is set. |
| <Link id="m-socket" /><code><Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" Socket { get; private set; }"}</code> | The `ISocket` this connection belongs to. |
| <Link id="m-userinfo" /><code><Link to="/game-api/types/global-t-x/userinfoandrole">{"UserInfoAndRole"}</Link>{" UserInfo { get; set; }"}</code> | The user and role info for the player on this connection. |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-transportconnection" /><code>{"private "}<Link to="/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{" TransportConnection { get; }"}</code> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-approved" /><code>{"event "}<Link to="/game-api/types/alta-networking/connectioneventhandler">{"ConnectionEventHandler"}</Link>{" Approved"}</code> | Raised when the connection is approved. |
| <Link id="m-disconnected" /><code>{"event "}<Link to="/game-api/types/alta-networking/connectioneventhandler">{"ConnectionEventHandler"}</Link>{" Disconnected"}</code> | Raised when the connection is disposed while the transport is running. Exceptions in handlers are logged. |
| <Link id="m-packetsent" /><code>{"event "}<Link to="/game-api/types/alta-networking/packetsenthandler">{"PacketSentHandler"}</Link>{" PacketSent"}</code> | Raised after each packet goes to the transport, with its bytes, channel and result. |
| <Link id="m-playerset" /><code>{"event Action<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> PlayerSet"}</code> | Raised when `Player` is assigned. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-approve" /><code>{"void Approve()"}</code> | Marks the connection approved and raises `Approved`. Packets are only flushed once approved. |
| <Link id="m-clearallhandlers" /><code>{"void ClearAllHandlers()"}</code> | Removes every message handler. |
| <Link id="m-clearhandler" /><code>{"void ClearHandler("}<Link to="/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" message)"}</code> | Removes the handler for one message type. |
| <Link id="m-disconnect" /><code>{"void Disconnect(string reason)"}</code> | Logs the reason, clears approval and asks the socket to close the connection. |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Sends the transport disconnect, raises `Disconnected` and frees queues, receivers and handlers. Safe to call twice. |
| <Link id="m-flushpacketmanagers" /><code>{"void FlushPacketManagers()"}</code> | Sends everything waiting in each channel's outgoing packet manager. Does nothing until approved. |
| <Link id="m-ping" /><code>{"IEnumerator Ping(Action<float> callback, float timeOut = 5)"}</code> | Coroutine that pings the remote IP address and passes the time to the callback. |
| <Link id="m-processexistingqueues" /><code>{"void ProcessExistingQueues()"}</code> | Has each channel's receiver process the messages it has queued. |
| <Link id="m-receivepacket" /><code>{"void ReceivePacket(int channelIdentifier, ArraySegment<byte> data)"}</code> | Hands an incoming packet to the receiver for its channel. |
| <Link id="m-receivepacketonserver" /><code>{"void ReceivePacketOnServer(ArraySegment<byte> data)"}</code> | Processes every message in a packet straight away, one after another. |
| <Link id="m-send" /><code>{"bool Send("}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel, "}<Link to="/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type, "}<Link to="/game-api/types/alta-networking/serializeconnectionmethod">{"SerializeConnectionMethod"}</Link>{" handler)"}</code> | Queues a message (or raw writer bytes) on a channel's outgoing packet manager. Returns false if disposed or the channel is unknown. |
| <Link id="m-send-2" /><code>{"bool Send("}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel, "}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" writer, int byteCount)"}</code> | Queues a message (or raw writer bytes) on a channel's outgoing packet manager. Returns false if disposed or the channel is unknown. |
| <Link id="m-sethandler" /><code>{"void SetHandler("}<Link to="/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" message, "}<Link to="/game-api/types/alta-networking/serializeconnectionmethod">{"SerializeConnectionMethod"}</Link>{" handler)"}</code> | Sets the handler for a message type on this connection, warning if it replaces one. |
| <Link id="m-startqueuing" /><code>{"void StartQueuing()"}</code> | Holds outgoing messages instead of sending them. Used while a client reports it has paused; a client paused for a minute is disconnected. |
| <Link id="m-stopqueuing" /><code>{"void StopQueuing()"}</code> | Stops holding messages and sends everything that was queued. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | The user info if known, otherwise the connection id. |
| <Link id="m-updatepacketmanagers" /><code>{"void UpdatePacketManagers()"}</code> | Per frame update of the outgoing packet managers, reading the transport queue size first. Does nothing until approved. |

<details>
<summary>8 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-disconnectaftertimeout" /><code>{"private async void DisconnectAfterTimeout("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> |
| <Link id="m-handleconnectionpause" /><code>{"internal void HandleConnectionPause("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-hashandler" /><code>{"private bool HasHandler("}<Link to="/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" message)"}</code> |
| <Link id="m-internalsend" /><code>{"internal bool InternalSend(byte[] data, int byteCount, "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel, out "}<Link to="/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" result, out bool isErrorSilent)"}</code> |
| <Link id="m-onapproved" /><code>{"private void OnApproved()"}</code> |
| <Link id="m-ondisconnected" /><code>{"private void OnDisconnected()"}</code> |
| <Link id="m-queuelimitreached" /><code>{"private bool QueueLimitReached()"}</code> |
| <Link id="m-trygetmessagehandler" /><code>{"internal bool TryGetMessageHandler("}<Link to="/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type, out "}<Link to="/game-api/types/alta-networking/serializeconnectionmethod">{"SerializeConnectionMethod"}</Link>{" handler)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `Connection`:

[`ChunkSync.disconnectedConnections`](/game-api/types/alta-world/chunksync#m-disconnectedconnections), [`ChunkSync.RemoveSync`](/game-api/types/alta-world/chunksync#m-removesync), [`ForestGenerator.Connection`](/game-api/types/alta-world-generation/forestgenerator#m-connection), [`ConfirmJoinMessage.Serialize`](/game-api/types/alta-networking/confirmjoinmessage#m-serialize), [`ConnectionChannel.CreateConnectionReceiver`](/game-api/types/alta-networking/connectionchannel#m-createconnectionreceiver), [`ConnectionEventHandler.BeginInvoke`](/game-api/types/alta-networking/connectioneventhandler#m-begininvoke), [`ConnectionEventHandler.Invoke`](/game-api/types/alta-networking/connectioneventhandler#m-invoke), [`DestroyMessage.Serialize`](/game-api/types/alta-networking/destroymessage#m-serialize), [`EntitySerializationMessage.Serialize`](/game-api/types/alta-networking/entityserializationmessage#m-serialize), [`EntitySyncMessage.Serialize`](/game-api/types/alta-networking/entitysyncmessage#m-serialize), [`FakeSocket.Connections`](/game-api/types/alta-networking/fakesocket#m-connections), [`FakeSocket.CreateConnection`](/game-api/types/alta-networking/fakesocket#m-createconnection), [`FakeSocket.DestroyConnection`](/game-api/types/alta-networking/fakesocket#m-destroyconnection), [`FakeSocket.GetConnection`](/game-api/types/alta-networking/fakesocket#m-getconnection), [`INetworkSceneInternal.AddConnection`](/game-api/types/alta-networking/inetworksceneinternal#m-addconnection), [`INetworkSceneInternal.Connections`](/game-api/types/alta-networking/inetworksceneinternal#m-connections), [`ConnectionReceiver.connection`](/game-api/types/alta-networking/connectionreceiver#m-connection), [`ConnectionReceiver.ConnectionReceiver`](/game-api/types/alta-networking/connectionreceiver#m-ctor), [`CountedQueuedConnectionReceiver.CountedQueuedConnectionReceiver`](/game-api/types/alta-networking/countedqueuedconnectionreceiver#m-ctor), [`MessageProcessor.HandleMessage`](/game-api/types/alta-networking/messageprocessor#m-handlemessage), [`MessageProcessor.ProcessSingleMessageFromData`](/game-api/types/alta-networking/messageprocessor#m-processsinglemessagefromdata), [`NormalConnectionReceiver.NormalConnectionReceiver`](/game-api/types/alta-networking/normalconnectionreceiver#m-ctor), [`OutgoingPacketManager.Connection`](/game-api/types/alta-networking/outgoingpacketmanager#m-connection), [`OutgoingPacketManager.OutgoingPacketManager`](/game-api/types/alta-networking/outgoingpacketmanager#m-ctor), [`OutgoingPacketManager.SerializeToWriter`](/game-api/types/alta-networking/outgoingpacketmanager#m-serializetowriter), [`OutgoingPacketManager.StartSerialize`](/game-api/types/alta-networking/outgoingpacketmanager#m-startserialize), [`OutgoingPacketManager.StopSerialize`](/game-api/types/alta-networking/outgoingpacketmanager#m-stopserialize), [`Packet.Send`](/game-api/types/alta-networking/packet#m-send), [`QueuedConnectionReceiver.QueuedConnectionReceiver`](/game-api/types/alta-networking/queuedconnectionreceiver#m-ctor), [`SceneSerializer.connections`](/game-api/types/alta-networking/sceneserializer#m-connections), [`SceneSerializer.SerializeRead`](/game-api/types/alta-networking/sceneserializer#m-serializeread), [`SceneSerializer.SerializeWrite`](/game-api/types/alta-networking/sceneserializer#m-serializewrite), [`TimedQueuedConnectionReceiver.TimedQueuedConnectionReceiver`](/game-api/types/alta-networking/timedqueuedconnectionreceiver#m-ctor), [`ISocket.Connections`](/game-api/types/alta-networking/isocket#m-connections), [`ISocket.CreateConnection`](/game-api/types/alta-networking/isocket#m-createconnection), [`ISocket.DestroyConnection`](/game-api/types/alta-networking/isocket#m-destroyconnection), [`ISocket.GetConnection`](/game-api/types/alta-networking/isocket#m-getconnection), [`MoveMessage.Serialize`](/game-api/types/alta-networking/movemessage#m-serialize), [`NetworkManager.SetupSendReceive`](/game-api/types/alta-networking/networkmanager#m-setupsendreceive), [`NetworkScene.AddConnection`](/game-api/types/alta-networking/networkscene#m-addconnection), [`NetworkScene.Connections`](/game-api/types/alta-networking/networkscene#m-connections), [`NetworkScene.RemoveConnection`](/game-api/types/alta-networking/networkscene#m-removeconnection), [`PacketSentHandler.BeginInvoke`](/game-api/types/alta-networking/packetsenthandler#m-begininvoke), [`PacketSentHandler.Invoke`](/game-api/types/alta-networking/packetsenthandler#m-invoke), [`PingMessage.Serialize`](/game-api/types/alta-networking/pingmessage#m-serialize), [`RequestJoinMessage.Serialize`](/game-api/types/alta-networking/requestjoinmessage#m-serialize), [`RequestServerDiagnosticsMessage.Serialize`](/game-api/types/alta-networking/requestserverdiagnosticsmessage#m-serialize), [`SceneSerializationMessage.Serialize`](/game-api/types/alta-networking/sceneserializationmessage#m-serialize), [`IPlayer.ConnectionToRemotePlayer`](/game-api/types/alta-networking/iplayer#m-connectiontoremoteplayer), [`SerializeConnectionMethod.BeginInvoke`](/game-api/types/alta-networking/serializeconnectionmethod#m-begininvoke), [`SerializeConnectionMethod.Invoke`](/game-api/types/alta-networking/serializeconnectionmethod#m-invoke), [`ServerDiagnosticsMessage.Serialize`](/game-api/types/alta-networking/serverdiagnosticsmessage#m-serialize), [`ServerMessageReceiverPerConnection.connection`](/game-api/types/alta-networking/servermessagereceiverperconnection#m-connection), [`ConnectToServerUtility.SerializePause`](/game-api/types/alta-networking/connecttoserverutility#m-serializepause), [`ConnectToServerUtility.SetupConnectionToServer`](/game-api/types/alta-networking/connecttoserverutility#m-setupconnectiontoserver), [`JoinResult.ConnectionToServer`](/game-api/types/alta-networking/joinresult#m-connectiontoserver), [`JoinResult.SuccessResult`](/game-api/types/alta-networking/joinresult#m-successresult), [`ServerHandler.CheckForNoResponseFromConnectionAsync`](/game-api/types/alta-networking/serverhandler#m-checkfornoresponsefromconnectionasync), [`ServerHandler.ConnectionCreated`](/game-api/types/alta-networking/serverhandler#m-connectioncreated), [`ServerHandler.HandleConnectionsChange`](/game-api/types/alta-networking/serverhandler#m-handleconnectionschange) and 56 more.
