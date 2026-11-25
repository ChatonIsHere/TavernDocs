---
title: "PlayerReportSummary"
description: "class PlayerReportSummary in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerReportSummary

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerReportSummary("}<Link to="/game-api/types/assembly-api-models/playerreportinfo">{"PlayerReportInfo"}</Link>{" info)"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-typecounts" /><code>{"Dictionary<"}<Link to="/game-api/types/assembly-api-models/reporttype">{"ReportType"}</Link>{", int> TypeCounts"}</code> |

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-reports" /><code>{"private readonly SortedList<DateTime, "}<Link to="/game-api/types/assembly-api-client/playerreportadmin">{"PlayerReportAdmin"}</Link>{"> reports"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-latest" /><code><Link to="/game-api/types/assembly-api-client/playerreportadmin">{"PlayerReportAdmin"}</Link>{" Latest { get; }"}</code> |
| <Link id="m-latestactedon" /><code><Link to="/game-api/types/assembly-api-client/playerreportadmin">{"PlayerReportAdmin"}</Link>{" LatestActedOn { get; }"}</code> |
| <Link id="m-reportedplayer" /><code><Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" ReportedPlayer { get; }"}</code> |
| <Link id="m-reporters" /><code>{"HashSet<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> Reporters { get; }"}</code> |
| <Link id="m-reports-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/assembly-api-client/playerreportadmin">{"PlayerReportAdmin"}</Link>{"> Reports { get; }"}</code> |
| <Link id="m-server" /><code><Link to="/game-api/types/assembly-api-models/gameserverinfominimal">{"GameServerInfoMinimal"}</Link>{" Server { get; }"}</code> |
| <Link id="m-timerange" /><code>{"TimeSpan TimeRange { get; }"}</code> |
| <Link id="m-totalcount" /><code>{"int TotalCount { get; }"}</code> |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-add" /><code>{"internal void Add("}<Link to="/game-api/types/assembly-api-client/playerreportadmin">{"PlayerReportAdmin"}</Link>{" report)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerReportSummary`:

[`IPlayerReportsClient.ViewAllReportsAsSummary`](/game-api/types/assembly-api-client/iplayerreportsclient#m-viewallreportsassummary), [`PlayerReportsClient.ViewAllReportsAsSummary`](/game-api/types/assembly-api-client/playerreportsclient#m-viewallreportsassummary), [`ServerReportCollection.Reports`](/game-api/types/assembly-api-client/serverreportcollection#m-reports), [`ServerReportCollection.reportsPerPlayer`](/game-api/types/assembly-api-client/serverreportcollection#m-reportsperplayer), [`PlayerReportSummaryNotification.PlayerReportSummaryNotification`](/game-api/types/alta-menus/playerreportsummarynotification#m-ctor), [`PlayerReportSummaryNotification.report`](/game-api/types/alta-menus/playerreportsummarynotification#m-report), [`PlayerReportSummaryPanel.SetupForReport`](/game-api/types/alta-menus/playerreportsummarypanel#m-setupforreport).
