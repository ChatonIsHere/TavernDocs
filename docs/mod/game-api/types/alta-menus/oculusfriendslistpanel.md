---
title: "OculusFriendsListPanel"
description: "Client panel meant to list Oculus friends and send them friend requests."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OculusFriendsListPanel

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

Client panel meant to list Oculus friends and send them friend requests. In this build `SetupFriendsList` is empty, so the list never fills.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`PanelComponent`](/mod/game-api/types/alta-menus/panelcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OculusFriendsListPanel()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | <span className="api-desc">Analytics service used for friend request events.</span> |
| <Link id="m-emptylisttext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" emptyListText"}</code> | <span className="api-desc">Text shown when the list is empty.</span> |
| <Link id="m-friendslist" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/panelcomponent">{"PanelComponent"}</Link>{" friendsList"}</code> | <span className="api-desc">Friends list panel, marked to reload after a request is sent.</span> |
| <Link id="m-listelement" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" listElement"}</code> | <span className="api-desc">Row prefab for friends who have an Alta account.</span> |
| <Link id="m-oculusonlylistelement" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" oculusOnlyListElement"}</code> | <span className="api-desc">Row prefab for Oculus-only friends.</span> |
| <Link id="m-uilist" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/uilist">{"UIList"}</Link>{" uiList"}</code> | <span className="api-desc">The list that holds the rows.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> | <span className="api-desc">VContainer injection point that supplies the analytics service.</span> |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> | <span className="api-desc">Calls `SetupFriendsList` behind a loading screen.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-inviteoculususertobefriend" /><code>{"private async void InviteOculusUserToBeFriend("}<Link to="/mod/game-api/types/alta-menus/friend">{"Friend"}</Link>{" oculusFriend)"}</code> | <span className="api-desc">Asks the API to add an Oculus friend as an Alta friend, then refreshes this list and the friends list.</span> |
| <Link id="m-invitetobefriend" /><code>{"private async void InviteToBeFriend("}<Link to="/mod/game-api/types/assembly-api-models/inamedentity">{"INamedEntity"}</Link>{" friendship)"}</code> | <span className="api-desc">Sends a friend request through `SocialService`, sends an analytics event and refreshes the lists.</span> |
| <Link id="m-setupfriendslist" /><code>{"private async Task SetupFriendsList()"}</code> | <span className="api-desc">Empty in this build.</span> |
| <Link id="m-showoptionsforfriend" /><code>{"private void ShowOptionsForFriend("}<Link to="/mod/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{" friendship)"}</code> | <span className="api-desc">Shows an Invite option that calls `InviteToBeFriend`.</span> |
| <Link id="m-showoptionsforoculusfriend" /><code>{"private void ShowOptionsForOculusFriend("}<Link to="/mod/game-api/types/alta-menus/friend">{"Friend"}</Link>{" oculusFriend)"}</code> | <span className="api-desc">Shows an Invite option that calls `InviteOculusUserToBeFriend`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `OculusFriendsListPanel`:

<div className="api-used-in">

[`MainMenuVrLifetimeScope.oculusFriendsListPanel`](/mod/game-api/types/assembly-other/mainmenuvrlifetimescope#m-oculusfriendslistpanel).

</div>
