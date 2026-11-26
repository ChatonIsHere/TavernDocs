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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Derived types** [`GroupInfoDetailed`](/mod/game-api/types/assembly-api-models/groupinfodetailed)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GroupInfo()"}</code> | <span className="api-desc">Creates a `GroupInfo` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-createdat" /><code>{"DateTime CreatedAt { get; set; }"}</code> | <span className="api-desc">When the group was made.</span> |
| <Link id="m-description" /><code>{"string Description { get; set; }"}</code> | <span className="api-desc">Group description text.</span> |
| <Link id="m-grouptype" /><code><Link to="/mod/game-api/types/assembly-api-models/grouptype">{"GroupType"}</Link>{" "}<Link to="/mod/game-api/types/assembly-api-models/grouptype">{"GroupType"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Group type (such as open or private), sent as a string.</span> |
| <Link id="m-identifier" /><code>{"int Identifier { get; set; }"}</code> | <span className="api-desc">The group's id.</span> |
| <Link id="m-membercount" /><code>{"int MemberCount { get; set; }"}</code> | <span className="api-desc">How many members the group has.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">Group name.</span> |
| <Link id="m-tags" /><code>{"List<string> Tags { get; set; }"}</code> | <span className="api-desc">Tags set on the group.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Returns "id - name".</span> |

## Used in

Members of other types that take, return or hold a `GroupInfo`:

<div className="api-used-in">

[`GroupBans.Group`](/mod/game-api/types/assembly-api-client/groupbans#m-group), [`GroupBans.GroupBans`](/mod/game-api/types/assembly-api-client/groupbans#m-ctor), [`GroupInfoUpdate.Group`](/mod/game-api/types/assembly-api-client/groupinfoupdate#m-group), [`GroupInfoUpdate.GroupInfoUpdate`](/mod/game-api/types/assembly-api-client/groupinfoupdate#m-ctor), [`GroupInvites.GroupInfo`](/mod/game-api/types/assembly-api-client/groupinvites#m-groupinfo), [`GroupInvites.GroupInvites`](/mod/game-api/types/assembly-api-client/groupinvites#m-ctor), [`GroupJoinRequests.GroupJoinRequests`](/mod/game-api/types/assembly-api-client/groupjoinrequests#m-ctor), [`JoinableGroupInfo.Group`](/mod/game-api/types/assembly-api-client/joinablegroupinfo#m-group), [`JoinableGroupInfo.JoinableGroupInfo`](/mod/game-api/types/assembly-api-client/joinablegroupinfo#m-ctor), [`OutgoingGroupJoinRequest.GroupInfo`](/mod/game-api/types/assembly-api-client/outgoinggroupjoinrequest#m-groupinfo), [`OutgoingGroupJoinRequest.OutgoingGroupJoinRequest`](/mod/game-api/types/assembly-api-client/outgoinggroupjoinrequest#m-ctor), [`LowLevelApiClient.GetGroupsByType`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getgroupsbytype), [`LowLevelApiClient.GetRequestedGroups`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getrequestedgroups), [`QuickCreateResponse.Group`](/mod/game-api/types/assembly-api-models/quickcreateresponse#m-group).

</div>
