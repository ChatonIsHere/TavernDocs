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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NavigateTo()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-button" /><code>{"private "}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" button"}</code> | The button that triggers the switch. |
| <Link id="m-panel" /><code>{"private "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel"}</code> | The panel to switch to. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the button's release to `panel.SwitchTo`. |

</details>
