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
| <Link id="m-ctor" /><code>{"NavigateTo()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-button" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" button"}</code> | <span className="api-desc">The button that triggers the switch.</span> |
| <Link id="m-panel" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel"}</code> | <span className="api-desc">The panel to switch to.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the button's release to `panel.SwitchTo`.</span> |

</details>
