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
| <Link id="m-ctor" /><code>{"MembershipStatusResponse()"}</code> | <span className="api-desc">Creates a `MembershipStatusResponse` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-expirytime" /><code>{"DateTime? ExpiryTime { get; set; }"}</code> | <span className="api-desc">When the membership ends, or null.</span> |
| <Link id="m-ismember" /><code>{"bool IsMember { get; set; }"}</code> | <span className="api-desc">True if the user currently has a membership.</span> |

## Used in

Members of other types that take, return or hold a `MembershipStatusResponse`:

<div className="api-used-in">

[`IUserApiClient.GetMembershipStatus`](/mod/game-api/types/assembly-api-client/iuserapiclient#m-getmembershipstatus), [`OfflineUserApiClient.GetMembershipStatus`](/mod/game-api/types/assembly-api-client/offlineuserapiclient#m-getmembershipstatus), [`UserApiClient.GetMembershipStatus`](/mod/game-api/types/assembly-api-client/userapiclient#m-getmembershipstatus), [`LowLevelApiClient.GetMembershipStatus`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getmembershipstatus).

</div>
