---
title: "PlayerReportsClient"
description: "class PlayerReportsClient in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerReportsClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`HighLevelApiClientBase`](/game-api/types/assembly-api-client/highlevelapiclientbase), [`IPlayerReportsClient`](/game-api/types/assembly-api-client/iplayerreportsclient)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal PlayerReportsClient("}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-reportplayer" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/playerreportinfo">{"PlayerReportInfo"}</Link>{"> ReportPlayer(int userId, "}<Link to="/game-api/types/assembly-api-models/reporttype">{"ReportType"}</Link>{" type, int serverId)"}</code> |  |
| <Link id="m-viewallreports" /><code>{"async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-client/playerreportadmin">{"PlayerReportAdmin"}</Link>{">> ViewAllReports("}<Link to="/game-api/types/assembly-api-models/reportstatus">{"ReportStatus"}</Link>{"? statusFilter = null, int? serverFilter = null)"}</code> |  |
| <Link id="m-viewallreportsassummary" /><code>{"async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-client/playerreportsummary">{"PlayerReportSummary"}</Link>{">> ViewAllReportsAsSummary("}<Link to="/game-api/types/assembly-api-models/reportstatus">{"ReportStatus"}</Link>{"? statusFilter = null, int? serverFilter = null)"}</code> |  |
