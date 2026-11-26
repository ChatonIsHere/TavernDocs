---
title: "WebsocketResponseBody"
description: "A message received from the Alta API over its WebSocket, either a reply or a subscription event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WebsocketResponseBody

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

A message received from the Alta API over its WebSocket, either a reply or a subscription event.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WebsocketResponseBody()"}</code> | <span className="api-desc">Creates a `WebsocketResponseBody` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-content" /><code>{"string Content { get; set; }"}</code> | <span className="api-desc">The payload as a JSON string; `WebSocketManager` passes it to the handler for `Event`.</span> |
| <Link id="m-event" /><code>{"string Event { get; set; }"}</code> | <span className="api-desc">Event name; `WebSocketManager` uses it to pick the handler.</span> |
| <Link id="m-id" /><code>{"int Id { get; set; }"}</code> | <span className="api-desc">Id of the request this answers.</span> |
| <Link id="m-key" /><code>{"string Key { get; set; }"}</code> | <span className="api-desc">Subscription key, probably the id the event is about.</span> |
| <Link id="m-responsecode" /><code>{"int ResponseCode { get; set; }"}</code> | <span className="api-desc">HTTP-style status code of the reply.</span> |
