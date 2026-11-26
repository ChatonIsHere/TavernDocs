---
title: "GroupJoinRequests"
description: "Paged list of requests from users to join a group, from the Alta web API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupJoinRequests

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Paged list of requests from users to join a group, from the Alta web API.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`PaginatedList<IncomingGroupJoinRequest>`](/game-api/types/assembly-api-client/paginatedlist-t)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal GroupJoinRequests("}<Link to="/game-api/types/assembly-api-models/groupinfo">{"GroupInfo"}</Link>{" group, "}<Link to="/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api)"}</code> | Creates a `GroupJoinRequests` from `group` and `api`. |

</details>

## Used in

Members of other types that take, return or hold a `GroupJoinRequests`:

[`JoinedGroupManager.Requests`](/game-api/types/assembly-api-client/joinedgroupmanager#m-requests).
