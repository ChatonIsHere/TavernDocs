---
title: "AuthenticationUtility"
description: "Logs the game into the Alta API by refresh token, command line arguments, username and password, or OAuth client credentials."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AuthenticationUtility

A **class** in `Alta.Authentication`, `Alta.Authentication`.

Logs the game into the Alta API by refresh token, command line arguments, username and password, or OAuth client credentials. Registered as `IAuthenticationUtility` in `ApplicationLifetimeScope`.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`IAuthenticationUtility`](/mod/game-api/types/assembly-other/iauthenticationutility)
- **Attributes** `Preserve`, `UsedImplicitly`
- **Documented in** [Alta assemblies](/mod/game-api/console-and-utilities/alta-assemblies), [Startup and app state](/mod/game-api/console-and-utilities/startup-and-app-state)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AuthenticationUtility("}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" apiClient, "}<Link to="/mod/game-api/types/assembly-other/iloginpreferences">{"ILoginPreferences"}</Link>{" loginPreferences)"}</code> | <span className="api-desc">Creates an `AuthenticationUtility` from `apiClient` and `loginPreferences`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-apiclient" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" apiClient"}</code> | <span className="api-desc">The high-level API client used to log in.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-loginpreferences" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-other/iloginpreferences">{"ILoginPreferences"}</Link>{" loginPreferences"}</code> | <span className="api-desc">Saved login preferences, read for the refresh token.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loginwithcommandlineargumentsasync" /><code>{"async Task<IResult<bool>> LoginWithCommandLineArgumentsAsync()"}</code> | <span className="api-desc">Tries `/login`, `/login_hash`, `/access_token` and `/oauth_login` in that order. Returns false if none are given.</span> |
| <Link id="m-loginwithcommandlinetokensasync" /><code>{"async Task<IResult> LoginWithCommandLineTokensAsync()"}</code> | <span className="api-desc">Logs in with the `/access_token`, `/refresh_token` and `/identity_token` command line values.</span> |
| <Link id="m-loginwithoauthasync" /><code>{"async Task<IResult> LoginWithOAuthAsync(string clientId, string clientSecret, string clientScopes)"}</code> | <span className="api-desc">Logs in with an OAuth client ID, secret and scopes. Semicolons in the scopes become spaces.</span> |
| <Link id="m-loginwithrefreshtokenasync" /><code>{"async Task<IResult> LoginWithRefreshTokenAsync()"}</code> | <span className="api-desc">Logs in with the refresh token saved in login preferences.</span> |
| <Link id="m-loginwithuserpassasync" /><code>{"Task<IResult> LoginWithUserPassAsync(string username, string password)"}</code> | <span className="api-desc">Hashes the password and logs in with the username and hash.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getrefreshtoken" /><code>{"private Result<string> GetRefreshToken()"}</code> | <span className="api-desc">Returns the saved refresh token, or an error if remember details is off or no token is saved.</span> |
| <Link id="m-loginwithuserpasshashasync" /><code>{"private async Task<IResult> LoginWithUserPassHashAsync(string username, string passHash)"}</code> | <span className="api-desc">Logs in with a username and an already-hashed password. Fails if no user info comes back.</span> |

</details>
