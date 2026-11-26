---
title: "PlayerActionStatResponse"
description: "Web API model listing a player's action stats."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerActionStatResponse

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Web API model listing a player's action stats.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerActionStatResponse()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-actionstats" /><code>{"List<"}<Link to="/game-api/types/assembly-api-models/statprogress">{"StatProgress"}</Link>{"> ActionStats { get; set; }"}</code> | Progress for each tracked stat. |

## Used in

Members of other types that take, return or hold a `PlayerActionStatResponse`:

[`LowLevelApiClient.GetActionStatsForUserAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getactionstatsforuserasync).
