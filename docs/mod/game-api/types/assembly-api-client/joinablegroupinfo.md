---
title: "JoinableGroupInfo"
description: "A group the current user can ask to join through the Alta web API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JoinableGroupInfo

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

A group the current user can ask to join through the Alta web API.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Derived types** [`GroupGet`](/mod/game-api/types/assembly-api-client/groupget)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal JoinableGroupInfo("}<Link to="/mod/game-api/types/assembly-api-models/groupinfo">{"GroupInfo"}</Link>{" group, "}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api)"}</code> | Creates a `JoinableGroupInfo` from `group` and `api`. |

</details>

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-api" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api"}</code> | Low level API client used for the call. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-group" /><code><Link to="/mod/game-api/types/assembly-api-models/groupinfo">{"GroupInfo"}</Link>{" Group { get; }"}</code> | The group's info. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-requesttojoin" /><code>{"async Task<"}<Link to="/mod/game-api/types/assembly-api-client/outgoinggroupjoinrequest">{"OutgoingGroupJoinRequest"}</Link>{"> RequestToJoin()"}</code> | Sends a join request and returns it so it can be revoked. |

## Used in

Members of other types that take, return or hold a `JoinableGroupInfo`:

[`GroupDiscovery.GetByIdentifier`](/mod/game-api/types/assembly-api-client/groupdiscovery#m-getbyidentifier).
