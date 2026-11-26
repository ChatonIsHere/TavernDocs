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
| <Link id="m-developmentendpoint" /><code>{"const string DevelopmentEndpoint"}</code> | <span className="api-desc">Alta's development API address (`/development_api`).</span> |
| <Link id="m-developmentwebsocket" /><code>{"const string DevelopmentWebsocket"}</code> | <span className="api-desc">Websocket address for the dev stage. Also the default websocket for `CreateHighLevelClient`.</span> |
| <Link id="m-latestendpoint" /><code>{"const string LatestEndpoint"}</code> | <span className="api-desc">API address for the latest stage (`/latest_api`).</span> |
| <Link id="m-latestwebsocket" /><code>{"const string LatestWebsocket"}</code> | <span className="api-desc">Websocket address for the latest stage.</span> |
| <Link id="m-localendpoint" /><code>{"const string LocalEndpoint"}</code> | <span className="api-desc">Local API address, `http://localhost:13490/` (`/local_api`).</span> |
| <Link id="m-localwebsocket" /><code>{"const string LocalWebsocket"}</code> | <span className="api-desc">Set to `Unsupported`; there is no local websocket.</span> |
| <Link id="m-productionendpoint" /><code>{"const string ProductionEndpoint"}</code> | <span className="api-desc">The production API, `https://webapi.townshiptale.com/`.</span> |
| <Link id="m-productionwebsocket" /><code>{"const string ProductionWebsocket"}</code> | <span className="api-desc">Websocket address for the production stage.</span> |
| <Link id="m-publicbaseendpoint" /><code>{"const string PublicBaseEndpoint"}</code> | <span className="api-desc">Base Amazon API Gateway address the stage endpoints build on.</span> |
| <Link id="m-publicbasewebsocket" /><code>{"const string PublicBaseWebsocket"}</code> | <span className="api-desc">Base Amazon websocket address the stage websockets build on.</span> |
| <Link id="m-testendpoint" /><code>{"const string TestEndpoint"}</code> | <span className="api-desc">API address for the test stage (`/test_api`).</span> |
| <Link id="m-testwebsocket" /><code>{"const string TestWebsocket"}</code> | <span className="api-desc">Websocket address for the test stage.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-status" /><code>{"static "}<Link to="/mod/game-api/types/assembly-api-client/statusapi">{"StatusAPI"}</Link>{" Status { get; }"}</code> | <span className="api-desc">Shared `StatusAPI` client for the game's status messages.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createhighlevelclient" /><code>{"static "}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" CreateHighLevelClient(string endpointUri = \"https://webapi.townshiptale.com/\", string websocketUri = \"wss://5wx2mgoj95.execute-api.ap-southeast-2.amazonaws.com/dev/\", string userAgent = null, int timeout = 40)"}</code> | <span className="api-desc">Creates the online client for an endpoint and websocket address. Defaults to production with a 40 second timeout.</span> |
| <Link id="m-createofflinehighlevelclient" /><code>{"static "}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" CreateOfflineHighLevelClient("}<Link to="/mod/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" credentials)"}</code> | <span className="api-desc">Creates an `OfflineHighLevelApiClient` from stored login credentials.</span> |
| <Link id="m-setlogging" /><code>{"static void SetLogging(LoggingConfiguration config)"}</code> | <span className="api-desc">Replaces the NLog configuration for the whole process.</span> |
