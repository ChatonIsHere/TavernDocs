---
title: "UpdateAchievementRequest"
description: "Body for updating one achievement for a user on the Alta web API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UpdateAchievementRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body for updating one achievement for a user on the Alta web API.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UpdateAchievementRequest()"}</code> | <span className="api-desc">Creates an `UpdateAchievementRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-achievementhash" /><code>{"uint AchievementHash { get; set; }"}</code> | <span className="api-desc">Hash of the achievement.</span> |
| <Link id="m-iscompleted" /><code>{"bool IsCompleted { get; set; }"}</code> | <span className="api-desc">Whether the achievement is completed.</span> |

## Used in

Members of other types that take, return or hold a `UpdateAchievementRequest`:

<div className="api-used-in">

[`AchievementApiClient.updateAchievementRequest`](/mod/game-api/types/assembly-api-client/achievementapiclient#m-updateachievementrequest), [`LowLevelApiClient.UpdateAchievementForUserAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-updateachievementforuserasync).

</div>
