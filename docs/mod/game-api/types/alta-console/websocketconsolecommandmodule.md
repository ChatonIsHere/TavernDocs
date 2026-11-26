---
title: "WebSocketConsoleCommandModule"
description: "Console module websocket: lets a websocket console client list and subscribe to console events."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WebSocketConsoleCommandModule

A **class** in `Root.Township`, `Alta.Console`.

Console module `websocket`: lets a websocket console client list and subscribe to console events.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Attributes** `Module`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WebSocketConsoleCommandModule()"}</code> | Creates a `WebSocketConsoleCommandModule` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-subscribe" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/websocketcommandhandler-subscriptionresult">{"WebSocketCommandHandler.SubscriptionResult"}</Link>{" Subscribe(string eventType)"}</code> | `websocket subscribe`: subscribes the calling websocket to an event type. Throws if not called over websocket. |
| <Link id="m-subscriptions" /><code>{"static IEnumerable<"}<Link to="/mod/game-api/types/alta-console/iconsoleevent">{"IConsoleEvent"}</Link>{"> Subscriptions()"}</code> | `websocket subscriptions`: lists all registered console events. |
| <Link id="m-unsubscribe" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/websocketcommandhandler-subscriptionresult">{"WebSocketCommandHandler.SubscriptionResult"}</Link>{" Unsubscribe(string eventType)"}</code> | `websocket unsubscribe`: unsubscribes the calling websocket from an event type. Throws if not called over websocket. |
