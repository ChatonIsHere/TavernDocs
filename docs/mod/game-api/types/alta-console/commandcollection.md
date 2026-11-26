---
title: "CommandCollection"
description: "Holds every console command module found by reflection."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommandCollection

A **class** in `Root.Township`, `Alta.Console`.

Holds every console command module found by reflection. `CommandService.CommandCollection` owns the one used by the game; mod script bundles are added with `Collect` and removed with `Unload`.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Documented in** [Writing commands](/mod/game-api/console-and-utilities/commands#commandcollection)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CommandCollection()"}</code> | <span className="api-desc">Creates a `CommandCollection` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-modules" /><code>{"HashSet<"}<Link to="/mod/game-api/types/alta-console/module">{"Module"}</Link>{"> Modules { get; }"}</code> | <span className="api-desc">The registered top-level modules. A new module replaces any existing one with the same name.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-collect" /><code>{"List<"}<Link to="/mod/game-api/types/alta-console/module">{"Module"}</Link>{"> Collect(Assembly assembly)"}</code> | <span className="api-desc">Scans an assembly for top-level classes with `ModuleAttribute` and registers each as a module. The returned list is always empty.</span> |
| <Link id="m-getcommands" /><code>{"static void GetCommands(Type type, "}<Link to="/mod/game-api/types/alta-console/module">{"Module"}</Link>{" module)"}</code> | <span className="api-desc">Registers every static method with `CommandAttribute` on a type as a command of the given module.</span> |
| <Link id="m-getparams" /><code>{"static void GetParams(MethodInfo method, "}<Link to="/mod/game-api/types/alta-console/command">{"Command"}</Link>{" command)"}</code> | <span className="api-desc">Adds a `Parameter` for each method argument. A leading `ProgressiveHandler` marks the command progressive instead; anywhere else it throws.</span> |
| <Link id="m-getparts" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-console/commandpart">{"CommandPart"}</Link>{"> GetParts(string[] lower, string[] cased, "}<Link to="/mod/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context) (iterator)"}</code> | <span className="api-desc">Yields the matching command parts (modules or commands) from every module, used for autocomplete style lookups.</span> |
| <Link id="m-processmodule" /><code><Link to="/mod/game-api/types/alta-console/module">{"Module"}</Link>{" ProcessModule(Type type, Assembly assembly, "}<Link to="/mod/game-api/types/alta-console/module">{"Module"}</Link>{" parent = null)"}</code> | <span className="api-desc">Builds a `Module` from a type with `ModuleAttribute`, including its commands and submodules. Returns null if the attribute is missing.</span> |
| <Link id="m-search" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{"> Search(string[] lower, string[] cased, "}<Link to="/mod/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context) (iterator)"}</code> | <span className="api-desc">Yields the commands in all modules that match the typed words, for the given caller context.</span> |
| <Link id="m-unload" /><code>{"void Unload(Assembly assembly)"}</code> | <span className="api-desc">Removes every module that came from the given assembly.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getaliases" /><code>{"private void GetAliases(Type type, "}<Link to="/mod/game-api/types/alta-console/commandpart">{"CommandPart"}</Link>{" partBuilder)"}</code> | <span className="api-desc">Private: copies the `AliasAttribute` aliases of a module class or command method onto its part.</span> |
| <Link id="m-getaliases-2" /><code>{"private static void GetAliases(MethodInfo method, "}<Link to="/mod/game-api/types/alta-console/commandpart">{"CommandPart"}</Link>{" partBuilder)"}</code> | <span className="api-desc">Private: copies the `AliasAttribute` aliases of a module class or command method onto its part.</span> |
| <Link id="m-getpriority" /><code>{"private static void GetPriority(MethodInfo method, "}<Link to="/mod/game-api/types/alta-console/commandpart">{"CommandPart"}</Link>{" partBuilder)"}</code> | <span className="api-desc">Private: copies the `PriorityAttribute` value of a command method onto the command.</span> |
| <Link id="m-getrequirements" /><code>{"private static void GetRequirements(Type type, "}<Link to="/mod/game-api/types/alta-console/commandpart">{"CommandPart"}</Link>{" partBuilder)"}</code> | <span className="api-desc">Private: copies the `RequirementAttribute`s of a module class or command method onto its part.</span> |
| <Link id="m-getrequirements-2" /><code>{"private static void GetRequirements(MethodInfo method, "}<Link to="/mod/game-api/types/alta-console/commandpart">{"CommandPart"}</Link>{" partBuilder)"}</code> | <span className="api-desc">Private: copies the `RequirementAttribute`s of a module class or command method onto its part.</span> |
| <Link id="m-getsubmodules" /><code>{"private void GetSubmodules(Type parentType, "}<Link to="/mod/game-api/types/alta-console/module">{"Module"}</Link>{" parent)"}</code> | <span className="api-desc">Private: processes nested types as submodules. Nested types without `ModuleAttribute` are searched further down for modules.</span> |
| <Link id="m-processcommand" /><code>{"private static void ProcessCommand(MethodInfo method, "}<Link to="/mod/game-api/types/alta-console/module">{"Module"}</Link>{" module)"}</code> | <span className="api-desc">Private: builds a `Command` from a method with `CommandAttribute`, with its aliases, requirements, parameters and priority.</span> |
| <Link id="m-processparam" /><code>{"private static void ProcessParam(ParameterInfo param, "}<Link to="/mod/game-api/types/alta-console/command">{"Command"}</Link>{" command)"}</code> | <span className="api-desc">Private: adds one `Parameter` to a command, taking its description from `ParamAttribute`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CommandCollection`:

<div className="api-used-in">

[`CommandService.collection`](/mod/game-api/types/alta-console/commandservice#m-collection), [`CommandService.CommandCollection`](/mod/game-api/types/alta-console/commandservice#m-commandcollection), [`CommandService.Search`](/mod/game-api/types/alta-console/commandservice#m-search).

</div>
