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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`PanelComponent`](/game-api/types/alta-menus/panelcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OculusFriendsListPanel()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | Analytics service used for friend request events. |
| <Link id="m-emptylisttext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" emptyListText"}</code> | Text shown when the list is empty. |
| <Link id="m-friendslist" /><code>{"private "}<Link to="/game-api/types/alta-menus/panelcomponent">{"PanelComponent"}</Link>{" friendsList"}</code> | Friends list panel, marked to reload after a request is sent. |
| <Link id="m-listelement" /><code>{"private "}<Link to="/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" listElement"}</code> | Row prefab for friends who have an Alta account. |
| <Link id="m-oculusonlylistelement" /><code>{"private "}<Link to="/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" oculusOnlyListElement"}</code> | Row prefab for Oculus-only friends. |
| <Link id="m-uilist" /><code>{"private "}<Link to="/game-api/types/alta-menus/uilist">{"UIList"}</Link>{" uiList"}</code> | The list that holds the rows. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> | VContainer injection point that supplies the analytics service. |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> | Calls `SetupFriendsList` behind a loading screen. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-inviteoculususertobefriend" /><code>{"private async void InviteOculusUserToBeFriend("}<Link to="/game-api/types/alta-menus/friend">{"Friend"}</Link>{" oculusFriend)"}</code> | Asks the API to add an Oculus friend as an Alta friend, then refreshes this list and the friends list. |
| <Link id="m-invitetobefriend" /><code>{"private async void InviteToBeFriend("}<Link to="/game-api/types/assembly-api-models/inamedentity">{"INamedEntity"}</Link>{" friendship)"}</code> | Sends a friend request through `SocialService`, sends an analytics event and refreshes the lists. |
| <Link id="m-setupfriendslist" /><code>{"private async Task SetupFriendsList()"}</code> | Empty in this build. |
| <Link id="m-showoptionsforfriend" /><code>{"private void ShowOptionsForFriend("}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{" friendship)"}</code> | Shows an Invite option that calls `InviteToBeFriend`. |
| <Link id="m-showoptionsforoculusfriend" /><code>{"private void ShowOptionsForOculusFriend("}<Link to="/game-api/types/alta-menus/friend">{"Friend"}</Link>{" oculusFriend)"}</code> | Shows an Invite option that calls `InviteOculusUserToBeFriend`. |

</details>

## Used in

Members of other types that take, return or hold a `OculusFriendsListPanel`:

[`MainMenuVrLifetimeScope.oculusFriendsListPanel`](/game-api/types/assembly-other/mainmenuvrlifetimescope#m-oculusfriendslistpanel).
