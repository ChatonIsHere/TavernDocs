---
title: "GameServerAllocation"
description: "An Agones GameServerAllocation request, which asks Agones for a ready game server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameServerAllocation

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Agones`.

An Agones `GameServerAllocation` request, which asks Agones for a ready game server.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Inherits or implements** [`AgonesObject`](/game-api/types/assembly-api-models/agonesobject)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GameServerAllocation()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-kind" /><code>{"override string Kind { get; set; }"}</code> | Always `GameServerAllocation` by default. |
| <Link id="m-spec" /><code><Link to="/game-api/types/assembly-api-models/gameserverallocationspec">{"GameServerAllocationSpec"}</Link>{" Spec { get; set; }"}</code> | What kind of game server to allocate. |
