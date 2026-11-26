---
title: "SmelterRecipeUnlock"
description: "Dock on a smelter that unlocks recipes while a recipe unlock item sits in it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SmelterRecipeUnlock

A **class** in `Root.Township`, the global namespace.

Dock on a smelter that unlocks recipes while a recipe unlock item sits in it. Server only.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SmelterRecipeUnlock()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> | <span className="api-desc">Backing field for `Dock`.</span> |
| <Link id="m-unlock" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/itemsmelterrecipeunlock">{"ItemSmelterRecipeUnlock"}</Link>{" unlock"}</code> | <span className="api-desc">The unlock from the last docked item. Not cleared on undock.</span> |
| <Link id="m-unlockmanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/smelterunlockmanager">{"SmelterUnlockManager"}</Link>{" unlockManager"}</code> | <span className="api-desc">The smelter's unlock manager.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-dock-2" /><code><Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" Dock { get; }"}</code> | <span className="api-desc">The dock the unlock item goes in.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-refreshunlock" /><code>{"void RefreshUnlock()"}</code> | <span className="api-desc">Applies the current unlock to the smelter's unlock manager again.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addunlock" /><code>{"private void AddUnlock("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Server: when an item docks, reads its `ItemSmelterRecipeUnlock` and unlocks it.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Server: hooks the dock's docked and undocked events.</span> |
| <Link id="m-removerecipes" /><code>{"private void RemoveRecipes("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Server: when the item leaves, locks its recipes again.</span> |

</details>

## Used in

Members of other types that take, return or hold a `SmelterRecipeUnlock`:

<div className="api-used-in">

[`UnlockDockManager.smelterRecipeUnlocks`](/mod/game-api/types/global-t-x/unlockdockmanager#m-smelterrecipeunlocks).

</div>
