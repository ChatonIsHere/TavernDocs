---
title: "ServerConsoleManager"
description: "Singleton that runs the server's admin consoles: a local console window and the remote TCP and WebSocket consoles."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerConsoleManager

A **class** in `Root.Township`, no namespace.

Singleton that runs the server's admin consoles: a local console window and the remote TCP and WebSocket consoles. It only starts them when the logged-in account has the `debug_features` permission.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`SingletonBehaviour<ServerConsoleManager>`](/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`ServerConsoleManager`](/game-api/types/global-s/serverconsolemanager)
- **Documented in** [Remote console](/game-api/console-and-utilities/remote-console#serverconsolemanager), [Startup and app state](/game-api/console-and-utilities/startup-and-app-state)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerConsoleManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-console" /><code>{"private "}<Link to="/game-api/types/global-s/serverconsole">{"ServerConsole"}</Link>{" console"}</code> | The local console window, if open. |
| <Link id="m-keyboardhandler" /><code>{"private "}<Link to="/game-api/types/global-i-l/ikeyboardtriggerhandler">{"IKeyBoardTriggerHandler"}</Link>{" keyboardHandler"}</code> | Handle for the backquote key registration. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-remoteconsole" /><code>{"private "}<Link to="/game-api/types/global-i-l/iremoteconsole">{"IRemoteConsole"}</Link>{" remoteConsole"}</code> | The TCP remote console. |
| <Link id="m-remoteconsolews" /><code>{"private "}<Link to="/game-api/types/global-i-l/iremoteconsole">{"IRemoteConsole"}</Link>{" remoteConsoleWS"}</code> | The WebSocket remote console. |
| <Link id="m-updateconsole" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateConsole"}</code> | Update loop registration for `UpdateConsole`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectedhandlers" /><code>{"static HashSet<"}<Link to="/game-api/types/global-i-l/iremoteconsolehandler">{"IRemoteConsoleHandler"}</Link>{"> ConnectedHandlers { get; }"}</code> | Remote console connections currently open. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-consoleconnected" /><code>{"static event Action<"}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{", "}<Link to="/game-api/types/global-i-l/iremoteconsolehandler">{"IRemoteConsoleHandler"}</Link>{"> ConsoleConnected"}</code> | Fired with the user and handler when a remote console connects. |
| <Link id="m-consoledisconnected" /><code>{"static event Action<"}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{", "}<Link to="/game-api/types/global-i-l/iremoteconsolehandler">{"IRemoteConsoleHandler"}</Link>{"> ConsoleDisconnected"}</code> | Fired with the user and handler when a remote console disconnects. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-startremoteconsole" /><code>{"void StartRemoteConsole()"}</code> | Starts the TCP (`ServerRemoteConsole`) and WebSocket remote consoles, unless already started. |
| <Link id="m-validateconsoletoken" /><code>{"static async Task<bool> ValidateConsoleToken(JwtSecurityToken token)"}</code> | Checks a remote console's JWT. As decompiled, it returns false whenever a server is running (with or without a `server_id` claim) and true only when none is. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Checks permissions now if logged in, and again whenever the login changes. |

<details>
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkforconsolestart" /><code>{"private void CheckForConsoleStart(Key key)"}</code> | Backquote key handler: opens the local console window if the account has `debug_features`. |
| <Link id="m-checkpermissions" /><code>{"private void CheckPermissions()"}</code> | If the account has `debug_features`, opens the local console when `/console` is on the command line, registers the backquote key and starts the remote consoles. |
| <Link id="m-closeconsole" /><code>{"private void CloseConsole("}<Link to="/game-api/types/global-i-l/iremoteconsole">{"IRemoteConsole"}</Link>{" console)"}</code> | Closes one remote console and unhooks its events. |
| <Link id="m-handleconsoleconnected" /><code>{"private void HandleConsoleConnected("}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" user, "}<Link to="/game-api/types/global-i-l/iremoteconsolehandler">{"IRemoteConsoleHandler"}</Link>{" remoteConsole)"}</code> | Adds the handler to `ConnectedHandlers` and raises `ConsoleConnected`. |
| <Link id="m-handleconsoledisconnected" /><code>{"private void HandleConsoleDisconnected("}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" user, "}<Link to="/game-api/types/global-i-l/iremoteconsolehandler">{"IRemoteConsoleHandler"}</Link>{" remoteConsole)"}</code> | Removes the handler from `ConnectedHandlers` and raises `ConsoleDisconnected`. |
| <Link id="m-handleinput" /><code>{"private async void HandleInput(string command)"}</code> | Runs a line typed in the local console through `CommandService` and logs the result. |
| <Link id="m-onapplicationquit" /><code>{"private void OnApplicationQuit()"}</code> | Shuts down all consoles. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Shuts down all consoles. |
| <Link id="m-shutdownconsole" /><code>{"private void ShutdownConsole()"}</code> | Closes the remote consoles, shuts the local console window and stops its update. |
| <Link id="m-startnewconsole" /><code>{"private void StartNewConsole("}<Link to="/game-api/types/global-i-l/iremoteconsole">{"IRemoteConsole"}</Link>{" console)"}</code> | Starts a remote console and hooks its connect and disconnect events. |
| <Link id="m-startup" /><code>{"private void StartUp()"}</code> | Opens the local console window, feeds it the server log and registers its input processing on the update loop. |
| <Link id="m-updateconsole-2" /><code>{"private void UpdateConsole()"}</code> | Processes queued input from the local console each frame. |

</details>
