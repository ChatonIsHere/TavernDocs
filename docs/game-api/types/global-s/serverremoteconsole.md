---
title: "ServerRemoteConsole"
description: "class ServerRemoteConsole in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerRemoteConsole

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`IRemoteConsole`](/game-api/types/global-i-l/iremoteconsole)
- **Documented in** [Remote console](/game-api/console-and-utilities/remote-console)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerRemoteConsole()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-serverconsoleport" /><code>{"const int ServerConsolePort"}</code> |  |
| <Link id="m-serverloggingport" /><code>{"const int ServerLoggingPort"}</code> |  |
| <Link id="m-allclienthandlers" /><code>{"private List<"}<Link to="/game-api/types/global-c-d/clienthandler">{"ClientHandler"}</Link>{"> allClientHandlers"}</code> |  |
| <Link id="m-alldone" /><code>{"private ManualResetEvent allDone"}</code> |  |
| <Link id="m-connectionhandlingthread" /><code>{"private Thread connectionHandlingThread"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-socket" /><code>{"private Socket socket"}</code> |  |

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
| <Link id="m-createclient" /><code>{"private void CreateClient(Socket clientSocket, JwtSecurityToken clientToken)"}</code> |  |
| <Link id="m-handleclientterminated" /><code>{"private void HandleClientTerminated("}<Link to="/game-api/types/global-c-d/clienthandler">{"ClientHandler"}</Link>{" client)"}</code> |  |
| <Link id="m-handlenewconnectionasync" /><code>{"private async void HandleNewConnectionAsync(IAsyncResult ar)"}</code> |  |
| <Link id="m-startsocketlisten" /><code>{"private void StartSocketListen()"}</code> |  |
