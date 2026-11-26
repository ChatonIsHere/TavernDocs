---
title: "EditGroupRoleRequest"
description: "Request body for changing a group role."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EditGroupRoleRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Request body for changing a group role.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EditGroupRoleRequest()"}</code> | <span className="api-desc">Creates an `EditGroupRoleRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allowedcommands" /><code>{"List<string> AllowedCommands { get; set; }"}</code> | <span className="api-desc">Console commands members with this role may run.</span> |
| <Link id="m-color" /><code>{"string Color { get; set; }"}</code> | <span className="api-desc">Display colour of the role, as a string.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">Role name.</span> |
| <Link id="m-permissions" /><code>{"List<"}<Link to="/mod/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"> Permissions { get; set; }"}</code> | <span className="api-desc">Group permissions the role grants.</span> |
