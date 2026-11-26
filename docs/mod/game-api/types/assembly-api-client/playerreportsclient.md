---
title: "PlayerReportsClient"
description: "Online client for reporting players and reading reports."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerReportsClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Online client for reporting players and reading reports. Reached as `ApiAccess.ApiClient.PlayerReports`; calls Alta's web API, which no longer answers.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`HighLevelApiClientBase`](/mod/game-api/types/assembly-api-client/highlevelapiclientbase), [`IPlayerReportsClient`](/mod/game-api/types/assembly-api-client/iplayerreportsclient)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal PlayerReportsClient("}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> | <span className="api-desc">Creates a `PlayerReportsClient` from `clientManager`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-reportplayer" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/playerreportinfo">{"PlayerReportInfo"}</Link>{"> ReportPlayer(int userId, "}<Link to="/mod/game-api/types/assembly-api-models/reporttype">{"ReportType"}</Link>{" type, int serverId)"}</code> | <span className="api-desc">Files a report of the given type against a user on a server.</span> |
| <Link id="m-viewallreports" /><code>{"async Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-client/playerreportadmin">{"PlayerReportAdmin"}</Link>{">> ViewAllReports("}<Link to="/mod/game-api/types/assembly-api-models/reportstatus">{"ReportStatus"}</Link>{"? statusFilter = null, int? serverFilter = null)"}</code> | <span className="api-desc">Gets all reports, optionally filtered by status or server, as admin report objects.</span> |
| <Link id="m-viewallreportsassummary" /><code>{"async Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-client/playerreportsummary">{"PlayerReportSummary"}</Link>{">> ViewAllReportsAsSummary("}<Link to="/mod/game-api/types/assembly-api-models/reportstatus">{"ReportStatus"}</Link>{"? statusFilter = null, int? serverFilter = null)"}</code> | <span className="api-desc">Gets reports grouped per server and per reported player, newest first.</span> |
