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
| <Link id="m-ctor" /><code>{"CommandResult(string resultString, "}<Link to="/mod/game-api/types/alta-console/command">{"Command"}</Link>{" command)"}</code> | <span className="api-desc">Creates a `CommandResult` from `command`.</span> |
| <Link id="m-ctor-2" /><code>{"CommandResult("}<Link to="/mod/game-api/types/alta-console/command">{"Command"}</Link>{" command)"}</code> | <span className="api-desc">Creates a `CommandResult` from `command`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | <span className="api-desc">Shared NLog logger the results are written to.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-command" /><code><Link to="/mod/game-api/types/alta-console/command">{"Command"}</Link>{" "}<Link to="/mod/game-api/types/alta-console/command">{"Command"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">The console command that produced this result.</span> |
| <Link id="m-exception" /><code>{"Exception Exception { get; set; }"}</code> | <span className="api-desc">The exception the command threw, or null if it succeeded.</span> |
| <Link id="m-resultstring" /><code>{"virtual string ResultString { get; }"}</code> | <span className="api-desc">The result as text. `VoidResult` uses "Success"; the generic version uses its result's `ToString`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-errorresult" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/commandresult">{"CommandResult"}</Link>{" ErrorResult(Exception exception, "}<Link to="/mod/game-api/types/alta-console/command">{"Command"}</Link>{" command)"}</code> | <span className="api-desc">Makes a result that wraps an exception thrown by the command.</span> |
| <Link id="m-log" /><code>{"virtual void Log()"}</code> | <span className="api-desc">Writes the result to the console log at trace level. The generic version can print tables or JSON.</span> |
| <Link id="m-voidresult" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/commandresult">{"CommandResult"}</Link>{" VoidResult("}<Link to="/mod/game-api/types/alta-console/command">{"Command"}</Link>{" command)"}</code> | <span className="api-desc">Makes a plain "Success" result for commands that return nothing.</span> |

## Used in

Members of other types that take, return or hold a `CommandResult`:

<div className="api-used-in">

[`Command.Invoke`](/mod/game-api/types/alta-console/command#m-invoke), [`Command.InvokeCommand`](/mod/game-api/types/alta-console/command#m-invokecommand), [`CommandService.Handle`](/mod/game-api/types/alta-console/commandservice#m-handle), [`CommandService.HandleMatchedCommand`](/mod/game-api/types/alta-console/commandservice#m-handlematchedcommand), [`CommandSync.CommandSyncInfo.CommandSyncInfo`](/mod/game-api/types/game-other-namespaces/commandsync-commandsyncinfo#m-ctor).

</div>
