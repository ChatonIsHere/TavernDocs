---
title: "IPlayerReportsClient"
description: "interface IPlayerReportsClient in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPlayerReportsClient

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`PlayerReportsClient`](/game-api/types/assembly-api-client/playerreportsclient)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-reportplayer" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/playerreportinfo">{"PlayerReportInfo"}</Link>{"> ReportPlayer(int userId, "}<Link to="/game-api/types/assembly-api-models/reporttype">{"ReportType"}</Link>{" type, int serverId)"}</code> |  |
| <Link id="m-viewallreports" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-client/playerreportadmin">{"PlayerReportAdmin"}</Link>{">> ViewAllReports("}<Link to="/game-api/types/assembly-api-models/reportstatus">{"ReportStatus"}</Link>{"? statusFilter = null, int? serverFilter = null)"}</code> |  |
| <Link id="m-viewallreportsassummary" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-client/playerreportsummary">{"PlayerReportSummary"}</Link>{">> ViewAllReportsAsSummary("}<Link to="/game-api/types/assembly-api-models/reportstatus">{"ReportStatus"}</Link>{"? statusFilter = null, int? serverFilter = null)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IPlayerReportsClient`:

[`HighLevelApiClient.PlayerReports`](/game-api/types/assembly-api-client/highlevelapiclient#m-playerreports), [`IHighLevelApiClient.PlayerReports`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-playerreports), [`OfflineHighLevelApiClient.PlayerReports`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-playerreports).
