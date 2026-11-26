---
title: "GroupInfo"
description: "API model with the basic public info for a group (server group): name, description, type, member count and tags."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupInfo

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

API model with the basic public info for a group (server group): name, description, type, member count and tags.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Derived types** [`GroupInfoDetailed`](/game-api/types/assembly-api-models/groupinfodetailed)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GroupInfo()"}</code> | Creates a `GroupInfo` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-createdat" /><code>{"DateTime CreatedAt { get; set; }"}</code> | When the group was made. |
| <Link id="m-description" /><code>{"string Description { get; set; }"}</code> | Group description text. |
| <Link id="m-grouptype" /><code><Link to="/game-api/types/assembly-api-models/grouptype">{"GroupType"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/grouptype">{"GroupType"}</Link>{" { get; set; }"}</code> | Group type (such as open or private), sent as a string. |
| <Link id="m-identifier" /><code>{"int Identifier { get; set; }"}</code> | The group's id. |
| <Link id="m-membercount" /><code>{"int MemberCount { get; set; }"}</code> | How many members the group has. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | Group name. |
| <Link id="m-tags" /><code>{"List<string> Tags { get; set; }"}</code> | Tags set on the group. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Returns "id - name". |

## Used in

Members of other types that take, return or hold a `GroupInfo`:

[`GroupBans.Group`](/game-api/types/assembly-api-client/groupbans#m-group), [`GroupBans.GroupBans`](/game-api/types/assembly-api-client/groupbans#m-ctor), [`GroupInfoUpdate.Group`](/game-api/types/assembly-api-client/groupinfoupdate#m-group), [`GroupInfoUpdate.GroupInfoUpdate`](/game-api/types/assembly-api-client/groupinfoupdate#m-ctor), [`GroupInvites.GroupInfo`](/game-api/types/assembly-api-client/groupinvites#m-groupinfo), [`GroupInvites.GroupInvites`](/game-api/types/assembly-api-client/groupinvites#m-ctor), [`GroupJoinRequests.GroupJoinRequests`](/game-api/types/assembly-api-client/groupjoinrequests#m-ctor), [`JoinableGroupInfo.Group`](/game-api/types/assembly-api-client/joinablegroupinfo#m-group), [`JoinableGroupInfo.JoinableGroupInfo`](/game-api/types/assembly-api-client/joinablegroupinfo#m-ctor), [`OutgoingGroupJoinRequest.GroupInfo`](/game-api/types/assembly-api-client/outgoinggroupjoinrequest#m-groupinfo), [`OutgoingGroupJoinRequest.OutgoingGroupJoinRequest`](/game-api/types/assembly-api-client/outgoinggroupjoinrequest#m-ctor), [`LowLevelApiClient.GetGroupsByType`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getgroupsbytype), [`LowLevelApiClient.GetRequestedGroups`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getrequestedgroups), [`QuickCreateResponse.Group`](/game-api/types/assembly-api-models/quickcreateresponse#m-group).
