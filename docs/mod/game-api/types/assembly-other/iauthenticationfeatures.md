---
title: "IAuthenticationFeatures"
description: "What the current platform's login supports."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAuthenticationFeatures

An **interface** in `Alta.Platform`, `Alta.Platform`.

What the current platform's login supports. Read from `IAuthenticationService.Features`; the generic (PC) one supports none of it.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Derived types** [`AuthenticationFeatures`](/mod/game-api/types/assembly-other/authenticationfeatures)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-accesstokenmode" /><code><Link to="/mod/game-api/types/assembly-other/accesstokenmode">{"AccessTokenMode"}</Link>{" "}<Link to="/mod/game-api/types/assembly-other/accesstokenmode">{"AccessTokenMode"}</Link>{" { get; }"}</code> | Whether the platform gives access tokens, and if they can be used once or more than once. |
| <Link id="m-supportsaccountlinking" /><code>{"bool SupportsAccountLinking { get; }"}</code> | Whether a platform account can be linked to an Alta account. The account linker stops early when false. |
| <Link id="m-supportsplatformlogin" /><code>{"bool SupportsPlatformLogin { get; }"}</code> | Whether the player can log in with platform credentials instead of username and password. |

## Used in

Members of other types that take, return or hold a `IAuthenticationFeatures`:

[`AuthenticationService.Features`](/mod/game-api/types/assembly-other/authenticationservice#m-features), [`UserService.Features`](/mod/game-api/types/assembly-other/userservice#m-features), [`IAuthenticationService.Features`](/mod/game-api/types/assembly-other/iauthenticationservice#m-features).
