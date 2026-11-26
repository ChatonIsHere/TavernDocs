---
title: "RecentPlayersPage"
description: "Social tablet page that lists players you recently met on the current server, a page at a time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RecentPlayersPage

A **class** in `Root.Township`, `Alta.SocialTablet`.

Social tablet page that lists players you recently met on the current server, a page at a time. Client only.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`PanelComponent`](/game-api/types/alta-menus/panelcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RecentPlayersPage()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-backbutton" /><code>{"private "}<Link to="/game-api/types/alta-menus/buttonwithevents">{"ButtonWithEvents"}</Link>{" backButton"}</code> | Previous page button. |
| <Link id="m-currentpage" /><code>{"private int currentPage"}</code> | Zero-based page shown. |
| <Link id="m-emptytext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" emptyText"}</code> | Text shown when there are no recent players. |
| <Link id="m-forwardbutton" /><code>{"private "}<Link to="/game-api/types/alta-menus/buttonwithevents">{"ButtonWithEvents"}</Link>{" forwardButton"}</code> | Next page button. |
| <Link id="m-homebutton" /><code>{"private "}<Link to="/game-api/types/alta-menus/buttonwithevents">{"ButtonWithEvents"}</Link>{" homeButton"}</code> | Button that refreshes the list. |
| <Link id="m-playerlistelements" /><code>{"private "}<Link to="/game-api/types/global-q-r/recentplayerelement">{"RecentPlayerElement"}</Link>{"[] playerListElements"}</code> | The row views; their count is the page size. |
| <Link id="m-recentplayeractionpage" /><code>{"private "}<Link to="/game-api/types/global-q-r/recentplayeractionpage">{"RecentPlayerActionPage"}</Link>{" recentPlayerActionPage"}</code> | Page opened when a player is chosen. |
| <Link id="m-recentplayers" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{"[] recentPlayers"}</code> | The fetched recent player interactions. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pageoffset" /><code>{"private int PageOffset { get; }"}</code> | Index of the first player on the current page. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> | Clears the rows and, if on a server, reloads the list behind a loading screen. |
| <Link id="m-handlestatechange" /><code>{"protected override void HandleStateChange("}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> | Hooks the home button to refresh the list while the panel is active. |

<details>
<summary>14 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clearelement" /><code>{"private void ClearElement("}<Link to="/game-api/types/global-q-r/recentplayerelement">{"RecentPlayerElement"}</Link>{" view)"}</code> | Empties a list row, unhooks its selection and hides it. |
| <Link id="m-displaynorecentplayers" /><code>{"private void DisplayNoRecentPlayers()"}</code> | Shows the empty text and hides all rows and paging buttons. |
| <Link id="m-getrecentplayerslist" /><code>{"private async Task GetRecentPlayersList()"}</code> | Loads the friend list, then fetches recent player interactions for the joined server from the API and shows the current page. |
| <Link id="m-hasnextpage" /><code>{"private bool HasNextPage()"}</code> | True if there are more players after the current page. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Marks the page to refresh next time it opens. |
| <Link id="m-onpagebackwards" /><code>{"private void OnPageBackwards("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> | Shows the previous page. |
| <Link id="m-onpageforward" /><code>{"private void OnPageForward("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> | Shows the next page. |
| <Link id="m-onplayerselected" /><code>{"private void OnPlayerSelected("}<Link to="/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" element)"}</code> | Opens the action page for the chosen player. |
| <Link id="m-refreshlist" /><code>{"private void RefreshList("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> | Home button handler; calls `RefreshData`. |
| <Link id="m-resetpanel" /><code>{"private void ResetPanel()"}</code> | Hides the empty text and clears all rows. |
| <Link id="m-setupelement" /><code>{"private void SetupElement("}<Link to="/game-api/types/global-q-r/recentplayerelement">{"RecentPlayerElement"}</Link>{" view, "}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" player)"}</code> | Fills a row with a player, hooks its selection and shows it. |
| <Link id="m-setupnavigationbuttons" /><code>{"private void SetupNavigationButtons()"}</code> | Shows and hooks the forward and back buttons only when there is a page in that direction. |
| <Link id="m-setupplayerelements" /><code>{"private void SetupPlayerElements()"}</code> | Fills the rows with the players on the current page. |
| <Link id="m-updatepageview" /><code>{"private void UpdatePageView(int page)"}</code> | Switches to a page and redraws it, or shows the empty text if there are no recent players. |

</details>
