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

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`GroupPage`](/mod/game-api/types/alta-menus/grouppage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GroupInfoTab()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-infotext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" infoText"}</code> | <span className="api-desc">Text for the group's info.</span> |
| <Link id="m-invitepanel" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/inviteusertogroupviafriendspanel">{"InviteUserToGroupViaFriendsPanel"}</Link>{" invitePanel"}</code> | <span className="api-desc">Panel for inviting friends to the group.</span> |
| <Link id="m-leavegroupbutton" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/buttonwithevents">{"ButtonWithEvents"}</Link>{" leaveGroupButton"}</code> | <span className="api-desc">The leave button.</span> |
| <Link id="m-serverlistpanel" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/panelcomponent">{"PanelComponent"}</Link>{" serverListPanel"}</code> | <span className="api-desc">Server list shown after leaving.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-invitefriendtogroup" /><code>{"void InviteFriendToGroup()"}</code> | <span className="api-desc">Opens the invite-a-friend panel for this group.</span> |
| <Link id="m-refreshdata" /><code>{"override void RefreshData()"}</code> | <span className="api-desc">Writes the group's info into the text.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleleavebuttonpress" /><code>{"private void HandleLeaveButtonPress("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> | <span className="api-desc">Asks for confirmation before leaving the group.</span> |
| <Link id="m-leavegroup" /><code>{"private async void LeaveGroup()"}</code> | <span className="api-desc">Leaves the group behind a loading screen.</span> |
| <Link id="m-leavegroupasync" /><code>{"private async Task LeaveGroupAsync()"}</code> | <span className="api-desc">Leaves the group, then refreshes and shows the server list; shows a popup on failure.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Hooks the leave button.</span> |

</details>

## Used in

Members of other types that take, return or hold a `GroupInfoTab`:

<div className="api-used-in">

[`SelectedGroupPanel.infoPage`](/mod/game-api/types/alta-menus/selectedgrouppanel#m-infopage).

</div>
