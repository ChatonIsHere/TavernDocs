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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`IConnection`](/mod/game-api/types/global-i-l/iconnection)
- **Documented in** [Sockets and connections](/mod/game-api/networking/connections#connection)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Connection("}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket, "}<Link to="/mod/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{" connection, string ipAddress, "}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{"[] channels)"}</code> | <span className="api-desc">Creates a `Connection` from `socket`, `connection`, `ipAddress` and `channels`.</span> |

## Fields

<details className="api-private">
<summary>17 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-channels" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{"[] channels"}</code> | <span className="api-desc">The channels this connection was created with; each has a packet manager and a receiver.</span> |
| <Link id="m-clientpausedisconnectcancel" /><code>{"private CancellationTokenSource clientPauseDisconnectCancel"}</code> | <span className="api-desc">Cancels the pending pause timeout when the client resumes or pauses again.</span> |
| <Link id="m-ipaddress" /><code>{"private readonly string IpAddress"}</code> | <span className="api-desc">Remote IP address, used by `Ping`.</span> |
| <Link id="m-isdisposed" /><code>{"private bool isDisposed"}</code> | <span className="api-desc">Backing field for `IsDisposed`; once set, `Send` does nothing.</span> |
| <Link id="m-isflooded" /><code>{"private bool isFlooded"}</code> | <span className="api-desc">Not used in this class.</span> |
| <Link id="m-isqueuelimitwarned" /><code>{"private bool isQueueLimitWarned"}</code> | <span className="api-desc">Set after the queue limit warning is logged, so it is logged once until the queue recovers.</span> |
| <Link id="m-isqueuingsends" /><code>{"private bool IsQueuingSends"}</code> | <span className="api-desc">While set (between `StartQueuing` and `StopQueuing`), sends are held in each channel's queue instead of going out.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-maxconnectionqueuesize" /><code>{"private readonly int MaxConnectionQueueSize"}</code> | <span className="api-desc">Per-connection outgoing queue limit from `NetworkingSettings`; sends are dropped once the transport queue reaches it.</span> |
| <Link id="m-maxserverqueuesize" /><code>{"private readonly int MaxServerQueueSize"}</code> | <span className="api-desc">Socket-wide outgoing queue limit from `NetworkingSettings`; sends on any connection are dropped once it is reached.</span> |
| <Link id="m-messagehandlers" /><code>{"private readonly Dictionary<"}<Link to="/mod/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{", "}<Link to="/mod/game-api/types/alta-networking/serializeconnectionmethod">{"SerializeConnectionMethod"}</Link>{"> messageHandlers"}</code> | <span className="api-desc">Handlers for incoming messages, keyed by message type; set with `SetHandler`.</span> |
| <Link id="m-outgoingpacketmanagers" /><code>{"private readonly List<"}<Link to="/mod/game-api/types/alta-networking/outgoingpacketmanager">{"OutgoingPacketManager"}</Link>{"> outgoingPacketManagers"}</code> | <span className="api-desc">One outgoing packet manager per channel, updated and flushed each frame.</span> |
| <Link id="m-outgoingqueuesize" /><code>{"private int outgoingQueueSize"}</code> | <span className="api-desc">Transport outgoing queue size read in `UpdatePacketManagers`, compared with `MaxConnectionQueueSize`.</span> |
| <Link id="m-packetmanagermap" /><code>{"private readonly Dictionary<"}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{", "}<Link to="/mod/game-api/types/alta-networking/outgoingpacketmanager">{"OutgoingPacketManager"}</Link>{"> packetManagerMap"}</code> | <span className="api-desc">Outgoing packet manager for each channel, used by `Send`.</span> |
| <Link id="m-player" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player"}</code> | <span className="api-desc">Backing field for `Player`.</span> |
| <Link id="m-receivers" /><code>{"private readonly Dictionary<int, "}<Link to="/mod/game-api/types/alta-networking/connectionreceiver">{"ConnectionReceiver"}</Link>{"> receivers"}</code> | <span className="api-desc">Incoming message receiver for each channel identifier.</span> |
| <Link id="m-sendlock" /><code>{"private static readonly object sendLock"}</code> | <span className="api-desc">Static lock held around each transport send.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-defaultchannel" /><code><Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" DefaultChannel { get; set; }"}</code> | <span className="api-desc">Channel used when a send passes a null channel.</span> |
| <Link id="m-identifier" /><code>{"int Identifier { get; }"}</code> | <span className="api-desc">The transport connection id.</span> |
| <Link id="m-isapproved" /><code>{"bool IsApproved { get; private set; }"}</code> | <span className="api-desc">Whether the connection has been approved. Sends still queue before this, but nothing is flushed.</span> |
| <Link id="m-isdisposed-2" /><code>{"bool IsDisposed { get; }"}</code> | <span className="api-desc">True once `Dispose` has run. Sends then return false.</span> |
| <Link id="m-player-2" /><code><Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" Player { get; set; }"}</code> | <span className="api-desc">The `IPlayer` on the other end. Setting it updates `PlayerName` and raises `PlayerSet`.</span> |
| <Link id="m-playername" /><code>{"string PlayerName { get; private set; }"}</code> | <span className="api-desc">Username of the linked player, or `Unknown Player` before one is set.</span> |
| <Link id="m-socket" /><code><Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" Socket { get; private set; }"}</code> | <span className="api-desc">The `ISocket` this connection belongs to.</span> |
| <Link id="m-userinfo" /><code><Link to="/mod/game-api/types/global-t-x/userinfoandrole">{"UserInfoAndRole"}</Link>{" UserInfo { get; set; }"}</code> | <span className="api-desc">The user and role info for the player on this connection.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-transportconnection" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{" TransportConnection { get; }"}</code> | <span className="api-desc">The underlying transport connection that packets are sent and received through.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-approved" /><code>{"event "}<Link to="/mod/game-api/types/alta-networking/connectioneventhandler">{"ConnectionEventHandler"}</Link>{" Approved"}</code> | <span className="api-desc">Raised when the connection is approved.</span> |
| <Link id="m-disconnected" /><code>{"event "}<Link to="/mod/game-api/types/alta-networking/connectioneventhandler">{"ConnectionEventHandler"}</Link>{" Disconnected"}</code> | <span className="api-desc">Raised when the connection is disposed while the transport is running. Exceptions in handlers are logged.</span> |
| <Link id="m-packetsent" /><code>{"event "}<Link to="/mod/game-api/types/alta-networking/packetsenthandler">{"PacketSentHandler"}</Link>{" PacketSent"}</code> | <span className="api-desc">Raised after each packet goes to the transport, with its bytes, channel and result.</span> |
| <Link id="m-playerset" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> PlayerSet"}</code> | <span className="api-desc">Raised when `Player` is assigned.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-approve" /><code>{"void Approve()"}</code> | <span className="api-desc">Marks the connection approved and raises `Approved`. Packets are only flushed once approved.</span> |
| <Link id="m-clearallhandlers" /><code>{"void ClearAllHandlers()"}</code> | <span className="api-desc">Removes every message handler.</span> |
| <Link id="m-clearhandler" /><code>{"void ClearHandler("}<Link to="/mod/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" message)"}</code> | <span className="api-desc">Removes the handler for one message type.</span> |
| <Link id="m-disconnect" /><code>{"void Disconnect(string reason)"}</code> | <span className="api-desc">Logs the reason, clears approval and asks the socket to close the connection.</span> |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | <span className="api-desc">Sends the transport disconnect, raises `Disconnected` and frees queues, receivers and handlers. Safe to call twice.</span> |
| <Link id="m-flushpacketmanagers" /><code>{"void FlushPacketManagers()"}</code> | <span className="api-desc">Sends everything waiting in each channel's outgoing packet manager. Does nothing until approved.</span> |
| <Link id="m-ping" /><code>{"IEnumerator Ping(Action<float> callback, float timeOut = 5)"}</code> | <span className="api-desc">Coroutine that pings the remote IP address and passes the time to the callback.</span> |
| <Link id="m-processexistingqueues" /><code>{"void ProcessExistingQueues()"}</code> | <span className="api-desc">Has each channel's receiver process the messages it has queued.</span> |
| <Link id="m-receivepacket" /><code>{"void ReceivePacket(int channelIdentifier, ArraySegment<byte> data)"}</code> | <span className="api-desc">Hands an incoming packet to the receiver for its channel.</span> |
| <Link id="m-receivepacketonserver" /><code>{"void ReceivePacketOnServer(ArraySegment<byte> data)"}</code> | <span className="api-desc">Processes every message in a packet straight away, one after another.</span> |
| <Link id="m-send" /><code>{"bool Send("}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel, "}<Link to="/mod/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type, "}<Link to="/mod/game-api/types/alta-networking/serializeconnectionmethod">{"SerializeConnectionMethod"}</Link>{" handler)"}</code> | <span className="api-desc">Queues a message (or raw writer bytes) on a channel's outgoing packet manager. Returns false if disposed or the channel is unknown.</span> |
| <Link id="m-send-2" /><code>{"bool Send("}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel, "}<Link to="/mod/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" writer, int byteCount)"}</code> | <span className="api-desc">Queues a message (or raw writer bytes) on a channel's outgoing packet manager. Returns false if disposed or the channel is unknown.</span> |
| <Link id="m-sethandler" /><code>{"void SetHandler("}<Link to="/mod/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" message, "}<Link to="/mod/game-api/types/alta-networking/serializeconnectionmethod">{"SerializeConnectionMethod"}</Link>{" handler)"}</code> | <span className="api-desc">Sets the handler for a message type on this connection, warning if it replaces one.</span> |
| <Link id="m-startqueuing" /><code>{"void StartQueuing()"}</code> | <span className="api-desc">Holds outgoing messages instead of sending them. Used while a client reports it has paused; a client paused for a minute is disconnected.</span> |
| <Link id="m-stopqueuing" /><code>{"void StopQueuing()"}</code> | <span className="api-desc">Stops holding messages and sends everything that was queued.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">The user info if known, otherwise the connection id.</span> |
| <Link id="m-updatepacketmanagers" /><code>{"void UpdatePacketManagers()"}</code> | <span className="api-desc">Per frame update of the outgoing packet managers, reading the transport queue size first. Does nothing until approved.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disconnectaftertimeout" /><code>{"private async void DisconnectAfterTimeout("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | <span className="api-desc">Server: started when a client pauses; disconnects it with "Pause Timeout" after one minute unless the pause ends first.</span> |
| <Link id="m-handleconnectionpause" /><code>{"internal void HandleConnectionPause("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Server: handler for `ConnectionPauseRequest`. A pausing client has its sends queued and gets a one minute disconnect timer; resuming flushes the queue.</span> |
| <Link id="m-hashandler" /><code>{"private bool HasHandler("}<Link to="/mod/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" message)"}</code> | <span className="api-desc">True if a handler is set for the message type; `SetHandler` uses it to warn about overriding.</span> |
| <Link id="m-internalsend" /><code>{"internal bool InternalSend(byte[] data, int byteCount, "}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel, out "}<Link to="/mod/game-api/types/assembly-other/inetworktransportresult">{"INetworkTransportResult"}</Link>{" result, out bool isErrorSilent)"}</code> | <span className="api-desc">Sends packet bytes through the transport on a channel, unless the transport isn't started or a queue limit is hit. Updates packet counters and raises `PacketSent`.</span> |
| <Link id="m-onapproved" /><code>{"private void OnApproved()"}</code> | <span className="api-desc">Raises `Approved`; called once from `Approve`.</span> |
| <Link id="m-ondisconnected" /><code>{"private void OnDisconnected()"}</code> | <span className="api-desc">Raises `Disconnected`, logging any error a listener throws; called from `Dispose`.</span> |
| <Link id="m-queuelimitreached" /><code>{"private bool QueueLimitReached()"}</code> | <span className="api-desc">True when the transport reports flooding or the socket or connection queue limit is hit. Logs a warning once until the queue recovers.</span> |
| <Link id="m-trygetmessagehandler" /><code>{"internal bool TryGetMessageHandler("}<Link to="/mod/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type, out "}<Link to="/mod/game-api/types/alta-networking/serializeconnectionmethod">{"SerializeConnectionMethod"}</Link>{" handler)"}</code> | <span className="api-desc">Looks up the handler set for a message type; used by `MessageProcessor` when a message arrives.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Connection`:

<div className="api-used-in">

[`ChunkSync.disconnectedConnections`](/mod/game-api/types/alta-world/chunksync#m-disconnectedconnections), [`ChunkSync.RemoveSync`](/mod/game-api/types/alta-world/chunksync#m-removesync), [`ForestGenerator.Connection`](/mod/game-api/types/alta-world-generation/forestgenerator#m-connection), [`ConfirmJoinMessage.Serialize`](/mod/game-api/types/alta-networking/confirmjoinmessage#m-serialize), [`ConnectionChannel.CreateConnectionReceiver`](/mod/game-api/types/alta-networking/connectionchannel#m-createconnectionreceiver), [`ConnectionEventHandler.BeginInvoke`](/mod/game-api/types/alta-networking/connectioneventhandler#m-begininvoke), [`ConnectionEventHandler.Invoke`](/mod/game-api/types/alta-networking/connectioneventhandler#m-invoke), [`DestroyMessage.Serialize`](/mod/game-api/types/alta-networking/destroymessage#m-serialize), [`EntitySerializationMessage.Serialize`](/mod/game-api/types/alta-networking/entityserializationmessage#m-serialize), [`EntitySyncMessage.Serialize`](/mod/game-api/types/alta-networking/entitysyncmessage#m-serialize), [`FakeSocket.Connections`](/mod/game-api/types/alta-networking/fakesocket#m-connections), [`FakeSocket.CreateConnection`](/mod/game-api/types/alta-networking/fakesocket#m-createconnection), [`FakeSocket.DestroyConnection`](/mod/game-api/types/alta-networking/fakesocket#m-destroyconnection), [`FakeSocket.GetConnection`](/mod/game-api/types/alta-networking/fakesocket#m-getconnection), [`INetworkSceneInternal.AddConnection`](/mod/game-api/types/alta-networking/inetworksceneinternal#m-addconnection), [`INetworkSceneInternal.Connections`](/mod/game-api/types/alta-networking/inetworksceneinternal#m-connections), [`ConnectionReceiver.connection`](/mod/game-api/types/alta-networking/connectionreceiver#m-connection), [`ConnectionReceiver.ConnectionReceiver`](/mod/game-api/types/alta-networking/connectionreceiver#m-ctor), [`CountedQueuedConnectionReceiver.CountedQueuedConnectionReceiver`](/mod/game-api/types/alta-networking/countedqueuedconnectionreceiver#m-ctor), [`MessageProcessor.HandleMessage`](/mod/game-api/types/alta-networking/messageprocessor#m-handlemessage), [`MessageProcessor.ProcessSingleMessageFromData`](/mod/game-api/types/alta-networking/messageprocessor#m-processsinglemessagefromdata), [`NormalConnectionReceiver.NormalConnectionReceiver`](/mod/game-api/types/alta-networking/normalconnectionreceiver#m-ctor), [`OutgoingPacketManager.Connection`](/mod/game-api/types/alta-networking/outgoingpacketmanager#m-connection), [`OutgoingPacketManager.OutgoingPacketManager`](/mod/game-api/types/alta-networking/outgoingpacketmanager#m-ctor), [`OutgoingPacketManager.SerializeToWriter`](/mod/game-api/types/alta-networking/outgoingpacketmanager#m-serializetowriter), [`OutgoingPacketManager.StartSerialize`](/mod/game-api/types/alta-networking/outgoingpacketmanager#m-startserialize), [`OutgoingPacketManager.StopSerialize`](/mod/game-api/types/alta-networking/outgoingpacketmanager#m-stopserialize), [`Packet.Send`](/mod/game-api/types/alta-networking/packet#m-send), [`QueuedConnectionReceiver.QueuedConnectionReceiver`](/mod/game-api/types/alta-networking/queuedconnectionreceiver#m-ctor), [`SceneSerializer.connections`](/mod/game-api/types/alta-networking/sceneserializer#m-connections), [`SceneSerializer.SerializeRead`](/mod/game-api/types/alta-networking/sceneserializer#m-serializeread), [`SceneSerializer.SerializeWrite`](/mod/game-api/types/alta-networking/sceneserializer#m-serializewrite), [`TimedQueuedConnectionReceiver.TimedQueuedConnectionReceiver`](/mod/game-api/types/alta-networking/timedqueuedconnectionreceiver#m-ctor), [`ISocket.Connections`](/mod/game-api/types/alta-networking/isocket#m-connections), [`ISocket.CreateConnection`](/mod/game-api/types/alta-networking/isocket#m-createconnection), [`ISocket.DestroyConnection`](/mod/game-api/types/alta-networking/isocket#m-destroyconnection), [`ISocket.GetConnection`](/mod/game-api/types/alta-networking/isocket#m-getconnection), [`MoveMessage.Serialize`](/mod/game-api/types/alta-networking/movemessage#m-serialize), [`NetworkManager.SetupSendReceive`](/mod/game-api/types/alta-networking/networkmanager#m-setupsendreceive), [`NetworkScene.AddConnection`](/mod/game-api/types/alta-networking/networkscene#m-addconnection), [`NetworkScene.Connections`](/mod/game-api/types/alta-networking/networkscene#m-connections), [`NetworkScene.RemoveConnection`](/mod/game-api/types/alta-networking/networkscene#m-removeconnection), [`PacketSentHandler.BeginInvoke`](/mod/game-api/types/alta-networking/packetsenthandler#m-begininvoke), [`PacketSentHandler.Invoke`](/mod/game-api/types/alta-networking/packetsenthandler#m-invoke), [`PingMessage.Serialize`](/mod/game-api/types/alta-networking/pingmessage#m-serialize), [`RequestJoinMessage.Serialize`](/mod/game-api/types/alta-networking/requestjoinmessage#m-serialize), [`RequestServerDiagnosticsMessage.Serialize`](/mod/game-api/types/alta-networking/requestserverdiagnosticsmessage#m-serialize), [`SceneSerializationMessage.Serialize`](/mod/game-api/types/alta-networking/sceneserializationmessage#m-serialize), [`IPlayer.ConnectionToRemotePlayer`](/mod/game-api/types/alta-networking/iplayer#m-connectiontoremoteplayer), [`SerializeConnectionMethod.BeginInvoke`](/mod/game-api/types/alta-networking/serializeconnectionmethod#m-begininvoke), [`SerializeConnectionMethod.Invoke`](/mod/game-api/types/alta-networking/serializeconnectionmethod#m-invoke), [`ServerDiagnosticsMessage.Serialize`](/mod/game-api/types/alta-networking/serverdiagnosticsmessage#m-serialize), [`ServerMessageReceiverPerConnection.connection`](/mod/game-api/types/alta-networking/servermessagereceiverperconnection#m-connection), [`ConnectToServerUtility.SerializePause`](/mod/game-api/types/alta-networking/connecttoserverutility#m-serializepause), [`ConnectToServerUtility.SetupConnectionToServer`](/mod/game-api/types/alta-networking/connecttoserverutility#m-setupconnectiontoserver), [`JoinResult.ConnectionToServer`](/mod/game-api/types/alta-networking/joinresult#m-connectiontoserver), [`JoinResult.SuccessResult`](/mod/game-api/types/alta-networking/joinresult#m-successresult), [`ServerHandler.CheckForNoResponseFromConnectionAsync`](/mod/game-api/types/alta-networking/serverhandler#m-checkfornoresponsefromconnectionasync), [`ServerHandler.ConnectionCreated`](/mod/game-api/types/alta-networking/serverhandler#m-connectioncreated), [`ServerHandler.HandleConnectionsChange`](/mod/game-api/types/alta-networking/serverhandler#m-handleconnectionschange) and 56 more.

</div>
