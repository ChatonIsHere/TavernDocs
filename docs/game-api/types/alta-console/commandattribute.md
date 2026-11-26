---
title: "CommandAttribute"
description: "Marks a static method as a console command."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommandAttribute

A **class** in `Root.Township`, `Alta.Console`.

Marks a static method as a console command. `CommandCollection` finds these methods inside classes with `ModuleAttribute`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Inherits or implements** `Attribute`
- **Attributes** `Usage`, `MeansImplicitUse`
- **Documented in** [Console, utilities and Alta assemblies](/game-api/console-and-utilities/overview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CommandAttribute(string command, string description)"}</code> |
| <Link id="m-ctor-2" /><code>{"CommandAttribute(string command)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-command" /><code>{"string Command { get; private set; }"}</code> | The word typed to run the command. |
| <Link id="m-description" /><code>{"string Description { get; private set; }"}</code> | Help text for the command. Empty if not given. |
| <Link id="m-isloggingvaluesastable" /><code>{"bool IsLoggingValuesAsTable { get; set; }"}</code> | If set, the command's result is logged as a table. Used by list style commands. |

## Used in

Members of other types that take, return or hold a `CommandAttribute`:

[`Command.Attribute`](/game-api/types/alta-console/command#m-attribute), [`Command.Command`](/game-api/types/alta-console/command#m-ctor).
