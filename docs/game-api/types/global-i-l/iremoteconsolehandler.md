---
title: "IRemoteConsoleHandler"
description: "One connected remote console session (WebSocket console or client handler)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IRemoteConsoleHandler

An **interface** in `Root.Township`, no namespace.

One connected remote console session (WebSocket console or client handler). Passed with the `ConsoleConnected` and `ConsoleDisconnected` events of `ServerRemoteConsole`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`WebSocketCommandHandler`](/game-api/types/alta-console/websocketcommandhandler), [`ClientHandler`](/game-api/types/global-c-d/clienthandler)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-userinfo" /><code><Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" UserInfo { get; }"}</code> | The user behind this console session, with their permissions. |

## Used in

Members of other types that take, return or hold a `IRemoteConsoleHandler`:

[`WebSocketRemoteConsole.ConsoleConnected`](/game-api/types/alta-console/websocketremoteconsole#m-consoleconnected), [`WebSocketRemoteConsole.ConsoleDisconnected`](/game-api/types/alta-console/websocketremoteconsole#m-consoledisconnected), [`IRemoteConsole.ConsoleConnected`](/game-api/types/global-i-l/iremoteconsole#m-consoleconnected), [`IRemoteConsole.ConsoleDisconnected`](/game-api/types/global-i-l/iremoteconsole#m-consoledisconnected), [`ServerConsoleManager.ConnectedHandlers`](/game-api/types/global-s/serverconsolemanager#m-connectedhandlers), [`ServerConsoleManager.ConsoleConnected`](/game-api/types/global-s/serverconsolemanager#m-consoleconnected), [`ServerConsoleManager.ConsoleDisconnected`](/game-api/types/global-s/serverconsolemanager#m-consoledisconnected), [`ServerConsoleManager.HandleConsoleConnected`](/game-api/types/global-s/serverconsolemanager#m-handleconsoleconnected), [`ServerConsoleManager.HandleConsoleDisconnected`](/game-api/types/global-s/serverconsolemanager#m-handleconsoledisconnected), [`ServerRemoteConsole.ConsoleConnected`](/game-api/types/global-s/serverremoteconsole#m-consoleconnected), [`ServerRemoteConsole.ConsoleDisconnected`](/game-api/types/global-s/serverremoteconsole#m-consoledisconnected).
