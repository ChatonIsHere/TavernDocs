---
title: "CommandResult"
description: "For an object result, Log() serializes it to JSON and, in the same line, copies that JSON to the system clipboard of the machine running the game."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommandResult

A **class** in `Root.Township`, `Alta.Console`.

For an object result, `Log()` serializes it to JSON and, in the same line, copies that JSON to the system clipboard of the machine running the game.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Derived types** [`CommandResult<T>`](/game-api/types/alta-console/commandresult-t)
- **Documented in** [Arguments and results](/game-api/console-and-utilities/arguments-and-results#commandresult)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CommandResult(string resultString, "}<Link to="/game-api/types/alta-console/command">{"Command"}</Link>{" command)"}</code> |  |
| <Link id="m-ctor-2" /><code>{"CommandResult("}<Link to="/game-api/types/alta-console/command">{"Command"}</Link>{" command)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-command" /><code><Link to="/game-api/types/alta-console/command">{"Command"}</Link>{" "}<Link to="/game-api/types/alta-console/command">{"Command"}</Link>{" { get; private set; }"}</code> |  |
| <Link id="m-exception" /><code>{"Exception Exception { get; set; }"}</code> |  |
| <Link id="m-resultstring" /><code>{"virtual string ResultString { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-errorresult" /><code>{"static "}<Link to="/game-api/types/alta-console/commandresult">{"CommandResult"}</Link>{" ErrorResult(Exception exception, "}<Link to="/game-api/types/alta-console/command">{"Command"}</Link>{" command)"}</code> |  |
| <Link id="m-log" /><code>{"virtual void Log()"}</code> |  |
| <Link id="m-voidresult" /><code>{"static "}<Link to="/game-api/types/alta-console/commandresult">{"CommandResult"}</Link>{" VoidResult("}<Link to="/game-api/types/alta-console/command">{"Command"}</Link>{" command)"}</code> |  |

## Used in

Members of other types that take, return or hold a `CommandResult`:

[`Command.Invoke`](/game-api/types/alta-console/command#m-invoke), [`Command.InvokeCommand`](/game-api/types/alta-console/command#m-invokecommand), [`CommandService.Handle`](/game-api/types/alta-console/commandservice#m-handle), [`CommandService.HandleMatchedCommand`](/game-api/types/alta-console/commandservice#m-handlematchedcommand), [`CommandSync.CommandSyncInfo.CommandSyncInfo`](/game-api/types/game-other-namespaces/commandsync-commandsyncinfo#m-ctor).
