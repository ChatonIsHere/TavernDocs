---
title: "SmelterUnlockManager"
description: "Tracks which upgrades a smelter has, and from them the recipes, materials and speed it allows."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SmelterUnlockManager

A **class** in `Root.Township`, `Alta.Blacksmithing`.

Tracks which upgrades a smelter has, and from them the recipes, materials and speed it allows. A component next to `Smelter`; the server applies the default upgrades in `Awake`.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Smelting and forging](/mod/game-api/game-systems/smelting-and-forging#smelterupgrades-and-smelterunlockmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SmelterUnlockManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-defaultupgrades" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/smelterupgrades">{"SmelterUpgrades"}</Link>{" defaultUpgrades"}</code> | <span className="api-desc">Upgrade unlocked at start on normal servers.</span> |
| <Link id="m-physmats" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{"> physMats"}</code> | <span className="api-desc">Backing field for `PhysicalMaterials`.</span> |
| <Link id="m-recipes" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-crafting/smeltingrecipe">{"SmeltingRecipe"}</Link>{"> recipes"}</code> | <span className="api-desc">Backing field for `Recipes`.</span> |
| <Link id="m-simpleserverdefaultupgrades" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/smelterupgrades">{"SmelterUpgrades"}</Link>{" simpleServerDefaultUpgrades"}</code> | <span className="api-desc">Upgrade unlocked at start on simple servers, if set.</span> |
| <Link id="m-unlocks" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-crafting/smelterupgrades">{"SmelterUpgrades"}</Link>{"> unlocks"}</code> | <span className="api-desc">Private: the unlocked upgrades.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-physicalmaterials" /><code>{"IReadOnlyCollection<"}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{"> PhysicalMaterials { get; }"}</code> | <span className="api-desc">Materials the smelter can work with from its unlocked upgrades.</span> |
| <Link id="m-recipes-2" /><code>{"IReadOnlyCollection<"}<Link to="/mod/game-api/types/alta-crafting/smeltingrecipe">{"SmeltingRecipe"}</Link>{"> Recipes { get; }"}</code> | <span className="api-desc">Smelting recipes from the unlocked upgrades.</span> |
| <Link id="m-speedmultiplier" /><code>{"float SpeedMultiplier { get; private set; }"}</code> | <span className="api-desc">Smelting speed, 1 plus the bonus of every unlock. Unlocking the same upgrade twice adds its bonus twice.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-unlockadded" /><code>{"event Action UnlockAdded"}</code> | <span className="api-desc">Raised after each `Unlock`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-lock" /><code>{"void Lock("}<Link to="/mod/game-api/types/alta-crafting/smelterupgrades">{"SmelterUpgrades"}</Link>{" definition)"}</code> | <span className="api-desc">Removes an upgrade, its speed bonus, and any recipes and materials no other unlocked upgrade still gives.</span> |
| <Link id="m-unlock" /><code>{"void Unlock("}<Link to="/mod/game-api/types/alta-crafting/smelterupgrades">{"SmelterUpgrades"}</Link>{" definition)"}</code> | <span className="api-desc">Adds an upgrade's recipes, materials and speed bonus, then raises `UnlockAdded`.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Server: unlocks the simple server defaults on a simple server, otherwise the normal defaults.</span> |

</details>

## Used in

Members of other types that take, return or hold a `SmelterUnlockManager`:

<div className="api-used-in">

[`Smelter.unlockManager`](/mod/game-api/types/alta-crafting/smelter#m-unlockmanager), [`SmelterRecipeUnlock.unlockManager`](/mod/game-api/types/global-s/smelterrecipeunlock#m-unlockmanager).

</div>
