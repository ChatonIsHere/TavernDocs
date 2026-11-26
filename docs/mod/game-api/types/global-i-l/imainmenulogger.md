---
title: "IMainMenuLogger"
description: "Logger for main menu messages."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IMainMenuLogger

An **interface** in `Root.Township`, the global namespace.

Logger for main menu messages. `MainMenuLogger.Logger` holds the current one, such as `MainMenuPlayerLogger`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`MainMenuLogger`](/mod/game-api/types/global-m-o/mainmenulogger), [`MainMenuPlayerLogger`](/mod/game-api/types/global-m-o/mainmenuplayerlogger)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-error" /><code>{"void Error(string errorMessage)"}</code> | <span className="api-desc">Logs an error message, with or without an exception.</span> |
| <Link id="m-error-2" /><code>{"void Error(Exception exception, string errorMessage)"}</code> | <span className="api-desc">Logs an error message, with or without an exception.</span> |
| <Link id="m-info" /><code>{"void Info(string logMessage)"}</code> | <span className="api-desc">Logs an info message.</span> |

## Used in

Members of other types that take, return or hold a `IMainMenuLogger`:

<div className="api-used-in">

[`MainMenuLogger.Logger`](/mod/game-api/types/global-m-o/mainmenulogger#m-logger-2).

</div>
