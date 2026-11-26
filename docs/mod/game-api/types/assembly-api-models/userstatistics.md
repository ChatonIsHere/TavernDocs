---
title: "UserStatistics"
description: "Account stats from the Alta API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserStatistics

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Account stats from the Alta API.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UserStatistics()"}</code> | <span className="api-desc">Creates an `UserStatistics` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-playtime" /><code>{"TimeSpan? PlayTime { get; set; }"}</code> | <span className="api-desc">Total play time, if known.</span> |
| <Link id="m-signuptime" /><code>{"DateTime SignupTime { get; set; }"}</code> | <span className="api-desc">When the account was created.</span> |

## Used in

Members of other types that take, return or hold a `UserStatistics`:

<div className="api-used-in">

[`IUserApiClient.GetUserStatisticsAsync`](/mod/game-api/types/assembly-api-client/iuserapiclient#m-getuserstatisticsasync), [`OfflineUserApiClient.GetUserStatisticsAsync`](/mod/game-api/types/assembly-api-client/offlineuserapiclient#m-getuserstatisticsasync), [`UserApiClient.GetUserStatisticsAsync`](/mod/game-api/types/assembly-api-client/userapiclient#m-getuserstatisticsasync), [`LowLevelApiClient.GetUsersStatistics`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getusersstatistics), [`PublicUserInfoResponse.Statistics`](/mod/game-api/types/assembly-api-models/publicuserinforesponse#m-statistics).

</div>
