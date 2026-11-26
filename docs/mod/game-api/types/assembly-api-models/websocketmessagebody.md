---
title: "WebsocketMessageBody"
description: "A message sent to the Alta API over its WebSocket: an HTTP-style request with method, path and JSON content."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WebsocketMessageBody

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

A message sent to the Alta API over its WebSocket: an HTTP-style request with method, path and JSON content.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WebsocketMessageBody()"}</code> | Creates a `WebsocketMessageBody` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-authorization" /><code>{"string Authorization { get; set; }"}</code> | Auth header value for this request, if any. |
| <Link id="m-content" /><code>{"string Content { get; set; }"}</code> | The request body as a JSON string. |
| <Link id="m-id" /><code>{"int Id { get; set; }"}</code> | Request id, probably matched by the reply's `Id`. |
| <Link id="m-method" /><code>{"string Method { get; set; }"}</code> | HTTP method name for the request. |
| <Link id="m-path" /><code>{"string Path { get; set; }"}</code> | API path the request is for. |
