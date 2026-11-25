---
title: "JoinedGroupManager"
description: "class JoinedGroupManager in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JoinedGroupManager

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`JoinedGroups`](/game-api/types/assembly-api-client/joinedgroups), [`JoinedGroupListElement`](/game-api/types/alta-menus/joinedgrouplistelement)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member |
| --- |
| <Link id="m-ctor" /><code>{"internal JoinedGroupManager("}<Link to="/game-api/types/assembly-api-models/groupinfodetailed">{"GroupInfoDetailed"}</Link>{" group, "}<Link to="/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{" membership, "}<Link to="/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api)"}</code> |

</details>

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-api" /><code>{"private readonly "}<Link to="/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-bans" /><code><Link to="/game-api/types/assembly-api-client/groupbans">{"GroupBans"}</Link>{" Bans { get; }"}</code> |
| <Link id="m-group" /><code><Link to="/game-api/types/assembly-api-models/groupinfodetailed">{"GroupInfoDetailed"}</Link>{" Group { get; }"}</code> |
| <Link id="m-info" /><code><Link to="/game-api/types/assembly-api-client/groupinfomanager">{"GroupInfoManager"}</Link>{" Info { get; }"}</code> |
| <Link id="m-invites" /><code><Link to="/game-api/types/assembly-api-client/groupinvites">{"GroupInvites"}</Link>{" Invites { get; }"}</code> |
| <Link id="m-memberinfo" /><code><Link to="/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{" MemberInfo { get; }"}</code> |
| <Link id="m-requests" /><code><Link to="/game-api/types/assembly-api-client/groupjoinrequests">{"GroupJoinRequests"}</Link>{" Requests { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-leavegroup" /><code>{"Task LeaveGroup()"}</code> |

## Used in

Members of other types that take, return or hold a `JoinedGroupManager`:

[`GroupInfoManager.GroupInfoManager`](/game-api/types/assembly-api-client/groupinfomanager#m-ctor), [`GroupMember.GroupMember`](/game-api/types/assembly-api-client/groupmember#m-ctor), [`GroupMember.groupsManager`](/game-api/types/assembly-api-client/groupmember#m-groupsmanager), [`GroupMembers.GroupMembers`](/game-api/types/assembly-api-client/groupmembers#m-ctor), [`GroupRoles.groupManager`](/game-api/types/assembly-api-client/grouproles#m-groupmanager), [`GroupRoles.GroupRoles`](/game-api/types/assembly-api-client/grouproles#m-ctor), [`JoinedGroups.GetByIdentifier`](/game-api/types/assembly-api-client/joinedgroups#m-getbyidentifier), [`EditServerPanel.server`](/game-api/types/alta-menus/editserverpanel#m-server), [`EditServerPanel.Setup`](/game-api/types/alta-menus/editserverpanel#m-setup), [`GroupPage.group`](/game-api/types/alta-menus/grouppage#m-group), [`GroupPage.SetupForGroup`](/game-api/types/alta-menus/grouppage#m-setupforgroup), [`InviteUserToGroupPanel.FinishInvite`](/game-api/types/alta-menus/inviteusertogrouppanel#m-finishinvite), [`InviteUserToGroupPanel.InviteToGroup`](/game-api/types/alta-menus/inviteusertogrouppanel#m-invitetogroup), [`InviteUserToGroupViaFriendsPanel.group`](/game-api/types/alta-menus/inviteusertogroupviafriendspanel#m-group), [`InviteUserToGroupViaFriendsPanel.SetupForGroup`](/game-api/types/alta-menus/inviteusertogroupviafriendspanel#m-setupforgroup), [`JoinedGroupListElement.GetText`](/game-api/types/alta-menus/joinedgrouplistelement#m-gettext), [`SelectedGroupPanel.Group`](/game-api/types/alta-menus/selectedgrouppanel#m-group), [`SelectedGroupPanel.SetToGroup`](/game-api/types/alta-menus/selectedgrouppanel#m-settogroup), [`RecentPlayerActionPage.GetServerGroupManager`](/game-api/types/global-q-r/recentplayeractionpage#m-getservergroupmanager), [`RecentPlayerActionPage.serverGroupManagerCache`](/game-api/types/global-q-r/recentplayeractionpage#m-servergroupmanagercache).
