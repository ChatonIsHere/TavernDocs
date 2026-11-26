---
title: "PlayerReportSummaryNotification"
description: "Notification summarising the reports against one user, shown by the latest report."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerReportSummaryNotification

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

Notification summarising the reports against one user, shown by the latest report. Accept bans the user; there is no decline.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`PlayerReportBaseNotification`](/mod/game-api/types/alta-menus/playerreportbasenotification), `IEquatable<PlayerReportSummaryNotification>`
- **Derived types** [`PlayerReportSummaryNotification`](/mod/game-api/types/alta-menus/playerreportsummarynotification)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerReportSummaryNotification("}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService, "}<Link to="/mod/game-api/types/assembly-api-client/playerreportsummary">{"PlayerReportSummary"}</Link>{" report, "}<Link to="/mod/game-api/types/alta-menus/playerreportsummarypanel">{"PlayerReportSummaryPanel"}</Link>{" reportInfoPanel, "}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> | <span className="api-desc">Built by the game's dependency injection (VContainer), which passes the services in.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-report" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-api-client/playerreportsummary">{"PlayerReportSummary"}</Link>{" report"}</code> | <span className="api-desc">The report summary (all reports on one player) this notification shows.</span> |
| <Link id="m-reportinfopanel" /><code>{"private readonly "}<Link to="/mod/game-api/types/alta-menus/playerreportsummarypanel">{"PlayerReportSummaryPanel"}</Link>{" reportInfoPanel"}</code> | <span className="api-desc">Panel that shows the summary's details while the notification is selected.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isusingaccept" /><code>{"override bool IsUsingAccept { get; }"}</code> | <span className="api-desc">True when none of the reports has been acted on.</span> |
| <Link id="m-isusingdecline" /><code>{"override bool IsUsingDecline { get; }"}</code> | <span className="api-desc">Always false.</span> |
| <Link id="m-shortmessage" /><code>{"override string ShortMessage { get; }"}</code> | <span className="api-desc">The reported user's name.</span> |
| <Link id="m-time" /><code>{"override DateTime Time { get; }"}</code> | <span className="api-desc">When the latest report was made.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-accept" /><code>{"override Task<bool> Accept()"}</code> | <span className="api-desc">Bans the reported user based on the latest report.</span> |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | <span className="api-desc">Equal when the latest report IDs match.</span> |
| <Link id="m-equals-2" /><code>{"bool Equals("}<Link to="/mod/game-api/types/alta-menus/playerreportsummarynotification">{"PlayerReportSummaryNotification"}</Link>{" other)"}</code> | <span className="api-desc">Equal when the latest report IDs match.</span> |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | <span className="api-desc">Hash from the summary and panel.</span> |
| <Link id="m-onselected" /><code>{"override void OnSelected(bool isSelected)"}</code> | <span className="api-desc">Shows the summary panel when selected and hides it when not.</span> |
