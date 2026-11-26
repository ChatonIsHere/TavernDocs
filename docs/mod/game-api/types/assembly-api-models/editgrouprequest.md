---
title: "EditGroupRequest"
description: "Body for updating a group's details on the Alta web API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EditGroupRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body for updating a group's details on the Alta web API.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EditGroupRequest()"}</code> | <span className="api-desc">Creates an `EditGroupRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-description" /><code>{"string Description { get; set; }"}</code> | <span className="api-desc">New group description.</span> |
| <Link id="m-ischangingservers" /><code>{"bool IsChangingServers { get; set; }"}</code> | <span className="api-desc">Sent as `changing_servers`, true by default. Probably whether the change also applies to the group's servers.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">New group name.</span> |
| <Link id="m-tags" /><code>{"List<string> Tags { get; set; }"}</code> | <span className="api-desc">New list of group tags.</span> |
| <Link id="m-type" /><code><Link to="/mod/game-api/types/assembly-api-models/grouptype">{"GroupType"}</Link>{"? Type { get; set; }"}</code> | <span className="api-desc">New group type.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-visibility" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-models/grouptype">{"GroupType"}</Link>{"? Visibility { set; }"}</code> | <span className="api-desc">Private setter for an older `visibility` JSON field. It sets `Type`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `EditGroupRequest`:

<div className="api-used-in">

[`GroupInfoUpdate.Update`](/mod/game-api/types/assembly-api-client/groupinfoupdate#m-update), [`LowLevelApiClient.UpdateGroupInfo`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-updategroupinfo).

</div>
