---
title: "ConsoleEvent.QueueItem"
description: "One queued console event message: the event and the response data to send."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleEvent.QueueItem

A **private struct** in `Root.Township`, `Alta.Console`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One queued console event message: the event and the response data to send.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Nested in** [`ConsoleEvent`](/game-api/types/alta-console/consoleevent)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-invoker" /><code><Link to="/game-api/types/alta-console/consoleevent">{"ConsoleEvent"}</Link>{" invoker"}</code> | The event that was invoked. |
| <Link id="m-response" /><code><Link to="/game-api/types/alta-console/websocketcommandhandler-responsedata">{"WebSocketCommandHandler.ResponseData"}</Link>{" response"}</code> | The data to pass to the event's listeners. |

## Used in

Members of other types that take, return or hold a `QueueItem`:

[`ConsoleEvent.queue`](/game-api/types/alta-console/consoleevent#m-queue).
