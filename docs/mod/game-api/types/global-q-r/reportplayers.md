---
title: "ReportPlayers"
description: "Client console module report-players (alias report) for listing and filing player reports through the API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ReportPlayers

A **static class** in `Root.Township`, the global namespace.

Client console module `report-players` (alias `report`) for listing and filing player reports through the API.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Attributes** `PlayOnly`, `ClientOnly`, `Module`, `Alias`

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for report output. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createreport" /><code>{"static async void CreateReport(int userId, "}<Link to="/mod/game-api/types/assembly-api-models/reporttype">{"ReportType"}</Link>{" type, int? serverId = null)"}</code> | Command `create`: reports a user for a reason on a server, the current one by default. Does nothing with no server. |
| <Link id="m-getreports" /><code>{"static async Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/playerreportinfo">{"PlayerReportInfo"}</Link>{">> GetReports("}<Link to="/mod/game-api/types/assembly-api-models/reportstatus">{"ReportStatus"}</Link>{"? statusFilter = null, int? serverFilter = null)"}</code> | Command `list`: fetches player reports from the API, optionally filtered by status or server. |
