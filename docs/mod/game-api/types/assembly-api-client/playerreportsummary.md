---
title: "PlayerReportSummary"
description: "All admin reports against one player on one server, grouped by ServerReportCollection."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerReportSummary

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

All admin reports against one player on one server, grouped by `ServerReportCollection`. Built by the player reports client from report data fetched from the web API.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerReportSummary("}<Link to="/mod/game-api/types/assembly-api-models/playerreportinfo">{"PlayerReportInfo"}</Link>{" info)"}</code> | <span className="api-desc">Creates a `PlayerReportSummary` from `info`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-typecounts" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/assembly-api-models/reporttype">{"ReportType"}</Link>{", int> TypeCounts"}</code> | <span className="api-desc">How many reports there are of each `ReportType`.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-reports" /><code>{"private readonly SortedList<DateTime, "}<Link to="/mod/game-api/types/assembly-api-client/playerreportadmin">{"PlayerReportAdmin"}</Link>{"> reports"}</code> | <span className="api-desc">The reports, keyed by creation time and sorted newest first.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-latest" /><code><Link to="/mod/game-api/types/assembly-api-client/playerreportadmin">{"PlayerReportAdmin"}</Link>{" Latest { get; }"}</code> | <span className="api-desc">The most recently created report, or null if there are none.</span> |
| <Link id="m-latestactedon" /><code><Link to="/mod/game-api/types/assembly-api-client/playerreportadmin">{"PlayerReportAdmin"}</Link>{" LatestActedOn { get; }"}</code> | <span className="api-desc">The newest report whose status is `ActedOn`, or null if none has been acted on.</span> |
| <Link id="m-reportedplayer" /><code><Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" ReportedPlayer { get; }"}</code> | <span className="api-desc">The player the reports are about, taken from the first report.</span> |
| <Link id="m-reporters" /><code>{"HashSet<"}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> Reporters { get; }"}</code> | <span className="api-desc">The distinct users who filed these reports.</span> |
| <Link id="m-reports-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-client/playerreportadmin">{"PlayerReportAdmin"}</Link>{"> Reports { get; }"}</code> | <span className="api-desc">All reports, newest first by creation time.</span> |
| <Link id="m-server" /><code><Link to="/mod/game-api/types/assembly-api-models/gameserverinfominimal">{"GameServerInfoMinimal"}</Link>{" Server { get; }"}</code> | <span className="api-desc">The server the reports were filed on, taken from the first report.</span> |
| <Link id="m-timerange" /><code>{"TimeSpan TimeRange { get; }"}</code> | <span className="api-desc">Time between the oldest and newest report; zero when there are fewer than two.</span> |
| <Link id="m-totalcount" /><code>{"int TotalCount { get; }"}</code> | <span className="api-desc">Number of reports in the summary.</span> |

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"internal void Add("}<Link to="/mod/game-api/types/assembly-api-client/playerreportadmin">{"PlayerReportAdmin"}</Link>{" report)"}</code> | <span className="api-desc">Adds a report to the newest-first list, records its reporter and bumps the count for its report type.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerReportSummary`:

<div className="api-used-in">

[`IPlayerReportsClient.ViewAllReportsAsSummary`](/mod/game-api/types/assembly-api-client/iplayerreportsclient#m-viewallreportsassummary), [`PlayerReportsClient.ViewAllReportsAsSummary`](/mod/game-api/types/assembly-api-client/playerreportsclient#m-viewallreportsassummary), [`ServerReportCollection.Reports`](/mod/game-api/types/assembly-api-client/serverreportcollection#m-reports), [`ServerReportCollection.reportsPerPlayer`](/mod/game-api/types/assembly-api-client/serverreportcollection#m-reportsperplayer), [`PlayerReportSummaryNotification.PlayerReportSummaryNotification`](/mod/game-api/types/alta-menus/playerreportsummarynotification#m-ctor), [`PlayerReportSummaryNotification.report`](/mod/game-api/types/alta-menus/playerreportsummarynotification#m-report), [`PlayerReportSummaryPanel.SetupForReport`](/mod/game-api/types/alta-menus/playerreportsummarypanel#m-setupforreport).

</div>
