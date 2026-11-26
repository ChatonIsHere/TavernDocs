---
title: "CreateServerPanel"
description: "class CreateServerPanel in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CreateServerPanel

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`ServerDetailsPanel`](/game-api/types/alta-menus/serverdetailspanel)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CreateServerPanel()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-cancreatetext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" canCreateText"}</code> |
| <Link id="m-currentregion" /><code>{"private "}<Link to="/game-api/types/alta-menus/serverdetailspanel-buttondata">{"ServerDetailsPanel.ButtonData"}</Link>{" currentRegion"}</code> |
| <Link id="m-disablewhencantcreate" /><code>{"private GameObject[] disableWhenCantCreate"}</code> |
| <Link id="m-regionbuttondata" /><code>{"private "}<Link to="/game-api/types/alta-menus/serverdetailspanel-buttondata">{"ServerDetailsPanel.ButtonData"}</Link>{"[] regionButtonData"}</code> |
| <Link id="m-regionbuttons" /><code>{"private "}<Link to="/game-api/types/alta-menus/buttoncollection">{"ButtonCollection"}</Link>{" regionButtons"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> |
| <Link id="m-getsummarytext" /><code>{"protected override string GetSummaryText()"}</code> |
| <Link id="m-run" /><code>{"protected override async Task Run()"}</code> |
| <Link id="m-start" /><code>{"protected override void Start()"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-checkifcreateispossible" /><code>{"private async Task CheckIfCreateIsPossible()"}</code> |
| <Link id="m-handleregionchanged" /><code>{"private void HandleRegionChanged("}<Link to="/game-api/types/alta-menus/buttoncollection">{"ButtonCollection"}</Link>{" obj)"}</code> |
| <Link id="m-isallowedtocreateserver" /><code>{"private async Task<bool> IsAllowedToCreateServer()"}</code> |

</details>
