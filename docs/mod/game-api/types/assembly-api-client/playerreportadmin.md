---
title: "PlayerReportAdmin"
description: "High-level API handle for moderating one player report: mark it ignored or acted on."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerReportAdmin

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

High-level API handle for moderating one player report: mark it ignored or acted on.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal PlayerReportAdmin("}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" lowLevel, "}<Link to="/mod/game-api/types/assembly-api-models/playerreportinfo">{"PlayerReportInfo"}</Link>{" report)"}</code> | <span className="api-desc">Creates a `PlayerReportAdmin` from `lowLevel` and `report`.</span> |

</details>

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lowlevel" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" lowLevel"}</code> | <span className="api-desc">API client manager used to send the changes.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-info" /><code><Link to="/mod/game-api/types/assembly-api-models/playerreportinfo">{"PlayerReportInfo"}</Link>{" Info { get; set; }"}</code> | <span className="api-desc">The report's details, replaced with the API's reply after each change.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-actedon" /><code>{"async Task ActedOn()"}</code> | <span className="api-desc">Sets the report's status to acted on and stores the updated report.</span> |
| <Link id="m-ignore" /><code>{"async Task Ignore()"}</code> | <span className="api-desc">Sets the report's status to ignored and stores the updated report.</span> |

## Used in

Members of other types that take, return or hold a `PlayerReportAdmin`:

<div className="api-used-in">

[`IPlayerReportsClient.ViewAllReports`](/mod/game-api/types/assembly-api-client/iplayerreportsclient#m-viewallreports), [`PlayerReportsClient.ViewAllReports`](/mod/game-api/types/assembly-api-client/playerreportsclient#m-viewallreports), [`PlayerReportSummary.Add`](/mod/game-api/types/assembly-api-client/playerreportsummary#m-add), [`PlayerReportSummary.Latest`](/mod/game-api/types/assembly-api-client/playerreportsummary#m-latest), [`PlayerReportSummary.LatestActedOn`](/mod/game-api/types/assembly-api-client/playerreportsummary#m-latestactedon), [`PlayerReportSummary.reports`](/mod/game-api/types/assembly-api-client/playerreportsummary#m-reports), [`PlayerReportSummary.Reports`](/mod/game-api/types/assembly-api-client/playerreportsummary#m-reports-2), [`ServerReportCollection.Add`](/mod/game-api/types/assembly-api-client/serverreportcollection#m-add), [`PlayerReportBaseNotification.BanUserFromReport`](/mod/game-api/types/alta-menus/playerreportbasenotification#m-banuserfromreport), [`PlayerReportInboxInfoPanel.SetupForReport`](/mod/game-api/types/alta-menus/playerreportinboxinfopanel#m-setupforreport), [`PlayerReportNotification.PlayerReportNotification`](/mod/game-api/types/alta-menus/playerreportnotification#m-ctor), [`PlayerReportNotification.report`](/mod/game-api/types/alta-menus/playerreportnotification#m-report).

</div>
