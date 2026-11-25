---
title: "GroupInfo"
description: "class GroupInfo in Alta.Api.DataTransferModels."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupInfo

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Derived types** [`GroupInfoDetailed`](/game-api/types/assembly-api-models/groupinfodetailed)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GroupInfo()"}</code> |

## Properties

| Member |
| --- |
| <Link id="m-createdat" /><code>{"DateTime CreatedAt { get; set; }"}</code> |
| <Link id="m-description" /><code>{"string Description { get; set; }"}</code> |
| <Link id="m-grouptype" /><code><Link to="/game-api/types/assembly-api-models/grouptype">{"GroupType"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/grouptype">{"GroupType"}</Link>{" { get; set; }"}</code> |
| <Link id="m-identifier" /><code>{"int Identifier { get; set; }"}</code> |
| <Link id="m-membercount" /><code>{"int MemberCount { get; set; }"}</code> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> |
| <Link id="m-tags" /><code>{"List<string> Tags { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> |

## Used in

Members of other types that take, return or hold a `GroupInfo`:

[`GroupBans.Group`](/game-api/types/assembly-api-client/groupbans#m-group), [`GroupBans.GroupBans`](/game-api/types/assembly-api-client/groupbans#m-ctor), [`GroupInfoUpdate.Group`](/game-api/types/assembly-api-client/groupinfoupdate#m-group), [`GroupInfoUpdate.GroupInfoUpdate`](/game-api/types/assembly-api-client/groupinfoupdate#m-ctor), [`GroupInvites.GroupInfo`](/game-api/types/assembly-api-client/groupinvites#m-groupinfo), [`GroupInvites.GroupInvites`](/game-api/types/assembly-api-client/groupinvites#m-ctor), [`GroupJoinRequests.GroupJoinRequests`](/game-api/types/assembly-api-client/groupjoinrequests#m-ctor), [`JoinableGroupInfo.Group`](/game-api/types/assembly-api-client/joinablegroupinfo#m-group), [`JoinableGroupInfo.JoinableGroupInfo`](/game-api/types/assembly-api-client/joinablegroupinfo#m-ctor), [`OutgoingGroupJoinRequest.GroupInfo`](/game-api/types/assembly-api-client/outgoinggroupjoinrequest#m-groupinfo), [`OutgoingGroupJoinRequest.OutgoingGroupJoinRequest`](/game-api/types/assembly-api-client/outgoinggroupjoinrequest#m-ctor), [`LowLevelApiClient.GetGroupsByType`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getgroupsbytype), [`LowLevelApiClient.GetRequestedGroups`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getrequestedgroups), [`QuickCreateResponse.Group`](/game-api/types/assembly-api-models/quickcreateresponse#m-group).
