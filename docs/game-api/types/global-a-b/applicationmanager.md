---
title: "ApplicationManager"
description: "Most members are static. (There's an unrelated Discord.ApplicationManager too.)"
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ApplicationManager

A **class** in `Root.Township`, no namespace.

Most members are static. (There's an unrelated `Discord.ApplicationManager` too.)

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`SingletonBehaviour<ApplicationManager>`](/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`ApplicationManager`](/game-api/types/global-a-b/applicationmanager)
- **Documented in** [Startup and app state](/game-api/console-and-utilities/startup-and-app-state#applicationmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ApplicationManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isapplicationpaused" /><code>{"static bool IsApplicationPaused"}</code> |  |
| <Link id="m-shouldrestartaftershutdown" /><code>{"static bool ShouldRestartAfterShutdown"}</code> |  |
| <Link id="m-hasquit" /><code>{"private static bool hasQuit"}</code> |  |
| <Link id="m-iscleaning" /><code>{"private static bool isCleaning"}</code> |  |
| <Link id="m-isheadless" /><code>{"private static bool isHeadless"}</code> |  |
| <Link id="m-isquit" /><code>{"private static bool isQuit"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-needstocache" /><code>{"private static bool needsToCache"}</code> |  |
| <Link id="m-serverhostcontroller" /><code>{"private "}<Link to="/game-api/types/global-i-l/iserverhostcontroller">{"IServerHostController"}</Link>{" serverHostController"}</code> |  |
| <Link id="m-shutdownreason" /><code>{"private static "}<Link to="/game-api/types/assembly-api-models/shutdownreason">{"ShutdownReason"}</Link>{" shutdownReason"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isheadless-2" /><code>{"static bool IsHeadless { get; }"}</code> |  |
| <Link id="m-isquitting" /><code>{"static bool IsQuitting { get; private set; }"}</code> |  |
| <Link id="m-isreloading" /><code>{"static bool IsReloading { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-applicationpaused" /><code>{"static event Action<bool> ApplicationPaused"}</code> |  |
| <Link id="m-applicationquit" /><code>{"static event Action ApplicationQuit"}</code> |  |
| <Link id="m-gamereload" /><code>{"static event Action GameReload"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cleanmemory" /><code>{"static async Task CleanMemory()"}</code> |  |
| <Link id="m-externalonapplicationquit" /><code>{"static void ExternalOnApplicationQuit("}<Link to="/game-api/types/assembly-api-models/shutdownreason">{"ShutdownReason"}</Link>{" reason)"}</code> |  |
| <Link id="m-filteredcommandline" /><code>{"static string FilteredCommandLine()"}</code> |  |
| <Link id="m-finishreload" /><code>{"static void FinishReload()"}</code> |  |
| <Link id="m-onapplicationquit" /><code>{"void OnApplicationQuit()"}</code> |  |
| <Link id="m-startreload" /><code>{"static void StartReload()"}</code> |  |
| <Link id="m-inject" /><code>{"protected void Inject("}<Link to="/game-api/types/global-i-l/iserverhostcontroller">{"IServerHostController"}</Link>{" injectedServerHostController)"}</code> |  |
| <Link id="m-loggameinfo" /><code>{"private static void LogGameInfo()"}</code> |  |
| <Link id="m-onapplicationpause" /><code>{"private void OnApplicationPause(bool isPaused)"}</code> |  |
| <Link id="m-setup" /><code>{"private static void Setup()"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
| <Link id="m-update" /><code>{"private void Update()"}</code> |  |
