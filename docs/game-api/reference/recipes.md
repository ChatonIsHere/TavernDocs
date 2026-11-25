---
title: Recipes
description: Smelting, stew, crafting deck, chisel and mould recipes from the game assets.
sidebar_position: 4
---

# Recipes

Recipe assets, by the station that uses them. Each is a `HashedGeneralValue`, so the game finds it by hash. Item names link up with [Items and materials](items-and-materials.md), and prefab names with [Spawnable prefabs](spawnable-prefabs.md).

## Smelting

`Alta.Blacksmithing.SmeltingRecipe`: what the smelter turns its contents into. Duration is the recipe's `duration` value.

| Recipe | Hash | Input | Output | Duration |
| --- | --- | --- | --- | --- |
| `Carsi Ingot` | 19716 | `Red Iron Ingot`, `Silver Ore` x4 | `Carsi Ingot` | 7 |
| `Copper Ingot` | 31646 | `Copper Ore` x3 | `Copper Ingot` | 5 |
| `Darksteel Ingot` | 60118 | `Evinon Steel Ingot`, `Carsi Ingot` | `Darksteel Ingot` | 10 |
| `Evinon Steel Ingot` | 17944 | `Silver Ingot`, `Mythril Ingot` x2 | `Evinon Steel Ingot` | 10 |
| `Evinon Steel Ore to Ingot` | 20270 | `Silver Ore` x4, `Mythril Ore` x6 | `Evinon Steel Ingot` | 10 |
| `Gold Ingot` | 32248 | `Gold Ore` x3 | `Gold Ingot` | 5 |
| `Iron Ingot` | 31642 | `Iron Ore` x3 | `Iron Ingot` | 5 |
| `Mythril Ingot` | 21532 | `Mythril Ore` x3 | `Mythril Ingot` | 5 |
| `Orchi Ingot to Ingot` | 19612 | `Gold Ingot`, `Mythril Ingot` | `Orchi Ingot` | 8 |
| `Orchi Ore to Ingot` | 30128 | `Gold Ore` x3, `Mythril Ore` x2 | `Orchi Ingot` | 8 |
| `Red Iron Ingot to Ingot` | 18058 | `Iron Ingot`, `Copper Ingot` | `Red Iron Ingot` | 7 |
| `Red Iron Ore to Ingot` | 31222 | `Iron Ore` x3, `Copper Ore` x4 | `Red Iron Ingot` | 7 |
| `Silver Ingot` | 17706 | `Silver Ore` x3 | `Silver Ingot` | 5 |
| `White Gold Ingot to Ingot` | 29066 | `Silver Ingot`, `Gold Ingot` | `White Gold Ingot` | 7 |
| `White Gold Ore to Ingot` | 31644 | `Silver Ore` x3, `Gold Ore` x2 | `White Gold Ingot` | 7 |

## Stews

`Alta.Cooking.StewRecipe`: a set of ingredients in a cooking pot. Ingredients are `StewIngredientBase` assets: a cookable category (any fruit, any berries) or a collection of specific cookables. The effect columns name a `StatChangeEffect` and its strength multiplier. **Effect modifiers** scale the effects the ingredients already give; **extra effects** are added on top.

