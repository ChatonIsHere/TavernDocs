---
title: "IConsoleEvent"
description: "interface IConsoleEvent in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IConsoleEvent

An **interface** in `Root.Township`, `Alta.Console`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Derived types** [`ConsoleEvent<T>`](/game-api/types/alta-console/consoleevent-t)

## Properties

| Member |
| --- |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> |
| <Link id="m-type" /><code>{"Type Type { get; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-invoked" /><code>{"event Action<"}<Link to="/game-api/types/alta-console/websocketcommandhandler-responsedata">{"WebSocketCommandHandler.ResponseData"}</Link>{"> Invoked"}</code> |

## Used in

Members of other types that take, return or hold a `IConsoleEvent`:

[`ConsoleEventProcessor.Deregister`](/game-api/types/alta-console/consoleeventprocessor#m-deregister), [`ConsoleEventProcessor.events`](/game-api/types/alta-console/consoleeventprocessor#m-events), [`ConsoleEventProcessor.Events`](/game-api/types/alta-console/consoleeventprocessor#m-events-2), [`ConsoleEventProcessor.Register`](/game-api/types/alta-console/consoleeventprocessor#m-register), [`WebSocketConsoleCommandModule.Subscriptions`](/game-api/types/alta-console/websocketconsolecommandmodule#m-subscriptions).
