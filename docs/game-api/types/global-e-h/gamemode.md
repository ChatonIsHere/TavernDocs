---
title: "GameMode"
description: "Abstract base: IsClient, IsServer, ActivateAsync(), StopModeAsync. Subclasses: ServerHostingGameMode, JoinedServerGameMode, LocalTestGameMode."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameMode

An **abstract class** in `Root.Township`, no namespace.

Abstract base: `IsClient`, `IsServer`, `ActivateAsync()`, `StopModeAsync`. Subclasses: `ServerHostingGameMode`, `JoinedServerGameMode`, `LocalTestGameMode`.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Derived types** [`JoinServerGameModeBase`](/game-api/types/global-i-l/joinservergamemodebase), [`ServerHostingGameMode`](/game-api/types/global-s/serverhostinggamemode)
- **Documented in** [Server lifecycle](/game-api/networking/server-lifecycle)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected GameMode()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isclient" /><code>{"abstract bool IsClient { get; }"}</code> |  |
| <Link id="m-isserver" /><code>{"abstract bool IsServer { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activateasync" /><code>{"abstract Task<bool> ActivateAsync()"}</code> |  |
| <Link id="m-onstartfailed" /><code>{"virtual void OnStartFailed()"}</code> |  |
| <Link id="m-onstartsucceeded" /><code>{"virtual void OnStartSucceeded()"}</code> |  |
| <Link id="m-stopmodeasync" /><code>{"virtual Task StopModeAsync(string reason)"}</code> |  |
| <Link id="m-loadandswaptogamesceneasync" /><code>{"protected virtual async Task LoadAndSwapToGameSceneAsync(int sceneIndex)"}</code> |  |

## Used in

Members of other types that take, return or hold a `GameMode`:

[`GameModeManager.currentMode`](/game-api/types/global-e-h/gamemodemanager#m-currentmode), [`GameModeManager.CurrentMode`](/game-api/types/global-e-h/gamemodemanager#m-currentmode-2), [`GameModeManager.OnGameModeStarted`](/game-api/types/global-e-h/gamemodemanager#m-ongamemodestarted), [`GameModeManager.OnGameModeStartFailed`](/game-api/types/global-e-h/gamemodemanager#m-ongamemodestartfailed), [`GameModeManager.StartGameModeAsync`](/game-api/types/global-e-h/gamemodemanager#m-startgamemodeasync), [`GameModeManager.SwapGameMode`](/game-api/types/global-e-h/gamemodemanager#m-swapgamemode).
