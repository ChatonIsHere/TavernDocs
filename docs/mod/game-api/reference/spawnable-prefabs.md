---
title: Spawnable prefabs
description: Every network prefab the game loads, with its hash, kind and main scripts.
sidebar_position: 2
---

# Spawnable prefabs

Every prefab the game's `PrefabManager` loads. On startup it calls `Resources.LoadAll<NetworkPrefab>("Network Prefabs")` and keys each prefab by `NetworkPrefab.Hash`. That map is what `spawn` and the other console commands search, and what saves and the network use to name a prefab.

- **Hash** is the `hash` field of the prefab's `NetworkPrefab` component, read from the asset files and checked against a live server.
- **Spawn command** is "no" when `canBeSpawnedThroughCommand` is off. The prefab still loads, but `spawn`, `find` and `multi` skip it and the console's prefab argument converter refuses it.
- **Kind** is a guess from the scripts on the prefab's root object (see [the overview](overview.md#how-prefabs-are-sorted)).
- **Main scripts** are the game scripts on the root object, leaving out the ones nearly every network prefab has (`NetworkPrefab`, `NetworkEntity`, `NetworkRigidbody`, `ChunkDetector` and so on).

The console accepts a prefab by hash, by its lower-case name, or by its lower-case name with the spaces removed.

1346 prefabs in total.

