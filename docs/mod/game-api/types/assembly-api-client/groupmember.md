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

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal GroupMember("}<Link to="/mod/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{" memberInfo, "}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api, "}<Link to="/mod/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" groupManager)"}</code> | <span className="api-desc">Creates a `GroupMember` from `memberInfo`, `api` and `groupManager`.</span> |

</details>

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-api" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api"}</code> | <span className="api-desc">Low level client the calls go through.</span> |
| <Link id="m-groupsmanager" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" groupsManager"}</code> | <span className="api-desc">The joined group's manager, used for its ban list.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-memberinfo" /><code><Link to="/mod/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{" MemberInfo { get; }"}</code> | <span className="api-desc">The member's details from the API: user and group ids, username, bot flag and permissions.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ban" /><code>{"Task Ban()"}</code> | <span className="api-desc">Adds the member to the group's ban list through the group manager.</span> |
| <Link id="m-changerole" /><code>{"Task ChangeRole(int newRole)"}</code> | <span className="api-desc">Asks the API to give the member a new role in the group.</span> |
| <Link id="m-kick" /><code>{"Task Kick()"}</code> | <span className="api-desc">Asks the API to remove the member from the group.</span> |

## Used in

Members of other types that take, return or hold a `GroupMember`:

<div className="api-used-in">

[`GroupMemberListElement.GetText`](/mod/game-api/types/alta-menus/groupmemberlistelement#m-gettext), [`GroupMembersPage.BanMember`](/mod/game-api/types/alta-menus/groupmemberspage#m-banmember), [`GroupMembersPage.KickMember`](/mod/game-api/types/alta-menus/groupmemberspage#m-kickmember), [`GroupMembersPage.KickMemberAsync`](/mod/game-api/types/alta-menus/groupmemberspage#m-kickmemberasync).

</div>
