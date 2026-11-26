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

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Inherits or implements** [`BasePart`](/mod/game-api/types/alta-console/basepart)
- **Derived types** [`Command`](/mod/game-api/types/alta-console/command), [`Module`](/mod/game-api/types/alta-console/module)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CommandPart("}<Link to="/mod/game-api/types/alta-console/module">{"Module"}</Link>{" parent, string name, string description)"}</code> | <span className="api-desc">Creates a `CommandPart` from `parent`, `name` and `description`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-aliases" /><code>{"List<string> Aliases { get; }"}</code> | <span className="api-desc">Names that match this part. Starts with its own name.</span> |
| <Link id="m-fullname" /><code>{"override string FullName { get; }"}</code> | <span className="api-desc">The parent's name and this name joined with a dot.</span> |
| <Link id="m-parent" /><code><Link to="/mod/game-api/types/alta-console/module">{"Module"}</Link>{" Parent { get; private set; }"}</code> | <span className="api-desc">The module this part belongs to, or null at the root.</span> |
| <Link id="m-priority" /><code>{"int Priority { get; set; }"}</code> | <span className="api-desc">Breaks ties between equally good matches. Higher wins.</span> |
| <Link id="m-requirements" /><code>{"List<"}<Link to="/mod/game-api/types/alta-console/requirementattribute">{"RequirementAttribute"}</Link>{"> Requirements { get; }"}</code> | <span className="api-desc">Requirement attributes that must all pass for the part to be found.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcommandpart" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-console/commandpart">{"CommandPart"}</Link>{"> GetCommandPart(string[] lower, string[] cased, int index, "}<Link to="/mod/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context)"}</code> | <span className="api-desc">Finds matching parts below this one for the typed words, if requirements are met.</span> |
| <Link id="m-getcommands" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{"> GetCommands(string[] lower, string[] cased, int index, "}<Link to="/mod/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context)"}</code> | <span className="api-desc">Finds matching commands for the typed words, if requirements are met.</span> |
| <Link id="m-requirementsaremet" /><code>{"bool RequirementsAreMet("}<Link to="/mod/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context)"}</code> | <span className="api-desc">True if every requirement passes for the context.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">The full path with spaces, as typed in the console.</span> |
| <Link id="m-getcommandpartinternal" /><code>{"protected abstract IEnumerable<"}<Link to="/mod/game-api/types/alta-console/commandpart">{"CommandPart"}</Link>{"> GetCommandPartInternal(string[] lower, string[] cased, int index, "}<Link to="/mod/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context)"}</code> | <span className="api-desc">Implemented by modules and commands to find matching parts.</span> |
| <Link id="m-getcommandsinternal" /><code>{"protected abstract IEnumerable<"}<Link to="/mod/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{"> GetCommandsInternal(string[] lower, string[] cased, int index, "}<Link to="/mod/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context)"}</code> | <span className="api-desc">Implemented by modules and commands to find matching commands.</span> |

## Used in

Members of other types that take, return or hold a `CommandPart`:

<div className="api-used-in">

[`Command.GetCommandPartInternal`](/mod/game-api/types/alta-console/command#m-getcommandpartinternal), [`CommandCollection.GetAliases`](/mod/game-api/types/alta-console/commandcollection#m-getaliases), [`CommandCollection.GetParts`](/mod/game-api/types/alta-console/commandcollection#m-getparts), [`CommandCollection.GetPriority`](/mod/game-api/types/alta-console/commandcollection#m-getpriority), [`CommandCollection.GetRequirements`](/mod/game-api/types/alta-console/commandcollection#m-getrequirements), [`Module.GetCommandPartInternal`](/mod/game-api/types/alta-console/module#m-getcommandpartinternal).

</div>
