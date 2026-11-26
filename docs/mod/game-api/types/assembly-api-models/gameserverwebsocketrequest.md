---
title: "GameServerWebsocketRequest"
description: "A command sent to a game server over its WebSocket, with an id to match the reply to."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameServerWebsocketRequest

A **struct** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

A command sent to a game server over its WebSocket, with an id to match the reply to.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-content" /><code>{"string content"}</code> | <span className="api-desc">The command text.</span> |
| <Link id="m-id" /><code>{"uint id"}</code> | <span className="api-desc">Command id; probably echoed back as `CommandId` in the `GameServerWebsocketResponse`.</span> |
