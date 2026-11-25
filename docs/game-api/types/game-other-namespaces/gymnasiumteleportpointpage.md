---
title: "GymnasiumTeleportPointPage"
description: "class GymnasiumTeleportPointPage in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GymnasiumTeleportPointPage

A **class** in `Root.Township`, `ATT.FeatureTestGymnasium`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`PanelComponent`](/game-api/types/alta-menus/panelcomponent)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GymnasiumTeleportPointPage()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-backbutton" /><code>{"private "}<Link to="/game-api/types/alta-menus/buttonwithevents">{"ButtonWithEvents"}</Link>{" backButton"}</code> |
| <Link id="m-currentpage" /><code>{"private int currentPage"}</code> |
| <Link id="m-despawntablet" /><code>{"private Action despawnTablet"}</code> |
| <Link id="m-forwardbutton" /><code>{"private "}<Link to="/game-api/types/alta-menus/buttonwithevents">{"ButtonWithEvents"}</Link>{" forwardButton"}</code> |
| <Link id="m-teleportlistelements" /><code>{"private "}<Link to="/game-api/types/global-t-x/teleportpointelement">{"TeleportPointElement"}</Link>{"[] teleportListElements"}</code> |
| <Link id="m-teleportpoints" /><code>{"private "}<Link to="/game-api/types/global-s/spawnarea">{"SpawnArea"}</Link>{"[] teleportPoints"}</code> |

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
| <Link id="m-setup" /><code>{"void Setup(Action despawnTablet)"}</code> |

<details>
<summary>11 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-clearelement" /><code>{"private void ClearElement("}<Link to="/game-api/types/global-t-x/teleportpointelement">{"TeleportPointElement"}</Link>{" view)"}</code> |
| <Link id="m-displaynospawnpoints" /><code>{"private void DisplayNoSpawnPoints()"}</code> |
| <Link id="m-hasnextpage" /><code>{"private bool HasNextPage()"}</code> |
| <Link id="m-onpagebackwards" /><code>{"private void OnPageBackwards("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> |
| <Link id="m-onpageforward" /><code>{"private void OnPageForward("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> |
| <Link id="m-onteleportpointselected" /><code>{"private void OnTeleportPointSelected("}<Link to="/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" element)"}</code> |
| <Link id="m-resetpanel" /><code>{"private void ResetPanel()"}</code> |
| <Link id="m-setupelement" /><code>{"private void SetupElement("}<Link to="/game-api/types/global-t-x/teleportpointelement">{"TeleportPointElement"}</Link>{" view, "}<Link to="/game-api/types/global-s/spawnarea">{"SpawnArea"}</Link>{" spawnPoint)"}</code> |
| <Link id="m-setupnavigationbuttons" /><code>{"private void SetupNavigationButtons()"}</code> |
| <Link id="m-setupteleportpointelements" /><code>{"private void SetupTeleportPointElements()"}</code> |
| <Link id="m-updatepageview" /><code>{"private void UpdatePageView(int page)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `GymnasiumTeleportPointPage`:

[`GymnasiumTeleportTablet.teleportPointPage`](/game-api/types/game-other-namespaces/gymnasiumteleporttablet#m-teleportpointpage).
