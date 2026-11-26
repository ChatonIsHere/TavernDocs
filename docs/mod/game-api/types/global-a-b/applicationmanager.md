---
title: "ApplicationManager"
description: "Singleton that handles app start, pause, reload and shutdown, and tells you whether this is a headless (server) build."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ApplicationManager

A **class** in `Root.Township`, the global namespace.

Singleton that handles app start, pause, reload and shutdown, and tells you whether this is a headless (server) build. Both sides.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`SingletonBehaviour<ApplicationManager>`](/mod/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`ApplicationManager`](/mod/game-api/types/global-a-b/applicationmanager)
- **Documented in** [Startup and app state](/mod/game-api/console-and-utilities/startup-and-app-state#applicationmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ApplicationManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isapplicationpaused" /><code>{"static bool IsApplicationPaused"}</code> | <span className="api-desc">Whether the app is paused right now.</span> |
| <Link id="m-shouldrestartaftershutdown" /><code>{"static bool ShouldRestartAfterShutdown"}</code> | <span className="api-desc">When true, the server heartbeat isn't shut down on quit.</span> |

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hasquit" /><code>{"private static bool hasQuit"}</code> | <span className="api-desc">True once `OnApplicationQuit` has run, so it only runs once.</span> |
| <Link id="m-iscleaning" /><code>{"private static bool isCleaning"}</code> | <span className="api-desc">True while `CleanMemory` is running, so calls don't overlap.</span> |
| <Link id="m-isheadless" /><code>{"private static bool isHeadless"}</code> | <span className="api-desc">Cached result of `IsHeadless`.</span> |
| <Link id="m-isquit" /><code>{"private static bool isQuit"}</code> | <span className="api-desc">True once `Update` has triggered the quit after an external shutdown request.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-needstocache" /><code>{"private static bool needsToCache"}</code> | <span className="api-desc">True until `IsHeadless` has checked the command line for `-batchmode` or `-nographics`.</span> |
| <Link id="m-serverhostcontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iserverhostcontroller">{"IServerHostController"}</Link>{" serverHostController"}</code> | <span className="api-desc">Injected `IServerHostController`. Set by `Inject` but not used in this file.</span> |
| <Link id="m-shutdownreason" /><code>{"private static "}<Link to="/mod/game-api/types/assembly-api-models/shutdownreason">{"ShutdownReason"}</Link>{" shutdownReason"}</code> | <span className="api-desc">Reason passed to `ExternalOnApplicationQuit`, given to `GameModeManager.StopCurrentModeAsync` on quit.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isheadless-2" /><code>{"static bool IsHeadless { get; }"}</code> | <span className="api-desc">True when launched with `-batchmode` or `-nographics`, as dedicated servers are. Most visual code checks this.</span> |
| <Link id="m-isquitting" /><code>{"static bool IsQuitting { get; private set; }"}</code> | <span className="api-desc">True once a shutdown has started.</span> |
| <Link id="m-isreloading" /><code>{"static bool IsReloading { get; private set; }"}</code> | <span className="api-desc">True between `StartReload` and `FinishReload`.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-applicationpaused" /><code>{"static event Action<bool> ApplicationPaused"}</code> | <span className="api-desc">Static. Raised with the new state when the app is paused or resumed.</span> |
| <Link id="m-applicationquit" /><code>{"static event Action ApplicationQuit"}</code> | <span className="api-desc">Static. Raised once at shutdown. Handlers run in the order set by `ApplicationShutdownOrder` on their declaring type.</span> |
| <Link id="m-gamereload" /><code>{"static event Action GameReload"}</code> | <span className="api-desc">Static. Raised when a scene reload starts.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cleanmemory" /><code>{"static async Task CleanMemory()"}</code> | <span className="api-desc">Unloads unused assets and runs a full garbage collection. Skipped if a clean is already running.</span> |
| <Link id="m-externalonapplicationquit" /><code>{"static void ExternalOnApplicationQuit("}<Link to="/mod/game-api/types/assembly-api-models/shutdownreason">{"ShutdownReason"}</Link>{" reason)"}</code> | <span className="api-desc">Asks for a shutdown with a reason. The actual shutdown runs on the next Update.</span> |
| <Link id="m-filteredcommandline" /><code>{"static string FilteredCommandLine()"}</code> | <span className="api-desc">The process command line with access, refresh and identity tokens and `/login` details masked out.</span> |
| <Link id="m-finishreload" /><code>{"static void FinishReload()"}</code> | <span className="api-desc">Clears `IsReloading`.</span> |
| <Link id="m-onapplicationquit" /><code>{"void OnApplicationQuit()"}</code> | <span className="api-desc">Shuts down once: stops the game mode, stops the heartbeat unless restarting, saves preferences, runs `ApplicationQuit`, finishes file writes and quits.</span> |
| <Link id="m-startreload" /><code>{"static void StartReload()"}</code> | <span className="api-desc">Starts a scene reload and raises `GameReload`, unless already reloading or quitting.</span> |
| <Link id="m-inject" /><code>{"protected void Inject("}<Link to="/mod/game-api/types/global-i-l/iserverhostcontroller">{"IServerHostController"}</Link>{" injectedServerHostController)"}</code> | <span className="api-desc">Receives the server host controller through dependency injection.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-loggameinfo" /><code>{"private static void LogGameInfo()"}</code> | <span className="api-desc">Logs the build version, player mode, filtered command line and system stats at startup.</span> |
| <Link id="m-onapplicationpause" /><code>{"private void OnApplicationPause(bool isPaused)"}</code> | <span className="api-desc">Unity callback: sets `IsApplicationPaused` and raises `ApplicationPaused`.</span> |
| <Link id="m-setup" /><code>{"private static void Setup()"}</code> | <span className="api-desc">Turns on run-in-background and sets the target frame rate to 90.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Clears `IsReloading`, applies `Setup` and logs game info.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Runs `OnApplicationQuit` once after `ExternalOnApplicationQuit` has set `IsQuitting`.</span> |

</details>
