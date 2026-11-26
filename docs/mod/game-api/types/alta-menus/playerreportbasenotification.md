---
title: "PlayerReportBaseNotification"
description: "Base for main menu inbox notifications about player reports, where accepting bans the reported user from that server through the Alta API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerReportBaseNotification

An **abstract class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

Base for main menu inbox notifications about player reports, where accepting bans the reported user from that server through the Alta API.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`UINotification`](/mod/game-api/types/alta-menus/uinotification)
- **Derived types** [`PlayerReportNotification`](/mod/game-api/types/alta-menus/playerreportnotification), [`PlayerReportSummaryNotification`](/mod/game-api/types/alta-menus/playerreportsummarynotification)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PlayerReportBaseNotification("}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService, "}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> | <span className="api-desc">Built by the game's dependency injection (VContainer), which passes the services in.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | <span className="api-desc">Analytics service used to send a ban event when a ban from the report succeeds.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-accepttext" /><code>{"override string AcceptText { get; }"}</code> | <span className="api-desc">"Ban User".</span> |
| <Link id="m-declinetext" /><code>{"override string DeclineText { get; }"}</code> | <span className="api-desc">"Ok".</span> |
| <Link id="m-message" /><code>{"override string Message { get; }"}</code> | <span className="api-desc">"Player Report:".</span> |
| <Link id="m-shortmessage" /><code>{"override string ShortMessage { get; }"}</code> | <span className="api-desc">"Player Report".</span> |
| <Link id="m-showloadingforaccept" /><code>{"override bool ShowLoadingForAccept { get; }"}</code> | <span className="api-desc">False; the ban shows its own loading popup.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-banuserfromreport" /><code>{"protected async Task<bool> BanUserFromReport("}<Link to="/mod/game-api/types/assembly-api-client/playerreportadmin">{"PlayerReportAdmin"}</Link>{" report, "}<Link to="/mod/game-api/types/global-s/socialanalyticsbanmenupanelorigin">{"SocialAnalyticsBanMenuPanelOrigin"}</Link>{" panelOrigin)"}</code> | <span className="api-desc">Asks for confirmation, bans the reported user from the report's server and marks the report acted on. Returns whether it was done.</span> |
