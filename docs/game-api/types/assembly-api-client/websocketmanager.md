---
title: "WebSocketManager"
description: "class WebSocketManager in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WebSocketManager

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel.Subscriptions`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"WebSocketManager(string authToken, string apiKey, string uri)"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-apikey" /><code>{"private readonly string apiKey"}</code> |
| <Link id="m-authtoken" /><code>{"private readonly string authToken"}</code> |
| <Link id="m-handlers" /><code>{"private readonly Dictionary<string, Action<string>> handlers"}</code> |
| <Link id="m-uri" /><code>{"private readonly string uri"}</code> |
| <Link id="m-websocketsource" /><code>{"private TaskCompletionSource<WebSocket> webSocketSource"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-sendmessage" /><code>{"async Task SendMessage(string path, object body)"}</code> |
| <Link id="m-sethandler" /><code>{"void SetHandler(string type, Action<string> handle)"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-getwebsocket" /><code>{"private Task<WebSocket> GetWebSocket()"}</code> |
| <Link id="m-handleerror" /><code>{"private void HandleError(object sender, ErrorEventArgs e)"}</code> |
| <Link id="m-messagereceived" /><code>{"private void MessageReceived(object sender, MessageReceivedEventArgs eventArgs)"}</code> |

</details>
