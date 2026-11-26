---
title: "UserInfoAccess"
description: "A user given by id or username, looked up through Alta's web API on first use and cached."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserInfoAccess

A **class** in `Root.Township`, the global namespace.

A user given by id or username, looked up through Alta's web API on first use and cached. Console commands use it for user arguments. The API is gone, so lookups wait for the timeout unless a mod answers them.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Derived types** [`UserList`](/mod/game-api/types/global-t-x/userlist)
- **Attributes** `TypeConverter`
- **Documented in** [Arguments and results](/mod/game-api/console-and-utilities/arguments-and-results)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UserInfoAccess(int userIdentifier)"}</code> | Creates an `UserInfoAccess` from `userInfo`. |
| <Link id="m-ctor-2" /><code>{"UserInfoAccess(string username)"}</code> | Creates an `UserInfoAccess` from `userInfo`. |
| <Link id="m-ctor-3" /><code>{"UserInfoAccess("}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" userInfo)"}</code> | Creates an `UserInfoAccess` from `userInfo`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hassearched" /><code>{"private bool hasSearched"}</code> | True once a lookup has run, so later calls use the result. |
| <Link id="m-idcache" /><code>{"private static Dictionary<int, "}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> idCache"}</code> | Static cache of looked-up users by ID, shared by all instances. |
| <Link id="m-isbyusername" /><code>{"private bool isByUsername"}</code> | True when made from a username rather than an ID. |
| <Link id="m-namecache" /><code>{"private static Dictionary<string, "}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> nameCache"}</code> | Static cache of looked-up users by lower-case username. |
| <Link id="m-useridentifier" /><code>{"private int userIdentifier"}</code> | The user ID this access was made with, or the found user's ID. |
| <Link id="m-userinfo" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" userInfo"}</code> | Backing field for `UserInfo`. Null until a lookup finds the user. |
| <Link id="m-username" /><code>{"private string username"}</code> | Lower-cased username this access was made with. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-userinfo-2" /><code><Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" "}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" { get; }"}</code> | The user info, or null before the lookup or if not found. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-doesuserexist" /><code>{"private bool DoesUserExist { get; }"}</code> | True once a lookup found a user. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getidentifier" /><code>{"async Task<int> GetIdentifier()"}</code> | The user's id, looking it up if needed. -1 if not found. |
| <Link id="m-getusername" /><code>{"async Task<string> GetUsername()"}</code> | The user's name, looking it up if needed. Empty if not found. |
| <Link id="m-isvalid" /><code>{"async Task<bool> IsValid()"}</code> | Looks up the user if needed and returns whether they exist. |
| <Link id="m-providedargument" /><code>{"string ProvidedArgument()"}</code> | The id or lowercased username it was made from. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addtocache" /><code>{"private void AddToCache()"}</code> | Stores the found user in both the name and the ID cache. Probably throws if no user was found. |
| <Link id="m-searchforuserasync" /><code>{"private async Task SearchForUserAsync()"}</code> | Looks the user up by name or ID, from the static cache or else the Alta web API. |

</details>

## Used in

Members of other types that take, return or hold a `UserInfoAccess`:

[`GameCommandModule.ConnectToPlayer`](/mod/game-api/types/alta-console/gamecommandmodule#m-connecttoplayer), [`SavingCommandModule.WipePlayer`](/mod/game-api/types/alta-console/savingcommandmodule#m-wipeplayer), [`SocialCommandModule.AddFriend`](/mod/game-api/types/alta-console/socialcommandmodule#m-addfriend), [`SocialCommandModule.ListFriends`](/mod/game-api/types/alta-console/socialcommandmodule#m-listfriends), [`SocialCommandModule.RemoveFriend`](/mod/game-api/types/alta-console/socialcommandmodule#m-removefriend), [`TradeCommandModule.GetContent`](/mod/game-api/types/alta-console/tradecommandmodule#m-getcontent), [`TradeCommandModule.PostBox`](/mod/game-api/types/alta-console/tradecommandmodule#m-postbox), [`TradeCommandModule.PostBoxString`](/mod/game-api/types/alta-console/tradecommandmodule#m-postboxstring), [`TradeCommandModule.ATMCommandModule.AddATM`](/mod/game-api/types/alta-console/tradecommandmodule-atmcommandmodule#m-addatm), [`TradeCommandModule.ATMCommandModule.GetATM`](/mod/game-api/types/alta-console/tradecommandmodule-atmcommandmodule#m-getatm), [`TradeCommandModule.ATMCommandModule.SetATM`](/mod/game-api/types/alta-console/tradecommandmodule-atmcommandmodule#m-setatm), [`UsersCommandModule.LoginAsync`](/mod/game-api/types/alta-console/userscommandmodule#m-loginasync), [`WackyCommandModule.CleanPlayerBody`](/mod/game-api/types/alta-console/wackycommandmodule#m-cleanplayerbody), [`WackyCommandModule.CleanPlayerState`](/mod/game-api/types/alta-console/wackycommandmodule#m-cleanplayerstate), [`LeaderboardManager.RankedPlayer.UserInfo`](/mod/game-api/types/global-i-l/leaderboardmanager-rankedplayer#m-userinfo), [`TradeCommandModule.GetContent`](/mod/game-api/types/global-t-x/tradecommandmodule#m-getcontent), [`TradeCommandModule.PostBox`](/mod/game-api/types/global-t-x/tradecommandmodule#m-postbox), [`TradeCommandModule.PostBoxString`](/mod/game-api/types/global-t-x/tradecommandmodule#m-postboxstring), [`TradeCommandModule.ATMCommandModule.AddATM`](/mod/game-api/types/global-t-x/tradecommandmodule-atmcommandmodule#m-addatm), [`TradeCommandModule.ATMCommandModule.GetATM`](/mod/game-api/types/global-t-x/tradecommandmodule-atmcommandmodule#m-getatm), [`TradeCommandModule.ATMCommandModule.SetATM`](/mod/game-api/types/global-t-x/tradecommandmodule-atmcommandmodule#m-setatm), [`UserList.GetEnumerator`](/mod/game-api/types/global-t-x/userlist#m-getenumerator), [`UserList.LastList`](/mod/game-api/types/global-t-x/userlist#m-lastlist), [`UserList.players`](/mod/game-api/types/global-t-x/userlist#m-players), [`UserList.UserList`](/mod/game-api/types/global-t-x/userlist#m-ctor).
