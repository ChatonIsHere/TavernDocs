---
title: "ReportsPanel"
description: "class ReportsPanel in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ReportsPanel

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`PanelComponent`](/game-api/types/alta-menus/panelcomponent)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ReportsPanel()"}</code> |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-acceptbutton" /><code>{"private "}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" acceptButton"}</code> |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> |
| <Link id="m-currentshowing" /><code>{"private "}<Link to="/game-api/types/alta-menus/uinotification">{"UINotification"}</Link>{" currentShowing"}</code> |
| <Link id="m-datamapping" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{", "}<Link to="/game-api/types/alta-menus/uinotification">{"UINotification"}</Link>{"> dataMapping"}</code> |
| <Link id="m-declinebutton" /><code>{"private "}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" declineButton"}</code> |
| <Link id="m-infotext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" infoText"}</code> |
| <Link id="m-playerreportelement" /><code>{"private "}<Link to="/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" playerReportElement"}</code> |
| <Link id="m-reportinfopanel" /><code>{"private "}<Link to="/game-api/types/alta-menus/playerreportsummarypanel">{"PlayerReportSummaryPanel"}</Link>{" reportInfoPanel"}</code> |
| <Link id="m-selected" /><code>{"private "}<Link to="/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" selected"}</code> |
| <Link id="m-uilist" /><code>{"private "}<Link to="/game-api/types/alta-menus/uilist">{"UIList"}</Link>{" uiList"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> |

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-getallnotifications" /><code>{"private async Task<IEnumerable<"}<Link to="/game-api/types/alta-menus/uinotification">{"UINotification"}</Link>{">> GetAllNotifications()"}</code> |
| <Link id="m-handleaccept" /><code>{"private async void HandleAccept("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> |
| <Link id="m-handledecline" /><code>{"private async void HandleDecline("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> |
| <Link id="m-handleselectedelement" /><code>{"private void HandleSelectedElement("}<Link to="/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" element)"}</code> |
| <Link id="m-setupinbox" /><code>{"private async Task SetupInbox()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ReportsPanel`:

[`MainMenuVrLifetimeScope.reportsPanel`](/game-api/types/assembly-other/mainmenuvrlifetimescope#m-reportspanel).
