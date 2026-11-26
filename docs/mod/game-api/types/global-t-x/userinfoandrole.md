---
title: "UserInfoAndRole"
description: "A user's info plus their member status, worked out from their roles (developer, moderator, member)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserInfoAndRole

A **class** in `Root.Township`, the global namespace.

A user's info plus their member status, worked out from their roles (developer, moderator, member).

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Documented in** [Player](/mod/game-api/networking/player#userinfoandrole)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UserInfoAndRole("}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" userInfo, "}<Link to="/mod/game-api/types/assembly-api-models/userroles">{"UserRoles"}</Link>{" userRoles)"}</code> | Creates an `UserInfoAndRole` from `userInfo` and `memberStatus`. |
| <Link id="m-ctor-2" /><code>{"UserInfoAndRole("}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" userInfo, "}<Link to="/mod/game-api/types/assembly-other/playersubscriberstatus">{"PlayerSubscriberStatus"}</Link>{" memberStatus)"}</code> | Creates an `UserInfoAndRole` from `userInfo` and `memberStatus`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"int Identifier { get; }"}</code> | The user's id. |
| <Link id="m-issubscriber" /><code>{"bool IsSubscriber { get; }"}</code> | True for subscribers, developers and moderators. |
| <Link id="m-memberstatus" /><code><Link to="/mod/game-api/types/assembly-other/playersubscriberstatus">{"PlayerSubscriberStatus"}</Link>{" MemberStatus { get; }"}</code> | Developer, AltaMod, Subscriber or None. |
| <Link id="m-userinfo" /><code><Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" "}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" { get; }"}</code> | The user's info. |
| <Link id="m-username" /><code>{"string Username { get; }"}</code> | The user's name. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | The user info's text. |

## Used in

Members of other types that take, return or hold a `UserInfoAndRole`:

[`Connection.UserInfo`](/mod/game-api/types/alta-networking/connection#m-userinfo), [`IPlayer.UserInfo`](/mod/game-api/types/alta-networking/iplayer#m-userinfo), [`ServerPlayerConnectionHandlerOld.PlayerJoinResult.CreateSuccessResult`](/mod/game-api/types/alta-networking/serverplayerconnectionhandlerold-playerjoinresult#m-createsuccessresult), [`ServerPlayerConnectionHandlerOld.PlayerJoinResult.PlayerJoinResult`](/mod/game-api/types/alta-networking/serverplayerconnectionhandlerold-playerjoinresult#m-ctor), [`ServerPlayerConnectionHandlerOld.PlayerJoinResult.UserInfo`](/mod/game-api/types/alta-networking/serverplayerconnectionhandlerold-playerjoinresult#m-userinfo), [`Player.UserInfo`](/mod/game-api/types/global-p/player#m-userinfo).
