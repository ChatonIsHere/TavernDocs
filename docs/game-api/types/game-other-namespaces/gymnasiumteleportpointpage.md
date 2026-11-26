---
title: "GymnasiumTeleportPointPage"
description: "Client tablet panel in the feature test gymnasium that lists every non-default SpawnArea in pages and teleports the local player to the one picked."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GymnasiumTeleportPointPage

A **class** in `Root.Township`, `ATT.FeatureTestGymnasium`.

Client tablet panel in the feature test gymnasium that lists every non-default `SpawnArea` in pages and teleports the local player to the one picked.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`PanelComponent`](/game-api/types/alta-menus/panelcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GymnasiumTeleportPointPage()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-backbutton" /><code>{"private "}<Link to="/game-api/types/alta-menus/buttonwithevents">{"ButtonWithEvents"}</Link>{" backButton"}</code> | Button that goes to the previous page. |
| <Link id="m-currentpage" /><code>{"private int currentPage"}</code> | Zero-based index of the page being shown. |
| <Link id="m-despawntablet" /><code>{"private Action despawnTablet"}</code> | Action passed to `Setup` that removes the tablet after a teleport. |
| <Link id="m-forwardbutton" /><code>{"private "}<Link to="/game-api/types/alta-menus/buttonwithevents">{"ButtonWithEvents"}</Link>{" forwardButton"}</code> | Button that goes to the next page. |
| <Link id="m-teleportlistelements" /><code>{"private "}<Link to="/game-api/types/global-t-x/teleportpointelement">{"TeleportPointElement"}</Link>{"[] teleportListElements"}</code> | The fixed list elements on the panel. Their count is the page size. |
| <Link id="m-teleportpoints" /><code>{"private "}<Link to="/game-api/types/global-s/spawnarea">{"SpawnArea"}</Link>{"[] teleportPoints"}</code> | All spawn areas found by `Setup`, sorted by identifier name. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pageoffset" /><code>{"private int PageOffset { get; }"}</code> | Index of the first spawn area on the current page. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"void Setup(Action despawnTablet)"}</code> | Finds all spawn areas except the default one, sorts them by identifier and shows the first page. Takes the action that despawns the tablet. |

<details>
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clearelement" /><code>{"private void ClearElement("}<Link to="/game-api/types/global-t-x/teleportpointelement">{"TeleportPointElement"}</Link>{" view)"}</code> | Clears and hides one list element and unhooks its selection handler. |
| <Link id="m-displaynospawnpoints" /><code>{"private void DisplayNoSpawnPoints()"}</code> | Hides all list elements and both page buttons when there are no spawn areas. |
| <Link id="m-hasnextpage" /><code>{"private bool HasNextPage()"}</code> | True when there are more spawn areas after the current page. |
| <Link id="m-onpagebackwards" /><code>{"private void OnPageBackwards("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> | Back button handler: shows the previous page. |
| <Link id="m-onpageforward" /><code>{"private void OnPageForward("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> | Forward button handler: shows the next page. |
| <Link id="m-onteleportpointselected" /><code>{"private void OnTeleportPointSelected("}<Link to="/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" element)"}</code> | Despawns the tablet and moves the local player to a random position in the chosen spawn area. |
| <Link id="m-resetpanel" /><code>{"private void ResetPanel()"}</code> | Clears every list element. |
| <Link id="m-setupelement" /><code>{"private void SetupElement("}<Link to="/game-api/types/global-t-x/teleportpointelement">{"TeleportPointElement"}</Link>{" view, "}<Link to="/game-api/types/global-s/spawnarea">{"SpawnArea"}</Link>{" spawnPoint)"}</code> | Fills one list element with a spawn area, hooks its selection handler and shows it. |
| <Link id="m-setupnavigationbuttons" /><code>{"private void SetupNavigationButtons()"}</code> | Shows and hooks the forward and back buttons only when there is a page in that direction. |
| <Link id="m-setupteleportpointelements" /><code>{"private void SetupTeleportPointElements()"}</code> | Fills the list elements with the spawn areas for the current page. |
| <Link id="m-updatepageview" /><code>{"private void UpdatePageView(int page)"}</code> | Switches to the given page and redraws the list and buttons. |

</details>

## Used in

Members of other types that take, return or hold a `GymnasiumTeleportPointPage`:

[`GymnasiumTeleportTablet.teleportPointPage`](/game-api/types/game-other-namespaces/gymnasiumteleporttablet#m-teleportpointpage).
