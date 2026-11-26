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
| <Link id="m-ctor" /><code>{"WebSocketRemoteConsole()"}</code> | Creates a `WebSocketRemoteConsole` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-handlers" /><code>{"static List<"}<Link to="/mod/game-api/types/alta-console/websocketcommandhandler">{"WebSocketCommandHandler"}</Link>{"> Handlers"}</code> | Command handlers for the open websocket connections. |
| <Link id="m-websocketport" /><code>{"const int WebsocketPort"}</code> | The websocket console port, 1760. |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-server" /><code>{"private WebSocketServer server"}</code> | The Fleck websocket server. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"static bool IsActive { get; private set; }"}</code> | True while the websocket server is started. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-consoleconnected" /><code>{"event Action<"}<Link to="/mod/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{", "}<Link to="/mod/game-api/types/global-i-l/iremoteconsolehandler">{"IRemoteConsoleHandler"}</Link>{"> ConsoleConnected"}</code> | Raised when a connection's handler is authorized, with its user. |
| <Link id="m-consoledisconnected" /><code>{"event Action<"}<Link to="/mod/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{", "}<Link to="/mod/game-api/types/global-i-l/iremoteconsolehandler">{"IRemoteConsoleHandler"}</Link>{"> ConsoleDisconnected"}</code> | Raised when an authorized connection closes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"void Close()"}</code> | Disposes the websocket server and marks it inactive. |
| <Link id="m-start" /><code>{"void Start()"}</code> | Starts listening on `ws://0.0.0.0:1760`, routing Fleck logs into NLog; on failure logs and stays inactive. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createnewcommandhandler" /><code>{"private void CreateNewCommandHandler(IWebSocketConnection socket)"}</code> | Makes and tracks a command handler for a new socket and hooks its closed and authorized events. |
| <Link id="m-handlerauthorized" /><code>{"private void HandlerAuthorized("}<Link to="/mod/game-api/types/alta-console/websocketcommandhandler">{"WebSocketCommandHandler"}</Link>{" handler)"}</code> | Raises `ConsoleConnected` once a handler is authorized. |
| <Link id="m-remoteconsoleclosed" /><code>{"private void RemoteConsoleClosed("}<Link to="/mod/game-api/types/alta-console/websocketcommandhandler">{"WebSocketCommandHandler"}</Link>{" handler)"}</code> | Drops a closed handler from `Handlers` and raises `ConsoleDisconnected` if it was authorized. |

</details>
