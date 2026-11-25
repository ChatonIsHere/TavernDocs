---
title: "ConsoleEvent"
description: "abstract class ConsoleEvent in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleEvent

An **abstract class** in `Root.Township`, `Alta.Console`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Derived types** [`ConsoleEvent<T>`](/game-api/types/alta-console/consoleevent-t)
- **Nested types** [`Processor`](/game-api/types/alta-console/consoleevent-processor), [`QueueItem`](/game-api/types/alta-console/consoleevent-queueitem)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConsoleEvent(string name)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-processor" /><code>{"private static "}<Link to="/game-api/types/alta-console/consoleevent-processor">{"ConsoleEvent.Processor"}</Link>{" processor"}</code> |  |
| <Link id="m-queue" /><code>{"private static BlockingCollection<"}<Link to="/game-api/types/alta-console/consoleevent-queueitem">{"ConsoleEvent.QueueItem"}</Link>{"> queue"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-haslisteners" /><code>{"bool HasListeners { get; }"}</code> |  |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-invoked" /><code>{"event Action<"}<Link to="/game-api/types/alta-console/websocketcommandhandler-responsedata">{"WebSocketCommandHandler.ResponseData"}</Link>{"> Invoked"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"virtual void Deregister()"}</code> |  |
| <Link id="m-invoke" /><code>{"protected void Invoke("}<Link to="/game-api/types/alta-console/websocketcommandhandler-responsedata">{"WebSocketCommandHandler.ResponseData"}</Link>{" response)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ConsoleEvent`:

[`ConsoleEvent.QueueItem.invoker`](/game-api/types/alta-console/consoleevent-queueitem#m-invoker).
