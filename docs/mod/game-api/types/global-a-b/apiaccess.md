---
title: "ApiAccess"
description: "Static holder of the game's Alta web API client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ApiAccess

A **static class** in `Root.Township`, the global namespace.

Static holder of the game's Alta web API client. Picks the endpoint from settings or command line flags, or starts an offline client from stored credentials when there's no internet.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Documented in** [Alta's web API](/mod/game-api/console-and-utilities/alta-web-api#apiaccess), [Startup and app state](/mod/game-api/console-and-utilities/startup-and-app-state)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-storedofflinetokenname" /><code>{"const string StoredOfflineTokenName"}</code> | <span className="api-desc">PlayerPreferences key of the stored offline token.</span> |

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-apiclient" /><code>{"private static "}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" apiClient"}</code> | <span className="api-desc">Backing field for `ApiClient`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-timeout" /><code>{"private const int Timeout"}</code> | <span className="api-desc">Constant of 40, not used in this file.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-apiclient-2" /><code>{"static "}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" ApiClient { get; }"}</code> | <span className="api-desc">The shared high-level API client. Created by `StartApiAccess` on first use.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isconnectedtointernet" /><code>{"static async Task<bool> IsConnectedToInternet()"}</code> | <span className="api-desc">Checks for internet, trying once more after half a second if the first check fails.</span> |
| <Link id="m-startapiaccess" /><code>{"static void StartApiAccess()"}</code> | <span className="api-desc">Sets device info, then starts offline mode or the online client. Does nothing if a client already exists.</span> |
| <Link id="m-startoffline" /><code>{"static void StartOffline("}<Link to="/mod/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" credentials)"}</code> | <span className="api-desc">Creates an offline API client from the given credentials.</span> |
| <Link id="m-startwithendpoint" /><code>{"static void StartWithEndpoint(string endpoint)"}</code> | <span className="api-desc">Creates the online API client for the given URL. Logs an error if a client already exists.</span> |
| <Link id="m-trygetlogincredentials" /><code>{"static bool TryGetLoginCredentials(out "}<Link to="/mod/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" credentials)"}</code> | <span className="api-desc">Builds login credentials from the access, identity and refresh tokens stored in PlayerPreferences. False if any is missing.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canuseoffline" /><code>{"private static bool CanUseOffline(out "}<Link to="/mod/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" credentials)"}</code> | <span className="api-desc">True if a stored offline token matches the stored access token, so the game can run offline.</span> |
| <Link id="m-isconnectedtointernetinternal" /><code>{"private static bool IsConnectedToInternetInternal()"}</code> | <span className="api-desc">Requests Google's generate_204 URL and returns whether it answered. Returns false if `SimulateNoInternet` is on.</span> |
| <Link id="m-isvalidofflinetoken" /><code>{"private static bool IsValidOfflineToken(string offlineToken, JwtSecurityToken accessToken)"}</code> | <span className="api-desc">True if the offline token string equals the written access token.</span> |
| <Link id="m-setapiclientlogging" /><code>{"private static void SetApiClientLogging()"}</code> | <span className="api-desc">Empty in this build.</span> |
| <Link id="m-shoulduseoffline" /><code>{"private static bool ShouldUseOffline()"}</code> | <span className="api-desc">True with `/force_offline`, or when there's no internet and `/ignore_offline` isn't given.</span> |
| <Link id="m-startapi" /><code>{"private static void StartAPI()"}</code> | <span className="api-desc">Picks the API URL from `GameConfig` or the `/development_api`, `/local_api`, `/latest_api`, `/test_api` or `/custom_api` flags and starts the client.</span> |

</details>
