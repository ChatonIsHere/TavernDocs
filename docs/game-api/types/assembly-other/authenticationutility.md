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

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IAuthenticationUtility`](/game-api/types/assembly-other/iauthenticationutility)
- **Attributes** `Preserve`, `UsedImplicitly`
- **Documented in** [Alta assemblies](/game-api/console-and-utilities/alta-assemblies), [Startup and app state](/game-api/console-and-utilities/startup-and-app-state)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AuthenticationUtility("}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" apiClient, "}<Link to="/game-api/types/assembly-other/iloginpreferences">{"ILoginPreferences"}</Link>{" loginPreferences)"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-apiclient" /><code>{"private readonly "}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" apiClient"}</code> | The high-level API client used to log in. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-loginpreferences" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/iloginpreferences">{"ILoginPreferences"}</Link>{" loginPreferences"}</code> | Saved login preferences, read for the refresh token. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loginwithcommandlineargumentsasync" /><code>{"async Task<IResult<bool>> LoginWithCommandLineArgumentsAsync()"}</code> | Tries `/login`, `/login_hash`, `/access_token` and `/oauth_login` in that order. Returns false if none are given. |
| <Link id="m-loginwithcommandlinetokensasync" /><code>{"async Task<IResult> LoginWithCommandLineTokensAsync()"}</code> | Logs in with the `/access_token`, `/refresh_token` and `/identity_token` command line values. |
| <Link id="m-loginwithoauthasync" /><code>{"async Task<IResult> LoginWithOAuthAsync(string clientId, string clientSecret, string clientScopes)"}</code> | Logs in with an OAuth client ID, secret and scopes. Semicolons in the scopes become spaces. |
| <Link id="m-loginwithrefreshtokenasync" /><code>{"async Task<IResult> LoginWithRefreshTokenAsync()"}</code> | Logs in with the refresh token saved in login preferences. |
| <Link id="m-loginwithuserpassasync" /><code>{"Task<IResult> LoginWithUserPassAsync(string username, string password)"}</code> | Hashes the password and logs in with the username and hash. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getrefreshtoken" /><code>{"private Result<string> GetRefreshToken()"}</code> | Returns the saved refresh token, or an error if remember details is off or no token is saved. |
| <Link id="m-loginwithuserpasshashasync" /><code>{"private async Task<IResult> LoginWithUserPassHashAsync(string username, string passHash)"}</code> | Logs in with a username and an already-hashed password. Fails if no user info comes back. |

</details>
