---
title: "SmelterUpgrades"
description: "class SmelterUpgrades in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SmelterUpgrades

A **class** in `Root.Township`, `Alta.Blacksmithing`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`HashedGeneralValue<SmelterUpgrades>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`SmelterUpgrades`](/game-api/types/alta-crafting/smelterupgrades), [`SmelterUpgrades.Create`](/game-api/types/alta-crafting/smelterupgrades-create)
- **Nested types** [`Create`](/game-api/types/alta-crafting/smelterupgrades-create)
- **Documented in** [Smelting and forging](/game-api/game-systems/smelting-and-forging#smelterupgrades-and-smelterunlockmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SmelterUpgrades()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bonussmelterspeed" /><code>{"private float bonusSmelterSpeed"}</code> |  |
| <Link id="m-physicalmaterials" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{"[] physicalMaterials"}</code> |  |
| <Link id="m-recipes" /><code>{"private "}<Link to="/game-api/types/alta-crafting/smeltingrecipe">{"SmeltingRecipe"}</Link>{"[] recipes"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bonussmelterspeed-2" /><code>{"float BonusSmelterSpeed { get; }"}</code> |  |
| <Link id="m-physicalmaterials-2" /><code>{"IReadOnlyCollection<"}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{"> PhysicalMaterials { get; }"}</code> |  |
| <Link id="m-recipes-2" /><code>{"IReadOnlyCollection<"}<Link to="/game-api/types/alta-crafting/smeltingrecipe">{"SmeltingRecipe"}</Link>{"> Recipes { get; }"}</code> |  |

## Used in

Members of other types that take, return or hold a `SmelterUpgrades`:

[`SmelterUnlockManager.defaultUpgrades`](/game-api/types/alta-crafting/smelterunlockmanager#m-defaultupgrades), [`SmelterUnlockManager.Lock`](/game-api/types/alta-crafting/smelterunlockmanager#m-lock), [`SmelterUnlockManager.simpleServerDefaultUpgrades`](/game-api/types/alta-crafting/smelterunlockmanager#m-simpleserverdefaultupgrades), [`SmelterUnlockManager.Unlock`](/game-api/types/alta-crafting/smelterunlockmanager#m-unlock), [`SmelterUnlockManager.unlocks`](/game-api/types/alta-crafting/smelterunlockmanager#m-unlocks), [`ItemSmelterRecipeUnlock.unlockDefinition`](/game-api/types/global-i-l/itemsmelterrecipeunlock#m-unlockdefinition), [`ItemSmelterRecipeUnlock.UnlockDefinition`](/game-api/types/global-i-l/itemsmelterrecipeunlock#m-unlockdefinition-2).
