---
title: "GroupMembers"
description: "Paged list of a joined group's members from the Alta web API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupMembers

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Paged list of a joined group's members from the Alta web API.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`PaginatedList<GroupMember>`](/game-api/types/assembly-api-client/paginatedlist-t)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal GroupMembers("}<Link to="/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" groupManager, "}<Link to="/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api)"}</code> | Creates a `GroupMembers` from `groupManager` and `api`. |

</details>

## Used in

Members of other types that take, return or hold a `GroupMembers`:

[`GroupInfoManager.Members`](/game-api/types/assembly-api-client/groupinfomanager#m-members).
