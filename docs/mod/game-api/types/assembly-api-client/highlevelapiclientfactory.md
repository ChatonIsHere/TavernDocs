---
title: "HighLevelApiClientFactory"
description: "Makes the API client the game uses (ApiAccess calls it) and holds the known API addresses."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HighLevelApiClientFactory

A **static class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Makes the API client the game uses (`ApiAccess` calls it) and holds the known API addresses. All of Alta's addresses here no longer answer.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-developmentendpoint" /><code>{"const string DevelopmentEndpoint"}</code> | Alta's development API address (`/development_api`). |
| <Link id="m-developmentwebsocket" /><code>{"const string DevelopmentWebsocket"}</code> | Websocket address for the dev stage. Also the default websocket for `CreateHighLevelClient`. |
| <Link id="m-latestendpoint" /><code>{"const string LatestEndpoint"}</code> | API address for the latest stage (`/latest_api`). |
| <Link id="m-latestwebsocket" /><code>{"const string LatestWebsocket"}</code> | Websocket address for the latest stage. |
| <Link id="m-localendpoint" /><code>{"const string LocalEndpoint"}</code> | Local API address, `http://localhost:13490/` (`/local_api`). |
| <Link id="m-localwebsocket" /><code>{"const string LocalWebsocket"}</code> | Set to `Unsupported`; there is no local websocket. |
| <Link id="m-productionendpoint" /><code>{"const string ProductionEndpoint"}</code> | The production API, `https://webapi.townshiptale.com/`. |
| <Link id="m-productionwebsocket" /><code>{"const string ProductionWebsocket"}</code> | Websocket address for the production stage. |
| <Link id="m-publicbaseendpoint" /><code>{"const string PublicBaseEndpoint"}</code> | Base Amazon API Gateway address the stage endpoints build on. |
| <Link id="m-publicbasewebsocket" /><code>{"const string PublicBaseWebsocket"}</code> | Base Amazon websocket address the stage websockets build on. |
| <Link id="m-testendpoint" /><code>{"const string TestEndpoint"}</code> | API address for the test stage (`/test_api`). |
| <Link id="m-testwebsocket" /><code>{"const string TestWebsocket"}</code> | Websocket address for the test stage. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-status" /><code>{"static "}<Link to="/mod/game-api/types/assembly-api-client/statusapi">{"StatusAPI"}</Link>{" Status { get; }"}</code> | Shared `StatusAPI` client for the game's status messages. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createhighlevelclient" /><code>{"static "}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" CreateHighLevelClient(string endpointUri = \"https://webapi.townshiptale.com/\", string websocketUri = \"wss://5wx2mgoj95.execute-api.ap-southeast-2.amazonaws.com/dev/\", string userAgent = null, int timeout = 40)"}</code> | Creates the online client for an endpoint and websocket address. Defaults to production with a 40 second timeout. |
| <Link id="m-createofflinehighlevelclient" /><code>{"static "}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" CreateOfflineHighLevelClient("}<Link to="/mod/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" credentials)"}</code> | Creates an `OfflineHighLevelApiClient` from stored login credentials. |
| <Link id="m-setlogging" /><code>{"static void SetLogging(LoggingConfiguration config)"}</code> | Replaces the NLog configuration for the whole process. |
