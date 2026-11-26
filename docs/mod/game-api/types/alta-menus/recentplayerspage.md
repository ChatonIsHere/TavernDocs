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

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`PanelComponent`](/mod/game-api/types/alta-menus/panelcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RecentPlayersPage()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-backbutton" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/buttonwithevents">{"ButtonWithEvents"}</Link>{" backButton"}</code> | <span className="api-desc">Previous page button.</span> |
| <Link id="m-currentpage" /><code>{"private int currentPage"}</code> | <span className="api-desc">Zero-based page shown.</span> |
| <Link id="m-emptytext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" emptyText"}</code> | <span className="api-desc">Text shown when there are no recent players.</span> |
| <Link id="m-forwardbutton" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/buttonwithevents">{"ButtonWithEvents"}</Link>{" forwardButton"}</code> | <span className="api-desc">Next page button.</span> |
| <Link id="m-homebutton" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/buttonwithevents">{"ButtonWithEvents"}</Link>{" homeButton"}</code> | <span className="api-desc">Button that refreshes the list.</span> |
| <Link id="m-playerlistelements" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/recentplayerelement">{"RecentPlayerElement"}</Link>{"[] playerListElements"}</code> | <span className="api-desc">The row views; their count is the page size.</span> |
| <Link id="m-recentplayeractionpage" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/recentplayeractionpage">{"RecentPlayerActionPage"}</Link>{" recentPlayerActionPage"}</code> | <span className="api-desc">Page opened when a player is chosen.</span> |
| <Link id="m-recentplayers" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{"[] recentPlayers"}</code> | <span className="api-desc">The fetched recent player interactions.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pageoffset" /><code>{"private int PageOffset { get; }"}</code> | <span className="api-desc">Index of the first player on the current page.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> | <span className="api-desc">Clears the rows and, if on a server, reloads the list behind a loading screen.</span> |
| <Link id="m-handlestatechange" /><code>{"protected override void HandleStateChange("}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> | <span className="api-desc">Hooks the home button to refresh the list while the panel is active.</span> |

<details className="api-private">
<summary>14 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clearelement" /><code>{"private void ClearElement("}<Link to="/mod/game-api/types/global-q-r/recentplayerelement">{"RecentPlayerElement"}</Link>{" view)"}</code> | <span className="api-desc">Empties a list row, unhooks its selection and hides it.</span> |
| <Link id="m-displaynorecentplayers" /><code>{"private void DisplayNoRecentPlayers()"}</code> | <span className="api-desc">Shows the empty text and hides all rows and paging buttons.</span> |
| <Link id="m-getrecentplayerslist" /><code>{"private async Task GetRecentPlayersList()"}</code> | <span className="api-desc">Loads the friend list, then fetches recent player interactions for the joined server from the API and shows the current page.</span> |
| <Link id="m-hasnextpage" /><code>{"private bool HasNextPage()"}</code> | <span className="api-desc">True if there are more players after the current page.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Marks the page to refresh next time it opens.</span> |
| <Link id="m-onpagebackwards" /><code>{"private void OnPageBackwards("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> | <span className="api-desc">Shows the previous page.</span> |
| <Link id="m-onpageforward" /><code>{"private void OnPageForward("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> | <span className="api-desc">Shows the next page.</span> |
| <Link id="m-onplayerselected" /><code>{"private void OnPlayerSelected("}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" element)"}</code> | <span className="api-desc">Opens the action page for the chosen player.</span> |
| <Link id="m-refreshlist" /><code>{"private void RefreshList("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> | <span className="api-desc">Home button handler; calls `RefreshData`.</span> |
| <Link id="m-resetpanel" /><code>{"private void ResetPanel()"}</code> | <span className="api-desc">Hides the empty text and clears all rows.</span> |
| <Link id="m-setupelement" /><code>{"private void SetupElement("}<Link to="/mod/game-api/types/global-q-r/recentplayerelement">{"RecentPlayerElement"}</Link>{" view, "}<Link to="/mod/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" player)"}</code> | <span className="api-desc">Fills a row with a player, hooks its selection and shows it.</span> |
| <Link id="m-setupnavigationbuttons" /><code>{"private void SetupNavigationButtons()"}</code> | <span className="api-desc">Shows and hooks the forward and back buttons only when there is a page in that direction.</span> |
| <Link id="m-setupplayerelements" /><code>{"private void SetupPlayerElements()"}</code> | <span className="api-desc">Fills the rows with the players on the current page.</span> |
| <Link id="m-updatepageview" /><code>{"private void UpdatePageView(int page)"}</code> | <span className="api-desc">Switches to a page and redraws it, or shows the empty text if there are no recent players.</span> |

</details>
