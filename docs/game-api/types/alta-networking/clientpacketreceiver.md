---
title: "ClientPacketReceiver"
description: "class ClientPacketReceiver in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientPacketReceiver

A **class** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`IPacketReceiver`](/game-api/types/alta-networking/ipacketreceiver), [`IPacketProcessor`](/game-api/types/assembly-other/ipacketprocessor)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClientPacketReceiver("}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-socket" /><code>{"private "}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" Socket { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-receivepackets" /><code>{"void ReceivePackets()"}</code> |  |
| <Link id="m-createconnection" /><code>{"private void CreateConnection("}<Link to="/game-api/types/assembly-other/itransportclient">{"ITransportClient"}</Link>{" client)"}</code> |  |
| <Link id="m-destroyconnection" /><code>{"private void DestroyConnection("}<Link to="/game-api/types/assembly-other/itransportclient">{"ITransportClient"}</Link>{" client)"}</code> |  |
| <Link id="m-process" /><code>{"private void Alta.NetworkingTransport.IPacketProcessor.Process("}<Link to="/game-api/types/assembly-other/itransportsocket">{"ITransportSocket"}</Link>{" socket, int connectionId, ArraySegment<byte> data, int channel)"}</code> |  |
