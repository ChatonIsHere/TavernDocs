---
title: "GroupMember"
description: "One member of a joined group in Alta's web API, with calls to kick, ban or change their role."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupMember

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

One member of a joined group in Alta's web API, with calls to kick, ban or change their role. Those services are gone, so the calls fail.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Derived types** [`GroupMembers`](/mod/game-api/types/assembly-api-client/groupmembers), [`GroupMemberListElement`](/mod/game-api/types/alta-menus/groupmemberlistelement)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal GroupMember("}<Link to="/mod/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{" memberInfo, "}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api, "}<Link to="/mod/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" groupManager)"}</code> | Creates a `GroupMember` from `memberInfo`, `api` and `groupManager`. |

</details>

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-api" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api"}</code> | Low level client the calls go through. |
| <Link id="m-groupsmanager" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" groupsManager"}</code> | The joined group's manager, used for its ban list. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-memberinfo" /><code><Link to="/mod/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{" MemberInfo { get; }"}</code> | The member's details from the API: user and group ids, username, bot flag and permissions. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ban" /><code>{"Task Ban()"}</code> | Adds the member to the group's ban list through the group manager. |
| <Link id="m-changerole" /><code>{"Task ChangeRole(int newRole)"}</code> | Asks the API to give the member a new role in the group. |
| <Link id="m-kick" /><code>{"Task Kick()"}</code> | Asks the API to remove the member from the group. |

## Used in

Members of other types that take, return or hold a `GroupMember`:

[`GroupMemberListElement.GetText`](/mod/game-api/types/alta-menus/groupmemberlistelement#m-gettext), [`GroupMembersPage.BanMember`](/mod/game-api/types/alta-menus/groupmemberspage#m-banmember), [`GroupMembersPage.KickMember`](/mod/game-api/types/alta-menus/groupmemberspage#m-kickmember), [`GroupMembersPage.KickMemberAsync`](/mod/game-api/types/alta-menus/groupmemberspage#m-kickmemberasync).