| Recipe | Hash | Ingredients | Liquids | Effect modifiers | Extra effects |
| --- | --- | --- | --- | --- | --- |
| `Berry Stew` | 60096 | `Berries` x4 | `Water` | `Nourish` x1.55, `Heal` x1.3 | `Nourish` x0.2 |
| `Blue Mix Stew` | 41938 | `Eggplant Cookable Collection`, `Berries` x2, `Poultry` | `Water` | `Heal` x1.4 | `Heal` x0.4 |
| `Eggplant Potato Red Stew` | 15908 | `Carrot Cookable Collection`, `Eggplant Cookable Collection`, `Potato Cookable Collection`, `Tomato Cookable Collection` | `Water` | `Damage Protection Indirect effect` x1.55, `Heal` x1.2 | `Nourish` x0.55 |
| `Glowing Mushroom Stew` | 61784 | `Glowing Mushroom Cookable Collection` x2, `Onion Cookable Collection`, `Eggplant Cookable Collection` | `Water` | `Nourish` x1.2, `Heal` x1.1, `Luminosiy indirect effect` x1.55 |  |
| `Mushroom Mix Stew` | 31956 | `Glowing Mushroom Cookable Collection`, `Cave Mushrooms Cookable Collection`, `Brown Mushroom Cookable Collection`, `Red Mushroom Cookable Collection` | `Water` | `Nourish` x1.55, `Heal` x1.1 |  |
| `Mushroom-Poultry Stew` | 36676 | `Mushrooms` x2, `Poultry` x2 | `Water` | `Nourish` x1.3, `Heal` x1.1 |  |
| `Potato Puree Stew` | 40060 | `Tomato Cookable Collection`, `Potato Cookable Collection` x2, `Onion Cookable Collection` | `Water` | `Damage Indirect effect` x1.3, `Nourish` x1.1 | `Nourish` x0.2 |
| `Poultry Onion Mushroom Stew` | 56044 | `Potato Cookable Collection`, `Brown Mushroom Cookable Collection`, `Poultry`, `Onion Cookable Collection` | `Water` | `Damage Indirect effect` x1.2, `Nourish` x1.2, `Speed Indirect Effect` x1.2 |  |
| `Poultry Potato Stew` | 40154 | `Poultry` x2, `Potato Cookable Collection` x2 | `Water` | `Damage Indirect effect` x1.3, `Nourish` x1.1 |  |
| `Poultry Stew` | 14226 | `Poultry` x4 | `Water` | `Nourish` x1.3 |  |
| `Pumpkin Stew` | 63226 | `Pumpkin Cookable Collection` x4 | `Water` | `Nourish` x1.4, `Heal` x1.4 |  |
| `Red Mushroom Stew` | 62868 | `Red Mushroom Cookable Collection` x4 | `Water` | `Heal` x2.1 | `Heal` x0.55 |
| `Red Sauce Stew` | 314 | `Carrot Cookable Collection`, `Tomato Cookable Collection` x2, `Red Mushroom Cookable Collection` | `Water` | `Heal` x1.4, `Speed Indirect Effect` x1.2 | `Speed Indirect Effect` x0.3 |
| `Vegetable Ragu` | 19960 | `Eggplant Cookable Collection`, `Onion Cookable Collection`, `Carrot Cookable Collection`, `Tomato Cookable Collection` | `Water` | `Damage Protection Indirect effect` x1.35, `Nourish` x1.1 | `Nourish` x0.3 |
| `Vision Stew` | 26282 | `Carrot Cookable Collection` x2, `Glowing Mushroom Cookable Collection` x2 | `Water` | `Luminosiy indirect effect` x2.1, `Nourish` x1.2 |  |

### Cookable collections

`CookableCollectionDefinition` assets that stew recipes use as ingredients.

| Collection | Cookables |
| --- | --- |
| `Brown Mushroom Cookable Collection` | `MushroomBrown Half Ripe`, `MushroomBrown Half Cooked`, `MushroomBrown Full Ripe`, `MushroomBrown Full Cooked` |
| `Carrot Cookable Collection` | `Carrot Full Cooked`, `Carrot Full Ripe`, `Carrot Half Cooked`, `Carrot Half Ripe` |
| `Cave Mushrooms Cookable Collection` | `MushroomCaveSmall Full Ripe`, `MushroomCaveSmall Full Cooked`, `MushroomCaveSmall Half Cooked`, `MushroomCaveSmall Half Ripe` |
| `Eggplant Cookable Collection` | `Eggplant Full Cooked`, `Eggplant Full Ripe`, `Eggplant Half Cooked`, `Eggplant Half Ripe` |
| `Glowing Mushroom Cookable Collection` | `MushroomGlowing Half Ripe`, `MushroomGlowing Half Cooked`, `MushroomGlowing Full Ripe`, `MushroomGlowing Full Cooked` |
| `Onion Cookable Collection` | `Onion Full Cooked`, `Onion Full Ripe`, `Potato Half Cooked`, `Potato Half Ripe` |
| `Potato Cookable Collection` | `Potato Full Cooked`, `Potato Full Ripe`, `Potato Half Cooked`, `Potato Half Ripe` |
| `Pumpkin Cookable Collection` | `pumpkin piece ripe`, `pumpkin piece cooked` |
| `Red Mushroom Cookable Collection` | `MushroomRed Half Cooked`, `MushroomRed Half Ripe`, `MushroomRed Full Ripe`, `MushroomRed Full Cooked` |
| `Tomato Cookable Collection` | `Tomato Full Cooked`, `Tomato Full Ripe`, `Tomato Half Cooked`, `Tomato Half Ripe` |

### Cookables and garnishes

`CookableItem` and `CookingGarnish` item components: the cooking category of each food item and the effects it gives when eaten or added to a stew.

