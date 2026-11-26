---
title: "RecentPlayersListPanel"
description: "Client panel listing players the user recently played with, with options to add them as a friend or report them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RecentPlayersListPanel

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

Client panel listing players the user recently played with, with options to add them as a friend or report them.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`PanelComponent`](/mod/game-api/types/alta-menus/panelcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RecentPlayersListPanel()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | <span className="api-desc">Analytics service used for friend request and report events.</span> |
| <Link id="m-emptylisttext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" emptyListText"}</code> | <span className="api-desc">Text shown when there are no recent players.</span> |
| <Link id="m-listelement" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/recentplayerpanellistelement">{"RecentPlayerPanelListElement"}</Link>{" listElement"}</code> | <span className="api-desc">Row prefab cloned for each recent player.</span> |
| <Link id="m-outgoingrequestslist" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/panelcomponent">{"PanelComponent"}</Link>{" outgoingRequestsList"}</code> | <span className="api-desc">Outgoing friend requests panel, marked to reload after a request.</span> |
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
| <Link id="m-addplayerasfriend" /><code>{"private async void AddPlayerAsFriend("}<Link to="/mod/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" player)"}</code> | <span className="api-desc">Asks for confirmation, then sends a friend request and marks the outgoing requests list to reload.</span> |
| <Link id="m-loadrecentplayerslist" /><code>{"private async Task LoadRecentPlayersList()"}</code> | <span className="api-desc">Fetches recent player interactions and builds a row for each.</span> |
| <Link id="m-reportplayer" /><code>{"private async void ReportPlayer("}<Link to="/mod/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-api-models/reporttype">{"ReportType"}</Link>{" reportType)"}</code> | <span className="api-desc">Asks for confirmation, then reports the player for the chosen reason on the server where you met them.</span> |
| <Link id="m-showoptionsforplayer" /><code>{"private void ShowOptionsForPlayer("}<Link to="/mod/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" player)"}</code> | <span className="api-desc">Shows "Add as Friend" (if not already friends) and "Report player" options.</span> |
| <Link id="m-showreportplayerpopup" /><code>{"private async void ShowReportPlayerPopup("}<Link to="/mod/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" player)"}</code> | <span className="api-desc">Shows one option per `ReportType`, a frame later; each calls `ReportPlayer`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `RecentPlayersListPanel`:

<div className="api-used-in">

[`MainMenuVrLifetimeScope.recentPlayersListPanel`](/mod/game-api/types/assembly-other/mainmenuvrlifetimescope#m-recentplayerslistpanel).

</div>
