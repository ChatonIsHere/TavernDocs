---
title: "GroupDiscovery"
description: "Alta web API lists of groups a player can find and join."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupDiscovery

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Alta web API lists of groups a player can find and join. Reached through `ApiAccess.ApiClient.Groups.Discovery`. The API is gone, so calls fail after timing out.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal GroupDiscovery("}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api)"}</code> | Creates a `GroupDiscovery` from `api`. |

</details>

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-api" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api"}</code> | The low-level client that sends the requests. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-opengroups" /><code><Link to="/mod/game-api/types/assembly-api-client/groupget">{"GroupGet"}</Link>{" OpenGroups { get; }"}</code> | Paged list of open groups. |
| <Link id="m-publicgroups" /><code><Link to="/mod/game-api/types/assembly-api-client/groupget">{"GroupGet"}</Link>{" PublicGroups { get; }"}</code> | Paged list of public groups. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getbyidentifier" /><code>{"async Task<"}<Link to="/mod/game-api/types/assembly-api-client/joinablegroupinfo">{"JoinableGroupInfo"}</Link>{"> GetByIdentifier(int groupIdentifier)"}</code> | Fetches one group by id, wrapped so it can be joined. |

## Used in

Members of other types that take, return or hold a `GroupDiscovery`:

[`GroupsClient.Discovery`](/mod/game-api/types/assembly-api-client/groupsclient#m-discovery), [`IGroupsClient.Discovery`](/mod/game-api/types/assembly-api-client/igroupsclient#m-discovery), [`OfflineGroupsClient.Discovery`](/mod/game-api/types/assembly-api-client/offlinegroupsclient#m-discovery).