| Item | Type | Category | Effects | Effect multipliers |
| --- | --- | --- | --- | --- |
| `Apple Full Burnt` | cookable | `Fruit` |  |  |
| `Apple Full Cooked` | cookable | `Fruit` | `Nourish` x0.2, `Heal` x0.1 |  |
| `Apple Full Ripe` | cookable | `Fruit` | `Nourish` x0.15, `Heal` x0.1 |  |
| `Apple Full Unripe` | cookable | `Fruit` |  |  |
| `Apple Half Burnt` | cookable | `Fruit` |  |  |
| `Apple Half Cooked` | cookable | `Fruit` | `Nourish` x0.1, `Heal` x0.1 |  |
| `Apple Half Ripe` | cookable | `Fruit` | `Nourish` x0.07, `Heal` x0.1 |  |
| `Apple Half Unripe` | cookable | `Fruit` |  |  |
| `Babu Leg Full Burnt` | cookable | `Pork` |  |  |
| `Babu Leg Full Cooked` | cookable | `Pork` | `Heal` x0.05, `Nourish` x0.3, `Damage Indirect effect` x0.2 |  |
| `Babu Leg Full Ripe` | cookable | `Pork` | `Nourish` x0.1, `Heal` x-0.15, `Damage Indirect effect` x0.1 |  |
| `Babu Leg Half Burnt` | cookable | `Pork` |  |  |
| `Babu Leg Half Cooked` | cookable | `Pork` | `Heal` x0.05, `Nourish` x0.2, `Damage Indirect effect` x0.15 |  |
| `Babu Leg Half Ripe` | cookable | `Pork` | `Nourish` x0.08, `Heal` x-0.15, `Nourish` x0.05 |  |
| `Blueberry Full Burnt` | cookable | `Berries` |  |  |
| `Blueberry Full Cooked` | cookable | `Berries` | `Nourish` x0.1, `Heal` x0.1 |  |
| `Blueberry Full Ripe` | cookable | `Berries` | `Nourish` x0.1, `Heal` x0.05 |  |
| `Blueberry Full Unripe` | cookable | `Berries` |  |  |
| `Carrot Full Burnt` | cookable | `Vegetables Category` |  |  |
| `Carrot Full Cooked` | cookable | `Vegetables Category` | `Nourish` x0.15, `Heal` x0.05 |  |
| `Carrot Full Ripe` | cookable | `Vegetables Category` | `Nourish` x0.1, `Heal` x0.05 |  |
| `Carrot Full Unripe` | cookable | `Vegetables Category` |  |  |
| `Carrot Half Burnt` | cookable | `Vegetables Category` |  |  |
| `Carrot Half Cooked` | cookable | `Vegetables Category` | `Nourish` x0.15, `Heal` x0.05, `Luminosiy indirect effect` x0.2 |  |
| `Carrot Half Ripe` | cookable | `Vegetables Category` | `Nourish` x0.1, `Heal` x0.05, `Heal` x0.1 |  |
| `Carrot Half Unripe` | cookable | `Vegetables Category` |  |  |
| `Cookable Item` | cookable |  |  |  |
| `Dais Meat Full Burnt` | cookable |  |  |  |
| `Dais Meat Full Cooked` | cookable |  | `Speed Indirect Effect` x0.2, `Nourish` x0.2 |  |
| `Dais Meat Full Ripe` | cookable |  | `Nourish` x0.1, `Heal` x-0.15 |  |
| `Dais Meat Half Burnt` | cookable |  |  |  |
| `Dais Meat Half Cooked` | cookable |  | `Speed Indirect Effect` x0.15, `Nourish` x0.15 |  |
| `Dais Meat Half Ripe` | cookable |  | `Nourish` x0.1, `Heal` x-0.15 |  |
| `Eggplant Full Burnt` | cookable | `Vegetables Category` |  |  |
| `Eggplant Full Cooked` | cookable | `Vegetables Category` | `Nourish` x0.08, `Damage Protection Indirect effect` x0.15 |  |
| `Eggplant Full Ripe` | cookable | `Vegetables Category` | `Nourish` x0.05, `Damage Protection Indirect effect` x0.05 |  |
| `Eggplant Full Unripe` | cookable | `Vegetables Category` |  |  |
| `Eggplant Half Burnt` | cookable | `Vegetables Category` |  |  |
| `Eggplant Half Cooked` | cookable | `Vegetables Category` | `Nourish` x0.1, `Damage Protection Indirect effect` x0.2 |  |
| `Eggplant Half Ripe` | cookable | `Vegetables Category` | `Nourish` x0.04, `Damage Protection Indirect effect` x0.1 |  |
| `Eggplant Half Unripe` | cookable | `Vegetables Category` |  |  |
| `Garlic Full Burnt` | garnish | `Garnish` |  |  |
| `Garlic Full Cooked` | garnish | `Garnish` | `Nourish` x0.1 | `Damage Protection Indirect effect` x1.15, `Speed Indirect Effect` x1.15 |
| `Garlic Full Ripe` | garnish | `Garnish` |  | `Damage Protection Indirect effect` x1.1 |
| `Garlic Full Unripe` | garnish | `Garnish` |  |  |
| `Garlic Half Burnt` | garnish | `Garnish` |  |  |
| `Garlic Half Cooked` | garnish | `Garnish` | `Nourish` x0.11 | `Damage Protection Indirect effect` x1.2, `Speed Indirect Effect` x1.2 |
| `Garlic Half Ripe` | garnish | `Garnish` |  | `Damage Protection Indirect effect` x1.1 |
| `Garlic Half Unripe` | garnish | `Garnish` |  |  |
| `MushroomBrown Full Burnt` | cookable | `Mushrooms` |  |  |
| `MushroomBrown Full Cooked` | cookable | `Mushrooms` | `Nourish` x0.25, `Heal` x0.1 |  |
| `MushroomBrown Full Ripe` | cookable | `Mushrooms` | `Nourish` x0.15, `Heal` x0.05 |  |
| `MushroomBrown Half Burnt` | cookable | `Mushrooms` |  |  |
| `MushroomBrown Half Cooked` | cookable | `Mushrooms` | `Nourish` x0.2, `Heal` x0.06 |  |
| `MushroomBrown Half Ripe` | cookable | `Mushrooms` | `Nourish` x0.1, `Heal` x0.02 |  |
| `MushroomCaveLarge Half Burnt` | cookable | `Mushrooms` |  |  |
| `MushroomCaveLarge Half Cooked` | cookable | `Mushrooms` | `Nourish` x0.1, `Heal` x0.075, `Damage Protection Indirect effect` x0.15 |  |
| `MushroomCaveLarge Half Ripe` | cookable | `Mushrooms` | `Nourish` x0.05, `Heal` x0.035, `Damage Protection Indirect effect` x0.1 |  |
| `MushroomCaveSmall Full Burnt` | cookable | `Mushrooms` |  |  |
| `MushroomCaveSmall Full Cooked` | cookable | `Mushrooms` | `Nourish` x0.2, `Heal` x0.1, `Damage Indirect effect` x0.1 |  |
| `MushroomCaveSmall Full Ripe` | cookable | `Mushrooms` | `Nourish` x0.1, `Heal` x-0.2 |  |
| `MushroomCaveSmall Half Burnt` | cookable | `Mushrooms` |  |  |
| `MushroomCaveSmall Half Cooked` | cookable | `Mushrooms` | `Nourish` x0.15, `Heal` x0.05, `Damage Indirect effect` x0.05 |  |
| `MushroomCaveSmall Half Ripe` | cookable | `Mushrooms` | `Nourish` x0.06, `Heal` x-0.1 |  |
| `MushroomGlowing Full Burnt` | cookable | `Mushrooms` |  |  |
| `MushroomGlowing Full Cooked` | cookable | `Mushrooms` | `Nourish` x0.3, `Heal` x0.15, `Luminosiy indirect effect` x0.35 |  |
| `MushroomGlowing Full Ripe` | cookable | `Mushrooms` | `Nourish` x0.2, `Heal` x-0.2, `Luminosiy indirect effect` x0.6 |  |
| `MushroomGlowing Half Burnt` | cookable | `Mushrooms` |  |  |
| `MushroomGlowing Half Cooked` | cookable | `Mushrooms` | `Nourish` x0.2, `Heal` x0.1, `Luminosiy indirect effect` x0.2 |  |
| `MushroomGlowing Half Ripe` | cookable | `Mushrooms` | `Nourish` x0.1, `Heal` x-0.12, `Luminosiy indirect effect` x0.35 |  |
| `MushroomRed Full Burnt` | cookable | `Mushrooms` |  |  |
| `MushroomRed Full Cooked` | cookable | `Mushrooms` | `Nourish` x0.05, `Heal` x0.2 |  |
| `MushroomRed Full Ripe` | cookable | `Mushrooms` | `Nourish` x0.03, `Heal` x0.1 |  |
| `MushroomRed Half Burnt` | cookable | `Mushrooms` |  |  |
| `MushroomRed Half Cooked` | cookable | `Mushrooms` | `Nourish` x0.03, `Heal` x0.15 |  |
| `MushroomRed Half Ripe` | cookable | `Mushrooms` | `Nourish` x0.015, `Heal` x0.075 |  |
| `Onion Full Burnt` | cookable | `Vegetables Category` |  |  |
| `Onion Full Cooked` | cookable | `Vegetables Category` | `Heal` x0.075, `Nourish` x0.025, `Speed Indirect Effect` x0.05 |  |
| `Onion Full Ripe` | cookable | `Vegetables Category` | `Heal` x0.05, `Nourish` x0.03, `Speed Indirect Effect` x0.1 |  |
| `Onion Full Unripe` | cookable | `Vegetables Category` |  |  |
| `Onion Half Burnt` | cookable | `Vegetables Category` |  |  |
| `Onion Half Cooked` | cookable | `Vegetables Category` | `Heal` x0.15, `Nourish` x0.05, `Speed Indirect Effect` x0.05 |  |
| `Onion Half Ripe` | cookable | `Vegetables Category` | `Heal` x0.1, `Nourish` x0.06, `Speed Indirect Effect` x0.15 |  |
| `Onion Half Unripe` | cookable | `Vegetables Category` |  |  |
| `Potato Full Burnt` | cookable | `Vegetables Category` |  |  |
| `Potato Full Cooked` | cookable | `Vegetables Category` | `Nourish` x0.15, `Damage Indirect effect` x0.15 |  |
| `Potato Full Ripe` | cookable | `Vegetables Category` | `Nourish` x0.1, `Damage Indirect effect` x0.05 |  |
| `Potato Full Unripe` | cookable | `Vegetables Category` |  |  |
| `Potato Half Burnt` | cookable | `Vegetables Category` |  |  |
| `Potato Half Cooked` | cookable | `Vegetables Category` | `Nourish` x0.08, `Damage Indirect effect` x0.13 |  |
| `Potato Half Ripe` | cookable | `Vegetables Category` | `Nourish` x0.03, `Damage Indirect effect` x0.08 |  |
| `Potato Half Unripe` | cookable | `Vegetables Category` |  |  |
| `Pumpkin Piece Burnt` | cookable | `Vegetables Category` |  |  |
| `pumpkin piece cooked` | cookable | `Vegetables Category` | `Nourish` x0.2, `Heal` x0.1 |  |
| `pumpkin piece ripe` | cookable | `Vegetables Category` | `Nourish` x0.03, `Heal` x0.05 |  |
| `Pumpkin Piece Unripe` | cookable | `Vegetables Category` |  |  |
| `Salt` | garnish | `Garnish` |  | `Damage Protection Indirect effect` x1.05, `Damage Indirect effect` x1.1 |
| `SpriggullDrumstick Full Burnt` | cookable | `Poultry` |  |  |
| `SpriggullDrumstick Full Cooked` | cookable | `Poultry` | `Nourish` x0.45, `Heal` x0.15 |  |
| `SpriggullDrumstick Full Ripe` | cookable | `Poultry` | `Nourish` x0.14, `Heal` x-0.05 |  |
| `SpriggullDrumstick Half Burnt` | cookable | `Poultry` |  |  |
| `SpriggullDrumstick Half Cooked` | cookable | `Poultry` | `Nourish` x0.2, `Heal` x0.05 |  |
| `SpriggullDrumstick Half Ripe` | cookable | `Poultry` | `Nourish` x0.08, `Heal` x-0.03 |  |
| `Tomato Full Burnt` | cookable | `Vegetables Category` |  |  |
| `Tomato Full Cooked` | cookable | `Vegetables Category` | `Nourish` x0.1, `Heal` x0.07, `Speed Indirect Effect` x0.1 |  |
| `Tomato Full Ripe` | cookable | `Vegetables Category` | `Nourish` x0.08, `Heal` x0.075, `Speed Indirect Effect` x0.05 |  |
| `Tomato Full Unripe` | cookable | `Vegetables Category` |  |  |
| `Tomato Half Burnt` | cookable | `Vegetables Category` |  |  |
| `Tomato Half Cooked` | cookable | `Vegetables Category` | `Nourish` x0.11, `Heal` x0.1, `Speed Indirect Effect` x0.05 |  |
| `Tomato Half Ripe` | cookable | `Vegetables Category` | `Nourish` x0.06, `Heal` x0.075 |  |
| `Tomato Half Unripe` | cookable | `Vegetables Category` |  |  |