| Kind | Count |
| --- | --- |
| [item](#item) | 428 |
| [pickup without an Item asset](#pickup-without-an-item-asset) | 38 |
| [creature](#creature) | 48 |
| [AI-driven object](#ai-driven-object) | 2 |
| [projectile](#projectile) | 14 |
| [stew](#stew) | 54 |
| [plant or tree](#plant-or-tree) | 240 |
| [breakable or resource node](#breakable-or-resource-node) | 98 |
| [spawner or population](#spawner-or-population) | 61 |
| [station, structure or other](#station-structure-or-other) | 133 |
| [logic and puzzle](#logic-and-puzzle) | 70 |
| [world and cave pieces](#world-and-cave-pieces) | 45 |
| [effect](#effect) | 16 |
| [debris or timed effect](#debris-or-timed-effect) | 31 |
| [static object (no scripts)](#static-object-no-scripts) | 68 |

## Item

The **Item** column is the `Item` asset the prefab's `Pickup` names (`Pickup.Item`), then any other `Item` whose `prefabHash` points at this prefab. The two usually agree. Training and debug copies reuse the real item, so several prefabs can share one. See [Items and materials](items-and-materials.md) for its settings.

| Prefab | Hash | Item | Spawn command | Main scripts |
| --- | --- | --- | --- | --- |
| `Apple Core Burnt` | 50484 | `Apple Core Burnt` |  | `Pickup`, `ImpactDetector`, `ImpactHitTrigger` |
| `Apple Core Cooked` | 15500 | `Apple Core Cooked` |  | `Pickup`, `ImpactDetector`, `ImpactHitTrigger` |
| `Apple Core Ripe` | 902 | `Apple Core Ripe` |  | `Pickup`, `ImpactDetector`, `ImpactHitTrigger`, `Target` |
| `Apple Core Unripe` | 31614 | `Apple Core Ripe`, `Apple Core Unripe` |  | `Pickup`, `ImpactDetector`, `ImpactHitTrigger`, `RaycastCrafter` |
| `Apple Full Burnt` | 62102 | `Apple Full Burnt` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `Apple Full Cooked` | 14844 | `Apple Full Cooked` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `Apple Full Ripe` | 40010 | `Apple Full Ripe` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner`, `EmbeddableManager` |
| `Apple Full Unripe` | 6740 | `Apple Full Unripe` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner`, `EmbeddableManager` |
| `Apple Half Burnt` | 65526 | `Apple Half Burnt` |  | `Pickup`, `EdibleObject` |
| `Apple Half Cooked` | 2000 | `Apple Half Cooked` |  | `Pickup`, `EdibleObject` |
| `Apple Half Ripe` | 7278 | `Apple Half Ripe` |  | `Pickup`, `EdibleObject` |
| `Apple Half Unripe` | 62012 | `Apple Half Unripe` |  | `Pickup`, `EdibleObject` |
| `Arrow` | 56460 | `Arrow`, `Arrow Training` |  | `Pickup`, `Arrow`, `ThrowableArrow`, `Embeddable`, `ImpactTool`, `Surface` (+3) |
| `Arrow Shaft Wooden` | 29772 | `Arrow Shaft` |  | `Pickup`, `CraftingPart`, `ImpactTool`, `Surface`, `DurabilityModule`, `Embeddable` (+5) |
| `Arrow Shaft Wooden Training` | 36772 | `Arrow Shaft Training` |  | `Pickup`, `PracticeObjectFader` |
| `Arrow Training` | 36190 | `Arrow Training` |  | `Pickup`, `ImpactTool`, `Surface`, `ItemLevitator`, `Embeddable`, `Arrow` (+2) |
| `Arrow Training Dud` | 8858 | `Arrow Dud Training` |  | `Pickup`, `PracticeObjectFader` |
| `Ash Tree Seed` | 35274 | `Ash Tree Seed` |  | `Pickup`, `RaycastCrafter` |
| `Axe Head` | 34412 | `Axe Head Curve` |  | `Pickup`, `ImpactDetector`, `CraftingPart`, `PhysicalMaterialPart`, `ForgedPointCollection`, `MeltingModelPart` |
| `Axe Head Curve` | 50322 | `Axe Head Curve` |  | `Pickup`, `ImpactDetector`, `CraftingPart`, `PhysicalMaterialPart`, `ForgedPointCollection`, `DurabilityModule` (+1) |
| `Axe Head Felling` | 9918 | `Axe Head Felling` |  | `Pickup`, `ImpactDetector`, `CraftingPart`, `PhysicalMaterialPart`, `ForgedPointCollection`, `DurabilityModule` (+1) |
| `Axe Head GreatCurve` | 10056 | `Axe Head GreatCurve` |  | `Pickup`, `ImpactDetector`, `CraftingPart`, `PhysicalMaterialPart`, `ForgedPointCollection`, `DurabilityModule` (+1) |
| `Axe Head LShape` | 17400 | `Axe Head LShape` |  | `Pickup`, `ImpactDetector`, `CraftingPart`, `PhysicalMaterialPart`, `ForgedPointCollection`, `DurabilityModule` (+1) |
| `Babu Leg Bone` | 32526 | `Babu Leg Bone` |  | `Pickup`, `EdibleObject`, `ImpactHitTrigger`, `ImpactDetector`, `Spawner` |
| `Babu Leg Full Burnt` | 64844 | `Babu Leg Full Burnt` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `Babu Leg Full Cooked` | 42916 | `Babu Leg Full Cooked` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `Babu Leg Full Ripe` | 2562 | `Babu Leg Full Ripe` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `Babu Leg Half Burnt` | 50328 | `Babu Leg Half Burnt` |  | `Pickup`, `EdibleObject` |
| `Babu Leg Half Cooked` | 50326 | `Babu Leg Half Cooked` |  | `Pickup`, `EdibleObject` |
| `Babu Leg Half Ripe` | 50252 | `Babu Leg Half Ripe` |  | `Pickup`, `EdibleObject` |
| `Bag` | 35324 | `Bag` |  | `Pickup`, `StabilizeJointContainer`, `PickupDockingSoundPlayer`, `GenericCraftingResult`, `CraftingPart`, `DockArray` (+2) |
| `Barrel Bag` | 19354 | `Barrel Bag` |  | `Pickup`, `PickupDockingSoundPlayer`, `DockArray`, `GenericCraftingResult`, `StabilizePickupJoint`, `GenericAssemblyPart` (+2) |
| `Birch Tree Seed` | 55274 | `Birch Tree Seed` |  | `Pickup`, `RaycastCrafter` |
| `Blueberry Full Burnt` | 49890 | `Blueberry Full Burnt` |  | `Pickup`, `EdibleObject` |
| `Blueberry Full Cooked` | 47468 | `Blueberry Full Cooked` |  | `Pickup`, `EdibleObject` |
| `Blueberry Full Ripe` | 45012 | `Blueberry Full Ripe` |  | `Pickup`, `EdibleObject` |
| `Blueberry Full Unripe` | 42556 | `Blueberry Full Unripe` |  | `Pickup`, `EdibleObject`, `RaycastCrafter` |
| `Book` | 44174 | `Book` | no | `Book`, `Pickup` |
| `Bought Skill Orb Replacer` | 42842 | `Select Server Orb` | no | `BoughtSkillOrbReplacer`, `SkillOrbMovement`, `Pickup` |
| `Bow` | 56546 | `Bow` |  | `Pickup`, `Bow`, `DurabilityModule`, `PhysicalMaterialPart`, `DockArray` |
| `Bow Blade` | 27416 | `Bow Blade` |  | `Pickup`, `ImpactDetector`, `CraftingPart`, `PhysicalMaterialPart`, `ForgedPointCollection`, `DurabilityModule` (+1) |
| `Bronze Alloy Ingot` | 26316 | `Bronze Ingot` | no | `Pickup`, `StackingComponent` |
| `Brown Mushroom Shield` | 17258 | `Brown Mushroom Shield` |  | `Pickup`, `DurabilityModule`, `EmbeddableManager` |
| `Bung` | 8050 | `Bung` | no | `Pickup` |
| `Buran Resin` | 15570 | `Buran Resin` | no | `CraftingPart`, `Pickup`, `PhysicalMaterialPart`, `GenericCraftingComponent`, `InteractableLastPlayerInteractorHandler` |
| `Candy Cane` | 27314 | `Candy Cane` |  | `Pickup`, `EdibleObject` |
| `Candy Cane Knife` | 7676 | `Candy Cane Knife` |  | `Pickup`, `ImpactTool`, `DurabilityModule`, `ThrowAlignHelper`, `Embeddable`, `Surface` |
| `Carrot Full Burnt` | 62634 | `Carrot Full Burnt` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `Carrot Full Cooked` | 60742 | `Carrot Full Cooked` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `Carrot Full Ripe` | 58838 | `Carrot Full Ripe` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `BuildupPickup`, `Spawner` |
| `Carrot Full Unripe` | 56934 | `Carrot Full Unripe` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `Carrot Half Burnt` | 64146 | `Carrot Half Burnt` |  | `Pickup`, `EdibleObject` |
| `Carrot Half Cooked` | 63758 | `Carrot Half Cooked` |  | `Pickup`, `EdibleObject` |
| `Carrot Half Ripe` | 63354 | `Carrot Half Ripe` |  | `Pickup`, `EdibleObject` |
| `Carrot Half Unripe` | 62950 | `Carrot Half Unripe` |  | `Pickup`, `EdibleObject` |
| `Carsi Ingot` | 60868 | `Carsi Ingot` |  | `Pickup`, `ImpactTool`, `BasicMeltingModel`, `TemperatureToMaterial`, `StackingComponent`, `PhysicalMaterialPart` |
| `Carved Pumpkin Smelter` | 27322 | `Carved Pumpkin Smelter` |  | `MultiHandPickup`, `HealthObject`, `Spawner`, `ImpactDetector`, `StatManager` |
| `Cauldron Medium` | 45082 | `Cauldron` |  | `CookingPot`, `StewManager`, `MultiHandPickup`, `LiquidContainer`, `LiquidStencilShaderController`, `PourableContainer` (+5) |
| `Chisel` | 44380 | `Chisel` |  | `Pickup`, `ImpactDetector`, `CraftingPart`, `PhysicalMaterialPart`, `ChiselingTool`, `ForgedPointCollection` (+3) |
| `Chocolate Easter Egg` | 30164 | `Chocolate Easter Egg` |  | `Pickup`, `HealthObject`, `StatManager`, `ImpactDetector`, `EdibleObject` |
| `Coal` | 19658 | `Coal` |  | `Pickup`, `StackingComponent` |
| `Coal Ash` | 2792 | `Coal Ash` |  | `Pickup` |
| `Coal Training` | 51610 | `Coal Training` |  | `Pickup`, `PracticeObjectFader` |
| `Copper Ingot` | 32850 | `Copper Ingot` |  | `Pickup`, `ImpactTool`, `BasicMeltingModel`, `TemperatureToMaterial`, `StackingComponent`, `PhysicalMaterialPart` |
| `Copper Ore` | 2484 | `Copper Ore` |  | `Pickup`, `Impactor`, `ImpactTool`, `SparkImpactDetector`, `StackingComponent` |
| `Craft Piece Side 1Way` | 1274 | `Craft Piece Side 1Way Item` |  | `Pickup`, `CraftingPart`, `PhysicalMaterialPart`, `DurabilityModule`, `MeltingModelPart`, `TemperatureToMaterial` |
| `Craft Piece Side 2Way` | 24046 | `Craft Piece Side 2Way Item` |  | `Pickup`, `PhysicalMaterialPart`, `CraftingPart`, `DurabilityModule`, `MeltingModelPart`, `TemperatureToMaterial` |
| `Craft Piece Side 4Way` | 32160 | `Craft Piece Side 4Way Item` |  | `Pickup`, `PhysicalMaterialPart`, `CraftingPart`, `DurabilityModule`, `MeltingModelPart`, `TemperatureToMaterial` |
| `Craft Piece Side Flat 1Way` | 38606 | `Craft Piece SideFlat 1Way Item` |  | `Pickup`, `PhysicalMaterialPart`, `CraftingPart`, `DurabilityModule`, `MeltingModelPart`, `TemperatureToMaterial` |
| `Craft Piece SideFlat 2Way` | 26748 | `Craft Piece SideFlat 2Way Item` |  | `Pickup`, `PhysicalMaterialPart`, `CraftingPart`, `DurabilityModule`, `MeltingModelPart`, `TemperatureToMaterial` |
| `Crystal Gem Blue` | 8002 | `Crystal Gem Blue` |  | `Pickup`, `ImpactTool`, `HealthObject`, `MultiSpawner`, `ImpactDetector`, `DisableLightOnDock` (+1) |
| `Crystal Lance Blue` | 23400 | `Crystal Lance Blue` |  | `Pickup`, `ImpactTool`, `DisableLightOnDock`, `DurabilityModule` |
| `Crystal Pick Blue` | 2924 | `Crystal Pick Blue` |  | `Pickup`, `ImpactTool`, `DisableLightOnDock`, `DurabilityModule` |
| `Crystal Shard Blue` | 7092 | `Crystal Shard Blue` |  | `Pickup`, `CraftingPart`, `DisableLightOnDock`, `DurabilityModule` |
| `Crystal Sword Blue` | 56894 | `Crystal Sword Blue` |  | `Pickup`, `ImpactTool`, `DisableLightOnDock`, `DurabilityModule` |
| `Curled Wooden Handle` | 64172 | `Curled Wooden Handle` |  | `Pickup`, `ImpactTool`, `CraftingPart`, `DurabilityModule`, `PhysicalMaterialPart` |
| `Dagger Blade Curved` | 9704 | `Dagger Blade Curved` |  | `Pickup`, `ImpactDetector`, `CraftingPart`, `PhysicalMaterialPart`, `ForgedPointCollection`, `DurabilityModule` (+1) |
| `Dagger Blade Edgy` | 49402 | `Dagger Blade Edgy` |  | `Pickup`, `ImpactDetector`, `CraftingPart`, `PhysicalMaterialPart`, `ForgedPointCollection`, `DurabilityModule` (+1) |
| `Dagger Blade Round` | 56720 | `Dagger Blade Round` |  | `Pickup`, `ImpactDetector`, `CraftingPart`, `PhysicalMaterialPart`, `ForgedPointCollection`, `DurabilityModule` (+1) |
| `Dagger Blade Wide` | 54482 | `Dagger Blade Wide` |  | `Pickup`, `CraftingPart`, `PhysicalMaterialPart`, `ImpactDetector`, `ForgedPointCollection`, `DurabilityModule` (+1) |
| `Dais Meat Full Burnt` | 41870 | `Dais Meat Full Burnt` |  | `Pickup`, `EdibleObject`, `ImpactHitTrigger`, `ImpactDetector`, `Spawner` |
| `Dais Meat Full Cooked` | 43452 | `Dais Meat Full Cooked` |  | `Pickup`, `EdibleObject`, `ImpactHitTrigger`, `ImpactDetector`, `Spawner` |
| `Dais Meat Full Ripe` | 47394 | `Dais Meat Full Ripe` |  | `Pickup`, `EdibleObject`, `ImpactHitTrigger`, `ImpactDetector`, `Spawner` |
| `Dais Meat Half Burnt` | 43674 | `Dais Meat Half Burnt` |  | `Pickup`, `EdibleObject` |
| `Dais Meat Half Cooked` | 43502 | `Dais Meat Half Cooked` |  | `Pickup`, `EdibleObject` |
| `Dais Meat Half Ripe` | 43294 | `Dais Meat Half Ripe` |  | `Pickup`, `EdibleObject` |
| `Darksteel Ingot` | 57556 | `Darksteel Ingot` | no | `Pickup`, `ImpactTool`, `BasicMeltingModel`, `TemperatureToMaterial`, `StackingComponent` |
| `DebugArrow` | 34892 | `DebugArrow` |  | `Pickup`, `Arrow`, `ThrowableArrow`, `Embeddable`, `ImpactTool`, `Surface` (+1) |
| `DebugPlayerStone` | 62120 | `DebugPlayerStone` |  | `Pickup`, `Impactor`, `ImpactTool`, `AddonCraftingPart`, `SparkImpactDetector`, `DurabilityModule` |
| `Dragonfly Corpse` | 43552 | `Dragonfly Corpse` |  | `Pickup`, `EdibleObject`, `HealthObject`, `StatManager`, `ImpactDetector`, `Target` |
| `Duplicate Paper Variant` | 11048 | `Duplicate Paper` | no | `Pickup`, `PaperPageInstance` |
| `Dynamite` | 31326 | `Dynamite` |  | `Pickup`, `ImpactDetector` |
| `Easter Egg 01` | 55462 | `Easter Egg 01` |  | `Pickup`, `HealthObject`, `StatManager`, `ImpactDetector`, `BreakOnImpact`, `Spawner` |
| `Easter Egg 02` | 57998 | `Easter Egg 02` |  | `Pickup`, `HealthObject`, `StatManager`, `ImpactDetector`, `BreakOnImpact`, `Spawner` |
| `Easter Egg 03` | 20128 | `Easter Egg 03` |  | `Pickup`, `HealthObject`, `StatManager`, `ImpactDetector`, `BreakOnImpact`, `Spawner` |
| `Easter Egg 04` | 21558 | `Easter Egg 04` |  | `Pickup`, `HealthObject`, `StatManager`, `ImpactDetector`, `BreakOnImpact`, `MultiSpawner` |
| `Edge Blade Long Curve` | 17478 | `Edge Long Curve Blade` |  | `Pickup`, `ImpactDetector`, `CraftingPart`, `PhysicalMaterialPart`, `ForgedPointCollection`, `DurabilityModule` (+1) |
| `Edge Curved Blade` | 11938 | `Edge Curved Blade` |  | `Pickup`, `ImpactDetector`, `CraftingPart`, `PhysicalMaterialPart`, `ForgedPointCollection`, `DurabilityModule` (+1) |
| `Edge Short Curve Blade` | 20892 | `Edge Short Curve Blade` |  | `Pickup`, `PhysicalMaterialPart`, `ImpactDetector`, `CraftingPart`, `ForgedPointCollection`, `DurabilityModule` (+1) |
| `Edge Straight Blade` | 30124 | `Edge Straight Blade` |  | `Pickup`, `ImpactDetector`, `ForgedPointCollection`, `CraftingPart`, `PhysicalMaterialPart`, `DurabilityModule` (+1) |
| `Eggplant Full Burnt` | 55030 | `Eggplant Full Burnt` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `Eggplant Full Cooked` | 54506 | `Eggplant Full Cooked` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `Eggplant Full Ripe` | 53982 | `Eggplant Full Ripe` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `Eggplant Full Unripe` | 53458 | `Eggplant Full Unripe` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `Eggplant Half Burnt` | 62546 | `Eggplant Half Burnt` |  | `Pickup`, `EdibleObject` |
| `Eggplant Half Cooked` | 62142 | `Eggplant Half Cooked` |  | `Pickup`, `EdibleObject` |
| `Eggplant Half Ripe` | 61738 | `Eggplant Half Ripe` |  | `Pickup`, `EdibleObject` |
| `Eggplant Half Unripe` | 61334 | `Eggplant Half Unripe` |  | `Pickup`, `EdibleObject`, `RaycastCrafter` |
| `Evinon Steel Ingot` | 32198 | `Evinon Steel Ingot` |  | `Pickup`, `ImpactTool`, `BasicMeltingModel`, `TemperatureToMaterial`, `StackingComponent`, `PhysicalMaterialPart` |
| `Explosive Spike` | 50412 | `Spike Explosive` |  | `Pickup`, `CraftingPart`, `DurabilityModule`, `BreakOnImpact` |
| `Feather Red Training` | 80 | `Feather Red Training` |  | `Pickup`, `PracticeObjectFader` |
| `Firework` | 40748 | `Firework` |  | `Pickup`, `RaycastCrafter`, `PropelledProjectile`, `ImpactDetector`, `UnchunkedEffectPlayer` |
| `Fixed Light Bag Attachment` | 1056 | `Fixed Light Bag Attachment` |  | `Pickup`, `GenericCraftingResult`, `ConfirmationCraftingPart`, `CraftedDocks`, `HierarchyInteractionFilter` |
| `Flashlight Lantern` | 23642 | `Flashlight Lantern` |  | `Pickup`, `GenericCraftingResult`, `DockArray` |
| `Flint` | 39484 | `Flint` |  | `Pickup`, `ImpactTool`, `AddonCraftingPart`, `ChiselingTool`, `DurabilityModule`, `SparkSecondaryDetector` |
| `Flint Training` | 2356 | `Flint Training` |  | `Pickup`, `PracticeObjectFader` |
| `Flower Blue` | 23514 | `Flower Blue` |  | `Pickup` |
| `Flower Red` | 61634 | `Flower Red` |  | `Pickup` |
| `Forage Basket Bag` | 39880 | `Forage Basket Bag` |  | `Pickup`, `StabilizeJointContainer`, `PickupDockingSoundPlayer`, `GenericCraftingResult`, `CraftingPart`, `DockArray` (+2) |
| `Forage Side Pouch Attachment` | 32874 | `Forage Bag Side Pouch Attachment` |  | `Pickup`, `GenericCraftingResult`, `ConfirmationCraftingPart`, `CraftedDocks`, `HierarchyInteractionFilter` |
| `Garlic Full Burnt` | 52934 | `Garlic Full Burnt` |  | `Pickup`, `ImpactDetector`, `ImpactHitTrigger`, `CookingGarnishComponent`, `Spawner` |
| `Garlic Full Cooked` | 52530 | `Garlic Full Cooked` |  | `Pickup`, `ImpactDetector`, `ImpactHitTrigger`, `CookingGarnishComponent`, `Spawner` |
| `Garlic Full Ripe` | 52126 | `Garlic Full Ripe` |  | `Pickup`, `ImpactDetector`, `ImpactHitTrigger`, `BuildupPickup`, `CookingGarnishComponent`, `Spawner` |
| `Garlic Full Unripe` | 49162 | `Garlic Full Unripe` |  | `Pickup`, `ImpactDetector`, `ImpactHitTrigger`, `CookingGarnishComponent`, `Spawner` |
| `Garlic Half Burnt` | 60930 | `Garlic Half Burnt` |  | `Pickup`, `EdibleObject`, `CookingGarnishComponent` |
| `Garlic Half Cooked` | 60526 | `Garlic Half Cooked` |  | `Pickup`, `EdibleObject`, `CookingGarnishComponent` |
| `Garlic Half Ripe` | 60122 | `Garlic Half Ripe` |  | `Pickup`, `EdibleObject`, `CookingGarnishComponent` |
| `Garlic Half Unripe` | 59718 | `Garlic Half Unripe` |  | `Pickup`, `EdibleObject`, `CookingGarnishComponent` |
| `Geode Tier 1` | 59336 | `Geode Item` |  | `MultiHandPickup`, `BasicChiselable`, `MultiSpawner`, `Spawner` |
| `Geode Tier 1 Half 01` | 29678 | `Geode Half 01` |  | `MultiHandPickup`, `HealthObject`, `StatManager`, `ImpactDetector`, `BasicChiselable` |
| `Geode Tier 1 Half 02` | 38512 | `Geode Half 02` |  | `MultiHandPickup`, `ImpactDetector`, `HealthObject`, `StatManager`, `BasicChiselable` |
| `Gold Ingot` | 30092 | `Gold Ingot` |  | `Pickup`, `BasicMeltingModel`, `TemperatureToMaterial`, `StackingComponent`, `PhysicalMaterialPart` |
| `Gold Ore` | 61650 | `Gold Ore` |  | `Pickup`, `ImpactTool`, `Impactor`, `SparkImpactDetector`, `StackingComponent` |
| `GoldCoin` | 61648 | `Coin` |  | `Pickup`, `TossRandom`, `BasicMeltingModel`, `TemperatureToMaterial` |
| `Gotera Seedling Orb` | 59342 | `Gotera Seedling Orb` |  | `Pickup`, `BreakOnImpact` |
| `Gourd Canteen` | 29032 | `Gourd Canteen` |  | `Pickup`, `ShakeDetector`, `LiquidContainer`, `PourableContainer`, `BreakOnImpact`, `LiquidContainerLid` (+7) |
| `Grass Clump` | 57872 | `Grass Clump` |  | `CraftingPart`, `Pickup`, `RaycastCrafter`, `PhysicalMaterialPart`, `GenericCraftingComponent`, `InteractableLastPlayerInteractorHandler` |
| `Great Sword Blade` | 63886 | `Great Sword Blade` |  | `Pickup`, `CraftingPart`, `PhysicalMaterialPart`, `ImpactDetector`, `ForgedPointCollection`, `DurabilityModule` (+1) |
| `Greataxe (Debug)` | 54612 | `Rusty Greataxe` | no | `Pickup`, `ImpactTool`, `DurabilityModule` |
| `Guard` | 51672 | `Guard` |  | `Pickup`, `CraftingPart`, `DurabilityModule`, `PhysicalMaterialPart`, `MeltingModelPart`, `TemperatureToMaterial` |
| `Guard Fancy` | 62140 | `Guard Fancy` |  | `Pickup`, `CraftingPart`, `DurabilityModule`, `PhysicalMaterialPart`, `MeltingModelPart`, `TemperatureToMaterial` |
| `Guard Handle` | 43186 | `Guard Handle` |  | `Pickup`, `CraftingPart` |
| `Guard Hemisphere` | 34428 | `Guard Hemisphere` |  | `Pickup`, `CraftingPart`, `DurabilityModule`, `PhysicalMaterialPart`, `MeltingModelPart`, `TemperatureToMaterial` |
| `Guard Pointy Ends` | 28160 | `Guard Pointy End` |  | `Pickup`, `CraftingPart`, `DurabilityModule`, `PhysicalMaterialPart`, `MeltingModelPart`, `TemperatureToMaterial` |
| `Guard Round Ends` | 21776 | `Guard Round End` |  | `Pickup`, `CraftingPart` |
| `Guard Straight Ends` | 17348 | `Guard Straight End` |  | `Pickup`, `CraftingPart`, `DurabilityModule`, `PhysicalMaterialPart`, `MeltingModelPart`, `TemperatureToMaterial` |
| `Hammer` | 61660 | `Hammer` | no | `Pickup`, `ImpactTool` |
| `Hammer Head` | 43146 | `Hammer Head` |  | `Pickup`, `CraftingPart`, `PhysicalMaterialPart`, `DurabilityModule`, `MeltingModelPart`, `TemperatureToMaterial` |
| `Hammer Head Small` | 15476 | `Hammer Head Small` |  | `Pickup`, `CraftingPart`, `PhysicalMaterialPart`, `DurabilityModule`, `MeltingModelPart`, `TemperatureToMaterial` |
| `Handle Bow` | 64410 | `Handle Bow` |  | `Pickup`, `Spawner`, `CraftingPart`, `DurabilityModule`, `PhysicalMaterialPart` |
| `Handle Fist` | 22988 | `Handle Fist` |  | `Pickup`, `CraftingPart`, `ImpactTool`, `DurabilityModule`, `BasicMeltingModel`, `TemperatureToMaterial` |
| `Handle Large Branch` | 61098 | `Handle Large Branch` |  | `Pickup`, `CraftingPart`, `ImpactTool`, `DurabilityModule`, `PhysicalMaterialPart` |
| `Handle Large Cool` | 25290 | `Handle Large Cool` |  | `Pickup`, `CraftingPart`, `ImpactTool`, `DurabilityModule`, `TemperatureToMaterial`, `BasicMeltingModel` |
| `Handle Large Standard` | 43252 | `Handle Large Standard` | no | `Pickup`, `CraftingPart`, `ImpactTool` |
| `Handle Long Straight` | 20300 | `Handle Long Straight` |  | `Pickup`, `CraftingPart`, `ImpactTool`, `DurabilityModule`, `PhysicalMaterialPart`, `DockArray` |
| `Handle Medium Branch` | 61400 | `Handle Medium Branch` |  | `Pickup`, `CraftingPart`, `ImpactTool`, `DurabilityModule`, `PhysicalMaterialPart` |
| `Handle Medium Cool` | 61856 | `Handle Medium Cool` |  | `Pickup`, `CraftingPart`, `ImpactTool`, `DurabilityModule`, `BasicMeltingModel`, `TemperatureToMaterial` |
| `Handle Medium Curved` | 19316 | `Handle Medium Curved` |  | `Pickup`, `CraftingPart`, `ImpactTool`, `DurabilityModule`, `TemperatureToMaterial`, `BasicMeltingModel` |
| `Handle Medium Ridged` | 60598 | `Handle Medium Ridged` |  | `Pickup`, `CraftingPart`, `ImpactTool` |
| `Handle Medium Standard` | 41438 | `Handle Medium Standard` |  | `Pickup`, `CraftingPart`, `ImpactTool` |
| `Handle Medium Straight` | 19180 | `Handle Medium Straight` |  | `Pickup`, `CraftingPart`, `ImpactTool`, `DurabilityModule`, `PhysicalMaterialPart`, `DockArray` |
| `Handle Round Fist` | 3506 | `Handle Round Fist` |  | `Pickup`, `CraftingPart`, `ImpactTool`, `DurabilityModule`, `PhysicalMaterialPart` |
| `Handle Short` | 42230 | `Handle Short` |  | `Pickup`, `CraftingPart`, `ImpactTool`, `DurabilityModule`, `PhysicalMaterialPart` |
| `Handle Short C Curve` | 34898 | `Handle Short C Curve` |  | `Pickup`, `CraftingPart`, `ImpactTool`, `DurabilityModule`, `BasicMeltingModel`, `TemperatureToMaterial` |
| `Handle Short Cool` | 5920 | `Handle Short Cool` |  | `Pickup`, `CraftingPart`, `ImpactTool`, `DurabilityModule`, `BasicMeltingModel`, `TemperatureToMaterial` |
| `Handle Short Pointy End` | 28636 | `Handle Short Pointy End` |  | `Pickup`, `CraftingPart`, `ImpactTool`, `DurabilityModule`, `BasicMeltingModel`, `TemperatureToMaterial` |
| `Handle Short S Curve` | 27820 | `Handle Short S Curve` |  | `Pickup`, `CraftingPart`, `ImpactTool` |
| `Handle Short Taper` | 24198 | `Dagger Blade Curved`, `Handle Short Taper` |  | `Pickup`, `CraftingPart`, `ImpactTool` |
| `Handle Spear` | 20640 | `Handle Spear` |  | `Pickup`, `CraftingPart`, `ImpactTool` |
| `Handle Tonfa` | 57838 | `Handle Tonfa` |  | `Pickup`, `CraftingPart`, `ImpactTool`, `DurabilityModule`, `PhysicalMaterialPart` |
| `Hard Metal Small Bits` | 62594 | `Hard Metal Small Bits` |  | `Pickup`, `PhysicalMaterialPart`, `HeatPointCollection`, `MeltingModelPart`, `GenericCraftingComponent` |
| `Hard Plate Metal Medium Square` | 50988 | `Hard Plate Metal Medium Square` |  | `Pickup`, `ForgedPointCollection`, `PhysicalMaterialPart`, `ImpactDetector`, `GenericCraftingComponent`, `MeltingModelPart` |
| `Healing Pod` | 44360 | `Healing Pod` |  | `Pickup`, `CraftingPart`, `DurabilityModule`, `BreakOnImpact` |
| `Hebios Bag Medallion` | 11582 | `Standard Side Pouch Attachment` | no | `Pickup`, `ConfirmationCraftingPart`, `HierarchyInteractionFilter` |
| `Hebios Crafted Mould` | 22498 | `Mould Hebios` |  | `Pickup`, `Mould`, `GenericCraftingResult` |
| `Hebios Guard` | 5144 | `Hebios Guard` |  | `Pickup`, `DurabilityModule`, `CraftingPart`, `PhysicalMaterialPart`, `MeltingModelPart`, `TemperatureToMaterial` |
| `Hebios Handle Katana` | 53200 | `Hebios Handle Katana` |  | `Pickup`, `ImpactTool`, `DurabilityModule`, `CraftingPart`, `Enchantable` |
| `Hebios Handle Kunai` | 18456 | `Hebios Handle Kunai` |  | `Pickup`, `ImpactTool`, `DurabilityModule`, `ThrowAlignHelper`, `Embeddable`, `Surface` (+1) |
| `Hebios Handle Naginata` | 24220 | `Hebios Handle Naginata` |  | `Pickup`, `ImpactTool`, `DurabilityModule`, `CraftingPart`, `Enchantable` |
| `Hebios Handle Wakizashi` | 47662 | `Hebios Handle Wakizashi` |  | `Pickup`, `ImpactTool`, `DurabilityModule`, `CraftingPart`, `Enchantable` |
| `Hebios Katana Blade Part 01` | 12388 | `Hebios Katana Blade Part 01` |  | `Pickup`, `GenericCraftingComponent`, `BasicMeltingModel`, `HeatPointCollection` |
| `Hebios Katana Blade Part 02` | 12386 | `Hebios Katana Blade Part 02` |  | `Pickup`, `GenericCraftingComponent`, `BasicMeltingModel`, `HeatPointCollection` |
| `Hebios Katana Blade Part Full` | 17266 | `Katana Blade Part Full`, `Sai Blade Part Full`, `Wakizashi Blade Part Full` |  | `Pickup`, `GenericCraftingResult`, `CraftingPart`, `DurabilityModule` |
| `Hebios Naginata Blade Part 01` | 17238 | `Hebios Naginata Blade Part 01` |  | `Pickup`, `GenericCraftingComponent`, `BasicMeltingModel`, `HeatPointCollection` |
| `Hebios Naginata Blade Part 02` | 42894 | `Hebios Naginata Blade Part 02` |  | `Pickup`, `GenericCraftingComponent`, `BasicMeltingModel`, `HeatPointCollection` |
| `Hebios Naginata Blade Part Full` | 17420 | `Naginata Blade Part Full` |  | `Pickup`, `GenericCraftingResult`, `CraftingPart`, `DurabilityModule` |
| `Hebios Sai Blade Part 01` | 57048 | `Hebios Sai Blade Part 01` |  | `Pickup`, `GenericCraftingComponent`, `BasicMeltingModel`, `HeatPointCollection` |
| `Hebios Sai Blade Part 02` | 56830 | `Hebios Sai Blade Part 02` |  | `Pickup`, `GenericCraftingComponent`, `BasicMeltingModel`, `HeatPointCollection` |
| `Hebios Sai Blade Part Full` | 1600 | `Sai Blade Part Full` |  | `Pickup`, `GenericCraftingResult`, `CraftingPart`, `DurabilityModule` |
| `Hebios Wakizashi Blade Part 01` | 49774 | `Hebios Wakizashi Blade Part 01` |  | `Pickup`, `GenericCraftingComponent`, `BasicMeltingModel`, `HeatPointCollection` |
| `Hebios Wakizashi Blade Part 02` | 50184 | `Hebios Wakizashi Blade Part 02` |  | `Pickup`, `GenericCraftingComponent`, `BasicMeltingModel`, `HeatPointCollection` |
| `Hebios Wakizashi Blade Part Full` | 9018 | `Wakizashi Blade Part Full` |  | `Pickup`, `GenericCraftingResult`, `CraftingPart`, `DurabilityModule` |
| `Hoarder Bag` | 54214 | `Hoarder Bag` |  | `Pickup`, `StabilizeJointContainer`, `PickupDockingSoundPlayer`, `GenericCraftingResult`, `CraftingPart`, `DockArray` (+2) |
| `Iron Ingot` | 23012 | `Iron Ingot` |  | `Pickup`, `ImpactTool`, `BasicMeltingModel`, `TemperatureToMaterial`, `StackingComponent`, `PhysicalMaterialPart` |
| `Iron Ore` | 61652 | `Iron Ore` |  | `Pickup`, `ImpactTool`, `Impactor`, `SparkImpactDetector`, `StackingComponent` |
| `Ka Karimata Arrow` | 960 | `Ka Karimata` |  | `Pickup`, `ImpactTool`, `Surface`, `DurabilityModule`, `Arrow`, `Embeddable` (+3) |
| `Katana` | 34994 | `Katana` |  | `Pickup`, `ImpactTool`, `DurabilityModule`, `MultiSpawner`, `Enchantable` |
| `Key Standard` | 39744 | `Iron Key` |  | `KeyItem` |
| `Kunai` | 32002 | `Kunai` |  | `Pickup`, `ImpactTool`, `DurabilityModule`, `ThrowAlignHelper`, `Embeddable`, `Surface` |
| `Lantern` | 41760 | `Lantern` |  | `Pickup`, `GenericCraftingResult`, `DockArray` |
| `Large Guard Rectangle` | 9304 | `Large Guard Rectangle` |  | `Pickup`, `PhysicalMaterialPart`, `CraftingPart`, `DurabilityModule`, `MeltingModelPart`, `TemperatureToMaterial` |
| `Large Guard TShape` | 23552 | `Large Guard TShape` |  | `Pickup`, `PhysicalMaterialPart`, `CraftingPart`, `DurabilityModule`, `MeltingModelPart`, `TemperatureToMaterial` |
| `Large Guard Wedge` | 39010 | `Large Guard Wedge` |  | `Pickup`, `PhysicalMaterialPart`, `CraftingPart`, `DurabilityModule`, `MeltingModelPart`, `TemperatureToMaterial` |
| `Large Longsword Blade` | 56124 | `Large Longsword Blade` |  | `Pickup`, `ImpactDetector`, `ForgedPointCollection`, `CraftingPart`, `DurabilityModule`, `PhysicalMaterialPart` (+1) |
| `Large Spiked Wooden Club` | 55914 | `Large Spiked Wooden Club` |  | `Pickup`, `ImpactTool`, `DurabilityModule`, `PhysicalMaterialPart` |
| `Log Mallet` | 42518 | `Log Mallet` | no | `Pickup`, `CraftingPart` |
| `Log Mallet v02` | 42030 | `Log Mallet v02` | no | `Pickup`, `CraftingPart` |
| `Metal Bow` | 25100 | `Metal Bow` |  | `Pickup`, `Bow`, `CraftingPart`, `ImpactTool`, `DurabilityModule`, `DockArray` |
| `Metal Hammer Head` | 22876 | `Metal Hammer Head` |  | `Pickup`, `CraftingPart`, `PhysicalMaterialPart`, `DurabilityModule`, `MeltingModelPart`, `TemperatureToMaterial` |
| `Metal Hebios Katana Blade` | 17174 | `Hebios Katana Blade` |  | `Pickup`, `PhysicalMaterialPart`, `CraftingPart`, `ForgedPointCollection`, `HeatPointCollection`, `DurabilityModule` (+2) |
| `Metal Hebios Naginata Blade` | 15124 | `Hebios Naginata Blade` |  | `Pickup`, `HeatPointCollection`, `ForgedPointCollection`, `DurabilityModule`, `CraftingPart`, `PhysicalMaterialPart` (+2) |
| `Metal Hebios Sai Blade` | 53124 | `Hebios Sai Blade` |  | `Pickup`, `HeatPointCollection`, `ForgedPointCollection`, `DurabilityModule`, `CraftingPart`, `PhysicalMaterialPart` (+2) |
| `Metal Hebios Wakizashi Blade` | 48902 | `Hebios Wakizashi Blade` |  | `Pickup`, `HeatPointCollection`, `ForgedPointCollection`, `DurabilityModule`, `CraftingPart`, `PhysicalMaterialPart` (+2) |
| `Metal Tap` | 17334 | `Metal Tap` |  | `Pickup` |
| `Metal Wall Hook` | 61180 | `Metal Wall Hook` | no | `Pickup`, `RaycastCrafter`, `PhysicalMaterialPart`, `MeltingModelPart`, `TemperatureToMaterial`, `InteractableEvents` (+3) |
| `MicroTutorial Face Orb` | 8108 | `Select Server Orb` | no | `Pickup`, `ActionOrb`, `MicroTutorialFaceOrb`, `GameObjectLifetimeScope` |
| `Mould` | 14826 | `Mould` |  | `Pickup`, `Mould` |
| `MRK Fuel Core` | 65358 | `MRK Fuel Core` |  | `Pickup` |
| `MRK Molten Core` | 51764 | `MRK Molten Core` |  | `Pickup` |
| `MRK Puzzle Core 01` | 14158 | `MRK Puzzle Core 01` |  | `MultiHandPickup` |
| `MRK Puzzle Core 02` | 28416 | `MRK Puzzle Core 02` |  | `MultiHandPickup` |
| `MushroomBrown Full Burnt` | 47126 | `MushroomBrown Full Burnt` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `MushroomBrown Full Cooked` | 46510 | `MushroomBrown Full Cooked` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `MushroomBrown Full Ripe` | 61666 | `MushroomBrown Full Ripe` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `MushroomBrown Half Burnt` | 53372 | `MushroomBrown Half Burnt` |  | `Pickup`, `EdibleObject` |
| `MushroomBrown Half Cooked` | 50916 | `MushroomBrown Half Cooked` |  | `Pickup`, `EdibleObject` |
| `MushroomBrown Half Ripe` | 48460 | `MushroomBrown Half Ripe` |  | `Pickup`, `EdibleObject` |
| `MushroomCaveLarge Half Burnt` | 60330 | `MushroomCaveLarge Half Burnt` |  | `Pickup`, `EdibleObject` |
| `MushroomCaveLarge Half Cooked` | 9414 | `MushroomCaveLarge Half Cooked` |  | `Pickup`, `EdibleObject` |
| `MushroomCaveLarge Half Ripe` | 54182 | `MushroomCaveLarge Half Ripe` |  | `Pickup`, `EdibleObject` |
| `MushroomCaveSmall Full Burnt` | 29148 | `MushroomCaveSmall Full Burnt` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `MushroomCaveSmall Full Cooked` | 40066 | `MushroomCaveSmall Full Cooked` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `MushroomCaveSmall Full Ripe` | 58270 | `MushroomCaveSmall Full Ripe` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `MushroomCaveSmall Half Burnt` | 47142 | `MushroomCaveSmall Half Burnt` |  | `Pickup`, `EdibleObject` |
| `MushroomCaveSmall Half Cooked` | 44488 | `MushroomCaveSmall Half Cooked` |  | `Pickup`, `EdibleObject` |
| `MushroomCaveSmall Half Ripe` | 41834 | `MushroomCaveSmall Half Ripe` |  | `Pickup`, `EdibleObject` |
| `MushroomGlowing Full Burnt` | 43856 | `MushroomGlowing Full Burnt` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `MushroomGlowing Full Cooked` | 41428 | `MushroomGlowing Full Cooked` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `MushroomGlowing Full Ripe` | 38966 | `MushroomGlowing Full Ripe` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `MushroomGlowing Half Burnt` | 36504 | `MushroomGlowing Half Burnt` |  | `Pickup`, `EdibleObject` |
| `MushroomGlowing Half Cooked` | 34042 | `MushroomGlowing Half Cooked` |  | `Pickup`, `EdibleObject` |
| `MushroomGlowing Half Ripe` | 31580 | `MushroomGlowing Half Ripe` |  | `Pickup`, `EdibleObject` |
| `MushroomRed Full Burnt` | 46660 | `MushroomRed Full Burnt` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `MushroomRed Full Cooked` | 46888 | `MushroomRed Full Cooked` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `MushroomRed Full Ripe` | 61658 | `MushroomRed Full Ripe` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `MushroomRed Half Burnt` | 43272 | `MushroomRed Half Burnt` |  | `Pickup`, `EdibleObject` |
| `MushroomRed Half Cooked` | 40816 | `MushroomRed Half Cooked` |  | `Pickup`, `EdibleObject` |
| `MushroomRed Half Ripe` | 38360 | `MushroomRed Half Ripe` |  | `Pickup`, `EdibleObject` |
| `Mythril Ingot` | 24774 | `Mythril Ingot` |  | `Pickup`, `ImpactTool`, `BasicMeltingModel`, `TemperatureToMaterial`, `StackingComponent`, `PhysicalMaterialPart` |
| `Mythril Ore` | 11702 | `Mythril Ore` |  | `Pickup`, `Impactor`, `ImpactTool`, `SparkImpactDetector`, `StackingComponent` |
| `Naginata` | 41052 | `Naginata` |  | `Pickup`, `ImpactTool`, `DurabilityModule`, `MultiSpawner`, `Enchantable` |
| `Oak Tree Seed` | 17302 | `Oak Tree Seed` |  | `Pickup`, `RaycastCrafter` |
| `Onion Full Burnt` | 48718 | `Onion Full Burnt` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `Onion Full Cooked` | 48214 | `Onion Full Cooked` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `Onion Full Ripe` | 47730 | `Onion Full Ripe` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `BuildupPickup`, `Spawner` |
| `Onion Full Unripe` | 43966 | `Onion Full Unripe` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `Onion Half Burnt` | 59314 | `Onion Half Burnt` |  | `Pickup`, `EdibleObject` |
| `Onion Half Cooked` | 58910 | `Onion Half Cooked` |  | `Pickup`, `EdibleObject` |
| `Onion Half Ripe` | 58506 | `Onion Half Ripe` |  | `Pickup`, `EdibleObject` |
| `Onion Half Unripe` | 58102 | `Onion Half Unripe` |  | `Pickup`, `EdibleObject` |
| `Orchi Ingot` | 16464 | `Orchi Ingot` |  | `Pickup`, `ImpactTool`, `BasicMeltingModel`, `TemperatureToMaterial`, `StackingComponent`, `PhysicalMaterialPart` |
| `Ore Bag` | 64560 | `Ore Bag` |  | `Pickup`, `StabilizeJointContainer`, `PickupDockingSoundPlayer`, `GenericCraftingResult`, `CraftingPart`, `DockArray` (+2) |
| `Ore Side Pouch Attachment` | 61020 | `Ore Bag Side Attachment` |  | `Pickup`, `GenericCraftingResult`, `ConfirmationCraftingPart`, `CraftedDocks`, `HierarchyInteractionFilter` |
| `Ore Training` | 56300 | `Ore Training` |  | `Pickup`, `PracticeObjectFader` |
| `Paper` | 37066 | `Paper`, `Duplicate Paper` |  | `Pickup`, `PaperPageInstance` |
| `Phantom Guard` | 6940 | `Phantom Guard` |  | `Pickup`, `CraftingPart`, `DurabilityModule`, `PhysicalMaterialPart`, `MeltingModelPart`, `TemperatureToMaterial` (+2) |
| `Pick Axe` | 61654 | `Pick` |  | `Pickup`, `ImpactTool` |
| `Pickaxe Head` | 35878 | `Pickaxe Head` |  | `Pickup`, `CraftingPart`, `PhysicalMaterialPart`, `DurabilityModule`, `MeltingModelPart`, `TemperatureToMaterial` |
| `Pole Hugger Edgy` | 17828 | `Pole Hugger Edgy` |  | `Pickup`, `CraftingPart` |
| `Pole Hugger Pointy Ends` | 10962 | `Pole Hugger Pointy Ends` |  | `Pickup`, `CraftingPart` |
| `Pole Hugger Short` | 4920 | `Pole Hugger Short` |  | `Pickup`, `CraftingPart` |
| `Pole Hugger Tall` | 62282 | `Pole Hugger Tall` |  | `Pickup`, `CraftingPart` |
| `Pommel` | 15658 | `Pommel` |  | `Pickup`, `CraftingPart`, `DurabilityModule`, `PhysicalMaterialPart`, `MeltingModelPart`, `TemperatureToMaterial` |
| `Pommel Circle` | 57966 | `Pommel Circle` |  | `Pickup`, `CraftingPart`, `DurabilityModule`, `PhysicalMaterialPart`, `MeltingModelPart`, `TemperatureToMaterial` |
| `Pommel Cone` | 52360 | `Pommel Cone` |  | `Pickup`, `CraftingPart` |
| `Pommel Diamond` | 42764 | `Pommel Diamond` |  | `Pickup`, `CraftingPart`, `DurabilityModule`, `PhysicalMaterialPart`, `MeltingModelPart`, `TemperatureToMaterial` |
| `Pommel Large Square` | 42138 | `Pommel Large Square` |  | `Pickup`, `CraftingPart`, `DurabilityModule`, `PhysicalMaterialPart`, `MeltingModelPart`, `TemperatureToMaterial` |
| `Pommel Squashed` | 1736 | `Pommel Squashed` |  | `Pickup`, `CraftingPart` |
| `Potato Full Burnt` | 1574 | `Potato Full Burnt` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `Potato Full Cooked` | 57840 | `Potato Full Cooked` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `Potato Full Ripe` | 54692 | `Potato Full Ripe` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `Potato Full Unripe` | 52146 | `Potato Full Unripe` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `StatManager`, `ImpactHitTrigger`, `Spawner` |
| `Potato Half Burnt` | 59748 | `Potato Half Burnt` |  | `Pickup`, `EdibleObject` |
| `Potato Half Cooked` | 50612 | `Potato Half Cooked` |  | `Pickup`, `EdibleObject` |
| `Potato Half Ripe` | 48134 | `Potato Half Ripe` |  | `Pickup`, `EdibleObject` |
| `Potato Half Unripe` | 45822 | `Potato Half Unripe` |  | `Pickup`, `EdibleObject`, `RaycastCrafter` |
| `Potato Sapling` | 50692 | `Potato Sapling` |  | `Pickup`, `ShakeDetector`, `DisposablePickup` |
| `Potion Hoops Side Tool Attachment` | 31418 | `Potion Hoops Side Attachment` |  | `Pickup`, `GenericCraftingResult`, `ConfirmationCraftingPart`, `CraftedDocks`, `HierarchyInteractionFilter` |
| `Potion Medium` | 23644 | `Potion Medium`, `Water Potion Medium` |  | `Pickup`, `ShakeDetector`, `LiquidContainer`, `PourableContainer`, `BreakOnImpact`, `LiquidContainerLid` (+7) |
| `Pouch` | 38942 | `Pouch` |  | `Pickup`, `DockArray`, `InteractableEvents` |
| `Pouch Training` | 57348 | `Pouch Training` |  | `Pickup`, `PracticeObjectFader` |
| `Prongs` | 40460 | `Prongs` |  | `Pickup` |
| `pumpkin full burnt` | 5532 | `Pumpkin Full Burnt` |  | `ImpactDetector`, `ImpactHitTrigger`, `Spawner`, `MultiHandPickup`, `PickupBreakOnImpact` |
| `pumpkin full cooked` | 5010 | `Pumpkin Full Cooked` |  | `ImpactDetector`, `ImpactHitTrigger`, `Spawner`, `MultiHandPickup`, `PickupBreakOnImpact` |
| `pumpkin full ripe` | 4488 | `Pumpkin Full Ripe` |  | `ImpactDetector`, `ImpactHitTrigger`, `Spawner`, `MultiHandPickup`, `BasicChiselable`, `PickupBreakOnImpact` |
| `pumpkin full unripe` | 3966 | `Pumpkin Full Unripe` |  | `ImpactDetector`, `ImpactHitTrigger`, `Spawner`, `MultiHandPickup`, `PickupBreakOnImpact` |
| `pumpkin half burnt` | 3444 | `Pumpkin Half Burnt` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `pumpkin half cooked` | 3082 | `Pumpkin Half Cooked` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `pumpkin half ripe` | 2720 | `Pumpkin Half Ripe` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `pumpkin half unripe` | 2358 | `Pumpkin Half Unripe` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `pumpkin piece burnt` | 42218 | `Pumpkin Piece Burnt` |  | `Pickup`, `EdibleObject` |
| `pumpkin piece cooked` | 41930 | `Pumpkin Piece Cooked` |  | `Pickup`, `EdibleObject` |
| `pumpkin piece ripe` | 41608 | `Pumpkin Piece Ripe` |  | `Pickup`, `EdibleObject` |
| `pumpkin piece unripe` | 41286 | `Pumpkin Piece Unripe` |  | `Pickup`, `EdibleObject`, `RaycastCrafter` |
| `Puzzle Orb 1` | 31620 | `Puzzle Orb 1` |  | `Pickup`, `DisableLightOnDock` |
| `Puzzle Orb 2` | 47150 | `Puzzle Orb 2` |  | `Pickup`, `DisableLightOnDock` |
| `Quiver` | 64640 | `Quiver` |  | `Pickup`, `GenericCraftingResult`, `DockArray` |
| `Rapier Blade` | 11332 | `Rapier Blade` |  | `Pickup`, `ImpactDetector`, `CraftingPart`, `PhysicalMaterialPart`, `ForgedPointCollection`, `DurabilityModule` (+1) |
| `Red Iron Ingot` | 31034 | `Red Iron Ingot` |  | `Pickup`, `ImpactTool`, `BasicMeltingModel`, `TemperatureToMaterial`, `StackingComponent`, `PhysicalMaterialPart` |
| `Red Mushroom Shield` | 49188 | `Red Mushroom Shield` |  | `Pickup`, `DurabilityModule`, `EmbeddableManager` |
| `Redwood Gotera Core` | 41402 | `Redwood Gotera Core` |  | `Pickup`, `GenericCraftingComponent` |
| `Redwood Tree Seed` | 55054 | `Redwood Tree Seed` |  | `Pickup`, `RaycastCrafter` |
| `Revive Orb` | 4546 | `Revive Orb` | no | `Pickup`, `ActionOrb`, `ReviveOrb` |
| `Rod Long` | 44066 | `Rod Long` |  | `Pickup`, `CraftingPart`, `ImpactTool`, `DurabilityModule`, `PhysicalMaterialPart`, `DockArray` |
| `Rod Medium` | 44204 | `Rod Medium` |  | `Pickup`, `CraftingPart`, `ImpactTool`, `DurabilityModule`, `PhysicalMaterialPart`, `DockArray` |
| `Rod Slim 40cm` | 59588 | `Rod Slim 40cm` |  | `Pickup`, `CraftingPart`, `ImpactTool`, `DurabilityModule`, `PhysicalMaterialPart` |
| `Rope Clump` | 43836 | `Rope Clump` |  | `Pickup`, `PhysicalMaterialPart`, `GenericCraftingComponent` |
| `Rusty Axe` | 4412 | `Rusty Axe` |  | `Pickup`, `ImpactTool`, `DurabilityModule` |
| `Rusty Chisel` | 40366 | `Rusty Chisel` |  | `Pickup`, `ImpactTool`, `ChiselingTool`, `DurabilityModule` |
| `Rusty Greataxe` | 29296 | `Rusty Greataxe` |  | `Pickup`, `ImpactTool`, `DurabilityModule` |
| `Rusty Greatsword` | 63156 | `Rusty Greatsword` |  | `Pickup`, `ImpactTool`, `DurabilityModule` |
| `Rusty Hammer` | 36126 | `Rusty Hammer` |  | `Pickup`, `ImpactTool`, `DurabilityModule` |
| `Rusty Pickaxe` | 46874 | `Rusty Pickaxe` |  | `Pickup`, `ImpactTool`, `DurabilityModule` |
| `Rusty Pitchfork` | 59586 | `Rusty Pitchfork` |  | `Pickup`, `ImpactTool`, `DurabilityModule` |
| `Rusty Shield` | 20684 | `Rusty Shield` |  | `Pickup`, `CraftingPart`, `DurabilityModule`, `EmbeddableManager` |
| `Rusty Short Sword` | 44824 | `Rusty Short Sword` |  | `Pickup`, `ImpactTool`, `DurabilityModule` |
| `Rusty Spade` | 33230 | `Rusty Spade` |  | `Pickup`, `ImpactTool`, `DurabilityModule`, `DiggingImpactor` |
| `Sai` | 27038 | `Sai` |  | `Pickup`, `ImpactTool`, `DurabilityModule`, `MultiSpawner` |
| `Salt` | 49578 | `Salt` |  | `Pickup`, `CookingGarnishComponent` |
| `Sandstone Stone` | 55930 | `Sandstone Stone` |  | `Pickup`, `Impactor`, `ImpactTool` |
| `Scythe Blade` | 26788 | `Scythe Blade` |  | `Pickup`, `ImpactDetector`, `CraftingPart`, `PhysicalMaterialPart`, `ForgedPointCollection`, `DurabilityModule` (+1) |
| `Select Server Orb` | 55760 | `Select Server Orb` | no | `Pickup`, `ServerSelectionOrb`, `CurveScaler`, `ActionOrb` |
| `Shield` | 61656 | `Shield` |  | `Pickup`, `DurabilityModule`, `EmbeddableManager` |
| `Shield Core Bent Middle` | 7232 | `Shield Core Bent Middle` |  | `Pickup`, `CraftingPart`, `DurabilityModule`, `EmbeddableManager`, `PhysicalMaterialPart` |
| `Shield Core Circle Middle` | 52756 | `Shield Core Circle Middle` |  | `Pickup`, `CraftingPart`, `DurabilityModule`, `EmbeddableManager`, `PhysicalMaterialPart` |
| `Shield Core Handle` | 4530 | `Shield Core Handle` |  | `Pickup`, `CraftingPart`, `ImpactTool`, `DurabilityModule`, `EmbeddableManager`, `PhysicalMaterialPart` |
| `Shield Core Holed Middle` | 50602 | `Shield Core Holed Middle` |  | `Pickup`, `CraftingPart`, `DurabilityModule`, `EmbeddableManager`, `PhysicalMaterialPart` |
| `Shield Part Half Circle` | 50888 | `Shield Part Half Circle` |  | `Pickup`, `CraftingPart`, `DurabilityModule`, `EmbeddableManager`, `PhysicalMaterialPart` |
| `Shield Part Half Circle Hole` | 44704 | `Shield Part Half Circle Hole` |  | `Pickup`, `CraftingPart`, `DurabilityModule`, `EmbeddableManager`, `PhysicalMaterialPart` |
| `Shield Part Half Hole` | 12416 | `Shield Part Half Hole` |  | `Pickup`, `CraftingPart`, `DurabilityModule`, `EmbeddableManager`, `PhysicalMaterialPart` |
| `Shield Part Half Point 01` | 59936 | `Shield Part Half Point` |  | `Pickup`, `CraftingPart`, `DurabilityModule`, `EmbeddableManager`, `PhysicalMaterialPart` |
| `Short Sword` | 38566 | `Short Sword` |  | `Pickup`, `ImpactTool`, `DurabilityModule` |
| `Short Sword (God Mode)(Debug Only)` | 21226 | `Short Sword` | no | `Pickup`, `ImpactTool`, `DurabilityModule` |
| `Short Sword Blade` | 55310 | `Short Sword Blade` |  | `Pickup`, `ImpactDetector`, `CraftingPart`, `PhysicalMaterialPart`, `ForgedPointCollection`, `DurabilityModule` (+1) |
| `Short Sword Blade_MT` | 3376 | `Short Sword Blade` |  | `Pickup`, `ImpactDetector`, `CraftingPart`, `PhysicalMaterialPart`, `ForgedPointCollection`, `DurabilityModule` (+1) |
| `Shotel Blade` | 36438 | `Shotel Blade` |  | `PhysicalMaterialPart`, `Pickup`, `ImpactDetector`, `CraftingPart`, `ForgedPointCollection`, `DurabilityModule` (+1) |
| `Silver Ingot` | 23528 | `Silver Ingot` |  | `Pickup`, `ImpactTool`, `BasicMeltingModel`, `TemperatureToMaterial`, `StackingComponent`, `PhysicalMaterialPart` |
| `Silver Ore` | 9586 | `Silver Ore` |  | `Pickup`, `Impactor`, `ImpactTool`, `SparkImpactDetector`, `StackingComponent` |
| `Skill Orb` | 17270 | `Select Server Orb` |  | `SkillOrb`, `SkillOrbMovement`, `Pickup` |
| `Skill Orb Replacer` | 23526 | `Select Server Orb` |  | `SkillOrbReplacer`, `SkillOrbMovement`, `Pickup` |
| `Slingshot` | 13142 | `Slingshot` |  | `Pickup`, `Bow`, `DurabilityModule`, `PhysicalMaterialPart` |
| `Small Bone Spike` | 61488 | `Bone Spike` |  | `Pickup`, `CraftingPart`, `DurabilityModule` |
| `Small Shield` | 63498 | `Shield Small`, `Shield Small Training` |  | `Pickup`, `CraftingPart`, `DurabilityModule`, `EmbeddableManager` |
| `Small Shield Training` | 21312 | `Shield Small Training` |  | `Pickup`, `ItemLevitator`, `PracticeObjectFader` |
| `Smelter Gem 1` | 34986 | `Smelter Gem 1` |  | `Pickup`, `DisableLightOnDock`, `ItemSmelterRecipeUnlock` |
| `Smelter Gem 2` | 41638 | `Smelter Gem 2` |  | `Pickup`, `DisableLightOnDock`, `ItemSmelterRecipeUnlock` |
| `Smelter Gem 3` | 46508 | `Smelter Gem 3` |  | `Pickup`, `DisableLightOnDock`, `ItemSmelterRecipeUnlock` |
| `Snowball network Prefab` | 52090 | `Snowball` |  | `Pickup`, `ImpactDetector`, `ImpactHitTrigger`, `PickupBreakOnImpact`, `EdibleObject` |
| `Soft Fabric Large Roll` | 23206 | `Soft Fabric Large Roll` |  | `Pickup`, `PhysicalMaterialPart`, `GenericCraftingComponent`, `HealthObject`, `StatManager`, `ImpactDetector` |
| `Soft Fabric Medium Roll` | 47760 | `Soft Fabric Medium Roll` |  | `Pickup`, `PhysicalMaterialPart`, `GenericCraftingComponent`, `HealthObject`, `StatManager`, `ImpactDetector` |
| `Soft Fabric Medium Strips` | 63204 | `Soft Fabric Medium Strips` |  | `Pickup`, `GenericCraftingComponent`, `PhysicalMaterialPart` |
| `Spade Head` | 50548 | `Spade Head` |  | `Pickup`, `DurabilityModule`, `DiggingImpactor`, `CraftingPart`, `ForgedPointCollection`, `HeatPointCollection` (+3) |
| `Spear Head Pyramid` | 13554 | `Spear Head Pyramid` | no | `Pickup`, `ImpactDetector`, `CraftingPart`, `PhysicalMaterialPart`, `ForgedPointCollection`, `MeltingModelPart` |
| `Spear Head Spiky` | 13680 | `Spear Head Spiky` | no | `Pickup`, `ImpactDetector`, `CraftingPart`, `PhysicalMaterialPart`, `ForgedPointCollection`, `MeltingModelPart` |
| `Spear Head Standard` | 13816 | `Spear Head Standard` | no | `Pickup`, `ImpactDetector`, `CraftingPart`, `PhysicalMaterialPart`, `ForgedPointCollection`, `MeltingModelPart` |
| `Spike Fancy` | 12492 | `Spike Fancy` |  | `Pickup`, `CraftingPart`, `PhysicalMaterialPart`, `DurabilityModule`, `MeltingModelPart`, `TemperatureToMaterial` |
| `Spike Short` | 6934 | `Spike Short` |  | `Pickup`, `CraftingPart`, `PhysicalMaterialPart` |
| `Spike Tall` | 3558 | `Spike Tall` |  | `Pickup`, `CraftingPart`, `PhysicalMaterialPart`, `DurabilityModule` |
| `Spriggull Feather Blue` | 7918 | `Spriggull Feather Blue` |  | `Pickup`, `CraftingPart`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner`, `ArrowFlightModifierComponent` |
| `Spriggull Feather Green` | 25446 | `Spriggull Feather Green` |  | `Pickup`, `CraftingPart`, `ArrowFlightModifierComponent` |
| `Spriggull Feather Purple` | 36248 | `Spriggull Feather Purple` |  | `Pickup`, `CraftingPart`, `ArrowFlightModifierComponent` |
| `Spriggull Feather Red` | 18734 | `Spriggull Feather Red` |  | `Pickup`, `CraftingPart`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner`, `ArrowFlightModifierComponent` |
| `Spriggull Fletching Blue` | 50608 | `Spriggull Fletching Blue` |  | `Pickup`, `CraftingPart`, `Feather`, `ArrowFlightModifierComponent` |
| `Spriggull Fletching Red` | 24072 | `Spriggull Fletching Red` |  | `Pickup`, `Feather`, `CraftingPart`, `ArrowFlightModifierComponent` |
| `SpriggullDrumstick Bone` | 24406 | `SpriggullDrumstick Bone` |  | `Pickup`, `EdibleObject`, `ImpactHitTrigger`, `ImpactDetector`, `Spawner` |
| `SpriggullDrumstick Full Burnt` | 20570 | `SpriggullDrumstick Full Burnt` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `SpriggullDrumstick Full Cooked` | 33190 | `SpriggullDrumstick Full Cooked` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner` |
| `SpriggullDrumstick Full Ripe` | 43430 | `SpriggullDrumstick Full Ripe` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner`, `Target` |
| `SpriggullDrumstick Half Burnt` | 10908 | `SpriggullDrumstick Half Burnt` |  | `Pickup`, `EdibleObject` |
| `SpriggullDrumstick Half Cooked` | 8440 | `SpriggullDrumstick Half Cooked` |  | `Pickup`, `EdibleObject` |
| `SpriggullDrumstick Half Ripe` | 5972 | `SpriggullDrumstick Half Ripe` |  | `Pickup`, `EdibleObject` |
| `SpyGlass` | 5170 | `Spyglass` |  | `Pickup`, `GenericCraftingResult` |
| `SpyGlass Long` | 64848 | `Spyglass Long` |  | `Pickup`, `TelescopicPickup` |
| `Standard Crafted Mould` | 38578 | `Mould Standard` |  | `Pickup`, `Mould`, `GenericCraftingResult` |
| `Standard Side Pouch Attachment` | 7852 | `Standard Side Pouch Attachment` |  | `Pickup`, `GenericCraftingResult`, `ConfirmationCraftingPart`, `CraftedDocks`, `HierarchyInteractionFilter` |
| `Standard Side Tool Attachment` | 59468 | `Standard Side Tool Attachment` |  | `Pickup`, `GenericCraftingResult`, `ConfirmationCraftingPart`, `CraftedDocks`, `HierarchyInteractionFilter` |
| `Steel Alloy Ingot` | 22222 | `Steel Ingot` | no | `Pickup`, `ImpactTool`, `StackingComponent` |
| `Stick` | 61674 | `Stick` |  | `Pickup`, `CraftingPart`, `ImpactTool`, `HealthObject`, `MultiSpawner`, `ImpactDetector` (+6) |
| `Stick Charred` | 20564 | `Stick Charred` |  | `Pickup`, `DurabilityModule`, `PhysicalMaterialPart` |
| `Stick Training` | 61414 | `Stick Training` |  | `Pickup`, `PracticeObjectFader` |
| `Stone` | 61670 | `Stone` |  | `Pickup`, `Impactor`, `ImpactTool`, `AddonCraftingPart`, `SparkImpactDetector`, `DurabilityModule` |
| `Stone Training` | 19490 | `Stone Training` |  | `Pickup`, `PracticeObjectFader` |
| `Table Placer` | 25418 | `Table Placer` |  | `Pickup`, `RaycastCrafter` |
| `Thick Great Sword Blade` | 25802 | `Thick Great Sword Blade` |  | `Pickup`, `CraftingPart`, `PhysicalMaterialPart`, `ImpactDetector`, `ForgedPointCollection`, `DurabilityModule` (+1) |
| `Thin Cloth Medium Square` | 34570 | `Thin Cloth Medium Square` |  | `Pickup`, `GenericCraftingComponent`, `PhysicalMaterialPart` |
| `Timber Bag` | 25122 | `Timber Bag` |  | `Pickup`, `StabilizeJointContainer`, `PickupDockingSoundPlayer`, `GenericCraftingResult`, `CraftingPart`, `DockArray` (+2) |
| `Timber Side Pouch Attachment` | 7102 | `Timber Bag Side Pouch Attachment` |  | `Pickup`, `GenericCraftingResult`, `ConfirmationCraftingPart`, `CraftedDocks`, `HierarchyInteractionFilter` |
| `Tomato Full Burnt` | 38742 | `Tomato Full Burnt` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner`, `PickupBreakOnImpact` |
| `Tomato Full Cooked` | 38098 | `Tomato Full Cooked` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner`, `PickupBreakOnImpact` |
| `Tomato Full Ripe` | 37454 | `Tomato Full Ripe` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner`, `PickupBreakOnImpact` |
| `Tomato Full Unripe` | 36810 | `Tomato Full Unripe` |  | `Pickup`, `EdibleObject`, `ImpactDetector`, `ImpactHitTrigger`, `Spawner`, `PickupBreakOnImpact` |
| `Tomato Half Burnt` | 57698 | `Tomato Half Burnt` |  | `Pickup`, `EdibleObject` |
| `Tomato Half Cooked` | 57294 | `Tomato Half Cooked` |  | `Pickup`, `EdibleObject` |
| `Tomato Half Ripe` | 56890 | `Tomato Half Ripe` |  | `Pickup`, `EdibleObject` |
| `Tomato Half Unripe` | 56486 | `Tomato Half Unripe` |  | `Pickup`, `EdibleObject`, `RaycastCrafter` |
| `Torch` | 56698 | `Torch` |  | `Pickup` |
| `Turabada Arm` | 15584 | `Turabada Arm` |  | `CraftingPart`, `DurabilityModule`, `Pickup` |
| `UnplacedMetalWallHook` | 18972 | `Metal Wall Hook` |  | `Pickup`, `RaycastCrafter`, `PhysicalMaterialPart`, `MeltingModelPart`, `TemperatureToMaterial` |
| `Vacuum` | 8586 | `Vacuum` |  | `Pickup` |
| `Wakizashi` | 29856 | `Wakizashi` |  | `Pickup`, `ImpactTool`, `DurabilityModule`, `MultiSpawner`, `Enchantable` |
| `Walnut Tree Seed` | 44172 | `Walnut Tree Seed` |  | `Pickup`, `RaycastCrafter` |
| `WarHammer` | 9630 | `War Hammer Head` |  | `Pickup`, `CraftingPart`, `PhysicalMaterialPart`, `DurabilityModule`, `MeltingModelPart`, `TemperatureToMaterial` |
| `Wedge Training` | 53570 | `Wedge Training` |  | `Pickup`, `PracticeObjectFader` |
| `White Gold Ingot` | 13158 | `White Gold Ingot` |  | `Pickup`, `ImpactTool`, `BasicMeltingModel`, `TemperatureToMaterial`, `StackingComponent`, `PhysicalMaterialPart` |
| `Woodcut Wedge` | 47118 | `Woodcut Wedge` |  | `Pickup`, `DurabilityModule`, `GenericCraftingComponent`, `PhysicalMaterialPart`, `StackingComponent` |
| `Woodcut Wedge Ashen` | 232 | `Woodcut Wedge Ashen` |  | `Pickup`, `DurabilityModule`, `PhysicalMaterialPart` |
| `Woodcut Wedge Burnt` | 290 | `Woodcut Wedge Burnt` |  | `Pickup`, `DurabilityModule`, `PhysicalMaterialPart` |
| `Woodcut Wedge Charred` | 58068 | `Woodcut Wedge Charred` |  | `Pickup`, `DurabilityModule`, `PhysicalMaterialPart` |
| `Wooden Bag` | 30060 | `Wooden Bag` |  | `Pickup`, `StabilizeJointContainer`, `PickupDockingSoundPlayer`, `GenericCraftingResult`, `DockArray`, `HierarchyInteractionFilter` |
| `Wooden Bowl` | 25908 | `Wooden Bowl` |  | `Pickup`, `LiquidContainer`, `PourableContainer`, `PouringStrengthController`, `LiquidStencilShaderController`, `PickupLiquidContainerEnabler` |
| `Wooden Bucket` | 63904 | `Wooden Bucket` |  | `LiquidContainer`, `PourableContainer`, `MultiHandPickup`, `PouringStrengthController`, `LiquidStencilShaderController`, `PickupLiquidContainerEnabler` (+6) |
| `Wooden Dice` | 45608 | `Wooden Dice` |  | `Pickup`, `TossRandom`, `PhysicalMaterialPart` |
| `Wooden Ladle` | 15274 | `Wooden Ladle` |  | `Pickup`, `LiquidContainer`, `PourableContainer`, `PouringStrengthController`, `LiquidStencilShaderController`, `PickupLiquidContainerEnabler` |
| `Wooden Net` | 53540 | `Wooden Net` |  | `Pickup`, `GenericCraftingResult`, `CraftingPart`, `DockArray`, `OnlyAllowDockingWhenEmpty`, `DockedOffset` |
| `Wooden Short Sword` | 16448 | `Wooden Short Sword` |  | `Pickup`, `ImpactTool`, `DurabilityModule`, `PhysicalMaterialPart` |
| `Wooden Stake` | 17262 | `Wooden Stake` |  | `Pickup`, `ImpactTool`, `CraftingPart`, `RaycastCrafter`, `DurabilityModule`, `PhysicalMaterialPart` |
| `Wooden Stirring Spoon` | 23950 | `Wooden Stirring Spoon` |  | `Pickup` |
| `Wyrm Arm` | 46340 | `Wyrm Arm` | no | `DockableJoints` |

## Pickup without an Item asset

| Prefab | Hash | Spawn command | Main scripts |
| --- | --- | --- | --- |
| `Axe Training` | 57010 | no | `Pickup`, `ImpactTool`, `ItemLevitator`, `PracticeObjectFader` |
| `Bow Training` | 42340 |  | `Pickup`, `Bow`, `ItemLevitator`, `PracticeObjectFader`, `PhysicalMaterialPart` |
| `Breakable Box` | 19624 |  | `ImpactDetector`, `HealthObject`, `MultiHandPickup`, `PickupBreakOnImpact`, `StatManager`, `EmbeddableManager` |
| `Breakable Pot` | 60800 |  | `ImpactDetector`, `HealthObject`, `Instantiator`, `EmbeddableManager`, `MultiHandPickup`, `PickupBreakOnImpact` (+1) |
| `Carrot Leaves` | 10440 |  | `Pickup`, `DisposablePickup`, `InteractableEvents` |
| `Chess Black Bishop` | 16998 |  | `Pickup`, `GhostSnapObject` |
| `Chess Black Checker` | 16378 |  | `Pickup`, `GhostSnapObject` |
| `Chess Black King` | 17200 |  | `Pickup`, `GhostSnapObject` |
| `Chess Black Knight` | 17291 |  | `Pickup`, `GhostSnapObject` |
| `Chess Black Pawn` | 17282 |  | `Pickup`, `GhostSnapObject` |
| `Chess Black Queen` | 16204 |  | `Pickup`, `GhostSnapObject` |
| `Chess Black Rook` | 16142 |  | `Pickup`, `GhostSnapObject` |
| `Chess White Bishop` | 17162 |  | `Pickup`, `GhostSnapObject` |
| `Chess White Checker` | 16326 |  | `Pickup`, `GhostSnapObject` |
| `Chess White King` | 16276 |  | `Pickup`, `GhostSnapObject` |
| `Chess White Knight` | 17038 |  | `Pickup`, `GhostSnapObject` |
| `Chess White Pawn` | 17240 |  | `Pickup`, `GhostSnapObject` |
| `Chess White Queen` | 16246 |  | `Pickup`, `GhostSnapObject` |
| `Chess White Rook` | 17084 |  | `Pickup`, `GhostSnapObject` |
| `Christmas Gift Box` | 17920 |  | `ImpactDetector`, `HealthObject`, `MultiHandPickup`, `PickupBreakOnImpact`, `StatManager`, `EmbeddableManager` |
| `Christmas Gift Box Special` | 18144 |  | `ImpactDetector`, `HealthObject`, `MultiHandPickup`, `PickupBreakOnImpact`, `StatManager`, `EmbeddableManager` |
| `Christmas Gift Mail Box 01` | 24764 |  | `ImpactDetector`, `HealthObject`, `MultiHandPickup`, `PickupBreakOnImpact`, `StatManager`, `EmbeddableManager` (+1) |
| `Christmas Gift Mail Box 02` | 16494 |  | `ImpactDetector`, `HealthObject`, `MultiHandPickup`, `PickupBreakOnImpact`, `StatManager`, `EmbeddableManager` (+1) |
| `Christmas Gift Mail Box 03` | 1080 |  | `ImpactDetector`, `HealthObject`, `MultiHandPickup`, `PickupBreakOnImpact`, `StatManager`, `EmbeddableManager` (+1) |
| `Friend Request Token` | 15314 | no | `FriendRequestToken`, `HoverPickup`, `Pickup`, `RendererMaterializer`, `GameObjectLifetimeScope` |
| `Garlic Leaves` | 1266 |  | `Pickup`, `DisposablePickup`, `InteractableEvents` |
| `Garlic Roots` | 57564 |  | `Pickup`, `DisposablePickup`, `InteractableEvents` |
| `Gift Mail Box` | 56348 |  | `ImpactDetector`, `HealthObject`, `MultiHandPickup`, `PickupBreakOnImpact`, `StatManager`, `EmbeddableManager` (+1) |
| `Hammer Training` | 47018 |  | `Pickup`, `ImpactTool`, `ItemLevitator`, `PracticeObjectFader` |
| `Onion Leaves` | 29078 |  | `Pickup`, `DisposablePickup`, `InteractableEvents` |
| `Onion Roots` | 32068 |  | `Pickup`, `DisposablePickup`, `InteractableEvents` |
| `Pickaxe Training` | 29706 | no | `Pickup`, `ImpactTool`, `ItemLevitator`, `PracticeObjectFader` |
| `Short Sword Training` | 1150 |  | `Pickup`, `ImpactTool`, `ItemLevitator`, `PracticeObjectFader` |
| `Social Tablet` | 51668 | no | `RendererMaterializer`, `Window`, `SocialTablet`, `HoverPickup`, `Pickup`, `GameObjectLifetimeScope` |
| `Spriggull Egg` | 7014 |  | `Pickup`, `PickupBreakOnImpact`, `HealthObject`, `StatManager`, `ImpactDetector` |
| `Training Short Sword Blade COLD` | 1850 |  | `Pickup`, `PhysicalMaterialPart`, `ForgedPointCollection`, `DurabilityModule`, `ImpactDetector`, `PracticeObjectFader` (+2) |
| `Training Short Sword Blade HOT` | 13220 |  | `Pickup`, `PhysicalMaterialPart`, `ForgedPointCollection`, `DurabilityModule`, `ImpactDetector`, `PracticeObjectFader` (+1) |
| `UnplacedSurfaceDockTemplate` | 32712 | no | `Pickup`, `RaycastCrafter`, `PhysicalMaterialPart` |

## Creature

| Prefab | Hash | Spawn command | Main scripts |
| --- | --- | --- | --- |
| `Babu` | 9140 |  | `HealthObject`, `StatManager`, `ImpactDetector`, `ColliderGroup`, `EffectHandler`, `InteractionCollisionController` (+2) |
| `Crystal Wyrm` | 37392 |  | `HealthObject`, `EffectHandler`, `StatManager`, `PhysicalMaterialPart`, `TargetPointer` |
| `Crystal Wyrm (Trial)` | 48128 |  | `HealthObject`, `EffectHandler`, `StatManager`, `PhysicalMaterialPart`, `TargetPointer` |
| `Dais Antler Red Variant` | 18358 |  | `HealthObject`, `StatManager`, `ImpactDetector`, `NetworkColliderGroup`, `MultiSpawner`, `PhysicalMaterialPart` (+3) |
| `Dais Antler Variant` | 30180 |  | `HealthObject`, `StatManager`, `ImpactDetector`, `NetworkColliderGroup`, `MultiSpawner`, `PhysicalMaterialPart` (+3) |
| `Dais Base` | 27576 | no | `HealthObject`, `StatManager`, `ImpactDetector`, `NetworkColliderGroup`, `MultiSpawner`, `PhysicalMaterialPart` (+2) |
| `Dais Child Red Variant` | 13444 |  | `HealthObject`, `StatManager`, `ImpactDetector`, `NetworkColliderGroup`, `MultiSpawner`, `PhysicalMaterialPart` (+2) |
| `Dais Child Variant` | 31838 |  | `HealthObject`, `StatManager`, `ImpactDetector`, `NetworkColliderGroup`, `MultiSpawner`, `PhysicalMaterialPart` (+2) |
| `Dais Red Variant` | 8530 |  | `HealthObject`, `StatManager`, `ImpactDetector`, `NetworkColliderGroup`, `MultiSpawner`, `PhysicalMaterialPart` (+2) |
| `Dais Variant` | 42430 |  | `HealthObject`, `StatManager`, `ImpactDetector`, `NetworkColliderGroup`, `MultiSpawner`, `PhysicalMaterialPart` (+2) |
| `Death Fern` | 37642 |  | `HealthObject`, `StatManager`, `ColliderGroup`, `ImpactDetector`, `EmbeddableManager`, `DestroyIfInIncorrectChunk` |
| `Dragonfly` | 54404 |  | `Spawner`, `Pickup`, `ImpactDetector`, `StatManager`, `HealthObject`, `NetworkColliderGroup` (+2) |
| `Firebug` | 40478 |  | `Pickup`, `HealthObject`, `StatManager`, `ImpactDetector`, `CollisionImpulseReader`, `NetworkColliderGroup` |
| `Gotera` | 9466 |  | `EffectHandler`, `HealthObject`, `StatManager`, `Spawner`, `TargetPointer`, `EmbeddableManager` (+1) |
| `Gotera Ash Bomb` | 56764 |  | `HealthObject`, `StatManager`, `ImpactDetector`, `ColliderGroup`, `DelayedEvent` |
| `Gotera Ash Variant` | 61448 |  | `EffectHandler`, `HealthObject`, `StatManager`, `Spawner`, `StatTrigger`, `TargetPointer` (+2) |
| `Gotera Birch Variant` | 2370 |  | `EffectHandler`, `HealthObject`, `StatManager`, `Spawner`, `StatTrigger`, `TargetPointer` (+2) |
| `Gotera Redwood Variant` | 27128 |  | `EffectHandler`, `HealthObject`, `StatManager`, `Spawner`, `StatTrigger`, `TargetPointer` (+3) |
| `Gotera Walnut Variant` | 38096 |  | `EffectHandler`, `HealthObject`, `StatManager`, `Spawner`, `StatTrigger`, `TargetPointer` (+2) |
| `Greater Gotera` | 19034 | no | `HealthObject`, `StatManager`, `ColliderGroup`, `StatTrigger` |
| `Mother Fern` | 65004 |  | `HealthObject`, `StatManager`, `ColliderGroup`, `ImpactDetector`, `TargetPointer`, `EmbeddableManager` (+1) |
| `Phantom` | 17772 |  | `HealthObject`, `StatManager`, `EffectHandler`, `FullEmptyStatTrigger`, `ColliderGroup`, `DelayedEvent` (+2) |
| `Phantom Head` | 43960 |  | `HealthObject`, `StatManager`, `EffectHandler`, `FullEmptyStatTrigger`, `ColliderGroup`, `DelayedEvent` (+3) |
| `Schmeechee Glowing` | 53576 |  | `Pickup`, `MushroomCritter`, `EdibleObject`, `HealthObject`, `ImpactDetector`, `DeathEffect` (+2) |
| `Schmeechee Orange` | 63728 |  | `Pickup`, `MushroomCritter`, `EdibleObject`, `HealthObject`, `ImpactDetector`, `DeathEffect` (+2) |
| `Schmeechee Poisonous` | 31646 |  | `Pickup`, `MushroomCritter`, `EdibleObject`, `DeathEffect`, `HealthObject`, `ImpactDetector` (+2) |
| `Schmeechee Red` | 3532 |  | `Pickup`, `MushroomCritter`, `EdibleObject`, `HealthObject`, `ImpactDetector`, `DeathEffect` (+2) |
| `Spriggull` | 62050 |  | `HealthObject`, `EffectHandler`, `StatManager`, `ImpactTool`, `ImpactDetector`, `SpriggullFlail` (+4) |
| `Targeted Geyser` | 60812 |  | `HealthObject`, `StatManager`, `ImpactDetector` |
| `Turabada` | 13804 |  | `EffectHandler`, `HealthObject`, `StatManager`, `ImpactDetector`, `Spawner`, `MultiSpawner` (+2) |
| `Turabada Copper Trial Variant` | 14248 |  | `EffectHandler`, `HealthObject`, `StatManager`, `ImpactDetector`, `Spawner`, `MultiSpawner` (+2) |
| `Turabada Copper Variant` | 39056 |  | `EffectHandler`, `HealthObject`, `StatManager`, `ImpactDetector`, `Spawner`, `MultiSpawner` (+2) |
| `Turabada Gold Trial Variant` | 15506 |  | `EffectHandler`, `HealthObject`, `StatManager`, `ImpactDetector`, `Spawner`, `MultiSpawner` (+2) |
| `Turabada Gold Variant` | 37176 |  | `EffectHandler`, `HealthObject`, `StatManager`, `ImpactDetector`, `Spawner`, `MultiSpawner` (+2) |
| `Turabada Iron Trial Variant` | 16684 |  | `EffectHandler`, `HealthObject`, `StatManager`, `ImpactDetector`, `Spawner`, `MultiSpawner` (+2) |
| `Turabada Iron Variant` | 8298 |  | `EffectHandler`, `HealthObject`, `StatManager`, `ImpactDetector`, `Spawner`, `MultiSpawner` (+2) |
| `Turabada Large Trial Variant` | 17814 |  | `EffectHandler`, `HealthObject`, `StatManager`, `ImpactDetector`, `Spawner`, `MultiSpawner` (+2) |
| `Turabada Large Variant` | 41172 |  | `EffectHandler`, `HealthObject`, `StatManager`, `ImpactDetector`, `Spawner`, `MultiSpawner` (+2) |
| `Turabada Mythril Trial Variant` | 18722 |  | `EffectHandler`, `HealthObject`, `StatManager`, `ImpactDetector`, `Spawner`, `MultiSpawner` (+2) |
| `Turabada Mythril Variant` | 62968 |  | `EffectHandler`, `HealthObject`, `StatManager`, `ImpactDetector`, `Spawner`, `MultiSpawner` (+2) |
| `Turabada Short Trial Variant` | 19936 |  | `EffectHandler`, `HealthObject`, `StatManager`, `ImpactDetector`, `Spawner`, `MultiSpawner` (+2) |
| `Turabada Short Variant` | 63878 |  | `EffectHandler`, `HealthObject`, `StatManager`, `ImpactDetector`, `Spawner`, `MultiSpawner` (+2) |
| `Turabada Silver Trial Variant` | 20844 |  | `EffectHandler`, `HealthObject`, `StatManager`, `ImpactDetector`, `Spawner`, `MultiSpawner` (+2) |
| `Turabada Silver Variant` | 45716 |  | `EffectHandler`, `HealthObject`, `StatManager`, `ImpactDetector`, `Spawner`, `MultiSpawner` (+2) |
| `Turabada Trial Variant` | 21882 |  | `EffectHandler`, `HealthObject`, `StatManager`, `ImpactDetector`, `Spawner`, `MultiSpawner` (+2) |
| `Vine Attack Fern` | 24402 |  | `HealthObject`, `StatManager`, `ColliderGroup`, `ImpactDetector`, `EmbeddableManager`, `DestroyIfInIncorrectChunk` |
| `Wyrm` | 21642 |  | `HealthObject`, `EffectHandler`, `StatManager`, `TargetPointer`, `PhysicalMaterialPart` |
| `Wyrm (Trial)` | 6004 |  | `HealthObject`, `EffectHandler`, `StatManager`, `TargetPointer`, `PhysicalMaterialPart` |

## AI-driven object

| Prefab | Hash | Spawn command | Main scripts |
| --- | --- | --- | --- |
| `Chute Gcore Dynamic` | 60246 |  |  |
| `Turabada Spawner Reactive` | 27188 |  |  |

## Projectile

| Prefab | Hash | Spawn command | Main scripts |
| --- | --- | --- | --- |
| `Arrow Light Beam Effect` | 1798 |  | `Projectile`, `ImpactTool`, `ColliderGroup`, `ProjectileEffect` |
| `Ash Gotera Seed Spray` | 61862 |  | `SeedSpray`, `Spawner` |
| `Cross Slash` | 38008 |  | `Projectile`, `TriggerImpactTool` |
| `Etheral Arrow` | 52366 |  | `ImpactTool`, `Arrow`, `ColliderGroup`, `DelayedEvent`, `OneTimeUnityEvent`, `NetworkedEvent` |
| `Gotera Big Dart` | 26780 |  | `TriggerImpactTool`, `Projectile`, `ProjectileEffect`, `ColliderGroup`, `SmallProjectile` |
| `Gotera Big Seed Spray` | 18468 |  | `SeedSpray` |
| `Gotera Dart` | 3088 |  | `TriggerImpactTool`, `Projectile`, `ProjectileEffect`, `ColliderGroup`, `SmallProjectile` |
| `Gotera Seed Spray` | 31540 |  | `SeedSpray` |
| `Greater Gotera Big Dart` | 18100 | no | `TriggerImpactTool`, `Projectile`, `ProjectileEffect`, `ColliderGroup`, `SmallProjectile` |
| `Greater Gotera Seed Spray` | 13476 |  | `SeedSpray` |
| `Mother Fern Seed Spray` | 26710 |  | `SeedSpray`, `Spawner` |
| `Walnut Gotera Bomb Dart` | 39716 |  | `TriggerImpactTool`, `Projectile`, `ProjectileEffect`, `ColliderGroup`, `SmallProjectile`, `Spawner` |
| `Wyrm Crystal Spit` | 37926 |  | `TriggerImpactTool`, `Projectile`, `ProjectileEffect`, `ColliderGroup` |
| `Wyrm Spit` | 61454 |  | `TriggerImpactTool`, `Projectile`, `ProjectileEffect`, `ColliderGroup`, `SmallProjectile` |

## Stew

| Prefab | Hash | Spawn command | Main scripts |
| --- | --- | --- | --- |
| `Blue Mix Recipe Burnt Stew` | 57666 | no | `StewComponent` |
| `Blue Mix Recipe Cooked Stew` | 57642 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Blue Mix Recipe Raw Stew` | 57614 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Blueberry Recipe Burnt Stew` | 36830 | no | `StewComponent` |
| `Blueberry Recipe Cooked Stew` | 36086 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Blueberry Recipe Raw Stew` | 35338 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Default Burnt Stew` | 20108 | no | `StewComponent` |
| `Default Cooked Stew` | 19398 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Default Raw Stew` | 43078 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Eggplant Potato Recipe Burnt Stew` | 57688 | no | `StewComponent` |
| `Eggplant Potato Recipe Cooked Stew` | 57712 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Eggplant Potato Recipe Raw Stew` | 57736 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Glowing Mushroom Recipe Burnt Stew` | 47384 | no | `StewComponent` |
| `Glowing Mushroom Recipe Cooked Stew` | 47362 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Glowing Mushroom Recipe Raw Stew` | 44774 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Mushroom Mix Recipe Burnt Stew` | 27398 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Mushroom Mix Recipe Cooked Stew` | 27376 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Mushroom Mix Recipe Raw Stew` | 14914 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Mushroom Recipe Burnt Stew` | 30560 | no | `StewComponent` |
| `Mushroom Recipe Cooked Stew` | 31606 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Mushroom Recipe Raw Stew` | 32650 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Mushroom-Poultry Recipe Burnt Stew` | 54614 | no | `StewComponent` |
| `Mushroom-Poultry Recipe Cooked Stew` | 55358 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Mushroom-Poultry Recipe Raw Stew` | 55978 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Non Recipe Burnt Stew` | 48634 | no | `StewComponent` |
| `Non Recipe Cooked Stew` | 49314 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Non Recipe Raw Stew` | 49962 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Potato Puree Recipe Burnt Stew` | 57936 | no | `StewComponent` |
| `Potato Puree Recipe Cooked Stew` | 57960 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Potato Puree Recipe Raw Stew` | 57918 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Poultry Onion Mushroom Recipe Burnt Stew` | 57780 | no | `StewComponent` |
| `Poultry Onion Mushroom Recipe Cooked Stew` | 57762 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Poultry Onion Mushroom Recipe Raw Stew` | 57804 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Poultry Potato Recipe Burnt Stew` | 57894 | no | `StewComponent` |
| `Poultry Potato Recipe Cooked Stew` | 57852 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Poultry Potato Recipe Raw Stew` | 57876 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Poultry Recipe Burnt Stew` | 10830 | no | `StewComponent` |
| `Poultry Recipe Cooked Stew` | 11448 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Poultry Recipe Raw Stew` | 12132 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Pumpkin Recipe Burnt Stew` | 62678 | no | `StewComponent` |
| `Pumpkin Recipe Cooked Stew` | 62694 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Pumpkin Recipe Raw Stew` | 62724 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Red Mushroom Recipe Burnt Stew` | 63290 | no | `StewComponent` |
| `Red Mushroom Recipe Cooked Stew` | 62660 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Red Mushroom Recipe Raw Stew` | 62024 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Red Sauce Recipe Burnt Stew` | 57978 | no | `StewComponent` |
| `Red Sauce Recipe Cooked Stew` | 58026 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Red Sauce Recipe Raw Stew` | 58002 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Vegetable Ragu Recipe Burnt Stew` | 58092 | no | `StewComponent` |
| `Vegetable Ragu Recipe Cooked Stew` | 58074 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Vegetable Ragu Recipe Raw Stew` | 58050 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Vision Recipe Burnt Stew` | 58138 | no | `StewComponent` |
| `Vision Recipe Cooked Stew` | 58120 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |
| `Vision Recipe Raw Stew` | 58162 | no | `Cookable`, `CookingPoint`, `HeatPointCollection`, `StewComponent` |

## Plant or tree

| Prefab | Hash | Spawn command | Main scripts |
| --- | --- | --- | --- |
| `Absolute Apple Tree Variant` | 15898 |  | `PopulationSpawnArea`, `SpawnPositions`, `HealthObject`, `StatManager`, `ImpactDetector` |
| `Absolute Blueberry Tree Variant` | 16322 |  | `PopulationSpawnArea`, `SpawnPositions`, `HealthObject`, `StatManager`, `ImpactDetector` |
| `Apple Flower Bloom` | 12580 |  |  |
| `Apple Flower Bud` | 12578 |  |  |
| `Apple Growth` | 19192 |  | `GrowerComponent` |
| `Apple Tree` | 61222 |  | `PopulationSpawnArea`, `SpawnPositions`, `HealthObject`, `StatManager`, `ImpactDetector` |
| `Apple Tree Growth` | 14226 |  | `GrowerComponent` |
| `Apple Tree Stage 1` | 50926 |  | `BasicDigable`, `Spawner`, `Interactable`, `InteractableEvents` |
| `Apple Tree Stage 2` | 57538 |  | `HealthObject`, `StatManager`, `ImpactDetector` |
| `Apple Tree Stage 3` | 62702 |  | `HealthObject`, `ImpactDetector`, `StatManager` |
| `Ash Tree Growth` | 48208 |  | `GrowerComponent` |
| `Ash Tree Stage 1` | 17892 |  | `BasicDigable`, `Spawner`, `Interactable`, `InteractableEvents` |
| `Birch Tree Growth` | 48218 |  | `GrowerComponent` |
| `Birch Tree Stage 1` | 17704 |  | `BasicDigable`, `Spawner`, `Interactable`, `InteractableEvents` |
| `Blueberry Flower Bloom` | 40922 |  |  |
| `Blueberry Flower Bud` | 40920 |  |  |
| `Blueberry Growth` | 19292 |  | `GrowerComponent` |
| `Blueberry Tree` | 878 |  | `PopulationSpawnArea`, `SpawnPositions`, `HealthObject`, `StatManager`, `ImpactDetector` |
| `Blueberry Tree Growth` | 14700 |  | `GrowerComponent` |
| `Blueberry Tree Stage 1` | 26588 |  | `BasicDigable`, `Spawner`, `Interactable`, `InteractableEvents` |
| `Blueberry Tree Stage 2` | 1038 |  |  |
| `Blueberry Tree Stage 3` | 1040 |  |  |
| `Bramble Obstacle No Bush` | 24434 |  |  |
| `Buried Pullup Potato Sapling` | 10960 |  | `SpawnBuried` |
| `Cave Grass` | 63846 |  | `CutableObject`, `AssistGrabInteractable`, `Spawner`, `InteractableEvents` |
| `Christmas Tree` | 56318 |  | `FestiveFeature` |
| `Dried Grass Bush` | 24480 |  |  |
| `Eggplant Flower Bloom` | 27848 |  |  |
| `Eggplant Flower Bud` | 27850 |  |  |
| `Eggplant Growth` | 19304 |  | `GrowerComponent` |
| `Eggplant Tree` | 27004 |  | `PopulationSpawnArea`, `SpawnPositions`, `HealthObject`, `StatManager`, `ImpactDetector` |
| `Eggplant Tree Growth` | 15090 |  | `GrowerComponent` |
| `Eggplant Tree Stage 1` | 14282 |  | `BasicDigable`, `Spawner`, `Interactable`, `InteractableEvents` |
| `Eggplant Tree Stage 2` | 14440 |  | `HealthObject`, `StatManager`, `ImpactDetector` |
| `Eggplant Tree Stage 3` | 16154 |  | `HealthObject`, `StatManager`, `ImpactDetector` |
| `Fruit Tree Path` | 40982 |  | `PopulationPath` |
| `New Tree Grower` | 62444 |  | `GrowerComponent` |
| `Oak Tree Growth` | 48238 |  | `GrowerComponent` |
| `Oak Tree Stage 1` | 17412 |  | `BasicDigable`, `Spawner`, `Interactable`, `InteractableEvents` |
| `Potato Growth` | 49408 |  | `GrowerComponent` |
| `Potato Plant Growth` | 15786 |  | `GrowerComponent` |
| `Potato Plant Stage 1` | 62602 |  | `BasicDigable`, `Spawner`, `Interactable`, `InteractableEvents` |
| `Pumpkin Growth` | 59922 |  | `GrowerComponent` |
| `Pumpkin Tree` | 49086 |  | `PopulationSpawnArea`, `SpawnPositions`, `ImpactDetector`, `StatManager`, `HealthObject` |
| `Pumpkin Tree Growth` | 41658 |  | `GrowerComponent` |
| `Pumpkin Tree Stage 1` | 38672 |  | `BasicDigable`, `Spawner`, `Interactable`, `InteractableEvents` |
| `Pumpkin Tree Stage 2` | 42508 |  | `ImpactDetector`, `StatManager`, `HealthObject` |
| `Pumpkin Tree Stage 3` | 63038 |  | `ImpactDetector`, `StatManager`, `HealthObject` |
| `Redwood Tree Growth` | 48248 |  | `GrowerComponent` |
| `Redwood Tree Stage 1` | 17526 |  | `BasicDigable`, `Spawner`, `Interactable`, `InteractableEvents` |
| `Sapling` | 25994 |  |  |
| `Sapling Freshly Planted` | 25992 |  |  |
| `Tomato Flower Bloom` | 13022 |  |  |
| `Tomato Flower Bud` | 13024 |  |  |
| `Tomato Growth` | 19280 |  | `GrowerComponent` |
| `Tomato Tree` | 56492 |  | `PopulationSpawnArea`, `SpawnPositions`, `HealthObject`, `StatManager`, `ImpactDetector` |
| `Tomato Tree Growth` | 16358 |  | `GrowerComponent` |
| `Tomato Tree Stage 1` | 2384 |  | `BasicDigable`, `Spawner`, `Interactable`, `InteractableEvents` |
| `Tomato Tree Stage 2` | 2542 |  | `HealthObject`, `StatManager`, `ImpactDetector` |
| `Tomato Tree Stage 3` | 2892 |  | `HealthObject`, `StatManager`, `ImpactDetector` |
| `Tree` | 8860 |  | `ImpactDetector`, `WoodcutTree`, `HealthObject`, `StatManager`, `TreeDecay`, `WoodcutTreeBaker` (+3) |
| `Tree Grower` | 25934 |  | `TimeBasedStagedPrefab` |
| `Tree Grown` | 30572 |  |  |
| `Tree Spawner - Any Ash` | 50794 |  | `TreeSpawner`, `NavmeshCut` |
| `Tree Spawner - Any Birch` | 570 |  | `TreeSpawner`, `NavmeshCut` |
| `Tree Spawner - Any Oak` | 48358 |  | `TreeSpawner`, `NavmeshCut` |
| `Tree Spawner - Any Redwood` | 546 |  | `TreeSpawner`, `NavmeshCut` |
| `Tree Spawner - Any Standard` | 15738 |  | `TreeSpawner`, `NavmeshCut` |
| `Tree Spawner - Any Walnut` | 34710 |  | `TreeSpawner`, `NavmeshCut` |
| `Tree Spawner - Small Standard` | 57286 |  | `TreeSpawner`, `NavmeshCut` |
| `Tree Young` | 30570 |  |  |
| `Walnut Tree Growth` | 48268 |  | `GrowerComponent` |
| `Walnut Tree Stage 1` | 26568 |  | `BasicDigable`, `Spawner`, `Interactable`, `InteractableEvents` |
| `Woodcut Ash LeafClump Base` | 28312 |  | `TreeAttachment` |
| `Woodcut Ash LeafClump C1 E` | 47458 |  | `TreeAttachment` |
| `Woodcut Ash LeafClump C1 E 1` | 14074 |  | `TreeAttachment` |
| `Woodcut Ash LeafClump C1 E 2` | 40722 |  | `TreeAttachment` |
| `Woodcut Ash LeafClump C1C1` | 44892 |  | `TreeAttachment` |
| `Woodcut Ash LeafClump C1C2` | 34638 |  | `TreeAttachment` |
| `Woodcut Ash LeafClump C1C2 E` | 47502 |  | `TreeAttachment` |
| `Woodcut Ash LeafClump C2 E` | 29976 |  | `TreeAttachment` |
| `Woodcut Ash LeafClump C2 E 1` | 24422 |  | `TreeAttachment` |
| `Woodcut Ash LeafClump C2C2` | 44908 |  | `TreeAttachment` |
| `Woodcut Ash LeafClump C2C3` | 9426 |  | `TreeAttachment` |
| `Woodcut Ash LeafClump C2C3 E` | 57802 |  | `TreeAttachment` |
| `Woodcut Ash LeafClump C3 E` | 57250 |  | `TreeAttachment` |
| `Woodcut Ash LeafClump C3C3` | 10682 |  | `TreeAttachment` |
| `Woodcut Ash Seed Spawner Attachment` | 16054 |  | `TreeAttachment`, `Spawner` |
| `Woodcut B0 B0` | 11470 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut B0 B0 S-30` | 19224 |  | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut B0 B0 S15` | 35014 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut B0 B0 S30` | 36844 |  | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut B0 B0 S30 S30` | 6224 |  | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut B0 B15 B30` | 35020 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut B0 B30 S30` | 51486 |  | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut B0 E` | 29444 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut B0 S0 S30` | 35028 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut B0 S0 S60` | 8102 |  | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut B0 S30 S30` | 54764 |  | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut B15 B15` | 38016 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut B30 B30` | 62548 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut B5 B5` | 1780 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut Birch LeafClump Base` | 37794 |  | `TreeAttachment` |
| `Woodcut Birch LeafClump C1 E` | 55364 |  | `TreeAttachment` |
| `Woodcut Birch LeafClump C1C1 1` | 1178 |  | `TreeAttachment` |
| `Woodcut Birch LeafClump C1C1 1 E` | 7260 |  | `TreeAttachment` |
| `Woodcut Birch LeafClump C1C1 2` | 42598 |  | `TreeAttachment` |
| `Woodcut Birch LeafClump C1C1 2 E` | 10700 |  | `TreeAttachment` |
| `Woodcut Birch LeafClump C1C2 1` | 54804 |  | `TreeAttachment` |
| `Woodcut Birch LeafClump C1C2 1 E` | 2760 |  | `TreeAttachment` |
| `Woodcut Birch LeafClump C1C2 2` | 12688 |  | `TreeAttachment` |
| `Woodcut Birch LeafClump C1C2 2 E` | 54174 |  | `TreeAttachment` |
| `Woodcut Birch LeafClump C2 E` | 12672 |  | `TreeAttachment` |
| `Woodcut Birch LeafClump C2C3 1` | 54092 |  | `TreeAttachment` |
| `Woodcut Birch LeafClump C2C3 1 E` | 2568 |  | `TreeAttachment` |
| `Woodcut Birch LeafClump C2C3 2` | 54852 |  | `TreeAttachment` |
| `Woodcut Birch LeafClump C2C3 2 E` | 54108 |  | `TreeAttachment` |
| `Woodcut Birch LeafClump C3 E` | 54820 |  | `TreeAttachment` |
| `Woodcut Birch LeafClump C3C4 1` | 7276 |  | `TreeAttachment` |
| `Woodcut Birch LeafClump C3C4 1 E` | 34602 |  | `TreeAttachment` |
| `Woodcut Birch LeafClump C3C4 2` | 12182 |  | `TreeAttachment` |
| `Woodcut Birch LeafClump C3C4 2 E` | 11234 |  | `TreeAttachment` |
| `Woodcut Birch LeafClump C4 E` | 44404 |  | `TreeAttachment` |
| `Woodcut Birch Seed Spawner Attachment` | 16026 |  | `TreeAttachment`, `Spawner` |
| `Woodcut BranchRoot V1 B0` | 8158 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut BranchRoot V1 B15 S30` | 22660 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut BranchRoot V2 B0` | 50658 |  | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut Leaves V1 L F` | 42932 | no | `TreeAttachment`, `AmplifyImpostor` |
| `Woodcut Leaves V1 L S` | 42928 | no | `TreeAttachment` |
| `Woodcut Leaves V1 S F` | 42934 | no | `TreeAttachment`, `AmplifyImpostor` |
| `Woodcut Leaves V1 S S` | 42930 | no | `TreeAttachment` |
| `Woodcut Leaves V2 D` | 63786 | no | `TreeAttachment` |
| `Woodcut Leaves V2 L` | 63466 | no | `TreeAttachment` |
| `Woodcut Leaves V2 Topper` | 26276 | no | `TreeAttachment` |
| `Woodcut Oak LeafClump Base` | 60158 |  | `TreeAttachment` |
| `Woodcut Oak LeafClump C1 E` | 38382 |  | `TreeAttachment` |
| `Woodcut Oak LeafClump C1C1 1` | 38364 |  | `TreeAttachment` |
| `Woodcut Oak LeafClump C1C1 2` | 38344 |  | `TreeAttachment` |
| `Woodcut Oak LeafClump C1C2 1` | 38324 |  | `TreeAttachment` |
| `Woodcut Oak LeafClump C1C2 2` | 38304 |  | `TreeAttachment` |
| `Woodcut Oak LeafClump C1C2 E` | 38284 |  | `TreeAttachment` |
| `Woodcut Oak LeafClump C2 E` | 38264 |  | `TreeAttachment` |
| `Woodcut Oak LeafClump C2C2 1` | 38242 |  | `TreeAttachment` |
| `Woodcut Oak LeafClump C2C2 2` | 38224 |  | `TreeAttachment` |
| `Woodcut Oak LeafClump C2C3 1` | 38204 |  | `TreeAttachment` |
| `Woodcut Oak LeafClump C2C3 2` | 38184 |  | `TreeAttachment` |
| `Woodcut Oak LeafClump C2C3 E` | 38162 |  | `TreeAttachment` |
| `Woodcut Oak LeafClump C3 E` | 38144 |  | `TreeAttachment` |
| `Woodcut Oak LeafClump C3C3 1` | 38122 |  | `TreeAttachment` |
| `Woodcut Oak LeafClump C3C3 2` | 38102 |  | `TreeAttachment` |
| `Woodcut Oak Seed Spawner Attachment` | 49710 |  | `TreeAttachment`, `Spawner` |
| `Woodcut Redwood LeafClump Base` | 55152 |  | `TreeAttachment` |
| `Woodcut Redwood LeafClump T1 D30 C1C2` | 21374 |  | `TreeAttachment` |
| `Woodcut Redwood LeafClump T1 D30 C3C4` | 49074 |  | `TreeAttachment` |
| `Woodcut Redwood LeafClump T1 D30 C5C6` | 55378 |  | `TreeAttachment` |
| `Woodcut Redwood LeafClump T1 D30 C7C8` | 47486 |  | `TreeAttachment` |
| `Woodcut Redwood LeafClump T2 D30 C1C2` | 55954 |  | `TreeAttachment` |
| `Woodcut Redwood LeafClump T2 D30 C3C4` | 57266 |  | `TreeAttachment` |
| `Woodcut Redwood LeafClump T2 D30 C5C6` | 1528 |  | `TreeAttachment` |
| `Woodcut Redwood LeafClump T2 D30 C7C8` | 9410 |  | `TreeAttachment` |
| `Woodcut Redwood LeafClump T3 D30 C1C2` | 10666 |  | `TreeAttachment` |
| `Woodcut Redwood LeafClump T3 D30 C3C4` | 6716 |  | `TreeAttachment` |
| `Woodcut Redwood LeafClump T3 D30 C5C6` | 55520 |  | `TreeAttachment` |
| `Woodcut Redwood LeafClump T3 D30 C7C8` | 6732 |  | `TreeAttachment` |
| `Woodcut Redwood LeafClump T4 D30 C1` | 42552 |  | `TreeAttachment` |
| `Woodcut Redwood LeafClump T4 D30 C2` | 46726 |  | `TreeAttachment` |
| `Woodcut Redwood LeafClump T4 D30 C3` | 1774 |  | `TreeAttachment` |
| `Woodcut Redwood LeafClump T4 D30 C4` | 1512 |  | `TreeAttachment` |
| `Woodcut Redwood LeafClump T4 D30 C5` | 54122 |  | `TreeAttachment` |
| `Woodcut Redwood LeafClump T4 D30 C6` | 7242 |  | `TreeAttachment` |
| `Woodcut Redwood LeafClump T4 D30 C7` | 44386 |  | `TreeAttachment` |
| `Woodcut Redwood LeafClump T4 D30 C8` | 10754 |  | `TreeAttachment` |
| `Woodcut Redwood LeafTopper` | 34724 |  | `TreeAttachment` |
| `Woodcut Redwood Seed Spawner Attachment` | 16012 |  | `TreeAttachment`, `Spawner` |
| `Woodcut Root V1 T0` | 31522 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut Root V1 T0 B15` | 34660 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut Root V1 T0 S30` | 34546 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut Root V1 T30` | 47612 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut S-15 S-15` | 39282 |  | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut S0 E` | 25704 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut S0 S0` | 44986 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut S0 S0 S-30` | 25116 |  | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut S0 S0 S30` | 190 |  | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut S0 S15 S15` | 62106 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut S0 S30 S30` | 9058 |  | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut S15 S15` | 19364 |  | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut SL15 SL15` | 7464 |  | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut SR15 SR15` | 53266 |  | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut T0 B0 B30` | 35026 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut T0 B15 B30` | 21794 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut T0 B30 B30` | 26492 |  | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut T0 B45 B45 B60` | 62378 |  | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut T0 E` | 49440 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut T0 T0` | 6554 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut T0 T0 B30` | 35016 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut T0 T0 B45` | 52242 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut T0 T0 B45 B45 B60` | 34502 |  | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut T0 T0 B60` | 29162 |  | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut T0 T0 S30` | 35022 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut T0 T0 S30 S30 S30` | 33712 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut T0 T30 B30` | 2712 |  | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut T15 T15` | 40700 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut T30 T30` | 30226 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut T5 T5` | 18498 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut Twigs V1 -30` | 49360 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut Twigs V1 0` | 64824 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut Twigs V1 30` | 19674 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut Twigs V2 -30` | 63554 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut Twigs V2 0` | 1846 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut Twigs V2 30` | 1452 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut Twigs V3 -30` | 49972 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut Twigs V3 0` | 63168 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut Twigs V3 30` | 15084 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut Twigs V4 0` | 52628 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut Twigs V4 30` | 31554 | no | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut Twigs V5 -15` | 16424 |  | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut Twigs V5 15` | 32642 |  | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut Twigs V5 L15` | 40208 |  | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut Twigs V5 R15` | 25388 |  | `WoodcutPointCollection`, `WoodcutTreeModel` |
| `Woodcut Walnut LeafClump Base` | 47632 |  | `TreeAttachment` |
| `Woodcut Walnut LeafClump C1C1` | 29962 |  | `TreeAttachment` |
| `Woodcut Walnut LeafClump C1C1 E` | 2796 |  | `TreeAttachment` |
| `Woodcut Walnut LeafClump C1C2` | 8570 |  | `TreeAttachment` |
| `Woodcut Walnut LeafClump C1C2 E` | 54836 |  | `TreeAttachment` |
| `Woodcut Walnut LeafClump C2C2` | 8932 |  | `TreeAttachment` |
| `Woodcut Walnut LeafClump C2C2 E` | 1792 |  | `TreeAttachment` |
| `Woodcut Walnut LeafClump C2C3` | 47520 |  | `TreeAttachment` |
| `Woodcut Walnut LeafClump C2C3 E` | 46292 |  | `TreeAttachment` |
| `Woodcut Walnut LeafClump C3C3` | 54190 |  | `TreeAttachment` |
| `Woodcut Walnut LeafClump C3C3 E` | 8292 |  | `TreeAttachment` |
| `Woodcut Walnut LeafClump C3C4` | 57820 |  | `TreeAttachment` |
| `Woodcut Walnut LeafClump C3C4 E` | 1546 |  | `TreeAttachment` |
| `Woodcut Walnut LeafClump C4C4 E` | 44372 |  | `TreeAttachment` |
| `Woodcut Walnut LeafClump C4C5 E` | 6218 |  | `TreeAttachment` |
| `Woodcut Walnut LeafClump C5C5 E` | 9940 |  | `TreeAttachment` |
| `Woodcut Walnut Seed Spawner Attachment` | 16040 |  | `TreeAttachment`, `Spawner` |
| `Woodcutting Vines V1 Large` | 24682 | no | `TreeAttachment` |
| `Woodcutting Vines V1 Small V1` | 24686 | no | `TreeAttachment` |
| `Woodcutting Vines V1 Small V2` | 24684 | no | `CreateLOD`, `TreeAttachment` |
| `Woodcutting Vines V1 Small V3` | 24688 | no | `TreeAttachment` |

## Breakable or resource node

| Prefab | Hash | Spawn command | Main scripts |
| --- | --- | --- | --- |
| `Ash Pile` | 53398 |  | `HealthObject`, `StatManager`, `BasicDecay` |
| `Auto Cam Player` | 61644 | no | `AutoCamPlayer`, `AutoCamLocomotionController`, `HealthObject`, `StatManager`, `CullingController`, `PlayerMessageDisplay` (+2) |
| `Breakable Root 2.5m Bendy` | 35896 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Breakable Root 2.5m Curved` | 35738 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Breakable Root 2.5m Straight` | 34564 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Breakable Root 2.5m Wavy` | 36054 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Breakable Root Bendy` | 41482 |  | `ImpactDetector`, `HealthObject`, `StatManager`, `Surface` |
| `Breakable Root Curved` | 64388 |  | `ImpactDetector`, `HealthObject`, `StatManager`, `Surface` |
| `Breakable Root Fence` | 62846 |  | `ImpactDetector`, `HealthObject`, `StatManager`, `Surface` |
| `Breakable Root Ground 01` | 34014 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Breakable Root Ground 02` | 23246 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Breakable Root Ground 03` | 21206 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Breakable Root Ground 04` | 18702 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Breakable Root Ground 05` | 16298 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Breakable Root Ground 06` | 13634 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Breakable Root Hanging Bendy` | 63792 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Breakable Root Hanging Column 01` | 37666 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Breakable Root Hanging Column 02` | 24548 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Breakable Root Hanging Straight` | 12714 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Breakable Root Hanging Thin Bendy` | 6394 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Breakable Root Hanging Thin Straight` | 57168 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Breakable Root HangingShort Bendy` | 13856 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Breakable Root HangingShort Curved` | 12224 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Breakable Root HangingShort Straight` | 9226 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Breakable Root HangingShort Wavy` | 8534 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Breakable Root Mound Large` | 15602 |  | `ImpactDetector`, `HealthObject`, `StatManager`, `Surface` |
| `Breakable Root Mound Small` | 43010 |  | `ImpactDetector`, `HealthObject`, `StatManager`, `Surface` |
| `Breakable Root Straight` | 47012 |  | `ImpactDetector`, `HealthObject`, `StatManager`, `Surface` |
| `Breakable Root Wavy` | 28332 |  | `ImpactDetector`, `HealthObject`, `StatManager`, `Surface` |
| `Burnable Root Fence` | 45144 |  | `ImpactDetector`, `HealthObject`, `StatManager`, `Surface` |
| `Burnable Root Ground 01` | 5702 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Burnable Root Ground 02` | 34852 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Burnable Root Ground 03` | 65260 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Burnable Root Ground 04` | 36342 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Burnable Root Ground 05` | 35154 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Burnable Root Ground 06` | 37414 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Burnable Root Hanging Bendy` | 44884 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Burnable Root Hanging Column 01` | 39694 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Burnable Root Hanging Column 02` | 14166 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Burnable Root Hanging Straight` | 39592 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Burnable Root Hanging Thin Bendy` | 64866 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Burnable Root Hanging Thin Straight` | 36356 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Burnable Root HangingShort Bendy` | 58042 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Burnable Root HangingShort Curved` | 29008 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Burnable Root HangingShort Straight` | 43200 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Burnable Root HangingShort Wavy` | 680 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager`, `Surface` |
| `Burnable Root Mound Large` | 48874 |  | `ImpactDetector`, `HealthObject`, `StatManager`, `Surface` |
| `Burnable Root Mound Small` | 17066 |  | `ImpactDetector`, `HealthObject`, `StatManager`, `Surface` |
| `Burnable VineBunch` | 35828 |  | `ImpactDetector`, `HealthObject`, `Spawner`, `StatManager` |
| `Burnable VineBunch Tutorial` | 38202 |  | `ImpactDetector`, `HealthObject`, `StatManager` |
| `Cave Explosion Boulder` | 31136 |  | `HealthObject`, `MultiSpawner`, `StatManager`, `NavmeshCut` |
| `Coal Boulder 01` | 23502 |  | `ImpactDetector`, `HealthObject`, `MultiSpawner`, `StatManager`, `NavmeshCut`, `EmbeddableManager` (+1) |
| `Coal Boulder 02` | 57382 |  | `ImpactDetector`, `HealthObject`, `MultiSpawner`, `StatManager`, `NavmeshCut`, `EmbeddableManager` (+1) |
| `Coal Boulder 03` | 23788 |  | `ImpactDetector`, `HealthObject`, `MultiSpawner`, `StatManager`, `NavmeshCut`, `EmbeddableManager` (+1) |
| `combat_dummy` | 57126 |  | `HealthObject`, `SphereVisibilityCheck`, `NetworkedJointDrivenRig`, `StatManager`, `Surface`, `ColliderGroup` |
| `Copper Boulder` | 65380 |  | `StatManager`, `HealthObject`, `ImpactDetector`, `MultiSpawner`, `NavmeshCut`, `CaveLayerStaticObject` |
| `Crystal Blue` | 38178 |  | `HealthObject`, `ImpactDetector`, `MultipleSpawner`, `StatManager` |
| `Crystal Blue NoLight` | 14778 |  | `HealthObject`, `ImpactDetector`, `MultipleSpawner`, `StatManager`, `CaveLayerStaticObject` |
| `Crystal Structure Blue` | 51128 |  | `HealthObject`, `Spawner`, `MultiSpawner`, `StatManager`, `CaveLayerStaticObject` |
| `Death Fern Seed Planted` | 40824 |  | `Spawner`, `HealthObject`, `StatManager`, `ImpactDetector`, `DelayedEvent` |
| `Digging Box Hebios` | 42226 |  | `HealthBasedDigable` |
| `Digging Dirt Mound` | 43924 |  | `HealthBasedDigable` |
| `Digging Dirt Mound Hebios` | 33570 |  | `HealthBasedDigable` |
| `Digging Geode` | 55696 |  | `HealthBasedDigable` |
| `Digging Material Box` | 35612 |  | `HealthBasedDigable` |
| `Explosion Boulder` | 44162 |  | `HealthObject`, `MultiSpawner`, `StatManager`, `ModifiableAdditionalStaticContent`, `EmbeddableManager` |
| `Explosion Boulder Large` | 30854 |  | `HealthObject`, `MultiSpawner`, `StatManager`, `ModifiableAdditionalStaticContent`, `EmbeddableManager` |
| `Fake Player combat_dummy` | 45454 |  | `FakePlayerHealth`, `SphereVisibilityCheck`, `NetworkedJointDrivenRig`, `StatManager`, `Surface`, `ColliderGroup` |
| `FlyCam Player` | 44058 | no | `FlyCamPlayer`, `LocalPlayer`, `FlyCamLocomotionController`, `HealthObject`, `CullingController`, `PlayerMessageDisplay` (+3) |
| `Gold Boulder` | 2584 |  | `HealthObject`, `StatManager`, `MultiSpawner`, `ImpactDetector`, `NavmeshCut`, `CaveLayerStaticObject` |
| `Gotera Walnut Bomb` | 35174 |  | `HealthObject`, `StatManager`, `ImpactDetector`, `DelayedEvent` |
| `Hanging Loot Box Platform` | 54462 |  | `HealthObject`, `StatManager`, `DelayedEvent`, `Spawner` |
| `Hanging Loot Sack` | 49658 |  | `HealthObject`, `StatManager`, `DelayedEvent`, `MultiSpawner`, `Surface` |
| `Iron Boulder` | 45344 |  | `StatManager`, `HealthObject`, `ImpactDetector`, `MultiSpawner`, `NavmeshCut`, `CaveLayerStaticObject` |
| `Iron Boulder Training` | 10140 |  | `StatManager`, `HealthObject`, `ImpactDetector`, `PracticeObjectFader` |
| `Large Cave Mushroom` | 29690 |  | `HealthObject`, `ImpactDetector`, `StatManager` |
| `Large Cave Mushroom OLD` | 36866 |  | `HealthObject`, `ImpactDetector`, `StatManager` |
| `Large Mythril Boulder` | 53902 |  | `StatManager`, `HealthObject`, `MultiSpawner`, `ImpactDetector`, `NavmeshCut`, `CaveLayerStaticObject` |
| `Leveling Dummy` | 44224 |  | `HealthObject`, `SphereVisibilityCheck`, `NetworkedJointDrivenRig`, `StatManager`, `PracticeObjectFader` |
| `Material Box` | 46376 |  | `HealthObject`, `StatManager`, `ImpactDetector` |
| `Mythril Boulder` | 27368 |  | `StatManager`, `HealthObject`, `MultiSpawner`, `ImpactDetector`, `NavmeshCut`, `CaveLayerStaticObject` |
| `Placed Table` | 8520 |  | `HealthObject`, `ImpactDetector`, `StatManager`, `GenericCraftingResult` |
| `Potato Plant Stage 2` | 63530 |  | `HealthObject`, `StatManager`, `ImpactDetector` |
| `Potato Plant Stage 3` | 54788 |  | `HealthObject`, `StatManager`, `ImpactDetector` |
| `Proxy Player Target` | 45582 | no | `StatManager`, `HealthObject` |
| `Sandstone_Boulder_01` | 34168 |  | `ImpactDetector`, `HealthObject`, `MultiSpawner`, `StatManager`, `NavmeshCut`, `EmbeddableManager` (+1) |
| `Sandstone_Boulder_02` | 8006 |  | `ImpactDetector`, `HealthObject`, `MultiSpawner`, `StatManager`, `NavmeshCut`, `CaveLayerStaticObject` |
| `Sandstone_Boulder_03` | 5050 |  | `ImpactDetector`, `HealthObject`, `MultiSpawner`, `StatManager`, `NavmeshCut`, `CaveLayerStaticObject` |
| `Silver Boulder` | 9144 |  | `HealthObject`, `StatManager`, `ImpactDetector`, `MultiSpawner`, `NavmeshCut`, `CaveLayerStaticObject` |
| `Small Cave Mushroom 01` | 33796 |  | `HealthObject`, `EdibleObject`, `StatManager` |
| `Spectral Ghost` | 57494 | no | `PlayerCustomizationHandler`, `CharacterDummyPointer`, `ColliderGroup`, `HealthObject`, `StatManager`, `EffectHandler` (+1) |
| `Stone Boulder 01` | 33376 |  | `ImpactDetector`, `HealthObject`, `MultiSpawner`, `StatManager`, `NavmeshCut`, `EmbeddableManager` (+1) |
| `Stone Boulder 02` | 17686 |  | `ImpactDetector`, `HealthObject`, `MultiSpawner`, `StatManager`, `NavmeshCut`, `EmbeddableManager` (+1) |
| `Stone Boulder 03` | 12450 |  | `ImpactDetector`, `HealthObject`, `MultiSpawner`, `StatManager`, `NavmeshCut`, `EmbeddableManager` (+1) |
| `Storage Crate Redwood Closed` | 59594 |  | `ImpactDetector`, `HealthObject`, `StatManager` |
| `Storage Crate Redwood Open` | 32788 |  | `ImpactDetector`, `HealthObject`, `StatManager` |
| `Turabada Shard Core` | 7900 |  | `HealthObject`, `StatManager`, `ImpactDetector`, `BasicChiselable`, `NavmeshCut` |
| `Woodcut Training Block` | 13392 |  | `HealthObject`, `ImpactDetector`, `StatManager`, `PracticeObjectFader` |

## Spawner or population

| Prefab | Hash | Spawn command | Main scripts |
| --- | --- | --- | --- |
| `Basic Population Folder` | 31116 | no | `PopulationFolder` |
| `Breakable Root Spawner` | 40946 |  | `PopulationSpawnArea`, `SpawnPositions` |
| `Buried Grass` | 47090 |  | `SpawnBuried` |
| `Buried Pullup` | 61742 |  | `SpawnBuried` |
| `Buried Pullup Bramble` | 37764 |  | `SpawnBuried` |
| `Buried Pullup Carrot` | 59026 |  | `SpawnBuried` |
| `Buried Pullup Primitive` | 29550 |  | `SpawnBuried` |
| `Burnable Vines 4x3` | 28866 | no | `PopulationSpawnArea`, `SpawnPositions` |
| `Burnable Vines 4x3 Spawner` | 50606 | no | `PopulationSpawnArea`, `SpawnPositions` |
| `Campfire Spawner` | 6584 |  | `PopulationSpawnArea`, `SpawnPositions` |
| `Cave Explosion Boulder Clusters` | 17608 |  | `ClusterGenerator`, `Cluster` |
| `Christmas Gift Box Spawner` | 63174 |  | `FestiveFeature`, `PopulationSpawnArea`, `SpawnPositions` |
| `CircleSpawner` | 49642 |  | `SpawnInCircle`, `LogicBoolReceiver` |
| `CircleSpawner(ExplosiveSpike)` | 31046 |  | `SpawnInCircle`, `LogicBoolReceiver` |
| `Copper Cluster` | 20646 |  | `Cluster`, `ClusterGenerator` |
| `Crate Stack Spawner` | 38974 |  | `SpawnIfEmpty`, `Spawner` |
| `Crystal Cluster Blue` | 18096 |  | `ClusterGenerator`, `LightCluster` |
| `Cylindrical Encounter` | 8826 | no | `PopulationSpawnArea`, `CylindricalBoundsSurface` |
| `Directional Encounter` | 23796 | no | `PopulationSpawnArea`, `DirectionalBoundsSurface` |
| `Disk Encounter` | 65062 | no | `SpawnArea`, `PopulationSpawnArea` |
| `Disk Encounter(TrueOnDeath)` | 34000 | no | `SpawnArea`, `PopulationSpawnArea`, `LogicBoolReceiver` |
| `Disk Encounter(TrueOnDeath) SeperateDestroy Variant` | 5930 | no | `SpawnArea`, `PopulationSpawnArea`, `LogicBoolReceiver` |
| `Forest Chunk Point Generator` | 45732 |  | `ForestPopulationArea`, `ChunkPositionSurface` |
| `Forest Population` | 18818 |  | `ForestPopulationArea`, `BasicPopulationFolder` |
| `Gymnasium Prefab Spawner` | 25312 |  | `GymnasiumOnDemandPrefabSpawner` |
| `Hanging Breakable Doorway Spawner` | 44220 | no | `PopulationSpawnArea`, `SpawnPositions` |
| `Hanging Window Spawner` | 27316 | no | `PopulationSpawnArea`, `SpawnPositions` |
| `Hebios Buried Spawn Area` | 51290 |  | `PopulationSpawnArea`, `SpawnArea` |
| `Hebios Camp Spawner` | 43300 | no | `PopulationSpawnArea`, `SpawnPositions` |
| `Hebios Closed Crate Spawner` | 46524 |  | `PopulationSpawnArea`, `SpawnPositions` |
| `Hebios Open Crate Spawner` | 46522 |  | `PopulationSpawnArea`, `SpawnPositions` |
| `Iron Cluster` | 28272 |  | `Cluster`, `ClusterGenerator` |
| `Large Cave Mushroom Cluster` | 2422 |  | `ClusterGenerator`, `Cluster` |
| `Micro Tutorial Orb Spawner` | 34948 | no | `MicroTutorialOrbSpawner` |
| `Mining Path` | 30950 |  | `PopulationPath` |
| `Mushroom Fairy Circle Puzzle` | 46706 |  | `SpawnInCircle`, `LogicBoolSender` |
| `Mushroom Fairy Circle Puzzle Teleport` | 28040 |  | `SpawnInCircle`, `LogicVector3Sender`, `LogicVector3Receiver`, `TeleportationPoint`, `TeleporterPlatform`, `PositionProvider` |
| `Obstacle Path` | 62838 |  | `PopulationPath` |
| `Rock Cluster` | 63824 |  | `Cluster`, `ClusterGenerator` |
| `Rock Cluster Tutorial` | 25922 |  | `Cluster`, `ClusterGenerator` |
| `Sandstone Cluster` | 41676 |  | `ClusterGenerator`, `Cluster` |
| `Small Cave Mushroom Cluster` | 56444 |  | `ClusterGenerator`, `Cluster` |
| `SnowballMoundSpawner` | 30542 |  | `PopulationSpawnArea`, `SpawnPositions`, `HealthObject`, `StatManager`, `ImpactDetector`, `FestiveFeature` |
| `Spherical Encounter` | 1222 | no | `PopulationSpawnArea`, `SphericalSurface` |
| `Stone Boulder Cluster` | 8948 |  | `ClusterGenerator`, `Cluster` |
| `TEMP Hebios Camp Spawner Barren` | 33858 | no | `PopulationSpawnArea`, `SpawnPositions` |
| `TEMP Hebios Camp Spawner Valley` | 33880 | no | `PopulationSpawnArea`, `SpawnPositions` |
| `Trial Spawner MD-T1` | 62144 |  | `SpawnPositions`, `PopulationSpawnArea`, `LogicBoolReceiver`, `LogicBoolSender` |
| `Trial Spawner MD-T2` | 60910 |  | `SpawnPositions`, `PopulationSpawnArea`, `LogicBoolReceiver`, `LogicBoolSender` |
| `Trial Spawner MD-T3` | 52988 |  | `SpawnPositions`, `PopulationSpawnArea`, `LogicBoolReceiver`, `LogicBoolSender` |
| `Trial Spawner MD-W1` | 32210 |  | `SpawnPositions`, `PopulationSpawnArea`, `LogicBoolReceiver`, `LogicBoolSender` |
| `Trial Spawner MD-W2` | 50818 |  | `SpawnPositions`, `PopulationSpawnArea`, `LogicBoolReceiver`, `LogicBoolSender` |
| `Trial Spawner T-1` | 7744 |  | `SpawnPositions`, `PopulationSpawnArea`, `LogicBoolReceiver`, `LogicBoolSender` |
| `Trial Spawner T-2` | 40198 |  | `SpawnPositions`, `PopulationSpawnArea`, `LogicBoolReceiver`, `LogicBoolSender` |
| `Trial Spawner T-3` | 45096 |  | `SpawnPositions`, `PopulationSpawnArea`, `LogicBoolReceiver`, `LogicBoolSender` |
| `Trial Spawner T-3-Myth` | 49994 |  | `SpawnPositions`, `PopulationSpawnArea`, `LogicBoolReceiver`, `LogicBoolSender` |
| `Trial Spawner W-1` | 33084 |  | `SpawnPositions`, `PopulationSpawnArea`, `LogicBoolReceiver`, `LogicBoolSender` |
| `Trial Spawner W-2` | 18696 |  | `SpawnPositions`, `PopulationSpawnArea`, `LogicBoolReceiver`, `LogicBoolSender` |
| `Trial Spawner W-2-Crys` | 58286 |  | `SpawnPositions`, `PopulationSpawnArea`, `LogicBoolReceiver`, `LogicBoolSender` |
| `Trial Spawner W-3` | 42624 |  | `SpawnPositions`, `PopulationSpawnArea`, `LogicBoolReceiver`, `LogicBoolSender` |
| `Woodcutting Path` | 45418 |  | `PopulationPath` |

## Station, structure or other

| Prefab | Hash | Spawn command | Main scripts |
| --- | --- | --- | --- |
| `Anvil` | 23182 |  | `ImpactDetector`, `AdditionalStaticContent` |
| `Anvil Training` | 24218 |  | `ImpactDetector`, `PracticeObjectFader` |
| `Assembly Deck` | 17520 |  | `GenericAssemblyStation`, `PullingHandle`, `AdditionalStaticContent` |
| `ATM Coin Bank` | 9780 |  | `ATMMachine`, `AdditionalStaticContent` |
| `Bookshelf` | 64316 |  | `AdditionalStaticContent` |
| `Bookshelf_NoBackboard` | 59952 |  | `AdditionalStaticContent` |
| `Bouncing Movement` | 34396 |  | `GuidedMovement`, `WayPointPath`, `BouncingValue`, `MovingPlatform` |
| `Cast Iron Lamp` | 24782 |  | `AdditionalStaticContent` |
| `Cave Surface Teleporter Ruins` | 43368 | no | `CaveTeleporterReplacer`, `AdditionalStaticContent` |
| `Cave Teleporter` | 27074 | no | `LevelSelectCaveTeleporter`, `LevelSelector` |
| `Cave Teleporter Station` | 22840 | no | `CaveTeleporter` |
| `Cave Teleporter Station Ruins` | 29310 | no | `CaveTeleporterReplacer` |
| `Cave Wall Support` | 63840 |  | `DockByDefault` |
| `Cave Water Mound` | 57530 |  | `LiquidContainer`, `LiquidHeatAreaController`, `HeatPointCollection`, `NavmeshCut` |
| `Character Level Stone` | 60762 |  | `ProfessionsProgressShrine`, `AdditionalStaticContent` |
| `Chess Board` | 16896 |  | `GhostSnapSlotCollection` |
| `ChiselDeck` | 37398 |  | `ChisellingDeck`, `ColliderGroup`, `Landmark`, `LandmarkDiscoverZone`, `AdditionalStaticContent`, `Surface` |
| `Chunk Directional Surface` | 47534 | no | `DirectionalBoundsSurface`, `ChunkPositionSurface` |
| `Chunk Spherical Surface` | 47614 | no | `SphericalSurface`, `ChunkPositionSurface` |
| `Climbing Tower Progression Visualizer` | 44244 |  | `ClimbingTowerProgressionVisualizer` |
| `Climbing Unlock (Debug)` | 32462 | no | `AdditionalStaticContent` |
| `Climbing Unlock Orb Pedestal` | 51594 |  | `AdditionalStaticContent` |
| `Coin Press` | 31306 |  | `CoinPress`, `NetworkedEvent`, `AdditionalStaticContent` |
| `Concoction Crate` | 23304 |  | `LiquidContainer`, `LiquidStencilShaderController`, `LiquidHeatAreaController`, `HeatPointCollection`, `AdditionalStaticContent` |
| `Cooking Stand` | 6742 |  | `AdditionalStaticContent` |
| `Crafting Deck` | 28396 |  | `GenericCraftingStation`, `AdditionalStaticContent` |
| `Customization Controller` | 5526 | no | `CustomizationPlayerController`, `LocomotionController`, `ExposurePlayerScreenFader`, `PlayerMessageDisplay`, `PlayerControllerLifetimeScope` |
| `Decrafting Deck` | 62244 |  | `DecraftingDeck`, `AdditionalStaticContent` |
| `Discovery Landmark` | 37940 | no | `LandmarkDiscoverZone`, `Landmark` |
| `Forge` | 11872 |  | `AdditionalStaticContent` |
| `Gacha Handle ` | 34422 |  | `GachaHandle` |
| `Global Respawn Shrine` | 63368 | no | `GlobalRespawnShrine`, `GameObjectLifetimeScope`, `AdditionalStaticContent` |
| `Gymnasium Teleport Tablet` | 2718 |  | `RendererMaterializer`, `Window`, `GymnasiumTeleportTablet`, `GameObjectLifetimeScope` |
| `Gymnasium Xp Display View` | 57304 |  | `GymnasiumXpStatusDisplay` |
| `Hand Camera` | 59806 | no | `HandCamera`, `CameraStabilization`, `RendererMaterializer`, `CameraFilters` |
| `Heart Receptacle` | 56090 |  | `StatUpgradeTarget`, `ImpactHitThresholdTrigger`, `PullAway` |
| `HeatSourceDebug` | 63802 | no | `AssistGrabInteractable`, `Spawner`, `BasicDecay`, `InteractableLastPlayerInteractorHandler`, `InteractableEvents` |
| `Hebios Storage Chest` | 44984 |  | `Chest`, `CurveElevation`, `PickupDockGroup`, `Surface` |
| `Hebios Storage Chest Climbing` | 35078 |  | `Chest`, `CurveElevation`, `PickupDockGroup`, `Surface` |
| `Hitting Short Sword Training` | 55646 |  | `TrainingHittingTool`, `PracticeObjectFader` |
| `HolidayRewardDisplay` | 32158 |  | `FestiveFeature` |
| `Infinite Fire` | 5172 |  | `AssistGrabInteractable`, `Spawner`, `BasicDecay`, `InteractableLastPlayerInteractorHandler`, `InteractableEvents` |
| `Info Board` | 51114 |  | `InfoBoard` |
| `Ingredient Generator Shelf` | 51096 |  | `GymnasiumCraftingIngredientSpawner` |
| `Lamp Post` | 18244 |  | `AdditionalStaticContent` |
| `Leaderboard` | 44390 |  | `SelectionBase`, `Leaderboard` |
| `Lectern` | 59986 |  | `BookRestrictor`, `AdditionalStaticContent` |
| `Lockbox` | 6974 |  | `AdditionalStaticContent` |
| `Locked Crafting Deck` | 48390 | no | `GenericCraftingStation`, `AdditionalStaticContent` |
| `LocomotionLess Controller` | 26514 | no | `LocomotionlessPlayerController`, `LocomotionController`, `ExposurePlayerScreenFader`, `PlayerMessageDisplay`, `PlayerControllerLifetimeScope` |
| `Logic Context` | 34630 |  | `GlobalLogicManager` |
| `Loot Module` | 29544 | no | `LootModule` |
| `Mail Deposit Box` | 64204 |  | `PostboxSender`, `NearbyPlayerTracker`, `AdditionalStaticContent` |
| `Main Menu Controller` | 58810 | no | `MainMenuPlayerController`, `LocomotionController`, `ExposurePlayerScreenFader`, `PlayerMessageDisplay`, `PlayerControllerLifetimeScope` |
| `Main Menu Desktop Controller` | 19644 | no | `MainMenuDesktopController`, `PlayerMessageDisplay`, `ExposurePlayerScreenFader`, `PlayerControllerLifetimeScope` |
| `Map Board` | 60974 |  | `MapBoard`, `MapLandmarkDisplay`, `Landmark`, `EditorEventPanel`, `LandmarkDiscoverZone`, `AdditionalStaticContent` |
| `Mould Press Hebios` | 2594 |  | `MouldPress`, `NetworkedEvent`, `AdditionalStaticContent` |
| `Mould Press Standard` | 13362 |  | `MouldPress`, `NetworkedEvent`, `AdditionalStaticContent` |
| `Mould Rack` | 4070 |  | `MouldRack`, `PickupDockGroup`, `AdditionalStaticContent` |
| `Mould Restriction Zone` | 4900 |  | `MouldRestrictor` |
| `MRK Slip Door` | 14114 |  | `NonClimbable` |
| `Name Proxy` | 15340 | no | `PlayerProxy` |
| `Ore Storage` | 65420 |  | `CommunalStorage`, `PlayerInteractionRestrictor`, `StorageOrganizer`, `AdditionalStaticContent` |
| `Outdoor Light Fixture` | 4686 |  | `AdditionalStaticContent` |
| `Outdoor Light Fixture Dim` | 2758 |  | `AdditionalStaticContent` |
| `Padlock Standard` | 3830 |  | `ConsumableLock`, `NetworkAnimator` |
| `Page` | 40320 | no | `BookPageInstance` |
| `PickupSlidingDoor` | 13452 |  | `MovePickup`, `NavmeshCut` |
| `PillarBridgeRotate` | 47436 |  | `FaceObject` |
| `PillarRotate` | 25648 |  | `FaceObject` |
| `PlacedMetalWallHook` | 25662 | no | `PhysicalMaterialPart`, `ChiselableSurfaceDock` |
| `PlacedSurfaceDockTemplate` | 32713 | no | `PhysicalMaterialPart`, `ChiselableSurfaceDock` |
| `Player Grave` | 28202 |  | `Gravestone` |
| `Player Template` | 61646 | no | `Player`, `PlayerStateManager`, `PlayerEventsManager`, `PlayerProgressionManager`, `PlayerUnlockManager`, `PlayerToolBasedSkillHelper` (+1) |
| `PlayerInPosition Observer` | 64252 | no | `PlayerInPositionObserver` |
| `Poison Vent` | 37252 |  | `Spawner` |
| `Pond Test` | 58844 |  | `LiquidContainer`, `LiquidHeatAreaController`, `HeatPointCollection` |
| `Pond Water` | 23384 |  | `LiquidContainer`, `LiquidHeatAreaController`, `HeatPointCollection` |
| `Post Box` | 9562 |  | `Postbox`, `AdditionalStaticContent` |
| `Power Strike Counter` | 37516 |  | `PowerStrikeTester`, `PracticeObjectFader` |
| `Powered Respawn Shrine` | 19646 | no | `PoweredRespawnShrine`, `GameObjectLifetimeScope`, `RespawnShrineSubscriberMarkController`, `RespawnShrineFuelDockController`, `RespawnShrineFuelDisplay`, `RespawnShrineStaticAudioController` (+1) |
| `PrefabInPosition Observer` | 44368 | no | `PrefabInPositionObserver` |
| `Profession Upgrade Shrine` | 32200 |  | `SkillShrine`, `AdditionalStaticContent` |
| `Quest Board` | 57298 |  | `QuestBoard` |
| `Random Spawn Rectangle` | 24644 | no | `RandomSpawnRectangle` |
| `Recycler` | 60684 |  | `Recycler`, `TemperatureVisuals`, `AdditionalStaticContent`, `Surface` |
| `Repair Box` | 3458 |  | `RepairBox`, `RepairBoxVfxController` |
| `Repair Box Standing Panel` | 32704 |  | `RepairBox`, `RepairBoxVfxController` |
| `Repair Box Wall Panel` | 41842 |  | `RepairBox`, `RepairBoxVfxController` |
| `Rotating Object` | 30780 | no | `NetworkAxisRotation`, `Rotator` |
| `ruins_orbBasin_01` | 27482 |  | `AdditionalStaticContent` |
| `ruins_orbBasin_01 Variant` | 13294 |  | `AdditionalStaticContent` |
| `ruins_orbBasin_01TEST` | 58180 |  | `AdditionalStaticContent` |
| `Safe Point` | 33004 |  | `SafePositionSetter`, `CheckPoint` |
| `Send Post` | 53190 |  | `PostboxSender` |
| `Set Piece` | 62334 | no | `SetPiece` |
| `Set Piece` | 9684 | no | `SetPiece` |
| `Shelf` | 23630 |  | `AdditionalStaticContent` |
| `Shelf Short` | 20452 |  | `AdditionalStaticContent` |
| `Slow Grass` | 59062 |  | `LocomotionModifier` |
| `Smelter` | 44646 |  | `Smelter`, `PickupDockGroup`, `AdditionalStaticContent`, `Surface`, `SmelterUnlockManager` |
| `SmelterOld` | 49652 | no | `Smelter`, `NetworkAnimator`, `PickupDockGroup`, `Surface` |
| `SnowballSpawner` | 22418 |  | `FestiveFeature` |
| `Snowman Network Prefab 1` | 57830 |  | `FestiveFeature` |
| `Snowman Network Prefab 2` | 16878 |  | `FestiveFeature` |
| `Snowman Network Prefab 3` | 17612 |  | `FestiveFeature` |
| `Snowman Network Prefab test` | 25690 |  | `FestiveFeature` |
| `Spirit Mode Doorway` | 19296 | no | `SpiritModeDoorway` |
| `Standard Stages` | 31152 |  | `StageBasedPrefab` |
| `Stick Storage` | 46252 |  | `CommunalStorage`, `PlayerInteractionRestrictor`, `StorageOrganizer`, `AdditionalStaticContent` |
| `Storage Chest` | 63826 |  | `Chest`, `CurveElevation`, `PickupDockGroup`, `AdditionalStaticContent`, `Surface` |
| `Street Post` | 57248 |  | `AdditionalStaticContent` |
| `Structure Chest` | 35280 |  | `StructurePart`, `GeneratedLoot` |
| `Teleporter To Customization` | 60372 |  | `FromPlayingToCustomization`, `AdditionalStaticContent` |
| `Test Impact Detection` | 64508 | no | `ImpactDetector`, `EmbeddableManager` |
| `timberBlock_1Long` | 34586 |  | `TimberBlock`, `ColliderGroup`, `PreventAtlas` |
| `timberBlock_2Long` | 1898 |  | `TimberBlock`, `ColliderGroup`, `PreventAtlas` |
| `timberBlock_3Long` | 1900 |  | `TimberBlock`, `ColliderGroup`, `PreventAtlas` |
| `Timed Respawner` | 32620 |  | `RespawnOnDestroy` |
| `Tinder` | 34122 |  | `AssistGrabInteractable`, `Spawner`, `BasicDecay`, `InteractableLastPlayerInteractorHandler`, `InteractableEvents` |
| `Township Bridge Broken` | 8620 |  | `BezierSpline` |
| `Township Bridge Fixed` | 33334 |  | `BezierSpline` |
| `Trade Deck` | 30016 |  | `TradeVendor`, `TradeStateManager`, `TaxManager`, `FlagAnimationManager`, `AdditionalStaticContent` |
| `Trial 1 Logic` | 31544 | no | `TrialLogic` |
| `Trial 2 Logic` | 47734 | no | `TrialLogic` |
| `Trial 3 Logic` | 25118 | no | `TrialLogic` |
| `VR Player Character New` | 49582 | no | `PlayerCharacter`, `CharacterLocalityController`, `SceneChangeTimer`, `CharacterIKController`, `PlayerEffectController`, `PlayerSpecialEffectsController` (+15) |
| `Walk Air` | 50936 | no | `StructurePart` |
| `Wall Street Post` | 50078 |  | `AdditionalStaticContent` |
| `Wall Torch Holder` | 3786 |  | `AdditionalStaticContent` |
| `Weapon Rack Wall` | 13062 |  | `AdditionalStaticContent` |
| `Woodcut Wedge Storage` | 12512 |  | `CommunalStorage`, `PlayerInteractionRestrictor`, `StorageOrganizer`, `AdditionalStaticContent` |
| `Wooden Barrel` | 5890 |  | `LiquidContainer`, `PourableContainer`, `FixedPouringStrengthController`, `AdditionalStaticContent` |

## Logic and puzzle

| Prefab | Hash | Spawn command | Main scripts |
| --- | --- | --- | --- |
| `(Child Node) Climbing Tower Teleporter Node` | 5078 |  | `Interactable`, `HandHoverPoint`, `LogicBoolSender`, `ClimbingTowerTeleporterNode`, `AdditionalStaticContent` |
| `(Original Child Node) Climbing Tower Teleporter Node` | 26916 |  | `Interactable`, `HandHoverPoint`, `LogicBoolSender`, `ClimbingTowerTeleporterPerPlayerSaveable`, `ClimbingTowerTeleporterNode` |
| `(OriginalRoot Node) Climbing Tower Teleporter Node` | 55446 |  | `Interactable`, `HandHoverPoint`, `LogicBoolSender`, `ClimbingTowerTeleporterPerPlayerSaveable`, `ClimbingTowerTeleporterNode` |
| `(Root Node) Climbing Tower Teleporter Node` | 7668 |  | `Interactable`, `HandHoverPoint`, `LogicBoolSender`, `ClimbingTowerTeleporterNode`, `AdditionalStaticContent` |
| `Area of Influence Receiver puzzle` | 13256 |  | `AreaOfInfluenceReceiver`, `LogicBoolSender` |
| `Area of Influence Sender puzzle` | 59482 |  | `LogicIntSender`, `AreaOfInfluenceSender` |
| `Drawbridge Puzzle Range` | 40692 |  | `LogicFloatReceiver` |
| `Drawbridge Puzzle Range long` | 58514 |  | `LogicFloatReceiver`, `LinearPartCloner`, `DrawBridgeRangeLogic` |
| `Drawbridge Puzzle Toggle` | 24580 |  | `DrawBridgeLogic`, `DrawBridgeRangeLogic`, `LogicBoolReceiver` |
| `Elevator Puzzle Crank` | 64134 |  | `LogicFloatReceiver` |
| `Elevator Puzzle Rope` | 20484 |  | `LogicFloatReceiver` |
| `Float Range Operator` | 50768 |  | `LogicFloatRangeReceiver`, `LogicBoolSender` |
| `Int Range Operator` | 55740 |  | `LogicIntRangeReceiver`, `LogicBoolSender` |
| `item_pedestal_puzzle_base` | 27250 |  | `PlaceItemPuzzleLogic`, `LogicIntSender`, `LogicBoolSender`, `PickupDockGroup` |
| `Lever` | 27966 | no | `Lever`, `LogicBoolSender` |
| `Logic Int To Bool` | 2454 |  | `LogicBoolSender`, `LogicIntReceiver`, `LogicIntToBool` |
| `Logic Operator` | 13390 |  | `LogicGateReceiver`, `LogicBoolSender` |
| `LogicBoolOneTimeActivate` | 28136 |  | `LogicBoolReceiver`, `LogicBoolSender` |
| `LogicFloatChangeOnBool` | 62220 |  | `LogicBoolReceiver`, `LogicFloatChangeOnBool`, `LogicFloatSender` |
| `LogicFloatReset` | 57100 |  | `LogicBoolReceiver`, `LogicFloatReset`, `LogicFloatSender`, `LogicFloatReceiver` |
| `LogicReset` | 36976 |  | `LogicReset`, `LogicBoolReceiver` |
| `MRK Activation Line` | 24096 |  | `LogicBoolReceiver` |
| `MRK Automated Pipe Hazard Elevator` | 38546 |  | `LogicBoolReceiver`, `LogicBoolSender`, `NonClimbable` |
| `MRK Automated Pipe Hazard Elevator 7.6 Variant` | 61754 |  | `LogicBoolReceiver`, `LogicBoolSender`, `NonClimbable` |
| `MRK Automated Pipe Hazard Elevator Large Inverse Variant` | 34664 |  | `LogicBoolReceiver`, `LogicBoolSender`, `NonClimbable` |
| `MRK Automated Pipe Hazard Elevator Tall Variant` | 37626 |  | `LogicBoolReceiver`, `LogicBoolSender`, `NonClimbable` |
| `MRK Horizontal Lift` | 37822 |  | `LogicFloatReceiver`, `NetworkedFloatStream` |
| `MRK Lantern Fire` | 29468 |  | `FireLogic`, `LogicBoolSender`, `LogicBoolReceiver`, `ColorLerp`, `PropertyBlockColorAccessor`, `LogicDisplay` |
| `MRK Lantern_01` | 36130 |  | `LogicBoolReceiver`, `LogicBoolSender`, `LogicDisplay` |
| `MRK Large Gate` | 3030 | no | `SlidingDoor`, `LogicBoolReceiver` |
| `MRK Large Gear Variant` | 29874 |  | `LogicBoolReceiver`, `NonClimbable` |
| `MRK Large Lever` | 12812 |  | `Lever`, `LogicBoolSender` |
| `MRK Pipe Gate` | 49320 |  | `SlidingDoor`, `LogicBoolReceiver` |
| `MRK Puzzle Core Initial Stand 01 Variant` | 60550 |  | `PlaceItemPuzzleLogic`, `LogicIntSender`, `LogicBoolSender`, `PickupDockGroup` |
| `MRK Puzzle Core Initial Stand 02 Variant` | 30056 |  | `PlaceItemPuzzleLogic`, `LogicIntSender`, `LogicBoolSender`, `PickupDockGroup` |
| `MRK Puzzle Core Stand 01` | 58540 |  | `PlaceItemPuzzleLogic`, `LogicIntSender`, `LogicBoolSender`, `PickupDockGroup` |
| `MRK Puzzle Core Stand 02` | 34594 |  | `PlaceItemPuzzleLogic`, `LogicIntSender`, `LogicBoolSender`, `PickupDockGroup` |
| `MRK Sliding Door` | 20556 | no | `SlidingDoor`, `LogicBoolReceiver` |
| `MRK Small Lever` | 1330 |  | `Lever`, `LogicBoolSender` |
| `MRK Wheel Bridge` | 61844 |  | `LogicFloatSender`, `RotatePickup`, `LogicFloatReceiver` |
| `MRK_activation_lever` | 35030 |  | `LogicBoolSender`, `LogicBoolReceiver`, `MRK_ActivationLever`, `NonClimbable` |
| `mrk_extensionBridge_01` | 34038 |  | `LogicFloatReceiver`, `NetworkedFloatStream` |
| `MRK_gate_01` | 3094 |  | `SlidingDoor`, `LogicBoolReceiver`, `NonClimbable` |
| `MRK_gate_01` | 34734 |  | `SlidingDoor`, `LogicBoolReceiver`, `NavmeshCut` |
| `MRK_gate_01 1.5x Variant` | 64136 |  | `SlidingDoor`, `LogicBoolReceiver`, `NonClimbable` |
| `MRK_gate_02` | 54328 |  | `SlidingDoor`, `LogicBoolReceiver`, `NavmeshCut`, `NonClimbable` |
| `MRK_heartReceptacle_01` | 9566 |  | `LogicBoolSender`, `OneTimeUpgradeInteraction`, `NonClimbable` |
| `mrk_large_lift_01` | 28708 |  | `LogicBoolReceiver` |
| `mrk_lift_01` | 45646 |  | `MovingPlatform`, `LogicBoolReceiver` |
| `mrk_puzzleCore_symbol_01` | 48100 |  | `ColorLerp`, `PropertyBlockColorAccessor`, `LogicBoolReceiver` |
| `mrk_puzzleCore_symbol_02` | 48102 |  | `ColorLerp`, `PropertyBlockColorAccessor`, `LogicBoolReceiver` |
| `MRK_TeleporterOut` | 49418 |  | `TeleportationPoint`, `LogicVector3Receiver`, `LogicVector3Sender`, `PositionProvider` |
| `One Time Upgrade Station Health` | 46992 |  | `OneTimeUpgradeInteraction`, `HandHoverPoint`, `Interactable`, `LogicBoolSender` |
| `PlaceItemPuzzleNoDock` | 12962 |  | `LogicBoolSender`, `PlaceItemNoDockPuzzleLogic` |
| `PlaceItemPuzzleNoDockFire` | 64858 |  | `LogicBoolSender`, `PlaceItemNoDockFirePuzzleLogic` |
| `PlayerInAreaLogic` | 11982 |  | `PlayerDetect`, `LogicBoolSender` |
| `Preset Loot Module` | 33532 | no | `PresetLootModule`, `LogicBoolReceiver` |
| `Puzzle Orb Restrictor` | 29276 |  | `PositionRestrictor`, `LogicBoolReceiver` |
| `Puzzle Pillar with Wheel Bridge` | 15908 |  | `LogicFloatReceiver` |
| `Rope Pully Puzzle` | 51434 |  | `LogicBoolSender`, `LogicFloatSender`, `LogicFloatReceiver` |
| `Ruins Elevator Puzzle Square Crystal Pillar` | 3512 |  | `LogicFloatReceiver` |
| `Ruins Hand Touch Activator` | 1002 |  | `Interactable`, `HandHoverPoint`, `LogicBoolSender` |
| `Ruins Sliding Wall Puzzle Square` | 42494 |  | `SlidingDoor`, `LogicBoolReceiver`, `NavmeshCut` |
| `Stalactite pillar` | 3944 |  | `AmplifyImpostor`, `StalactiteFall`, `LogicBoolReceiver` |
| `Steam Spray` | 53376 |  | `TimedEvent`, `DelayedEvent`, `LogicBoolReceiver` |
| `Teleporter Puzzle` | 19164 |  | `TeleportationPoint`, `LogicVector3Receiver`, `LogicVector3Sender`, `PositionProvider` |
| `TeleportOnTrueLogic` | 18260 |  | `TeleportationPoint`, `LogicBoolReceiver` |
| `TimerLogic` | 18490 |  | `TimerLogic`, `LogicBoolReceiver`, `LogicBoolSender` |
| `WheelBridge` | 7252 |  | `LogicFloatSender`, `RotatePickup`, `LogicFloatReceiver` |
| `WheelPuzzle` | 52364 |  | `LogicFloatSender`, `RotatePickup`, `LogicFloatReceiver`, `LogicBoolSender` |

## World and cave pieces

| Prefab | Hash | Spawn command | Main scripts |
| --- | --- | --- | --- |
| `Cave Layer Chunk` | 61672 | no | `CaveLayerStreamer`, `CaveLayerChunk`, `Ecosystem` |
| `Cave Layer Generation` | 61664 | no | `GenerationBase` |
| `Crane Center Piece` | 25456 |  | `StructurePart`, `CaveLayerStaticObject` |
| `Crate` | 36180 |  | `StructurePart`, `GeneratedLoot`, `CaveLayerStaticObject` |
| `Crater Gcore Dynamic` | 21218 |  |  |
| `Crystal Structure Rocks` | 34144 |  | `CaveLayerStaticObject` |
| `Descent Shaft Gcore Elevator Dynamic` | 52804 |  |  |
| `Descent Shaft Gcore Floor Diggable Dynamic` | 18120 |  |  |
| `Descent Shaft Gcore Floor Mining Boulder Dynamic` | 6308 |  |  |
| `Descent Shaft Gcore Wall Wyrm Dynamic` | 33338 |  |  |
| `Domain` | 22752 |  | `LocationChunk`, `Domain`, `GameObjectLifetimeScope` |
| `Green_Crystal_cluster_03` | 23836 |  | `CaveLayerStaticObject` |
| `Hebios Camp Barren Dynamic` | 56012 |  |  |
| `Hebios Camp Valley` | 42062 |  | `StaticGenerationParent`, `NavmeshCut` |
| `Hebios Storage Chest Gcore` | 31618 |  | `Chest`, `CurveElevation`, `PickupDockGroup` |
| `Hover Piece` | 50934 |  | `StructurePart`, `CaveLayerStaticObject` |
| `Mini Dungeon Trial` | 25636 | no | `CaveLayerChunk`, `Ecosystem`, `StaticCaveChunk` |
| `Mining Base Generator` | 6714 |  | `MiningBaseGenerator` |
| `Overhang Terrain Dynamic` | 5464 | no |  |
| `Pink_Crystal_cluster_02` | 15424 |  | `CaveLayerStaticObject` |
| `Placement Crate` | 36614 |  | `GeneratedLoot`, `PlacementObject`, `CaveLayerStaticObject` |
| `Random Placement Crate` | 8246 |  | `StructurePart`, `CaveLayerStaticObject` |
| `Rock Spire Gcore Dynamic` | 40128 |  |  |
| `Spire Gcore Dynamic` | 23472 |  |  |
| `Spread Spawner Dynamic` | 18426 |  |  |
| `Tall Support` | 46506 |  | `StructurePart`, `CaveLayerStaticObject` |
| `Tall Support Beams` | 5682 |  | `StructurePart`, `CaveLayerStaticObject` |
| `Temp Dynamic Wall` | 31628 |  |  |
| `TEMP Watch Tower Spawner` | 44032 | no | `StaticGenerationParent` |
| `Turabada Hub Dynamic` | 48478 |  |  |
| `Turabada Trial` | 13222 | no | `CaveLayerChunk`, `Ecosystem`, `StaticCaveChunk` |
| `Water Well Dynamic` | 14364 | no | `LiquidContainer`, `LiquidHeatAreaController`, `HeatPointCollection` |
| `Water Well Tunnel Dynamic` | 12356 |  | `PickupDockGroup`, `RejectDockArea` |
| `Wooden Passage Dynamic` | 43806 |  |  |
| `woodenPlatform_1x1` | 50942 |  | `StructurePart`, `CaveLayerStaticObject` |
| `woodenPlatform_1x1 Torch` | 64260 |  | `StructurePart`, `DockByDefault`, `CaveLayerStaticObject` |
| `woodenPlatform_1x2` | 50950 |  | `StructurePart`, `CaveLayerStaticObject` |
| `woodenPlatform_Railings_1x1` | 50946 |  | `StructurePart`, `CaveLayerStaticObject` |
| `woodenPlatform_Stairs_02` | 50940 |  | `StructurePart`, `CaveLayerStaticObject` |
| `woodenPlatform_T2x1` | 50944 |  | `StructurePart`, `CaveLayerStaticObject` |
| `woodenPlatform_T2x1 1` | 50930 |  | `StructurePart`, `CaveLayerStaticObject` |
| `woodenPlatform_W2x2` | 50932 |  | `StructurePart`, `CaveLayerStaticObject` |
| `woodenPlatform_W2x3` | 10176 |  | `StructurePart`, `CaveLayerStaticObject` |
| `woodenPlatform_W2x4` | 33664 |  | `StructurePart`, `CaveLayerStaticObject` |
| `Wyrm Trial` | 33748 | no | `CaveLayerChunk`, `Ecosystem`, `StaticCaveChunk` |

## Effect

| Prefab | Hash | Spawn command | Main scripts |
| --- | --- | --- | --- |
| `Example VFX Controller` | 25600 | no | `ExampleEventPlayer`, `GenericVFXController` |
| `Flame Step Effect Proto` | 24020 |  | `DelayedEvent` |
| `Flame Step Effect Proto Lava Test Long Variant` | 54460 |  | `DelayedEvent` |
| `Flame Step Effect Proto Lava Test Variant` | 41226 |  | `DelayedEvent` |
| `Flame Step Effect Proto Vent test` | 5142 |  | `DelayedEvent` |
| `Flaming Coalbed` | 13480 |  | `DelayedEvent` |
| `Greater Gotera Charge Explosion` | 5316 |  | `Explosive`, `DelayedEvent` |
| `Proto Greater Got Bramble Wall` | 34050 |  | `DelayedEvent` |
| `Turabada Copper Destroy Variant` | 34850 |  | `DelayedEvent` |
| `Turabada Destroy` | 37508 |  | `DelayedEvent` |
| `Turabada Gold Destroy Variant` | 15310 |  | `DelayedEvent` |
| `Turabada Iron Destroy Variant` | 42690 |  | `DelayedEvent` |
| `Turabada Large Destroy Variant` | 63178 |  | `DelayedEvent` |
| `Turabada Mythril Destroy Variant` | 45488 |  | `DelayedEvent` |
| `Turabada Short Destroy Variant` | 48002 |  | `DelayedEvent` |
| `Turabada Silver Destroy Variant` | 1960 |  | `DelayedEvent` |

## Debris or timed effect

| Prefab | Hash | Spawn command | Main scripts |
| --- | --- | --- | --- |
| `Ash Gotera Smoke` | 48860 |  | `NetworkDestroyTimed` |
| `Broken Box Piece` | 260 |  | `NetworkDestroyTimed`, `EmbeddableManager` |
| `Broken Breakable Root Piece Ground` | 43996 |  | `NetworkDestroyTimed` |
| `Broken Breakable Root Piece Short` | 43998 |  | `NetworkDestroyTimed` |
| `Broken Breakable Root Piece Thick` | 43994 |  | `NetworkDestroyTimed` |
| `Broken Breakable Root Piece Thin` | 44000 |  | `NetworkDestroyTimed` |
| `Broken Burnable Root Piece Ground` | 60406 |  | `NetworkDestroyTimed` |
| `Broken Burnable Root Piece Short` | 58460 |  | `NetworkDestroyTimed` |
| `Broken Burnable Root Piece Thick` | 64302 |  | `NetworkDestroyTimed` |
| `Broken Burnable Root Piece Thin` | 61492 |  | `NetworkDestroyTimed` |
| `Broken Crystal Piece 01` | 60484 |  | `NetworkDestroyTimed` |
| `Broken Crystal Piece 02` | 49198 |  | `NetworkDestroyTimed` |
| `Broken Crystal Piece 03` | 37046 |  | `NetworkDestroyTimed` |
| `Broken Crystal Piece 04` | 23220 |  | `NetworkDestroyTimed` |
| `Broken Vine Bunch Dead Piece` | 7264 |  | `NetworkDestroyTimed` |
| `Broken_ExplosionBoulder_Part_01` | 45514 |  | `NetworkDestroyTimed` |
| `Broken_ExplosionBoulder_Part_02` | 45518 |  | `NetworkDestroyTimed` |
| `Broken_ExplosionBoulder_Part_03` | 45516 |  | `NetworkDestroyTimed` |
| `Broken_ExplosionBoulder_Part_04` | 45512 |  | `NetworkDestroyTimed` |
| `Broken_ExplosionBoulder_Part_05` | 45520 |  | `NetworkDestroyTimed` |
| `Copper_Boulder_Parts` | 46024 |  | `NetworkDestroyTimed`, `ColliderGroup` |
| `Death Fern Poison Cloud` | 39240 |  | `NetworkDestroyTimed` |
| `Digging Dirt Parts` | 2538 |  | `NetworkDestroyTimed`, `ColliderGroup` |
| `Gold_Boulder_Parts` | 47738 |  | `NetworkDestroyTimed`, `ColliderGroup` |
| `Gravestone Parts` | 2596 |  | `NetworkDestroyTimed`, `ColliderGroup` |
| `Iron_Boulder_Parts` | 18070 |  | `NetworkDestroyTimed`, `ColliderGroup` |
| `Material Box Pieces` | 42982 |  | `NetworkDestroyTimed` |
| `Mythril_Boulder_Parts` | 43522 |  | `NetworkDestroyTimed`, `ColliderGroup` |
| `Poison Cloud` | 52444 |  | `NetworkDestroyTimed`, `SoundSource` |
| `Silver_Boulder_Parts` | 17120 |  | `NetworkDestroyTimed`, `ColliderGroup` |
| `Storage Crate Parts` | 16574 |  | `NetworkDestroyTimed`, `ColliderGroup` |

## Static object (no scripts)

| Prefab | Hash | Spawn command | Main scripts |
| --- | --- | --- | --- |
| `Bramble Obstacle` | 59178 |  |  |
| `Campfire` | 63848 |  |  |
| `Campfire Infinite` | 63034 |  |  |
| `Campfire Weak` | 9276 |  |  |
| `Ceiling Lantern` | 682 |  |  |
| `Ceiling Lantern Lit` | 32476 |  |  |
| `Ceiling Light` | 8226 |  |  |
| `Cube` | 5262 |  |  |
| `Dummy Shelf Short` | 62404 |  |  |
| `Elevator` | 44898 |  |  |
| `Forge Training` | 33628 |  |  |
| `Generic Stone Touch` | 18062 | no |  |
| `Hanging Health Vine 01` | 52952 |  |  |
| `Hanging Health Vine 02` | 56796 |  |  |
| `Hanging Health Vine 03` | 53496 |  |  |
| `Healing Pod Plant` | 48826 |  |  |
| `Hot Coalbed` | 41234 |  |  |
| `Ladder` | 56168 |  |  |
| `Lava Pool` | 34696 |  |  |
| `Lectern Flat` | 45828 |  |  |
| `Lockbox Docks` | 2226 |  |  |
| `Long S Hook` | 20598 |  |  |
| `Micro Tutorial Portal` | 36840 |  |  |
| `MicroTutorial Orb Positioner` | 20074 | no |  |
| `MRK Hidden Door` | 20590 | no |  |
| `MRK Liftable Pipe Gate` | 9344 |  |  |
| `MRK Smelter Gem Pedestal 1` | 33006 |  |  |
| `MRK Smelter Gem Pedestal 2` | 56376 |  |  |
| `MRK Smelter Gem Pedestal 3` | 57516 |  |  |
| `MT_SFXSting` | 50578 | no |  |
| `Navigation_wheel` | 20416 |  |  |
| `pot_01` | 44028 | no |  |
| `pumpkin_flower` | 3116 |  |  |
| `Ruins Elevator Puzzle Square` | 27582 |  |  |
| `Ruins Elevator Puzzle Square Large Variant` | 4192 |  |  |
| `Ruins Elevator Puzzle Square Pillar Variant` | 22284 |  |  |
| `Ruins Pillar Crystal` | 58240 |  |  |
| `Smelter gem 2 item pedestal` | 56098 |  |  |
| `Smelter gem 3 item pedestal` | 63036 |  |  |
| `SnowfallEffect` | 16090 | no |  |
| `Spawn Point` | 63844 |  |  |
| `Spriggull Nest` | 16680 |  |  |
| `Static Content - Blacksmithing - Step 1 - SpawnStep` | 61364 | no |  |
| `Static Content - Blacksmithing - Step 2 - PlayerGrabbedPrefab` | 59680 | no |  |
| `Static Content - Blacksmithing - Step 3 - PrefabInPositionStep` | 57404 | no |  |
| `Static Content - Blacksmithing - Step 4 - PlayerGrabbedPrefab` | 55252 | no |  |
| `Static Content - Blacksmithing - Step 5 - PlayerGrabbedPrefab` | 52052 | no |  |
| `Static Content - Blacksmithing - Step 6 - SpawnStep` | 47858 | no |  |
| `Static Content - Blacksmithing - Step 7 - ItemForgedStep` | 44212 | no |  |
| `Static Content - Blacksmithing - Step 8 - SpawnStep` | 40854 | no |  |
| `Storage Chest Static Content TrialProxy` | 44136 | no |  |
| `Tab Lever` | 3354 | no |  |
| `tallPot` | 23320 | no |  |
| `Teleport Point` | 33542 | no |  |
| `Test Fire` | 31268 |  |  |
| `Test Serializable Large` | 57330 | no |  |
| `Test Serializable Small` | 51498 | no |  |
| `Turabada Spawner Automatic` | 51652 |  |  |
| `Tutorial Fullness Hand Touch Variant` | 53250 | no |  |
| `Tutorial Health Hand Touch Variant` | 58834 | no |  |
| `Tutorial Nutrition Hand Touch Variant` | 64420 | no |  |
| `Tutorial Quick Access Hand Touch Variant` | 50422 | no |  |
| `Vine Boulder 01` | 31088 |  |  |
| `Wall Shelf` | 15548 |  |  |
| `Wall Shelf_Tutorial` | 19868 |  |  |
| `Wall Torch Holder Puzzle` | 30196 |  |  |
| `Weight Gauge` | 48306 |  |  |
| `Wyrm Boulder 01` | 37174 |  |  |
