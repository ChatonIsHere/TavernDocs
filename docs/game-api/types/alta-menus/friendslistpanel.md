---
title: "FriendsListPanel"
description: "class FriendsListPanel in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FriendsListPanel

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`PanelComponent`](/game-api/types/alta-menus/panelcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FriendsListPanel()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> |  |
| <Link id="m-emptylisttext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" emptyListText"}</code> |  |
| <Link id="m-friendinvitespanel" /><code>{"private "}<Link to="/game-api/types/alta-menus/panelcomponent">{"PanelComponent"}</Link>{" friendInvitesPanel"}</code> |  |
| <Link id="m-friendsearch" /><code>{"private "}<Link to="/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" friendSearch"}</code> |  |
| <Link id="m-invitewindow" /><code>{"private "}<Link to="/game-api/types/alta-menus/inviteusertogrouppanel">{"InviteUserToGroupPanel"}</Link>{" inviteWindow"}</code> |  |
| <Link id="m-listelement" /><code>{"private "}<Link to="/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" listElement"}</code> |  |
| <Link id="m-uilist" /><code>{"private "}<Link to="/game-api/types/alta-menus/uilist">{"UIList"}</Link>{" uiList"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> |  |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> |  |
| <Link id="m-addfriend" /><code>{"private async void AddFriend("}<Link to="/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" obj)"}</code> |  |
| <Link id="m-addfriend-2" /><code>{"private async Task AddFriend(string username)"}</code> |  |
| <Link id="m-handlestatechange" /><code>{"protected override void HandleStateChange("}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> |  |
| <Link id="m-removefriend" /><code>{"private async void RemoveFriend("}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{" friendship)"}</code> |  |
| <Link id="m-setupfriendslist" /><code>{"private async Task SetupFriendsList()"}</code> |  |
| <Link id="m-showinvitewindow" /><code>{"private void ShowInviteWindow("}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{" friendship)"}</code> |  |
| <Link id="m-showoptionsforfriend" /><code>{"private void ShowOptionsForFriend("}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{" friendship)"}</code> |  |

## Used in

Members of other types that take, return or hold a `FriendsListPanel`:

[`MainMenuVrLifetimeScope.friendsListPanel`](/game-api/types/assembly-other/mainmenuvrlifetimescope#m-friendslistpanel).