## Crafting deck

`Alta.Crafting.GenericCraftingRecipe`: recipes for the crafting deck (`GenericCraftingStation`). **Pieces** are the items you place on the deck, counted. **Result** is the prefab it spawns (`resultHash`). Recipes marked "simple server" are turned off on simple servers (`isDisabledOnSimpleServer`).

| Recipe | Hash | Result | Pieces | Simple server |
| --- | --- | --- | --- | --- |
| `Barrel Bag Recipe` | 63520 | `Barrel Bag` (19354) | `Woodcut Wedge` x10, `Hard Plate Metal Medium Square` x2, `Hard Metal Small Bits` x2 |  |
| `Bucket Generic Recipe Data` | 49018 | `Wooden Bucket` (63904) | `Hard Plate Metal Medium Square` x5, `Woodcut Wedge` x2, `Hard Metal Small Bits` x6 |  |
| `Cauldron Medium Crafting Recipe` | 64410 | `Cauldron Medium` (45082) | `Hard Plate Metal Medium Square` x4, `Hard Metal Small Bits` x6 |  |
| `Fixed Light Bag Attachment Recipe` | 55292 | `Fixed Light Bag Attachment` (1056) | `Stick` x3, `Rope Clump` x5, `Hard Metal Small Bits` |  |
| `Flashlight Lantern Recipe` | 47168 | `Flashlight Lantern` (23642) | `Hard Plate Metal Medium Square` x4, `Hard Metal Small Bits` x6, `Soft Fabric Medium Strips` | yes |
| `Food Basket Bag Recipe` | 34422 | `Forage Basket Bag` (39880) | `Stick` x21, `Grass Clump` x2 |  |
| `Forage Basket Pouch Attachment Recipe` | 55458 | `Forage Side Pouch Attachment` (32874) | `Stick` x4, `Rope Clump`, `Grass Clump` |  |
| `Hebios Mould Crafting Recipe` | 59550 | `Hebios Crafted Mould` (22498) | `Hard Plate Metal Medium Square`, `Stick` x5, `Grass Clump` x4, `Hard Metal Small Bits` x8, `Redwood Gotera Core` |  |
| `Hoarder Bag Recipe` | 22612 | `Hoarder Bag` (54214) | `Soft Fabric Large Roll` x3, `Soft Fabric Medium Strips` x9, `Hard Metal Small Bits` x23, `Soft Fabric Medium Roll` |  |
| `Katana Blade Recipe` | 25214 | `Hebios Katana Blade Part Full` (17266) | `Hebios Katana Blade Part 02`, `Hebios Katana Blade Part 01` |  |
| `Mould Standard Crafting Recipe` | 57500 | `Standard Crafted Mould` (38578) | `Hard Plate Metal Medium Square`, `Hard Metal Small Bits` x7 |  |
| `Naginata Blade Recipe` | 59776 | `Hebios Naginata Blade Part Full` (17420) | `Hebios Naginata Blade Part 01`, `Hebios Naginata Blade Part 02` |  |
| `Ore Bag Recipe` | 27226 | `Ore Bag` (64560) | `Stick` x19, `Thin Cloth Medium Square`, `Rope Clump` x7, `Soft Fabric Medium Strips` x2 |  |
| `Ore Side Pouch Attachment Recipe` | 24910 | `Ore Side Pouch Attachment` (61020) | `Stick` x6, `Rope Clump` x4, `Thin Cloth Medium Square` |  |
| `Potion Hoops Side Tool Attachment Recipe` | 6796 | `Potion Hoops Side Tool Attachment` (31418) | `Hard Plate Metal Medium Square`, `Soft Fabric Medium Strips` x2, `Hard Metal Small Bits` x3 |  |
| `Sai Blade Recipe` | 53342 | `Hebios Sai Blade Part Full` (1600) | `Hebios Sai Blade Part 01`, `Hebios Sai Blade Part 02` |  |
| `Spyglass Recipe` | 53240 | `SpyGlass` (5170) | `Hard Plate Metal Medium Square` x2, `Soft Fabric Medium Strips` | yes |
| `Standard Bag Crafting Recipe` | 55992 | `Bag` (35324) | `Soft Fabric Medium Roll` x2, `Soft Fabric Medium Strips` x7, `Hard Metal Small Bits` x11 |  |
| `Standard Lantern Recipe` | 54912 | `Lantern` (41760) | `Hard Metal Small Bits` x14 |  |
| `Standard Quiver Crafting Recipe` | 23966 | `Quiver` (64640) | `Soft Fabric Medium Roll`, `Hard Metal Small Bits` x4, `Soft Fabric Medium Strips` x3, `Hard Plate Metal Medium Square` |  |
| `Standard Side Pouch Attachment Recipe` | 13490 | `Standard Side Pouch Attachment` (7852) | `Soft Fabric Medium Roll` x2, `Soft Fabric Medium Strips`, `Hard Metal Small Bits` |  |
| `Standard Side Tool Attachment Recipe` | 63364 | `Standard Side Tool Attachment` (59468) | `Hard Plate Metal Medium Square`, `Soft Fabric Medium Roll`, `Soft Fabric Medium Strips` x2 |  |
| `Timber Bag Recipe` | 10052 | `Timber Bag` (25122) | `Stick` x12, `Rope Clump` x15, `Soft Fabric Medium Roll`, `Woodcut Wedge` x3, `Grass Clump` |  |
| `Timber Side Pouch Attachment Recipe` | 11020 | `Timber Side Pouch Attachment` (7102) | `Stick` x6, `Rope Clump` x3, `Woodcut Wedge` |  |
| `Wakizashi Blade Recipe` | 27748 | `Hebios Wakizashi Blade Part Full` (9018) | `Hebios Wakizashi Blade Part 01`, `Hebios Wakizashi Blade Part 02` |  |
| `Wooden Bag Crafting Recipe` | 48064 | `Wooden Bag` (30060) | `Stick` x10, `Grass Clump` x6 |  |
| `Wooden Net Recipe` | 21198 | `Wooden Net` (53540) | `Stick` x3, `Rope Clump` x3, `Grass Clump` |  |

