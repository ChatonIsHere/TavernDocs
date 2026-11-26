---
title: "ConsoleEventProcessor"
description: "Registry of named console events that websocket console clients can subscribe to."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleEventProcessor

A **static class** in `Root.Township`, `Alta.Console`.

Registry of named console events that websocket console clients can subscribe to. Its static constructor registers the log events and `ConsoleEvents`.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-events" /><code>{"private static Dictionary<string, "}<Link to="/mod/game-api/types/alta-console/iconsoleevent">{"IConsoleEvent"}</Link>{"> events"}</code> | <span className="api-desc">Registered events by name.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-processeventmethod" /><code>{"private static MethodInfo processEventMethod"}</code> | <span className="api-desc">Reflection handle to a private `ProcessEvent` method, looked up in the static constructor.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-events-2" /><code>{"static IEnumerable<"}<Link to="/mod/game-api/types/alta-console/iconsoleevent">{"IConsoleEvent"}</Link>{"> Events { get; }"}</code> | <span className="api-desc">All registered console events.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"static void Deregister("}<Link to="/mod/game-api/types/alta-console/iconsoleevent">{"IConsoleEvent"}</Link>{" socketEvent)"}</code> | <span className="api-desc">Removes an event if it is the one registered under its name.</span> |
| <Link id="m-register" /><code>{"static void Register("}<Link to="/mod/game-api/types/alta-console/iconsoleevent">{"IConsoleEvent"}</Link>{" socketEvent)"}</code> | <span className="api-desc">Adds an event under its name, replacing (with a warning) any event already using that name.</span> |
| <Link id="m-subscribe" /><code>{"static bool Subscribe(string type, Action<"}<Link to="/mod/game-api/types/alta-console/websocketcommandhandler-responsedata">{"WebSocketCommandHandler.ResponseData"}</Link>{"> handler)"}</code> | <span className="api-desc">Adds a handler to the named event; returns false if no such event.</span> |
| <Link id="m-unsubscribe" /><code>{"static bool Unsubscribe(string type, Action<"}<Link to="/mod/game-api/types/alta-console/websocketcommandhandler-responsedata">{"WebSocketCommandHandler.ResponseData"}</Link>{"> handler)"}</code> | <span className="api-desc">Removes a handler from the named event; returns false if no such event.</span> |
