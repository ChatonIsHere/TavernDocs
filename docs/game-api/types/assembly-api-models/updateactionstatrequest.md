---
title: "UpdateActionStatRequest"
description: "class UpdateActionStatRequest in Alta.Api.DataTransferModels."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UpdateActionStatRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"UpdateActionStatRequest()"}</code> |

## Properties

| Member |
| --- |
| <Link id="m-actionstats" /><code>{"List<"}<Link to="/game-api/types/assembly-api-models/statprogress">{"StatProgress"}</Link>{"> ActionStats { get; set; }"}</code> |
| <Link id="m-newprogress" /><code>{"float NewProgress { get; set; }"}</code> |
| <Link id="m-stathash" /><code>{"uint StatHash { get; set; }"}</code> |

## Used in

Members of other types that take, return or hold a `UpdateActionStatRequest`:

[`AchievementApiClient.actionStatRequest`](/game-api/types/assembly-api-client/achievementapiclient#m-actionstatrequest), [`AchievementApiClient.updateActionStatRequest`](/game-api/types/assembly-api-client/achievementapiclient#m-updateactionstatrequest), [`LowLevelApiClient.UpdateActionStatForUserAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-updateactionstatforuserasync).
