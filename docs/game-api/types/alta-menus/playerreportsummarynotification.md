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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`PlayerReportBaseNotification`](/game-api/types/alta-menus/playerreportbasenotification), `IEquatable<PlayerReportSummaryNotification>`
- **Derived types** [`PlayerReportSummaryNotification`](/game-api/types/alta-menus/playerreportsummarynotification)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerReportSummaryNotification("}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService, "}<Link to="/game-api/types/assembly-api-client/playerreportsummary">{"PlayerReportSummary"}</Link>{" report, "}<Link to="/game-api/types/alta-menus/playerreportsummarypanel">{"PlayerReportSummaryPanel"}</Link>{" reportInfoPanel, "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-report" /><code>{"private readonly "}<Link to="/game-api/types/assembly-api-client/playerreportsummary">{"PlayerReportSummary"}</Link>{" report"}</code> |  |
| <Link id="m-reportinfopanel" /><code>{"private readonly "}<Link to="/game-api/types/alta-menus/playerreportsummarypanel">{"PlayerReportSummaryPanel"}</Link>{" reportInfoPanel"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isusingaccept" /><code>{"override bool IsUsingAccept { get; }"}</code> | True when none of the reports has been acted on. |
| <Link id="m-isusingdecline" /><code>{"override bool IsUsingDecline { get; }"}</code> | Always false. |
| <Link id="m-shortmessage" /><code>{"override string ShortMessage { get; }"}</code> | The reported user's name. |
| <Link id="m-time" /><code>{"override DateTime Time { get; }"}</code> | When the latest report was made. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-accept" /><code>{"override Task<bool> Accept()"}</code> | Bans the reported user based on the latest report. |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | Equal when the latest report IDs match. |
| <Link id="m-equals-2" /><code>{"bool Equals("}<Link to="/game-api/types/alta-menus/playerreportsummarynotification">{"PlayerReportSummaryNotification"}</Link>{" other)"}</code> | Equal when the latest report IDs match. |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | Hash from the summary and panel. |
| <Link id="m-onselected" /><code>{"override void OnSelected(bool isSelected)"}</code> | Shows the summary panel when selected and hides it when not. |
