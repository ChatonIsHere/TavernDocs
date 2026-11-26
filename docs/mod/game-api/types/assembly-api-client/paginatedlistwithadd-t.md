---
title: "PaginatedListWithAdd<T>"
description: "Paged API list that a user can also be added to, such as a group's bans or invites."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PaginatedListWithAdd&lt;T&gt;

An **abstract class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Paged API list that a user can also be added to, such as a group's bans or invites.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`PaginatedList<T>`](/mod/game-api/types/assembly-api-client/paginatedlist-t)
- **Derived types** [`GroupBans`](/mod/game-api/types/assembly-api-client/groupbans), [`GroupInvites`](/mod/game-api/types/assembly-api-client/groupinvites)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PaginatedListWithAdd("}<Link to="/mod/game-api/types/assembly-api-client/ipagedresult-t">{"IPagedResult"}</Link>{"<T> page, "}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api)"}</code> | <span className="api-desc">Creates a `PaginatedListWithAdd` from `page` and `api`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"abstract Task<T> Add("}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" user)"}</code> | <span className="api-desc">Adds the user to the list through the API.</span> |
