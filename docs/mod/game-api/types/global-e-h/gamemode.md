---
title: "GameMode"
description: "Base for how the game runs (for example as a server or a client): starting up, loading the game scene and stopping."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameMode

An **abstract class** in `Root.Township`, the global namespace.

Base for how the game runs (for example as a server or a client): starting up, loading the game scene and stopping.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Derived types** [`JoinServerGameModeBase`](/mod/game-api/types/global-i-l/joinservergamemodebase), [`ServerHostingGameMode`](/mod/game-api/types/global-s/serverhostinggamemode)
- **Documented in** [Server lifecycle](/mod/game-api/networking/server-lifecycle)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected GameMode()"}</code> | Creates a `GameMode` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | Shared logger. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isclient" /><code>{"abstract bool IsClient { get; }"}</code> | Whether this mode runs a client. |
| <Link id="m-isserver" /><code>{"abstract bool IsServer { get; }"}</code> | Whether this mode runs a server. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activateasync" /><code>{"abstract Task<bool> ActivateAsync()"}</code> | Subclass: starts the mode. True on success. |
| <Link id="m-onstartfailed" /><code>{"virtual void OnStartFailed()"}</code> | Called after a failed start. Empty by default. |
| <Link id="m-onstartsucceeded" /><code>{"virtual void OnStartSucceeded()"}</code> | Called after a successful start. Empty by default. |
| <Link id="m-stopmodeasync" /><code>{"virtual Task StopModeAsync(string reason)"}</code> | Stops the mode. The base clears every timeline entry. |
| <Link id="m-loadandswaptogamesceneasync" /><code>{"protected virtual async Task LoadAndSwapToGameSceneAsync(int sceneIndex)"}</code> | Fades the local player to black, waits half a second and loads the game scene by index. |

## Used in

Members of other types that take, return or hold a `GameMode`:

[`GameModeManager.currentMode`](/mod/game-api/types/global-e-h/gamemodemanager#m-currentmode), [`GameModeManager.CurrentMode`](/mod/game-api/types/global-e-h/gamemodemanager#m-currentmode-2), [`GameModeManager.OnGameModeStarted`](/mod/game-api/types/global-e-h/gamemodemanager#m-ongamemodestarted), [`GameModeManager.OnGameModeStartFailed`](/mod/game-api/types/global-e-h/gamemodemanager#m-ongamemodestartfailed), [`GameModeManager.StartGameModeAsync`](/mod/game-api/types/global-e-h/gamemodemanager#m-startgamemodeasync), [`GameModeManager.SwapGameMode`](/mod/game-api/types/global-e-h/gamemodemanager#m-swapgamemode).
