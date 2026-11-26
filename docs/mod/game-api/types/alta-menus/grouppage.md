---
title: "GroupPage"
description: "Base for a page in the server management UI that shows one joined group."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupPage

An **abstract class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

Base for a page in the server management UI that shows one joined group. Client only.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`PanelComponent`](/mod/game-api/types/alta-menus/panelcomponent)
- **Derived types** [`GroupInfoTab`](/mod/game-api/types/alta-menus/groupinfotab), [`GroupMembersPage`](/mod/game-api/types/alta-menus/groupmemberspage), [`IncomingGroupRequestPage`](/mod/game-api/types/alta-menus/incominggrouprequestpage), [`OutgoingGroupInvitesPage`](/mod/game-api/types/alta-menus/outgoinggroupinvitespage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected GroupPage()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-group" /><code>{"protected "}<Link to="/mod/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" group"}</code> | <span className="api-desc">The group the page is showing.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setupforgroup" /><code>{"void SetupForGroup("}<Link to="/mod/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" group)"}</code> | <span className="api-desc">Points the page at a group and makes it refresh the next time it loads.</span> |
| <Link id="m-ongroupdatachange" /><code>{"protected virtual void OnGroupDataChange()"}</code> | <span className="api-desc">Hook for subclasses to refresh when the group is cleared or changes.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-resetpage" /><code>{"private void ResetPage()"}</code> | <span className="api-desc">Clears the current group and calls `OnGroupDataChange`. Called by `SetupForGroup` before it sets the new group.</span> |

</details>
