---
title: "NavigateTo"
description: "Switches the UI to a given panel when a button is released."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NavigateTo

A **class** in `Root.Township`, `Alta.Meta.UI`.

Switches the UI to a given panel when a button is released.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NavigateTo()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-button" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" button"}</code> | The button that triggers the switch. |
| <Link id="m-panel" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel"}</code> | The panel to switch to. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the button's release to `panel.SwitchTo`. |

</details>
