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
| <Link id="m-ctor" /><code>{"EditGroupRequest()"}</code> | Creates an `EditGroupRequest` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-description" /><code>{"string Description { get; set; }"}</code> | New group description. |
| <Link id="m-ischangingservers" /><code>{"bool IsChangingServers { get; set; }"}</code> | Sent as `changing_servers`, true by default. Probably whether the change also applies to the group's servers. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | New group name. |
| <Link id="m-tags" /><code>{"List<string> Tags { get; set; }"}</code> | New list of group tags. |
| <Link id="m-type" /><code><Link to="/mod/game-api/types/assembly-api-models/grouptype">{"GroupType"}</Link>{"? Type { get; set; }"}</code> | New group type. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-visibility" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-models/grouptype">{"GroupType"}</Link>{"? Visibility { set; }"}</code> | Private setter for an older `visibility` JSON field. It sets `Type`. |

</details>

## Used in

Members of other types that take, return or hold a `EditGroupRequest`:

[`GroupInfoUpdate.Update`](/mod/game-api/types/assembly-api-client/groupinfoupdate#m-update), [`LowLevelApiClient.UpdateGroupInfo`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-updategroupinfo).
