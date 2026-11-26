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
| <Link id="m-ctor" /><code>{"protected PanelComponent()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | <span className="api-desc">NLog logger shared by panel components.</span> |
| <Link id="m-needstorefreshdata" /><code>{"protected bool needsToRefreshData"}</code> | <span className="api-desc">True when data should be reloaded on the next panel state change.</span> |
| <Link id="m-panel" /><code>{"protected "}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel"}</code> | <span className="api-desc">The panel this component belongs to (set in the editor).</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entry" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry"}</code> | <span className="api-desc">The scheduled refresh on the `Timeline`.</span> |
| <Link id="m-refreshtimer" /><code>{"private float refreshTimer"}</code> | <span className="api-desc">Seconds between automatic data refreshes. Default 30; 0 or less turns them off.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-panel-2" /><code><Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" "}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" { get; }"}</code> | <span className="api-desc">The panel this component belongs to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcerefreshonnextload" /><code>{"void ForceRefreshOnNextLoad()"}</code> | <span className="api-desc">Refreshes now if the panel is open, otherwise refreshes the next time it opens.</span> |
| <Link id="m-refreshdata" /><code>{"virtual void RefreshData()"}</code> | <span className="api-desc">Override to reload the panel's data. Empty in the base.</span> |
| <Link id="m-handlestatechange" /><code>{"protected virtual void HandleStateChange("}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> | <span className="api-desc">Hook for subclasses, called each time the panel opens or closes.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the panel's state changes and, if `refreshTimer` is above 0, schedules `RefreshAgain`.</span> |
| <Link id="m-handlepanelstatechange" /><code>{"private void HandlePanelStateChange("}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> | <span className="api-desc">On any panel state change: runs `RefreshData` if a refresh is pending, then `HandleStateChange`.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Cancels the scheduled refresh.</span> |
| <Link id="m-refreshagain" /><code>{"private void RefreshAgain()"}</code> | <span className="api-desc">Timer callback: refreshes now if the panel is open, otherwise on next open, then schedules itself again.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PanelComponent`:

<div className="api-used-in">

[`FriendsListPanel.friendInvitesPanel`](/mod/game-api/types/alta-menus/friendslistpanel#m-friendinvitespanel), [`FriendsRequestsPanel.friendsList`](/mod/game-api/types/alta-menus/friendsrequestspanel#m-friendslist), [`GroupInfoTab.serverListPanel`](/mod/game-api/types/alta-menus/groupinfotab#m-serverlistpanel), [`GroupMembersPage.invitesPanel`](/mod/game-api/types/alta-menus/groupmemberspage#m-invitespanel), [`InboxPanel.panelsToRefresh`](/mod/game-api/types/alta-menus/inboxpanel#m-panelstorefresh), [`OculusFriendsListPanel.friendsList`](/mod/game-api/types/alta-menus/oculusfriendslistpanel#m-friendslist), [`RecentPlayersListPanel.outgoingRequestsList`](/mod/game-api/types/alta-menus/recentplayerslistpanel#m-outgoingrequestslist), [`ServerDetailsPanel.joinedServersPage`](/mod/game-api/types/alta-menus/serverdetailspanel#m-joinedserverspage).

</div>
