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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UpdateActionStatRequest()"}</code> | Creates an `UpdateActionStatRequest` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-actionstats" /><code>{"List<"}<Link to="/game-api/types/assembly-api-models/statprogress">{"StatProgress"}</Link>{"> ActionStats { get; set; }"}</code> | The stats and their new progress (`stats`). |
| <Link id="m-newprogress" /><code>{"float NewProgress { get; set; }"}</code> | Obsolete: new progress for a single stat. |
| <Link id="m-stathash" /><code>{"uint StatHash { get; set; }"}</code> | Obsolete: hash of a single stat. |

## Used in

Members of other types that take, return or hold a `UpdateActionStatRequest`:

[`AchievementApiClient.actionStatRequest`](/game-api/types/assembly-api-client/achievementapiclient#m-actionstatrequest), [`AchievementApiClient.updateActionStatRequest`](/game-api/types/assembly-api-client/achievementapiclient#m-updateactionstatrequest), [`LowLevelApiClient.UpdateActionStatForUserAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-updateactionstatforuserasync).
