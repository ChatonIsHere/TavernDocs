---
title: "PagedResult<T>"
description: "Pages through a paged Alta API endpoint, following the paginationToken response header."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PagedResult&lt;T&gt;

A **class** in `Alta.Api.Client`, `Alta.Api.Client.LowLevel`.

Pages through a paged Alta API endpoint, following the `paginationToken` response header.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`IPagedResult<T>`](/mod/game-api/types/assembly-api-client/ipagedresult-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PagedResult(Func<"}<Link to="/mod/game-api/types/assembly-api-client/pagedconfig">{"PagedConfig"}</Link>{", Task<HttpResponseMessage>> getNext, "}<Link to="/mod/game-api/types/assembly-api-client/pagedconfig">{"PagedConfig"}</Link>{" config = null)"}</code> | Creates a `PagedResult` from `getNext` and `config`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-config" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-api-client/pagedconfig">{"PagedConfig"}</Link>{" config"}</code> | Page size and current pagination token. Defaults to a limit of 20. |
| <Link id="m-getnext" /><code>{"private readonly Func<"}<Link to="/mod/game-api/types/assembly-api-client/pagedconfig">{"PagedConfig"}</Link>{", Task<HttpResponseMessage>> getNext"}</code> | Function that sends the request for a page using the config. |
| <Link id="m-hasrun" /><code>{"private bool hasRun"}</code> | Whether a page has been fetched yet. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hasnext" /><code>{"bool HasNext { get; }"}</code> | True before the first fetch, and after that while the API returned a pagination token. |
| <Link id="m-results" /><code>{"IEnumerable<T> Results { get; private set; }"}</code> | Results of the last page fetched, or of all pages after `GetAllAsync`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getallasync" /><code>{"async Task<IEnumerable<T>> GetAllAsync()"}</code> | Fetches every remaining page and returns all results together, then resets to the first page. |
| <Link id="m-getnextasync" /><code>{"async Task<IEnumerable<T>> GetNextAsync()"}</code> | Fetches the next page and returns its results. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleresponse" /><code>{"private async Task<IEnumerable<T>> HandleResponse(HttpResponseMessage response)"}</code> | Reads the page's results and the next `paginationToken` header, or throws on an error status. |

</details>

## Used in

Members of other types that take, return or hold a `PagedResult&lt;T>`:

[`LowLevelApiClient.GetFriendRequests`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getfriendrequests), [`LowLevelApiClient.GetFriends`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getfriends), [`LowLevelApiClient.GetFriendsForUser`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getfriendsforuser), [`LowLevelApiClient.GetGroupBans`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getgroupbans), [`LowLevelApiClient.GetGroupInvites`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getgroupinvites), [`LowLevelApiClient.GetGroupJoinRequests`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getgroupjoinrequests), [`LowLevelApiClient.GetGroupMembers`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getgroupmembers), [`LowLevelApiClient.GetGroupsByType`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getgroupsbytype), [`LowLevelApiClient.GetInvitesInGroup`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getinvitesingroup), [`LowLevelApiClient.GetJoinedGroups`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getjoinedgroups), [`LowLevelApiClient.GetRequestedGroups`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getrequestedgroups), [`LowLevelApiClient.GetSentFriendRequests`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getsentfriendrequests).
