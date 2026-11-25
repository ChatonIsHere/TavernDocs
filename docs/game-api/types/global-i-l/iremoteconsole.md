---
title: "IRemoteConsole"
description: "A remote console server, such as WebSocketRemoteConsole (port 1760) and ServerRemoteConsole (port 1758)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IRemoteConsole

An **interface** in `Root.Township`, no namespace.

A remote console server, such as `WebSocketRemoteConsole` (port 1760) and `ServerRemoteConsole` (port 1758). Started and closed by `ServerConsoleManager`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`WebSocketRemoteConsole`](/game-api/types/alta-console/websocketremoteconsole), [`ServerRemoteConsole`](/game-api/types/global-s/serverremoteconsole)

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-consoleconnected" /><code>{"event Action<"}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{", "}<Link to="/game-api/types/global-i-l/iremoteconsolehandler">{"IRemoteConsoleHandler"}</Link>{"> ConsoleConnected"}</code> | A session logged in. |
| <Link id="m-consoledisconnected" /><code>{"event Action<"}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{", "}<Link to="/game-api/types/global-i-l/iremoteconsolehandler">{"IRemoteConsoleHandler"}</Link>{"> ConsoleDisconnected"}</code> | A session closed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"void Close()"}</code> | Stops the console and its connections. |
| <Link id="m-start" /><code>{"void Start()"}</code> | Starts listening. |

## Used in

Members of other types that take, return or hold a `IRemoteConsole`:

[`ServerConsoleManager.CloseConsole`](/game-api/types/global-s/serverconsolemanager#m-closeconsole), [`ServerConsoleManager.remoteConsole`](/game-api/types/global-s/serverconsolemanager#m-remoteconsole), [`ServerConsoleManager.remoteConsoleWS`](/game-api/types/global-s/serverconsolemanager#m-remoteconsolews), [`ServerConsoleManager.StartNewConsole`](/game-api/types/global-s/serverconsolemanager#m-startnewconsole).
