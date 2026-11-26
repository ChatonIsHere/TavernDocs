---
title: "JoinedGroupsList"
description: "Main menu panel component that lists the groups (servers) you have joined, fetched from the web API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JoinedGroupsList

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

Main menu panel component that lists the groups (servers) you have joined, fetched from the web API. Client only.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`PanelComponent`](/mod/game-api/types/alta-menus/panelcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JoinedGroupsList()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-elementtemplate" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/joinedgrouplistelement">{"JoinedGroupListElement"}</Link>{" elementTemplate"}</code> | <span className="api-desc">Prefab cloned for each joined group row.</span> |
| <Link id="m-inviteuserpanel" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/inviteusertogroupviafriendspanel">{"InviteUserToGroupViaFriendsPanel"}</Link>{" inviteUserPanel"}</code> | <span className="api-desc">Panel used to invite friends to a group.</span> |
| <Link id="m-selectedgrouppanel" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/selectedgrouppanel">{"SelectedGroupPanel"}</Link>{" selectedGroupPanel"}</code> | <span className="api-desc">Panel that shows the details of a chosen group.</span> |
| <Link id="m-uilist" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/uilist">{"UIList"}</Link>{" uiList"}</code> | <span className="api-desc">The list the group rows are put in.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> | <span className="api-desc">Reloads the joined groups list, showing the window's loading indicator while it runs.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-invitefriendtogroup" /><code>{"private void InviteFriendToGroup("}<Link to="/mod/game-api/types/alta-menus/listelement">{"ListElement"}</Link>{" element)"}</code> | <span className="api-desc">Handler for an element's invite button: opens the invite-a-friend panel for that group.</span> |
| <Link id="m-setupjoinedgroupslist" /><code>{"private async Task SetupJoinedGroupsList()"}</code> | <span className="api-desc">Fetches your joined groups from `ApiAccess.ApiClient`, creates one element per group and resets the list with them.</span> |
| <Link id="m-swaptoselectedgrouppanel" /><code>{"private void SwapToSelectedGroupPanel("}<Link to="/mod/game-api/types/alta-menus/listelement">{"ListElement"}</Link>{" element)"}</code> | <span className="api-desc">Handler for selecting an element: sets the selected group panel to that group.</span> |

</details>
