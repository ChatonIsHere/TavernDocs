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

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`LoggedInTool`](/mod/game-api/types/global-i-l/loggedintool)
- **Nested types** [`Tab`](/mod/game-api/types/alta-menus/friendsmanager-tab)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FriendsManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activetokens" /><code>{"private readonly List<"}<Link to="/mod/game-api/types/alta-menus/usertoken">{"UserToken"}</Link>{"> activeTokens"}</code> | <span className="api-desc">User tokens currently on the board.</span> |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | <span className="api-desc">Analytics service, injected, used to log friend request responses.</span> |
| <Link id="m-currenttab" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/friendsmanager-tab">{"FriendsManager.Tab"}</Link>{" currentTab"}</code> | <span className="api-desc">The tab being shown. Set to friends on log in.</span> |
| <Link id="m-displayboard" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/ropepoweredelementboard">{"RopePoweredElementBoard"}</Link>{" displayBoard"}</code> | <span className="api-desc">Rope-powered board the user tokens are laid out on.</span> |
| <Link id="m-friendships" /><code>{"private readonly Dictionary<int, "}<Link to="/mod/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{"> friendships"}</code> | <span className="api-desc">Accepted friendships keyed by friendship id. Cleared on log out.</span> |
| <Link id="m-friendshipsrequests" /><code>{"private readonly List<"}<Link to="/mod/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{"> friendshipsRequests"}</code> | <span className="api-desc">Pending friend requests from the last fetch.</span> |
| <Link id="m-isprocessing" /><code>{"private bool isProcessing"}</code> | <span className="api-desc">Busy flag for API calls. `AddFriend` leaves it set to true, so after one add the manager ignores further actions.</span> |
| <Link id="m-tokenpool" /><code>{"private readonly Stack<"}<Link to="/mod/game-api/types/alta-menus/usertoken">{"UserToken"}</Link>{"> tokenPool"}</code> | <span className="api-desc">Hidden user tokens kept for reuse.</span> |
| <Link id="m-usertokenprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/usertoken">{"UserToken"}</Link>{" userTokenPrefab"}</code> | <span className="api-desc">Prefab for one user entry on the board.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-friendships-2" /><code>{"private IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{"> Friendships { get; }"}</code> | <span className="api-desc">Accepted friendships from the last fetch.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addfriend" /><code>{"async void AddFriend("}<Link to="/mod/game-api/types/alta-menus/usertoken">{"UserToken"}</Link>{" token)"}</code> | <span className="api-desc">Sends or accepts a friend request and removes the token. Leaves `isProcessing` set, so later add and remove clicks do nothing.</span> |
| <Link id="m-changetab" /><code>{"void ChangeTab(int index)"}</code> | <span className="api-desc">Switches between the friends, requests and Oculus tabs and redraws the board. The Oculus tab always shows nothing.</span> |
| <Link id="m-changetab-2" /><code>{"void ChangeTab("}<Link to="/mod/game-api/types/alta-menus/friendsmanager-tab">{"FriendsManager.Tab"}</Link>{" tab)"}</code> | <span className="api-desc">Switches between the friends, requests and Oculus tabs and redraws the board. The Oculus tab always shows nothing.</span> |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> | <span className="api-desc">Receives the analytics service by dependency injection.</span> |
| <Link id="m-joinfriendserver" /><code>{"void JoinFriendServer("}<Link to="/mod/game-api/types/alta-menus/usertoken">{"UserToken"}</Link>{" token)"}</code> | <span className="api-desc">Empty in this build; does nothing.</span> |
| <Link id="m-removefriend" /><code>{"async void RemoveFriend("}<Link to="/mod/game-api/types/alta-menus/usertoken">{"UserToken"}</Link>{" token)"}</code> | <span className="api-desc">Removes the friendship through the API and removes the token. The list refresh is skipped, since `isProcessing` is already set.</span> |
| <Link id="m-loggedin" /><code>{"protected override async void LoggedIn()"}</code> | <span className="api-desc">Loads friends and requests and shows the friends tab.</span> |
| <Link id="m-loggedout" /><code>{"protected override void LoggedOut()"}</code> | <span className="api-desc">Clears the friends list.</span> |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | <span className="api-desc">Destroys all user tokens, shown and pooled.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-configuretokenfortab" /><code>{"private void ConfigureTokenForTab("}<Link to="/mod/game-api/types/alta-menus/usertoken">{"UserToken"}</Link>{" token, "}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" user)"}</code> | <span className="api-desc">Sets a user token's buttons for the current tab: join (which does nothing) and remove for friends, accept and decline for requests, add only for Oculus.</span> |
| <Link id="m-displayuser" /><code>{"private void DisplayUser("}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" user)"}</code> | <span className="api-desc">Takes a token from the pool (or makes one), sets it up for the user and adds it to the board.</span> |
| <Link id="m-getuserinfotodisplay" /><code>{"private IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> GetUserInfoToDisplay()"}</code> | <span className="api-desc">Users for the current tab, sorted by username. The Oculus tab always comes back empty.</span> |
| <Link id="m-releasetoken" /><code>{"private void ReleaseToken("}<Link to="/mod/game-api/types/alta-menus/usertoken">{"UserToken"}</Link>{" token)"}</code> | <span className="api-desc">Hides a token, returns it to the pool and removes it from the board.</span> |
| <Link id="m-resetdisplay" /><code>{"private void ResetDisplay()"}</code> | <span className="api-desc">Returns every shown token to the pool and clears the board.</span> |
| <Link id="m-updatedisplay" /><code>{"private void UpdateDisplay()"}</code> | <span className="api-desc">Rebuilds the board from the current tab's users and scrolls it back to the start.</span> |
| <Link id="m-updatefriends" /><code>{"private async Task UpdateFriends()"}</code> | <span className="api-desc">Fetches friends and friend requests from the social API. Does nothing while `isProcessing` is set, which it is when `AddFriend` and `RemoveFriend` call it.</span> |

</details>

## Used in

Members of other types that take, return or hold a `FriendsManager`:

<div className="api-used-in">

[`UserToken.Manager`](/mod/game-api/types/alta-menus/usertoken#m-manager), [`UserToken.Setup`](/mod/game-api/types/alta-menus/usertoken#m-setup), [`ServersManager.friendsManager`](/mod/game-api/types/alta-networking/serversmanager#m-friendsmanager).

</div>
