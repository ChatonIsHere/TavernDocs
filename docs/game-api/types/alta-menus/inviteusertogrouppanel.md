---
title: "InviteUserToGroupPanel"
description: "Client panel that lets the player pick one of their groups to invite a given user to."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InviteUserToGroupPanel

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

Client panel that lets the player pick one of their groups to invite a given user to. Only groups where they have invite permission are listed.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`PanelComponent`](/game-api/types/alta-menus/panelcomponent)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"InviteUserToGroupPanel()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-elementtemplate" /><code>{"private "}<Link to="/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" elementTemplate"}</code> | Row prefab cloned for each group. |
| <Link id="m-uilist" /><code>{"private "}<Link to="/game-api/types/alta-menus/uilist">{"UIList"}</Link>{" uiList"}</code> | The list that holds the group rows. |
| <Link id="m-user" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" user"}</code> | The user being invited, set by `SetupForUser`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-invitetogroup" /><code>{"void InviteToGroup("}<Link to="/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" group)"}</code> | Asks for confirmation before inviting the user to the chosen group. |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> | Rebuilds the group list behind a loading screen. |
| <Link id="m-setupforuser" /><code>{"void SetupForUser("}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" user)"}</code> | Sets the user to invite and opens the window. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-finishinvite" /><code>{"private async void FinishInvite("}<Link to="/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" group)"}</code> | Adds the invite through the API behind a loading screen, then closes the window. |
| <Link id="m-setupgroupslist" /><code>{"private async Task SetupGroupsList()"}</code> | Lists the joined groups where the player has invite permission; picking one calls `InviteToGroup`. |

</details>

## Used in

Members of other types that take, return or hold a `InviteUserToGroupPanel`:

[`FriendsListPanel.inviteWindow`](/game-api/types/alta-menus/friendslistpanel#m-invitewindow).
