---
title: "CommandResult<T>"
description: "For an object result, Log() serializes it to JSON and, in the same line, copies that JSON to the system clipboard of the machine running the game."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommandResult&lt;T&gt;

A **class** in `Root.Township`, `Alta.Console`.

For an object result, `Log()` serializes it to JSON and, in the same line, copies that JSON to the system clipboard of the machine running the game.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Inherits or implements** [`CommandResult`](/game-api/types/alta-console/commandresult)
- **Derived types** [`DynamicCommandResult`](/game-api/types/alta-console/dynamiccommandresult)
- **Documented in** [Arguments and results](/game-api/console-and-utilities/arguments-and-results#commandresult)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected CommandResult("}<Link to="/game-api/types/alta-console/command">{"Command"}</Link>{" command)"}</code> |  |
| <Link id="m-ctor-2" /><code>{"protected CommandResult(string resultString, "}<Link to="/game-api/types/alta-console/command">{"Command"}</Link>{" command)"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-result" /><code>{"T Result { get; set; }"}</code> |  |
| <Link id="m-resultstring" /><code>{"override string ResultString { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-log" /><code>{"override void Log()"}</code> |  |
| <Link id="m-logobjectsvaluesastable" /><code>{"void LogObjectsValuesAsTable()"}</code> |  |
