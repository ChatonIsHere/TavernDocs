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
| <Link id="m-ctor" /><code>{"InboxPanel()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-acceptbutton" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" acceptButton"}</code> | Accept button; its label comes from the selected notification. |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | Analytics service passed to friend request and report notifications. |
| <Link id="m-currentshowing" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/uinotification">{"UINotification"}</Link>{" currentShowing"}</code> | The notification whose details are shown now. |
| <Link id="m-datamapping" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{", "}<Link to="/mod/game-api/types/alta-menus/uinotification">{"UINotification"}</Link>{"> dataMapping"}</code> | Maps each list row to its notification. |
| <Link id="m-declinebutton" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" declineButton"}</code> | Decline button; its label comes from the selected notification. |
| <Link id="m-friendrequestelement" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" friendRequestElement"}</code> | Row prefab for friend requests. |
| <Link id="m-groupinviteelement" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" groupInviteElement"}</code> | Row prefab for group invites. |
| <Link id="m-infotext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" infoText"}</code> | Text showing the selected notification's full message, or "Inbox is empty". |
| <Link id="m-panelstorefresh" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/panelcomponent">{"PanelComponent"}</Link>{"[] panelsToRefresh"}</code> | Other panels marked for reload after an accept or decline. |
| <Link id="m-playerreportelement" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" playerReportElement"}</code> | Row prefab for player reports. |
| <Link id="m-reportinfopanel" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/playerreportinboxinfopanel">{"PlayerReportInboxInfoPanel"}</Link>{" reportInfoPanel"}</code> | Panel that shows a player report's details. |
| <Link id="m-selected" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" selected"}</code> | The selected list row. |
| <Link id="m-statuselement" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" statusElement"}</code> | Row prefab for API status messages and anything else. |
| <Link id="m-uilist" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/uilist">{"UIList"}</Link>{" uiList"}</code> | The list that holds the notification rows. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> | VContainer injection point that supplies the analytics service. |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> | Rebuilds the inbox behind a loading screen. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-forcerefresh" /><code>{"private void ForceRefresh()"}</code> | Marks this panel and every panel in `panelsToRefresh` to reload next time they are shown. |
| <Link id="m-getallnotifications" /><code>{"private async Task<IEnumerable<"}<Link to="/mod/game-api/types/alta-menus/uinotification">{"UINotification"}</Link>{">> GetAllNotifications()"}</code> | Fetches group invites, friend requests, API status and reports awaiting action from the API, sorted by time. Each source fails on its own. |
| <Link id="m-getfirstteninreverseorder" /><code>{"private static IEnumerable<"}<Link to="/mod/game-api/types/alta-menus/uinotification">{"UINotification"}</Link>{"> GetFirstTenInReverseOrder(IEnumerable<"}<Link to="/mod/game-api/types/alta-menus/uinotification">{"UINotification"}</Link>{"> allNotifications)"}</code> | Returns the newest ten notifications, newest first. |
| <Link id="m-handleaccept" /><code>{"private async void HandleAccept("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> | Accepts the shown notification (with a loading screen if it asks for one), removes its row and refreshes. |
| <Link id="m-handledecline" /><code>{"private async void HandleDecline("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> | Declines the shown notification behind a loading screen, removes its row and refreshes. |
| <Link id="m-handleselectedelement" /><code>{"private void HandleSelectedElement("}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" element)"}</code> | Shows the selected notification's message and sets up the accept and decline buttons for it. |
| <Link id="m-setupinbox" /><code>{"private async Task SetupInbox()"}</code> | Builds a row for each of the newest ten notifications, picking the prefab by notification type, and reselects the one that was shown. |

</details>

## Used in

Members of other types that take, return or hold a `InboxPanel`:

[`MainMenuVrLifetimeScope.inboxPanel`](/mod/game-api/types/assembly-other/mainmenuvrlifetimescope#m-inboxpanel).
