---
title: "Module"
description: "A named group of console commands, with its own commands and submodules."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Module

A **class** in `Root.Township`, `Alta.Console`.

A named group of console commands, with its own commands and submodules. Typing the module name followed by a command runs that command.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Inherits or implements** [`CommandPart`](/game-api/types/alta-console/commandpart)
- **Documented in** [Writing commands](/game-api/console-and-utilities/commands#module-and-command)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Module(object moduleObject, string name, string description)"}</code> |  |
| <Link id="m-ctor-2" /><code><Link to="/game-api/types/alta-console/module">{"Module"}</Link>{"(Assembly assembly, "}<Link to="/game-api/types/alta-console/module">{"Module"}</Link>{" parent, string name, string description)"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-assembly" /><code>{"Assembly Assembly { get; }"}</code> | The assembly the module's commands came from. |
| <Link id="m-commands" /><code>{"List<"}<Link to="/game-api/types/alta-console/command">{"Command"}</Link>{"> Commands { get; }"}</code> | The commands directly in this module. |
| <Link id="m-submodules" /><code>{"List<"}<Link to="/game-api/types/alta-console/module">{"Module"}</Link>{"> Submodules { get; }"}</code> | Child modules nested under this one. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcommandpartinternal" /><code>{"protected override IEnumerable<"}<Link to="/game-api/types/alta-console/commandpart">{"CommandPart"}</Link>{"> GetCommandPartInternal(string[] lower, string[] cased, int index, "}<Link to="/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context) (iterator)"}</code> | If the word matches an alias, yields this module (when it's the last word) plus matching parts of its submodules and commands. |
| <Link id="m-getcommandsinternal" /><code>{"protected override IEnumerable<"}<Link to="/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{"> GetCommandsInternal(string[] lower, string[] cased, int index, "}<Link to="/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context) (iterator)"}</code> | If the input word matches one of the module's aliases, yields the command matches from its submodules and commands. |

## Used in

Members of other types that take, return or hold a `Module`:

[`Command.Command`](/game-api/types/alta-console/command#m-ctor), [`CommandCollection.Collect`](/game-api/types/alta-console/commandcollection#m-collect), [`CommandCollection.GetCommands`](/game-api/types/alta-console/commandcollection#m-getcommands), [`CommandCollection.GetSubmodules`](/game-api/types/alta-console/commandcollection#m-getsubmodules), [`CommandCollection.Modules`](/game-api/types/alta-console/commandcollection#m-modules), [`CommandCollection.ProcessCommand`](/game-api/types/alta-console/commandcollection#m-processcommand), [`CommandCollection.ProcessModule`](/game-api/types/alta-console/commandcollection#m-processmodule), [`CommandPart.CommandPart`](/game-api/types/alta-console/commandpart#m-ctor), [`CommandPart.Parent`](/game-api/types/alta-console/commandpart#m-parent), [`BaseCommands.LogModule`](/game-api/types/alta-console/basecommands#m-logmodule), [`BaseCommands.Modules`](/game-api/types/alta-console/basecommands#m-modules), [`BaseCommands.SearchModule`](/game-api/types/alta-console/basecommands#m-searchmodule), [`TextBoard.module`](/game-api/types/global-t-x/textboard#m-module).
