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

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-events" /><code>{"private static Dictionary<string, "}<Link to="/mod/game-api/types/alta-console/iconsoleevent">{"IConsoleEvent"}</Link>{"> events"}</code> | Registered events by name. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-processeventmethod" /><code>{"private static MethodInfo processEventMethod"}</code> | Reflection handle to a private `ProcessEvent` method, looked up in the static constructor. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-events-2" /><code>{"static IEnumerable<"}<Link to="/mod/game-api/types/alta-console/iconsoleevent">{"IConsoleEvent"}</Link>{"> Events { get; }"}</code> | All registered console events. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"static void Deregister("}<Link to="/mod/game-api/types/alta-console/iconsoleevent">{"IConsoleEvent"}</Link>{" socketEvent)"}</code> | Removes an event if it is the one registered under its name. |
| <Link id="m-register" /><code>{"static void Register("}<Link to="/mod/game-api/types/alta-console/iconsoleevent">{"IConsoleEvent"}</Link>{" socketEvent)"}</code> | Adds an event under its name, replacing (with a warning) any event already using that name. |
| <Link id="m-subscribe" /><code>{"static bool Subscribe(string type, Action<"}<Link to="/mod/game-api/types/alta-console/websocketcommandhandler-responsedata">{"WebSocketCommandHandler.ResponseData"}</Link>{"> handler)"}</code> | Adds a handler to the named event; returns false if no such event. |
| <Link id="m-unsubscribe" /><code>{"static bool Unsubscribe(string type, Action<"}<Link to="/mod/game-api/types/alta-console/websocketcommandhandler-responsedata">{"WebSocketCommandHandler.ResponseData"}</Link>{"> handler)"}</code> | Removes a handler from the named event; returns false if no such event. |
