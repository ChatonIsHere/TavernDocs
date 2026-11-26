---
title: "MainMenuLogger"
description: "Singleton that logs main menu status messages to NLog and to an optional extra IMainMenuLogger (such as MainMenuPlayerLogger)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MainMenuLogger

A **class** in `Root.Township`, the global namespace.

Singleton that logs main menu status messages to NLog and to an optional extra `IMainMenuLogger` (such as `MainMenuPlayerLogger`). Reach it with `SingletonBehaviour<MainMenuLogger>.Instance`.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`SingletonBehaviour<MainMenuLogger>`](/mod/game-api/types/assembly-other/singletonbehaviour-t), [`IMainMenuLogger`](/mod/game-api/types/global-i-l/imainmenulogger)
- **Derived types** [`MainMenuLogger`](/mod/game-api/types/global-m-o/mainmenulogger)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MainMenuLogger()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-logger-2" /><code><Link to="/mod/game-api/types/global-i-l/imainmenulogger">{"IMainMenuLogger"}</Link>{" Logger { get; set; }"}</code> | <span className="api-desc">Extra logger that also gets each message, or null.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-error" /><code>{"void Error(string errorMessage)"}</code> | <span className="api-desc">Logs an error, with or without an exception, to NLog and to `Logger`.</span> |
| <Link id="m-error-2" /><code>{"void Error(Exception exception, string errorMessage = null)"}</code> | <span className="api-desc">Logs an error, with or without an exception, to NLog and to `Logger`.</span> |
| <Link id="m-info" /><code>{"void Info(string logMessage)"}</code> | <span className="api-desc">Logs an info message to NLog and to `Logger`.</span> |
