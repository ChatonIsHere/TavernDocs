---
title: "FakeHostController"
description: "Do-nothing IServerHostController, bound as the singleton in ApplicationLifetimeScope."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FakeHostController

A **class** in `Root.Township`, the global namespace.

Do-nothing `IServerHostController`, bound as the singleton in `ApplicationLifetimeScope`. Reports itself as an offline server and every method is a no-op.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`IServerHostController`](/mod/game-api/types/global-i-l/iserverhostcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FakeHostController()"}</code> | <span className="api-desc">Creates a `FakeHostController` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isofflineserver" /><code>{"bool IsOfflineServer { get; }"}</code> | <span className="api-desc">Always true.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cancelemptyservershutdown" /><code>{"void CancelEmptyServerShutdown(bool disablePermanently = false)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-handleplayerscountchange" /><code>{"Task HandlePlayersCountChange(int newCount)"}</code> | <span className="api-desc">Does nothing and returns null rather than a task.</span> |
| <Link id="m-markserverready" /><code>{"void MarkServerReady()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-resetserver" /><code>{"Task ResetServer()"}</code> | <span className="api-desc">Does nothing and returns null rather than a task.</span> |
| <Link id="m-start" /><code>{"Task Start()"}</code> | <span className="api-desc">Does nothing and returns null rather than a task.</span> |
| <Link id="m-stop" /><code>{"Task Stop()"}</code> | <span className="api-desc">Does nothing and returns null rather than a task.</span> |
