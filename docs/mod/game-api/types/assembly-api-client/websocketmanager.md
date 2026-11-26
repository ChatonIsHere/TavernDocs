---
title: "WebSocketManager"
description: "A small WebSocket client for the Alta API that sends JSON messages and routes incoming events to handlers by event name."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WebSocketManager

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel.Subscriptions`.

A small WebSocket client for the Alta API that sends JSON messages and routes incoming events to handlers by event name. Opens the socket lazily on the first send.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WebSocketManager(string authToken, string apiKey, string uri)"}</code> | Creates a `WebSocketManager` from `authToken`, `apiKey` and `uri`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-apikey" /><code>{"private readonly string apiKey"}</code> | API key sent in the `x-api-key` header. |
| <Link id="m-authtoken" /><code>{"private readonly string authToken"}</code> | The bearer token, stored with the `Bearer ` prefix, sent in the `authorization` header. |
| <Link id="m-handlers" /><code>{"private readonly Dictionary<string, Action<string>> handlers"}</code> | Event name to callback map used by `MessageReceived`. |
| <Link id="m-uri" /><code>{"private readonly string uri"}</code> | WebSocket address to connect to. |
| <Link id="m-websocketsource" /><code>{"private TaskCompletionSource<WebSocket> webSocketSource"}</code> | Completes when the socket opens. Once set, later sends reuse it; there is no reconnect if it drops. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-sendmessage" /><code>{"async Task SendMessage(string path, object body)"}</code> | Serialises `body` to JSON, wraps it in a `WebsocketMessageBody` with the given path and sends it, connecting first if needed. |
| <Link id="m-sethandler" /><code>{"void SetHandler(string type, Action<string> handle)"}</code> | Registers a callback for an event type. A second handler for the same type is chained after the first, not replaced. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getwebsocket" /><code>{"private Task<WebSocket> GetWebSocket()"}</code> | Returns the shared socket task, opening the connection with the auth and API key headers the first time it's called. |
| <Link id="m-handleerror" /><code>{"private void HandleError(object sender, ErrorEventArgs e)"}</code> | Socket error handler; only writes the exception to the console. |
| <Link id="m-messagereceived" /><code>{"private void MessageReceived(object sender, MessageReceivedEventArgs eventArgs)"}</code> | Parses each incoming message as a `WebsocketResponseBody` and calls the handler registered for its `Event` with the `Content`. |

</details>
