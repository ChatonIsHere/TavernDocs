---
title: "RecentPlayersPage"
description: "class RecentPlayersPage in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RecentPlayersPage

A **class** in `Root.Township`, `Alta.SocialTablet`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`PanelComponent`](/game-api/types/alta-menus/panelcomponent)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RecentPlayersPage()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-backbutton" /><code>{"private "}<Link to="/game-api/types/alta-menus/buttonwithevents">{"ButtonWithEvents"}</Link>{" backButton"}</code> |
| <Link id="m-currentpage" /><code>{"private int currentPage"}</code> |
| <Link id="m-emptytext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" emptyText"}</code> |
| <Link id="m-forwardbutton" /><code>{"private "}<Link to="/game-api/types/alta-menus/buttonwithevents">{"ButtonWithEvents"}</Link>{" forwardButton"}</code> |
| <Link id="m-homebutton" /><code>{"private "}<Link to="/game-api/types/alta-menus/buttonwithevents">{"ButtonWithEvents"}</Link>{" homeButton"}</code> |
| <Link id="m-playerlistelements" /><code>{"private "}<Link to="/game-api/types/global-q-r/recentplayerelement">{"RecentPlayerElement"}</Link>{"[] playerListElements"}</code> |
| <Link id="m-recentplayeractionpage" /><code>{"private "}<Link to="/game-api/types/global-q-r/recentplayeractionpage">{"RecentPlayerActionPage"}</Link>{" recentPlayerActionPage"}</code> |
| <Link id="m-recentplayers" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{"[] recentPlayers"}</code> |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-pageoffset" /><code>{"private int PageOffset { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> |
| <Link id="m-handlestatechange" /><code>{"protected override void HandleStateChange("}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> |

<details>
<summary>14 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-clearelement" /><code>{"private void ClearElement("}<Link to="/game-api/types/global-q-r/recentplayerelement">{"RecentPlayerElement"}</Link>{" view)"}</code> |
| <Link id="m-displaynorecentplayers" /><code>{"private void DisplayNoRecentPlayers()"}</code> |
| <Link id="m-getrecentplayerslist" /><code>{"private async Task GetRecentPlayersList()"}</code> |
| <Link id="m-hasnextpage" /><code>{"private bool HasNextPage()"}</code> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |
| <Link id="m-onpagebackwards" /><code>{"private void OnPageBackwards("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> |
| <Link id="m-onpageforward" /><code>{"private void OnPageForward("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> |
| <Link id="m-onplayerselected" /><code>{"private void OnPlayerSelected("}<Link to="/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" element)"}</code> |
| <Link id="m-refreshlist" /><code>{"private void RefreshList("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> |
| <Link id="m-resetpanel" /><code>{"private void ResetPanel()"}</code> |
| <Link id="m-setupelement" /><code>{"private void SetupElement("}<Link to="/game-api/types/global-q-r/recentplayerelement">{"RecentPlayerElement"}</Link>{" view, "}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" player)"}</code> |
| <Link id="m-setupnavigationbuttons" /><code>{"private void SetupNavigationButtons()"}</code> |
| <Link id="m-setupplayerelements" /><code>{"private void SetupPlayerElements()"}</code> |
| <Link id="m-updatepageview" /><code>{"private void UpdatePageView(int page)"}</code> |

</details>
