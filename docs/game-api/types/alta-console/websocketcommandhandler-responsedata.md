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

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Nested in** [`WebSocketCommandHandler`](/game-api/types/alta-console/websocketcommandhandler)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ResponseData("}<Link to="/game-api/types/alta-console/websocketcommandhandler-responsetype">{"WebSocketCommandHandler.ResponseType"}</Link>{" type, string eventType, object data, uint? commandId = null)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-commandid" /><code>{"uint? commandId"}</code> | The request ID this answers, for command results. Null otherwise. |
| <Link id="m-data" /><code>{"object data"}</code> | The payload, such as the command result or event data. |
| <Link id="m-eventtype" /><code>{"string eventType"}</code> | The subscription event name, or the log type for system messages. |
| <Link id="m-timestamp" /><code>{"DateTime timeStamp"}</code> | UTC time the message was created. |
| <Link id="m-type" /><code><Link to="/game-api/types/alta-console/websocketcommandhandler-responsetype">{"WebSocketCommandHandler.ResponseType"}</Link>{" type"}</code> | Whether this is a system message, subscription event or command result. |

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-serialized" /><code>{"private string serialized"}</code> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getserialized" /><code>{"string GetSerialized()"}</code> | Returns the JSON for this message, serialized once and cached. |

## Used in

Members of other types that take, return or hold a `ResponseData`:

[`ConsoleEvent.Invoke`](/game-api/types/alta-console/consoleevent#m-invoke), [`ConsoleEvent.Invoked`](/game-api/types/alta-console/consoleevent#m-invoked), [`ConsoleEvent.QueueItem.response`](/game-api/types/alta-console/consoleevent-queueitem#m-response), [`ConsoleEventProcessor.Subscribe`](/game-api/types/alta-console/consoleeventprocessor#m-subscribe), [`ConsoleEventProcessor.Unsubscribe`](/game-api/types/alta-console/consoleeventprocessor#m-unsubscribe), [`IConsoleEvent.Invoked`](/game-api/types/alta-console/iconsoleevent#m-invoked), [`WebSocketCommandHandler.Send`](/game-api/types/alta-console/websocketcommandhandler#m-send-2).
