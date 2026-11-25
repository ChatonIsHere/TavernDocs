---
title: "UserInfoAccess"
description: "class UserInfoAccess in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserInfoAccess

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Derived types** [`UserList`](/game-api/types/global-t-x/userlist)
- **Attributes** `TypeConverter`
- **Documented in** [Arguments and results](/game-api/console-and-utilities/arguments-and-results)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UserInfoAccess(int userIdentifier)"}</code> |  |
| <Link id="m-ctor-2" /><code>{"UserInfoAccess(string username)"}</code> |  |
| <Link id="m-ctor-3" /><code>{"UserInfoAccess("}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" userInfo)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-hassearched" /><code>{"private bool hasSearched"}</code> |  |
| <Link id="m-idcache" /><code>{"private static Dictionary<int, "}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> idCache"}</code> |  |
| <Link id="m-isbyusername" /><code>{"private bool isByUsername"}</code> |  |
| <Link id="m-namecache" /><code>{"private static Dictionary<string, "}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> nameCache"}</code> |  |
| <Link id="m-useridentifier" /><code>{"private int userIdentifier"}</code> |  |
| <Link id="m-userinfo" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" userInfo"}</code> |  |
| <Link id="m-username" /><code>{"private string username"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-userinfo-2" /><code><Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" { get; }"}</code> |  |
| <Link id="m-doesuserexist" /><code>{"private bool DoesUserExist { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getidentifier" /><code>{"async Task<int> GetIdentifier()"}</code> |  |
| <Link id="m-getusername" /><code>{"async Task<string> GetUsername()"}</code> |  |
| <Link id="m-isvalid" /><code>{"async Task<bool> IsValid()"}</code> |  |
| <Link id="m-providedargument" /><code>{"string ProvidedArgument()"}</code> |  |
| <Link id="m-addtocache" /><code>{"private void AddToCache()"}</code> |  |
| <Link id="m-searchforuserasync" /><code>{"private async Task SearchForUserAsync()"}</code> |  |

## Used in

Members of other types that take, return or hold a `UserInfoAccess`:

[`GameCommandModule.ConnectToPlayer`](/game-api/types/alta-console/gamecommandmodule#m-connecttoplayer), [`SavingCommandModule.WipePlayer`](/game-api/types/alta-console/savingcommandmodule#m-wipeplayer), [`SocialCommandModule.AddFriend`](/game-api/types/alta-console/socialcommandmodule#m-addfriend), [`SocialCommandModule.ListFriends`](/game-api/types/alta-console/socialcommandmodule#m-listfriends), [`SocialCommandModule.RemoveFriend`](/game-api/types/alta-console/socialcommandmodule#m-removefriend), [`TradeCommandModule.GetContent`](/game-api/types/alta-console/tradecommandmodule#m-getcontent), [`TradeCommandModule.PostBox`](/game-api/types/alta-console/tradecommandmodule#m-postbox), [`TradeCommandModule.PostBoxString`](/game-api/types/alta-console/tradecommandmodule#m-postboxstring), [`TradeCommandModule.ATMCommandModule.AddATM`](/game-api/types/alta-console/tradecommandmodule-atmcommandmodule#m-addatm), [`TradeCommandModule.ATMCommandModule.GetATM`](/game-api/types/alta-console/tradecommandmodule-atmcommandmodule#m-getatm), [`TradeCommandModule.ATMCommandModule.SetATM`](/game-api/types/alta-console/tradecommandmodule-atmcommandmodule#m-setatm), [`UsersCommandModule.LoginAsync`](/game-api/types/alta-console/userscommandmodule#m-loginasync), [`WackyCommandModule.CleanPlayerBody`](/game-api/types/alta-console/wackycommandmodule#m-cleanplayerbody), [`WackyCommandModule.CleanPlayerState`](/game-api/types/alta-console/wackycommandmodule#m-cleanplayerstate), [`LeaderboardManager.RankedPlayer.UserInfo`](/game-api/types/global-i-l/leaderboardmanager-rankedplayer#m-userinfo), [`TradeCommandModule.GetContent`](/game-api/types/global-t-x/tradecommandmodule#m-getcontent), [`TradeCommandModule.PostBox`](/game-api/types/global-t-x/tradecommandmodule#m-postbox), [`TradeCommandModule.PostBoxString`](/game-api/types/global-t-x/tradecommandmodule#m-postboxstring), [`TradeCommandModule.ATMCommandModule.AddATM`](/game-api/types/global-t-x/tradecommandmodule-atmcommandmodule#m-addatm), [`TradeCommandModule.ATMCommandModule.GetATM`](/game-api/types/global-t-x/tradecommandmodule-atmcommandmodule#m-getatm), [`TradeCommandModule.ATMCommandModule.SetATM`](/game-api/types/global-t-x/tradecommandmodule-atmcommandmodule#m-setatm), [`UserList.GetEnumerator`](/game-api/types/global-t-x/userlist#m-getenumerator), [`UserList.LastList`](/game-api/types/global-t-x/userlist#m-lastlist), [`UserList.players`](/game-api/types/global-t-x/userlist#m-players), [`UserList.UserList`](/game-api/types/global-t-x/userlist#m-ctor).
