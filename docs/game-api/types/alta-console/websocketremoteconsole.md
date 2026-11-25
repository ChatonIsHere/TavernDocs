---
title: "WebSocketRemoteConsole"
description: "class WebSocketRemoteConsole in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WebSocketRemoteConsole

A **class** in `Root.Township`, `Alta.Console`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Inherits or implements** [`IRemoteConsole`](/game-api/types/global-i-l/iremoteconsole)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WebSocketRemoteConsole()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-handlers" /><code>{"static List<"}<Link to="/game-api/types/alta-console/websocketcommandhandler">{"WebSocketCommandHandler"}</Link>{"> Handlers"}</code> |  |
| <Link id="m-websocketport" /><code>{"const int WebsocketPort"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-server" /><code>{"private WebSocketServer server"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"static bool IsActive { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-consoleconnected" /><code>{"event Action<"}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{", "}<Link to="/game-api/types/global-i-l/iremoteconsolehandler">{"IRemoteConsoleHandler"}</Link>{"> ConsoleConnected"}</code> |  |
| <Link id="m-consoledisconnected" /><code>{"event Action<"}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{", "}<Link to="/game-api/types/global-i-l/iremoteconsolehandler">{"IRemoteConsoleHandler"}</Link>{"> ConsoleDisconnected"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"void Close()"}</code> |  |
| <Link id="m-start" /><code>{"void Start()"}</code> |  |
| <Link id="m-createnewcommandhandler" /><code>{"private void CreateNewCommandHandler(IWebSocketConnection socket)"}</code> |  |
| <Link id="m-handlerauthorized" /><code>{"private void HandlerAuthorized("}<Link to="/game-api/types/alta-console/websocketcommandhandler">{"WebSocketCommandHandler"}</Link>{" handler)"}</code> |  |
| <Link id="m-remoteconsoleclosed" /><code>{"private void RemoteConsoleClosed("}<Link to="/game-api/types/alta-console/websocketcommandhandler">{"WebSocketCommandHandler"}</Link>{" handler)"}</code> |  |
