---
title: "GroupBan"
description: "A ban of one user from a group, from the Alta web API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupBan

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

A ban of one user from a group, from the Alta web API. Revoke it to lift the ban.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`Outgoing`](/mod/game-api/types/assembly-api-client/outgoing)
- **Derived types** [`GroupBans`](/mod/game-api/types/assembly-api-client/groupbans)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal GroupBan("}<Link to="/mod/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{" memberInfo, "}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api)"}</code> | <span className="api-desc">Creates a `GroupBan` from `memberInfo` and `api`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-memberinfo" /><code><Link to="/mod/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{" MemberInfo { get; }"}</code> | <span className="api-desc">The banned user's group member record.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-revoke" /><code>{"override Task Revoke()"}</code> | <span className="api-desc">Calls the API to lift this user's ban in the group.</span> |

## Used in

Members of other types that take, return or hold a `GroupBan`:

<div className="api-used-in">

[`GroupBans.Add`](/mod/game-api/types/assembly-api-client/groupbans#m-add).

</div>
