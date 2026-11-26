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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GiveRoleRequest()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-role" /><code><Link to="/game-api/types/assembly-api-models/assignableroles">{"AssignableRoles"}</Link>{" Role { get; set; }"}</code> | The role to give. |

## Used in

Members of other types that take, return or hold a `GiveRoleRequest`:

[`LowLevelApiClient.GiveUserRoleAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-giveuserroleasync).
