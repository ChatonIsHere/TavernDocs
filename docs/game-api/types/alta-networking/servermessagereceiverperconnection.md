---
title: "ServerMessageReceiverPerConnection"
description: "class ServerMessageReceiverPerConnection in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerMessageReceiverPerConnection

A **class** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ServerMessageReceiverPerConnection(int connectionIdentifier, "}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket)"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-connection" /><code>{"private "}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection"}</code> |
| <Link id="m-connectionidentifier" /><code>{"private int connectionIdentifier"}</code> |
| <Link id="m-isloggingonunknownreceive" /><code>{"private bool isLoggingOnUnknownReceive"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-socket" /><code>{"private "}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket"}</code> |
| <Link id="m-unreliablebuffers" /><code>{"private ArraySegment<byte>[] unreliableBuffers"}</code> |
| <Link id="m-unreliableindex" /><code>{"private int unreliableIndex"}</code> |
| <Link id="m-unreliablelength" /><code>{"private int unreliableLength"}</code> |
| <Link id="m-unreliablereceivedcount" /><code>{"private int unreliableReceivedCount"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-handleconnectionevent" /><code>{"void HandleConnectionEvent("}<Link to="/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{" transportConnection)"}</code> |
| <Link id="m-handledisconnectevent" /><code>{"void HandleDisconnectEvent()"}</code> |
| <Link id="m-processunreliable" /><code>{"int ProcessUnreliable()"}</code> |
| <Link id="m-receiveunreliable" /><code>{"void ReceiveUnreliable(ArraySegment<byte> data)"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-initializebuffers" /><code>{"private void InitializeBuffers()"}</code> |
| <Link id="m-logunknownreceive" /><code>{"private void LogUnknownReceive()"}</code> |
| <Link id="m-processmessage" /><code>{"private void ProcessMessage(ArraySegment<byte> message, bool isReliable)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ServerMessageReceiverPerConnection`:

[`ServerPacketReceiver.receivers`](/game-api/types/alta-networking/serverpacketreceiver#m-receivers).
