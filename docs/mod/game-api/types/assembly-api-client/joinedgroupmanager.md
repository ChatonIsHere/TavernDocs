---
title: "JoinedGroupManager"
description: "High-level API handle for a group the current user is a member of, with its join requests, invites, bans and info managers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JoinedGroupManager

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

High-level API handle for a group the current user is a member of, with its join requests, invites, bans and info managers.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Derived types** [`JoinedGroups`](/mod/game-api/types/assembly-api-client/joinedgroups), [`JoinedGroupListElement`](/mod/game-api/types/alta-menus/joinedgrouplistelement)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal JoinedGroupManager("}<Link to="/mod/game-api/types/assembly-api-models/groupinfodetailed">{"GroupInfoDetailed"}</Link>{" group, "}<Link to="/mod/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{" membership, "}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api)"}</code> | <span className="api-desc">Creates a `JoinedGroupManager` from `group`, `membership` and `api`.</span> |

</details>

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-api" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api"}</code> | <span className="api-desc">Low-level API client the managers use.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bans" /><code><Link to="/mod/game-api/types/assembly-api-client/groupbans">{"GroupBans"}</Link>{" Bans { get; }"}</code> | <span className="api-desc">Manager for the group's bans.</span> |
| <Link id="m-group" /><code><Link to="/mod/game-api/types/assembly-api-models/groupinfodetailed">{"GroupInfoDetailed"}</Link>{" Group { get; }"}</code> | <span className="api-desc">Detailed info for the group.</span> |
| <Link id="m-info" /><code><Link to="/mod/game-api/types/assembly-api-client/groupinfomanager">{"GroupInfoManager"}</Link>{" Info { get; }"}</code> | <span className="api-desc">Manager for viewing and editing the group's info.</span> |
| <Link id="m-invites" /><code><Link to="/mod/game-api/types/assembly-api-client/groupinvites">{"GroupInvites"}</Link>{" Invites { get; }"}</code> | <span className="api-desc">Manager for the group's outgoing invites.</span> |
| <Link id="m-memberinfo" /><code><Link to="/mod/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{" MemberInfo { get; }"}</code> | <span className="api-desc">The current user's membership in the group.</span> |
| <Link id="m-requests" /><code><Link to="/mod/game-api/types/assembly-api-client/groupjoinrequests">{"GroupJoinRequests"}</Link>{" Requests { get; }"}</code> | <span className="api-desc">Manager for requests to join the group.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-leavegroup" /><code>{"Task LeaveGroup()"}</code> | <span className="api-desc">Asks the API to remove the current user from the group.</span> |

## Used in

Members of other types that take, return or hold a `JoinedGroupManager`:

<div className="api-used-in">

[`GroupInfoManager.GroupInfoManager`](/mod/game-api/types/assembly-api-client/groupinfomanager#m-ctor), [`GroupMember.GroupMember`](/mod/game-api/types/assembly-api-client/groupmember#m-ctor), [`GroupMember.groupsManager`](/mod/game-api/types/assembly-api-client/groupmember#m-groupsmanager), [`GroupMembers.GroupMembers`](/mod/game-api/types/assembly-api-client/groupmembers#m-ctor), [`GroupRoles.groupManager`](/mod/game-api/types/assembly-api-client/grouproles#m-groupmanager), [`GroupRoles.GroupRoles`](/mod/game-api/types/assembly-api-client/grouproles#m-ctor), [`JoinedGroups.GetByIdentifier`](/mod/game-api/types/assembly-api-client/joinedgroups#m-getbyidentifier), [`EditServerPanel.server`](/mod/game-api/types/alta-menus/editserverpanel#m-server), [`EditServerPanel.Setup`](/mod/game-api/types/alta-menus/editserverpanel#m-setup), [`GroupPage.group`](/mod/game-api/types/alta-menus/grouppage#m-group), [`GroupPage.SetupForGroup`](/mod/game-api/types/alta-menus/grouppage#m-setupforgroup), [`InviteUserToGroupPanel.FinishInvite`](/mod/game-api/types/alta-menus/inviteusertogrouppanel#m-finishinvite), [`InviteUserToGroupPanel.InviteToGroup`](/mod/game-api/types/alta-menus/inviteusertogrouppanel#m-invitetogroup), [`InviteUserToGroupViaFriendsPanel.group`](/mod/game-api/types/alta-menus/inviteusertogroupviafriendspanel#m-group), [`InviteUserToGroupViaFriendsPanel.SetupForGroup`](/mod/game-api/types/alta-menus/inviteusertogroupviafriendspanel#m-setupforgroup), [`JoinedGroupListElement.GetText`](/mod/game-api/types/alta-menus/joinedgrouplistelement#m-gettext), [`SelectedGroupPanel.Group`](/mod/game-api/types/alta-menus/selectedgrouppanel#m-group), [`SelectedGroupPanel.SetToGroup`](/mod/game-api/types/alta-menus/selectedgrouppanel#m-settogroup), [`RecentPlayerActionPage.GetServerGroupManager`](/mod/game-api/types/global-q-r/recentplayeractionpage#m-getservergroupmanager), [`RecentPlayerActionPage.serverGroupManagerCache`](/mod/game-api/types/global-q-r/recentplayeractionpage#m-servergroupmanagercache).

</div>
