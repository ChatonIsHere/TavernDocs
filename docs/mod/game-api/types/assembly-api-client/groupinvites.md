---
title: "GroupInvites"
description: "Paged list of a group's outgoing invites from the Alta web API, with a way to invite more users."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupInvites

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Paged list of a group's outgoing invites from the Alta web API, with a way to invite more users.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`PaginatedListWithAdd<OutgoingGroupInvite>`](/mod/game-api/types/assembly-api-client/paginatedlistwithadd-t)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal GroupInvites("}<Link to="/mod/game-api/types/assembly-api-models/groupinfo">{"GroupInfo"}</Link>{" group, "}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api)"}</code> | <span className="api-desc">Creates a `GroupInvites` from `group` and `api`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-groupinfo" /><code><Link to="/mod/game-api/types/assembly-api-models/groupinfo">{"GroupInfo"}</Link>{" "}<Link to="/mod/game-api/types/assembly-api-models/groupinfo">{"GroupInfo"}</Link>{" { get; }"}</code> | <span className="api-desc">The group these invites are for.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"override async Task<"}<Link to="/mod/game-api/types/assembly-api-client/outgoinggroupinvite">{"OutgoingGroupInvite"}</Link>{"> Add("}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" user)"}</code> | <span className="api-desc">Invites a user to the group and returns the new invite.</span> |

## Used in

Members of other types that take, return or hold a `GroupInvites`:

<div className="api-used-in">

[`JoinedGroupManager.Invites`](/mod/game-api/types/assembly-api-client/joinedgroupmanager#m-invites).

</div>
