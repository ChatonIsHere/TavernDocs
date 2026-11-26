---
title: "UnlockDockManager"
description: "Refreshes all its smelter recipe unlocks whenever an item is taken out of any of their docks."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UnlockDockManager

A **class** in `Root.Township`, the global namespace.

Refreshes all its smelter recipe unlocks whenever an item is taken out of any of their docks.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UnlockDockManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-smelterrecipeunlocks" /><code>{"private "}<Link to="/mod/game-api/types/global-s/smelterrecipeunlock">{"SmelterRecipeUnlock"}</Link>{"[] smelterRecipeUnlocks"}</code> | The smelter recipe unlocks to manage. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the undock event of each unlock's dock. |
| <Link id="m-refreshunlocks" /><code>{"private void RefreshUnlocks("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Calls `RefreshUnlock` on every smelter recipe unlock. |

</details>
