---
title: "ClientPacketReceiver"
description: "The client's packet receiver: creates or approves the server connection when the transport approves it, and passes incoming packets to that connection."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientPacketReceiver

A **class** in `Root.Township`, `Alta.Networking`.

The client's packet receiver: creates or approves the server connection when the transport approves it, and passes incoming packets to that connection. Created by `Socket` on the client.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`IPacketReceiver`](/mod/game-api/types/alta-networking/ipacketreceiver), [`IPacketProcessor`](/mod/game-api/types/assembly-other/ipacketprocessor)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClientPacketReceiver("}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket)"}</code> | Creates a `ClientPacketReceiver` from `socket`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-socket" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" Socket { get; }"}</code> | The socket this receiver works for. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-receivepackets" /><code>{"void ReceivePackets()"}</code> | Asks the transport to process incoming data, which calls `Process` for each packet. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createconnection" /><code>{"private void CreateConnection("}<Link to="/mod/game-api/types/assembly-other/itransportclient">{"ITransportClient"}</Link>{" client)"}</code> | On transport approval, approves the existing connection or creates and approves a new one. |
| <Link id="m-destroyconnection" /><code>{"private void DestroyConnection("}<Link to="/mod/game-api/types/assembly-other/itransportclient">{"ITransportClient"}</Link>{" client)"}</code> | On transport disconnect, disconnects the matching connection, or logs an error if there is none. |
| <Link id="m-process" /><code>{"private void Alta.NetworkingTransport.IPacketProcessor.Process("}<Link to="/mod/game-api/types/assembly-other/itransportsocket">{"ITransportSocket"}</Link>{" socket, int connectionId, ArraySegment<byte> data, int channel)"}</code> | Hands a received packet to the connection with that id, skipping empty packets. |

</details>
