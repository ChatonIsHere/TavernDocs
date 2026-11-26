---
title: "MainMenuLogger"
description: "Singleton that logs main menu status messages to NLog and to an optional extra IMainMenuLogger (such as MainMenuPlayerLogger)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MainMenuLogger

A **class** in `Root.Township`, no namespace.

Singleton that logs main menu status messages to NLog and to an optional extra `IMainMenuLogger` (such as `MainMenuPlayerLogger`). Reach it with `SingletonBehaviour<MainMenuLogger>.Instance`.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`SingletonBehaviour<MainMenuLogger>`](/game-api/types/assembly-other/singletonbehaviour-t), [`IMainMenuLogger`](/game-api/types/global-i-l/imainmenulogger)
- **Derived types** [`MainMenuLogger`](/game-api/types/global-m-o/mainmenulogger)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MainMenuLogger()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-logger-2" /><code><Link to="/game-api/types/global-i-l/imainmenulogger">{"IMainMenuLogger"}</Link>{" Logger { get; set; }"}</code> | Extra logger that also gets each message, or null. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-error" /><code>{"void Error(string errorMessage)"}</code> | Logs an error, with or without an exception, to NLog and to `Logger`. |
| <Link id="m-error-2" /><code>{"void Error(Exception exception, string errorMessage = null)"}</code> | Logs an error, with or without an exception, to NLog and to `Logger`. |
| <Link id="m-info" /><code>{"void Info(string logMessage)"}</code> | Logs an info message to NLog and to `Logger`. |
