---
title: "CommandPart"
description: "abstract class CommandPart in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommandPart

An **abstract class** in `Root.Township`, `Alta.Console`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Inherits or implements** [`BasePart`](/game-api/types/alta-console/basepart)
- **Derived types** [`Command`](/game-api/types/alta-console/command), [`Module`](/game-api/types/alta-console/module)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CommandPart("}<Link to="/game-api/types/alta-console/module">{"Module"}</Link>{" parent, string name, string description)"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-aliases" /><code>{"List<string> Aliases { get; }"}</code> |  |
| <Link id="m-fullname" /><code>{"override string FullName { get; }"}</code> |  |
| <Link id="m-parent" /><code><Link to="/game-api/types/alta-console/module">{"Module"}</Link>{" Parent { get; private set; }"}</code> |  |
| <Link id="m-priority" /><code>{"int Priority { get; set; }"}</code> |  |
| <Link id="m-requirements" /><code>{"List<"}<Link to="/game-api/types/alta-console/requirementattribute">{"RequirementAttribute"}</Link>{"> Requirements { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcommandpart" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-console/commandpart">{"CommandPart"}</Link>{"> GetCommandPart(string[] lower, string[] cased, int index, "}<Link to="/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context)"}</code> |  |
| <Link id="m-getcommands" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{"> GetCommands(string[] lower, string[] cased, int index, "}<Link to="/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context)"}</code> |  |
| <Link id="m-requirementsaremet" /><code>{"bool RequirementsAreMet("}<Link to="/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context)"}</code> |  |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> |  |
| <Link id="m-getcommandpartinternal" /><code>{"protected abstract IEnumerable<"}<Link to="/game-api/types/alta-console/commandpart">{"CommandPart"}</Link>{"> GetCommandPartInternal(string[] lower, string[] cased, int index, "}<Link to="/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context)"}</code> |  |
| <Link id="m-getcommandsinternal" /><code>{"protected abstract IEnumerable<"}<Link to="/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{"> GetCommandsInternal(string[] lower, string[] cased, int index, "}<Link to="/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context)"}</code> |  |

## Used in

Members of other types that take, return or hold a `CommandPart`:

[`Command.GetCommandPartInternal`](/game-api/types/alta-console/command#m-getcommandpartinternal), [`CommandCollection.GetAliases`](/game-api/types/alta-console/commandcollection#m-getaliases), [`CommandCollection.GetParts`](/game-api/types/alta-console/commandcollection#m-getparts), [`CommandCollection.GetPriority`](/game-api/types/alta-console/commandcollection#m-getpriority), [`CommandCollection.GetRequirements`](/game-api/types/alta-console/commandcollection#m-getrequirements), [`Module.GetCommandPartInternal`](/game-api/types/alta-console/module#m-getcommandpartinternal).
