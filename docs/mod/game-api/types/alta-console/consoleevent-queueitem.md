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

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested in** [`ConsoleEvent`](/mod/game-api/types/alta-console/consoleevent)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-invoker" /><code><Link to="/mod/game-api/types/alta-console/consoleevent">{"ConsoleEvent"}</Link>{" invoker"}</code> | <span className="api-desc">The event that was invoked.</span> |
| <Link id="m-response" /><code><Link to="/mod/game-api/types/alta-console/websocketcommandhandler-responsedata">{"WebSocketCommandHandler.ResponseData"}</Link>{" response"}</code> | <span className="api-desc">The data to pass to the event's listeners.</span> |

## Used in

Members of other types that take, return or hold a `QueueItem`:

<div className="api-used-in">

[`ConsoleEvent.queue`](/mod/game-api/types/alta-console/consoleevent#m-queue).

</div>
