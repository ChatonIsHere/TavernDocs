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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EditGroupRoleRequest()"}</code> | Creates an `EditGroupRoleRequest` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allowedcommands" /><code>{"List<string> AllowedCommands { get; set; }"}</code> | Console commands members with this role may run. |
| <Link id="m-color" /><code>{"string Color { get; set; }"}</code> | Display colour of the role, as a string. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | Role name. |
| <Link id="m-permissions" /><code>{"List<"}<Link to="/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"> Permissions { get; set; }"}</code> | Group permissions the role grants. |
