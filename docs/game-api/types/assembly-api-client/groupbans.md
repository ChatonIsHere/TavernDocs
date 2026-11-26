---
title: "GroupBans"
description: "Paged list of a group's bans from the Alta web API, with a way to ban more users."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupBans

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Paged list of a group's bans from the Alta web API, with a way to ban more users.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`PaginatedListWithAdd<GroupBan>`](/game-api/types/assembly-api-client/paginatedlistwithadd-t)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member |
| --- |
| <Link id="m-ctor" /><code>{"internal GroupBans("}<Link to="/game-api/types/assembly-api-models/groupinfo">{"GroupInfo"}</Link>{" group, "}<Link to="/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api)"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-group" /><code><Link to="/game-api/types/assembly-api-models/groupinfo">{"GroupInfo"}</Link>{" Group { get; }"}</code> | The group these bans belong to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"override async Task<"}<Link to="/game-api/types/assembly-api-client/groupban">{"GroupBan"}</Link>{"> Add("}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" user)"}</code> | Bans a user from the group and returns the new ban. |

## Used in

Members of other types that take, return or hold a `GroupBans`:

[`JoinedGroupManager.Bans`](/game-api/types/assembly-api-client/joinedgroupmanager#m-bans).
