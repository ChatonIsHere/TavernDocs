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

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`GroupGet`](/game-api/types/assembly-api-client/groupget), [`GroupJoinRequests`](/game-api/types/assembly-api-client/groupjoinrequests), [`GroupMembers`](/game-api/types/assembly-api-client/groupmembers), [`InvitedGroups`](/game-api/types/assembly-api-client/invitedgroups), [`JoinedGroups`](/game-api/types/assembly-api-client/joinedgroups), [`PaginatedListWithAdd<T>`](/game-api/types/assembly-api-client/paginatedlistwithadd-t), [`RequestedGroups`](/game-api/types/assembly-api-client/requestedgroups)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PaginatedList("}<Link to="/game-api/types/assembly-api-client/ipagedresult-t">{"IPagedResult"}</Link>{"<T> page, "}<Link to="/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api)"}</code> | Creates a `PaginatedList` from `page` and `api`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-api" /><code>{"protected "}<Link to="/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api"}</code> | The low-level client subclasses send their own requests through. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-page" /><code>{"private readonly "}<Link to="/game-api/types/assembly-api-client/ipagedresult-t">{"IPagedResult"}</Link>{"<T> page"}</code> | The paged result being read. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getall" /><code>{"Task<IEnumerable<T>> GetAll()"}</code> | Fetches every remaining page and returns all items. |
| <Link id="m-getnext" /><code>{"Task<IEnumerable<T>> GetNext()"}</code> | Fetches the next page. |
