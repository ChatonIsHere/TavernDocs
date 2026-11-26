---
title: "CommandPart"
description: "Base for an entry in the console command tree: a module or a command."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommandPart

An **abstract class** in `Root.Township`, `Alta.Console`.

Base for an entry in the console command tree: a module or a command. Holds its name, aliases, parent module and requirements.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Inherits or implements** [`BasePart`](/game-api/types/alta-console/basepart)
- **Derived types** [`Command`](/game-api/types/alta-console/command), [`Module`](/game-api/types/alta-console/module)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CommandPart("}<Link to="/game-api/types/alta-console/module">{"Module"}</Link>{" parent, string name, string description)"}</code> | Creates a `CommandPart` from `parent`, `name` and `description`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-aliases" /><code>{"List<string> Aliases { get; }"}</code> | Names that match this part. Starts with its own name. |
| <Link id="m-fullname" /><code>{"override string FullName { get; }"}</code> | The parent's name and this name joined with a dot. |
| <Link id="m-parent" /><code><Link to="/game-api/types/alta-console/module">{"Module"}</Link>{" Parent { get; private set; }"}</code> | The module this part belongs to, or null at the root. |
| <Link id="m-priority" /><code>{"int Priority { get; set; }"}</code> | Breaks ties between equally good matches. Higher wins. |
| <Link id="m-requirements" /><code>{"List<"}<Link to="/game-api/types/alta-console/requirementattribute">{"RequirementAttribute"}</Link>{"> Requirements { get; }"}</code> | Requirement attributes that must all pass for the part to be found. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcommandpart" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-console/commandpart">{"CommandPart"}</Link>{"> GetCommandPart(string[] lower, string[] cased, int index, "}<Link to="/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context)"}</code> | Finds matching parts below this one for the typed words, if requirements are met. |
| <Link id="m-getcommands" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{"> GetCommands(string[] lower, string[] cased, int index, "}<Link to="/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context)"}</code> | Finds matching commands for the typed words, if requirements are met. |
| <Link id="m-requirementsaremet" /><code>{"bool RequirementsAreMet("}<Link to="/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context)"}</code> | True if every requirement passes for the context. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | The full path with spaces, as typed in the console. |
| <Link id="m-getcommandpartinternal" /><code>{"protected abstract IEnumerable<"}<Link to="/game-api/types/alta-console/commandpart">{"CommandPart"}</Link>{"> GetCommandPartInternal(string[] lower, string[] cased, int index, "}<Link to="/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context)"}</code> | Implemented by modules and commands to find matching parts. |
| <Link id="m-getcommandsinternal" /><code>{"protected abstract IEnumerable<"}<Link to="/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{"> GetCommandsInternal(string[] lower, string[] cased, int index, "}<Link to="/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context)"}</code> | Implemented by modules and commands to find matching commands. |

## Used in

Members of other types that take, return or hold a `CommandPart`:

[`Command.GetCommandPartInternal`](/game-api/types/alta-console/command#m-getcommandpartinternal), [`CommandCollection.GetAliases`](/game-api/types/alta-console/commandcollection#m-getaliases), [`CommandCollection.GetParts`](/game-api/types/alta-console/commandcollection#m-getparts), [`CommandCollection.GetPriority`](/game-api/types/alta-console/commandcollection#m-getpriority), [`CommandCollection.GetRequirements`](/game-api/types/alta-console/commandcollection#m-getrequirements), [`Module.GetCommandPartInternal`](/game-api/types/alta-console/module#m-getcommandpartinternal).
