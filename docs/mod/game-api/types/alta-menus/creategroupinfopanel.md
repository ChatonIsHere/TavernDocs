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

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CreateGroupInfoPanel()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-showwhenactive" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{"[] showWhenActive"}</code> | <span className="api-desc">The panels that make this object visible.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Listens to each panel's state changes and sets visibility once.</span> |
| <Link id="m-handlestatechange" /><code>{"private void HandleStateChange("}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" obj)"}</code> | <span className="api-desc">Shows this object if any panel in `showWhenActive` is active, hides it otherwise.</span> |

</details>
