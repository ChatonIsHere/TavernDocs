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

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`PanelComponent`](/mod/game-api/types/alta-menus/panelcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InviteUserToGroupPanel()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-elementtemplate" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" elementTemplate"}</code> | <span className="api-desc">Row prefab cloned for each group.</span> |
| <Link id="m-uilist" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/uilist">{"UIList"}</Link>{" uiList"}</code> | <span className="api-desc">The list that holds the group rows.</span> |
| <Link id="m-user" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" user"}</code> | <span className="api-desc">The user being invited, set by `SetupForUser`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-invitetogroup" /><code>{"void InviteToGroup("}<Link to="/mod/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" group)"}</code> | <span className="api-desc">Asks for confirmation before inviting the user to the chosen group.</span> |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> | <span className="api-desc">Rebuilds the group list behind a loading screen.</span> |
| <Link id="m-setupforuser" /><code>{"void SetupForUser("}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" user)"}</code> | <span className="api-desc">Sets the user to invite and opens the window.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-finishinvite" /><code>{"private async void FinishInvite("}<Link to="/mod/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" group)"}</code> | <span className="api-desc">Adds the invite through the API behind a loading screen, then closes the window.</span> |
| <Link id="m-setupgroupslist" /><code>{"private async Task SetupGroupsList()"}</code> | <span className="api-desc">Lists the joined groups where the player has invite permission; picking one calls `InviteToGroup`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `InviteUserToGroupPanel`:

<div className="api-used-in">

[`FriendsListPanel.inviteWindow`](/mod/game-api/types/alta-menus/friendslistpanel#m-invitewindow).

</div>
