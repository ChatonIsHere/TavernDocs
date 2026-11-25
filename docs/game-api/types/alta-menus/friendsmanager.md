---
title: "FriendsManager"
description: "Main menu friends board: lists friends or friend requests from the Alta API as user tokens on a rope board."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FriendsManager

A **class** in `Root.Township`, `Alta.Meta.Friends`.

Main menu friends board: lists friends or friend requests from the Alta API as user tokens on a rope board. Client side.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`LoggedInTool`](/game-api/types/global-i-l/loggedintool)
- **Nested types** [`Tab`](/game-api/types/alta-menus/friendsmanager-tab)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FriendsManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activetokens" /><code>{"private readonly List<"}<Link to="/game-api/types/alta-menus/usertoken">{"UserToken"}</Link>{"> activeTokens"}</code> |  |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> |  |
| <Link id="m-currenttab" /><code>{"private "}<Link to="/game-api/types/alta-menus/friendsmanager-tab">{"FriendsManager.Tab"}</Link>{" currentTab"}</code> |  |
| <Link id="m-displayboard" /><code>{"private "}<Link to="/game-api/types/global-q-r/ropepoweredelementboard">{"RopePoweredElementBoard"}</Link>{" displayBoard"}</code> |  |
| <Link id="m-friendships" /><code>{"private readonly Dictionary<int, "}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{"> friendships"}</code> |  |
| <Link id="m-friendshipsrequests" /><code>{"private readonly List<"}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{"> friendshipsRequests"}</code> |  |
| <Link id="m-isprocessing" /><code>{"private bool isProcessing"}</code> |  |
| <Link id="m-tokenpool" /><code>{"private readonly Stack<"}<Link to="/game-api/types/alta-menus/usertoken">{"UserToken"}</Link>{"> tokenPool"}</code> |  |
| <Link id="m-usertokenprefab" /><code>{"private "}<Link to="/game-api/types/alta-menus/usertoken">{"UserToken"}</Link>{" userTokenPrefab"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-friendships-2" /><code>{"private IEnumerable<"}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{"> Friendships { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addfriend" /><code>{"async void AddFriend("}<Link to="/game-api/types/alta-menus/usertoken">{"UserToken"}</Link>{" token)"}</code> | Sends or accepts a friend request and removes the token. Leaves `isProcessing` set, so later add and remove clicks do nothing. |
| <Link id="m-changetab" /><code>{"void ChangeTab(int index)"}</code> | Switches between the friends, requests and Oculus tabs and redraws the board. The Oculus tab always shows nothing. |
| <Link id="m-changetab-2" /><code>{"void ChangeTab("}<Link to="/game-api/types/alta-menus/friendsmanager-tab">{"FriendsManager.Tab"}</Link>{" tab)"}</code> | Switches between the friends, requests and Oculus tabs and redraws the board. The Oculus tab always shows nothing. |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> | Receives the analytics service by dependency injection. |
| <Link id="m-joinfriendserver" /><code>{"void JoinFriendServer("}<Link to="/game-api/types/alta-menus/usertoken">{"UserToken"}</Link>{" token)"}</code> | Empty in this build; does nothing. |
| <Link id="m-removefriend" /><code>{"async void RemoveFriend("}<Link to="/game-api/types/alta-menus/usertoken">{"UserToken"}</Link>{" token)"}</code> | Removes the friendship through the API and removes the token. The list refresh is skipped, since `isProcessing` is already set. |
| <Link id="m-configuretokenfortab" /><code>{"private void ConfigureTokenForTab("}<Link to="/game-api/types/alta-menus/usertoken">{"UserToken"}</Link>{" token, "}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" user)"}</code> |  |
| <Link id="m-displayuser" /><code>{"private void DisplayUser("}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" user)"}</code> |  |
| <Link id="m-getuserinfotodisplay" /><code>{"private IEnumerable<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> GetUserInfoToDisplay()"}</code> |  |
| <Link id="m-loggedin" /><code>{"protected override async void LoggedIn()"}</code> | Loads friends and requests and shows the friends tab. |
| <Link id="m-loggedout" /><code>{"protected override void LoggedOut()"}</code> | Clears the friends list. |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | Destroys all user tokens, shown and pooled. |
| <Link id="m-releasetoken" /><code>{"private void ReleaseToken("}<Link to="/game-api/types/alta-menus/usertoken">{"UserToken"}</Link>{" token)"}</code> |  |
| <Link id="m-resetdisplay" /><code>{"private void ResetDisplay()"}</code> |  |
| <Link id="m-updatedisplay" /><code>{"private void UpdateDisplay()"}</code> |  |
| <Link id="m-updatefriends" /><code>{"private async Task UpdateFriends()"}</code> |  |

## Used in

Members of other types that take, return or hold a `FriendsManager`:

[`UserToken.Manager`](/game-api/types/alta-menus/usertoken#m-manager), [`UserToken.Setup`](/game-api/types/alta-menus/usertoken#m-setup), [`ServersManager.friendsManager`](/game-api/types/alta-networking/serversmanager#m-friendsmanager).
