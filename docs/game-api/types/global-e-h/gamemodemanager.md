---
title: "GameModeManager"
description: "CurrentMode, CurrentGameServerInfo, StartServer, JoinServer, StartLocalTest, StopCurrentModeAsync, event ModeChanged."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameModeManager

A **static class** in `Root.Township`, no namespace.

`CurrentMode`, `CurrentGameServerInfo`, `StartServer`, `JoinServer`, `StartLocalTest`, `StopCurrentModeAsync`, event `ModeChanged`.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Documented in** [Server lifecycle](/game-api/networking/server-lifecycle)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentgameserverinfo" /><code>{"private static "}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" currentGameServerInfo"}</code> |  |
| <Link id="m-currentmode" /><code>{"private static "}<Link to="/game-api/types/global-e-h/gamemode">{"GameMode"}</Link>{" currentMode"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-quitkeys" /><code>{"private static readonly Key[] quitKeys"}</code> |  |
| <Link id="m-triggerhandler" /><code>{"private static "}<Link to="/game-api/types/global-i-l/ikeyboardtriggerhandler">{"IKeyBoardTriggerHandler"}</Link>{" triggerHandler"}</code> |  |
| <Link id="m-validversionservice" /><code>{"private static readonly Lazy<"}<Link to="/game-api/types/assembly-other/ivalidversionservice">{"IValidVersionService"}</Link>{"> validVersionService"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentgameserverinfo-2" /><code>{"static "}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" CurrentGameServerInfo { get; }"}</code> |  |
| <Link id="m-currentmode-2" /><code>{"static "}<Link to="/game-api/types/global-e-h/gamemode">{"GameMode"}</Link>{" CurrentMode { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-modechanged" /><code>{"static event Action ModeChanged"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-joinserver" /><code>{"static async Task<bool> JoinServer("}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server)"}</code> |  |
| <Link id="m-joinserverfromserverviadeeplink" /><code>{"static async Task<bool> JoinServerFromServerViaDeeplink("}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server)"}</code> |  |
| <Link id="m-startlocaltest" /><code>{"static async Task<bool> StartLocalTest("}<Link to="/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{" server = null)"}</code> |  |
| <Link id="m-startserver" /><code>{"static async Task<bool> StartServer("}<Link to="/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{" server, bool isHeadless, bool isExternalLaunch = false, int port = 1757, bool isRunningLocally = true)"}</code> |  |
| <Link id="m-stopcurrentmodeasync" /><code>{"static async Task StopCurrentModeAsync(string reason, bool isReturningToMenu = true)"}</code> |  |
| <Link id="m-checkquitkeyduration" /><code>{"private static async void CheckQuitKeyDuration(Key key)"}</code> |  |
| <Link id="m-isclientversionuptodate" /><code>{"private static async Task<bool> IsClientVersionUpToDate()"}</code> |  |
| <Link id="m-isgamequitkeycombinationpressed" /><code>{"private static bool IsGameQuitKeyCombinationPressed()"}</code> |  |
| <Link id="m-ongamemodestarted" /><code>{"private static void OnGameModeStarted("}<Link to="/game-api/types/global-e-h/gamemode">{"GameMode"}</Link>{" gameMode)"}</code> |  |
| <Link id="m-ongamemodestartfailed" /><code>{"private static void OnGameModeStartFailed("}<Link to="/game-api/types/global-e-h/gamemode">{"GameMode"}</Link>{" gameMode)"}</code> |  |
| <Link id="m-onmodechanged" /><code>{"private static void OnModeChanged()"}</code> |  |
| <Link id="m-startgamemodeasync" /><code>{"private static async Task<bool> StartGameModeAsync("}<Link to="/game-api/types/global-e-h/gamemode">{"GameMode"}</Link>{" newMode)"}</code> |  |
| <Link id="m-swapgamemode" /><code>{"private static async Task<bool> SwapGameMode("}<Link to="/game-api/types/global-e-h/gamemode">{"GameMode"}</Link>{" newMode)"}</code> |  |
