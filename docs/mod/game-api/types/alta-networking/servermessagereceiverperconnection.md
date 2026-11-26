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
| <Link id="m-ctor" /><code>{"ServerMessageReceiverPerConnection(int connectionIdentifier, "}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket)"}</code> | <span className="api-desc">Creates a `ServerMessageReceiverPerConnection` from `connectionIdentifier` and `socket`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-connection" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection"}</code> | <span className="api-desc">The game `Connection` for this transport connection, once connected.</span> |
| <Link id="m-connectionidentifier" /><code>{"private int connectionIdentifier"}</code> | <span className="api-desc">Transport connection id.</span> |
| <Link id="m-isloggingonunknownreceive" /><code>{"private bool isLoggingOnUnknownReceive"}</code> | <span className="api-desc">Whether the next unknown receive should still be logged.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for connection events and receive errors.</span> |
| <Link id="m-socket" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket"}</code> | <span className="api-desc">The socket that creates the connection.</span> |
| <Link id="m-unreliablebuffers" /><code>{"private ArraySegment<byte>[] unreliableBuffers"}</code> | <span className="api-desc">Ring buffer of unreliable packets waiting for this frame.</span> |
| <Link id="m-unreliableindex" /><code>{"private int unreliableIndex"}</code> | <span className="api-desc">Next write slot in the ring buffer.</span> |
| <Link id="m-unreliablelength" /><code>{"private int unreliableLength"}</code> | <span className="api-desc">Ring buffer size.</span> |
| <Link id="m-unreliablereceivedcount" /><code>{"private int unreliableReceivedCount"}</code> | <span className="api-desc">Unreliable packets received since the last `ProcessUnreliable`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handleconnectionevent" /><code>{"void HandleConnectionEvent("}<Link to="/mod/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{" transportConnection)"}</code> | <span className="api-desc">Creates the `Connection` on first connect (or reuses it) and approves it.</span> |
| <Link id="m-handledisconnectevent" /><code>{"void HandleDisconnectEvent()"}</code> | <span className="api-desc">Disconnects the connection, or logs an error if none is known.</span> |
| <Link id="m-processunreliable" /><code>{"int ProcessUnreliable()"}</code> | <span className="api-desc">Processes the buffered unreliable packets, oldest first, and returns how many arrived (including dropped ones).</span> |
| <Link id="m-receiveunreliable" /><code>{"void ReceiveUnreliable(ArraySegment<byte> data)"}</code> | <span className="api-desc">Stores an unreliable packet in the ring buffer, overwriting the oldest when full.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initializebuffers" /><code>{"private void InitializeBuffers()"}</code> | <span className="api-desc">Makes the ring buffer, sized by `NetworkingSettings.MaxUnreliableReceivedPerFrame`.</span> |
| <Link id="m-logunknownreceive" /><code>{"private void LogUnknownReceive()"}</code> | <span className="api-desc">Logs once when data arrives before a connect event.</span> |
| <Link id="m-processmessage" /><code>{"private void ProcessMessage(ArraySegment<byte> message, bool isReliable)"}</code> | <span className="api-desc">Passes a packet to the connection, logging fatal errors instead of throwing.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ServerMessageReceiverPerConnection`:

<div className="api-used-in">

[`ServerPacketReceiver.receivers`](/mod/game-api/types/alta-networking/serverpacketreceiver#m-receivers).

</div>
