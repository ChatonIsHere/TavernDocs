---
title: "ServerPlayerConnectionHandlerOld.PlayerJoinResult"
description: "Server: the outcome of checking whether a player may join, either their user info and role or a denial message."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerPlayerConnectionHandlerOld.PlayerJoinResult

A **protected struct** in `Root.Township`, `Alta.Networking.Servers`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Server: the outcome of checking whether a player may join, either their user info and role or a denial message. Made with the two static helpers.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Nested in** [`ServerPlayerConnectionHandlerOld`](/mod/game-api/types/alta-networking/serverplayerconnectionhandlerold)

## Constructors

<details className="api-private">
<summary>2 private and internal constructors</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"private PlayerJoinResult("}<Link to="/mod/game-api/types/global-t-x/userinfoandrole">{"UserInfoAndRole"}</Link>{" userInfo)"}</code> | <span className="api-desc">Creates a `ServerPlayerConnectionHandlerOld.PlayerJoinResult` from `error`.</span> |
| <Link id="m-ctor-2" /><code>{"private PlayerJoinResult(string error)"}</code> | <span className="api-desc">Creates a `ServerPlayerConnectionHandlerOld.PlayerJoinResult` from `error`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-error" /><code>{"string Error { get; private set; }"}</code> | <span className="api-desc">Why the join was denied. Null on success.</span> |
| <Link id="m-issuccessful" /><code>{"bool IsSuccessful { get; private set; }"}</code> | <span className="api-desc">Whether the player is allowed to join.</span> |
| <Link id="m-userinfo" /><code><Link to="/mod/game-api/types/global-t-x/userinfoandrole">{"UserInfoAndRole"}</Link>{" UserInfo { get; set; }"}</code> | <span className="api-desc">The joining player's user info and role. Only set on success.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createdeniedresult" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/serverplayerconnectionhandlerold-playerjoinresult">{"ServerPlayerConnectionHandlerOld.PlayerJoinResult"}</Link>{" CreateDeniedResult(string error)"}</code> | <span className="api-desc">Makes a failed result with the given error message.</span> |
| <Link id="m-createsuccessresult" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/serverplayerconnectionhandlerold-playerjoinresult">{"ServerPlayerConnectionHandlerOld.PlayerJoinResult"}</Link>{" CreateSuccessResult("}<Link to="/mod/game-api/types/global-t-x/userinfoandrole">{"UserInfoAndRole"}</Link>{" userInfo)"}</code> | <span className="api-desc">Makes a successful result holding the player's user info and role.</span> |

## Used in

Members of other types that take, return or hold a `PlayerJoinResult`:

<div className="api-used-in">

[`ServerPlayerConnectionHandlerOld.CheckIfPlayerIsAllowed`](/mod/game-api/types/alta-networking/serverplayerconnectionhandlerold#m-checkifplayerisallowed), [`ServerPlayerConnectionHandlerOld.CheckIfPlayerIsAllowedCustom`](/mod/game-api/types/alta-networking/serverplayerconnectionhandlerold#m-checkifplayerisallowedcustom).

</div>
