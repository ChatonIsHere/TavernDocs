---
title: "GiveRoleRequest"
description: "Body of an Alta web API request to give a user a role."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GiveRoleRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body of an Alta web API request to give a user a role.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GiveRoleRequest()"}</code> | <span className="api-desc">Creates a `GiveRoleRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-role" /><code><Link to="/mod/game-api/types/assembly-api-models/assignableroles">{"AssignableRoles"}</Link>{" Role { get; set; }"}</code> | <span className="api-desc">The role to give.</span> |

## Used in

Members of other types that take, return or hold a `GiveRoleRequest`:

<div className="api-used-in">

[`LowLevelApiClient.GiveUserRoleAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-giveuserroleasync).

</div>
