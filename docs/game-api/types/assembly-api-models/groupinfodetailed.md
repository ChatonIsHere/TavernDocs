---
title: "GroupInfoDetailed"
description: "class GroupInfoDetailed in Alta.Api.DataTransferModels."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupInfoDetailed

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Inherits or implements** [`GroupInfo`](/game-api/types/assembly-api-models/groupinfo)
- **Derived types** [`InvitedGroupInfo`](/game-api/types/assembly-api-models/invitedgroupinfo)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GroupInfoDetailed()"}</code> |

## Properties

| Member |
| --- |
| <Link id="m-allowedserverscount" /><code>{"int AllowedServersCount { get; set; }"}</code> |
| <Link id="m-roles" /><code><Link to="/game-api/types/assembly-api-models/grouproleinfo">{"GroupRoleInfo"}</Link>{"[] Roles { get; set; }"}</code> |
| <Link id="m-servers" /><code><Link to="/game-api/types/assembly-api-models/groupserverinfo">{"GroupServerInfo"}</Link>{"[] Servers { get; set; }"}</code> |

## Used in

Members of other types that take, return or hold a `GroupInfoDetailed`:

[`GroupInfoManager.GroupInfoManager`](/game-api/types/assembly-api-client/groupinfomanager#m-ctor), [`JoinedGroupManager.Group`](/game-api/types/assembly-api-client/joinedgroupmanager#m-group), [`JoinedGroupManager.JoinedGroupManager`](/game-api/types/assembly-api-client/joinedgroupmanager#m-ctor), [`LowLevelApiClient.GetGroupByIdentifier`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getgroupbyidentifier), [`LowLevelApiClient.UpdateGroupInfo`](/game-api/types/assembly-api-client/lowlevelapiclient#m-updategroupinfo), [`JoinedGroupInfo.Group`](/game-api/types/assembly-api-models/joinedgroupinfo#m-group).
