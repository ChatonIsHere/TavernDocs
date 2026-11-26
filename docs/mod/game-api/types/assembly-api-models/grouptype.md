---
title: "GroupType"
description: "Group join type: Open, Public or Private."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupType

An **enum** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Group join type: Open, Public or Private. Group discovery lists the public and open ones.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Values

| Member |
| --- |
| <Link id="m-open" /><code>{"Open = 0"}</code> |
| <Link id="m-private" /><code>{"Private = 2"}</code> |
| <Link id="m-public" /><code>{"Public = 1"}</code> |

## Used in

Members of other types that take, return or hold a `GroupType`:

<div className="api-used-in">

[`GroupGet.GroupGet`](/mod/game-api/types/assembly-api-client/groupget#m-ctor), [`LowLevelApiClient.GetGroupsByType`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getgroupsbytype), [`CreateGroupAndServerRequest.GroupType`](/mod/game-api/types/assembly-api-models/creategroupandserverrequest#m-grouptype), [`CreateGroupRequest.Type`](/mod/game-api/types/assembly-api-models/creategrouprequest#m-type), [`EditGroupRequest.Type`](/mod/game-api/types/assembly-api-models/editgrouprequest#m-type), [`EditGroupRequest.Visibility`](/mod/game-api/types/assembly-api-models/editgrouprequest#m-visibility), [`GroupInfo.GroupType`](/mod/game-api/types/assembly-api-models/groupinfo#m-grouptype), [`GroupTypeExtensions.ConvertToServerJoinType`](/mod/game-api/types/assembly-api-models/grouptypeextensions#m-converttoserverjointype).

</div>
