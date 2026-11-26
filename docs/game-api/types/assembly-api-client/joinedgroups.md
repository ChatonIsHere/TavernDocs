---
title: "JoinedGroups"
description: "Paged list of the groups the logged-in user is a member of, from the Alta web API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JoinedGroups

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Paged list of the groups the logged-in user is a member of, from the Alta web API. `Groups.Joined`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`PaginatedList<JoinedGroupManager>`](/game-api/types/assembly-api-client/paginatedlist-t)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member |
| --- |
| <Link id="m-ctor" /><code>{"internal JoinedGroups("}<Link to="/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api)"}</code> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getbyidentifier" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{"> GetByIdentifier(int groupIdentifier)"}</code> | Fetches a group and the user's membership in it, as a `JoinedGroupManager`. |

## Used in

Members of other types that take, return or hold a `JoinedGroups`:

[`GroupsClient.Joined`](/game-api/types/assembly-api-client/groupsclient#m-joined), [`IGroupsClient.Joined`](/game-api/types/assembly-api-client/igroupsclient#m-joined), [`OfflineGroupsClient.Joined`](/game-api/types/assembly-api-client/offlinegroupsclient#m-joined).
