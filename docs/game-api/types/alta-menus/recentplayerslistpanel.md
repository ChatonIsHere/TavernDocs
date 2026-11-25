---
title: "RecentPlayersListPanel"
description: "class RecentPlayersListPanel in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RecentPlayersListPanel

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`PanelComponent`](/game-api/types/alta-menus/panelcomponent)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RecentPlayersListPanel()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> |
| <Link id="m-emptylisttext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" emptyListText"}</code> |
| <Link id="m-listelement" /><code>{"private "}<Link to="/game-api/types/alta-menus/recentplayerpanellistelement">{"RecentPlayerPanelListElement"}</Link>{" listElement"}</code> |
| <Link id="m-outgoingrequestslist" /><code>{"private "}<Link to="/game-api/types/alta-menus/panelcomponent">{"PanelComponent"}</Link>{" outgoingRequestsList"}</code> |
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
| <Link id="m-addplayerasfriend" /><code>{"private async void AddPlayerAsFriend("}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" player)"}</code> |
| <Link id="m-loadrecentplayerslist" /><code>{"private async Task LoadRecentPlayersList()"}</code> |
| <Link id="m-reportplayer" /><code>{"private async void ReportPlayer("}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" player, "}<Link to="/game-api/types/assembly-api-models/reporttype">{"ReportType"}</Link>{" reportType)"}</code> |
| <Link id="m-showoptionsforplayer" /><code>{"private void ShowOptionsForPlayer("}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" player)"}</code> |
| <Link id="m-showreportplayerpopup" /><code>{"private async void ShowReportPlayerPopup("}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" player)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `RecentPlayersListPanel`:

[`MainMenuVrLifetimeScope.recentPlayersListPanel`](/game-api/types/assembly-other/mainmenuvrlifetimescope#m-recentplayerslistpanel).
