---
title: "WebSocketCommandHandler.Request"
description: "A command request sent by a websocket console client, parsed from JSON."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WebSocketCommandHandler.Request

A **struct** in `Root.Township`, `Alta.Console`.

A command request sent by a websocket console client, parsed from JSON.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested in** [`WebSocketCommandHandler`](/mod/game-api/types/alta-console/websocketcommandhandler)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-content" /><code>{"string content"}</code> | The command text to run. |
| <Link id="m-id" /><code>{"uint id"}</code> | The client's request ID, sent back with the command result. |

## Used in

Members of other types that take, return or hold a `Request`:

[`WebSocketCommandHandler.RunCommand`](/mod/game-api/types/alta-console/websocketcommandhandler#m-runcommand).
