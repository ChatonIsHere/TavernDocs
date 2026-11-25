---
title: "IAuthenticationUtility"
description: "interface IAuthenticationUtility in Alta.Authentication."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAuthenticationUtility

An **interface** in `Alta.Authentication`, `Alta.Authentication`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Derived types** [`AuthenticationUtility`](/game-api/types/assembly-other/authenticationutility)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loginwithcommandlineargumentsasync" /><code>{"Task<IResult<bool>> LoginWithCommandLineArgumentsAsync()"}</code> |  |
| <Link id="m-loginwithcommandlinetokensasync" /><code>{"Task<IResult> LoginWithCommandLineTokensAsync()"}</code> |  |
| <Link id="m-loginwithoauthasync" /><code>{"Task<IResult> LoginWithOAuthAsync(string clientId, string clientSecret, string clientScopes)"}</code> |  |
| <Link id="m-loginwithrefreshtokenasync" /><code>{"Task<IResult> LoginWithRefreshTokenAsync()"}</code> |  |
| <Link id="m-loginwithuserpassasync" /><code>{"Task<IResult> LoginWithUserPassAsync(string username, string password)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IAuthenticationUtility`:

[`AltaAccountRegistererAndLinker.authenticationUtility`](/game-api/types/alta-menus/altaaccountregistererandlinker#m-authenticationutility), [`AltaAccountRegistererAndLinker.Inject`](/game-api/types/alta-menus/altaaccountregistererandlinker#m-inject), [`AuthenticationService.AuthenticationService`](/game-api/types/assembly-other/authenticationservice#m-ctor), [`AuthenticationService.authenticationUtility`](/game-api/types/assembly-other/authenticationservice#m-authenticationutility), [`UserService.UserService`](/game-api/types/assembly-other/userservice#m-ctor).
