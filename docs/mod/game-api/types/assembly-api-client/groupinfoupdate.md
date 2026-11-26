---
title: "GroupInfoUpdate"
description: "Wraps a group so its info can be edited through the Alta web API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupInfoUpdate

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Wraps a group so its info can be edited through the Alta web API.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal GroupInfoUpdate("}<Link to="/mod/game-api/types/assembly-api-models/groupinfo">{"GroupInfo"}</Link>{" group, "}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api)"}</code> | <span className="api-desc">Creates a `GroupInfoUpdate` from `group` and `api`.</span> |

</details>

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-api" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api"}</code> | <span className="api-desc">Low level API client used for the call.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-group" /><code><Link to="/mod/game-api/types/assembly-api-models/groupinfo">{"GroupInfo"}</Link>{" Group { get; }"}</code> | <span className="api-desc">The group being edited.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"Task Update("}<Link to="/mod/game-api/types/assembly-api-models/editgrouprequest">{"EditGroupRequest"}</Link>{" request)"}</code> | <span className="api-desc">Sends an edit group request for this group.</span> |

## Used in

Members of other types that take, return or hold a `GroupInfoUpdate`:

<div className="api-used-in">

[`GroupInfoManager.Info`](/mod/game-api/types/assembly-api-client/groupinfomanager#m-info).

</div>
