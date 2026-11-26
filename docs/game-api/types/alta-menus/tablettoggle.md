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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TabletToggle()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-button" /><code>{"private "}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" button"}</code> | The toggle's button. Not used by the code itself. |
| <Link id="m-buttonhome" /><code>{"private GameObject ButtonHome"}</code> | Home button shown in the normal state. |
| <Link id="m-buttonhomeextended" /><code>{"private GameObject ButtonHomeExtended"}</code> | Home button shown in the extended state. |
| <Link id="m-home" /><code>{"private "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" home"}</code> | Panel switched to when going back to the normal state. |
| <Link id="m-homeextended" /><code>{"private "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" homeExtended"}</code> | Panel switched to when going to the extended state. |
| <Link id="m-isextended" /><code>{"private bool isExtended"}</code> | Whether the tablet is in the extended state now. |
| <Link id="m-playerlistback" /><code>{"private GameObject PlayerListBack"}</code> | Back object shown only in the extended state. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tablettoggle" /><code>{"void tabletToggle()"}</code> | Flips between the normal and extended state, switching panels and button visibility. |
