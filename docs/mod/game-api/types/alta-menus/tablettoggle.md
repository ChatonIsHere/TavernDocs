---
title: "TabletToggle"
description: "Toggles a tablet menu between its normal home panel and an extended home panel, swapping which home button and player list back button are shown."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TabletToggle

A **class** in `Root.Township`, `Alta.Meta.UI`.

Toggles a tablet menu between its normal home panel and an extended home panel, swapping which home button and player list back button are shown. Client UI.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TabletToggle()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-button" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" button"}</code> | <span className="api-desc">The toggle's button. Not used by the code itself.</span> |
| <Link id="m-buttonhome" /><code>{"private GameObject ButtonHome"}</code> | <span className="api-desc">Home button shown in the normal state.</span> |
| <Link id="m-buttonhomeextended" /><code>{"private GameObject ButtonHomeExtended"}</code> | <span className="api-desc">Home button shown in the extended state.</span> |
| <Link id="m-home" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" home"}</code> | <span className="api-desc">Panel switched to when going back to the normal state.</span> |
| <Link id="m-homeextended" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" homeExtended"}</code> | <span className="api-desc">Panel switched to when going to the extended state.</span> |
| <Link id="m-isextended" /><code>{"private bool isExtended"}</code> | <span className="api-desc">Whether the tablet is in the extended state now.</span> |
| <Link id="m-playerlistback" /><code>{"private GameObject PlayerListBack"}</code> | <span className="api-desc">Back object shown only in the extended state.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tablettoggle" /><code>{"void tabletToggle()"}</code> | <span className="api-desc">Flips between the normal and extended state, switching panels and button visibility.</span> |
