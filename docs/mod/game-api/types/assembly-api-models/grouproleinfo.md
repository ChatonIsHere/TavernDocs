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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GroupRoleInfo()"}</code> | <span className="api-desc">Creates a `GroupRoleInfo` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bannedroleidentifier" /><code>{"const int BannedRoleIdentifier"}</code> | <span className="api-desc">Role id for banned members (0).</span> |
| <Link id="m-defaultmoderatoridentifier" /><code>{"const int DefaultModeratorIdentifier"}</code> | <span className="api-desc">Role id of the default moderator role (2).</span> |
| <Link id="m-defaultroleidentifier" /><code>{"const int DefaultRoleIdentifier"}</code> | <span className="api-desc">Role id new members get (1).</span> |
| <Link id="m-ownerroleidentifier" /><code>{"const int OwnerRoleIdentifier"}</code> | <span className="api-desc">Role id of the group owner (7).</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allowedcommands" /><code>{"string[] AllowedCommands { get; set; }"}</code> | <span className="api-desc">Console commands members with this role may run.</span> |
| <Link id="m-color" /><code>{"string Color { get; set; }"}</code> | <span className="api-desc">Role colour as a string.</span> |
| <Link id="m-identifier" /><code>{"int Identifier { get; set; }"}</code> | <span className="api-desc">The role's id within the group.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">Role name.</span> |
| <Link id="m-permissions" /><code><Link to="/mod/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"[] Permissions { get; set; }"}</code> | <span className="api-desc">Group permissions the role grants.</span> |

## Used in

Members of other types that take, return or hold a `GroupRoleInfo`:

<div className="api-used-in">

[`GroupRoles.MyRole`](/mod/game-api/types/assembly-api-client/grouproles#m-myrole), [`GroupInfoDetailed.Roles`](/mod/game-api/types/assembly-api-models/groupinfodetailed#m-roles).

</div>
