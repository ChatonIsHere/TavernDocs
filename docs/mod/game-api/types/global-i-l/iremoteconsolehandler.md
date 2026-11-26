---
title: "IRemoteConsoleHandler"
description: "One connected remote console session (WebSocket console or client handler)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IRemoteConsoleHandler

An **interface** in `Root.Township`, the global namespace.

One connected remote console session (WebSocket console or client handler). Passed with the `ConsoleConnected` and `ConsoleDisconnected` events of `ServerRemoteConsole`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`WebSocketCommandHandler`](/mod/game-api/types/alta-console/websocketcommandhandler), [`ClientHandler`](/mod/game-api/types/global-c-d/clienthandler)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-userinfo" /><code><Link to="/mod/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" UserInfo { get; }"}</code> | <span className="api-desc">The user behind this console session, with their permissions.</span> |

## Used in

Members of other types that take, return or hold a `IRemoteConsoleHandler`:

<div className="api-used-in">

[`WebSocketRemoteConsole.ConsoleConnected`](/mod/game-api/types/alta-console/websocketremoteconsole#m-consoleconnected), [`WebSocketRemoteConsole.ConsoleDisconnected`](/mod/game-api/types/alta-console/websocketremoteconsole#m-consoledisconnected), [`IRemoteConsole.ConsoleConnected`](/mod/game-api/types/global-i-l/iremoteconsole#m-consoleconnected), [`IRemoteConsole.ConsoleDisconnected`](/mod/game-api/types/global-i-l/iremoteconsole#m-consoledisconnected), [`ServerConsoleManager.ConnectedHandlers`](/mod/game-api/types/global-s/serverconsolemanager#m-connectedhandlers), [`ServerConsoleManager.ConsoleConnected`](/mod/game-api/types/global-s/serverconsolemanager#m-consoleconnected), [`ServerConsoleManager.ConsoleDisconnected`](/mod/game-api/types/global-s/serverconsolemanager#m-consoledisconnected), [`ServerConsoleManager.HandleConsoleConnected`](/mod/game-api/types/global-s/serverconsolemanager#m-handleconsoleconnected), [`ServerConsoleManager.HandleConsoleDisconnected`](/mod/game-api/types/global-s/serverconsolemanager#m-handleconsoledisconnected), [`ServerRemoteConsole.ConsoleConnected`](/mod/game-api/types/global-s/serverremoteconsole#m-consoleconnected), [`ServerRemoteConsole.ConsoleDisconnected`](/mod/game-api/types/global-s/serverremoteconsole#m-consoledisconnected).

</div>
