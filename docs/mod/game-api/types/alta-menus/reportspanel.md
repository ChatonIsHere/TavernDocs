---
title: "ReportsPanel"
description: "Client panel listing player report summaries from the API, with accept and decline buttons."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ReportsPanel

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

Client panel listing player report summaries from the API, with accept and decline buttons. Works like `InboxPanel` but only for reports, probably for moderators.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`PanelComponent`](/mod/game-api/types/alta-menus/panelcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ReportsPanel()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-acceptbutton" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" acceptButton"}</code> | Accept button; its label comes from the selected report. |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | Analytics service passed to each report notification. |
| <Link id="m-currentshowing" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/uinotification">{"UINotification"}</Link>{" currentShowing"}</code> | The report whose details are shown now. |
| <Link id="m-datamapping" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{", "}<Link to="/mod/game-api/types/alta-menus/uinotification">{"UINotification"}</Link>{"> dataMapping"}</code> | Maps each list row to its report notification. |
| <Link id="m-declinebutton" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" declineButton"}</code> | Decline button; its label comes from the selected report. |
| <Link id="m-infotext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" infoText"}</code> | Text showing the selected report's message, or "Inbox is empty". |
| <Link id="m-playerreportelement" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" playerReportElement"}</code> | Row prefab cloned for each report. |
| <Link id="m-reportinfopanel" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/playerreportsummarypanel">{"PlayerReportSummaryPanel"}</Link>{" reportInfoPanel"}</code> | Panel that shows a report summary's details. |
| <Link id="m-selected" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" selected"}</code> | The selected list row. |
| <Link id="m-uilist" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/uilist">{"UIList"}</Link>{" uiList"}</code> | The list that holds the rows. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> | VContainer injection point that supplies the analytics service. |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> | Rebuilds the list behind a loading screen. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getallnotifications" /><code>{"private async Task<IEnumerable<"}<Link to="/mod/game-api/types/alta-menus/uinotification">{"UINotification"}</Link>{">> GetAllNotifications()"}</code> | Fetches all player report summaries from the API, wrapped as notifications and sorted by time. |
| <Link id="m-handleaccept" /><code>{"private async void HandleAccept("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> | Accepts the shown report (with a loading screen if it asks for one) and reselects it to update the view. |
| <Link id="m-handledecline" /><code>{"private async void HandleDecline("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> | Declines the shown report behind a loading screen and reselects it. |
| <Link id="m-handleselectedelement" /><code>{"private void HandleSelectedElement("}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" element)"}</code> | Shows the selected report's message and sets up the accept and decline buttons for it. |
| <Link id="m-setupinbox" /><code>{"private async Task SetupInbox()"}</code> | Builds a row per report, newest first, and reselects the one that was shown. |

</details>

## Used in

Members of other types that take, return or hold a `ReportsPanel`:

[`MainMenuVrLifetimeScope.reportsPanel`](/mod/game-api/types/assembly-other/mainmenuvrlifetimescope#m-reportspanel).
