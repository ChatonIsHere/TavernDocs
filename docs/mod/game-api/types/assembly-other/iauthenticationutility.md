---
title: "IAuthenticationUtility"
description: "Ways to log in to the Alta web API: saved refresh token, command line, username and password, or OAuth client credentials."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAuthenticationUtility

An **interface** in `Alta.Authentication`, `Alta.Authentication`.

Ways to log in to the Alta web API: saved refresh token, command line, username and password, or OAuth client credentials. `AuthenticationUtility` implements it.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Derived types** [`AuthenticationUtility`](/mod/game-api/types/assembly-other/authenticationutility)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loginwithcommandlineargumentsasync" /><code>{"Task<IResult<bool>> LoginWithCommandLineArgumentsAsync()"}</code> | <span className="api-desc">Logs in from `/login`, `/login_hash`, `/access_token` or `/oauth_login` arguments; the bool is false when none were given.</span> |
| <Link id="m-loginwithcommandlinetokensasync" /><code>{"Task<IResult> LoginWithCommandLineTokensAsync()"}</code> | <span className="api-desc">Logs in with the `/access_token`, `/refresh_token` and `/identity_token` command line arguments.</span> |
| <Link id="m-loginwithoauthasync" /><code>{"Task<IResult> LoginWithOAuthAsync(string clientId, string clientSecret, string clientScopes)"}</code> | <span className="api-desc">Logs in as an OAuth client with a client ID, secret and scopes.</span> |
| <Link id="m-loginwithrefreshtokenasync" /><code>{"Task<IResult> LoginWithRefreshTokenAsync()"}</code> | <span className="api-desc">Logs in with the refresh token saved in login preferences, if the user chose to remember details.</span> |
| <Link id="m-loginwithuserpassasync" /><code>{"Task<IResult> LoginWithUserPassAsync(string username, string password)"}</code> | <span className="api-desc">Hashes the password and logs in with the username and hash.</span> |

## Used in

Members of other types that take, return or hold a `IAuthenticationUtility`:

<div className="api-used-in">

[`AltaAccountRegistererAndLinker.authenticationUtility`](/mod/game-api/types/alta-menus/altaaccountregistererandlinker#m-authenticationutility), [`AltaAccountRegistererAndLinker.Inject`](/mod/game-api/types/alta-menus/altaaccountregistererandlinker#m-inject), [`AuthenticationService.AuthenticationService`](/mod/game-api/types/assembly-other/authenticationservice#m-ctor), [`AuthenticationService.authenticationUtility`](/mod/game-api/types/assembly-other/authenticationservice#m-authenticationutility), [`UserService.UserService`](/mod/game-api/types/assembly-other/userservice#m-ctor).

</div>
