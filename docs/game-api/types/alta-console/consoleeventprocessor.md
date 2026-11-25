---
title: "ConsoleEventProcessor"
description: "static class ConsoleEventProcessor in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleEventProcessor

A **static class** in `Root.Township`, `Alta.Console`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-events" /><code>{"private static Dictionary<string, "}<Link to="/game-api/types/alta-console/iconsoleevent">{"IConsoleEvent"}</Link>{"> events"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-processeventmethod" /><code>{"private static MethodInfo processEventMethod"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-events-2" /><code>{"static IEnumerable<"}<Link to="/game-api/types/alta-console/iconsoleevent">{"IConsoleEvent"}</Link>{"> Events { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-deregister" /><code>{"static void Deregister("}<Link to="/game-api/types/alta-console/iconsoleevent">{"IConsoleEvent"}</Link>{" socketEvent)"}</code> |
| <Link id="m-register" /><code>{"static void Register("}<Link to="/game-api/types/alta-console/iconsoleevent">{"IConsoleEvent"}</Link>{" socketEvent)"}</code> |
| <Link id="m-subscribe" /><code>{"static bool Subscribe(string type, Action<"}<Link to="/game-api/types/alta-console/websocketcommandhandler-responsedata">{"WebSocketCommandHandler.ResponseData"}</Link>{"> handler)"}</code> |
| <Link id="m-unsubscribe" /><code>{"static bool Unsubscribe(string type, Action<"}<Link to="/game-api/types/alta-console/websocketcommandhandler-responsedata">{"WebSocketCommandHandler.ResponseData"}</Link>{"> handler)"}</code> |
