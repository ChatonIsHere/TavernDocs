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
| <Link id="m-ctor" /><code>{"InviteUserToGroupViaFriendsPanel()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-elementtemplate" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" elementTemplate"}</code> | <span className="api-desc">List element prefab for a normal friend.</span> |
| <Link id="m-group" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" group"}</code> | <span className="api-desc">The group invites are sent to.</span> |
| <Link id="m-oculususertemplate" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" oculusUserTemplate"}</code> | <span className="api-desc">List element prefab for an Oculus friend.</span> |
| <Link id="m-uilist" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/uilist">{"UIList"}</Link>{" uiList"}</code> | <span className="api-desc">The list the buttons are put in.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-inviteoculusfriendtogroup" /><code>{"void InviteOculusFriendToGroup("}<Link to="/mod/game-api/types/alta-menus/friend">{"Friend"}</Link>{" friend)"}</code> | <span className="api-desc">Shows a confirm popup, then invites the Oculus friend.</span> |
| <Link id="m-invitetogroup" /><code>{"void InviteToGroup("}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" user)"}</code> | <span className="api-desc">Shows a confirm popup, then invites the friend to the group.</span> |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> | <span className="api-desc">Rebuilds the friends list behind a loading screen.</span> |
| <Link id="m-setupforgroup" /><code>{"void SetupForGroup("}<Link to="/mod/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" group)"}</code> | <span className="api-desc">Sets which group invites go to and opens the window.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addoculususer" /><code>{"private Task AddOculusUser("}<Link to="/mod/game-api/types/alta-menus/friend">{"Friend"}</Link>{" friend)"}</code> | <span className="api-desc">Calls the API to invite an Oculus friend to the group by their Oculus ID.</span> |
| <Link id="m-finishinvite" /><code>{"private async void FinishInvite("}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" user)"}</code> | <span className="api-desc">Adds the user to the group's invites behind a loading screen, then closes the window.</span> |
| <Link id="m-finishoculusinvite" /><code>{"private async void FinishOculusInvite("}<Link to="/mod/game-api/types/alta-menus/friend">{"Friend"}</Link>{" friend)"}</code> | <span className="api-desc">Sends the Oculus invite behind a loading screen, then closes the window.</span> |
| <Link id="m-setupfriendslist" /><code>{"private async Task SetupFriendsList()"}</code> | <span className="api-desc">Fetches friends from the API (and unlinked Oculus friends on Quest) and fills the list.</span> |
| <Link id="m-spawnaltafriendbuttons" /><code>{"private void SpawnAltaFriendButtons(HashSet<"}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> altaUsers, ICollection<"}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{"> newElements)"}</code> | <span className="api-desc">Makes one list button per friend that starts an invite.</span> |
| <Link id="m-spawnoculusfriendbuttons" /><code>{"private void SpawnOculusFriendButtons(IEnumerable<"}<Link to="/mod/game-api/types/alta-menus/friend">{"Friend"}</Link>{"> nonAltaOculusUsers, ICollection<"}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{"> newElements)"}</code> | <span className="api-desc">Makes one list button per unlinked Oculus friend that starts an Oculus invite.</span> |

</details>

## Used in

Members of other types that take, return or hold a `InviteUserToGroupViaFriendsPanel`:

<div className="api-used-in">

[`GroupInfoTab.invitePanel`](/mod/game-api/types/alta-menus/groupinfotab#m-invitepanel), [`JoinedGroupsList.inviteUserPanel`](/mod/game-api/types/alta-menus/joinedgroupslist#m-inviteuserpanel).

</div>
