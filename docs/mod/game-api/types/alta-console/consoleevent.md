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

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Derived types** [`ConsoleEvent<T>`](/mod/game-api/types/alta-console/consoleevent-t)
- **Nested types** [`Processor`](/mod/game-api/types/alta-console/consoleevent-processor), [`QueueItem`](/mod/game-api/types/alta-console/consoleevent-queueitem)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConsoleEvent(string name)"}</code> | <span className="api-desc">Creates a `ConsoleEvent` from `name`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-processor" /><code>{"private static "}<Link to="/mod/game-api/types/alta-console/consoleevent-processor">{"ConsoleEvent.Processor"}</Link>{" processor"}</code> | <span className="api-desc">The shared background `Processor` that empties the queue.</span> |
| <Link id="m-queue" /><code>{"private static BlockingCollection<"}<Link to="/mod/game-api/types/alta-console/consoleevent-queueitem">{"ConsoleEvent.QueueItem"}</Link>{"> queue"}</code> | <span className="api-desc">Shared queue of event messages waiting to be sent to listeners.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-haslisteners" /><code>{"bool HasListeners { get; }"}</code> | <span className="api-desc">True when anything is subscribed to `Invoked`.</span> |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | <span className="api-desc">The event's name, as console subscribers see it.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-invoked" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-console/websocketcommandhandler-responsedata">{"WebSocketCommandHandler.ResponseData"}</Link>{"> Invoked"}</code> | <span className="api-desc">Raised with the response to send, on the background processor thread.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"virtual void Deregister()"}</code> | <span className="api-desc">Removes every listener from `Invoked`. The generic version also removes the event from `ConsoleEventProcessor`.</span> |
| <Link id="m-invoke" /><code>{"protected void Invoke("}<Link to="/mod/game-api/types/alta-console/websocketcommandhandler-responsedata">{"WebSocketCommandHandler.ResponseData"}</Link>{" response)"}</code> | <span className="api-desc">Queues the event to be sent to subscribed console connections.</span> |

## Used in

Members of other types that take, return or hold a `ConsoleEvent`:

<div className="api-used-in">

[`ConsoleEvent.QueueItem.invoker`](/mod/game-api/types/alta-console/consoleevent-queueitem#m-invoker).

</div>
