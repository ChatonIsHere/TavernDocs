---
title: "MembershipStatusResponse"
description: "Whether a user has a supporter membership, from LowLevelApiClient.GetMembershipStatus."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MembershipStatusResponse

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Whether a user has a supporter membership, from `LowLevelApiClient.GetMembershipStatus`.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MembershipStatusResponse()"}</code> | Creates a `MembershipStatusResponse` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-expirytime" /><code>{"DateTime? ExpiryTime { get; set; }"}</code> | When the membership ends, or null. |
| <Link id="m-ismember" /><code>{"bool IsMember { get; set; }"}</code> | True if the user currently has a membership. |

## Used in

Members of other types that take, return or hold a `MembershipStatusResponse`:

[`IUserApiClient.GetMembershipStatus`](/mod/game-api/types/assembly-api-client/iuserapiclient#m-getmembershipstatus), [`OfflineUserApiClient.GetMembershipStatus`](/mod/game-api/types/assembly-api-client/offlineuserapiclient#m-getmembershipstatus), [`UserApiClient.GetMembershipStatus`](/mod/game-api/types/assembly-api-client/userapiclient#m-getmembershipstatus), [`LowLevelApiClient.GetMembershipStatus`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getmembershipstatus).
