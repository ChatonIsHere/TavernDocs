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

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`Outgoing`](/game-api/types/assembly-api-client/outgoing)
- **Derived types** [`GroupBans`](/game-api/types/assembly-api-client/groupbans)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member |
| --- |
| <Link id="m-ctor" /><code>{"internal GroupBan("}<Link to="/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{" memberInfo, "}<Link to="/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api)"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-memberinfo" /><code><Link to="/game-api/types/assembly-api-models/groupmemberinfo">{"GroupMemberInfo"}</Link>{" MemberInfo { get; }"}</code> | The banned user's group member record. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-revoke" /><code>{"override Task Revoke()"}</code> | Calls the API to lift this user's ban in the group. |

## Used in

Members of other types that take, return or hold a `GroupBan`:

[`GroupBans.Add`](/game-api/types/assembly-api-client/groupbans#m-add).
