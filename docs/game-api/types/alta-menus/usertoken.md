---
title: "UserToken"
description: "class UserToken in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserToken

A **class** in `Root.Township`, `Alta.Meta.Friends`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UserToken()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-accept" /><code>{"private Action<"}<Link to="/game-api/types/alta-menus/usertoken">{"UserToken"}</Link>{"> accept"}</code> |  |
| <Link id="m-acceptbutton" /><code>{"private GameObject acceptButton"}</code> |  |
| <Link id="m-reject" /><code>{"private Action<"}<Link to="/game-api/types/alta-menus/usertoken">{"UserToken"}</Link>{"> reject"}</code> |  |
| <Link id="m-rejectbutton" /><code>{"private GameObject rejectButton"}</code> |  |
| <Link id="m-username" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" username"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-manager" /><code><Link to="/game-api/types/alta-menus/friendsmanager">{"FriendsManager"}</Link>{" Manager { get; private set; }"}</code> |  |
| <Link id="m-userinfo" /><code><Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"void Run(bool hasAccepted)"}</code> |  |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" userInfo, "}<Link to="/game-api/types/alta-menus/friendsmanager">{"FriendsManager"}</Link>{" manager, Action<"}<Link to="/game-api/types/alta-menus/usertoken">{"UserToken"}</Link>{"> accept, Action<"}<Link to="/game-api/types/alta-menus/usertoken">{"UserToken"}</Link>{"> reject)"}</code> |  |

## Used in

Members of other types that take, return or hold a `UserToken`:

[`FriendsManager.activeTokens`](/game-api/types/alta-menus/friendsmanager#m-activetokens), [`FriendsManager.AddFriend`](/game-api/types/alta-menus/friendsmanager#m-addfriend), [`FriendsManager.ConfigureTokenForTab`](/game-api/types/alta-menus/friendsmanager#m-configuretokenfortab), [`FriendsManager.JoinFriendServer`](/game-api/types/alta-menus/friendsmanager#m-joinfriendserver), [`FriendsManager.ReleaseToken`](/game-api/types/alta-menus/friendsmanager#m-releasetoken), [`FriendsManager.RemoveFriend`](/game-api/types/alta-menus/friendsmanager#m-removefriend), [`FriendsManager.tokenPool`](/game-api/types/alta-menus/friendsmanager#m-tokenpool), [`FriendsManager.userTokenPrefab`](/game-api/types/alta-menus/friendsmanager#m-usertokenprefab).
