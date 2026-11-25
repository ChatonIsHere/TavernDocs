---
title: "FriendsInvitesPanel"
description: "class FriendsInvitesPanel in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FriendsInvitesPanel

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`PanelComponent`](/game-api/types/alta-menus/panelcomponent)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FriendsInvitesPanel()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> |
| <Link id="m-emptylisttext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" emptyListText"}</code> |
| <Link id="m-listelement" /><code>{"private "}<Link to="/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" listElement"}</code> |
| <Link id="m-uilist" /><code>{"private "}<Link to="/game-api/types/alta-menus/uilist">{"UIList"}</Link>{" uiList"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-revoke" /><code>{"private async void Revoke("}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{" friendship)"}</code> |
| <Link id="m-setupfriendslist" /><code>{"private async Task SetupFriendsList()"}</code> |
| <Link id="m-showoptionsforfriend" /><code>{"private void ShowOptionsForFriend("}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{" friendship)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `FriendsInvitesPanel`:

[`MainMenuVrLifetimeScope.friendsInvitesPanel`](/game-api/types/assembly-other/mainmenuvrlifetimescope#m-friendsinvitespanel).
