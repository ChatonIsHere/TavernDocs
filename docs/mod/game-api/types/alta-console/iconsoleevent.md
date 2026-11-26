---
title: "IConsoleEvent"
description: "An event that server console (websocket) connections can subscribe to; registered with ConsoleEventProcessor."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IConsoleEvent

An **interface** in `Root.Township`, `Alta.Console`.

An event that server console (websocket) connections can subscribe to; registered with `ConsoleEventProcessor`.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Derived types** [`ConsoleEvent<T>`](/mod/game-api/types/alta-console/consoleevent-t)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | Event name used to subscribe. |
| <Link id="m-type" /><code>{"Type Type { get; }"}</code> | Type of the event's data. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-invoked" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-console/websocketcommandhandler-responsedata">{"WebSocketCommandHandler.ResponseData"}</Link>{"> Invoked"}</code> | Raised with the response data to send to subscribers when the event fires. |

## Used in

Members of other types that take, return or hold a `IConsoleEvent`:

[`ConsoleEventProcessor.Deregister`](/mod/game-api/types/alta-console/consoleeventprocessor#m-deregister), [`ConsoleEventProcessor.events`](/mod/game-api/types/alta-console/consoleeventprocessor#m-events), [`ConsoleEventProcessor.Events`](/mod/game-api/types/alta-console/consoleeventprocessor#m-events-2), [`ConsoleEventProcessor.Register`](/mod/game-api/types/alta-console/consoleeventprocessor#m-register), [`WebSocketConsoleCommandModule.Subscriptions`](/mod/game-api/types/alta-console/websocketconsolecommandmodule#m-subscriptions).
