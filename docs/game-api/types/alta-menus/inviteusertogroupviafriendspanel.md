---
title: "InviteUserToGroupViaFriendsPanel"
description: "class InviteUserToGroupViaFriendsPanel in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InviteUserToGroupViaFriendsPanel

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`PanelComponent`](/game-api/types/alta-menus/panelcomponent)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"InviteUserToGroupViaFriendsPanel()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-elementtemplate" /><code>{"private "}<Link to="/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" elementTemplate"}</code> |
| <Link id="m-group" /><code>{"private "}<Link to="/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" group"}</code> |
| <Link id="m-oculususertemplate" /><code>{"private "}<Link to="/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" oculusUserTemplate"}</code> |
| <Link id="m-uilist" /><code>{"private "}<Link to="/game-api/types/alta-menus/uilist">{"UIList"}</Link>{" uiList"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-inviteoculusfriendtogroup" /><code>{"void InviteOculusFriendToGroup("}<Link to="/game-api/types/alta-menus/friend">{"Friend"}</Link>{" friend)"}</code> |
| <Link id="m-invitetogroup" /><code>{"void InviteToGroup("}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" user)"}</code> |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> |
| <Link id="m-setupforgroup" /><code>{"void SetupForGroup("}<Link to="/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" group)"}</code> |

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-addoculususer" /><code>{"private Task AddOculusUser("}<Link to="/game-api/types/alta-menus/friend">{"Friend"}</Link>{" friend)"}</code> |
| <Link id="m-finishinvite" /><code>{"private async void FinishInvite("}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" user)"}</code> |
| <Link id="m-finishoculusinvite" /><code>{"private async void FinishOculusInvite("}<Link to="/game-api/types/alta-menus/friend">{"Friend"}</Link>{" friend)"}</code> |
| <Link id="m-setupfriendslist" /><code>{"private async Task SetupFriendsList()"}</code> |
| <Link id="m-spawnaltafriendbuttons" /><code>{"private void SpawnAltaFriendButtons(HashSet<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> altaUsers, ICollection<"}<Link to="/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{"> newElements)"}</code> |
| <Link id="m-spawnoculusfriendbuttons" /><code>{"private void SpawnOculusFriendButtons(IEnumerable<"}<Link to="/game-api/types/alta-menus/friend">{"Friend"}</Link>{"> nonAltaOculusUsers, ICollection<"}<Link to="/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{"> newElements)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `InviteUserToGroupViaFriendsPanel`:

[`GroupInfoTab.invitePanel`](/game-api/types/alta-menus/groupinfotab#m-invitepanel), [`JoinedGroupsList.inviteUserPanel`](/game-api/types/alta-menus/joinedgroupslist#m-inviteuserpanel).
