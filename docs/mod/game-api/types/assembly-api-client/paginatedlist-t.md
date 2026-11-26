---
title: "PaginatedList<T>"
description: "Base for a paged list from the API, such as group members, bans, invites and join requests."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PaginatedList&lt;T&gt;

An **abstract class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Base for a paged list from the API, such as group members, bans, invites and join requests. Calls Alta's web API, which no longer answers.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Derived types** [`GroupGet`](/mod/game-api/types/assembly-api-client/groupget), [`GroupJoinRequests`](/mod/game-api/types/assembly-api-client/groupjoinrequests), [`GroupMembers`](/mod/game-api/types/assembly-api-client/groupmembers), [`InvitedGroups`](/mod/game-api/types/assembly-api-client/invitedgroups), [`JoinedGroups`](/mod/game-api/types/assembly-api-client/joinedgroups), [`PaginatedListWithAdd<T>`](/mod/game-api/types/assembly-api-client/paginatedlistwithadd-t), [`RequestedGroups`](/mod/game-api/types/assembly-api-client/requestedgroups)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PaginatedList("}<Link to="/mod/game-api/types/assembly-api-client/ipagedresult-t">{"IPagedResult"}</Link>{"<T> page, "}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api)"}</code> | <span className="api-desc">Creates a `PaginatedList` from `page` and `api`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-api" /><code>{"protected "}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api"}</code> | <span className="api-desc">The low-level client subclasses send their own requests through.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-page" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-api-client/ipagedresult-t">{"IPagedResult"}</Link>{"<T> page"}</code> | <span className="api-desc">The paged result being read.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getall" /><code>{"Task<IEnumerable<T>> GetAll()"}</code> | <span className="api-desc">Fetches every remaining page and returns all items.</span> |
| <Link id="m-getnext" /><code>{"Task<IEnumerable<T>> GetNext()"}</code> | <span className="api-desc">Fetches the next page.</span> |
