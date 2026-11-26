---
title: "ServerMessageReceiverPerConnection"
description: "Server: per-connection receiver that holds incoming unreliable packets until the frame's processing step and handles connect and disconnect events."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerMessageReceiverPerConnection

A **class** in `Root.Township`, `Alta.Networking`.

Server: per-connection receiver that holds incoming unreliable packets until the frame's processing step and handles connect and disconnect events. Made by `ServerPacketReceiver`.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerMessageReceiverPerConnection(int connectionIdentifier, "}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket)"}</code> | Creates a `ServerMessageReceiverPerConnection` from `connectionIdentifier` and `socket`. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-connection" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection"}</code> | The game `Connection` for this transport connection, once connected. |
| <Link id="m-connectionidentifier" /><code>{"private int connectionIdentifier"}</code> | Transport connection id. |
| <Link id="m-isloggingonunknownreceive" /><code>{"private bool isLoggingOnUnknownReceive"}</code> | Whether the next unknown receive should still be logged. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger for connection events and receive errors. |
| <Link id="m-socket" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket"}</code> | The socket that creates the connection. |
| <Link id="m-unreliablebuffers" /><code>{"private ArraySegment<byte>[] unreliableBuffers"}</code> | Ring buffer of unreliable packets waiting for this frame. |
| <Link id="m-unreliableindex" /><code>{"private int unreliableIndex"}</code> | Next write slot in the ring buffer. |
| <Link id="m-unreliablelength" /><code>{"private int unreliableLength"}</code> | Ring buffer size. |
| <Link id="m-unreliablereceivedcount" /><code>{"private int unreliableReceivedCount"}</code> | Unreliable packets received since the last `ProcessUnreliable`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handleconnectionevent" /><code>{"void HandleConnectionEvent("}<Link to="/mod/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{" transportConnection)"}</code> | Creates the `Connection` on first connect (or reuses it) and approves it. |
| <Link id="m-handledisconnectevent" /><code>{"void HandleDisconnectEvent()"}</code> | Disconnects the connection, or logs an error if none is known. |
| <Link id="m-processunreliable" /><code>{"int ProcessUnreliable()"}</code> | Processes the buffered unreliable packets, oldest first, and returns how many arrived (including dropped ones). |
| <Link id="m-receiveunreliable" /><code>{"void ReceiveUnreliable(ArraySegment<byte> data)"}</code> | Stores an unreliable packet in the ring buffer, overwriting the oldest when full. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initializebuffers" /><code>{"private void InitializeBuffers()"}</code> | Makes the ring buffer, sized by `NetworkingSettings.MaxUnreliableReceivedPerFrame`. |
| <Link id="m-logunknownreceive" /><code>{"private void LogUnknownReceive()"}</code> | Logs once when data arrives before a connect event. |
| <Link id="m-processmessage" /><code>{"private void ProcessMessage(ArraySegment<byte> message, bool isReliable)"}</code> | Passes a packet to the connection, logging fatal errors instead of throwing. |

</details>

## Used in

Members of other types that take, return or hold a `ServerMessageReceiverPerConnection`:

[`ServerPacketReceiver.receivers`](/mod/game-api/types/alta-networking/serverpacketreceiver#m-receivers).
