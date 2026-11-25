---
title: "IRemoteConsole"
description: "interface IRemoteConsole in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IRemoteConsole

An **interface** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`WebSocketRemoteConsole`](/game-api/types/alta-console/websocketremoteconsole), [`ServerRemoteConsole`](/game-api/types/global-s/serverremoteconsole)

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

## Used in

Members of other types that take, return or hold a `IRemoteConsole`:

[`ServerConsoleManager.CloseConsole`](/game-api/types/global-s/serverconsolemanager#m-closeconsole), [`ServerConsoleManager.remoteConsole`](/game-api/types/global-s/serverconsolemanager#m-remoteconsole), [`ServerConsoleManager.remoteConsoleWS`](/game-api/types/global-s/serverconsolemanager#m-remoteconsolews), [`ServerConsoleManager.StartNewConsole`](/game-api/types/global-s/serverconsolemanager#m-startnewconsole).
