---
title: "ServerConsoleManager"
description: "Singleton that runs the server's admin consoles: a local console window and the remote TCP and WebSocket consoles."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerConsoleManager

A **class** in `Root.Township`, the global namespace.

Singleton that runs the server's admin consoles: a local console window and the remote TCP and WebSocket consoles. It only starts them when the logged-in account has the `debug_features` permission.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`SingletonBehaviour<ServerConsoleManager>`](/mod/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`ServerConsoleManager`](/mod/game-api/types/global-s/serverconsolemanager)
- **Documented in** [Remote console](/mod/game-api/console-and-utilities/remote-console#serverconsolemanager), [Startup and app state](/mod/game-api/console-and-utilities/startup-and-app-state)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerConsoleManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-console" /><code>{"private "}<Link to="/mod/game-api/types/global-s/serverconsole">{"ServerConsole"}</Link>{" console"}</code> | <span className="api-desc">The local console window, if open.</span> |
| <Link id="m-keyboardhandler" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/ikeyboardtriggerhandler">{"IKeyBoardTriggerHandler"}</Link>{" keyboardHandler"}</code> | <span className="api-desc">Handle for the backquote key registration.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-remoteconsole" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iremoteconsole">{"IRemoteConsole"}</Link>{" remoteConsole"}</code> | <span className="api-desc">The TCP remote console.</span> |
| <Link id="m-remoteconsolews" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iremoteconsole">{"IRemoteConsole"}</Link>{" remoteConsoleWS"}</code> | <span className="api-desc">The WebSocket remote console.</span> |
| <Link id="m-updateconsole" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateConsole"}</code> | <span className="api-desc">Update loop registration for `UpdateConsole`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectedhandlers" /><code>{"static HashSet<"}<Link to="/mod/game-api/types/global-i-l/iremoteconsolehandler">{"IRemoteConsoleHandler"}</Link>{"> ConnectedHandlers { get; }"}</code> | <span className="api-desc">Remote console connections currently open.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-consoleconnected" /><code>{"static event Action<"}<Link to="/mod/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{", "}<Link to="/mod/game-api/types/global-i-l/iremoteconsolehandler">{"IRemoteConsoleHandler"}</Link>{"> ConsoleConnected"}</code> | <span className="api-desc">Fired with the user and handler when a remote console connects.</span> |
| <Link id="m-consoledisconnected" /><code>{"static event Action<"}<Link to="/mod/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{", "}<Link to="/mod/game-api/types/global-i-l/iremoteconsolehandler">{"IRemoteConsoleHandler"}</Link>{"> ConsoleDisconnected"}</code> | <span className="api-desc">Fired with the user and handler when a remote console disconnects.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-startremoteconsole" /><code>{"void StartRemoteConsole()"}</code> | <span className="api-desc">Starts the TCP (`ServerRemoteConsole`) and WebSocket remote consoles, unless already started.</span> |
| <Link id="m-validateconsoletoken" /><code>{"static async Task<bool> ValidateConsoleToken(JwtSecurityToken token)"}</code> | <span className="api-desc">Checks a remote console's JWT. As decompiled, it returns false whenever a server is running (with or without a `server_id` claim) and true only when none is.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Checks permissions now if logged in, and again whenever the login changes.</span> |

<details className="api-private">
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkforconsolestart" /><code>{"private void CheckForConsoleStart(Key key)"}</code> | <span className="api-desc">Backquote key handler: opens the local console window if the account has `debug_features`.</span> |
| <Link id="m-checkpermissions" /><code>{"private void CheckPermissions()"}</code> | <span className="api-desc">If the account has `debug_features`, opens the local console when `/console` is on the command line, registers the backquote key and starts the remote consoles.</span> |
| <Link id="m-closeconsole" /><code>{"private void CloseConsole("}<Link to="/mod/game-api/types/global-i-l/iremoteconsole">{"IRemoteConsole"}</Link>{" console)"}</code> | <span className="api-desc">Closes one remote console and unhooks its events.</span> |
| <Link id="m-handleconsoleconnected" /><code>{"private void HandleConsoleConnected("}<Link to="/mod/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" user, "}<Link to="/mod/game-api/types/global-i-l/iremoteconsolehandler">{"IRemoteConsoleHandler"}</Link>{" remoteConsole)"}</code> | <span className="api-desc">Adds the handler to `ConnectedHandlers` and raises `ConsoleConnected`.</span> |
| <Link id="m-handleconsoledisconnected" /><code>{"private void HandleConsoleDisconnected("}<Link to="/mod/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" user, "}<Link to="/mod/game-api/types/global-i-l/iremoteconsolehandler">{"IRemoteConsoleHandler"}</Link>{" remoteConsole)"}</code> | <span className="api-desc">Removes the handler from `ConnectedHandlers` and raises `ConsoleDisconnected`.</span> |
| <Link id="m-handleinput" /><code>{"private async void HandleInput(string command)"}</code> | <span className="api-desc">Runs a line typed in the local console through `CommandService` and logs the result.</span> |
| <Link id="m-onapplicationquit" /><code>{"private void OnApplicationQuit()"}</code> | <span className="api-desc">Shuts down all consoles.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Shuts down all consoles.</span> |
| <Link id="m-shutdownconsole" /><code>{"private void ShutdownConsole()"}</code> | <span className="api-desc">Closes the remote consoles, shuts the local console window and stops its update.</span> |
| <Link id="m-startnewconsole" /><code>{"private void StartNewConsole("}<Link to="/mod/game-api/types/global-i-l/iremoteconsole">{"IRemoteConsole"}</Link>{" console)"}</code> | <span className="api-desc">Starts a remote console and hooks its connect and disconnect events.</span> |
| <Link id="m-startup" /><code>{"private void StartUp()"}</code> | <span className="api-desc">Opens the local console window, feeds it the server log and registers its input processing on the update loop.</span> |
| <Link id="m-updateconsole-2" /><code>{"private void UpdateConsole()"}</code> | <span className="api-desc">Processes queued input from the local console each frame.</span> |

</details>
