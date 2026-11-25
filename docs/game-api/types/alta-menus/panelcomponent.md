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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`FriendsInvitesPanel`](/game-api/types/alta-menus/friendsinvitespanel), [`FriendsListPanel`](/game-api/types/alta-menus/friendslistpanel), [`FriendsRequestsPanel`](/game-api/types/alta-menus/friendsrequestspanel), [`GroupPage`](/game-api/types/alta-menus/grouppage), [`InboxPanel`](/game-api/types/alta-menus/inboxpanel), [`InviteUserToGroupPanel`](/game-api/types/alta-menus/inviteusertogrouppanel), [`InviteUserToGroupViaFriendsPanel`](/game-api/types/alta-menus/inviteusertogroupviafriendspanel), [`JoinedGroupsList`](/game-api/types/alta-menus/joinedgroupslist), [`OculusFriendsListPanel`](/game-api/types/alta-menus/oculusfriendslistpanel), [`RecentPlayersListPanel`](/game-api/types/alta-menus/recentplayerslistpanel), [`ReportsPanel`](/game-api/types/alta-menus/reportspanel), [`ServerDetailsPanel`](/game-api/types/alta-menus/serverdetailspanel), [`RecentPlayersPage`](/game-api/types/alta-menus/recentplayerspage), [`GymnasiumTeleportPointPage`](/game-api/types/game-other-namespaces/gymnasiumteleportpointpage), [`RecentPlayerActionPage`](/game-api/types/global-q-r/recentplayeractionpage)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected PanelComponent()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | NLog logger shared by panel components. |
| <Link id="m-needstorefreshdata" /><code>{"protected bool needsToRefreshData"}</code> | True when data should be reloaded on the next panel state change. |
| <Link id="m-panel" /><code>{"protected "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel"}</code> | The panel this component belongs to (set in the editor). |

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-entry" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry"}</code> |
| <Link id="m-refreshtimer" /><code>{"private float refreshTimer"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-panel-2" /><code><Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" { get; }"}</code> | The panel this component belongs to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcerefreshonnextload" /><code>{"void ForceRefreshOnNextLoad()"}</code> | Refreshes now if the panel is open, otherwise refreshes the next time it opens. |
| <Link id="m-refreshdata" /><code>{"virtual void RefreshData()"}</code> | Override to reload the panel's data. Empty in the base. |
| <Link id="m-handlestatechange" /><code>{"protected virtual void HandleStateChange("}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> | Hook for subclasses, called each time the panel opens or closes. |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-handlepanelstatechange" /><code>{"private void HandlePanelStateChange("}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-refreshagain" /><code>{"private void RefreshAgain()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `PanelComponent`:

[`FriendsListPanel.friendInvitesPanel`](/game-api/types/alta-menus/friendslistpanel#m-friendinvitespanel), [`FriendsRequestsPanel.friendsList`](/game-api/types/alta-menus/friendsrequestspanel#m-friendslist), [`GroupInfoTab.serverListPanel`](/game-api/types/alta-menus/groupinfotab#m-serverlistpanel), [`GroupMembersPage.invitesPanel`](/game-api/types/alta-menus/groupmemberspage#m-invitespanel), [`InboxPanel.panelsToRefresh`](/game-api/types/alta-menus/inboxpanel#m-panelstorefresh), [`OculusFriendsListPanel.friendsList`](/game-api/types/alta-menus/oculusfriendslistpanel#m-friendslist), [`RecentPlayersListPanel.outgoingRequestsList`](/game-api/types/alta-menus/recentplayerslistpanel#m-outgoingrequestslist), [`ServerDetailsPanel.joinedServersPage`](/game-api/types/alta-menus/serverdetailspanel#m-joinedserverspage).
