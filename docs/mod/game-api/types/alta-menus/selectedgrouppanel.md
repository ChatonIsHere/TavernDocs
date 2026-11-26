---
title: "SelectedGroupPanel"
description: "Main menu panel for one group (server) the player has joined, with members, info, request and invite pages."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SelectedGroupPanel

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

Main menu panel for one group (server) the player has joined, with members, info, request and invite pages. Uses Alta's web API, which is gone.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SelectedGroupPanel()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-editserverpanel" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/editserverpanel">{"EditServerPanel"}</Link>{" editServerPanel"}</code> | <span className="api-desc">The panel opened by `EditSelectServer`.</span> |
| <Link id="m-infopage" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/groupinfotab">{"GroupInfoTab"}</Link>{" infoPage"}</code> | <span className="api-desc">Group info tab.</span> |
| <Link id="m-invitespage" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/outgoinggroupinvitespage">{"OutgoingGroupInvitesPage"}</Link>{" invitesPage"}</code> | <span className="api-desc">Outgoing invites page.</span> |
| <Link id="m-memberspage" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/groupmemberspage">{"GroupMembersPage"}</Link>{" membersPage"}</code> | <span className="api-desc">Group members page.</span> |
| <Link id="m-panel" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel"}</code> | <span className="api-desc">The menu panel switched to when a group is shown.</span> |
| <Link id="m-requestspage" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/incominggrouprequestpage">{"IncomingGroupRequestPage"}</Link>{" requestsPage"}</code> | <span className="api-desc">Incoming join requests page.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-group" /><code><Link to="/mod/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" Group { get; private set; }"}</code> | <span className="api-desc">The group shown.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-groupupdated" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-menus/selectedgrouppanel">{"SelectedGroupPanel"}</Link>{"> GroupUpdated"}</code> | <span className="api-desc">Raised after `SetToGroup` switches to a group.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-editselectserver" /><code>{"void EditSelectServer()"}</code> | <span className="api-desc">Opens the edit server panel for the current group.</span> |
| <Link id="m-settogroup" /><code>{"void SetToGroup("}<Link to="/mod/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" group)"}</code> | <span className="api-desc">Fills every page for the group, switches to the panel and raises `GroupUpdated`.</span> |

## Used in

Members of other types that take, return or hold a `SelectedGroupPanel`:

<div className="api-used-in">

[`GroupPermissionsEnabler.groupPanel`](/mod/game-api/types/alta-menus/grouppermissionsenabler#m-grouppanel), [`GroupPermissionsEnabler.HandleGroupChange`](/mod/game-api/types/alta-menus/grouppermissionsenabler#m-handlegroupchange), [`JoinedGroupsList.selectedGroupPanel`](/mod/game-api/types/alta-menus/joinedgroupslist#m-selectedgrouppanel), [`ServerDetailsPanel.selectedServerPanel`](/mod/game-api/types/alta-menus/serverdetailspanel#m-selectedserverpanel).

</div>
