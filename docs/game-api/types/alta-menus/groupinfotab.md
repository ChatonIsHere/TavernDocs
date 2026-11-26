---
title: "GroupInfoTab"
description: "Server management tab showing a group's name, description, type and member count, with leave and invite buttons."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupInfoTab

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

Server management tab showing a group's name, description, type and member count, with leave and invite buttons.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`GroupPage`](/game-api/types/alta-menus/grouppage)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GroupInfoTab()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-infotext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" infoText"}</code> | Text for the group's info. |
| <Link id="m-invitepanel" /><code>{"private "}<Link to="/game-api/types/alta-menus/inviteusertogroupviafriendspanel">{"InviteUserToGroupViaFriendsPanel"}</Link>{" invitePanel"}</code> | Panel for inviting friends to the group. |
| <Link id="m-leavegroupbutton" /><code>{"private "}<Link to="/game-api/types/alta-menus/buttonwithevents">{"ButtonWithEvents"}</Link>{" leaveGroupButton"}</code> | The leave button. |
| <Link id="m-serverlistpanel" /><code>{"private "}<Link to="/game-api/types/alta-menus/panelcomponent">{"PanelComponent"}</Link>{" serverListPanel"}</code> | Server list shown after leaving. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-invitefriendtogroup" /><code>{"void InviteFriendToGroup()"}</code> | Opens the invite-a-friend panel for this group. |
| <Link id="m-refreshdata" /><code>{"override void RefreshData()"}</code> | Writes the group's info into the text. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleleavebuttonpress" /><code>{"private void HandleLeaveButtonPress("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> | Asks for confirmation before leaving the group. |
| <Link id="m-leavegroup" /><code>{"private async void LeaveGroup()"}</code> | Leaves the group behind a loading screen. |
| <Link id="m-leavegroupasync" /><code>{"private async Task LeaveGroupAsync()"}</code> | Leaves the group, then refreshes and shows the server list; shows a popup on failure. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Hooks the leave button. |

</details>

## Used in

Members of other types that take, return or hold a `GroupInfoTab`:

[`SelectedGroupPanel.infoPage`](/game-api/types/alta-menus/selectedgrouppanel#m-infopage).
