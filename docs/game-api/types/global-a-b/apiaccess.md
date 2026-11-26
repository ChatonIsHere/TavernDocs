---
title: "ApiAccess"
description: "Static holder of the game's Alta web API client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ApiAccess

A **static class** in `Root.Township`, no namespace.

Static holder of the game's Alta web API client. Picks the endpoint from settings or command line flags, or starts an offline client from stored credentials when there's no internet.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Documented in** [Alta's web API](/game-api/console-and-utilities/alta-web-api#apiaccess), [Startup and app state](/game-api/console-and-utilities/startup-and-app-state)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-storedofflinetokenname" /><code>{"const string StoredOfflineTokenName"}</code> | PlayerPreferences key of the stored offline token. |

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-apiclient" /><code>{"private static "}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" apiClient"}</code> | Backing field for `ApiClient`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-timeout" /><code>{"private const int Timeout"}</code> | Constant of 40, not used in this file. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-apiclient-2" /><code>{"static "}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" ApiClient { get; }"}</code> | The shared high-level API client. Created by `StartApiAccess` on first use. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isconnectedtointernet" /><code>{"static async Task<bool> IsConnectedToInternet()"}</code> | Checks for internet, trying once more after half a second if the first check fails. |
| <Link id="m-startapiaccess" /><code>{"static void StartApiAccess()"}</code> | Sets device info, then starts offline mode or the online client. Does nothing if a client already exists. |
| <Link id="m-startoffline" /><code>{"static void StartOffline("}<Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" credentials)"}</code> | Creates an offline API client from the given credentials. |
| <Link id="m-startwithendpoint" /><code>{"static void StartWithEndpoint(string endpoint)"}</code> | Creates the online API client for the given URL. Logs an error if a client already exists. |
| <Link id="m-trygetlogincredentials" /><code>{"static bool TryGetLoginCredentials(out "}<Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" credentials)"}</code> | Builds login credentials from the access, identity and refresh tokens stored in PlayerPreferences. False if any is missing. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canuseoffline" /><code>{"private static bool CanUseOffline(out "}<Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" credentials)"}</code> | True if a stored offline token matches the stored access token, so the game can run offline. |
| <Link id="m-isconnectedtointernetinternal" /><code>{"private static bool IsConnectedToInternetInternal()"}</code> | Requests Google's generate_204 URL and returns whether it answered. Returns false if `SimulateNoInternet` is on. |
| <Link id="m-isvalidofflinetoken" /><code>{"private static bool IsValidOfflineToken(string offlineToken, JwtSecurityToken accessToken)"}</code> | True if the offline token string equals the written access token. |
| <Link id="m-setapiclientlogging" /><code>{"private static void SetApiClientLogging()"}</code> | Empty in this build. |
| <Link id="m-shoulduseoffline" /><code>{"private static bool ShouldUseOffline()"}</code> | True with `/force_offline`, or when there's no internet and `/ignore_offline` isn't given. |
| <Link id="m-startapi" /><code>{"private static void StartAPI()"}</code> | Picks the API URL from `GameConfig` or the `/development_api`, `/local_api`, `/latest_api`, `/test_api` or `/custom_api` flags and starts the client. |

</details>
