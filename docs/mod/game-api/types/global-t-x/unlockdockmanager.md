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
| <Link id="m-ctor" /><code>{"UnlockDockManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-smelterrecipeunlocks" /><code>{"private "}<Link to="/mod/game-api/types/global-s/smelterrecipeunlock">{"SmelterRecipeUnlock"}</Link>{"[] smelterRecipeUnlocks"}</code> | <span className="api-desc">The smelter recipe unlocks to manage.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the undock event of each unlock's dock.</span> |
| <Link id="m-refreshunlocks" /><code>{"private void RefreshUnlocks("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Calls `RefreshUnlock` on every smelter recipe unlock.</span> |

</details>
