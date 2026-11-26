---
title: "GameModeManager"
description: "Static owner of the current GameMode: hosting a server, joining one, or a local test."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameModeManager

A **static class** in `Root.Township`, no namespace.

Static owner of the current `GameMode`: hosting a server, joining one, or a local test. Starts, swaps and stops modes, and handles the hold Ctrl+Q to quit key. Both sides.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Documented in** [Server lifecycle](/game-api/networking/server-lifecycle)

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentgameserverinfo" /><code>{"private static "}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" currentGameServerInfo"}</code> | Backing field for `CurrentGameServerInfo`. |
| <Link id="m-currentmode" /><code>{"private static "}<Link to="/game-api/types/global-e-h/gamemode">{"GameMode"}</Link>{" currentMode"}</code> | Backing field for `CurrentMode`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-quitkeys" /><code>{"private static readonly Key[] quitKeys"}</code> | The quit key combination: Q and Left Ctrl. |
| <Link id="m-triggerhandler" /><code>{"private static "}<Link to="/game-api/types/global-i-l/ikeyboardtriggerhandler">{"IKeyBoardTriggerHandler"}</Link>{" triggerHandler"}</code> | Handle for the registered quit key press, removed when the mode stops. |
| <Link id="m-validversionservice" /><code>{"private static readonly Lazy<"}<Link to="/game-api/types/assembly-other/ivalidversionservice">{"IValidVersionService"}</Link>{"> validVersionService"}</code> | Lazily resolved version check service. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentgameserverinfo-2" /><code>{"static "}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" CurrentGameServerInfo { get; }"}</code> | The server last joined through `JoinServer` or a deep link. Not cleared when the mode stops. |
| <Link id="m-currentmode-2" /><code>{"static "}<Link to="/game-api/types/global-e-h/gamemode">{"GameMode"}</Link>{" CurrentMode { get; }"}</code> | The active game mode, or null when none is running. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-modechanged" /><code>{"static event Action ModeChanged"}</code> | Raised when a mode starts or stops. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-joinserver" /><code>{"static async Task<bool> JoinServer("}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server)"}</code> | Client: checks the version, then starts a `JoinedServerGameMode` for the given server. |
| <Link id="m-joinserverfromserverviadeeplink" /><code>{"static async Task<bool> JoinServerFromServerViaDeeplink("}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server)"}</code> | Checks the version, stops the current mode without returning to the menu, unloads the game scene and joins the deep link server. |
| <Link id="m-startlocaltest" /><code>{"static async Task<bool> StartLocalTest("}<Link to="/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{" server = null)"}</code> | Starts a `LocalTestGameMode` on the given server access, or the local one from `MenuSettings`. |
| <Link id="m-startserver" /><code>{"static async Task<bool> StartServer("}<Link to="/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{" server, bool isHeadless, bool isExternalLaunch = false, int port = 1757, bool isRunningLocally = true)"}</code> | Starts a `ServerHostingGameMode` for the given server, headless flag and port (1757 by default). |
| <Link id="m-stopcurrentmodeasync" /><code>{"static async Task StopCurrentModeAsync(string reason, bool isReturningToMenu = true)"}</code> | Stops the current mode. Unless quitting, then returns to the main menu, or on a headless server quits after 10 seconds. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkquitkeyduration" /><code>{"private static async void CheckQuitKeyDuration(Key key)"}</code> | Counts down while Q and Left Ctrl are held, and after 5 seconds stops the current mode and returns to the menu. |
| <Link id="m-isclientversionuptodate" /><code>{"private static async Task<bool> IsClientVersionUpToDate()"}</code> | Checks the version with `IValidVersionService` and shows an update popup if it isn't valid. |
| <Link id="m-isgamequitkeycombinationpressed" /><code>{"private static bool IsGameQuitKeyCombinationPressed()"}</code> | True while both Q and Left Ctrl are held. |
| <Link id="m-ongamemodestarted" /><code>{"private static void OnGameModeStarted("}<Link to="/game-api/types/global-e-h/gamemode">{"GameMode"}</Link>{" gameMode)"}</code> | Tells the mode it started, registers the quit key and raises `ModeChanged`. |
| <Link id="m-ongamemodestartfailed" /><code>{"private static void OnGameModeStartFailed("}<Link to="/game-api/types/global-e-h/gamemode">{"GameMode"}</Link>{" gameMode)"}</code> | Tells the mode it failed and fades the screen back in. |
| <Link id="m-onmodechanged" /><code>{"private static void OnModeChanged()"}</code> | Raises `ModeChanged`. |
| <Link id="m-startgamemodeasync" /><code>{"private static async Task<bool> StartGameModeAsync("}<Link to="/game-api/types/global-e-h/gamemode">{"GameMode"}</Link>{" newMode)"}</code> | Activates a new mode and makes it current if it started. Fails if a mode is already active. |
| <Link id="m-swapgamemode" /><code>{"private static async Task<bool> SwapGameMode("}<Link to="/game-api/types/global-e-h/gamemode">{"GameMode"}</Link>{" newMode)"}</code> | Stops the current mode, unloads the game scene and starts the new mode. Used for deep link joins. |

</details>
