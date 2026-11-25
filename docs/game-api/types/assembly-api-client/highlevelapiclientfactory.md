---
title: "HighLevelApiClientFactory"
description: "static class HighLevelApiClientFactory in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HighLevelApiClientFactory

A **static class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-developmentendpoint" /><code>{"const string DevelopmentEndpoint"}</code> |  |
| <Link id="m-developmentwebsocket" /><code>{"const string DevelopmentWebsocket"}</code> |  |
| <Link id="m-latestendpoint" /><code>{"const string LatestEndpoint"}</code> |  |
| <Link id="m-latestwebsocket" /><code>{"const string LatestWebsocket"}</code> |  |
| <Link id="m-localendpoint" /><code>{"const string LocalEndpoint"}</code> |  |
| <Link id="m-localwebsocket" /><code>{"const string LocalWebsocket"}</code> |  |
| <Link id="m-productionendpoint" /><code>{"const string ProductionEndpoint"}</code> |  |
| <Link id="m-productionwebsocket" /><code>{"const string ProductionWebsocket"}</code> |  |
| <Link id="m-publicbaseendpoint" /><code>{"const string PublicBaseEndpoint"}</code> |  |
| <Link id="m-publicbasewebsocket" /><code>{"const string PublicBaseWebsocket"}</code> |  |
| <Link id="m-testendpoint" /><code>{"const string TestEndpoint"}</code> |  |
| <Link id="m-testwebsocket" /><code>{"const string TestWebsocket"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-status" /><code>{"static "}<Link to="/game-api/types/assembly-api-client/statusapi">{"StatusAPI"}</Link>{" Status { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createhighlevelclient" /><code>{"static "}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" CreateHighLevelClient(string endpointUri = \"https://webapi.townshiptale.com/\", string websocketUri = \"wss://5wx2mgoj95.execute-api.ap-southeast-2.amazonaws.com/dev/\", string userAgent = null, int timeout = 40)"}</code> |  |
| <Link id="m-createofflinehighlevelclient" /><code>{"static "}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" CreateOfflineHighLevelClient("}<Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" credentials)"}</code> |  |
| <Link id="m-setlogging" /><code>{"static void SetLogging(LoggingConfiguration config)"}</code> |  |
