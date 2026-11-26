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

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerReportSummary("}<Link to="/game-api/types/assembly-api-models/playerreportinfo">{"PlayerReportInfo"}</Link>{" info)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-typecounts" /><code>{"Dictionary<"}<Link to="/game-api/types/assembly-api-models/reporttype">{"ReportType"}</Link>{", int> TypeCounts"}</code> | How many reports there are of each `ReportType`. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-reports" /><code>{"private readonly SortedList<DateTime, "}<Link to="/game-api/types/assembly-api-client/playerreportadmin">{"PlayerReportAdmin"}</Link>{"> reports"}</code> | The reports, keyed by creation time and sorted newest first. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-latest" /><code><Link to="/game-api/types/assembly-api-client/playerreportadmin">{"PlayerReportAdmin"}</Link>{" Latest { get; }"}</code> | The most recently created report, or null if there are none. |
| <Link id="m-latestactedon" /><code><Link to="/game-api/types/assembly-api-client/playerreportadmin">{"PlayerReportAdmin"}</Link>{" LatestActedOn { get; }"}</code> | The newest report whose status is `ActedOn`, or null if none has been acted on. |
| <Link id="m-reportedplayer" /><code><Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" ReportedPlayer { get; }"}</code> | The player the reports are about, taken from the first report. |
| <Link id="m-reporters" /><code>{"HashSet<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> Reporters { get; }"}</code> | The distinct users who filed these reports. |
| <Link id="m-reports-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/assembly-api-client/playerreportadmin">{"PlayerReportAdmin"}</Link>{"> Reports { get; }"}</code> | All reports, newest first by creation time. |
| <Link id="m-server" /><code><Link to="/game-api/types/assembly-api-models/gameserverinfominimal">{"GameServerInfoMinimal"}</Link>{" Server { get; }"}</code> | The server the reports were filed on, taken from the first report. |
| <Link id="m-timerange" /><code>{"TimeSpan TimeRange { get; }"}</code> | Time between the oldest and newest report; zero when there are fewer than two. |
| <Link id="m-totalcount" /><code>{"int TotalCount { get; }"}</code> | Number of reports in the summary. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"internal void Add("}<Link to="/game-api/types/assembly-api-client/playerreportadmin">{"PlayerReportAdmin"}</Link>{" report)"}</code> | Adds a report to the newest-first list, records its reporter and bumps the count for its report type. |

</details>

## Used in

Members of other types that take, return or hold a `PlayerReportSummary`:

[`IPlayerReportsClient.ViewAllReportsAsSummary`](/game-api/types/assembly-api-client/iplayerreportsclient#m-viewallreportsassummary), [`PlayerReportsClient.ViewAllReportsAsSummary`](/game-api/types/assembly-api-client/playerreportsclient#m-viewallreportsassummary), [`ServerReportCollection.Reports`](/game-api/types/assembly-api-client/serverreportcollection#m-reports), [`ServerReportCollection.reportsPerPlayer`](/game-api/types/assembly-api-client/serverreportcollection#m-reportsperplayer), [`PlayerReportSummaryNotification.PlayerReportSummaryNotification`](/game-api/types/alta-menus/playerreportsummarynotification#m-ctor), [`PlayerReportSummaryNotification.report`](/game-api/types/alta-menus/playerreportsummarynotification#m-report), [`PlayerReportSummaryPanel.SetupForReport`](/game-api/types/alta-menus/playerreportsummarypanel#m-setupforreport).
