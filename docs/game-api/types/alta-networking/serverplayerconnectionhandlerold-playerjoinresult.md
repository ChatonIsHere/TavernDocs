---
title: "ServerPlayerConnectionHandlerOld.PlayerJoinResult"
description: "struct ServerPlayerConnectionHandlerOld.PlayerJoinResult in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerPlayerConnectionHandlerOld.PlayerJoinResult

A **protected struct** in `Root.Township`, `Alta.Networking.Servers`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Nested in** [`ServerPlayerConnectionHandlerOld`](/game-api/types/alta-networking/serverplayerconnectionhandlerold)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"private PlayerJoinResult("}<Link to="/game-api/types/global-t-x/userinfoandrole">{"UserInfoAndRole"}</Link>{" userInfo)"}</code> |  |
| <Link id="m-ctor-2" /><code>{"private PlayerJoinResult(string error)"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-error" /><code>{"string Error { get; private set; }"}</code> |  |
| <Link id="m-issuccessful" /><code>{"bool IsSuccessful { get; private set; }"}</code> |  |
| <Link id="m-userinfo" /><code><Link to="/game-api/types/global-t-x/userinfoandrole">{"UserInfoAndRole"}</Link>{" UserInfo { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createdeniedresult" /><code>{"static "}<Link to="/game-api/types/alta-networking/serverplayerconnectionhandlerold-playerjoinresult">{"ServerPlayerConnectionHandlerOld.PlayerJoinResult"}</Link>{" CreateDeniedResult(string error)"}</code> |  |
| <Link id="m-createsuccessresult" /><code>{"static "}<Link to="/game-api/types/alta-networking/serverplayerconnectionhandlerold-playerjoinresult">{"ServerPlayerConnectionHandlerOld.PlayerJoinResult"}</Link>{" CreateSuccessResult("}<Link to="/game-api/types/global-t-x/userinfoandrole">{"UserInfoAndRole"}</Link>{" userInfo)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerJoinResult`:

[`ServerPlayerConnectionHandlerOld.CheckIfPlayerIsAllowed`](/game-api/types/alta-networking/serverplayerconnectionhandlerold#m-checkifplayerisallowed), [`ServerPlayerConnectionHandlerOld.CheckIfPlayerIsAllowedCustom`](/game-api/types/alta-networking/serverplayerconnectionhandlerold#m-checkifplayerisallowedcustom).
