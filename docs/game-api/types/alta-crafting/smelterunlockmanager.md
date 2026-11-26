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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Smelting and forging](/game-api/game-systems/smelting-and-forging#smelterupgrades-and-smelterunlockmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SmelterUnlockManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-defaultupgrades" /><code>{"private "}<Link to="/game-api/types/alta-crafting/smelterupgrades">{"SmelterUpgrades"}</Link>{" defaultUpgrades"}</code> | Upgrade unlocked at start on normal servers. |
| <Link id="m-physmats" /><code>{"private HashSet<"}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{"> physMats"}</code> | Backing field for `PhysicalMaterials`. |
| <Link id="m-recipes" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-crafting/smeltingrecipe">{"SmeltingRecipe"}</Link>{"> recipes"}</code> | Backing field for `Recipes`. |
| <Link id="m-simpleserverdefaultupgrades" /><code>{"private "}<Link to="/game-api/types/alta-crafting/smelterupgrades">{"SmelterUpgrades"}</Link>{" simpleServerDefaultUpgrades"}</code> | Upgrade unlocked at start on simple servers, if set. |
| <Link id="m-unlocks" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-crafting/smelterupgrades">{"SmelterUpgrades"}</Link>{"> unlocks"}</code> | Private: the unlocked upgrades. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-physicalmaterials" /><code>{"IReadOnlyCollection<"}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{"> PhysicalMaterials { get; }"}</code> | Materials the smelter can work with from its unlocked upgrades. |
| <Link id="m-recipes-2" /><code>{"IReadOnlyCollection<"}<Link to="/game-api/types/alta-crafting/smeltingrecipe">{"SmeltingRecipe"}</Link>{"> Recipes { get; }"}</code> | Smelting recipes from the unlocked upgrades. |
| <Link id="m-speedmultiplier" /><code>{"float SpeedMultiplier { get; private set; }"}</code> | Smelting speed, 1 plus the bonus of every unlock. Unlocking the same upgrade twice adds its bonus twice. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-unlockadded" /><code>{"event Action UnlockAdded"}</code> | Raised after each `Unlock`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-lock" /><code>{"void Lock("}<Link to="/game-api/types/alta-crafting/smelterupgrades">{"SmelterUpgrades"}</Link>{" definition)"}</code> | Removes an upgrade, its speed bonus, and any recipes and materials no other unlocked upgrade still gives. |
| <Link id="m-unlock" /><code>{"void Unlock("}<Link to="/game-api/types/alta-crafting/smelterupgrades">{"SmelterUpgrades"}</Link>{" definition)"}</code> | Adds an upgrade's recipes, materials and speed bonus, then raises `UnlockAdded`. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Server: unlocks the simple server defaults on a simple server, otherwise the normal defaults. |

</details>

## Used in

Members of other types that take, return or hold a `SmelterUnlockManager`:

[`Smelter.unlockManager`](/game-api/types/alta-crafting/smelter#m-unlockmanager), [`SmelterRecipeUnlock.unlockManager`](/game-api/types/global-s/smelterrecipeunlock#m-unlockmanager).
