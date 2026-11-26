---
title: "ServerRemoteConsole"
description: "The TCP remote console: listens on port 1758 on a background thread, checks the JWT a client sends first and then hands the connection to a ClientHandler."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerRemoteConsole

A **class** in `Root.Township`, the global namespace.

The TCP remote console: listens on port 1758 on a background thread, checks the JWT a client sends first and then hands the connection to a `ClientHandler`. Started by `ServerConsoleManager`.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`IRemoteConsole`](/mod/game-api/types/global-i-l/iremoteconsole)
- **Documented in** [Remote console](/mod/game-api/console-and-utilities/remote-console)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerRemoteConsole()"}</code> | Creates a `ServerRemoteConsole` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-serverconsoleport" /><code>{"const int ServerConsolePort"}</code> | TCP port the console listens on (1758). |
| <Link id="m-serverloggingport" /><code>{"const int ServerLoggingPort"}</code> | Logging port constant (1759); not used in this class. |

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allclienthandlers" /><code>{"private List<"}<Link to="/mod/game-api/types/global-c-d/clienthandler">{"ClientHandler"}</Link>{"> allClientHandlers"}</code> | Clients currently connected. |
| <Link id="m-alldone" /><code>{"private ManualResetEvent allDone"}</code> | Signal that lets the listen loop accept the next connection. |
| <Link id="m-connectionhandlingthread" /><code>{"private Thread connectionHandlingThread"}</code> | The background listening thread. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-socket" /><code>{"private Socket socket"}</code> | The listening socket. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"static bool IsActive { get; private set; }"}</code> | True while the remote console is started and listening. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-consoleconnected" /><code>{"event Action<"}<Link to="/mod/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{", "}<Link to="/mod/game-api/types/global-i-l/iremoteconsolehandler">{"IRemoteConsoleHandler"}</Link>{"> ConsoleConnected"}</code> | Fired when a client passes the token check. |
| <Link id="m-consoledisconnected" /><code>{"event Action<"}<Link to="/mod/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{", "}<Link to="/mod/game-api/types/global-i-l/iremoteconsolehandler">{"IRemoteConsoleHandler"}</Link>{"> ConsoleDisconnected"}</code> | Fired when a client disconnects. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"void Close()"}</code> | Terminates every client, closes the listening socket and clears `IsActive`. |
| <Link id="m-start" /><code>{"void Start()"}</code> | Sets `IsActive` and starts the listening thread. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createclient" /><code>{"private void CreateClient(Socket clientSocket, JwtSecurityToken clientToken)"}</code> | Wraps an accepted socket in a `ClientHandler`, tracks it and raises `ConsoleConnected`. |
| <Link id="m-handleclientterminated" /><code>{"private void HandleClientTerminated("}<Link to="/mod/game-api/types/global-c-d/clienthandler">{"ClientHandler"}</Link>{" client)"}</code> | Stops tracking a disconnected client and raises `ConsoleDisconnected`. |
| <Link id="m-handlenewconnectionasync" /><code>{"private async void HandleNewConnectionAsync(IAsyncResult ar)"}</code> | Accepts a connection, reads the JWT, validates it with `ServerConsoleManager.ValidateConsoleToken` and replies "ok" or "Invalid Token". |
| <Link id="m-startsocketlisten" /><code>{"private void StartSocketListen()"}</code> | Thread body: binds port 1758 on all addresses and accepts connections one at a time, forever. |

</details>
