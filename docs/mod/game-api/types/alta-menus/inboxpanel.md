---
title: "InboxPanel"
description: "Client menu panel showing the player's inbox: group invites, friend requests, API status messages and player reports, with accept and decline buttons."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InboxPanel

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

Client menu panel showing the player's inbox: group invites, friend requests, API status messages and player reports, with accept and decline buttons.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`PanelComponent`](/mod/game-api/types/alta-menus/panelcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InboxPanel()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-acceptbutton" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" acceptButton"}</code> | <span className="api-desc">Accept button; its label comes from the selected notification.</span> |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | <span className="api-desc">Analytics service passed to friend request and report notifications.</span> |
| <Link id="m-currentshowing" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/uinotification">{"UINotification"}</Link>{" currentShowing"}</code> | <span className="api-desc">The notification whose details are shown now.</span> |
| <Link id="m-datamapping" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{", "}<Link to="/mod/game-api/types/alta-menus/uinotification">{"UINotification"}</Link>{"> dataMapping"}</code> | <span className="api-desc">Maps each list row to its notification.</span> |
| <Link id="m-declinebutton" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" declineButton"}</code> | <span className="api-desc">Decline button; its label comes from the selected notification.</span> |
| <Link id="m-friendrequestelement" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" friendRequestElement"}</code> | <span className="api-desc">Row prefab for friend requests.</span> |
| <Link id="m-groupinviteelement" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" groupInviteElement"}</code> | <span className="api-desc">Row prefab for group invites.</span> |
| <Link id="m-infotext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" infoText"}</code> | <span className="api-desc">Text showing the selected notification's full message, or "Inbox is empty".</span> |
| <Link id="m-panelstorefresh" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/panelcomponent">{"PanelComponent"}</Link>{"[] panelsToRefresh"}</code> | <span className="api-desc">Other panels marked for reload after an accept or decline.</span> |
| <Link id="m-playerreportelement" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" playerReportElement"}</code> | <span className="api-desc">Row prefab for player reports.</span> |
| <Link id="m-reportinfopanel" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/playerreportinboxinfopanel">{"PlayerReportInboxInfoPanel"}</Link>{" reportInfoPanel"}</code> | <span className="api-desc">Panel that shows a player report's details.</span> |
| <Link id="m-selected" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" selected"}</code> | <span className="api-desc">The selected list row.</span> |
| <Link id="m-statuselement" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" statusElement"}</code> | <span className="api-desc">Row prefab for API status messages and anything else.</span> |
| <Link id="m-uilist" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/uilist">{"UIList"}</Link>{" uiList"}</code> | <span className="api-desc">The list that holds the notification rows.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> | <span className="api-desc">VContainer injection point that supplies the analytics service.</span> |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> | <span className="api-desc">Rebuilds the inbox behind a loading screen.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-forcerefresh" /><code>{"private void ForceRefresh()"}</code> | <span className="api-desc">Marks this panel and every panel in `panelsToRefresh` to reload next time they are shown.</span> |
| <Link id="m-getallnotifications" /><code>{"private async Task<IEnumerable<"}<Link to="/mod/game-api/types/alta-menus/uinotification">{"UINotification"}</Link>{">> GetAllNotifications()"}</code> | <span className="api-desc">Fetches group invites, friend requests, API status and reports awaiting action from the API, sorted by time. Each source fails on its own.</span> |
| <Link id="m-getfirstteninreverseorder" /><code>{"private static IEnumerable<"}<Link to="/mod/game-api/types/alta-menus/uinotification">{"UINotification"}</Link>{"> GetFirstTenInReverseOrder(IEnumerable<"}<Link to="/mod/game-api/types/alta-menus/uinotification">{"UINotification"}</Link>{"> allNotifications)"}</code> | <span className="api-desc">Returns the newest ten notifications, newest first.</span> |
| <Link id="m-handleaccept" /><code>{"private async void HandleAccept("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> | <span className="api-desc">Accepts the shown notification (with a loading screen if it asks for one), removes its row and refreshes.</span> |
| <Link id="m-handledecline" /><code>{"private async void HandleDecline("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> | <span className="api-desc">Declines the shown notification behind a loading screen, removes its row and refreshes.</span> |
| <Link id="m-handleselectedelement" /><code>{"private void HandleSelectedElement("}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" element)"}</code> | <span className="api-desc">Shows the selected notification's message and sets up the accept and decline buttons for it.</span> |
| <Link id="m-setupinbox" /><code>{"private async Task SetupInbox()"}</code> | <span className="api-desc">Builds a row for each of the newest ten notifications, picking the prefab by notification type, and reselects the one that was shown.</span> |

</details>

## Used in

Members of other types that take, return or hold a `InboxPanel`:

<div className="api-used-in">

[`MainMenuVrLifetimeScope.inboxPanel`](/mod/game-api/types/assembly-other/mainmenuvrlifetimescope#m-inboxpanel).

</div>
