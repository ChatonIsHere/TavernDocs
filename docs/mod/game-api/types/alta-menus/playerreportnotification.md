---
title: "PlayerReportNotification"
description: "Inbox notification for one player report."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerReportNotification

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

Inbox notification for one player report. Accept bans the reported user; decline ignores the report.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`PlayerReportBaseNotification`](/mod/game-api/types/alta-menus/playerreportbasenotification), `IEquatable<PlayerReportNotification>`
- **Derived types** [`PlayerReportNotification`](/mod/game-api/types/alta-menus/playerreportnotification)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerReportNotification("}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService, "}<Link to="/mod/game-api/types/assembly-api-client/playerreportadmin">{"PlayerReportAdmin"}</Link>{" report, "}<Link to="/mod/game-api/types/alta-menus/playerreportinboxinfopanel">{"PlayerReportInboxInfoPanel"}</Link>{" reportInfoPanel, "}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> | <span className="api-desc">Built by the game's dependency injection (VContainer), which passes the services in.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-report" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-api-client/playerreportadmin">{"PlayerReportAdmin"}</Link>{" report"}</code> | <span className="api-desc">The admin view of the player report this notification shows.</span> |
| <Link id="m-reportinfopanel" /><code>{"private readonly "}<Link to="/mod/game-api/types/alta-menus/playerreportinboxinfopanel">{"PlayerReportInboxInfoPanel"}</Link>{" reportInfoPanel"}</code> | <span className="api-desc">Inbox panel that shows the report's details while the notification is selected.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isusingaccept" /><code>{"override bool IsUsingAccept { get; }"}</code> | <span className="api-desc">True unless the report has already been acted on.</span> |
| <Link id="m-isusingdecline" /><code>{"override bool IsUsingDecline { get; }"}</code> | <span className="api-desc">True while the report is awaiting action.</span> |
| <Link id="m-time" /><code>{"override DateTime Time { get; }"}</code> | <span className="api-desc">When the report was made.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-accept" /><code>{"override Task<bool> Accept()"}</code> | <span className="api-desc">Bans the reported user after confirmation.</span> |
| <Link id="m-decline" /><code>{"override Task Decline()"}</code> | <span className="api-desc">Marks the report as ignored.</span> |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | <span className="api-desc">Two notifications are equal when they are for the same report ID.</span> |
| <Link id="m-equals-2" /><code>{"bool Equals("}<Link to="/mod/game-api/types/alta-menus/playerreportnotification">{"PlayerReportNotification"}</Link>{" other)"}</code> | <span className="api-desc">Two notifications are equal when they are for the same report ID.</span> |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | <span className="api-desc">Hash from the report and info panel.</span> |
| <Link id="m-onselected" /><code>{"override void OnSelected(bool isSelected)"}</code> | <span className="api-desc">Shows the report in the info panel when selected and hides it when not.</span> |
