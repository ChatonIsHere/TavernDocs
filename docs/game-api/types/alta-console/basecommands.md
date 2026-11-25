---
title: "BaseCommands"
description: "static class BaseCommands in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BaseCommands

A **static class** in `Root.Township`, `Alta.Console.Commands`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Nested types** [`SearchResult`](/game-api/types/alta-console/basecommands-searchresult)
- **Attributes** `Module`

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logbuilder" /><code>{"private static StringBuilder logBuilder"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-inspect" /><code>{"static string Inspect(string[] path)"}</code> |  |
| <Link id="m-inspectfull" /><code>{"static string InspectFull(string[] path)"}</code> |  |
| <Link id="m-list" /><code>{"static string List()"}</code> |  |
| <Link id="m-modules" /><code>{"static HashSet<"}<Link to="/game-api/types/alta-console/module">{"Module"}</Link>{"> Modules()"}</code> |  |
| <Link id="m-search" /><code>{"static string Search(string searchString)"}</code> |  |
| <Link id="m-inspect-2" /><code>{"private static string Inspect(string[] path, bool isShowingAll)"}</code> |  |
| <Link id="m-logcommand" /><code>{"private static void LogCommand("}<Link to="/game-api/types/alta-console/command">{"Command"}</Link>{" command, int indentLevel = 0)"}</code> |  |
| <Link id="m-logmodule" /><code>{"private static void LogModule(bool isShowingAll, "}<Link to="/game-api/types/alta-console/module">{"Module"}</Link>{" module)"}</code> |  |
| <Link id="m-printpart" /><code>{"private static void PrintPart("}<Link to="/game-api/types/alta-console/basepart">{"BasePart"}</Link>{" basePart, StringBuilder logBuilder)"}</code> |  |
| <Link id="m-searchmodule" /><code>{"private static IEnumerable<"}<Link to="/game-api/types/alta-console/basecommands-searchresult">{"BaseCommands.SearchResult"}</Link>{"> SearchModule("}<Link to="/game-api/types/alta-console/module">{"Module"}</Link>{" module, string searchString) (iterator)"}</code> |  |
| <Link id="m-searchstring" /><code>{"private static bool SearchString(string stringToSearch, string tryingToFind)"}</code> |  |
