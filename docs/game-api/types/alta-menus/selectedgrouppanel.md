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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SelectedGroupPanel()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-editserverpanel" /><code>{"private "}<Link to="/game-api/types/alta-menus/editserverpanel">{"EditServerPanel"}</Link>{" editServerPanel"}</code> | The panel opened by `EditSelectServer`. |
| <Link id="m-infopage" /><code>{"private "}<Link to="/game-api/types/alta-menus/groupinfotab">{"GroupInfoTab"}</Link>{" infoPage"}</code> | Group info tab. |
| <Link id="m-invitespage" /><code>{"private "}<Link to="/game-api/types/alta-menus/outgoinggroupinvitespage">{"OutgoingGroupInvitesPage"}</Link>{" invitesPage"}</code> | Outgoing invites page. |
| <Link id="m-memberspage" /><code>{"private "}<Link to="/game-api/types/alta-menus/groupmemberspage">{"GroupMembersPage"}</Link>{" membersPage"}</code> | Group members page. |
| <Link id="m-panel" /><code>{"private "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel"}</code> | The menu panel switched to when a group is shown. |
| <Link id="m-requestspage" /><code>{"private "}<Link to="/game-api/types/alta-menus/incominggrouprequestpage">{"IncomingGroupRequestPage"}</Link>{" requestsPage"}</code> | Incoming join requests page. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-group" /><code><Link to="/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" Group { get; private set; }"}</code> | The group shown. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-groupupdated" /><code>{"event Action<"}<Link to="/game-api/types/alta-menus/selectedgrouppanel">{"SelectedGroupPanel"}</Link>{"> GroupUpdated"}</code> | Raised after `SetToGroup` switches to a group. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-editselectserver" /><code>{"void EditSelectServer()"}</code> | Opens the edit server panel for the current group. |
| <Link id="m-settogroup" /><code>{"void SetToGroup("}<Link to="/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" group)"}</code> | Fills every page for the group, switches to the panel and raises `GroupUpdated`. |

## Used in

Members of other types that take, return or hold a `SelectedGroupPanel`:

[`GroupPermissionsEnabler.groupPanel`](/game-api/types/alta-menus/grouppermissionsenabler#m-grouppanel), [`GroupPermissionsEnabler.HandleGroupChange`](/game-api/types/alta-menus/grouppermissionsenabler#m-handlegroupchange), [`JoinedGroupsList.selectedGroupPanel`](/game-api/types/alta-menus/joinedgroupslist#m-selectedgrouppanel), [`ServerDetailsPanel.selectedServerPanel`](/game-api/types/alta-menus/serverdetailspanel#m-selectedserverpanel).
