---
title: "InviteUserToGroupPanel"
description: "class InviteUserToGroupPanel in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InviteUserToGroupPanel

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`PanelComponent`](/game-api/types/alta-menus/panelcomponent)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"InviteUserToGroupPanel()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-elementtemplate" /><code>{"private "}<Link to="/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" elementTemplate"}</code> |
| <Link id="m-uilist" /><code>{"private "}<Link to="/game-api/types/alta-menus/uilist">{"UIList"}</Link>{" uiList"}</code> |
| <Link id="m-user" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" user"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-invitetogroup" /><code>{"void InviteToGroup("}<Link to="/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" group)"}</code> |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> |
| <Link id="m-setupforuser" /><code>{"void SetupForUser("}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" user)"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-finishinvite" /><code>{"private async void FinishInvite("}<Link to="/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" group)"}</code> |
| <Link id="m-setupgroupslist" /><code>{"private async Task SetupGroupsList()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `InviteUserToGroupPanel`:

[`FriendsListPanel.inviteWindow`](/game-api/types/alta-menus/friendslistpanel#m-invitewindow).
