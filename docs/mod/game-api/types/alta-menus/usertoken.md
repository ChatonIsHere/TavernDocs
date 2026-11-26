---
title: "UserToken"
description: "One user entry on the friends board, with optional accept and reject buttons."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserToken

A **class** in `Root.Township`, `Alta.Meta.Friends`.

One user entry on the friends board, with optional accept and reject buttons.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UserToken()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-accept" /><code>{"private Action<"}<Link to="/mod/game-api/types/alta-menus/usertoken">{"UserToken"}</Link>{"> accept"}</code> | Callback run when the player presses accept; the accept button only shows when it's set. |
| <Link id="m-acceptbutton" /><code>{"private GameObject acceptButton"}</code> | Accept button object, shown when an accept callback is given. |
| <Link id="m-reject" /><code>{"private Action<"}<Link to="/mod/game-api/types/alta-menus/usertoken">{"UserToken"}</Link>{"> reject"}</code> | Callback run when the player presses reject; the reject button only shows when it's set. |
| <Link id="m-rejectbutton" /><code>{"private GameObject rejectButton"}</code> | Reject button object, shown when a reject callback is given. |
| <Link id="m-username" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" username"}</code> | Text showing the user's name. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-manager" /><code><Link to="/mod/game-api/types/alta-menus/friendsmanager">{"FriendsManager"}</Link>{" Manager { get; private set; }"}</code> | The friends manager that owns it. |
| <Link id="m-userinfo" /><code><Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" "}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" { get; private set; }"}</code> | The user shown. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"void Run(bool hasAccepted)"}</code> | Runs the accept or reject action. |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" userInfo, "}<Link to="/mod/game-api/types/alta-menus/friendsmanager">{"FriendsManager"}</Link>{" manager, Action<"}<Link to="/mod/game-api/types/alta-menus/usertoken">{"UserToken"}</Link>{"> accept, Action<"}<Link to="/mod/game-api/types/alta-menus/usertoken">{"UserToken"}</Link>{"> reject)"}</code> | Sets the user, name text and actions. A button is hidden when its action is null. |

## Used in

Members of other types that take, return or hold a `UserToken`:

[`FriendsManager.activeTokens`](/mod/game-api/types/alta-menus/friendsmanager#m-activetokens), [`FriendsManager.AddFriend`](/mod/game-api/types/alta-menus/friendsmanager#m-addfriend), [`FriendsManager.ConfigureTokenForTab`](/mod/game-api/types/alta-menus/friendsmanager#m-configuretokenfortab), [`FriendsManager.JoinFriendServer`](/mod/game-api/types/alta-menus/friendsmanager#m-joinfriendserver), [`FriendsManager.ReleaseToken`](/mod/game-api/types/alta-menus/friendsmanager#m-releasetoken), [`FriendsManager.RemoveFriend`](/mod/game-api/types/alta-menus/friendsmanager#m-removefriend), [`FriendsManager.tokenPool`](/mod/game-api/types/alta-menus/friendsmanager#m-tokenpool), [`FriendsManager.userTokenPrefab`](/mod/game-api/types/alta-menus/friendsmanager#m-usertokenprefab).
