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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`PanelComponent`](/game-api/types/alta-menus/panelcomponent)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RecentPlayersListPanel()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | Analytics service used for friend request and report events. |
| <Link id="m-emptylisttext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" emptyListText"}</code> | Text shown when there are no recent players. |
| <Link id="m-listelement" /><code>{"private "}<Link to="/game-api/types/alta-menus/recentplayerpanellistelement">{"RecentPlayerPanelListElement"}</Link>{" listElement"}</code> | Row prefab cloned for each recent player. |
| <Link id="m-outgoingrequestslist" /><code>{"private "}<Link to="/game-api/types/alta-menus/panelcomponent">{"PanelComponent"}</Link>{" outgoingRequestsList"}</code> | Outgoing friend requests panel, marked to reload after a request. |
| <Link id="m-uilist" /><code>{"private "}<Link to="/game-api/types/alta-menus/uilist">{"UIList"}</Link>{" uiList"}</code> | The list that holds the rows. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> | VContainer injection point that supplies the analytics service. |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> | Rebuilds the list behind a loading screen. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addplayerasfriend" /><code>{"private async void AddPlayerAsFriend("}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" player)"}</code> | Asks for confirmation, then sends a friend request and marks the outgoing requests list to reload. |
| <Link id="m-loadrecentplayerslist" /><code>{"private async Task LoadRecentPlayersList()"}</code> | Fetches recent player interactions and builds a row for each. |
| <Link id="m-reportplayer" /><code>{"private async void ReportPlayer("}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" player, "}<Link to="/game-api/types/assembly-api-models/reporttype">{"ReportType"}</Link>{" reportType)"}</code> | Asks for confirmation, then reports the player for the chosen reason on the server where you met them. |
| <Link id="m-showoptionsforplayer" /><code>{"private void ShowOptionsForPlayer("}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" player)"}</code> | Shows "Add as Friend" (if not already friends) and "Report player" options. |
| <Link id="m-showreportplayerpopup" /><code>{"private async void ShowReportPlayerPopup("}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" player)"}</code> | Shows one option per `ReportType`, a frame later; each calls `ReportPlayer`. |

</details>

## Used in

Members of other types that take, return or hold a `RecentPlayersListPanel`:

[`MainMenuVrLifetimeScope.recentPlayersListPanel`](/game-api/types/assembly-other/mainmenuvrlifetimescope#m-recentplayerslistpanel).