## Chisel recipes

`ChiselDefinition` (`Alta.Carpentry`): shapes for the chisel deck. **Block size** is the `ChiselBlockSize` of wood it needs. **Result** is the prefabs the timber block turns into, counted.

| Recipe | Hash | Block size | Result |
| --- | --- | --- | --- |
| `Arrow Shaft Recipe` | 22434 | Large | `Arrow Shaft Wooden` x20 |
| `Bow Recipe` | 10736 | Large | `Handle Bow` |
| `Curled Wooden Handle Recipe` | 21508 | Medium | `Curled Wooden Handle` |
| `Dice Recipe` | 65058 | Small | `Wooden Dice` x3 |
| `Handle Long Straight` | 60754 | Large | `Handle Long Straight` |
| `Handle Medium Straight` | 46222 | Medium | `Handle Medium Straight` |
| `Large Branch Handle Recipe` | 53950 | Large | `Handle Large Branch` |
| `Large Spiked Wooden Club Recipe` | 22650 | Large | `Large Spiked Wooden Club` |
| `Medium Branch Handle Recipe` | 226 | Medium | `Handle Medium Branch` |
| `Rod Long Recipe` | 35860 | Large | `Rod Long` |
| `Rod Medium Recipe` | 49406 | Medium | `Rod Medium` |
| `Rod Slim 40cm Recipe` | 59108 | Small | `Rod Slim 40cm` |
| `Round Fist Handle Recipe` | 61880 | Small | `Handle Round Fist` |
| `Shield Core Bent` | 63302 | Medium | `Shield Core Bent Middle` |
| `Shield Core Circle` | 51790 | Medium | `Shield Core Circle Middle` |
| `Shield Core Handle` | 45706 | Small | `Shield Core Handle` |
| `Shield Core Holed` | 30730 | Medium | `Shield Core Holed Middle` |
| `Shield Part Circle` | 40726 | Medium | `Shield Part Half Circle` |
| `Shield Part Circle Hole` | 60154 | Medium | `Shield Part Half Circle Hole` |
| `Shield Part Hole` | 39190 | Medium | `Shield Part Half Hole` |
| `Shield Part Point` | 29138 | Medium | `Shield Part Half Point 01` |
| `Short Handle Recipe` | 57058 | Small | `Handle Short` |
| `Slingshot Recipe` | 12118 | Medium | `Slingshot` |
| `Tonfa Handle Recipe` | 8722 | Medium | `Handle Tonfa` |
| `Wooden Bowl Recipe` | 16628 | Small | `Wooden Bowl` x2 |
| `Wooden Ladle Recipe` | 16282 | Small | `Wooden Ladle` |
| `Wooden Short Sword Recipe` | 54270 | Large | `Wooden Short Sword` |
| `Wooden Stake Recipe` | 29692 | Medium | `Wooden Stake` x10 |

