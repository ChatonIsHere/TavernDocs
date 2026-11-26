---
title: "InvitedGroupInfo"
description: "Group details from the Alta web API for a group the user was invited to."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InvitedGroupInfo

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Group details from the Alta web API for a group the user was invited to.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Inherits or implements** [`GroupInfoDetailed`](/mod/game-api/types/assembly-api-models/groupinfodetailed)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InvitedGroupInfo()"}</code> | <span className="api-desc">Creates an `InvitedGroupInfo` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-invitedat" /><code>{"DateTime InvitedAt { get; set; }"}</code> | <span className="api-desc">When the invite was sent.</span> |

## Used in

Members of other types that take, return or hold a `InvitedGroupInfo`:

<div className="api-used-in">

[`IncomingGroupInvite.GroupInfo`](/mod/game-api/types/assembly-api-client/incominggroupinvite#m-groupinfo), [`IncomingGroupInvite.IncomingGroupInvite`](/mod/game-api/types/assembly-api-client/incominggroupinvite#m-ctor), [`LowLevelApiClient.GetGroupInvites`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getgroupinvites).

</div>
