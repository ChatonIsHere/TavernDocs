---
title: "SetGroupPermissionsRequest"
description: "Request body for setting group permissions with the older Member, Moderator and Admin flags."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SetGroupPermissionsRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Request body for setting group permissions with the older Member, Moderator and Admin flags.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Nested types** [`OldGroupPermission`](/mod/game-api/types/assembly-api-models/setgrouppermissionsrequest-oldgrouppermission)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SetGroupPermissionsRequest()"}</code> | <span className="api-desc">Creates a `SetGroupPermissionsRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-permissions" /><code><Link to="/mod/game-api/types/assembly-api-models/setgrouppermissionsrequest-oldgrouppermission">{"SetGroupPermissionsRequest.OldGroupPermission"}</Link>{" Permissions { get; set; }"}</code> | <span className="api-desc">The permission flags to set.</span> |
