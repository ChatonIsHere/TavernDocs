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
| <Link id="m-ctor" /><code>{"CreateServerPanel()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cancreatetext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" canCreateText"}</code> | <span className="api-desc">Text saying whether the player can create a server.</span> |
| <Link id="m-currentregion" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/serverdetailspanel-buttondata">{"ServerDetailsPanel.ButtonData"}</Link>{" currentRegion"}</code> | <span className="api-desc">The chosen region button data; its `data` is the launch region sent to the API.</span> |
| <Link id="m-disablewhencantcreate" /><code>{"private GameObject[] disableWhenCantCreate"}</code> | <span className="api-desc">Objects hidden when no more servers can be created, and after one is created.</span> |
| <Link id="m-regionbuttondata" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/serverdetailspanel-buttondata">{"ServerDetailsPanel.ButtonData"}</Link>{"[] regionButtonData"}</code> | <span className="api-desc">Region options, each tying a button to a region name.</span> |
| <Link id="m-regionbuttons" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/buttoncollection">{"ButtonCollection"}</Link>{" regionButtons"}</code> | <span className="api-desc">The region button group.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> | <span className="api-desc">Runs `CheckIfCreateIsPossible` behind a loading screen.</span> |
| <Link id="m-getsummarytext" /><code>{"protected override string GetSummaryText()"}</code> | <span className="api-desc">Builds the summary of name, description, join type and region shown before confirming.</span> |
| <Link id="m-run" /><code>{"protected override async Task Run()"}</code> | <span className="api-desc">Creates the group and server through the API, then offers to manage it; shows a retry popup on failure.</span> |
| <Link id="m-start" /><code>{"protected override void Start()"}</code> | <span className="api-desc">Listens for region button changes.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkifcreateispossible" /><code>{"private async Task CheckIfCreateIsPossible()"}</code> | <span className="api-desc">Asks the API if the player can create another server, sets the message and shows or hides the create controls.</span> |
| <Link id="m-handleregionchanged" /><code>{"private void HandleRegionChanged("}<Link to="/mod/game-api/types/alta-menus/buttoncollection">{"ButtonCollection"}</Link>{" obj)"}</code> | <span className="api-desc">Picks the region from the chosen button and updates the summary.</span> |
| <Link id="m-isallowedtocreateserver" /><code>{"private async Task<bool> IsAllowedToCreateServer()"}</code> | <span className="api-desc">True if the API's server allocation for the player has any left.</span> |

</details>
