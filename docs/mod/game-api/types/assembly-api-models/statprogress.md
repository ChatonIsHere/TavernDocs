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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatProgress()"}</code> | <span className="api-desc">Creates a `StatProgress` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-newprogress" /><code>{"float NewProgress { get; set; }"}</code> | <span className="api-desc">Progress added since the last update (`new_progress`).</span> |
| <Link id="m-progress" /><code>{"float Progress { get; set; }"}</code> | <span className="api-desc">Total progress on the stat.</span> |
| <Link id="m-stathash" /><code>{"uint StatHash { get; set; }"}</code> | <span className="api-desc">Hash that identifies the stat.</span> |

## Used in

Members of other types that take, return or hold a `StatProgress`:

<div className="api-used-in">

[`AchievementApiClient.GetActionStatsForUserAsync`](/mod/game-api/types/assembly-api-client/achievementapiclient#m-getactionstatsforuserasync), [`AchievementApiClient.UpdateActionStatForUserAsync`](/mod/game-api/types/assembly-api-client/achievementapiclient#m-updateactionstatforuserasync-2), [`IAchievementClient.GetActionStatsForUserAsync`](/mod/game-api/types/assembly-api-client/iachievementclient#m-getactionstatsforuserasync), [`IAchievementClient.UpdateActionStatForUserAsync`](/mod/game-api/types/assembly-api-client/iachievementclient#m-updateactionstatforuserasync), [`OfflineAchievementApiClient.GetActionStatsForUserAsync`](/mod/game-api/types/assembly-api-client/offlineachievementapiclient#m-getactionstatsforuserasync), [`OfflineAchievementApiClient.UpdateActionStatForUserAsync`](/mod/game-api/types/assembly-api-client/offlineachievementapiclient#m-updateactionstatforuserasync-2), [`UpdateActionStatRequest.ActionStats`](/mod/game-api/types/assembly-api-models/updateactionstatrequest#m-actionstats), [`PlayerActionStatResponse.ActionStats`](/mod/game-api/types/assembly-api-models/playeractionstatresponse#m-actionstats), [`PlayerTracker.PlayerTracker`](/mod/game-api/types/global-p/playertracker#m-ctor).

</div>
