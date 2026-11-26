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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`ISocket`](/mod/game-api/types/alta-networking/isocket), `IDisposable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FakeSocket()"}</code> | <span className="api-desc">Creates a `FakeSocket` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectioncount" /><code>{"int ConnectionCount { get; }"}</code> | <span className="api-desc">Always 0.</span> |
| <Link id="m-connections" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{"> Connections { get; }"}</code> | <span className="api-desc">Always empty.</span> |
| <Link id="m-defaultchannel" /><code><Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" DefaultChannel { get; set; }"}</code> | <span className="api-desc">Default channel; unused.</span> |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/fakesocket">{"FakeSocket"}</Link>{" Instance { get; }"}</code> | <span className="api-desc">The single fake socket.</span> |
| <Link id="m-isserver" /><code>{"bool IsServer { get; }"}</code> | <span className="api-desc">Always true.</span> |
| <Link id="m-outgoingqueuesize" /><code>{"int OutgoingQueueSize { get; set; }"}</code> | <span className="api-desc">Unused.</span> |
| <Link id="m-transportsocket" /><code><Link to="/mod/game-api/types/assembly-other/itransportsocket">{"ITransportSocket"}</Link>{" TransportSocket { get; }"}</code> | <span className="api-desc">Always null.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-connectioncreated" /><code>{"event "}<Link to="/mod/game-api/types/alta-networking/connectioneventhandler">{"ConnectionEventHandler"}</Link>{" ConnectionCreated"}</code> | <span className="api-desc">Never raised.</span> |
| <Link id="m-connectiondestroyed" /><code>{"event "}<Link to="/mod/game-api/types/alta-networking/connectioneventhandler">{"ConnectionEventHandler"}</Link>{" ConnectionDestroyed"}</code> | <span className="api-desc">Never raised.</span> |
| <Link id="m-socketdestroyed" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{"> SocketDestroyed"}</code> | <span className="api-desc">Never raised.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createconnection" /><code><Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" CreateConnection(string ipAddress, int port)"}</code> | <span className="api-desc">Logs an error and returns null.</span> |
| <Link id="m-createconnection-2" /><code><Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" CreateConnection("}<Link to="/mod/game-api/types/assembly-other/itransportconnection">{"ITransportConnection"}</Link>{" transportConnection, string ipAddress)"}</code> | <span className="api-desc">Logs an error and returns null.</span> |
| <Link id="m-destroyconnection" /><code>{"void DestroyConnection("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, bool isFlushing = false)"}</code> | <span className="api-desc">Logs an error.</span> |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-getconnection" /><code><Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" GetConnection(int identifier)"}</code> | <span className="api-desc">Logs an error and returns null.</span> |
| <Link id="m-sendtoall" /><code>{"bool SendToAll("}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel, "}<Link to="/mod/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type, "}<Link to="/mod/game-api/types/alta-networking/serializeconnectionmethod">{"SerializeConnectionMethod"}</Link>{" method)"}</code> | <span className="api-desc">Does nothing and returns true.</span> |
| <Link id="m-sendtoplayers" /><code>{"bool SendToPlayers("}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel, "}<Link to="/mod/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type, "}<Link to="/mod/game-api/types/alta-networking/serializeconnectionmethod">{"SerializeConnectionMethod"}</Link>{" method, IEnumerable<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> players)"}</code> | <span className="api-desc">Does nothing and returns true.</span> |
| <Link id="m-updatereceive" /><code>{"void UpdateReceive()"}</code> | <span className="api-desc">Logs an error.</span> |
| <Link id="m-updaterecieve" /><code>{"void UpdateRecieve()"}</code> | <span className="api-desc">Misspelled extra method. Logs an error.</span> |
| <Link id="m-updatesend" /><code>{"void UpdateSend()"}</code> | <span className="api-desc">Logs an error.</span> |
