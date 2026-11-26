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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerActionStatResponse()"}</code> | <span className="api-desc">Creates a `PlayerActionStatResponse` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-actionstats" /><code>{"List<"}<Link to="/mod/game-api/types/assembly-api-models/statprogress">{"StatProgress"}</Link>{"> ActionStats { get; set; }"}</code> | <span className="api-desc">Progress for each tracked stat.</span> |

## Used in

Members of other types that take, return or hold a `PlayerActionStatResponse`:

<div className="api-used-in">

[`LowLevelApiClient.GetActionStatsForUserAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getactionstatsforuserasync).

</div>
