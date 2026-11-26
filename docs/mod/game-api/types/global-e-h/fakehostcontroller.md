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
| <Link id="m-ctor" /><code>{"FakeHostController()"}</code> | Creates a `FakeHostController` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isofflineserver" /><code>{"bool IsOfflineServer { get; }"}</code> | Always true. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cancelemptyservershutdown" /><code>{"void CancelEmptyServerShutdown(bool disablePermanently = false)"}</code> | Does nothing. |
| <Link id="m-handleplayerscountchange" /><code>{"Task HandlePlayersCountChange(int newCount)"}</code> | Does nothing and returns null rather than a task. |
| <Link id="m-markserverready" /><code>{"void MarkServerReady()"}</code> | Does nothing. |
| <Link id="m-resetserver" /><code>{"Task ResetServer()"}</code> | Does nothing and returns null rather than a task. |
| <Link id="m-start" /><code>{"Task Start()"}</code> | Does nothing and returns null rather than a task. |
| <Link id="m-stop" /><code>{"Task Stop()"}</code> | Does nothing and returns null rather than a task. |
