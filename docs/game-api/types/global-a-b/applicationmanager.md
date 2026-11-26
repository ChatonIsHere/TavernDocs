---
title: "ApplicationManager"
description: "Singleton that handles app start, pause, reload and shutdown, and tells you whether this is a headless (server) build."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ApplicationManager

A **class** in `Root.Township`, no namespace.

Singleton that handles app start, pause, reload and shutdown, and tells you whether this is a headless (server) build. Both sides.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`SingletonBehaviour<ApplicationManager>`](/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`ApplicationManager`](/game-api/types/global-a-b/applicationmanager)
- **Documented in** [Startup and app state](/game-api/console-and-utilities/startup-and-app-state#applicationmanager)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ApplicationManager()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isapplicationpaused" /><code>{"static bool IsApplicationPaused"}</code> | Whether the app is paused right now. |
| <Link id="m-shouldrestartaftershutdown" /><code>{"static bool ShouldRestartAfterShutdown"}</code> | When true, the server heartbeat isn't shut down on quit. |

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hasquit" /><code>{"private static bool hasQuit"}</code> | True once `OnApplicationQuit` has run, so it only runs once. |
| <Link id="m-iscleaning" /><code>{"private static bool isCleaning"}</code> | True while `CleanMemory` is running, so calls don't overlap. |
| <Link id="m-isheadless" /><code>{"private static bool isHeadless"}</code> | Cached result of `IsHeadless`. |
| <Link id="m-isquit" /><code>{"private static bool isQuit"}</code> | True once `Update` has triggered the quit after an external shutdown request. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-needstocache" /><code>{"private static bool needsToCache"}</code> | True until `IsHeadless` has checked the command line for `-batchmode` or `-nographics`. |
| <Link id="m-serverhostcontroller" /><code>{"private "}<Link to="/game-api/types/global-i-l/iserverhostcontroller">{"IServerHostController"}</Link>{" serverHostController"}</code> | Injected `IServerHostController`. Set by `Inject` but not used in this file. |
| <Link id="m-shutdownreason" /><code>{"private static "}<Link to="/game-api/types/assembly-api-models/shutdownreason">{"ShutdownReason"}</Link>{" shutdownReason"}</code> | Reason passed to `ExternalOnApplicationQuit`, given to `GameModeManager.StopCurrentModeAsync` on quit. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isheadless-2" /><code>{"static bool IsHeadless { get; }"}</code> | True when launched with `-batchmode` or `-nographics`, as dedicated servers are. Most visual code checks this. |
| <Link id="m-isquitting" /><code>{"static bool IsQuitting { get; private set; }"}</code> | True once a shutdown has started. |
| <Link id="m-isreloading" /><code>{"static bool IsReloading { get; private set; }"}</code> | True between `StartReload` and `FinishReload`. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-applicationpaused" /><code>{"static event Action<bool> ApplicationPaused"}</code> | Static. Raised with the new state when the app is paused or resumed. |
| <Link id="m-applicationquit" /><code>{"static event Action ApplicationQuit"}</code> | Static. Raised once at shutdown. Handlers run in the order set by `ApplicationShutdownOrder` on their declaring type. |
| <Link id="m-gamereload" /><code>{"static event Action GameReload"}</code> | Static. Raised when a scene reload starts. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cleanmemory" /><code>{"static async Task CleanMemory()"}</code> | Unloads unused assets and runs a full garbage collection. Skipped if a clean is already running. |
| <Link id="m-externalonapplicationquit" /><code>{"static void ExternalOnApplicationQuit("}<Link to="/game-api/types/assembly-api-models/shutdownreason">{"ShutdownReason"}</Link>{" reason)"}</code> | Asks for a shutdown with a reason. The actual shutdown runs on the next Update. |
| <Link id="m-filteredcommandline" /><code>{"static string FilteredCommandLine()"}</code> | The process command line with access, refresh and identity tokens and `/login` details masked out. |
| <Link id="m-finishreload" /><code>{"static void FinishReload()"}</code> | Clears `IsReloading`. |
| <Link id="m-onapplicationquit" /><code>{"void OnApplicationQuit()"}</code> | Shuts down once: stops the game mode, stops the heartbeat unless restarting, saves preferences, runs `ApplicationQuit`, finishes file writes and quits. |
| <Link id="m-startreload" /><code>{"static void StartReload()"}</code> | Starts a scene reload and raises `GameReload`, unless already reloading or quitting. |
| <Link id="m-inject" /><code>{"protected void Inject("}<Link to="/game-api/types/global-i-l/iserverhostcontroller">{"IServerHostController"}</Link>{" injectedServerHostController)"}</code> | Receives the server host controller through dependency injection. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-loggameinfo" /><code>{"private static void LogGameInfo()"}</code> | Logs the build version, player mode, filtered command line and system stats at startup. |
| <Link id="m-onapplicationpause" /><code>{"private void OnApplicationPause(bool isPaused)"}</code> | Unity callback: sets `IsApplicationPaused` and raises `ApplicationPaused`. |
| <Link id="m-setup" /><code>{"private static void Setup()"}</code> | Turns on run-in-background and sets the target frame rate to 90. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Clears `IsReloading`, applies `Setup` and logs game info. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Runs `OnApplicationQuit` once after `ExternalOnApplicationQuit` has set `IsQuitting`. |

</details>
