---
title: "StatProgress"
description: "Progress on one achievement action stat, read from and sent to the web API by the achievement client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatProgress

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Progress on one achievement action stat, read from and sent to the web API by the achievement client.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatProgress()"}</code> | Creates a `StatProgress` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-newprogress" /><code>{"float NewProgress { get; set; }"}</code> | Progress added since the last update (`new_progress`). |
| <Link id="m-progress" /><code>{"float Progress { get; set; }"}</code> | Total progress on the stat. |
| <Link id="m-stathash" /><code>{"uint StatHash { get; set; }"}</code> | Hash that identifies the stat. |

## Used in

Members of other types that take, return or hold a `StatProgress`:

[`AchievementApiClient.GetActionStatsForUserAsync`](/game-api/types/assembly-api-client/achievementapiclient#m-getactionstatsforuserasync), [`AchievementApiClient.UpdateActionStatForUserAsync`](/game-api/types/assembly-api-client/achievementapiclient#m-updateactionstatforuserasync-2), [`IAchievementClient.GetActionStatsForUserAsync`](/game-api/types/assembly-api-client/iachievementclient#m-getactionstatsforuserasync), [`IAchievementClient.UpdateActionStatForUserAsync`](/game-api/types/assembly-api-client/iachievementclient#m-updateactionstatforuserasync), [`OfflineAchievementApiClient.GetActionStatsForUserAsync`](/game-api/types/assembly-api-client/offlineachievementapiclient#m-getactionstatsforuserasync), [`OfflineAchievementApiClient.UpdateActionStatForUserAsync`](/game-api/types/assembly-api-client/offlineachievementapiclient#m-updateactionstatforuserasync-2), [`UpdateActionStatRequest.ActionStats`](/game-api/types/assembly-api-models/updateactionstatrequest#m-actionstats), [`PlayerActionStatResponse.ActionStats`](/game-api/types/assembly-api-models/playeractionstatresponse#m-actionstats), [`PlayerTracker.PlayerTracker`](/game-api/types/global-p/playertracker#m-ctor).
