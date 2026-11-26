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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`PanelComponent`](/game-api/types/alta-menus/panelcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FriendsListPanel()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | Analytics service for social events. |
| <Link id="m-emptylisttext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" emptyListText"}</code> | Text shown when you have no friends listed. |
| <Link id="m-friendinvitespanel" /><code>{"private "}<Link to="/game-api/types/alta-menus/panelcomponent">{"PanelComponent"}</Link>{" friendInvitesPanel"}</code> | Sent requests panel, refreshed after sending a request. |
| <Link id="m-friendsearch" /><code>{"private "}<Link to="/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" friendSearch"}</code> | Username input box. |
| <Link id="m-invitewindow" /><code>{"private "}<Link to="/game-api/types/alta-menus/inviteusertogrouppanel">{"InviteUserToGroupPanel"}</Link>{" inviteWindow"}</code> | Panel for inviting a friend to a server. |
| <Link id="m-listelement" /><code>{"private "}<Link to="/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" listElement"}</code> | Row prefab. |
| <Link id="m-uilist" /><code>{"private "}<Link to="/game-api/types/alta-menus/uilist">{"UIList"}</Link>{" uiList"}</code> | The list the rows go in. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> | Receives the analytics service. |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> | Reloads the list behind a loading screen. |
| <Link id="m-handlestatechange" /><code>{"protected override void HandleStateChange("}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> | Hooks the search box's submit only while the panel is active. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addfriend" /><code>{"private async void AddFriend("}<Link to="/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" obj)"}</code> | Looks up a username and sends them a friend request, with popups for success or not found. |
| <Link id="m-addfriend-2" /><code>{"private async Task AddFriend(string username)"}</code> | Looks up a username and sends them a friend request, with popups for success or not found. |
| <Link id="m-removefriend" /><code>{"private async void RemoveFriend("}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{" friendship)"}</code> | Removes a friend, logs analytics and reloads. |
| <Link id="m-setupfriendslist" /><code>{"private async Task SetupFriendsList()"}</code> | Fetches friends from the web API and builds a row for each. |
| <Link id="m-showinvitewindow" /><code>{"private void ShowInviteWindow("}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{" friendship)"}</code> | Opens the invite window for a friend. |
| <Link id="m-showoptionsforfriend" /><code>{"private void ShowOptionsForFriend("}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{" friendship)"}</code> | Shows the Invite to Server and Unfriend options. |

</details>

## Used in

Members of other types that take, return or hold a `FriendsListPanel`:

[`MainMenuVrLifetimeScope.friendsListPanel`](/game-api/types/assembly-other/mainmenuvrlifetimescope#m-friendslistpanel).
