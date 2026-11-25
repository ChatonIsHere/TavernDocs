---
title: "SelectedGroupPanel"
description: "class SelectedGroupPanel in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SelectedGroupPanel

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SelectedGroupPanel()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-editserverpanel" /><code>{"private "}<Link to="/game-api/types/alta-menus/editserverpanel">{"EditServerPanel"}</Link>{" editServerPanel"}</code> |
| <Link id="m-infopage" /><code>{"private "}<Link to="/game-api/types/alta-menus/groupinfotab">{"GroupInfoTab"}</Link>{" infoPage"}</code> |
| <Link id="m-invitespage" /><code>{"private "}<Link to="/game-api/types/alta-menus/outgoinggroupinvitespage">{"OutgoingGroupInvitesPage"}</Link>{" invitesPage"}</code> |
| <Link id="m-memberspage" /><code>{"private "}<Link to="/game-api/types/alta-menus/groupmemberspage">{"GroupMembersPage"}</Link>{" membersPage"}</code> |
| <Link id="m-panel" /><code>{"private "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel"}</code> |
| <Link id="m-requestspage" /><code>{"private "}<Link to="/game-api/types/alta-menus/incominggrouprequestpage">{"IncomingGroupRequestPage"}</Link>{" requestsPage"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-group" /><code><Link to="/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" Group { get; private set; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-groupupdated" /><code>{"event Action<"}<Link to="/game-api/types/alta-menus/selectedgrouppanel">{"SelectedGroupPanel"}</Link>{"> GroupUpdated"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-editselectserver" /><code>{"void EditSelectServer()"}</code> |
| <Link id="m-settogroup" /><code>{"void SetToGroup("}<Link to="/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" group)"}</code> |

## Used in

Members of other types that take, return or hold a `SelectedGroupPanel`:

[`GroupPermissionsEnabler.groupPanel`](/game-api/types/alta-menus/grouppermissionsenabler#m-grouppanel), [`GroupPermissionsEnabler.HandleGroupChange`](/game-api/types/alta-menus/grouppermissionsenabler#m-handlegroupchange), [`JoinedGroupsList.selectedGroupPanel`](/game-api/types/alta-menus/joinedgroupslist#m-selectedgrouppanel), [`ServerDetailsPanel.selectedServerPanel`](/game-api/types/alta-menus/serverdetailspanel#m-selectedserverpanel).