## Moulds

`MouldDefinition`: what a mould casts. **Cost** is how many ingots the smelter needs for one cast; the fuel it needs is the ingot's smelting duration times the cost (see `Smelter`). **Materials** is the `ItemSet` of items it accepts (listed below).

| Mould | Hash | Product | Quantity | Cost | Materials | Findable |
| --- | --- | --- | --- | --- | --- | --- |
| `Axe Head Curve Mould` | 22952 | `Axe Head Curve` | 1 | 4 | `All Ingots` | yes |
| `Axe Head Felling Mould` | 62096 | `Axe Head Felling` | 1 | 3 | `All Ingots` | yes |
| `Axe Head GreatCurve Mould` | 4418 | `Axe Head GreatCurve` | 1 | 8 | `All Ingots` | yes |
| `Axe Head LShape Mould` | 29286 | `Axe Head LShape` | 1 | 5 | `All Ingots` | yes |
| `Bow Blade Mould` | 8198 | `Bow Blade` | 1 | 6 | `All Ingots` | yes |
| `Chisel Mould` | 25584 | `Chisel` | 1 | 2 | `All Ingots` | yes |
| `Craft Piece Side 1Way Item Mould` | 38832 | `Craft Piece Side 1Way Item` | 1 | 3 | `All Ingots` | yes |
| `Craft Piece Side 2Way Item Mould` | 43798 | `Craft Piece Side 2Way Item` | 1 | 5 | `All Ingots` | yes |
| `Craft Piece Side 4Way Item Mould` | 56624 | `Craft Piece Side 4Way Item` | 1 | 9 | `All Ingots` | yes |
| `Craft Piece SideFlat 1Way Item Mould` | 20972 | `Craft Piece SideFlat 1Way Item` | 1 | 4 | `All Ingots` | yes |
| `Craft Piece SideFlat 2Way Item Mould` | 20192 | `Craft Piece SideFlat 2Way Item` | 1 | 8 | `All Ingots` | yes |
| `Dagger Blade Curved Mould` | 41662 | `Dagger Blade Curved` | 1 | 2 | `All Ingots` | yes |
| `Dagger Blade Edgy Mould` | 24918 | `Dagger Blade Edgy` | 1 | 2 | `All Ingots` | yes |
| `Dagger Blade Round Mould` | 20654 | `Dagger Blade Round` | 1 | 2 | `All Ingots` | yes |
| `Dagger Blade Wide Mould` | 3400 | `Dagger Blade Wide` | 1 | 4 | `All Ingots` | yes |
| `Edge Curved Blade Mould` | 26502 | `Edge Curved Blade` | 1 | 5 | `All Ingots` | yes |
| `Edge Long Curve Blade Mould` | 42778 | `Edge Long Curve Blade` | 1 | 6 | `All Ingots` | yes |
| `Edge Short Curve Blade Mould` | 41554 | `Edge Short Curve Blade` | 1 | 3 | `All Ingots` | yes |
| `Edge Straight Blade Mould` | 65450 | `Edge Straight Blade` | 1 | 4 | `All Ingots` | yes |
| `Great Sword Blade Mould` | 35534 | `Great Sword Blade` | 1 | 10 | `All Ingots` | yes |
| `Guard Fancy Mould` | 48318 | `Guard Fancy` | 1 | 4 | `All Ingots` | yes |
| `Guard Hemisphere Mould` | 2986 | `Guard Hemisphere` | 1 | 3 | `All Ingots` | yes |
| `Guard Mould` | 45124 | `Guard` | 1 | 3 | `All Ingots` | yes |
| `Guard Pointy End Mould` | 24504 | `Guard Pointy End` | 1 | 3 | `All Ingots` | yes |
| `Guard Straight End Mould` | 25820 | `Guard Straight End` | 1 | 2 | `All Ingots` | yes |
| `Hammer Head Mould` | 55350 | `Hammer Head` | 1 | 5 | `All Ingots` | yes |
| `Hammer Head Small Mould` | 43618 | `Hammer Head Small` | 1 | 3 | `All Ingots` | yes |
| `Hard Metal Small Bits Mould` | 6242 | `Hard Metal Small Bits` | 3 | 2 | `All Ingots` | yes |
| `Hard Plate Metal Medium Square Mould` | 1652 | `Hard Plate Metal Medium Square` | 1 | 3 | `All Ingots` | yes |
| `Hebios Guard Mould` | 56616 | `Hebios Guard` | 1 | 3 | `All Ingots` |  |
| `Hebios Katana Blade Mould` | 56922 | `Hebios Katana Blade` | 1 | 8 | `All Ingots` |  |
| `Hebios Naginata Blade Mould` | 18348 | `Hebios Naginata Blade` | 1 | 8 | `All Ingots` |  |
| `Hebios Sai Blade Mould` | 26104 | `Hebios Sai Blade` | 1 | 4 | `All Ingots` |  |
| `Hebios Wakizashi Blade Mould` | 47804 | `Hebios Wakizashi Blade` | 1 | 5 | `All Ingots` |  |
| `Large Guard Rectangle Mould` | 23188 | `Large Guard Rectangle` | 1 | 7 | `All Ingots` | yes |
| `Large Guard TShape Mould` | 12250 | `Large Guard TShape` | 1 | 6 | `All Ingots` | yes |
| `Large Guard Wedge Mould` | 47656 | `Large Guard Wedge` | 1 | 6 | `All Ingots` | yes |
| `Large Longsword Blade Mould` | 46796 | `Large Longsword Blade` | 1 | 10 | `All Ingots` | yes |
| `Metal Hammer Head Mould` | 10312 | `Metal Hammer Head` | 1 | 8 | `All Ingots` | yes |
| `Metal Wall Hook Mould` | 29104 | `Metal Wall Hook` | 5 | 3 | `All Ingots` | yes |
| `Pickaxe Head Mould` | 27208 | `Pickaxe Head` | 1 | 4 | `All Ingots` | yes |
| `Pommel Circle Mould` | 33498 | `Pommel Circle` | 2 | 3 | `All Ingots` | yes |
| `Pommel Diamond Mould` | 3228 | `Pommel Diamond` | 2 | 3 | `All Ingots` | yes |
| `Pommel Large Square Mould` | 21410 | `Pommel Large Square` | 1 | 4 | `All Ingots` | yes |
| `Pommel Mould` | 26608 | `Pommel` | 2 | 3 | `All Ingots` | yes |
| `Rapier Blade Mould` | 42874 | `Rapier Blade` | 1 | 4 | `All Ingots` | yes |
| `Scythe Blade Mould` | 11364 | `Scythe Blade` | 1 | 7 | `All Ingots` | yes |
| `Short Sword Blade Mould` | 34612 | `Short Sword Blade` | 1 | 6 | `All Ingots` | yes |
| `Shotel Blade Mould` | 48290 | `Shotel Blade` | 1 | 6 | `All Ingots` | yes |
| `Spade Head Mould` | 52426 | `Spade Head` | 1 | 5 | `All Ingots` | yes |
| `Spike Fancy Mould` | 50902 | `Spike Fancy` | 5 | 2 | `All Ingots` | yes |
| `Thick Great Sword Blade Mould` | 30162 | `Thick Great Sword Blade` | 1 | 12 | `All Ingots` | yes |
| `War Hammer Head Mould` | 49090 | `War Hammer Head` | 1 | 13 | `All Ingots` | yes |

### Mould material sets

| Item set | Items |
| --- | --- |
| `All Ingots` | `Bronze Ingot`, `Copper Ingot`, `Gold Ingot`, `Iron Ingot`, `Mythril Ingot`, `Silver Ingot`, `Steel Ingot`, `Orchi Ingot`, `Red Iron Ingot`, `Evinon Steel Ingot`, `White Gold Ingot`, `Carsi Ingot` |
