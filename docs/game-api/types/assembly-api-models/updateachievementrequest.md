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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UpdateAchievementRequest()"}</code> | Creates an `UpdateAchievementRequest` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-achievementhash" /><code>{"uint AchievementHash { get; set; }"}</code> | Hash of the achievement. |
| <Link id="m-iscompleted" /><code>{"bool IsCompleted { get; set; }"}</code> | Whether the achievement is completed. |

## Used in

Members of other types that take, return or hold a `UpdateAchievementRequest`:

[`AchievementApiClient.updateAchievementRequest`](/game-api/types/assembly-api-client/achievementapiclient#m-updateachievementrequest), [`LowLevelApiClient.UpdateAchievementForUserAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-updateachievementforuserasync).
