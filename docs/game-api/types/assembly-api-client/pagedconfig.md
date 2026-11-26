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

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PagedConfig()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-default" /><code>{"static "}<Link to="/game-api/types/assembly-api-client/pagedconfig">{"PagedConfig"}</Link>{" Default { get; }"}</code> | A new config with a limit of 20. |
| <Link id="m-limit" /><code>{"int Limit { get; set; }"}</code> | How many results to ask for per page. |
| <Link id="m-paginationtoken" /><code>{"string PaginationToken { get; set; }"}</code> | Token from the previous page, or null for the first page. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpaginationqueryparams" /><code>{"string GetPaginationQueryParams(NameValueCollection extra = null)"}</code> | Builds the query string with `limit`, the `paginationToken` if set, and any extra parameters. |

## Used in

Members of other types that take, return or hold a `PagedConfig`:

[`LowLevelApiClient.GetFriendRequests`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getfriendrequests), [`LowLevelApiClient.GetFriendRequestsInternal`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getfriendrequestsinternal), [`LowLevelApiClient.GetFriends`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getfriends), [`LowLevelApiClient.GetFriendsForUser`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getfriendsforuser), [`LowLevelApiClient.GetFriendsForUserInternal`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getfriendsforuserinternal), [`LowLevelApiClient.GetFriendsInternal`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getfriendsinternal), [`LowLevelApiClient.GetGroupBans`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getgroupbans), [`LowLevelApiClient.GetGroupInvites`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getgroupinvites), [`LowLevelApiClient.GetGroupJoinRequests`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getgroupjoinrequests), [`LowLevelApiClient.GetGroupMembers`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getgroupmembers), [`LowLevelApiClient.GetGroupsByType`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getgroupsbytype), [`LowLevelApiClient.GetInvitesInGroup`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getinvitesingroup), [`LowLevelApiClient.GetJoinedGroups`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getjoinedgroups), [`LowLevelApiClient.GetRequestedGroups`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getrequestedgroups), [`LowLevelApiClient.GetSentFriendRequests`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getsentfriendrequests), [`LowLevelApiClient.GetSentFriendRequestsInternal`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getsentfriendrequestsinternal), [`PagedResult<T>.config`](/game-api/types/assembly-api-client/pagedresult-t#m-config), [`PagedResult<T>.getNext`](/game-api/types/assembly-api-client/pagedresult-t#m-getnext), [`PagedResult<T>.PagedResult<T>`](/game-api/types/assembly-api-client/pagedresult-t#m-ctor).
