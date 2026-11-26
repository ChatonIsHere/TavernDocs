---
title: "GroupInfoManager"
description: "Admin view of a joined group: its editable info, roles and members."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupInfoManager

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Admin view of a joined group: its editable info, roles and members.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal GroupInfoManager("}<Link to="/mod/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" groupManager, "}<Link to="/mod/game-api/types/assembly-api-models/groupinfodetailed">{"GroupInfoDetailed"}</Link>{" group, "}<Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" api)"}</code> | <span className="api-desc">Creates a `GroupInfoManager` from `groupManager`, `group` and `api`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-info" /><code><Link to="/mod/game-api/types/assembly-api-client/groupinfoupdate">{"GroupInfoUpdate"}</Link>{" Info { get; }"}</code> | <span className="api-desc">Lets you update the group's info.</span> |
| <Link id="m-members" /><code><Link to="/mod/game-api/types/assembly-api-client/groupmembers">{"GroupMembers"}</Link>{" Members { get; }"}</code> | <span className="api-desc">Paged list of the group's members.</span> |
| <Link id="m-roles" /><code><Link to="/mod/game-api/types/assembly-api-client/grouproles">{"GroupRoles"}</Link>{" Roles { get; }"}</code> | <span className="api-desc">The group's roles and the current user's role.</span> |

## Used in

Members of other types that take, return or hold a `GroupInfoManager`:

<div className="api-used-in">

[`JoinedGroupManager.Info`](/mod/game-api/types/assembly-api-client/joinedgroupmanager#m-info).

</div>
