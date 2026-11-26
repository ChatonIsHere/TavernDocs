---
title: "PagedConfig"
description: "Page size and continuation token for paged API calls."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PagedConfig

A **class** in `Alta.Api.Client`, `Alta.Api.Client.LowLevel`.

Page size and continuation token for paged API calls.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PagedConfig()"}</code> | <span className="api-desc">Creates a `PagedConfig` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-default" /><code>{"static "}<Link to="/mod/game-api/types/assembly-api-client/pagedconfig">{"PagedConfig"}</Link>{" Default { get; }"}</code> | <span className="api-desc">A new config with a limit of 20.</span> |
| <Link id="m-limit" /><code>{"int Limit { get; set; }"}</code> | <span className="api-desc">How many results to ask for per page.</span> |
| <Link id="m-paginationtoken" /><code>{"string PaginationToken { get; set; }"}</code> | <span className="api-desc">Token from the previous page, or null for the first page.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpaginationqueryparams" /><code>{"string GetPaginationQueryParams(NameValueCollection extra = null)"}</code> | <span className="api-desc">Builds the query string with `limit`, the `paginationToken` if set, and any extra parameters.</span> |

## Used in

Members of other types that take, return or hold a `PagedConfig`:

<div className="api-used-in">

[`LowLevelApiClient.GetFriendRequests`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getfriendrequests), [`LowLevelApiClient.GetFriendRequestsInternal`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getfriendrequestsinternal), [`LowLevelApiClient.GetFriends`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getfriends), [`LowLevelApiClient.GetFriendsForUser`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getfriendsforuser), [`LowLevelApiClient.GetFriendsForUserInternal`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getfriendsforuserinternal), [`LowLevelApiClient.GetFriendsInternal`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getfriendsinternal), [`LowLevelApiClient.GetGroupBans`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getgroupbans), [`LowLevelApiClient.GetGroupInvites`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getgroupinvites), [`LowLevelApiClient.GetGroupJoinRequests`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getgroupjoinrequests), [`LowLevelApiClient.GetGroupMembers`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getgroupmembers), [`LowLevelApiClient.GetGroupsByType`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getgroupsbytype), [`LowLevelApiClient.GetInvitesInGroup`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getinvitesingroup), [`LowLevelApiClient.GetJoinedGroups`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getjoinedgroups), [`LowLevelApiClient.GetRequestedGroups`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getrequestedgroups), [`LowLevelApiClient.GetSentFriendRequests`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getsentfriendrequests), [`LowLevelApiClient.GetSentFriendRequestsInternal`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getsentfriendrequestsinternal), [`PagedResult<T>.config`](/mod/game-api/types/assembly-api-client/pagedresult-t#m-config), [`PagedResult<T>.getNext`](/mod/game-api/types/assembly-api-client/pagedresult-t#m-getnext), [`PagedResult<T>.PagedResult<T>`](/mod/game-api/types/assembly-api-client/pagedresult-t#m-ctor).

</div>
