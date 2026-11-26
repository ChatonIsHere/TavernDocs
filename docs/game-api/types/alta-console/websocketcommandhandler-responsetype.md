---
title: "WebSocketCommandHandler.ResponseType"
description: "Kind of message the remote console websocket sends back: a system message (such as the auth result), a subscription event, or the result of a command."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WebSocketCommandHandler.ResponseType

An **enum** in `Root.Township`, `Alta.Console`.

Kind of message the remote console websocket sends back: a system message (such as the auth result), a subscription event, or the result of a command.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Nested in** [`WebSocketCommandHandler`](/game-api/types/alta-console/websocketcommandhandler)

## Values

| Member |
| --- |
| <Link id="m-commandresult" /><code>{"CommandResult = 2"}</code> |
| <Link id="m-subscription" /><code>{"Subscription = 1"}</code> |
| <Link id="m-systemmessage" /><code>{"SystemMessage = 0"}</code> |

## Used in

Members of other types that take, return or hold a `ResponseType`:

[`WebSocketCommandHandler.Send`](/game-api/types/alta-console/websocketcommandhandler#m-send), [`WebSocketCommandHandler.ResponseData.ResponseData`](/game-api/types/alta-console/websocketcommandhandler-responsedata#m-ctor), [`WebSocketCommandHandler.ResponseData.type`](/game-api/types/alta-console/websocketcommandhandler-responsedata#m-type).
