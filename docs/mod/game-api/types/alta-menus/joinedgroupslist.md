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
| <Link id="m-ctor" /><code>{"JoinedGroupsList()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-elementtemplate" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/joinedgrouplistelement">{"JoinedGroupListElement"}</Link>{" elementTemplate"}</code> | Prefab cloned for each joined group row. |
| <Link id="m-inviteuserpanel" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/inviteusertogroupviafriendspanel">{"InviteUserToGroupViaFriendsPanel"}</Link>{" inviteUserPanel"}</code> | Panel used to invite friends to a group. |
| <Link id="m-selectedgrouppanel" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/selectedgrouppanel">{"SelectedGroupPanel"}</Link>{" selectedGroupPanel"}</code> | Panel that shows the details of a chosen group. |
| <Link id="m-uilist" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/uilist">{"UIList"}</Link>{" uiList"}</code> | The list the group rows are put in. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> | Reloads the joined groups list, showing the window's loading indicator while it runs. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-invitefriendtogroup" /><code>{"private void InviteFriendToGroup("}<Link to="/mod/game-api/types/alta-menus/listelement">{"ListElement"}</Link>{" element)"}</code> | Handler for an element's invite button: opens the invite-a-friend panel for that group. |
| <Link id="m-setupjoinedgroupslist" /><code>{"private async Task SetupJoinedGroupsList()"}</code> | Fetches your joined groups from `ApiAccess.ApiClient`, creates one element per group and resets the list with them. |
| <Link id="m-swaptoselectedgrouppanel" /><code>{"private void SwapToSelectedGroupPanel("}<Link to="/mod/game-api/types/alta-menus/listelement">{"ListElement"}</Link>{" element)"}</code> | Handler for selecting an element: sets the selected group panel to that group. |

</details>
