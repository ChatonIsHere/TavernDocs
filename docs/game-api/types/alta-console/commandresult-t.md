---
title: "CommandResult<T>"
description: "A console command result carrying a typed value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommandResult&lt;T&gt;

A **class** in `Root.Township`, `Alta.Console`.

A console command result carrying a typed value. Logs the value as text, a table or JSON depending on the type and the command's settings.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Inherits or implements** [`CommandResult`](/game-api/types/alta-console/commandresult)
- **Derived types** [`DynamicCommandResult`](/game-api/types/alta-console/dynamiccommandresult)
- **Documented in** [Arguments and results](/game-api/console-and-utilities/arguments-and-results#commandresult)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected CommandResult("}<Link to="/game-api/types/alta-console/command">{"Command"}</Link>{" command)"}</code> | Creates a `CommandResult` from `resultString` and `command`. |
| <Link id="m-ctor-2" /><code>{"protected CommandResult(string resultString, "}<Link to="/game-api/types/alta-console/command">{"Command"}</Link>{" command)"}</code> | Creates a `CommandResult` from `resultString` and `command`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-result" /><code>{"T Result { get; set; }"}</code> | The value the command returned. |
| <Link id="m-resultstring" /><code>{"override string ResultString { get; }"}</code> | The result's `ToString()`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-log" /><code>{"override void Log()"}</code> | Traces the result: strings as is, lists or objects as a table if the command asks for that, otherwise as JSON (also copied to the clipboard). |
| <Link id="m-logobjectsvaluesastable" /><code>{"void LogObjectsValuesAsTable()"}</code> | Traces the result's public properties as a name and value table. |
