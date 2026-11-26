---
title: "InviteUserToGroupViaFriendsPanel"
description: "Client: server management panel listing the player's friends so they can be invited to a group."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InviteUserToGroupViaFriendsPanel

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

Client: server management panel listing the player's friends so they can be invited to a group. On Quest it also lists Oculus friends without a linked account.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`PanelComponent`](/mod/game-api/types/alta-menus/panelcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InviteUserToGroupViaFriendsPanel()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-elementtemplate" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" elementTemplate"}</code> | List element prefab for a normal friend. |
| <Link id="m-group" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" group"}</code> | The group invites are sent to. |
| <Link id="m-oculususertemplate" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" oculusUserTemplate"}</code> | List element prefab for an Oculus friend. |
| <Link id="m-uilist" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/uilist">{"UIList"}</Link>{" uiList"}</code> | The list the buttons are put in. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-inviteoculusfriendtogroup" /><code>{"void InviteOculusFriendToGroup("}<Link to="/mod/game-api/types/alta-menus/friend">{"Friend"}</Link>{" friend)"}</code> | Shows a confirm popup, then invites the Oculus friend. |
| <Link id="m-invitetogroup" /><code>{"void InviteToGroup("}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" user)"}</code> | Shows a confirm popup, then invites the friend to the group. |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> | Rebuilds the friends list behind a loading screen. |
| <Link id="m-setupforgroup" /><code>{"void SetupForGroup("}<Link to="/mod/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" group)"}</code> | Sets which group invites go to and opens the window. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addoculususer" /><code>{"private Task AddOculusUser("}<Link to="/mod/game-api/types/alta-menus/friend">{"Friend"}</Link>{" friend)"}</code> | Calls the API to invite an Oculus friend to the group by their Oculus ID. |
| <Link id="m-finishinvite" /><code>{"private async void FinishInvite("}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" user)"}</code> | Adds the user to the group's invites behind a loading screen, then closes the window. |
| <Link id="m-finishoculusinvite" /><code>{"private async void FinishOculusInvite("}<Link to="/mod/game-api/types/alta-menus/friend">{"Friend"}</Link>{" friend)"}</code> | Sends the Oculus invite behind a loading screen, then closes the window. |
| <Link id="m-setupfriendslist" /><code>{"private async Task SetupFriendsList()"}</code> | Fetches friends from the API (and unlinked Oculus friends on Quest) and fills the list. |
| <Link id="m-spawnaltafriendbuttons" /><code>{"private void SpawnAltaFriendButtons(HashSet<"}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> altaUsers, ICollection<"}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{"> newElements)"}</code> | Makes one list button per friend that starts an invite. |
| <Link id="m-spawnoculusfriendbuttons" /><code>{"private void SpawnOculusFriendButtons(IEnumerable<"}<Link to="/mod/game-api/types/alta-menus/friend">{"Friend"}</Link>{"> nonAltaOculusUsers, ICollection<"}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{"> newElements)"}</code> | Makes one list button per unlinked Oculus friend that starts an Oculus invite. |

</details>

## Used in

Members of other types that take, return or hold a `InviteUserToGroupViaFriendsPanel`:

[`GroupInfoTab.invitePanel`](/mod/game-api/types/alta-menus/groupinfotab#m-invitepanel), [`JoinedGroupsList.inviteUserPanel`](/mod/game-api/types/alta-menus/joinedgroupslist#m-inviteuserpanel).
