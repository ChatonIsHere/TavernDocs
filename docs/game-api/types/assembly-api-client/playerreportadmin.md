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

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal PlayerReportAdmin("}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" lowLevel, "}<Link to="/game-api/types/assembly-api-models/playerreportinfo">{"PlayerReportInfo"}</Link>{" report)"}</code> | Creates a `PlayerReportAdmin` from `lowLevel` and `report`. |

</details>

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lowlevel" /><code>{"private readonly "}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" lowLevel"}</code> | API client manager used to send the changes. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-info" /><code><Link to="/game-api/types/assembly-api-models/playerreportinfo">{"PlayerReportInfo"}</Link>{" Info { get; set; }"}</code> | The report's details, replaced with the API's reply after each change. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-actedon" /><code>{"async Task ActedOn()"}</code> | Sets the report's status to acted on and stores the updated report. |
| <Link id="m-ignore" /><code>{"async Task Ignore()"}</code> | Sets the report's status to ignored and stores the updated report. |

## Used in

Members of other types that take, return or hold a `PlayerReportAdmin`:

[`IPlayerReportsClient.ViewAllReports`](/game-api/types/assembly-api-client/iplayerreportsclient#m-viewallreports), [`PlayerReportsClient.ViewAllReports`](/game-api/types/assembly-api-client/playerreportsclient#m-viewallreports), [`PlayerReportSummary.Add`](/game-api/types/assembly-api-client/playerreportsummary#m-add), [`PlayerReportSummary.Latest`](/game-api/types/assembly-api-client/playerreportsummary#m-latest), [`PlayerReportSummary.LatestActedOn`](/game-api/types/assembly-api-client/playerreportsummary#m-latestactedon), [`PlayerReportSummary.reports`](/game-api/types/assembly-api-client/playerreportsummary#m-reports), [`PlayerReportSummary.Reports`](/game-api/types/assembly-api-client/playerreportsummary#m-reports-2), [`ServerReportCollection.Add`](/game-api/types/assembly-api-client/serverreportcollection#m-add), [`PlayerReportBaseNotification.BanUserFromReport`](/game-api/types/alta-menus/playerreportbasenotification#m-banuserfromreport), [`PlayerReportInboxInfoPanel.SetupForReport`](/game-api/types/alta-menus/playerreportinboxinfopanel#m-setupforreport), [`PlayerReportNotification.PlayerReportNotification`](/game-api/types/alta-menus/playerreportnotification#m-ctor), [`PlayerReportNotification.report`](/game-api/types/alta-menus/playerreportnotification#m-report).
