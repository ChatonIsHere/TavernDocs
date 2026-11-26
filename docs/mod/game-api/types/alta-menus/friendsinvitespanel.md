---
title: "FriendsInvitesPanel"
description: "Main menu list of friend requests you have sent, with an option to revoke each one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FriendsInvitesPanel

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

Main menu list of friend requests you have sent, with an option to revoke each one.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`PanelComponent`](/mod/game-api/types/alta-menus/panelcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FriendsInvitesPanel()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | Analytics service for social events. |
| <Link id="m-emptylisttext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" emptyListText"}</code> | Text shown when there are no requests. |
| <Link id="m-listelement" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" listElement"}</code> | Row prefab. |
| <Link id="m-uilist" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/uilist">{"UIList"}</Link>{" uiList"}</code> | The list the rows go in. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> | Receives the analytics service. |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> | Reloads the list behind a loading screen. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-revoke" /><code>{"private async void Revoke("}<Link to="/mod/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{" friendship)"}</code> | Removes a sent request, logs analytics and reloads. |
| <Link id="m-setupfriendslist" /><code>{"private async Task SetupFriendsList()"}</code> | Fetches sent requests from the web API and builds a row for each. |
| <Link id="m-showoptionsforfriend" /><code>{"private void ShowOptionsForFriend("}<Link to="/mod/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{" friendship)"}</code> | Shows the Revoke option for a request. |

</details>

## Used in

Members of other types that take, return or hold a `FriendsInvitesPanel`:

[`MainMenuVrLifetimeScope.friendsInvitesPanel`](/mod/game-api/types/assembly-other/mainmenuvrlifetimescope#m-friendsinvitespanel).
