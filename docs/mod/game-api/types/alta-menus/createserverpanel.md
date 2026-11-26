---
title: "CreateServerPanel"
description: "Client main menu panel for creating a new server (group) through the Alta API, with name, description, join type and region."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CreateServerPanel

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

Client main menu panel for creating a new server (group) through the Alta API, with name, description, join type and region.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`ServerDetailsPanel`](/mod/game-api/types/alta-menus/serverdetailspanel)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CreateServerPanel()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cancreatetext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" canCreateText"}</code> | Text saying whether the player can create a server. |
| <Link id="m-currentregion" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/serverdetailspanel-buttondata">{"ServerDetailsPanel.ButtonData"}</Link>{" currentRegion"}</code> | The chosen region button data; its `data` is the launch region sent to the API. |
| <Link id="m-disablewhencantcreate" /><code>{"private GameObject[] disableWhenCantCreate"}</code> | Objects hidden when no more servers can be created, and after one is created. |
| <Link id="m-regionbuttondata" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/serverdetailspanel-buttondata">{"ServerDetailsPanel.ButtonData"}</Link>{"[] regionButtonData"}</code> | Region options, each tying a button to a region name. |
| <Link id="m-regionbuttons" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/buttoncollection">{"ButtonCollection"}</Link>{" regionButtons"}</code> | The region button group. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> | Runs `CheckIfCreateIsPossible` behind a loading screen. |
| <Link id="m-getsummarytext" /><code>{"protected override string GetSummaryText()"}</code> | Builds the summary of name, description, join type and region shown before confirming. |
| <Link id="m-run" /><code>{"protected override async Task Run()"}</code> | Creates the group and server through the API, then offers to manage it; shows a retry popup on failure. |
| <Link id="m-start" /><code>{"protected override void Start()"}</code> | Listens for region button changes. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkifcreateispossible" /><code>{"private async Task CheckIfCreateIsPossible()"}</code> | Asks the API if the player can create another server, sets the message and shows or hides the create controls. |
| <Link id="m-handleregionchanged" /><code>{"private void HandleRegionChanged("}<Link to="/mod/game-api/types/alta-menus/buttoncollection">{"ButtonCollection"}</Link>{" obj)"}</code> | Picks the region from the chosen button and updates the summary. |
| <Link id="m-isallowedtocreateserver" /><code>{"private async Task<bool> IsAllowedToCreateServer()"}</code> | True if the API's server allocation for the player has any left. |

</details>
