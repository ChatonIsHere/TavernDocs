---
title: "GroupInfoTab"
description: "class GroupInfoTab in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupInfoTab

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`GroupPage`](/game-api/types/alta-menus/grouppage)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GroupInfoTab()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-infotext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" infoText"}</code> |
| <Link id="m-invitepanel" /><code>{"private "}<Link to="/game-api/types/alta-menus/inviteusertogroupviafriendspanel">{"InviteUserToGroupViaFriendsPanel"}</Link>{" invitePanel"}</code> |
| <Link id="m-leavegroupbutton" /><code>{"private "}<Link to="/game-api/types/alta-menus/buttonwithevents">{"ButtonWithEvents"}</Link>{" leaveGroupButton"}</code> |
| <Link id="m-serverlistpanel" /><code>{"private "}<Link to="/game-api/types/alta-menus/panelcomponent">{"PanelComponent"}</Link>{" serverListPanel"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-invitefriendtogroup" /><code>{"void InviteFriendToGroup()"}</code> |
| <Link id="m-refreshdata" /><code>{"override void RefreshData()"}</code> |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-handleleavebuttonpress" /><code>{"private void HandleLeaveButtonPress("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> |
| <Link id="m-leavegroup" /><code>{"private async void LeaveGroup()"}</code> |
| <Link id="m-leavegroupasync" /><code>{"private async Task LeaveGroupAsync()"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `GroupInfoTab`:

[`SelectedGroupPanel.infoPage`](/game-api/types/alta-menus/selectedgrouppanel#m-infopage).
