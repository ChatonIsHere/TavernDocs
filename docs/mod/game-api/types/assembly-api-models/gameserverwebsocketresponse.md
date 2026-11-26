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
| <Link id="m-ctor" /><code>{"GameServerWebsocketResponse("}<Link to="/mod/game-api/types/assembly-api-models/gameserverwebsocketresponsetype">{"GameServerWebsocketResponseType"}</Link>{" type, string eventType, object data, uint? commandId = null)"}</code> | <span className="api-desc">Creates a `GameServerWebsocketResponse` from `type`, `eventType`, `data` and `commandId`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-commandid" /><code>{"uint? CommandId"}</code> | <span className="api-desc">Id of the command this answers, for command results.</span> |
| <Link id="m-data" /><code>{"object Data"}</code> | <span className="api-desc">The payload object.</span> |
| <Link id="m-eventtype" /><code>{"string EventType"}</code> | <span className="api-desc">Name of the event, for subscription messages.</span> |
| <Link id="m-timestamp" /><code>{"DateTime TimeStamp"}</code> | <span className="api-desc">When the message was made, in UTC.</span> |
| <Link id="m-type" /><code><Link to="/mod/game-api/types/assembly-api-models/gameserverwebsocketresponsetype">{"GameServerWebsocketResponseType"}</Link>{" Type"}</code> | <span className="api-desc">Whether this is a system message, subscription event or command result.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-serialized" /><code>{"private string serialized"}</code> | <span className="api-desc">Cached JSON text; set to null on creation and not used in this code.</span> |

</details>
