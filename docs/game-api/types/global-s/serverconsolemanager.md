---
title: "ServerConsoleManager"
description: "Get it with SingletonBehaviour<ServerConsoleManager>.Instance; most of what you need is static."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerConsoleManager

A **class** in `Root.Township`, no namespace.

Get it with `SingletonBehaviour<ServerConsoleManager>.Instance`; most of what you need is static.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`SingletonBehaviour<ServerConsoleManager>`](/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`ServerConsoleManager`](/game-api/types/global-s/serverconsolemanager)
- **Documented in** [Remote console](/game-api/console-and-utilities/remote-console#serverconsolemanager), [Startup and app state](/game-api/console-and-utilities/startup-and-app-state)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ServerConsoleManager()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-console" /><code>{"private "}<Link to="/game-api/types/global-s/serverconsole">{"ServerConsole"}</Link>{" console"}</code> |
| <Link id="m-keyboardhandler" /><code>{"private "}<Link to="/game-api/types/global-i-l/ikeyboardtriggerhandler">{"IKeyBoardTriggerHandler"}</Link>{" keyboardHandler"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-remoteconsole" /><code>{"private "}<Link to="/game-api/types/global-i-l/iremoteconsole">{"IRemoteConsole"}</Link>{" remoteConsole"}</code> |
| <Link id="m-remoteconsolews" /><code>{"private "}<Link to="/game-api/types/global-i-l/iremoteconsole">{"IRemoteConsole"}</Link>{" remoteConsoleWS"}</code> |
| <Link id="m-updateconsole" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateConsole"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-connectedhandlers" /><code>{"static HashSet<"}<Link to="/game-api/types/global-i-l/iremoteconsolehandler">{"IRemoteConsoleHandler"}</Link>{"> ConnectedHandlers { get; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-consoleconnected" /><code>{"static event Action<"}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{", "}<Link to="/game-api/types/global-i-l/iremoteconsolehandler">{"IRemoteConsoleHandler"}</Link>{"> ConsoleConnected"}</code> |
| <Link id="m-consoledisconnected" /><code>{"static event Action<"}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{", "}<Link to="/game-api/types/global-i-l/iremoteconsolehandler">{"IRemoteConsoleHandler"}</Link>{"> ConsoleDisconnected"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-startremoteconsole" /><code>{"void StartRemoteConsole()"}</code> |
| <Link id="m-validateconsoletoken" /><code>{"static async Task<bool> ValidateConsoleToken(JwtSecurityToken token)"}</code> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |

<details>
<summary>12 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-checkforconsolestart" /><code>{"private void CheckForConsoleStart(Key key)"}</code> |
| <Link id="m-checkpermissions" /><code>{"private void CheckPermissions()"}</code> |
| <Link id="m-closeconsole" /><code>{"private void CloseConsole("}<Link to="/game-api/types/global-i-l/iremoteconsole">{"IRemoteConsole"}</Link>{" console)"}</code> |
| <Link id="m-handleconsoleconnected" /><code>{"private void HandleConsoleConnected("}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" user, "}<Link to="/game-api/types/global-i-l/iremoteconsolehandler">{"IRemoteConsoleHandler"}</Link>{" remoteConsole)"}</code> |
| <Link id="m-handleconsoledisconnected" /><code>{"private void HandleConsoleDisconnected("}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" user, "}<Link to="/game-api/types/global-i-l/iremoteconsolehandler">{"IRemoteConsoleHandler"}</Link>{" remoteConsole)"}</code> |
| <Link id="m-handleinput" /><code>{"private async void HandleInput(string command)"}</code> |
| <Link id="m-onapplicationquit" /><code>{"private void OnApplicationQuit()"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-shutdownconsole" /><code>{"private void ShutdownConsole()"}</code> |
| <Link id="m-startnewconsole" /><code>{"private void StartNewConsole("}<Link to="/game-api/types/global-i-l/iremoteconsole">{"IRemoteConsole"}</Link>{" console)"}</code> |
| <Link id="m-startup" /><code>{"private void StartUp()"}</code> |
| <Link id="m-updateconsole-2" /><code>{"private void UpdateConsole()"}</code> |

</details>
