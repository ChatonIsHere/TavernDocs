---
title: "OculusFriendsListPanel"
description: "class OculusFriendsListPanel in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OculusFriendsListPanel

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`PanelComponent`](/game-api/types/alta-menus/panelcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OculusFriendsListPanel()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> |  |
| <Link id="m-emptylisttext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" emptyListText"}</code> |  |
| <Link id="m-friendslist" /><code>{"private "}<Link to="/game-api/types/alta-menus/panelcomponent">{"PanelComponent"}</Link>{" friendsList"}</code> |  |
| <Link id="m-listelement" /><code>{"private "}<Link to="/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" listElement"}</code> |  |
| <Link id="m-oculusonlylistelement" /><code>{"private "}<Link to="/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" oculusOnlyListElement"}</code> |  |
| <Link id="m-uilist" /><code>{"private "}<Link to="/game-api/types/alta-menus/uilist">{"UIList"}</Link>{" uiList"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> |  |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> |  |
| <Link id="m-inviteoculususertobefriend" /><code>{"private async void InviteOculusUserToBeFriend("}<Link to="/game-api/types/alta-menus/friend">{"Friend"}</Link>{" oculusFriend)"}</code> |  |
| <Link id="m-invitetobefriend" /><code>{"private async void InviteToBeFriend("}<Link to="/game-api/types/assembly-api-models/inamedentity">{"INamedEntity"}</Link>{" friendship)"}</code> |  |
| <Link id="m-setupfriendslist" /><code>{"private async Task SetupFriendsList()"}</code> |  |
| <Link id="m-showoptionsforfriend" /><code>{"private void ShowOptionsForFriend("}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{" friendship)"}</code> |  |
| <Link id="m-showoptionsforoculusfriend" /><code>{"private void ShowOptionsForOculusFriend("}<Link to="/game-api/types/alta-menus/friend">{"Friend"}</Link>{" oculusFriend)"}</code> |  |

## Used in

Members of other types that take, return or hold a `OculusFriendsListPanel`:

[`MainMenuVrLifetimeScope.oculusFriendsListPanel`](/game-api/types/assembly-other/mainmenuvrlifetimescope#m-oculusfriendslistpanel).
