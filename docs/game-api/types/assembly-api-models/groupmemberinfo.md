---
title: "GroupMemberInfo"
description: "API response describing one member of a group (server group), with their role and permissions."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupMemberInfo

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

API response describing one member of a group (server group), with their role and permissions.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GroupMemberInfo()"}</code> | Creates a `GroupMemberInfo` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-createdat" /><code>{"DateTime CreatedAt { get; set; }"}</code> | When the user joined the group. |
| <Link id="m-groupidentifier" /><code>{"int GroupIdentifier { get; set; }"}</code> | The group's ID (`group_id`). |
| <Link id="m-iconindex" /><code>{"int IconIndex { get; set; }"}</code> | The member's icon index. |
| <Link id="m-isbot" /><code>{"bool IsBot { get; set; }"}</code> | True if the member is a bot account. |
| <Link id="m-permissions" /><code><Link to="/game-api/types/assembly-api-models/setgrouppermissionsrequest-oldgrouppermission">{"SetGroupPermissionsRequest.OldGroupPermission"}</Link>{" Permissions { get; set; }"}</code> | The member's permissions in the old group permission format. |
| <Link id="m-roleidentifier" /><code>{"int RoleIdentifier { get; set; }"}</code> | The ID of the member's role in the group. |
| <Link id="m-type" /><code><Link to="/game-api/types/assembly-api-models/groupmembertype">{"GroupMemberType"}</Link>{" Type { get; set; }"}</code> | The member's membership type. |
| <Link id="m-useridentifier" /><code>{"int UserIdentifier { get; set; }"}</code> | The member's user ID. |
| <Link id="m-userinfo" /><code><Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" { get; }"}</code> | A `UserInfo` built from the user ID and username. Not serialized. |
| <Link id="m-username" /><code>{"string Username { get; set; }"}</code> | The member's username. |

## Used in

Members of other types that take, return or hold a `GroupMemberInfo`:

[`GroupBan.GroupBan`](/game-api/types/assembly-api-client/groupban#m-ctor), [`GroupBan.MemberInfo`](/game-api/types/assembly-api-client/groupban#m-memberinfo), [`GroupMember.GroupMember`](/game-api/types/assembly-api-client/groupmember#m-ctor), [`GroupMember.MemberInfo`](/game-api/types/assembly-api-client/groupmember#m-memberinfo), [`IncomingGroupJoinRequest.IncomingGroupJoinRequest`](/game-api/types/assembly-api-client/incominggroupjoinrequest#m-ctor), [`IncomingGroupJoinRequest.MemberInfo`](/game-api/types/assembly-api-client/incominggroupjoinrequest#m-memberinfo), [`JoinedGroupManager.JoinedGroupManager`](/game-api/types/assembly-api-client/joinedgroupmanager#m-ctor), [`JoinedGroupManager.MemberInfo`](/game-api/types/assembly-api-client/joinedgroupmanager#m-memberinfo), [`OutgoingGroupInvite.MemberInfo`](/game-api/types/assembly-api-client/outgoinggroupinvite#m-memberinfo), [`OutgoingGroupInvite.OutgoingGroupInvite`](/game-api/types/assembly-api-client/outgoinggroupinvite#m-ctor), [`LowLevelApiClient.AcceptGroupInvite`](/game-api/types/assembly-api-client/lowlevelapiclient#m-acceptgroupinvite), [`LowLevelApiClient.AcceptGroupJoinRequest`](/game-api/types/assembly-api-client/lowlevelapiclient#m-acceptgroupjoinrequest), [`LowLevelApiClient.BanUserFromGroup`](/game-api/types/assembly-api-client/lowlevelapiclient#m-banuserfromgroup), [`LowLevelApiClient.ChangeUsersRoleInGroup`](/game-api/types/assembly-api-client/lowlevelapiclient#m-changeusersroleingroup), [`LowLevelApiClient.GetGroupBans`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getgroupbans), [`LowLevelApiClient.GetGroupJoinRequests`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getgroupjoinrequests), [`LowLevelApiClient.GetGroupMemberInfo`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getgroupmemberinfo), [`LowLevelApiClient.GetGroupMembers`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getgroupmembers), [`LowLevelApiClient.GetInvitesInGroup`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getinvitesingroup), [`LowLevelApiClient.InviteUserToGroup`](/game-api/types/assembly-api-client/lowlevelapiclient#m-inviteusertogroup), [`LowLevelApiClient.RejectGroupInvite`](/game-api/types/assembly-api-client/lowlevelapiclient#m-rejectgroupinvite), [`LowLevelApiClient.RejectGroupJoinRequest`](/game-api/types/assembly-api-client/lowlevelapiclient#m-rejectgroupjoinrequest), [`LowLevelApiClient.RequestToJoinGroup`](/game-api/types/assembly-api-client/lowlevelapiclient#m-requesttojoingroup), [`LowLevelApiClient.RevokeGroupInvite`](/game-api/types/assembly-api-client/lowlevelapiclient#m-revokegroupinvite), [`LowLevelApiClient.RevokeGroupJoinRequest`](/game-api/types/assembly-api-client/lowlevelapiclient#m-revokegroupjoinrequest), [`LowLevelApiClient.RevokeUserBanInGroup`](/game-api/types/assembly-api-client/lowlevelapiclient#m-revokeuserbaningroup), [`JoinedGroupInfo.MemberInfo`](/game-api/types/assembly-api-models/joinedgroupinfo#m-memberinfo).
