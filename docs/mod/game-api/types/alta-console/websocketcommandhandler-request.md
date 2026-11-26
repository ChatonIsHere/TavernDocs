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
| <Link id="m-content" /><code>{"string content"}</code> | <span className="api-desc">The command text to run.</span> |
| <Link id="m-id" /><code>{"uint id"}</code> | <span className="api-desc">The client's request ID, sent back with the command result.</span> |

## Used in

Members of other types that take, return or hold a `Request`:

<div className="api-used-in">

[`WebSocketCommandHandler.RunCommand`](/mod/game-api/types/alta-console/websocketcommandhandler#m-runcommand).

</div>
