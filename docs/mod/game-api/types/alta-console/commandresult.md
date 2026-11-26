---
title: "CommandResult"
description: "What a console command returns: a result string or an exception, plus the command that ran."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommandResult

A **class** in `Root.Township`, `Alta.Console`.

What a console command returns: a result string or an exception, plus the command that ran. The generic `CommandResult<T>` subclass carries a typed result.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Derived types** [`CommandResult<T>`](/mod/game-api/types/alta-console/commandresult-t)
- **Documented in** [Arguments and results](/mod/game-api/console-and-utilities/arguments-and-results#commandresult)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CommandResult(string resultString, "}<Link to="/mod/game-api/types/alta-console/command">{"Command"}</Link>{" command)"}</code> | Creates a `CommandResult` from `command`. |
| <Link id="m-ctor-2" /><code>{"CommandResult("}<Link to="/mod/game-api/types/alta-console/command">{"Command"}</Link>{" command)"}</code> | Creates a `CommandResult` from `command`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | Shared NLog logger the results are written to. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-command" /><code><Link to="/mod/game-api/types/alta-console/command">{"Command"}</Link>{" "}<Link to="/mod/game-api/types/alta-console/command">{"Command"}</Link>{" { get; private set; }"}</code> | The console command that produced this result. |
| <Link id="m-exception" /><code>{"Exception Exception { get; set; }"}</code> | The exception the command threw, or null if it succeeded. |
| <Link id="m-resultstring" /><code>{"virtual string ResultString { get; }"}</code> | The result as text. `VoidResult` uses "Success"; the generic version uses its result's `ToString`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-errorresult" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/commandresult">{"CommandResult"}</Link>{" ErrorResult(Exception exception, "}<Link to="/mod/game-api/types/alta-console/command">{"Command"}</Link>{" command)"}</code> | Makes a result that wraps an exception thrown by the command. |
| <Link id="m-log" /><code>{"virtual void Log()"}</code> | Writes the result to the console log at trace level. The generic version can print tables or JSON. |
| <Link id="m-voidresult" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/commandresult">{"CommandResult"}</Link>{" VoidResult("}<Link to="/mod/game-api/types/alta-console/command">{"Command"}</Link>{" command)"}</code> | Makes a plain "Success" result for commands that return nothing. |

## Used in

Members of other types that take, return or hold a `CommandResult`:

[`Command.Invoke`](/mod/game-api/types/alta-console/command#m-invoke), [`Command.InvokeCommand`](/mod/game-api/types/alta-console/command#m-invokecommand), [`CommandService.Handle`](/mod/game-api/types/alta-console/commandservice#m-handle), [`CommandService.HandleMatchedCommand`](/mod/game-api/types/alta-console/commandservice#m-handlematchedcommand), [`CommandSync.CommandSyncInfo.CommandSyncInfo`](/mod/game-api/types/game-other-namespaces/commandsync-commandsyncinfo#m-ctor).
