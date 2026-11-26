---
title: "GroupGet"
description: "Paged list of joinable groups of one group type, fetched from the Alta web API and wrapped as JoinableGroupInfo."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupGet

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Paged list of joinable groups of one group type, fetched from the Alta web API and wrapped as `JoinableGroupInfo`.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`PaginatedList<JoinableGroupInfo>`](/mod/game-api/types/assembly-api-client/paginatedlist-t)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal GroupGet("}<Link to="/mod/game-api/types/assembly-api-models/grouptype">{"GroupType"}</Link>{" type, "}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api)"}</code> | <span className="api-desc">Creates a `GroupGet` from `type` and `api`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `GroupGet`:

<div className="api-used-in">

[`GroupDiscovery.OpenGroups`](/mod/game-api/types/assembly-api-client/groupdiscovery#m-opengroups), [`GroupDiscovery.PublicGroups`](/mod/game-api/types/assembly-api-client/groupdiscovery#m-publicgroups).

</div>
