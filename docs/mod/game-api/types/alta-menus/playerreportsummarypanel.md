---
title: "PlayerReportSummaryPanel"
description: "Client: server management panel that sums up all reports against one player: total count, counts per reason, reporters, latest date and any ban."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerReportSummaryPanel

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

Client: server management panel that sums up all reports against one player: total count, counts per reason, reporters, latest date and any ban.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerReportSummaryPanel()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actiontakenattext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" actionTakenAtText"}</code> | <span className="api-desc">Date of the latest ban.</span> |
| <Link id="m-actiontakenbytext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" actionTakenByText"}</code> | <span className="api-desc">Who made the latest ban.</span> |
| <Link id="m-actiontakentext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" actionTakenText"}</code> | <span className="api-desc">Shows "Action taken: Banned" if any report was acted on.</span> |
| <Link id="m-reasontext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" reasonText"}</code> | <span className="api-desc">One line per report reason with its count, most common first.</span> |
| <Link id="m-reportedusertext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" reportedUserText"}</code> | <span className="api-desc">Reported player's name and total report count.</span> |
| <Link id="m-reportertext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" reporterText"}</code> | <span className="api-desc">Latest reporter's name and how many others reported.</span> |
| <Link id="m-servertext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" serverText"}</code> | <span className="api-desc">The server the reports came from.</span> |
| <Link id="m-timetext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" timeText"}</code> | <span className="api-desc">Date of the latest report and roughly how long ago it was.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setupforreport" /><code>{"void SetupForReport("}<Link to="/mod/game-api/types/assembly-api-client/playerreportsummary">{"PlayerReportSummary"}</Link>{" playerSummary)"}</code> | <span className="api-desc">Fills the texts from a report summary: total and per-reason counts, latest reporter plus how many others, latest report date and the latest ban if any.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Clears the report texts when the panel is shown.</span> |
| <Link id="m-pluralize" /><code>{"private static string Pluralize(string value, int count, int ifOver = 1)"}</code> | <span className="api-desc">Adds an `s` to a word when the count is over `ifOver` (default 1).</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerReportSummaryPanel`:

<div className="api-used-in">

[`PlayerReportSummaryNotification.PlayerReportSummaryNotification`](/mod/game-api/types/alta-menus/playerreportsummarynotification#m-ctor), [`PlayerReportSummaryNotification.reportInfoPanel`](/mod/game-api/types/alta-menus/playerreportsummarynotification#m-reportinfopanel), [`ReportsPanel.reportInfoPanel`](/mod/game-api/types/alta-menus/reportspanel#m-reportinfopanel).

</div>
