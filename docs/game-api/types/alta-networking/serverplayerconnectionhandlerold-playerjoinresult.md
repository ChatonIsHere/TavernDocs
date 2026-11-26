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

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Nested in** [`ServerPlayerConnectionHandlerOld`](/game-api/types/alta-networking/serverplayerconnectionhandlerold)

## Constructors

<details>
<summary>2 private and internal constructors</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"private PlayerJoinResult("}<Link to="/game-api/types/global-t-x/userinfoandrole">{"UserInfoAndRole"}</Link>{" userInfo)"}</code> | Creates a `ServerPlayerConnectionHandlerOld.PlayerJoinResult` from `error`. |
| <Link id="m-ctor-2" /><code>{"private PlayerJoinResult(string error)"}</code> | Creates a `ServerPlayerConnectionHandlerOld.PlayerJoinResult` from `error`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-error" /><code>{"string Error { get; private set; }"}</code> | Why the join was denied. Null on success. |
| <Link id="m-issuccessful" /><code>{"bool IsSuccessful { get; private set; }"}</code> | Whether the player is allowed to join. |
| <Link id="m-userinfo" /><code><Link to="/game-api/types/global-t-x/userinfoandrole">{"UserInfoAndRole"}</Link>{" UserInfo { get; set; }"}</code> | The joining player's user info and role. Only set on success. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createdeniedresult" /><code>{"static "}<Link to="/game-api/types/alta-networking/serverplayerconnectionhandlerold-playerjoinresult">{"ServerPlayerConnectionHandlerOld.PlayerJoinResult"}</Link>{" CreateDeniedResult(string error)"}</code> | Makes a failed result with the given error message. |
| <Link id="m-createsuccessresult" /><code>{"static "}<Link to="/game-api/types/alta-networking/serverplayerconnectionhandlerold-playerjoinresult">{"ServerPlayerConnectionHandlerOld.PlayerJoinResult"}</Link>{" CreateSuccessResult("}<Link to="/game-api/types/global-t-x/userinfoandrole">{"UserInfoAndRole"}</Link>{" userInfo)"}</code> | Makes a successful result holding the player's user info and role. |

## Used in

Members of other types that take, return or hold a `PlayerJoinResult`:

[`ServerPlayerConnectionHandlerOld.CheckIfPlayerIsAllowed`](/game-api/types/alta-networking/serverplayerconnectionhandlerold#m-checkifplayerisallowed), [`ServerPlayerConnectionHandlerOld.CheckIfPlayerIsAllowedCustom`](/game-api/types/alta-networking/serverplayerconnectionhandlerold#m-checkifplayerisallowedcustom).
