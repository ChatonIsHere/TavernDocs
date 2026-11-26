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
| <Link id="m-ctor" /><code>{"ReportsPanel()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-acceptbutton" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" acceptButton"}</code> | <span className="api-desc">Accept button; its label comes from the selected report.</span> |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | <span className="api-desc">Analytics service passed to each report notification.</span> |
| <Link id="m-currentshowing" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/uinotification">{"UINotification"}</Link>{" currentShowing"}</code> | <span className="api-desc">The report whose details are shown now.</span> |
| <Link id="m-datamapping" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{", "}<Link to="/mod/game-api/types/alta-menus/uinotification">{"UINotification"}</Link>{"> dataMapping"}</code> | <span className="api-desc">Maps each list row to its report notification.</span> |
| <Link id="m-declinebutton" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" declineButton"}</code> | <span className="api-desc">Decline button; its label comes from the selected report.</span> |
| <Link id="m-infotext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" infoText"}</code> | <span className="api-desc">Text showing the selected report's message, or "Inbox is empty".</span> |
| <Link id="m-playerreportelement" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" playerReportElement"}</code> | <span className="api-desc">Row prefab cloned for each report.</span> |
| <Link id="m-reportinfopanel" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/playerreportsummarypanel">{"PlayerReportSummaryPanel"}</Link>{" reportInfoPanel"}</code> | <span className="api-desc">Panel that shows a report summary's details.</span> |
| <Link id="m-selected" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" selected"}</code> | <span className="api-desc">The selected list row.</span> |
| <Link id="m-uilist" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/uilist">{"UIList"}</Link>{" uiList"}</code> | <span className="api-desc">The list that holds the rows.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> | <span className="api-desc">VContainer injection point that supplies the analytics service.</span> |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> | <span className="api-desc">Rebuilds the list behind a loading screen.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getallnotifications" /><code>{"private async Task<IEnumerable<"}<Link to="/mod/game-api/types/alta-menus/uinotification">{"UINotification"}</Link>{">> GetAllNotifications()"}</code> | <span className="api-desc">Fetches all player report summaries from the API, wrapped as notifications and sorted by time.</span> |
| <Link id="m-handleaccept" /><code>{"private async void HandleAccept("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> | <span className="api-desc">Accepts the shown report (with a loading screen if it asks for one) and reselects it to update the view.</span> |
| <Link id="m-handledecline" /><code>{"private async void HandleDecline("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> | <span className="api-desc">Declines the shown report behind a loading screen and reselects it.</span> |
| <Link id="m-handleselectedelement" /><code>{"private void HandleSelectedElement("}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" element)"}</code> | <span className="api-desc">Shows the selected report's message and sets up the accept and decline buttons for it.</span> |
| <Link id="m-setupinbox" /><code>{"private async Task SetupInbox()"}</code> | <span className="api-desc">Builds a row per report, newest first, and reselects the one that was shown.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ReportsPanel`:

<div className="api-used-in">

[`MainMenuVrLifetimeScope.reportsPanel`](/mod/game-api/types/assembly-other/mainmenuvrlifetimescope#m-reportspanel).

</div>
