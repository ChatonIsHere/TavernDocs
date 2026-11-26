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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`UINotification`](/game-api/types/alta-menus/uinotification)
- **Derived types** [`PlayerReportNotification`](/game-api/types/alta-menus/playerreportnotification), [`PlayerReportSummaryNotification`](/game-api/types/alta-menus/playerreportsummarynotification)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PlayerReportBaseNotification("}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService, "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> | Built by the game's dependency injection (VContainer), which passes the services in. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | Analytics service used to send a ban event when a ban from the report succeeds. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-accepttext" /><code>{"override string AcceptText { get; }"}</code> | "Ban User". |
| <Link id="m-declinetext" /><code>{"override string DeclineText { get; }"}</code> | "Ok". |
| <Link id="m-message" /><code>{"override string Message { get; }"}</code> | "Player Report:". |
| <Link id="m-shortmessage" /><code>{"override string ShortMessage { get; }"}</code> | "Player Report". |
| <Link id="m-showloadingforaccept" /><code>{"override bool ShowLoadingForAccept { get; }"}</code> | False; the ban shows its own loading popup. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-banuserfromreport" /><code>{"protected async Task<bool> BanUserFromReport("}<Link to="/game-api/types/assembly-api-client/playerreportadmin">{"PlayerReportAdmin"}</Link>{" report, "}<Link to="/game-api/types/global-s/socialanalyticsbanmenupanelorigin">{"SocialAnalyticsBanMenuPanelOrigin"}</Link>{" panelOrigin)"}</code> | Asks for confirmation, bans the reported user from the report's server and marks the report acted on. Returns whether it was done. |
