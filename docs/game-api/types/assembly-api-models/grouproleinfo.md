---
title: "GroupRoleInfo"
description: "A role in a group: id, name, colour, permissions and allowed console commands."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupRoleInfo

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

A role in a group: id, name, colour, permissions and allowed console commands. Constants give the fixed ids of the built-in roles.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GroupRoleInfo()"}</code> | Creates a `GroupRoleInfo` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bannedroleidentifier" /><code>{"const int BannedRoleIdentifier"}</code> | Role id for banned members (0). |
| <Link id="m-defaultmoderatoridentifier" /><code>{"const int DefaultModeratorIdentifier"}</code> | Role id of the default moderator role (2). |
| <Link id="m-defaultroleidentifier" /><code>{"const int DefaultRoleIdentifier"}</code> | Role id new members get (1). |
| <Link id="m-ownerroleidentifier" /><code>{"const int OwnerRoleIdentifier"}</code> | Role id of the group owner (7). |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allowedcommands" /><code>{"string[] AllowedCommands { get; set; }"}</code> | Console commands members with this role may run. |
| <Link id="m-color" /><code>{"string Color { get; set; }"}</code> | Role colour as a string. |
| <Link id="m-identifier" /><code>{"int Identifier { get; set; }"}</code> | The role's id within the group. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | Role name. |
| <Link id="m-permissions" /><code><Link to="/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"[] Permissions { get; set; }"}</code> | Group permissions the role grants. |

## Used in

Members of other types that take, return or hold a `GroupRoleInfo`:

[`GroupRoles.MyRole`](/game-api/types/assembly-api-client/grouproles#m-myrole), [`GroupInfoDetailed.Roles`](/game-api/types/assembly-api-models/groupinfodetailed#m-roles).
