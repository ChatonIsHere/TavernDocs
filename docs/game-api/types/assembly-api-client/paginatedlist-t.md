---
title: "PaginatedList<T>"
description: "abstract class PaginatedList<T> in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PaginatedList&lt;T&gt;

An **abstract class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`GroupGet`](/game-api/types/assembly-api-client/groupget), [`GroupJoinRequests`](/game-api/types/assembly-api-client/groupjoinrequests), [`GroupMembers`](/game-api/types/assembly-api-client/groupmembers), [`InvitedGroups`](/game-api/types/assembly-api-client/invitedgroups), [`JoinedGroups`](/game-api/types/assembly-api-client/joinedgroups), [`PaginatedListWithAdd<T>`](/game-api/types/assembly-api-client/paginatedlistwithadd-t), [`RequestedGroups`](/game-api/types/assembly-api-client/requestedgroups)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected PaginatedList("}<Link to="/game-api/types/assembly-api-client/ipagedresult-t">{"IPagedResult"}</Link>{"<T> page, "}<Link to="/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api)"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-api" /><code>{"protected "}<Link to="/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api"}</code> |

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-page" /><code>{"private readonly "}<Link to="/game-api/types/assembly-api-client/ipagedresult-t">{"IPagedResult"}</Link>{"<T> page"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-getall" /><code>{"Task<IEnumerable<T>> GetAll()"}</code> |
| <Link id="m-getnext" /><code>{"Task<IEnumerable<T>> GetNext()"}</code> |
