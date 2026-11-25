---
title: "PagedResult<T>"
description: "class PagedResult<T> in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PagedResult&lt;T&gt;

A **class** in `Alta.Api.Client`, `Alta.Api.Client.LowLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`IPagedResult<T>`](/game-api/types/assembly-api-client/ipagedresult-t)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PagedResult(Func<"}<Link to="/game-api/types/assembly-api-client/pagedconfig">{"PagedConfig"}</Link>{", Task<HttpResponseMessage>> getNext, "}<Link to="/game-api/types/assembly-api-client/pagedconfig">{"PagedConfig"}</Link>{" config = null)"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-config" /><code>{"private readonly "}<Link to="/game-api/types/assembly-api-client/pagedconfig">{"PagedConfig"}</Link>{" config"}</code> |
| <Link id="m-getnext" /><code>{"private readonly Func<"}<Link to="/game-api/types/assembly-api-client/pagedconfig">{"PagedConfig"}</Link>{", Task<HttpResponseMessage>> getNext"}</code> |
| <Link id="m-hasrun" /><code>{"private bool hasRun"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-hasnext" /><code>{"bool HasNext { get; }"}</code> |
| <Link id="m-results" /><code>{"IEnumerable<T> Results { get; private set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-getallasync" /><code>{"async Task<IEnumerable<T>> GetAllAsync()"}</code> |
| <Link id="m-getnextasync" /><code>{"async Task<IEnumerable<T>> GetNextAsync()"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-handleresponse" /><code>{"private async Task<IEnumerable<T>> HandleResponse(HttpResponseMessage response)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `PagedResult&lt;T>`:

[`LowLevelApiClient.GetFriendRequests`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getfriendrequests), [`LowLevelApiClient.GetFriends`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getfriends), [`LowLevelApiClient.GetFriendsForUser`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getfriendsforuser), [`LowLevelApiClient.GetGroupBans`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getgroupbans), [`LowLevelApiClient.GetGroupInvites`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getgroupinvites), [`LowLevelApiClient.GetGroupJoinRequests`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getgroupjoinrequests), [`LowLevelApiClient.GetGroupMembers`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getgroupmembers), [`LowLevelApiClient.GetGroupsByType`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getgroupsbytype), [`LowLevelApiClient.GetInvitesInGroup`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getinvitesingroup), [`LowLevelApiClient.GetJoinedGroups`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getjoinedgroups), [`LowLevelApiClient.GetRequestedGroups`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getrequestedgroups), [`LowLevelApiClient.GetSentFriendRequests`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getsentfriendrequests).
