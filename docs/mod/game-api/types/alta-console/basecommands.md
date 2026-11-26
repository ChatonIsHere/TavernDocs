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

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logbuilder" /><code>{"private static StringBuilder logBuilder"}</code> | Shared builder for the command output. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this module. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-inspect" /><code>{"static string Inspect(string[] path)"}</code> | Command `help [path]` (alias `inspect`): details of a module or command, showing only parts you can use. |
| <Link id="m-inspectfull" /><code>{"static string InspectFull(string[] path)"}</code> | Command `help full`: details of a module or command, including parts whose requirements aren't met. |
| <Link id="m-list" /><code>{"static string List()"}</code> | Command `help` (alias `list`): a welcome line and every base module you can use, with descriptions. |
| <Link id="m-modules" /><code>{"static HashSet<"}<Link to="/mod/game-api/types/alta-console/module">{"Module"}</Link>{"> Modules()"}</code> | Command `help modules`: returns every module. |
| <Link id="m-search" /><code>{"static string Search(string searchString)"}</code> | Command `help search` (alias `find`): lists modules and commands whose name or description contains the text, ignoring case. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-inspect-2" /><code>{"private static string Inspect(string[] path, bool isShowingAll)"}</code> | Command `help [path]` (alias `inspect`): details of a module or command, showing only parts you can use. |
| <Link id="m-logcommand" /><code>{"private static void LogCommand("}<Link to="/mod/game-api/types/alta-console/command">{"Command"}</Link>{" command, int indentLevel = 0)"}</code> | Adds a command's description, parameters (with enum values) and return type properties to the output. |
| <Link id="m-logmodule" /><code>{"private static void LogModule(bool isShowingAll, "}<Link to="/mod/game-api/types/alta-console/module">{"Module"}</Link>{" module)"}</code> | Adds a module's submodules and commands to the output. |
| <Link id="m-printpart" /><code>{"private static void PrintPart("}<Link to="/mod/game-api/types/alta-console/basepart">{"BasePart"}</Link>{" basePart, StringBuilder logBuilder)"}</code> | Adds a module or command name and its description to the output. |
| <Link id="m-searchmodule" /><code>{"private static IEnumerable<"}<Link to="/mod/game-api/types/alta-console/basecommands-searchresult">{"BaseCommands.SearchResult"}</Link>{"> SearchModule("}<Link to="/mod/game-api/types/alta-console/module">{"Module"}</Link>{" module, string searchString) (iterator)"}</code> | Searches a module and all its submodules and commands. |
| <Link id="m-searchstring" /><code>{"private static bool SearchString(string stringToSearch, string tryingToFind)"}</code> | Case-insensitive contains check that is false for null. |

</details>
