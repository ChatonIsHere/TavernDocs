---
title: "FriendsRequestsPanel"
description: "Main menu list of friend requests sent to you, with accept and reject options."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FriendsRequestsPanel

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

Main menu list of friend requests sent to you, with accept and reject options.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`PanelComponent`](/game-api/types/alta-menus/panelcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FriendsRequestsPanel()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | Analytics service for social events. |
| <Link id="m-emptylisttext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" emptyListText"}</code> | Text shown when there are no requests. |
| <Link id="m-friendslist" /><code>{"private "}<Link to="/game-api/types/alta-menus/panelcomponent">{"PanelComponent"}</Link>{" friendsList"}</code> | Friends list panel, refreshed after accepting. |
| <Link id="m-listelement" /><code>{"private "}<Link to="/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" listElement"}</code> | Row prefab. |
| <Link id="m-uilist" /><code>{"private "}<Link to="/game-api/types/alta-menus/uilist">{"UIList"}</Link>{" uiList"}</code> | The list the rows go in. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> | Receives the analytics service. |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> | Reloads the list behind a loading screen. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-acceptfriendrequest" /><code>{"private async void AcceptFriendRequest("}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{" friendship)"}</code> | Accepts a request, logs analytics, reloads and marks the friends list for refresh. |
| <Link id="m-rejectfriendrequest" /><code>{"private async void RejectFriendRequest("}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{" friendship)"}</code> | Rejects a request by removing the friendship, then reloads. |
| <Link id="m-setupfriendslist" /><code>{"private async Task SetupFriendsList()"}</code> | Fetches incoming requests from the web API and builds a row for each. |
| <Link id="m-showoptionsforfriend" /><code>{"private void ShowOptionsForFriend("}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{" friendship)"}</code> | Shows the Accept and Reject options. |

</details>

## Used in

Members of other types that take, return or hold a `FriendsRequestsPanel`:

[`MainMenuVrLifetimeScope.friendsRequestsPanel`](/game-api/types/assembly-other/mainmenuvrlifetimescope#m-friendsrequestspanel).
