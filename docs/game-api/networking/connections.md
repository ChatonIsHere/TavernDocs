---
title: Sockets and connections
description: NetworkManager, Socket, Connection and ConnectionChannel, the kcp2k transport under them, and what runs on which thread.
sidebar_position: 5
---

# Sockets and connections

Both sides. These are the game's own networking layer, in the `Alta.Networking` namespace of `Root.Township`. Under them is kcp2k (reliable UDP), wrapped by `Alta.NetworkTransport.Runtime`. Mirror's kcp2k is a third-party library; this page covers only the game's wrapper.

```
NetworkManager (static)  ->  Socket (one per side)  ->  Connection (one per peer)  ->  OutgoingPacketManager per channel
                                   |
                              ITransportSocket (KcpServerWrapper / KcpClientWrapper)
```

A server has one `Socket` with a `Connection` per player. A client has one `Socket` with one `Connection`, to the server.

## Threading

Everything here runs on Unity's main thread. `NetworkManager` registers its `Receive` and `Send` with the game's update modules, and they tick the kcp2k sockets, so every message handler and every connection event is raised on the main thread, during the receive pass. There's no background network thread to worry about. A handler that takes a long time holds up the frame.

## NetworkManager

`Alta.Networking.NetworkManager`. Static.

| Member | What it does | Notes |
| --- | --- | --- |
| `static ISocket CreateSocket(bool isServer, TransportSystem transportSystem, int socketPort = 0)` | Starts the transport if needed and opens a socket. A client socket always uses port 0. | Called by `ServerLifetimePipeline` and `ConnectToServerUtility`. |
| `static void CloseSocket(ISocket socket)` | Disposes a socket and forgets it. | |
| `static void Terminate()` | Closes every socket and stops the transport. | The client calls it when leaving a server. |
| `static ITransport Transport`, `static bool IsTransportStarted` | The transport (`KcpTransport`; it's the only one). | Public fields. |
| `static ulong SentPackets`, `FailedPackets`, `FloodedPackets`, `ReliablePacketOverflowDisconnects`, `AltaNetworkError_*` | Counters since start-up. | Static properties with public setters. |

## Socket

`Alta.Networking.Socket`, which implements `ISocket`. Get the current one from `Socket.Current` (a static `ISocket`, the last socket made). TavernLib raises `TavernEvents.SocketCreated` with it each time one is made; see [Events and services](../../mod/tavernlib/events-and-services.md).

| Member | What it does | Notes |
| --- | --- | --- |
| `static ISocket Current { get; set; }` | The socket in use. | On a client, made when you first try to join. |
| `bool IsServer { get; }` | Server socket or client socket. | |
| `IEnumerable<Connection> Connections`, `int ConnectionCount` | Open connections, including ones still joining. | |
| `ConnectionChannel DefaultChannel { get; set; }` | Used when you pass `null` as the channel. | |
| `ITransportSocket TransportSocket { get; }` | The kcp2k wrapper. | |
| `event ConnectionEventHandler ConnectionCreated` | A new connection. On a server, when a client's transport connects. | `ConnectionEventHandler` is `void (Connection)`. |
| `event ConnectionEventHandler ConnectionDestroyed` | After a connection is disposed. | |
| `event Action<ISocket> SocketDestroyed` | The socket closed. | |
| `static event Action EndOfReceival` | Raised once at the end of the next receive pass, then cleared. | The join pipeline uses it to act after the current message. |
| `Connection CreateConnection(string ipAddress, int port)` | Client: connect to a server. `"localhost"` and `""` mean 127.0.0.1. Returns `null` on failure. | Good postfix target to set handlers on the new connection. |
| `void DestroyConnection(Connection connection, bool isFlushing = false)` | Close a connection, optionally sending what's queued first. | |
| `Connection GetConnection(int identifier)` | By transport id. | |
| `bool SendToAll(ConnectionChannel, MessageType, SerializeConnectionMethod)` | Write once, send to every connection. | The handler gets `null` as its connection. |
| `bool SendToPlayers(ConnectionChannel, MessageType, SerializeConnectionMethod, IEnumerable<IPlayer>)` | Write once, send to those players. | The handler gets the first player's connection. |

## Connection

`Alta.Networking.Connection`, which implements `IConnection`. One per peer. On a server, a player's is `player.ConnectionToRemotePlayer`. On a client, the connection to the server is `JoinResult.ConnectionToServer`, or `Socket.Current.Connections` (it has just one).

| Member | What it does | Notes |
| --- | --- | --- |
| `int Identifier { get; }` | The transport's connection id. | |
| `UserInfoAndRole UserInfo { get; set; }` | Who it is. | Server: set once the join checks pass, `null` before. |
| `IPlayer Player { get; set; }` | Their `Player` entity. | Server: set by `Player.InitializePlayerOnServer`. |
| `string PlayerName { get; }` | `Player.UserInfo.Username`, or "Unknown Player". | |
| `bool IsApproved { get; }` | The **transport** has connected. | Not "allowed to join". That's `UserInfo != null`. |
| `bool IsDisposed { get; }` | Closed. | |
| `ISocket Socket { get; }` | The socket it belongs to. | |
| `ConnectionChannel DefaultChannel { get; set; }` | Channel used for `null`. | |
| `event ConnectionEventHandler Approved` | The transport connected. | |
| `event ConnectionEventHandler Disconnected` | The connection is being disposed. Exceptions in handlers are logged and swallowed. | Not raised if the transport has already stopped. |
| `event Action<IPlayer> PlayerSet` | `Player` was set. Raised just before the new value is stored. | |
| `event PacketSentHandler PacketSent` | | |
| `void SetHandler(MessageType message, SerializeConnectionMethod handler)` | Handle a message type on this connection. Replacing one logs a warning. | See [Connection messages](messages.md). |
| `void ClearHandler(MessageType message)`, `void ClearAllHandlers()` | | |
| `bool Send(ConnectionChannel channel, MessageType type, SerializeConnectionMethod handler)` | Write a message and queue it. `null` channel means the default. | `false` if disposed or too big. |
| `bool Send(ConnectionChannel channel, StreamWriter writer, int byteCount)` | Queue an already-written message. | |
| `void FlushPacketManagers()` | Send everything queued now. | |
| `void StartQueuing()`, `void StopQueuing()` | Hold sends, then release them. | Used for a paused client. |
| `void Disconnect(string reason)` | Log the reason and close. The other side only sees the connection drop. | |
| `IEnumerator Ping(Action<float> callback, float timeOut = 5f)` | ICMP ping to the peer's IP. | Useless on a server: see below. |
| `string IpAddress` | Private, and never set on a server. | |

:::tip[A player's IP address]

The server makes its connections with a `null` address, so `Connection` doesn't know it. TavernLib reads it from kcp2k: the transport connection (`Connection.TransportConnection`, private) is a `KcpServerConnection`, whose private `internalConnection` is kcp2k's `KcpConnection`, and its `GetRemoteEndPoint()` is the address. See TavernLib's `PlayerJoinFilter.AddressOf`.

:::

### When a connection closes

`Disconnect` (or the transport dropping) calls `Socket.DestroyConnection`, which disposes the connection: `Disconnected` is raised, the transport is told, and then `Socket.ConnectionDestroyed`. On a server, the join handler listens to `Disconnected` and that starts the player's save and removal (see [ServerHandler](server-handler.md#events)). `Player.Kick(reason)` is `Disconnect` with a log line, on the server only.

A server also drops a connection that joined but sent no `ClientIsReadyToSpawn` within 2 minutes, and (if a client ever asks to pause) one that stays paused for a minute.

## ConnectionChannel

`Alta.Networking.ConnectionChannel`, a `ScriptableObject`. The channels come from `GlobalSettings<NetworkingSettings>.Instance.Channels`; each connection has one outgoing queue per channel.

| Member | What it is |
| --- | --- |
| `bool IsReliable` | Reliable or not. |
| `float MaximumSendInterval` | How long messages may wait to be batched into one packet. |
| `int Identifier` | Index given at start-up. |

The shipped channels:

| Channel | Reliable | `MaximumSendInterval` | Client receiver |
| --- | --- | --- | --- |
| Default Unreliable | no | 0.03 s | `Normal` |
| Default Reliable (the default) | yes | 0 | `Counted` |
| Reliable Queued | yes | 0 | `Timed` |

Pass `null` to use the default channel. TavernEssentials picks the reliable channel with the smallest `MaximumSendInterval` for its own messages. On a client, a channel may queue what it receives and hand it over a little at a time (`Timed` and `Counted` receivers), so a message can be handled a few frames after it arrived. The server handles everything as it arrives.

## The transport

`Alta.NetworkingTransport.Kcp` in `Alta.NetworkTransport.Runtime`: `KcpTransport`, `KcpServerWrapper`, `KcpClientWrapper`, `KcpServerConnection`, `KcpClientConnection`, and `KcpSettings` (a `GlobalSettings` asset). The shipped asset has `NoDelay` on, `Interval` 10 ms, `Timeout` 100,000 ms (kcp2k's disconnect timeout, so a silent peer should be dropped after about 100 s), `FastResend` 2, send and receive windows of 4096, `MaxRetransmit` 40 and `DualMode` on. `KcpTransport.PacketSize` is 1200 bytes, and the game keeps 100 of that for itself, which is where the message size limit comes from (see [Connection messages](messages.md#size)). Rover found the game ships kcp2k V1.19 and uses no encryption or compression.

## Hooking it

- **`Socket.CreateConnection(string, int)`**: postfix to register handlers on the client's connection before anything arrives. SyncLib does this.
- **`ServerHandler.ConnectionCreated(Connection)`** (private): postfix to register handlers on every new server connection. Or subscribe to `Socket.Current.ConnectionCreated` once the server socket exists (TavernLib's `EntranceMessageHandler` does it from `TavernEvents.SocketCreated`).
- **The `Socket` constructor**: TavernLib postfixes it to raise `SocketCreated`.
- `Connection.Send` and `OutgoingPacketManager` run for every message. Patch them only to measure, and keep it cheap.

## See also

- [Connection messages](messages.md)
- [Stream](stream.md)
- [Joining a server](joining.md)
