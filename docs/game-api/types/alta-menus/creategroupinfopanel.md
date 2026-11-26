---
title: "CreateGroupInfoPanel"
description: "Keeps an info object visible only while at least one of a set of panels is active."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CreateGroupInfoPanel

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

Keeps an info object visible only while at least one of a set of panels is active.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CreateGroupInfoPanel()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-showwhenactive" /><code>{"private "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{"[] showWhenActive"}</code> | The panels that make this object visible. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Listens to each panel's state changes and sets visibility once. |
| <Link id="m-handlestatechange" /><code>{"private void HandleStateChange("}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" obj)"}</code> | Shows this object if any panel in `showWhenActive` is active, hides it otherwise. |

</details>
