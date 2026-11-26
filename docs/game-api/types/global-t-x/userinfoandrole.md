---
title: "UserInfoAndRole"
description: "A user's info plus their member status, worked out from their roles (developer, moderator, member)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserInfoAndRole

A **class** in `Root.Township`, no namespace.

A user's info plus their member status, worked out from their roles (developer, moderator, member).

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Documented in** [Player](/game-api/networking/player#userinfoandrole)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UserInfoAndRole("}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" userInfo, "}<Link to="/game-api/types/assembly-api-models/userroles">{"UserRoles"}</Link>{" userRoles)"}</code> | Creates an `UserInfoAndRole` from `userInfo` and `memberStatus`. |
| <Link id="m-ctor-2" /><code>{"UserInfoAndRole("}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" userInfo, "}<Link to="/game-api/types/assembly-other/playersubscriberstatus">{"PlayerSubscriberStatus"}</Link>{" memberStatus)"}</code> | Creates an `UserInfoAndRole` from `userInfo` and `memberStatus`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"int Identifier { get; }"}</code> | The user's id. |
| <Link id="m-issubscriber" /><code>{"bool IsSubscriber { get; }"}</code> | True for subscribers, developers and moderators. |
| <Link id="m-memberstatus" /><code><Link to="/game-api/types/assembly-other/playersubscriberstatus">{"PlayerSubscriberStatus"}</Link>{" MemberStatus { get; }"}</code> | Developer, AltaMod, Subscriber or None. |
| <Link id="m-userinfo" /><code><Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" { get; }"}</code> | The user's info. |
| <Link id="m-username" /><code>{"string Username { get; }"}</code> | The user's name. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | The user info's text. |

## Used in

Members of other types that take, return or hold a `UserInfoAndRole`:

[`Connection.UserInfo`](/game-api/types/alta-networking/connection#m-userinfo), [`IPlayer.UserInfo`](/game-api/types/alta-networking/iplayer#m-userinfo), [`ServerPlayerConnectionHandlerOld.PlayerJoinResult.CreateSuccessResult`](/game-api/types/alta-networking/serverplayerconnectionhandlerold-playerjoinresult#m-createsuccessresult), [`ServerPlayerConnectionHandlerOld.PlayerJoinResult.PlayerJoinResult`](/game-api/types/alta-networking/serverplayerconnectionhandlerold-playerjoinresult#m-ctor), [`ServerPlayerConnectionHandlerOld.PlayerJoinResult.UserInfo`](/game-api/types/alta-networking/serverplayerconnectionhandlerold-playerjoinresult#m-userinfo), [`Player.UserInfo`](/game-api/types/global-p/player#m-userinfo).
