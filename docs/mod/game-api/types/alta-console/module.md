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

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Inherits or implements** [`CommandPart`](/mod/game-api/types/alta-console/commandpart)
- **Documented in** [Writing commands](/mod/game-api/console-and-utilities/commands#module-and-command)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Module(object moduleObject, string name, string description)"}</code> | <span className="api-desc">Creates a `Module` from `assembly`, `parent`, `name` and `description`.</span> |
| <Link id="m-ctor-2" /><code><Link to="/mod/game-api/types/alta-console/module">{"Module"}</Link>{"(Assembly assembly, "}<Link to="/mod/game-api/types/alta-console/module">{"Module"}</Link>{" parent, string name, string description)"}</code> | <span className="api-desc">Creates a `Module` from `assembly`, `parent`, `name` and `description`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-assembly" /><code>{"Assembly Assembly { get; }"}</code> | <span className="api-desc">The assembly the module's commands came from.</span> |
| <Link id="m-commands" /><code>{"List<"}<Link to="/mod/game-api/types/alta-console/command">{"Command"}</Link>{"> Commands { get; }"}</code> | <span className="api-desc">The commands directly in this module.</span> |
| <Link id="m-submodules" /><code>{"List<"}<Link to="/mod/game-api/types/alta-console/module">{"Module"}</Link>{"> Submodules { get; }"}</code> | <span className="api-desc">Child modules nested under this one.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcommandpartinternal" /><code>{"protected override IEnumerable<"}<Link to="/mod/game-api/types/alta-console/commandpart">{"CommandPart"}</Link>{"> GetCommandPartInternal(string[] lower, string[] cased, int index, "}<Link to="/mod/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context) (iterator)"}</code> | <span className="api-desc">If the word matches an alias, yields this module (when it's the last word) plus matching parts of its submodules and commands.</span> |
| <Link id="m-getcommandsinternal" /><code>{"protected override IEnumerable<"}<Link to="/mod/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{"> GetCommandsInternal(string[] lower, string[] cased, int index, "}<Link to="/mod/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context) (iterator)"}</code> | <span className="api-desc">If the input word matches one of the module's aliases, yields the command matches from its submodules and commands.</span> |

## Used in

Members of other types that take, return or hold a `Module`:

<div className="api-used-in">

[`Command.Command`](/mod/game-api/types/alta-console/command#m-ctor), [`CommandCollection.Collect`](/mod/game-api/types/alta-console/commandcollection#m-collect), [`CommandCollection.GetCommands`](/mod/game-api/types/alta-console/commandcollection#m-getcommands), [`CommandCollection.GetSubmodules`](/mod/game-api/types/alta-console/commandcollection#m-getsubmodules), [`CommandCollection.Modules`](/mod/game-api/types/alta-console/commandcollection#m-modules), [`CommandCollection.ProcessCommand`](/mod/game-api/types/alta-console/commandcollection#m-processcommand), [`CommandCollection.ProcessModule`](/mod/game-api/types/alta-console/commandcollection#m-processmodule), [`CommandPart.CommandPart`](/mod/game-api/types/alta-console/commandpart#m-ctor), [`CommandPart.Parent`](/mod/game-api/types/alta-console/commandpart#m-parent), [`BaseCommands.LogModule`](/mod/game-api/types/alta-console/basecommands#m-logmodule), [`BaseCommands.Modules`](/mod/game-api/types/alta-console/basecommands#m-modules), [`BaseCommands.SearchModule`](/mod/game-api/types/alta-console/basecommands#m-searchmodule), [`TextBoard.module`](/mod/game-api/types/global-t-x/textboard#m-module).

</div>
