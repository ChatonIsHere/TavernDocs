---
title: "PlayerReportBaseNotification"
description: "abstract class PlayerReportBaseNotification in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerReportBaseNotification

An **abstract class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`UINotification`](/game-api/types/alta-menus/uinotification)
- **Derived types** [`PlayerReportNotification`](/game-api/types/alta-menus/playerreportnotification), [`PlayerReportSummaryNotification`](/game-api/types/alta-menus/playerreportsummarynotification)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PlayerReportBaseNotification("}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService, "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-accepttext" /><code>{"override string AcceptText { get; }"}</code> |  |
| <Link id="m-declinetext" /><code>{"override string DeclineText { get; }"}</code> |  |
| <Link id="m-message" /><code>{"override string Message { get; }"}</code> |  |
| <Link id="m-shortmessage" /><code>{"override string ShortMessage { get; }"}</code> |  |
| <Link id="m-showloadingforaccept" /><code>{"override bool ShowLoadingForAccept { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-banuserfromreport" /><code>{"protected async Task<bool> BanUserFromReport("}<Link to="/game-api/types/assembly-api-client/playerreportadmin">{"PlayerReportAdmin"}</Link>{" report, "}<Link to="/game-api/types/global-s/socialanalyticsbanmenupanelorigin">{"SocialAnalyticsBanMenuPanelOrigin"}</Link>{" panelOrigin)"}</code> |  |
