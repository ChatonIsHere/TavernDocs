---
title: "ReportPlayers"
description: "static class ReportPlayers in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ReportPlayers

A **static class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Attributes** `PlayOnly`, `ClientOnly`, `Module`, `Alias`

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createreport" /><code>{"static async void CreateReport(int userId, "}<Link to="/game-api/types/assembly-api-models/reporttype">{"ReportType"}</Link>{" type, int? serverId = null)"}</code> |  |
| <Link id="m-getreports" /><code>{"static async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/playerreportinfo">{"PlayerReportInfo"}</Link>{">> GetReports("}<Link to="/game-api/types/assembly-api-models/reportstatus">{"ReportStatus"}</Link>{"? statusFilter = null, int? serverFilter = null)"}</code> |  |
