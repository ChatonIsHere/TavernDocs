---
title: "IServerHostController"
description: "Hook for an outside host to start, reset and stop the server and track player counts."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IServerHostController

An **interface** in `Root.Township`, the global namespace.

Hook for an outside host to start, reset and stop the server and track player counts. Clients bind `FakeHostController` (all no-ops); the managers that receive it never call it in this build.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`FakeHostController`](/mod/game-api/types/global-e-h/fakehostcontroller)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isofflineserver" /><code>{"bool IsOfflineServer { get; }"}</code> | <span className="api-desc">True for an offline server. `FakeHostController` returns true.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cancelemptyservershutdown" /><code>{"void CancelEmptyServerShutdown(bool disablePermanently = false)"}</code> | <span className="api-desc">Cancels a pending shutdown of an empty server, optionally for good.</span> |
| <Link id="m-handleplayerscountchange" /><code>{"Task HandlePlayersCountChange(int newCount)"}</code> | <span className="api-desc">Called with the new player count.</span> |
| <Link id="m-markserverready" /><code>{"void MarkServerReady()"}</code> | <span className="api-desc">Marks the server ready for players.</span> |
| <Link id="m-resetserver" /><code>{"Task ResetServer()"}</code> | <span className="api-desc">Resets the server.</span> |
| <Link id="m-start" /><code>{"Task Start()"}</code> | <span className="api-desc">Starts hosting.</span> |
| <Link id="m-stop" /><code>{"Task Stop()"}</code> | <span className="api-desc">Stops hosting.</span> |

## Used in

Members of other types that take, return or hold a `IServerHostController`:

<div className="api-used-in">

[`ApplicationManager.Inject`](/mod/game-api/types/global-a-b/applicationmanager#m-inject), [`ApplicationManager.serverHostController`](/mod/game-api/types/global-a-b/applicationmanager#m-serverhostcontroller), [`ApplicationStartupManager.Inject`](/mod/game-api/types/global-a-b/applicationstartupmanager#m-inject), [`ApplicationStartupManager.serverHostController`](/mod/game-api/types/global-a-b/applicationstartupmanager#m-serverhostcontroller).

</div>
