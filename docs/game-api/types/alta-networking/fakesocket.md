---
title: "FakeSocket"
description: "class FakeSocket in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FakeSocket

A **class** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`ISocket`](/game-api/types/alta-networking/isocket), `IDisposable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FakeSocket()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectioncount" /><code>{"int ConnectionCount { get; }"}</code> |  |
| <Link id="m-connections" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{"> Connections { get; }"}</code> |  |
| <Link id="m-defaultchannel" /><code><Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" DefaultChannel { get; set; }"}</code> |  |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/alta-networking/fakesocket">{"FakeSocket"}</Link>{" Instance { get; }"}</code> |  |
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
| <Link id="m-createconnection" /><code><Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" CreateConnection(string ipAddress, int port)"}</code> |  |
| <Link id="m-createconnection-2" /><code><Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" CreateConnection("}<Link to="/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{" transportConnection, string ipAddress)"}</code> |  |
| <Link id="m-destroyconnection" /><code>{"void DestroyConnection("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, bool isFlushing = false)"}</code> |  |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> |  |
| <Link id="m-getconnection" /><code><Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" GetConnection(int identifier)"}</code> |  |
| <Link id="m-sendtoall" /><code>{"bool SendToAll("}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel, "}<Link to="/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type, "}<Link to="/game-api/types/alta-networking/serializeconnectionmethod">{"SerializeConnectionMethod"}</Link>{" method)"}</code> |  |
| <Link id="m-sendtoplayers" /><code>{"bool SendToPlayers("}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel, "}<Link to="/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type, "}<Link to="/game-api/types/alta-networking/serializeconnectionmethod">{"SerializeConnectionMethod"}</Link>{" method, IEnumerable<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> players)"}</code> |  |
| <Link id="m-updatereceive" /><code>{"void UpdateReceive()"}</code> |  |
| <Link id="m-updaterecieve" /><code>{"void UpdateRecieve()"}</code> |  |
| <Link id="m-updatesend" /><code>{"void UpdateSend()"}</code> |  |
