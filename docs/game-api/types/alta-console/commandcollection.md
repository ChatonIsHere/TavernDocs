---
title: "CommandCollection"
description: "Get it from CommandService.CommandCollection."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommandCollection

A **class** in `Root.Township`, `Alta.Console`.

Get it from `CommandService.CommandCollection`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Documented in** [Writing commands](/game-api/console-and-utilities/commands#commandcollection)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CommandCollection()"}</code> |

## Properties

| Member |
| --- |
| <Link id="m-modules" /><code>{"HashSet<"}<Link to="/game-api/types/alta-console/module">{"Module"}</Link>{"> Modules { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-collect" /><code>{"List<"}<Link to="/game-api/types/alta-console/module">{"Module"}</Link>{"> Collect(Assembly assembly)"}</code> |
| <Link id="m-getcommands" /><code>{"static void GetCommands(Type type, "}<Link to="/game-api/types/alta-console/module">{"Module"}</Link>{" module)"}</code> |
| <Link id="m-getparams" /><code>{"static void GetParams(MethodInfo method, "}<Link to="/game-api/types/alta-console/command">{"Command"}</Link>{" command)"}</code> |
| <Link id="m-getparts" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-console/commandpart">{"CommandPart"}</Link>{"> GetParts(string[] lower, string[] cased, "}<Link to="/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context) (iterator)"}</code> |
| <Link id="m-processmodule" /><code><Link to="/game-api/types/alta-console/module">{"Module"}</Link>{" ProcessModule(Type type, Assembly assembly, "}<Link to="/game-api/types/alta-console/module">{"Module"}</Link>{" parent = null)"}</code> |
| <Link id="m-search" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{"> Search(string[] lower, string[] cased, "}<Link to="/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context) (iterator)"}</code> |
| <Link id="m-unload" /><code>{"void Unload(Assembly assembly)"}</code> |

<details>
<summary>8 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-getaliases" /><code>{"private void GetAliases(Type type, "}<Link to="/game-api/types/alta-console/commandpart">{"CommandPart"}</Link>{" partBuilder)"}</code> |
| <Link id="m-getaliases-2" /><code>{"private static void GetAliases(MethodInfo method, "}<Link to="/game-api/types/alta-console/commandpart">{"CommandPart"}</Link>{" partBuilder)"}</code> |
| <Link id="m-getpriority" /><code>{"private static void GetPriority(MethodInfo method, "}<Link to="/game-api/types/alta-console/commandpart">{"CommandPart"}</Link>{" partBuilder)"}</code> |
| <Link id="m-getrequirements" /><code>{"private static void GetRequirements(Type type, "}<Link to="/game-api/types/alta-console/commandpart">{"CommandPart"}</Link>{" partBuilder)"}</code> |
| <Link id="m-getrequirements-2" /><code>{"private static void GetRequirements(MethodInfo method, "}<Link to="/game-api/types/alta-console/commandpart">{"CommandPart"}</Link>{" partBuilder)"}</code> |
| <Link id="m-getsubmodules" /><code>{"private void GetSubmodules(Type parentType, "}<Link to="/game-api/types/alta-console/module">{"Module"}</Link>{" parent)"}</code> |
| <Link id="m-processcommand" /><code>{"private static void ProcessCommand(MethodInfo method, "}<Link to="/game-api/types/alta-console/module">{"Module"}</Link>{" module)"}</code> |
| <Link id="m-processparam" /><code>{"private static void ProcessParam(ParameterInfo param, "}<Link to="/game-api/types/alta-console/command">{"Command"}</Link>{" command)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `CommandCollection`:

[`CommandService.collection`](/game-api/types/alta-console/commandservice#m-collection), [`CommandService.CommandCollection`](/game-api/types/alta-console/commandservice#m-commandcollection), [`CommandService.Search`](/game-api/types/alta-console/commandservice#m-search).
