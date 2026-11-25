---
title: "GroupMember"
description: "class GroupMember in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupMember

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`GroupMembers`](/game-api/types/assembly-api-client/groupmembers), [`GroupMemberListElement`](/game-api/types/alta-menus/groupmemberlistelement)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member |
| --- |
| <Link id="m-ctor" /><code>{"internal GroupMember("}<Link to="/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{" memberInfo, "}<Link to="/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api, "}<Link to="/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" groupManager)"}</code> |

</details>

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-api" /><code>{"private readonly "}<Link to="/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api"}</code> |
| <Link id="m-groupsmanager" /><code>{"private readonly "}<Link to="/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" groupsManager"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-memberinfo" /><code><Link to="/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{" MemberInfo { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-ban" /><code>{"Task Ban()"}</code> |
| <Link id="m-changerole" /><code>{"Task ChangeRole(int newRole)"}</code> |
| <Link id="m-kick" /><code>{"Task Kick()"}</code> |

## Used in

Members of other types that take, return or hold a `GroupMember`:

[`GroupMemberListElement.GetText`](/game-api/types/alta-menus/groupmemberlistelement#m-gettext), [`GroupMembersPage.BanMember`](/game-api/types/alta-menus/groupmemberspage#m-banmember), [`GroupMembersPage.KickMember`](/game-api/types/alta-menus/groupmemberspage#m-kickmember), [`GroupMembersPage.KickMemberAsync`](/game-api/types/alta-menus/groupmemberspage#m-kickmemberasync).
