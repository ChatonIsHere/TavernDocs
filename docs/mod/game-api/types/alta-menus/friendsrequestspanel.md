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

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`PanelComponent`](/mod/game-api/types/alta-menus/panelcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FriendsRequestsPanel()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | <span className="api-desc">Analytics service for social events.</span> |
| <Link id="m-emptylisttext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" emptyListText"}</code> | <span className="api-desc">Text shown when there are no requests.</span> |
| <Link id="m-friendslist" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/panelcomponent">{"PanelComponent"}</Link>{" friendsList"}</code> | <span className="api-desc">Friends list panel, refreshed after accepting.</span> |
| <Link id="m-listelement" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" listElement"}</code> | <span className="api-desc">Row prefab.</span> |
| <Link id="m-uilist" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/uilist">{"UIList"}</Link>{" uiList"}</code> | <span className="api-desc">The list the rows go in.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> | <span className="api-desc">Receives the analytics service.</span> |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> | <span className="api-desc">Reloads the list behind a loading screen.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-acceptfriendrequest" /><code>{"private async void AcceptFriendRequest("}<Link to="/mod/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{" friendship)"}</code> | <span className="api-desc">Accepts a request, logs analytics, reloads and marks the friends list for refresh.</span> |
| <Link id="m-rejectfriendrequest" /><code>{"private async void RejectFriendRequest("}<Link to="/mod/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{" friendship)"}</code> | <span className="api-desc">Rejects a request by removing the friendship, then reloads.</span> |
| <Link id="m-setupfriendslist" /><code>{"private async Task SetupFriendsList()"}</code> | <span className="api-desc">Fetches incoming requests from the web API and builds a row for each.</span> |
| <Link id="m-showoptionsforfriend" /><code>{"private void ShowOptionsForFriend("}<Link to="/mod/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{" friendship)"}</code> | <span className="api-desc">Shows the Accept and Reject options.</span> |

</details>

## Used in

Members of other types that take, return or hold a `FriendsRequestsPanel`:

<div className="api-used-in">

[`MainMenuVrLifetimeScope.friendsRequestsPanel`](/mod/game-api/types/assembly-other/mainmenuvrlifetimescope#m-friendsrequestspanel).

</div>
