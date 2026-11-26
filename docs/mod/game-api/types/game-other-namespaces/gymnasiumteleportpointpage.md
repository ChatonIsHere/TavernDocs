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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`PanelComponent`](/mod/game-api/types/alta-menus/panelcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GymnasiumTeleportPointPage()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-backbutton" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/buttonwithevents">{"ButtonWithEvents"}</Link>{" backButton"}</code> | <span className="api-desc">Button that goes to the previous page.</span> |
| <Link id="m-currentpage" /><code>{"private int currentPage"}</code> | <span className="api-desc">Zero-based index of the page being shown.</span> |
| <Link id="m-despawntablet" /><code>{"private Action despawnTablet"}</code> | <span className="api-desc">Action passed to `Setup` that removes the tablet after a teleport.</span> |
| <Link id="m-forwardbutton" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/buttonwithevents">{"ButtonWithEvents"}</Link>{" forwardButton"}</code> | <span className="api-desc">Button that goes to the next page.</span> |
| <Link id="m-teleportlistelements" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/teleportpointelement">{"TeleportPointElement"}</Link>{"[] teleportListElements"}</code> | <span className="api-desc">The fixed list elements on the panel. Their count is the page size.</span> |
| <Link id="m-teleportpoints" /><code>{"private "}<Link to="/mod/game-api/types/global-s/spawnarea">{"SpawnArea"}</Link>{"[] teleportPoints"}</code> | <span className="api-desc">All spawn areas found by `Setup`, sorted by identifier name.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pageoffset" /><code>{"private int PageOffset { get; }"}</code> | <span className="api-desc">Index of the first spawn area on the current page.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"void Setup(Action despawnTablet)"}</code> | <span className="api-desc">Finds all spawn areas except the default one, sorts them by identifier and shows the first page. Takes the action that despawns the tablet.</span> |

<details className="api-private">
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clearelement" /><code>{"private void ClearElement("}<Link to="/mod/game-api/types/global-t-x/teleportpointelement">{"TeleportPointElement"}</Link>{" view)"}</code> | <span className="api-desc">Clears and hides one list element and unhooks its selection handler.</span> |
| <Link id="m-displaynospawnpoints" /><code>{"private void DisplayNoSpawnPoints()"}</code> | <span className="api-desc">Hides all list elements and both page buttons when there are no spawn areas.</span> |
| <Link id="m-hasnextpage" /><code>{"private bool HasNextPage()"}</code> | <span className="api-desc">True when there are more spawn areas after the current page.</span> |
| <Link id="m-onpagebackwards" /><code>{"private void OnPageBackwards("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> | <span className="api-desc">Back button handler: shows the previous page.</span> |
| <Link id="m-onpageforward" /><code>{"private void OnPageForward("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> | <span className="api-desc">Forward button handler: shows the next page.</span> |
| <Link id="m-onteleportpointselected" /><code>{"private void OnTeleportPointSelected("}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" element)"}</code> | <span className="api-desc">Despawns the tablet and moves the local player to a random position in the chosen spawn area.</span> |
| <Link id="m-resetpanel" /><code>{"private void ResetPanel()"}</code> | <span className="api-desc">Clears every list element.</span> |
| <Link id="m-setupelement" /><code>{"private void SetupElement("}<Link to="/mod/game-api/types/global-t-x/teleportpointelement">{"TeleportPointElement"}</Link>{" view, "}<Link to="/mod/game-api/types/global-s/spawnarea">{"SpawnArea"}</Link>{" spawnPoint)"}</code> | <span className="api-desc">Fills one list element with a spawn area, hooks its selection handler and shows it.</span> |
| <Link id="m-setupnavigationbuttons" /><code>{"private void SetupNavigationButtons()"}</code> | <span className="api-desc">Shows and hooks the forward and back buttons only when there is a page in that direction.</span> |
| <Link id="m-setupteleportpointelements" /><code>{"private void SetupTeleportPointElements()"}</code> | <span className="api-desc">Fills the list elements with the spawn areas for the current page.</span> |
| <Link id="m-updatepageview" /><code>{"private void UpdatePageView(int page)"}</code> | <span className="api-desc">Switches to the given page and redraws the list and buttons.</span> |

</details>

## Used in

Members of other types that take, return or hold a `GymnasiumTeleportPointPage`:

<div className="api-used-in">

[`GymnasiumTeleportTablet.teleportPointPage`](/mod/game-api/types/game-other-namespaces/gymnasiumteleporttablet#m-teleportpointpage).

</div>
