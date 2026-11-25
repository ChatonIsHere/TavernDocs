---
title: "PlayerReportNotification"
description: "class PlayerReportNotification in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerReportNotification

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`PlayerReportBaseNotification`](/game-api/types/alta-menus/playerreportbasenotification), `IEquatable<PlayerReportNotification>`
- **Derived types** [`PlayerReportNotification`](/game-api/types/alta-menus/playerreportnotification)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerReportNotification("}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService, "}<Link to="/game-api/types/assembly-api-client/playerreportadmin">{"PlayerReportAdmin"}</Link>{" report, "}<Link to="/game-api/types/alta-menus/playerreportinboxinfopanel">{"PlayerReportInboxInfoPanel"}</Link>{" reportInfoPanel, "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-report" /><code>{"private readonly "}<Link to="/game-api/types/assembly-api-client/playerreportadmin">{"PlayerReportAdmin"}</Link>{" report"}</code> |  |
| <Link id="m-reportinfopanel" /><code>{"private readonly "}<Link to="/game-api/types/alta-menus/playerreportinboxinfopanel">{"PlayerReportInboxInfoPanel"}</Link>{" reportInfoPanel"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isusingaccept" /><code>{"override bool IsUsingAccept { get; }"}</code> |  |
| <Link id="m-isusingdecline" /><code>{"override bool IsUsingDecline { get; }"}</code> |  |
| <Link id="m-time" /><code>{"override DateTime Time { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-accept" /><code>{"override Task<bool> Accept()"}</code> |  |
| <Link id="m-decline" /><code>{"override Task Decline()"}</code> |  |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> |  |
| <Link id="m-equals-2" /><code>{"bool Equals("}<Link to="/game-api/types/alta-menus/playerreportnotification">{"PlayerReportNotification"}</Link>{" other)"}</code> |  |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> |  |
| <Link id="m-onselected" /><code>{"override void OnSelected(bool isSelected)"}</code> |  |
