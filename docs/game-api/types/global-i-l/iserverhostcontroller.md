---
title: "IServerHostController"
description: "interface IServerHostController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IServerHostController

An **interface** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`FakeHostController`](/game-api/types/global-e-h/fakehostcontroller)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isofflineserver" /><code>{"bool IsOfflineServer { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cancelemptyservershutdown" /><code>{"void CancelEmptyServerShutdown(bool disablePermanently = false)"}</code> |  |
| <Link id="m-handleplayerscountchange" /><code>{"Task HandlePlayersCountChange(int newCount)"}</code> |  |
| <Link id="m-markserverready" /><code>{"void MarkServerReady()"}</code> |  |
| <Link id="m-resetserver" /><code>{"Task ResetServer()"}</code> |  |
| <Link id="m-start" /><code>{"Task Start()"}</code> |  |
| <Link id="m-stop" /><code>{"Task Stop()"}</code> |  |

## Used in

Members of other types that take, return or hold a `IServerHostController`:

[`ApplicationManager.Inject`](/game-api/types/global-a-b/applicationmanager#m-inject), [`ApplicationManager.serverHostController`](/game-api/types/global-a-b/applicationmanager#m-serverhostcontroller), [`ApplicationStartupManager.Inject`](/game-api/types/global-a-b/applicationstartupmanager#m-inject), [`ApplicationStartupManager.serverHostController`](/game-api/types/global-a-b/applicationstartupmanager#m-serverhostcontroller).
