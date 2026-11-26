---
title: "IPlayerReportsClient"
description: "Alta web API calls for reporting players and reading reports."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPlayerReportsClient

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Alta web API calls for reporting players and reading reports. `ApiAccess.ApiClient.PlayerReports`.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Derived types** [`PlayerReportsClient`](/mod/game-api/types/assembly-api-client/playerreportsclient)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-reportplayer" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/playerreportinfo">{"PlayerReportInfo"}</Link>{"> ReportPlayer(int userId, "}<Link to="/mod/game-api/types/assembly-api-models/reporttype">{"ReportType"}</Link>{" type, int serverId)"}</code> | Reports a user on a server for a reason. |
| <Link id="m-viewallreports" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-client/playerreportadmin">{"PlayerReportAdmin"}</Link>{">> ViewAllReports("}<Link to="/mod/game-api/types/assembly-api-models/reportstatus">{"ReportStatus"}</Link>{"? statusFilter = null, int? serverFilter = null)"}</code> | Lists reports in full, optionally by status and server. |
| <Link id="m-viewallreportsassummary" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-client/playerreportsummary">{"PlayerReportSummary"}</Link>{">> ViewAllReportsAsSummary("}<Link to="/mod/game-api/types/assembly-api-models/reportstatus">{"ReportStatus"}</Link>{"? statusFilter = null, int? serverFilter = null)"}</code> | Lists reports as summaries, optionally by status and server. |

## Used in

Members of other types that take, return or hold a `IPlayerReportsClient`:

[`HighLevelApiClient.PlayerReports`](/mod/game-api/types/assembly-api-client/highlevelapiclient#m-playerreports), [`IHighLevelApiClient.PlayerReports`](/mod/game-api/types/assembly-api-client/ihighlevelapiclient#m-playerreports), [`OfflineHighLevelApiClient.PlayerReports`](/mod/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-playerreports).
