---
title: "GroupPermissionsCheckRequest"
description: "Body for asking the API whether a user has permissions in a group or on a server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupPermissionsCheckRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body for asking the API whether a user has permissions in a group or on a server.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GroupPermissionsCheckRequest()"}</code> | Creates a `GroupPermissionsCheckRequest` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-permissions" /><code><Link to="/mod/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"[] Permissions { get; set; }"}</code> | Permissions to check for. |

## Used in

Members of other types that take, return or hold a `GroupPermissionsCheckRequest`:

[`LowLevelApiClient.HasPermissionsInGroup`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-haspermissionsingroup), [`LowLevelApiClient.HasPermissionsInServer`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-haspermissionsinserver).
