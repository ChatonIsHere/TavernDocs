---
title: "SmelterUnlockManager"
description: "class SmelterUnlockManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SmelterUnlockManager

A **class** in `Root.Township`, `Alta.Blacksmithing`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Smelting and forging](/game-api/game-systems/smelting-and-forging#smelterupgrades-and-smelterunlockmanager)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SmelterUnlockManager()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-defaultupgrades" /><code>{"private "}<Link to="/game-api/types/alta-crafting/smelterupgrades">{"SmelterUpgrades"}</Link>{" defaultUpgrades"}</code> |
| <Link id="m-physmats" /><code>{"private HashSet<"}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{"> physMats"}</code> |
| <Link id="m-recipes" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-crafting/smeltingrecipe">{"SmeltingRecipe"}</Link>{"> recipes"}</code> |
| <Link id="m-simpleserverdefaultupgrades" /><code>{"private "}<Link to="/game-api/types/alta-crafting/smelterupgrades">{"SmelterUpgrades"}</Link>{" simpleServerDefaultUpgrades"}</code> |
| <Link id="m-unlocks" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-crafting/smelterupgrades">{"SmelterUpgrades"}</Link>{"> unlocks"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-physicalmaterials" /><code>{"IReadOnlyCollection<"}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{"> PhysicalMaterials { get; }"}</code> |
| <Link id="m-recipes-2" /><code>{"IReadOnlyCollection<"}<Link to="/game-api/types/alta-crafting/smeltingrecipe">{"SmeltingRecipe"}</Link>{"> Recipes { get; }"}</code> |
| <Link id="m-speedmultiplier" /><code>{"float SpeedMultiplier { get; private set; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-unlockadded" /><code>{"event Action UnlockAdded"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-lock" /><code>{"void Lock("}<Link to="/game-api/types/alta-crafting/smelterupgrades">{"SmelterUpgrades"}</Link>{" definition)"}</code> |
| <Link id="m-unlock" /><code>{"void Unlock("}<Link to="/game-api/types/alta-crafting/smelterupgrades">{"SmelterUpgrades"}</Link>{" definition)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `SmelterUnlockManager`:

[`Smelter.unlockManager`](/game-api/types/alta-crafting/smelter#m-unlockmanager), [`SmelterRecipeUnlock.unlockManager`](/game-api/types/global-s/smelterrecipeunlock#m-unlockmanager).
