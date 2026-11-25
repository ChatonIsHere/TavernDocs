---
title: "FakeSocket"
description: "A do-nothing socket for running without a network."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FakeSocket

A **class** in `Root.Township`, `Alta.Networking`.

A do-nothing socket for running without a network. Sends report success and go nowhere; most other calls log an error.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`ISocket`](/game-api/types/alta-networking/isocket), `IDisposable`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FakeSocket()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectioncount" /><code>{"int ConnectionCount { get; }"}</code> | Always 0. |
| <Link id="m-connections" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{"> Connections { get; }"}</code> | Always empty. |
| <Link id="m-defaultchannel" /><code><Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" DefaultChannel { get; set; }"}</code> | Default channel; unused. |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/alta-networking/fakesocket">{"FakeSocket"}</Link>{" Instance { get; }"}</code> | The single fake socket. |
| <Link id="m-isserver" /><code>{"bool IsServer { get; }"}</code> | Always true. |
| <Link id="m-outgoingqueuesize" /><code>{"int OutgoingQueueSize { get; set; }"}</code> | Unused. |
| <Link id="m-transportsocket" /><code><Link to="/game-api/types/assembly-other/itransportsocket">{"ITransportSocket"}</Link>{" TransportSocket { get; }"}</code> | Always null. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-connectioncreated" /><code>{"event "}<Link to="/game-api/types/alta-networking/connectioneventhandler">{"ConnectionEventHandler"}</Link>{" ConnectionCreated"}</code> | Never raised. |
| <Link id="m-connectiondestroyed" /><code>{"event "}<Link to="/game-api/types/alta-networking/connectioneventhandler">{"ConnectionEventHandler"}</Link>{" ConnectionDestroyed"}</code> | Never raised. |
| <Link id="m-socketdestroyed" /><code>{"event Action<"}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{"> SocketDestroyed"}</code> | Never raised. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createconnection" /><code><Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" CreateConnection(string ipAddress, int port)"}</code> | Logs an error and returns null. |
| <Link id="m-createconnection-2" /><code><Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" CreateConnection("}<Link to="/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{" transportConnection, string ipAddress)"}</code> | Logs an error and returns null. |
| <Link id="m-destroyconnection" /><code>{"void DestroyConnection("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, bool isFlushing = false)"}</code> | Logs an error. |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Does nothing. |
| <Link id="m-getconnection" /><code><Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" GetConnection(int identifier)"}</code> | Logs an error and returns null. |
| <Link id="m-sendtoall" /><code>{"bool SendToAll("}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel, "}<Link to="/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type, "}<Link to="/game-api/types/alta-networking/serializeconnectionmethod">{"SerializeConnectionMethod"}</Link>{" method)"}</code> | Does nothing and returns true. |
| <Link id="m-sendtoplayers" /><code>{"bool SendToPlayers("}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel, "}<Link to="/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type, "}<Link to="/game-api/types/alta-networking/serializeconnectionmethod">{"SerializeConnectionMethod"}</Link>{" method, IEnumerable<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> players)"}</code> | Does nothing and returns true. |
| <Link id="m-updatereceive" /><code>{"void UpdateReceive()"}</code> | Logs an error. |
| <Link id="m-updaterecieve" /><code>{"void UpdateRecieve()"}</code> | Misspelled extra method. Logs an error. |
| <Link id="m-updatesend" /><code>{"void UpdateSend()"}</code> | Logs an error. |
