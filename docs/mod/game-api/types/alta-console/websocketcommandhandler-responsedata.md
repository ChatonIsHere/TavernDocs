---
title: "WebSocketCommandHandler.ResponseData"
description: "One message sent to a remote console client over the WebSocket: a system message, subscription event or command result, serialized to JSON."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WebSocketCommandHandler.ResponseData

A **class** in `Root.Township`, `Alta.Console`.

One message sent to a remote console client over the WebSocket: a system message, subscription event or command result, serialized to JSON.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested in** [`WebSocketCommandHandler`](/mod/game-api/types/alta-console/websocketcommandhandler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ResponseData("}<Link to="/mod/game-api/types/alta-console/websocketcommandhandler-responsetype">{"WebSocketCommandHandler.ResponseType"}</Link>{" type, string eventType, object data, uint? commandId = null)"}</code> | <span className="api-desc">Creates a `WebSocketCommandHandler.ResponseData` from `type`, `eventType`, `data` and `commandId`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-commandid" /><code>{"uint? commandId"}</code> | <span className="api-desc">The request ID this answers, for command results. Null otherwise.</span> |
| <Link id="m-data" /><code>{"object data"}</code> | <span className="api-desc">The payload, such as the command result or event data.</span> |
| <Link id="m-eventtype" /><code>{"string eventType"}</code> | <span className="api-desc">The subscription event name, or the log type for system messages.</span> |
| <Link id="m-timestamp" /><code>{"DateTime timeStamp"}</code> | <span className="api-desc">UTC time the message was created.</span> |
| <Link id="m-type" /><code><Link to="/mod/game-api/types/alta-console/websocketcommandhandler-responsetype">{"WebSocketCommandHandler.ResponseType"}</Link>{" type"}</code> | <span className="api-desc">Whether this is a system message, subscription event or command result.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-serialized" /><code>{"private string serialized"}</code> | <span className="api-desc">Cached JSON of this response, built on the first `GetSerialized` call and reused after.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getserialized" /><code>{"string GetSerialized()"}</code> | <span className="api-desc">Returns the JSON for this message, serialized once and cached.</span> |

## Used in

Members of other types that take, return or hold a `ResponseData`:

<div className="api-used-in">

[`ConsoleEvent.Invoke`](/mod/game-api/types/alta-console/consoleevent#m-invoke), [`ConsoleEvent.Invoked`](/mod/game-api/types/alta-console/consoleevent#m-invoked), [`ConsoleEvent.QueueItem.response`](/mod/game-api/types/alta-console/consoleevent-queueitem#m-response), [`ConsoleEventProcessor.Subscribe`](/mod/game-api/types/alta-console/consoleeventprocessor#m-subscribe), [`ConsoleEventProcessor.Unsubscribe`](/mod/game-api/types/alta-console/consoleeventprocessor#m-unsubscribe), [`IConsoleEvent.Invoked`](/mod/game-api/types/alta-console/iconsoleevent#m-invoked), [`WebSocketCommandHandler.Send`](/mod/game-api/types/alta-console/websocketcommandhandler#m-send-2).

</div>
