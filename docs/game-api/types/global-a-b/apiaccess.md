---
title: "ApiAccess"
description: "Which client and address it picks:"
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ApiAccess

A **static class** in `Root.Township`, no namespace.

Which client and address it picks:

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Documented in** [Alta's web API](/game-api/console-and-utilities/alta-web-api#apiaccess), [Startup and app state](/game-api/console-and-utilities/startup-and-app-state)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-storedofflinetokenname" /><code>{"const string StoredOfflineTokenName"}</code> |  |
| <Link id="m-apiclient" /><code>{"private static "}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" apiClient"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-timeout" /><code>{"private const int Timeout"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-apiclient-2" /><code>{"static "}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" ApiClient { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isconnectedtointernet" /><code>{"static async Task<bool> IsConnectedToInternet()"}</code> |  |
| <Link id="m-startapiaccess" /><code>{"static void StartApiAccess()"}</code> |  |
| <Link id="m-startoffline" /><code>{"static void StartOffline("}<Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" credentials)"}</code> |  |
| <Link id="m-startwithendpoint" /><code>{"static void StartWithEndpoint(string endpoint)"}</code> |  |
| <Link id="m-trygetlogincredentials" /><code>{"static bool TryGetLoginCredentials(out "}<Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" credentials)"}</code> |  |
| <Link id="m-canuseoffline" /><code>{"private static bool CanUseOffline(out "}<Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" credentials)"}</code> |  |
| <Link id="m-isconnectedtointernetinternal" /><code>{"private static bool IsConnectedToInternetInternal()"}</code> |  |
| <Link id="m-isvalidofflinetoken" /><code>{"private static bool IsValidOfflineToken(string offlineToken, JwtSecurityToken accessToken)"}</code> |  |
| <Link id="m-setapiclientlogging" /><code>{"private static void SetApiClientLogging()"}</code> |  |
| <Link id="m-shoulduseoffline" /><code>{"private static bool ShouldUseOffline()"}</code> |  |
| <Link id="m-startapi" /><code>{"private static void StartAPI()"}</code> |  |
