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

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`HighLevelApiClientBase`](/game-api/types/assembly-api-client/highlevelapiclientbase), [`IPlayerReportsClient`](/game-api/types/assembly-api-client/iplayerreportsclient)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal PlayerReportsClient("}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> | Creates a `PlayerReportsClient` from `clientManager`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-reportplayer" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/playerreportinfo">{"PlayerReportInfo"}</Link>{"> ReportPlayer(int userId, "}<Link to="/game-api/types/assembly-api-models/reporttype">{"ReportType"}</Link>{" type, int serverId)"}</code> | Files a report of the given type against a user on a server. |
| <Link id="m-viewallreports" /><code>{"async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-client/playerreportadmin">{"PlayerReportAdmin"}</Link>{">> ViewAllReports("}<Link to="/game-api/types/assembly-api-models/reportstatus">{"ReportStatus"}</Link>{"? statusFilter = null, int? serverFilter = null)"}</code> | Gets all reports, optionally filtered by status or server, as admin report objects. |
| <Link id="m-viewallreportsassummary" /><code>{"async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-client/playerreportsummary">{"PlayerReportSummary"}</Link>{">> ViewAllReportsAsSummary("}<Link to="/game-api/types/assembly-api-models/reportstatus">{"ReportStatus"}</Link>{"? statusFilter = null, int? serverFilter = null)"}</code> | Gets reports grouped per server and per reported player, newest first. |
