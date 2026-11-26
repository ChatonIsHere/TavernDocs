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
| <Link id="m-ctor" /><code>{"WebSocketManager(string authToken, string apiKey, string uri)"}</code> | <span className="api-desc">Creates a `WebSocketManager` from `authToken`, `apiKey` and `uri`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-apikey" /><code>{"private readonly string apiKey"}</code> | <span className="api-desc">API key sent in the `x-api-key` header.</span> |
| <Link id="m-authtoken" /><code>{"private readonly string authToken"}</code> | <span className="api-desc">The bearer token, stored with the `Bearer ` prefix, sent in the `authorization` header.</span> |
| <Link id="m-handlers" /><code>{"private readonly Dictionary<string, Action<string>> handlers"}</code> | <span className="api-desc">Event name to callback map used by `MessageReceived`.</span> |
| <Link id="m-uri" /><code>{"private readonly string uri"}</code> | <span className="api-desc">WebSocket address to connect to.</span> |
| <Link id="m-websocketsource" /><code>{"private TaskCompletionSource<WebSocket> webSocketSource"}</code> | <span className="api-desc">Completes when the socket opens. Once set, later sends reuse it; there is no reconnect if it drops.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-sendmessage" /><code>{"async Task SendMessage(string path, object body)"}</code> | <span className="api-desc">Serialises `body` to JSON, wraps it in a `WebsocketMessageBody` with the given path and sends it, connecting first if needed.</span> |
| <Link id="m-sethandler" /><code>{"void SetHandler(string type, Action<string> handle)"}</code> | <span className="api-desc">Registers a callback for an event type. A second handler for the same type is chained after the first, not replaced.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getwebsocket" /><code>{"private Task<WebSocket> GetWebSocket()"}</code> | <span className="api-desc">Returns the shared socket task, opening the connection with the auth and API key headers the first time it's called.</span> |
| <Link id="m-handleerror" /><code>{"private void HandleError(object sender, ErrorEventArgs e)"}</code> | <span className="api-desc">Socket error handler; only writes the exception to the console.</span> |
| <Link id="m-messagereceived" /><code>{"private void MessageReceived(object sender, MessageReceivedEventArgs eventArgs)"}</code> | <span className="api-desc">Parses each incoming message as a `WebsocketResponseBody` and calls the handler registered for its `Event` with the `Content`.</span> |

</details>
