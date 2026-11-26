---
title: "GameServerWebsocketResponse"
description: "A message from a game server over its WebSocket: a system message, a subscription event or a command result."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameServerWebsocketResponse

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

A message from a game server over its WebSocket: a system message, a subscription event or a command result. Time-stamped (UTC) when made.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GameServerWebsocketResponse("}<Link to="/mod/game-api/types/assembly-api-models/gameserverwebsocketresponsetype">{"GameServerWebsocketResponseType"}</Link>{" type, string eventType, object data, uint? commandId = null)"}</code> | Creates a `GameServerWebsocketResponse` from `type`, `eventType`, `data` and `commandId`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-commandid" /><code>{"uint? CommandId"}</code> | Id of the command this answers, for command results. |
| <Link id="m-data" /><code>{"object Data"}</code> | The payload object. |
| <Link id="m-eventtype" /><code>{"string EventType"}</code> | Name of the event, for subscription messages. |
| <Link id="m-timestamp" /><code>{"DateTime TimeStamp"}</code> | When the message was made, in UTC. |
| <Link id="m-type" /><code><Link to="/mod/game-api/types/assembly-api-models/gameserverwebsocketresponsetype">{"GameServerWebsocketResponseType"}</Link>{" Type"}</code> | Whether this is a system message, subscription event or command result. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-serialized" /><code>{"private string serialized"}</code> | Cached JSON text; set to null on creation and not used in this code. |

</details>
