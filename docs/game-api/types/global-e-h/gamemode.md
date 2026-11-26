---
title: "GameMode"
description: "Base for how the game runs (for example as a server or a client): starting up, loading the game scene and stopping."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameMode

An **abstract class** in `Root.Township`, no namespace.

Base for how the game runs (for example as a server or a client): starting up, loading the game scene and stopping.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Derived types** [`JoinServerGameModeBase`](/game-api/types/global-i-l/joinservergamemodebase), [`ServerHostingGameMode`](/game-api/types/global-s/serverhostinggamemode)
- **Documented in** [Server lifecycle](/game-api/networking/server-lifecycle)

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

[`GameModeManager.currentMode`](/game-api/types/global-e-h/gamemodemanager#m-currentmode), [`GameModeManager.CurrentMode`](/game-api/types/global-e-h/gamemodemanager#m-currentmode-2), [`GameModeManager.OnGameModeStarted`](/game-api/types/global-e-h/gamemodemanager#m-ongamemodestarted), [`GameModeManager.OnGameModeStartFailed`](/game-api/types/global-e-h/gamemodemanager#m-ongamemodestartfailed), [`GameModeManager.StartGameModeAsync`](/game-api/types/global-e-h/gamemodemanager#m-startgamemodeasync), [`GameModeManager.SwapGameMode`](/game-api/types/global-e-h/gamemodemanager#m-swapgamemode).
