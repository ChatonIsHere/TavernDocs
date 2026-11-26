---
title: "FriendsListPanel"
description: "Main menu friends list: add friends by username, unfriend them or invite them to a server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FriendsListPanel

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

Main menu friends list: add friends by username, unfriend them or invite them to a server.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`PanelComponent`](/mod/game-api/types/alta-menus/panelcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FriendsListPanel()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | <span className="api-desc">Analytics service for social events.</span> |
| <Link id="m-emptylisttext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" emptyListText"}</code> | <span className="api-desc">Text shown when you have no friends listed.</span> |
| <Link id="m-friendinvitespanel" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/panelcomponent">{"PanelComponent"}</Link>{" friendInvitesPanel"}</code> | <span className="api-desc">Sent requests panel, refreshed after sending a request.</span> |
| <Link id="m-friendsearch" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" friendSearch"}</code> | <span className="api-desc">Username input box.</span> |
| <Link id="m-invitewindow" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/inviteusertogrouppanel">{"InviteUserToGroupPanel"}</Link>{" inviteWindow"}</code> | <span className="api-desc">Panel for inviting a friend to a server.</span> |
| <Link id="m-listelement" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" listElement"}</code> | <span className="api-desc">Row prefab.</span> |
| <Link id="m-uilist" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/uilist">{"UIList"}</Link>{" uiList"}</code> | <span className="api-desc">The list the rows go in.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> | <span className="api-desc">Receives the analytics service.</span> |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> | <span className="api-desc">Reloads the list behind a loading screen.</span> |
| <Link id="m-handlestatechange" /><code>{"protected override void HandleStateChange("}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> | <span className="api-desc">Hooks the search box's submit only while the panel is active.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addfriend" /><code>{"private async void AddFriend("}<Link to="/mod/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" obj)"}</code> | <span className="api-desc">Looks up a username and sends them a friend request, with popups for success or not found.</span> |
| <Link id="m-addfriend-2" /><code>{"private async Task AddFriend(string username)"}</code> | <span className="api-desc">Looks up a username and sends them a friend request, with popups for success or not found.</span> |
| <Link id="m-removefriend" /><code>{"private async void RemoveFriend("}<Link to="/mod/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{" friendship)"}</code> | <span className="api-desc">Removes a friend, logs analytics and reloads.</span> |
| <Link id="m-setupfriendslist" /><code>{"private async Task SetupFriendsList()"}</code> | <span className="api-desc">Fetches friends from the web API and builds a row for each.</span> |
| <Link id="m-showinvitewindow" /><code>{"private void ShowInviteWindow("}<Link to="/mod/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{" friendship)"}</code> | <span className="api-desc">Opens the invite window for a friend.</span> |
| <Link id="m-showoptionsforfriend" /><code>{"private void ShowOptionsForFriend("}<Link to="/mod/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{" friendship)"}</code> | <span className="api-desc">Shows the Invite to Server and Unfriend options.</span> |

</details>

## Used in

Members of other types that take, return or hold a `FriendsListPanel`:

<div className="api-used-in">

[`MainMenuVrLifetimeScope.friendsListPanel`](/mod/game-api/types/assembly-other/mainmenuvrlifetimescope#m-friendslistpanel).

</div>
