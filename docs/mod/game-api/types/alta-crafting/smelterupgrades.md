---
title: "SmelterUpgrades"
description: "An unlockable set of smelter abilities: extra recipes, metals it can melt for moulds, and a speed bonus."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SmelterUpgrades

A **class** in `Root.Township`, `Alta.Blacksmithing`.

An unlockable set of smelter abilities: extra recipes, metals it can melt for moulds, and a speed bonus. Applied through `SmelterUnlockManager`.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`HashedGeneralValue<SmelterUpgrades>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`SmelterUpgrades`](/mod/game-api/types/alta-crafting/smelterupgrades), [`SmelterUpgrades.Create`](/mod/game-api/types/alta-crafting/smelterupgrades-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-crafting/smelterupgrades-create)
- **Documented in** [Smelting and forging](/mod/game-api/game-systems/smelting-and-forging#smelterupgrades-and-smelterunlockmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SmelterUpgrades()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bonussmelterspeed" /><code>{"private float bonusSmelterSpeed"}</code> | Backing field for `BonusSmelterSpeed`, added to the smelter speed multiplier while unlocked. |
| <Link id="m-physicalmaterials" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{"[] physicalMaterials"}</code> | Backing field for `PhysicalMaterials`: ingot materials the smelter accepts once unlocked. |
| <Link id="m-recipes" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/smeltingrecipe">{"SmeltingRecipe"}</Link>{"[] recipes"}</code> | Backing field for `Recipes`: smelting recipes unlocked. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bonussmelterspeed-2" /><code>{"float BonusSmelterSpeed { get; }"}</code> | Added to the smelter's speed multiplier while this upgrade is unlocked, and taken off again when it is locked. |
| <Link id="m-physicalmaterials-2" /><code>{"IReadOnlyCollection<"}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{"> PhysicalMaterials { get; }"}</code> | Metal materials whose ingots the smelter may pour into moulds once this is unlocked. |
| <Link id="m-recipes-2" /><code>{"IReadOnlyCollection<"}<Link to="/mod/game-api/types/alta-crafting/smeltingrecipe">{"SmeltingRecipe"}</Link>{"> Recipes { get; }"}</code> | Smelting recipes the smelter can run once this is unlocked. |

## Used in

Members of other types that take, return or hold a `SmelterUpgrades`:

[`SmelterUnlockManager.defaultUpgrades`](/mod/game-api/types/alta-crafting/smelterunlockmanager#m-defaultupgrades), [`SmelterUnlockManager.Lock`](/mod/game-api/types/alta-crafting/smelterunlockmanager#m-lock), [`SmelterUnlockManager.simpleServerDefaultUpgrades`](/mod/game-api/types/alta-crafting/smelterunlockmanager#m-simpleserverdefaultupgrades), [`SmelterUnlockManager.Unlock`](/mod/game-api/types/alta-crafting/smelterunlockmanager#m-unlock), [`SmelterUnlockManager.unlocks`](/mod/game-api/types/alta-crafting/smelterunlockmanager#m-unlocks), [`ItemSmelterRecipeUnlock.unlockDefinition`](/mod/game-api/types/global-i-l/itemsmelterrecipeunlock#m-unlockdefinition), [`ItemSmelterRecipeUnlock.UnlockDefinition`](/mod/game-api/types/global-i-l/itemsmelterrecipeunlock#m-unlockdefinition-2).
