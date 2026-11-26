---
title: "BaseCommands"
description: "Console module help: lists, searches and describes modules and commands."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BaseCommands

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console module `help`: lists, searches and describes modules and commands.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested types** [`SearchResult`](/mod/game-api/types/alta-console/basecommands-searchresult)
- **Attributes** `Module`

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logbuilder" /><code>{"private static StringBuilder logBuilder"}</code> | <span className="api-desc">Shared builder for the command output.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this module.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-inspect" /><code>{"static string Inspect(string[] path)"}</code> | <span className="api-desc">Command `help [path]` (alias `inspect`): details of a module or command, showing only parts you can use.</span> |
| <Link id="m-inspectfull" /><code>{"static string InspectFull(string[] path)"}</code> | <span className="api-desc">Command `help full`: details of a module or command, including parts whose requirements aren't met.</span> |
| <Link id="m-list" /><code>{"static string List()"}</code> | <span className="api-desc">Command `help` (alias `list`): a welcome line and every base module you can use, with descriptions.</span> |
| <Link id="m-modules" /><code>{"static HashSet<"}<Link to="/mod/game-api/types/alta-console/module">{"Module"}</Link>{"> Modules()"}</code> | <span className="api-desc">Command `help modules`: returns every module.</span> |
| <Link id="m-search" /><code>{"static string Search(string searchString)"}</code> | <span className="api-desc">Command `help search` (alias `find`): lists modules and commands whose name or description contains the text, ignoring case.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-inspect-2" /><code>{"private static string Inspect(string[] path, bool isShowingAll)"}</code> | <span className="api-desc">Command `help [path]` (alias `inspect`): details of a module or command, showing only parts you can use.</span> |
| <Link id="m-logcommand" /><code>{"private static void LogCommand("}<Link to="/mod/game-api/types/alta-console/command">{"Command"}</Link>{" command, int indentLevel = 0)"}</code> | <span className="api-desc">Adds a command's description, parameters (with enum values) and return type properties to the output.</span> |
| <Link id="m-logmodule" /><code>{"private static void LogModule(bool isShowingAll, "}<Link to="/mod/game-api/types/alta-console/module">{"Module"}</Link>{" module)"}</code> | <span className="api-desc">Adds a module's submodules and commands to the output.</span> |
| <Link id="m-printpart" /><code>{"private static void PrintPart("}<Link to="/mod/game-api/types/alta-console/basepart">{"BasePart"}</Link>{" basePart, StringBuilder logBuilder)"}</code> | <span className="api-desc">Adds a module or command name and its description to the output.</span> |
| <Link id="m-searchmodule" /><code>{"private static IEnumerable<"}<Link to="/mod/game-api/types/alta-console/basecommands-searchresult">{"BaseCommands.SearchResult"}</Link>{"> SearchModule("}<Link to="/mod/game-api/types/alta-console/module">{"Module"}</Link>{" module, string searchString) (iterator)"}</code> | <span className="api-desc">Searches a module and all its submodules and commands.</span> |
| <Link id="m-searchstring" /><code>{"private static bool SearchString(string stringToSearch, string tryingToFind)"}</code> | <span className="api-desc">Case-insensitive contains check that is false for null.</span> |

</details>
