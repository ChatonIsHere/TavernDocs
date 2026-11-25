---
title: "GroupCreator"
description: "class GroupCreator in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupCreator

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member |
| --- |
| <Link id="m-ctor" /><code>{"internal GroupCreator("}<Link to="/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api)"}</code> |

</details>

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-api" /><code>{"private readonly "}<Link to="/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-cancreategroups" /><code>{"async Task<bool> CanCreateGroups()"}</code> |
| <Link id="m-getcreategroupsallocation" /><code>{"async Task<ValueTuple<int, int>> GetCreateGroupsAllocation()"}</code> |
| <Link id="m-quickcreategroup" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/quickcreateresponse">{"QuickCreateResponse"}</Link>{"> QuickCreateGroup("}<Link to="/game-api/types/assembly-api-models/creategroupandserverrequest">{"CreateGroupAndServerRequest"}</Link>{" request)"}</code> |

## Used in

Members of other types that take, return or hold a `GroupCreator`:

[`GroupsClient.CreateGroup`](/game-api/types/assembly-api-client/groupsclient#m-creategroup), [`IGroupsClient.CreateGroup`](/game-api/types/assembly-api-client/igroupsclient#m-creategroup), [`OfflineGroupsClient.CreateGroup`](/game-api/types/assembly-api-client/offlinegroupsclient#m-creategroup).
