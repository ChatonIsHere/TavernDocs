---
title: "WebSocketCommandHandler.SubscriptionResult"
description: "Result of a websocket console subscribe or unsubscribe: done, no change (already in that state) or the event type wasn't found."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WebSocketCommandHandler.SubscriptionResult

An **enum** in `Root.Township`, `Alta.Console`.

Result of a websocket console subscribe or unsubscribe: done, no change (already in that state) or the event type wasn't found.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested in** [`WebSocketCommandHandler`](/mod/game-api/types/alta-console/websocketcommandhandler)

## Values

| Member |
| --- |
| <Link id="m-notfound" /><code>{"NotFound = 2"}</code> |
| <Link id="m-success" /><code>{"Success = 0"}</code> |
| <Link id="m-unchanged" /><code>{"Unchanged = 1"}</code> |

## Used in

Members of other types that take, return or hold a `SubscriptionResult`:

[`WebSocketCommandHandler.Subscribe`](/mod/game-api/types/alta-console/websocketcommandhandler#m-subscribe), [`WebSocketCommandHandler.Unsubscribe`](/mod/game-api/types/alta-console/websocketcommandhandler#m-unsubscribe), [`WebSocketConsoleCommandModule.Subscribe`](/mod/game-api/types/alta-console/websocketconsolecommandmodule#m-subscribe), [`WebSocketConsoleCommandModule.Unsubscribe`](/mod/game-api/types/alta-console/websocketconsolecommandmodule#m-unsubscribe).
