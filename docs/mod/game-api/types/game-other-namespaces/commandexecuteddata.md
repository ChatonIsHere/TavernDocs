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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Documented in** [Console events](/mod/game-api/console-and-utilities/console-events)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CommandExecutedData()"}</code> | <span className="api-desc">Creates a `CommandExecutedData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-command" /><code>{"string Command"}</code> | <span className="api-desc">The command text that was run.</span> |
| <Link id="m-message" /><code>{"string Message"}</code> | <span className="api-desc">The command's output text.</span> |
| <Link id="m-wassuccessful" /><code>{"bool WasSuccessful"}</code> | <span className="api-desc">True if the command ran without failing.</span> |

## Used in

Members of other types that take, return or hold a `CommandExecutedData`:

<div className="api-used-in">

[`ConsoleEvents.CommandExecuted`](/mod/game-api/types/alta-console/consoleevents#m-commandexecuted).

</div>
