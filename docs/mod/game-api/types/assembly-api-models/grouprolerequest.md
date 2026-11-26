---
title: "GroupRoleRequest"
description: "Request body for a group role with a name and permissions."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupRoleRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Request body for a group role with a name and permissions.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GroupRoleRequest()"}</code> | <span className="api-desc">Creates a `GroupRoleRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">Role name.</span> |
| <Link id="m-permissions" /><code>{"List<"}<Link to="/mod/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"> Permissions { get; set; }"}</code> | <span className="api-desc">Group permissions the role grants.</span> |
