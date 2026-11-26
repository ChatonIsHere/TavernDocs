---
title: "GameServerWebsocketResponseType"
description: "Kind of GameServerWebsocketResponse sent over the game server websocket: system message, subscription event or command result."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameServerWebsocketResponseType

An **enum** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Enums`.

Kind of `GameServerWebsocketResponse` sent over the game server websocket: system message, subscription event or command result.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Values

| Member |
| --- |
| <Link id="m-commandresult" /><code>{"CommandResult = 2"}</code> |
| <Link id="m-subscription" /><code>{"Subscription = 1"}</code> |
| <Link id="m-systemmessage" /><code>{"SystemMessage = 0"}</code> |

## Used in

Members of other types that take, return or hold a `GameServerWebsocketResponseType`:

[`GameServerWebsocketResponse.GameServerWebsocketResponse`](/game-api/types/assembly-api-models/gameserverwebsocketresponse#m-ctor), [`GameServerWebsocketResponse.Type`](/game-api/types/assembly-api-models/gameserverwebsocketresponse#m-type).
