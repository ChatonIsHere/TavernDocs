---
title: "UpdateActionStatRequest"
description: "Alta web API request body for updating a user's action stats."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UpdateActionStatRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Alta web API request body for updating a user's action stats.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UpdateActionStatRequest()"}</code> | <span className="api-desc">Creates an `UpdateActionStatRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-actionstats" /><code>{"List<"}<Link to="/mod/game-api/types/assembly-api-models/statprogress">{"StatProgress"}</Link>{"> ActionStats { get; set; }"}</code> | <span className="api-desc">The stats and their new progress (`stats`).</span> |
| <Link id="m-newprogress" /><code>{"float NewProgress { get; set; }"}</code> | <span className="api-desc">Obsolete: new progress for a single stat.</span> |
| <Link id="m-stathash" /><code>{"uint StatHash { get; set; }"}</code> | <span className="api-desc">Obsolete: hash of a single stat.</span> |

## Used in

Members of other types that take, return or hold a `UpdateActionStatRequest`:

<div className="api-used-in">

[`AchievementApiClient.actionStatRequest`](/mod/game-api/types/assembly-api-client/achievementapiclient#m-actionstatrequest), [`AchievementApiClient.updateActionStatRequest`](/mod/game-api/types/assembly-api-client/achievementapiclient#m-updateactionstatrequest), [`LowLevelApiClient.UpdateActionStatForUserAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-updateactionstatforuserasync).

</div>
