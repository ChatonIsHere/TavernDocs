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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`PlayerReportBaseNotification`](/game-api/types/alta-menus/playerreportbasenotification), `IEquatable<PlayerReportNotification>`
- **Derived types** [`PlayerReportNotification`](/game-api/types/alta-menus/playerreportnotification)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerReportNotification("}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService, "}<Link to="/game-api/types/assembly-api-client/playerreportadmin">{"PlayerReportAdmin"}</Link>{" report, "}<Link to="/game-api/types/alta-menus/playerreportinboxinfopanel">{"PlayerReportInboxInfoPanel"}</Link>{" reportInfoPanel, "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-report" /><code>{"private readonly "}<Link to="/game-api/types/assembly-api-client/playerreportadmin">{"PlayerReportAdmin"}</Link>{" report"}</code> | The admin view of the player report this notification shows. |
| <Link id="m-reportinfopanel" /><code>{"private readonly "}<Link to="/game-api/types/alta-menus/playerreportinboxinfopanel">{"PlayerReportInboxInfoPanel"}</Link>{" reportInfoPanel"}</code> | Inbox panel that shows the report's details while the notification is selected. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isusingaccept" /><code>{"override bool IsUsingAccept { get; }"}</code> | True unless the report has already been acted on. |
| <Link id="m-isusingdecline" /><code>{"override bool IsUsingDecline { get; }"}</code> | True while the report is awaiting action. |
| <Link id="m-time" /><code>{"override DateTime Time { get; }"}</code> | When the report was made. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-accept" /><code>{"override Task<bool> Accept()"}</code> | Bans the reported user after confirmation. |
| <Link id="m-decline" /><code>{"override Task Decline()"}</code> | Marks the report as ignored. |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | Two notifications are equal when they are for the same report ID. |
| <Link id="m-equals-2" /><code>{"bool Equals("}<Link to="/game-api/types/alta-menus/playerreportnotification">{"PlayerReportNotification"}</Link>{" other)"}</code> | Two notifications are equal when they are for the same report ID. |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | Hash from the report and info panel. |
| <Link id="m-onselected" /><code>{"override void OnSelected(bool isSelected)"}</code> | Shows the report in the info panel when selected and hides it when not. |
