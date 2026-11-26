---
title: "PanelComponent"
description: "Base for components that fill a meta UI Panel with data."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PanelComponent

An **abstract class** in `Root.Township`, `Alta.Meta.UI`.

Base for components that fill a meta UI `Panel` with data. Refreshes when the panel opens if marked stale, and marks itself stale on a timer (30 seconds by default).

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`FriendsInvitesPanel`](/mod/game-api/types/alta-menus/friendsinvitespanel), [`FriendsListPanel`](/mod/game-api/types/alta-menus/friendslistpanel), [`FriendsRequestsPanel`](/mod/game-api/types/alta-menus/friendsrequestspanel), [`GroupPage`](/mod/game-api/types/alta-menus/grouppage), [`InboxPanel`](/mod/game-api/types/alta-menus/inboxpanel), [`InviteUserToGroupPanel`](/mod/game-api/types/alta-menus/inviteusertogrouppanel), [`InviteUserToGroupViaFriendsPanel`](/mod/game-api/types/alta-menus/inviteusertogroupviafriendspanel), [`JoinedGroupsList`](/mod/game-api/types/alta-menus/joinedgroupslist), [`OculusFriendsListPanel`](/mod/game-api/types/alta-menus/oculusfriendslistpanel), [`RecentPlayersListPanel`](/mod/game-api/types/alta-menus/recentplayerslistpanel), [`ReportsPanel`](/mod/game-api/types/alta-menus/reportspanel), [`ServerDetailsPanel`](/mod/game-api/types/alta-menus/serverdetailspanel), [`RecentPlayersPage`](/mod/game-api/types/alta-menus/recentplayerspage), [`GymnasiumTeleportPointPage`](/mod/game-api/types/game-other-namespaces/gymnasiumteleportpointpage), [`RecentPlayerActionPage`](/mod/game-api/types/global-q-r/recentplayeractionpage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PanelComponent()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | NLog logger shared by panel components. |
| <Link id="m-needstorefreshdata" /><code>{"protected bool needsToRefreshData"}</code> | True when data should be reloaded on the next panel state change. |
| <Link id="m-panel" /><code>{"protected "}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel"}</code> | The panel this component belongs to (set in the editor). |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entry" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry"}</code> | The scheduled refresh on the `Timeline`. |
| <Link id="m-refreshtimer" /><code>{"private float refreshTimer"}</code> | Seconds between automatic data refreshes. Default 30; 0 or less turns them off. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-panel-2" /><code><Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" "}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" { get; }"}</code> | The panel this component belongs to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcerefreshonnextload" /><code>{"void ForceRefreshOnNextLoad()"}</code> | Refreshes now if the panel is open, otherwise refreshes the next time it opens. |
| <Link id="m-refreshdata" /><code>{"virtual void RefreshData()"}</code> | Override to reload the panel's data. Empty in the base. |
| <Link id="m-handlestatechange" /><code>{"protected virtual void HandleStateChange("}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> | Hook for subclasses, called each time the panel opens or closes. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the panel's state changes and, if `refreshTimer` is above 0, schedules `RefreshAgain`. |
| <Link id="m-handlepanelstatechange" /><code>{"private void HandlePanelStateChange("}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> | On any panel state change: runs `RefreshData` if a refresh is pending, then `HandleStateChange`. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Cancels the scheduled refresh. |
| <Link id="m-refreshagain" /><code>{"private void RefreshAgain()"}</code> | Timer callback: refreshes now if the panel is open, otherwise on next open, then schedules itself again. |

</details>

## Used in

Members of other types that take, return or hold a `PanelComponent`:

[`FriendsListPanel.friendInvitesPanel`](/mod/game-api/types/alta-menus/friendslistpanel#m-friendinvitespanel), [`FriendsRequestsPanel.friendsList`](/mod/game-api/types/alta-menus/friendsrequestspanel#m-friendslist), [`GroupInfoTab.serverListPanel`](/mod/game-api/types/alta-menus/groupinfotab#m-serverlistpanel), [`GroupMembersPage.invitesPanel`](/mod/game-api/types/alta-menus/groupmemberspage#m-invitespanel), [`InboxPanel.panelsToRefresh`](/mod/game-api/types/alta-menus/inboxpanel#m-panelstorefresh), [`OculusFriendsListPanel.friendsList`](/mod/game-api/types/alta-menus/oculusfriendslistpanel#m-friendslist), [`RecentPlayersListPanel.outgoingRequestsList`](/mod/game-api/types/alta-menus/recentplayerslistpanel#m-outgoingrequestslist), [`ServerDetailsPanel.joinedServersPage`](/mod/game-api/types/alta-menus/serverdetailspanel#m-joinedserverspage).
