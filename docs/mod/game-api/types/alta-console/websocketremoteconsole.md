---
title: "WebSocketRemoteConsole"
description: "The server's websocket remote console: a Fleck server on port 1760 that makes a WebSocketCommandHandler per connection."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WebSocketRemoteConsole

A **class** in `Root.Township`, `Alta.Console`.

The server's websocket remote console: a Fleck server on port 1760 that makes a `WebSocketCommandHandler` per connection.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Inherits or implements** [`IRemoteConsole`](/mod/game-api/types/global-i-l/iremoteconsole)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WebSocketRemoteConsole()"}</code> | <span className="api-desc">Creates a `WebSocketRemoteConsole` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-handlers" /><code>{"static List<"}<Link to="/mod/game-api/types/alta-console/websocketcommandhandler">{"WebSocketCommandHandler"}</Link>{"> Handlers"}</code> | <span className="api-desc">Command handlers for the open websocket connections.</span> |
| <Link id="m-websocketport" /><code>{"const int WebsocketPort"}</code> | <span className="api-desc">The websocket console port, 1760.</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-server" /><code>{"private WebSocketServer server"}</code> | <span className="api-desc">The Fleck websocket server.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"static bool IsActive { get; private set; }"}</code> | <span className="api-desc">True while the websocket server is started.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-consoleconnected" /><code>{"event Action<"}<Link to="/mod/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{", "}<Link to="/mod/game-api/types/global-i-l/iremoteconsolehandler">{"IRemoteConsoleHandler"}</Link>{"> ConsoleConnected"}</code> | <span className="api-desc">Raised when a connection's handler is authorized, with its user.</span> |
| <Link id="m-consoledisconnected" /><code>{"event Action<"}<Link to="/mod/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{", "}<Link to="/mod/game-api/types/global-i-l/iremoteconsolehandler">{"IRemoteConsoleHandler"}</Link>{"> ConsoleDisconnected"}</code> | <span className="api-desc">Raised when an authorized connection closes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"void Close()"}</code> | <span className="api-desc">Disposes the websocket server and marks it inactive.</span> |
| <Link id="m-start" /><code>{"void Start()"}</code> | <span className="api-desc">Starts listening on `ws://0.0.0.0:1760`, routing Fleck logs into NLog; on failure logs and stays inactive.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createnewcommandhandler" /><code>{"private void CreateNewCommandHandler(IWebSocketConnection socket)"}</code> | <span className="api-desc">Makes and tracks a command handler for a new socket and hooks its closed and authorized events.</span> |
| <Link id="m-handlerauthorized" /><code>{"private void HandlerAuthorized("}<Link to="/mod/game-api/types/alta-console/websocketcommandhandler">{"WebSocketCommandHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Raises `ConsoleConnected` once a handler is authorized.</span> |
| <Link id="m-remoteconsoleclosed" /><code>{"private void RemoteConsoleClosed("}<Link to="/mod/game-api/types/alta-console/websocketcommandhandler">{"WebSocketCommandHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Drops a closed handler from `Handlers` and raises `ConsoleDisconnected` if it was authorized.</span> |

</details>
