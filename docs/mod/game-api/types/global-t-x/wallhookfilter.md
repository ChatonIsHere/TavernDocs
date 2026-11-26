---
title: "WallHookFilter"
description: "Only lets items dock on a wall hook once the hook has been crafted (its RaycastCrafter is done)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WallHookFilter

A **class** in `Root.Township`, the global namespace.

Only lets items dock on a wall hook once the hook has been crafted (its `RaycastCrafter` is done).

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WallHookFilter()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-crafter" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/raycastcrafter">{"RaycastCrafter"}</Link>{" crafter"}</code> | The crafter whose crafted state allows docking. |
| <Link id="m-docks" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/dockarray">{"DockArray"}</Link>{" docks"}</code> | The docks the filter is added to. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Adds `CraftedFilter` to each dock's `DockFilter`. |
| <Link id="m-craftedfilter" /><code>{"private void CraftedFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> | Dock filter that blocks docking until `crafter.IsCrafted` is true. |

</details>
