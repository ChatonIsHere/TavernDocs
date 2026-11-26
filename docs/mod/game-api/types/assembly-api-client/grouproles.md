---
title: "GroupRoles"
description: "A joined group's roles from the current user's point of view, with a permission check."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupRoles

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

A joined group's roles from the current user's point of view, with a permission check.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal GroupRoles("}<Link to="/mod/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" groupManager, "}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api)"}</code> | <span className="api-desc">Creates a `GroupRoles` from `groupManager` and `api`.</span> |

</details>

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-api" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api"}</code> | <span className="api-desc">Low level API client. Stored but not used in this class.</span> |
| <Link id="m-groupmanager" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" groupManager"}</code> | <span className="api-desc">The joined group this belongs to.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-myrole" /><code><Link to="/mod/game-api/types/assembly-api-models/grouproleinfo">{"GroupRoleInfo"}</Link>{" MyRole { get; }"}</code> | <span className="api-desc">The current user's role in the group, found from their member info.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-haveigotpermissions" /><code>{"bool HaveIGotPermissions(params "}<Link to="/mod/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"[] permissions)"}</code> | <span className="api-desc">True if the current user's role has every permission given.</span> |

## Used in

Members of other types that take, return or hold a `GroupRoles`:

<div className="api-used-in">

[`GroupInfoManager.Roles`](/mod/game-api/types/assembly-api-client/groupinfomanager#m-roles).

</div>
