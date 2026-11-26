---
title: "IServerHostController"
description: "Hook for an outside host to start, reset and stop the server and track player counts."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IServerHostController

An **interface** in `Root.Township`, no namespace.

Hook for an outside host to start, reset and stop the server and track player counts. Clients bind `FakeHostController` (all no-ops); the managers that receive it never call it in this build.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`FakeHostController`](/game-api/types/global-e-h/fakehostcontroller)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isofflineserver" /><code>{"bool IsOfflineServer { get; }"}</code> | True for an offline server. `FakeHostController` returns true. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cancelemptyservershutdown" /><code>{"void CancelEmptyServerShutdown(bool disablePermanently = false)"}</code> | Cancels a pending shutdown of an empty server, optionally for good. |
| <Link id="m-handleplayerscountchange" /><code>{"Task HandlePlayersCountChange(int newCount)"}</code> | Called with the new player count. |
| <Link id="m-markserverready" /><code>{"void MarkServerReady()"}</code> | Marks the server ready for players. |
| <Link id="m-resetserver" /><code>{"Task ResetServer()"}</code> | Resets the server. |
| <Link id="m-start" /><code>{"Task Start()"}</code> | Starts hosting. |
| <Link id="m-stop" /><code>{"Task Stop()"}</code> | Stops hosting. |

## Used in

Members of other types that take, return or hold a `IServerHostController`:

[`ApplicationManager.Inject`](/game-api/types/global-a-b/applicationmanager#m-inject), [`ApplicationManager.serverHostController`](/game-api/types/global-a-b/applicationmanager#m-serverhostcontroller), [`ApplicationStartupManager.Inject`](/game-api/types/global-a-b/applicationstartupmanager#m-inject), [`ApplicationStartupManager.serverHostController`](/game-api/types/global-a-b/applicationstartupmanager#m-serverhostcontroller).
