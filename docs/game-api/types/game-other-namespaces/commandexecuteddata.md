---
title: "CommandExecutedData"
description: "Payload of the ConsoleEvents.CommandExecuted console event, raised on the server by WebSocketCommandHandler after it runs a console command."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommandExecutedData

A **class** in `Root.Township`, `ATT.PlayerStates`.

Payload of the `ConsoleEvents.CommandExecuted` console event, raised on the server by `WebSocketCommandHandler` after it runs a console command.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Documented in** [Console events](/game-api/console-and-utilities/console-events)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CommandExecutedData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-command" /><code>{"string Command"}</code> | The command text that was run. |
| <Link id="m-message" /><code>{"string Message"}</code> | The command's output text. |
| <Link id="m-wassuccessful" /><code>{"bool WasSuccessful"}</code> | True if the command ran without failing. |

## Used in

Members of other types that take, return or hold a `CommandExecutedData`:

[`ConsoleEvents.CommandExecuted`](/game-api/types/alta-console/consoleevents#m-commandexecuted).
