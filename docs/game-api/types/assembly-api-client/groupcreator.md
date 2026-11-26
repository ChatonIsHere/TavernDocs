---
title: "GroupCreator"
description: "Alta web API calls for creating a group and its server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupCreator

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Alta web API calls for creating a group and its server. Reached through `ApiAccess.ApiClient.Groups.CreateGroup`. The API is gone, so calls fail after timing out.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal GroupCreator("}<Link to="/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api)"}</code> | Creates a `GroupCreator` from `api`. |

</details>

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-api" /><code>{"private readonly "}<Link to="/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api"}</code> | The low-level client that sends the requests. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cancreategroups" /><code>{"async Task<bool> CanCreateGroups()"}</code> | Asks the API whether the logged-in user may create a group. |
| <Link id="m-getcreategroupsallocation" /><code>{"async Task<ValueTuple<int, int>> GetCreateGroupsAllocation()"}</code> | Asks the API how many PC and Quest groups the user can still create. |
| <Link id="m-quickcreategroup" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/quickcreateresponse">{"QuickCreateResponse"}</Link>{"> QuickCreateGroup("}<Link to="/game-api/types/assembly-api-models/creategroupandserverrequest">{"CreateGroupAndServerRequest"}</Link>{" request)"}</code> | Creates a group and its server in one request. |

## Used in

Members of other types that take, return or hold a `GroupCreator`:

[`GroupsClient.CreateGroup`](/game-api/types/assembly-api-client/groupsclient#m-creategroup), [`IGroupsClient.CreateGroup`](/game-api/types/assembly-api-client/igroupsclient#m-creategroup), [`OfflineGroupsClient.CreateGroup`](/game-api/types/assembly-api-client/offlinegroupsclient#m-creategroup).
