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

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal GroupCreator("}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api)"}</code> | <span className="api-desc">Creates a `GroupCreator` from `api`.</span> |

</details>

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-api" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api"}</code> | <span className="api-desc">The low-level client that sends the requests.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cancreategroups" /><code>{"async Task<bool> CanCreateGroups()"}</code> | <span className="api-desc">Asks the API whether the logged-in user may create a group.</span> |
| <Link id="m-getcreategroupsallocation" /><code>{"async Task<ValueTuple<int, int>> GetCreateGroupsAllocation()"}</code> | <span className="api-desc">Asks the API how many PC and Quest groups the user can still create.</span> |
| <Link id="m-quickcreategroup" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/quickcreateresponse">{"QuickCreateResponse"}</Link>{"> QuickCreateGroup("}<Link to="/mod/game-api/types/assembly-api-models/creategroupandserverrequest">{"CreateGroupAndServerRequest"}</Link>{" request)"}</code> | <span className="api-desc">Creates a group and its server in one request.</span> |

## Used in

Members of other types that take, return or hold a `GroupCreator`:

<div className="api-used-in">

[`GroupsClient.CreateGroup`](/mod/game-api/types/assembly-api-client/groupsclient#m-creategroup), [`IGroupsClient.CreateGroup`](/mod/game-api/types/assembly-api-client/igroupsclient#m-creategroup), [`OfflineGroupsClient.CreateGroup`](/mod/game-api/types/assembly-api-client/offlinegroupsclient#m-creategroup).

</div>
