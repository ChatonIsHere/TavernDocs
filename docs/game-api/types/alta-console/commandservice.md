---
title: "CommandService"
description: "Static entry point for the console command system."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommandService

A **static class** in `Root.Township`, `Alta.Console`.

Static entry point for the console command system. Parses a command line, finds the best matching command in the collection and runs it.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Documented in** [Writing commands](/game-api/console-and-utilities/commands#commandservice), [Console, utilities and Alta assemblies](/game-api/console-and-utilities/overview)

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-collection" /><code>{"private static "}<Link to="/game-api/types/alta-console/commandcollection">{"CommandCollection"}</Link>{" collection"}</code> | Cached collection behind `CommandCollection`. |
| <Link id="m-defaultcontext" /><code>{"private static "}<Link to="/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" defaultContext"}</code> | Context made for the logged-in user, used when `Handle` gets no context. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-commandcollection" /><code>{"static "}<Link to="/game-api/types/alta-console/commandcollection">{"CommandCollection"}</Link>{" "}<Link to="/game-api/types/alta-console/commandcollection">{"CommandCollection"}</Link>{" { get; }"}</code> | All commands, collected from this assembly on first use. |
| <Link id="m-currentcontext" /><code>{"static "}<Link to="/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" CurrentContext { get; private set; }"}</code> | The context of the command being run (or last run). |
| <Link id="m-customhandler" /><code>{"static Action<"}<Link to="/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{"> CustomHandler { get; set; }"}</code> | One-shot handler: if set, the next matched command is passed to it instead of being run. It is cleared on every `Handle` call. |
| <Link id="m-lastcommand" /><code>{"static "}<Link to="/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{" LastCommand { get; private set; }"}</code> | The last command passed to `HandleMatchedCommand`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handle" /><code>{"static async Task<"}<Link to="/game-api/types/alta-console/commandresult">{"CommandResult"}</Link>{"> Handle(string command, "}<Link to="/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context = null)"}</code> | Parses and runs a command line. With no context it uses a default one for the logged-in API user. Returns an error result with suggestions if nothing matches. |
| <Link id="m-handlematchedcommand" /><code>{"static async Task<"}<Link to="/game-api/types/alta-console/commandresult">{"CommandResult"}</Link>{"> HandleMatchedCommand("}<Link to="/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{" matchedCommand)"}</code> | Runs an already matched command, logs its result and turns exceptions into error results. |
| <Link id="m-search" /><code>{"static "}<Link to="/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{"[] Search("}<Link to="/game-api/types/alta-console/commandcollection">{"CommandCollection"}</Link>{" collection, string search, "}<Link to="/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context)"}</code> | Splits a command line into words (quotes group words, backslash escapes quotes) and searches the collection for matches. |
| <Link id="m-throwerror" /><code>{"static void ThrowError(string format, params object[] arguments)"}</code> | Throws a `CommandException` with a formatted message, which `HandleMatchedCommand` turns into an error result. |
