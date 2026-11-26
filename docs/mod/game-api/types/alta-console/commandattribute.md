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

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Inherits or implements** `Attribute`
- **Attributes** `Usage`, `MeansImplicitUse`
- **Documented in** [Console, utilities and Alta assemblies](/mod/game-api/console-and-utilities/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CommandAttribute(string command, string description)"}</code> | <span className="api-desc">Creates a `CommandAttribute` from `command`.</span> |
| <Link id="m-ctor-2" /><code>{"CommandAttribute(string command)"}</code> | <span className="api-desc">Creates a `CommandAttribute` from `command`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-command" /><code>{"string Command { get; private set; }"}</code> | <span className="api-desc">The word typed to run the command.</span> |
| <Link id="m-description" /><code>{"string Description { get; private set; }"}</code> | <span className="api-desc">Help text for the command. Empty if not given.</span> |
| <Link id="m-isloggingvaluesastable" /><code>{"bool IsLoggingValuesAsTable { get; set; }"}</code> | <span className="api-desc">If set, the command's result is logged as a table. Used by list style commands.</span> |

## Used in

Members of other types that take, return or hold a `CommandAttribute`:

<div className="api-used-in">

[`Command.Attribute`](/mod/game-api/types/alta-console/command#m-attribute), [`Command.Command`](/mod/game-api/types/alta-console/command#m-ctor).

</div>
