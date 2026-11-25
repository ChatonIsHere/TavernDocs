---
title: "CommandService"
description: "Main thread: every console the game has calls it from Unity's main thread, and you should too."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommandService

A **static class** in `Root.Township`, `Alta.Console`.

Main thread: every console the game has calls it from Unity's main thread, and you should too.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Documented in** [Writing commands](/game-api/console-and-utilities/commands#commandservice), [Console, utilities and Alta assemblies](/game-api/console-and-utilities/overview)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-collection" /><code>{"private static "}<Link to="/game-api/types/alta-console/commandcollection">{"CommandCollection"}</Link>{" collection"}</code> |  |
| <Link id="m-defaultcontext" /><code>{"private static "}<Link to="/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" defaultContext"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-commandcollection" /><code>{"static "}<Link to="/game-api/types/alta-console/commandcollection">{"CommandCollection"}</Link>{" "}<Link to="/game-api/types/alta-console/commandcollection">{"CommandCollection"}</Link>{" { get; }"}</code> |  |
| <Link id="m-currentcontext" /><code>{"static "}<Link to="/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" CurrentContext { get; private set; }"}</code> |  |
| <Link id="m-customhandler" /><code>{"static Action<"}<Link to="/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{"> CustomHandler { get; set; }"}</code> |  |
| <Link id="m-lastcommand" /><code>{"static "}<Link to="/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{" LastCommand { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handle" /><code>{"static async Task<"}<Link to="/game-api/types/alta-console/commandresult">{"CommandResult"}</Link>{"> Handle(string command, "}<Link to="/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context = null)"}</code> |  |
| <Link id="m-handlematchedcommand" /><code>{"static async Task<"}<Link to="/game-api/types/alta-console/commandresult">{"CommandResult"}</Link>{"> HandleMatchedCommand("}<Link to="/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{" matchedCommand)"}</code> |  |
| <Link id="m-search" /><code>{"static "}<Link to="/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{"[] Search("}<Link to="/game-api/types/alta-console/commandcollection">{"CommandCollection"}</Link>{" collection, string search, "}<Link to="/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context)"}</code> |  |
| <Link id="m-throwerror" /><code>{"static void ThrowError(string format, params object[] arguments)"}</code> |  |
