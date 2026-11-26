---
title: "ConsoleEvent"
description: "Base for a named event that websocket console users can subscribe to."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleEvent

An **abstract class** in `Root.Township`, `Alta.Console`.

Base for a named event that websocket console users can subscribe to. Messages are queued and sent from a background task, not the main thread.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Derived types** [`ConsoleEvent<T>`](/game-api/types/alta-console/consoleevent-t)
- **Nested types** [`Processor`](/game-api/types/alta-console/consoleevent-processor), [`QueueItem`](/game-api/types/alta-console/consoleevent-queueitem)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ConsoleEvent(string name)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-processor" /><code>{"private static "}<Link to="/game-api/types/alta-console/consoleevent-processor">{"ConsoleEvent.Processor"}</Link>{" processor"}</code> | The shared background `Processor` that empties the queue. |
| <Link id="m-queue" /><code>{"private static BlockingCollection<"}<Link to="/game-api/types/alta-console/consoleevent-queueitem">{"ConsoleEvent.QueueItem"}</Link>{"> queue"}</code> | Shared queue of event messages waiting to be sent to listeners. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-haslisteners" /><code>{"bool HasListeners { get; }"}</code> | True when anything is subscribed to `Invoked`. |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | The event's name, as console subscribers see it. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-invoked" /><code>{"event Action<"}<Link to="/game-api/types/alta-console/websocketcommandhandler-responsedata">{"WebSocketCommandHandler.ResponseData"}</Link>{"> Invoked"}</code> | Raised with the response to send, on the background processor thread. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"virtual void Deregister()"}</code> | Removes every listener from `Invoked`. The generic version also removes the event from `ConsoleEventProcessor`. |
| <Link id="m-invoke" /><code>{"protected void Invoke("}<Link to="/game-api/types/alta-console/websocketcommandhandler-responsedata">{"WebSocketCommandHandler.ResponseData"}</Link>{" response)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ConsoleEvent`:

[`ConsoleEvent.QueueItem.invoker`](/game-api/types/alta-console/consoleevent-queueitem#m-invoker).
