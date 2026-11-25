---
title: "PlayerReportSummaryNotification"
description: "class PlayerReportSummaryNotification in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerReportSummaryNotification

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

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
| <Link id="m-isusingaccept" /><code>{"override bool IsUsingAccept { get; }"}</code> |  |
| <Link id="m-isusingdecline" /><code>{"override bool IsUsingDecline { get; }"}</code> |  |
| <Link id="m-shortmessage" /><code>{"override string ShortMessage { get; }"}</code> |  |
| <Link id="m-time" /><code>{"override DateTime Time { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-accept" /><code>{"override Task<bool> Accept()"}</code> |  |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> |  |
| <Link id="m-equals-2" /><code>{"bool Equals("}<Link to="/game-api/types/alta-menus/playerreportsummarynotification">{"PlayerReportSummaryNotification"}</Link>{" other)"}</code> |  |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> |  |
| <Link id="m-onselected" /><code>{"override void OnSelected(bool isSelected)"}</code> |  |
