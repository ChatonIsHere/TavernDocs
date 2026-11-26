---
title: "IMainMenuLogger"
description: "Logger for main menu messages."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IMainMenuLogger

An **interface** in `Root.Township`, no namespace.

Logger for main menu messages. `MainMenuLogger.Logger` holds the current one, such as `MainMenuPlayerLogger`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`MainMenuLogger`](/game-api/types/global-m-o/mainmenulogger), [`MainMenuPlayerLogger`](/game-api/types/global-m-o/mainmenuplayerlogger)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-error" /><code>{"void Error(string errorMessage)"}</code> | Logs an error message, with or without an exception. |
| <Link id="m-error-2" /><code>{"void Error(Exception exception, string errorMessage)"}</code> | Logs an error message, with or without an exception. |
| <Link id="m-info" /><code>{"void Info(string logMessage)"}</code> | Logs an info message. |

## Used in

Members of other types that take, return or hold a `IMainMenuLogger`:

[`MainMenuLogger.Logger`](/game-api/types/global-m-o/mainmenulogger#m-logger-2).
