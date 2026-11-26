---
title: Items and materials
description: Every Item asset with its weight, dock size, material and durability, plus the physical materials.
sidebar_position: 3
---

# Items and materials

An `Item` (`Alta.Inventory.Item`, a `HashedGeneralValue<Item>`) is the asset that describes something you can pick up. The prefab's `Pickup` points at it, and the item points back at its prefab through `prefabHash`. Like recipes and stats, items are `HashedGeneralValue` assets with a hash of their own.

456 items, 29 physical materials.

## Items

- **Hash** is the item's own hash. **Prefab** is the prefab its `prefabHash` names, with that hash.
- **Weight** is `Item.weight`.
- **Size** is `Item.size`, used when the item docks or joins a crafted object. Blank means the item has no size (`HasSize` is false).
- **Stack** is `dockedStackSize`, shown only for stackable items.
- **Material** is the `physicalMaterial` on the prefab's root (`PhysicalMaterialPart` or the melting model). Crafted parts change material when they're made, so this is only the default.
- **Durability** is the `DurabilitySettings` on the prefab's `DurabilityModule`, with its value.
- **Components** are the item's `ItemComponent` sub-assets (cooking stage, fuel, mould and so on).

| Item | Hash | Prefab | Category | Weight | Size | Stack | Material | Durability | Tags | Components |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `Apple Core Burnt` | 17642 | `Apple Core Burnt` (50484) | `Food` | 0.015 |  | 30 |  |  | `All`, `Small`, `Projectile` | cooking stage |
| `Apple Core Cooked` | 17634 | `Apple Core Cooked` (15500) | `Food` | 0.015 |  | 30 |  |  | `All`, `Small`, `Projectile` | cooking stage |
| `Apple Core Ripe` | 18406 | `Apple Core Ripe` (902) | `Food` | 0.015 |  | 30 |  |  | `All`, `Small`, `Projectile` | cooking stage |
| `Apple Core Unripe` | 25584 | `Apple Core Unripe` (31614) | `Food` | 0.015 |  | 30 |  |  | `All`, `Small`, `Projectile` | cooking stage |
| `Apple Full Burnt` | 14896 | `Apple Full Burnt` (62102) |  | 0.05 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `Apple Full Cooked` | 12286 | `Apple Full Cooked` (14844) |  | 0.05 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `Apple Full Ripe` | 9502 | `Apple Full Ripe` (40010) |  | 0.05 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile`, `Embeddable Surface` | cookable, cooking stage |
| `Apple Full Unripe` | 6606 | `Apple Full Unripe` (6740) |  | 0.05 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile`, `Embeddable Surface` | cookable, cooking stage |
| `Apple Half Burnt` | 3798 | `Apple Half Burnt` (65526) |  | 0.02 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `Apple Half Cooked` | 1342 | `Apple Half Cooked` (2000) |  | 0.02 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `Apple Half Ripe` | 64422 | `Apple Half Ripe` (7278) |  | 0.02 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `Apple Half Unripe` | 61966 | `Apple Half Unripe` (62012) |  | 0.02 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `Arrow` | 25064 | `Arrow` (56460) | `Complete Tool` | 0.35 |  | 30 | `Oak` | `1 - Very Weak Durability` (10) | `Small`, `All`, `Stackable`, `Arrow` |  |
| `Arrow Dud Training` | 4268 | `Arrow Training Dud` (8858) | `Complete Tool` | 0.35 |  | 30 |  |  | `Training Resource` |  |
| `Arrow Shaft` | 39982 | `Arrow Shaft Wooden` (29772) | `Complete Tool` | 0.125 |  | 30 | `Oak` | `1 - Very Weak Durability` (10) | `Small`, `All`, `Stackable`, `Arrow` |  |
| `Arrow Shaft Training` | 3016 | `Arrow Shaft Wooden Training` (36772) | `Complete Tool` | 0.5 |  | 30 |  |  | `Training Resource` |  |
| `Arrow Training` | 4018 | `Arrow` (56460) | `Complete Tool` | 0.35 |  | 30 | `Oak` | `1 - Very Weak Durability` (10) | `Arrow`, `Training Resource` |  |
| `Ash Tree Seed` | 38612 | `Ash Tree Seed` (35274) | `Resource` | 0.02 |  | 15 |  |  | `Small`, `All`, `Stackable`, `Forage` |  |
| `Axe Head Curve` | 30918 | `Axe Head Curve` (50322) | `Weapon End` | 0.75 | 4 |  | `Iron` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Weapon Part Standard` | mould |
| `Axe Head Felling` | 28524 | `Axe Head Felling` (9918) | `Weapon End` | 0.35 | 4 |  | `Iron` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Weapon Part Standard` | mould |
| `Axe Head GreatCurve` | 4200 | `Axe Head GreatCurve` (10056) | `Weapon End` | 2 | 10 |  | `Iron` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Weapon Part Standard` | mould |
| `Axe Head LShape` | 34982 | `Axe Head LShape` (17400) | `Weapon End` | 0.8 | 4 |  | `Iron` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Weapon Part Standard` | mould |
| `Babu Leg Bone` | 3636 | `Babu Leg Bone` (32526) | `Resource` | 2 |  | 30 |  |  | `All`, `Small` |  |
| `Babu Leg Full Burnt` | 52634 | `Babu Leg Full Burnt` (64844) |  | 4 |  | 10 |  |  | `Cookable`, `All`, `Small` | cookable, cooking stage |
| `Babu Leg Full Cooked` | 48126 | `Babu Leg Full Cooked` (42916) |  | 4 |  | 10 |  |  | `Cookable`, `All`, `Small` | cookable, cooking stage |
| `Babu Leg Full Ripe` | 40732 | `Babu Leg Full Ripe` (2562) |  | 4 |  | 10 |  |  | `Cookable`, `All`, `Small` | cookable, cooking stage |
| `Babu Leg Half Burnt` | 50224 | `Babu Leg Half Burnt` (50328) |  | 1 |  | 20 |  |  | `Cookable`, `All`, `Small` | cookable, cooking stage |
| `Babu Leg Half Cooked` | 50232 | `Babu Leg Half Cooked` (50326) |  | 1 |  | 20 |  |  | `Cookable`, `All`, `Small` | cookable, cooking stage |
| `Babu Leg Half Ripe` | 50240 | `Babu Leg Half Ripe` (50252) |  | 1 |  | 20 |  |  | `Cookable`, `All`, `Small` | cookable, cooking stage |
| `Bag` | 52218 | `Bag` (35324) | `Complete Tool` | 5 | 4 |  |  |  | `Back`, `Wall Hangable`, `Bag` |  |
| `Barrel Bag` | 24794 | `Barrel Bag` (19354) | `Complete Tool` | 2 | 4 |  |  |  | `Back`, `Wall Hangable`, `Bag` |  |
| `Birch Tree Seed` | 38618 | `Birch Tree Seed` (55274) | `Resource` | 0.02 |  | 15 |  |  | `Small`, `All`, `Stackable`, `Forage` |  |
| `Blueberry Bite Burnt` | 53602 |  |  | 0.05 |  |  |  |  |  | cooking stage |
| `Blueberry Bite Cooked` | 51290 |  |  | 0.05 |  |  |  |  |  | cooking stage |
| `Blueberry Bite Ripe` | 48944 |  |  | 0.05 |  |  |  |  |  | cooking stage |
| `Blueberry Bite Unripe` | 46598 |  |  | 0.05 |  |  |  |  |  | cooking stage |
| `Blueberry Full Burnt` | 49844 | `Blueberry Full Burnt` (49890) |  | 0.02 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `Blueberry Full Cooked` | 47422 | `Blueberry Full Cooked` (47468) |  | 0.02 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `Blueberry Full Ripe` | 44966 | `Blueberry Full Ripe` (45012) |  | 0.02 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `Blueberry Full Unripe` | 42510 | `Blueberry Full Unripe` (42556) |  | 0.02 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `Bone Spike` | 13970 | `Small Bone Spike` (61488) | `Tool Part` | 0.05 | 0 | 30 |  | `3 - Standard Durability` (60) | `All`, `Smelter Autodock`, `Forage`, `Small` |  |
| `Book` | 15094 | `Book` (44174) | `Utility` | 0 |  |  |  |  |  |  |
| `Bow` | 15284 | `Bow` (56546) | `Complete Tool` | 0.6 |  |  | `Oak` | `4 - Strong Durability` (130) | `Back`, `All`, `Physical`, `Tool` |  |
| `Bow Blade` | 11760 | `Bow Blade` (27416) | `Weapon End` | 0.35 | 4 |  | `Iron` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Weapon Part Standard` | mould |
| `Bow String` | 52926 |  |  | 1 |  |  |  |  | `Bow String` |  |
| `Bronze Ingot` | 28640 | `Bronze Alloy Ingot` (26316) | `Resource` | 1 |  | 30 |  |  | `All`, `Small`, `Stackable`, `Ingot` | ingot |
| `Brown Mushroom Shield` | 59166 | `Brown Mushroom Shield` (17258) | `Complete Tool` | 1 | 4 |  |  | `3 - Standard Durability` (60) | `All`, `Back`, `Physical`, `Tool`, `Wall Hangable`, `Embeddable Surface` | impact stat |
| `Bung` | 20048 | `Bung` (8050) | `Utility` | 0 |  | 1 |  |  | `All`, `Small` |  |
| `Buran Resin` | 19046 | `Buran Resin` (15570) | `Resource` | 0.05 | 1 | 30 | `Straw` |  | `Small`, `All`, `Stackable`, `Projectile`, `Forage` |  |
| `Camera` | 35382 |  | `Complete Tool` | 1 |  |  |  |  | `Stand Attachable`, `All` |  |
| `Candy Cane` | 27268 | `Candy Cane` (27314) |  | 0.1 |  | 30 |  |  | `All`, `Small` |  |
| `Candy Cane Knife` | 8088 | `Candy Cane Knife` (7676) | `Complete Tool` | 3 | 1 | 30 |  | `High Chance` (0.3 chance) | `All`, `Small`, `Stackable`, `Projectile` |  |
| `Carrot Full Burnt` | 62276 | `Carrot Full Burnt` (62634) | `Food` | 0.06 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, cooking stage |
| `Carrot Full Cooked` | 60384 | `Carrot Full Cooked` (60742) | `Food` | 0.06 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, cooking stage |
| `Carrot Full Ripe` | 58480 | `Carrot Full Ripe` (58838) | `Food` | 0.06 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, buried, cooking stage |
| `Carrot Full Unripe` | 56576 | `Carrot Full Unripe` (56934) | `Food` | 0.06 |  | 30 |  |  | `All`, `Small`, `Projectile` | cookable, cooking stage |
| `Carrot Half Burnt` | 64088 | `Carrot Half Burnt` (64146) | `Food` | 0.055 |  | 30 |  |  | `All`, `Small`, `Projectile` | cookable, cooking stage |
| `Carrot Half Cooked` | 63700 | `Carrot Half Cooked` (63758) | `Food` | 0.055 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, cooking stage |
| `Carrot Half Ripe` | 63296 | `Carrot Half Ripe` (63354) | `Food` | 0.055 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, buried, cooking stage |
| `Carrot Half Unripe` | 62892 | `Carrot Half Unripe` (62950) | `Food` | 0.055 |  | 30 |  |  | `All`, `Small`, `Projectile` | cookable, cooking stage |
| `Carsi Ingot` | 24084 | `Carsi Ingot` (60868) | `Resource` | 1 |  | 30 | `Carsi Alloy` |  | `All`, `Small`, `Stackable`, `Ingot` | ingot |
| `Carved Pumpkin Smelter` | 41856 | `Carved Pumpkin Smelter` (27322) |  | 2 |  |  |  |  | `All` |  |
| `Cauldron` | 25660 | `Cauldron Medium` (45082) | `Utility` | 1.5 |  |  | `Iron` |  | `All`, `Hangable` |  |
| `Chisel` | 3168 | `Chisel` (44380) | `Weapon End` | 0.1 | 1 |  | `Iron` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Weapon Part Standard` | mould |
| `Chocolate Easter Egg` | 64118 | `Chocolate Easter Egg` (30164) | `Resource` | 0.05 | 1 | 30 |  |  | `All`, `Small`, `Stackable`, `Projectile` |  |
| `Clipboard` | 39588 |  | `Complete Tool` | 1 |  |  |  |  | `All`, `Medium Tool`, `Stand Attachable` |  |
| `Coal` | 42618 | `Coal` (19658) | `Resource` | 0.05 |  | 30 |  |  | `All`, `Small`, `Stackable`, `Fuel`, `Projectile`, `Ore`, `Pedestal Placeable` | fuel |
| `Coal Ash` | 42736 | `Coal Ash` (2792) | `Resource` | 0.02 |  | 30 |  |  | `All`, `Small`, `Stackable`, `Fuel`, `Projectile` | fuel |
| `Coal Training` | 45430 | `Coal Training` (51610) | `Resource` | 0.03 |  | 30 |  |  | `Training Resource` |  |
| `Coin` | 39398 | `GoldCoin` (61648) | `Resource` | 0.02 |  | 100 | `Gold` |  | `All`, `Small`, `Projectile`, `Currency` |  |
| `Copper Ingot` | 5802 | `Copper Ingot` (32850) | `Resource` | 1 |  | 30 | `Copper` |  | `All`, `Small`, `Stackable`, `Ingot` | ingot |
| `Copper Ore` | 42614 | `Copper Ore` (2484) | `Resource` | 0.05 |  | 50 |  |  | `All`, `Small`, `Stackable`, `Ore`, `Projectile`, `Pedestal Placeable` |  |
| `Craft Piece Side 1Way Item` | 29156 | `Craft Piece Side 1Way` (1274) | `Tool Part` | 0.3 | 0 | 15 | `Iron` | `3 - Standard Durability` (60) | `All`, `Medium Tool`, `Stackable`, `Weapon Part Standard` |  |
| `Craft Piece Side 2Way Item` | 29164 | `Craft Piece Side 2Way` (24046) | `Tool Part` | 0.6 | 0 | 15 | `Iron` | `3 - Standard Durability` (60) | `All`, `Medium Tool`, `Stackable`, `Weapon Part Standard` |  |
| `Craft Piece Side 4Way Item` | 29172 | `Craft Piece Side 4Way` (32160) | `Tool Part` | 1.2 | 0 | 15 | `Iron` | `3 - Standard Durability` (60) | `All`, `Medium Tool`, `Stackable`, `Weapon Part Standard` |  |
| `Craft Piece SideFlat 1Way Item` | 29148 | `Craft Piece Side Flat 1Way` (38606) | `Tool Part` | 0.6 | 0 | 15 | `Iron` | `3 - Standard Durability` (60) | `All`, `Medium Tool`, `Stackable`, `Weapon Part Standard` |  |
| `Craft Piece SideFlat 2Way Item` | 29122 | `Craft Piece SideFlat 2Way` (26748) | `Tool Part` | 1.2 | 0 | 15 | `Iron` | `3 - Standard Durability` (60) | `All`, `Medium Tool`, `Stackable`, `Weapon Part Standard` |  |
| `Crystal Gem Blue` | 45754 | `Crystal Gem Blue` (8002) | `Magical Resource` | 0.175 |  | 50 |  |  | `All`, `Small`, `Stackable`, `Projectile`, `Pedestal Placeable` |  |
| `Crystal Lance Blue` | 45046 | `Crystal Lance Blue` (23400) | `Complete Tool` | 4 | 4 |  |  | `1 - Very Weak Durability` (10) | `Back`, `All`, `Medium Tool` |  |
| `Crystal Pick Blue` | 8752 | `Crystal Pick Blue` (2924) | `Complete Tool` | 2 | 4 |  |  | `1 - Very Weak Durability` (10) | `All`, `Medium Tool` |  |
| `Crystal Shard Blue` | 7824 | `Crystal Shard Blue` (7092) | `Tool Part` | 0.1 | 0 | 90 |  | `1 - Very Weak Durability` (10) | `All`, `Medium Tool` |  |
| `Crystal Sword Blue` | 21398 | `Crystal Sword Blue` (56894) | `Complete Tool` | 2 | 4 |  |  | `1 - Very Weak Durability` (10) | `Medium Tool`, `All` |  |
| `Curled Wooden Handle` | 16158 | `Curled Wooden Handle` (64172) | `Tool Part` | 1.3 | 4 |  | `Oak` | `3 - Standard Durability` (60) | `All`, `Medium Tool`, `Tool Handle`, `Wall Hangable`, `Hangable` |  |
| `Dagger Blade Curved` | 13684 | `Dagger Blade Curved` (9704) | `Weapon End` | 0.2 | 1 |  | `Iron` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Weapon Part Standard` | mould |
| `Dagger Blade Edgy` | 59506 | `Dagger Blade Edgy` (49402) | `Weapon End` | 0.15 | 1 |  | `Iron` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Weapon Part Standard` | mould |
| `Dagger Blade Round` | 38432 | `Dagger Blade Round` (56720) | `Weapon End` | 0.18 | 1 |  | `Iron` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Weapon Part Standard` | mould |
| `Dagger Blade Wide` | 27432 | `Dagger Blade Wide` (54482) | `Weapon End` | 0.3 | 1 |  | `Iron` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Weapon Part Standard` | mould |
| `Dais Meat Full Burnt` | 47254 | `Dais Meat Full Burnt` (41870) |  | 1 |  | 10 |  |  | `Cookable`, `All`, `Small` | cookable, cooking stage |
| `Dais Meat Full Cooked` | 47262 | `Dais Meat Full Cooked` (43452) |  | 1 |  | 10 |  |  | `Cookable`, `All`, `Small` | cookable, cooking stage |
| `Dais Meat Full Ripe` | 47270 | `Dais Meat Full Ripe` (47394) |  | 1 |  | 10 |  |  | `Cookable`, `All`, `Small` | cookable, cooking stage |
| `Dais Meat Half Burnt` | 47278 | `Dais Meat Half Burnt` (43674) |  | 0.25 |  | 20 |  |  | `Cookable`, `All`, `Small` | cookable, cooking stage |
| `Dais Meat Half Cooked` | 47286 | `Dais Meat Half Cooked` (43502) |  | 0.25 |  | 20 |  |  | `Cookable`, `All`, `Small` | cookable, cooking stage |
| `Dais Meat Half Ripe` | 47294 | `Dais Meat Half Ripe` (43294) |  | 0.25 |  | 20 |  |  | `Cookable`, `All`, `Small` | cookable, cooking stage |
| `Darksteel Ingot` | 50292 | `Darksteel Ingot` (57556) | `Resource` | 1 |  | 30 | `Darksteel Alloy` |  | `All`, `Small`, `Stackable`, `Ingot` | ingot |
| `Debug Net` | 65102 |  (12632) | `Utility` | 10 |  |  |  |  | `Back` |  |
| `DebugArrow` | 40108 | `DebugArrow` (34892) | `Complete Tool` | 1 |  | 30 |  | `1 - Very Weak Durability` (10) | `Small`, `All`, `Stackable`, `Arrow` |  |
| `DebugPlayerStone` | 13618 | `DebugPlayerStone` (62120) | `Resource` | 1 | 1 | 30 |  | `3 - Standard Durability` (60) | `All`, `Small`, `Stackable`, `Projectile`, `Pedestal Placeable` |  |
| `DebugTool` | 4248 |  (16078) |  | 1 |  |  |  |  | `All`, `Tool` |  |
| `Dragonfly` | 15142 | `Dragonfly` (54404) |  | 1 |  |  |  |  | `Projectile`, `Critter` |  |
| `Dragonfly Corpse` | 47362 | `Dragonfly Corpse` (43552) | `Resource` | 0.01 |  | 30 |  |  | `All`, `Small`, `Stackable`, `Projectile`, `Pedestal Placeable` |  |
| `Duplicate Paper` | 5490 | `Paper` (37066) | `Pages` | 0.01 |  |  |  |  | `Paper` |  |
| `Dynamite` | 6856 | `Dynamite` (31326) | `Utility` | 0.4 |  | 5 |  |  | `All`, `Small`, `Stackable`, `Projectile` |  |
| `Easter Egg 01` | 49422 | `Easter Egg 01` (55462) | `Resource` | 0.05 | 1 | 30 |  |  | `All`, `Small`, `Stackable`, `Projectile`, `Forage` |  |
| `Easter Egg 02` | 32876 | `Easter Egg 02` (57998) | `Resource` | 0.05 | 1 | 30 |  |  | `All`, `Small`, `Stackable`, `Projectile`, `Forage` |  |
| `Easter Egg 03` | 32884 | `Easter Egg 03` (20128) | `Resource` | 0.05 | 1 | 30 |  |  | `All`, `Small`, `Stackable`, `Projectile`, `Forage` |  |
| `Easter Egg 04` | 32892 | `Easter Egg 04` (21558) | `Resource` | 0.1 | 1 | 30 |  |  | `All`, `Small`, `Stackable`, `Projectile`, `Forage` |  |
| `Edge Curved Blade` | 27754 | `Edge Curved Blade` (11938) | `Weapon End` | 0.2 | 4 |  | `Iron` | `3 - Standard Durability` (60) | `All`, `Medium Tool`, `Weapon Part Standard` | mould |
| `Edge Long Curve Blade` | 31890 | `Edge Blade Long Curve` (17478) | `Weapon End` | 0.35 | 4 |  | `Iron` | `3 - Standard Durability` (60) | `All`, `Medium Tool`, `Weapon Part Standard` | mould |
| `Edge Short Curve Blade` | 37942 | `Edge Short Curve Blade` (20892) | `Weapon End` | 0.15 | 4 |  | `Iron` | `3 - Standard Durability` (60) | `All`, `Medium Tool`, `Weapon Part Standard` | mould |
| `Edge Straight Blade` | 34578 | `Edge Straight Blade` (30124) | `Weapon End` | 0.2 | 4 |  | `Iron` | `3 - Standard Durability` (60) | `All`, `Medium Tool`, `Weapon Part Standard` | mould |
| `Eggplant Full Burnt` | 54948 | `Eggplant Full Burnt` (55030) | `Food` | 0.12 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, cooking stage |
| `Eggplant Full Cooked` | 54424 | `Eggplant Full Cooked` (54506) | `Food` | 0.12 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, cooking stage |
| `Eggplant Full Ripe` | 53900 | `Eggplant Full Ripe` (53982) | `Food` | 0.12 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, cooking stage |
| `Eggplant Full Unripe` | 53376 | `Eggplant Full Unripe` (53458) | `Food` | 0.12 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, cooking stage |
| `Eggplant Half Burnt` | 62488 | `Eggplant Half Burnt` (62546) | `Food` | 0.1 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, cooking stage |
| `Eggplant Half Cooked` | 62084 | `Eggplant Half Cooked` (62142) | `Food` | 0.1 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, cooking stage |
| `Eggplant Half Ripe` | 61680 | `Eggplant Half Ripe` (61738) | `Food` | 0.1 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, cooking stage |
| `Eggplant Half Unripe` | 61276 | `Eggplant Half Unripe` (61334) | `Food` | 0.1 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, cooking stage |
| `Evinon Steel Ingot` | 32224 | `Evinon Steel Ingot` (32198) | `Resource` | 1 |  | 30 | `Evinon Steel Alloy` |  | `All`, `Small`, `Stackable`, `Ingot` | ingot |
| `Feather Red Training` | 3900 | `Feather Red Training` (80) | `Resource` | 0.3 |  | 30 |  |  | `Training Resource` |  |
| `Fingernails` | 23374 |  |  | 1 |  |  |  |  |  |  |
| `Firebug` | 10252 | `Firebug` (40478) |  | 1 |  |  |  |  | `Projectile`, `Critter` |  |
| `Firework` | 44786 | `Firework` (40748) | `Complete Tool` | 0.2 | 1 | 30 |  |  | `All`, `Small`, `Stackable`, `Projectile` |  |
| `Fixed Light Bag Attachment` | 52120 | `Fixed Light Bag Attachment` (1056) | `Utility` | 1 | 1 |  |  |  | `All` |  |
| `Flashlight Lantern` | 23926 | `Flashlight Lantern` (23642) | `Complete Tool` | 1.5 | 4 |  |  |  | `Medium Tool`, `All`, `Lantern`, `Wall Hangable`, `Hangable` |  |
| `Flint` | 42570 | `Flint` (39484) | `Resource` | 0.35 | 1 | 30 |  | `3 - Standard Durability` (60) | `All`, `Small`, `Stackable`, `Projectile` |  |
| `Flint Training` | 54560 | `Flint Training` (2356) | `Resource` | 0.35 | 1 | 30 |  |  | `Training Resource` |  |
| `Flower Blue` | 37312 | `Flower Blue` (23514) | `Resource` | 0.05 |  | 30 |  |  | `All`, `Small`, `Headpiece` |  |
| `Flower Red` | 59174 | `Flower Red` (61634) | `Resource` | 0.05 |  | 30 |  |  | `All`, `Small`, `Headpiece` |  |
| `Forage Bag Side Pouch Attachment` | 19570 | `Forage Side Pouch Attachment` (32874) | `Utility` | 1 |  |  |  |  | `All`, `Small` | storage |
| `Forage Basket Bag` | 39858 | `Forage Basket Bag` (39880) | `Complete Tool` | 0.75 | 4 |  |  |  | `Back`, `Wall Hangable`, `Bag` | storage |
| `Garlic Full Burnt` | 52876 | `Garlic Full Burnt` (52934) |  | 0.05 |  | 30 |  |  | `Projectile` | garnish, cooking stage |
| `Garlic Full Cooked` | 52472 | `Garlic Full Cooked` (52530) | `Food` | 0.05 |  | 30 |  |  | `All`, `Small`, `Cooking Garnish`, `Projectile` | garnish, cooking stage |
| `Garlic Full Ripe` | 51556 | `Garlic Full Ripe` (52126) | `Food` | 0.05 |  | 30 |  |  | `All`, `Small`, `Cooking Garnish`, `Projectile` | garnish, buried, cooking stage |
| `Garlic Full Unripe` | 49096 | `Garlic Full Unripe` (49162) |  | 0.05 |  | 30 |  |  | `Projectile` | garnish, cooking stage |
| `Garlic Half Burnt` | 60872 | `Garlic Half Burnt` (60930) |  | 0.025 |  | 30 |  |  | `Projectile` | garnish, cooking stage |
| `Garlic Half Cooked` | 60468 | `Garlic Half Cooked` (60526) | `Food` | 0.025 |  | 30 |  |  | `All`, `Small`, `Cooking Garnish`, `Projectile` | garnish, cooking stage |
| `Garlic Half Ripe` | 60064 | `Garlic Half Ripe` (60122) | `Food` | 0.025 |  | 30 |  |  | `All`, `Small`, `Cooking Garnish`, `Projectile` | garnish, cooking stage |
| `Garlic Half Unripe` | 59660 | `Garlic Half Unripe` (59718) |  | 0.025 |  | 30 |  |  | `Projectile` | garnish, cooking stage |
| `Geode Half 01` | 26494 | `Geode Tier 1 Half 01` (29678) |  | 0.125 |  | 5 |  |  | `All` |  |
| `Geode Half 02` | 26236 | `Geode Tier 1 Half 02` (38512) |  | 0.125 |  | 5 |  |  | `All` |  |
| `Geode Item` | 45388 | `Geode Tier 1` (59336) |  | 0.25 |  | 30 |  |  | `All` |  |
| `Gold Ingot` | 17090 | `Gold Ingot` (30092) | `Resource` | 1 |  | 30 | `Gold` |  | `All`, `Small`, `Stackable`, `Ingot` | ingot |
| `Gold Ore` | 5732 | `Gold Ore` (61650) | `Resource` | 0.1 |  | 50 |  |  | `All`, `Small`, `Stackable`, `Ore`, `Projectile`, `Pedestal Placeable` |  |
| `Gotera Seedling Orb` | 904 | `Gotera Seedling Orb` (59342) | `Resource` | 0.4 | 1 | 30 |  |  | `All`, `Small`, `Stackable`, `Projectile`, `Forage` |  |
| `Gourd Canteen` | 31744 | `Gourd Canteen` (29032) | `Utility` | 0.6 | 4 |  |  |  | `All`, `Tool`, `Short` |  |
| `Grass Clump` | 21722 | `Grass Clump` (57872) | `Resource` | 0.05 | 1 | 30 | `Straw` |  | `Small`, `All`, `Stackable`, `Projectile`, `Forage` |  |
| `Great Sword Blade` | 3666 | `Great Sword Blade` (63886) | `Weapon End` | 2 | 4 |  | `Iron` | `5 - Very Strong Durability` (170) | `All`, `Medium Tool`, `Weapon Part Standard` | mould |
| `Guard` | 6662 | `Guard` (51672) | `Tool Part` | 0.3 | 0 | 30 | `Iron` | `3 - Standard Durability` (60) | `All`, `Medium Tool`, `Stackable`, `Weapon Part Standard` | mould |
| `Guard Fancy` | 20860 | `Guard Fancy` (62140) | `Tool Part` | 0.2 | 0 | 30 | `Iron` | `3 - Standard Durability` (60) | `All`, `Medium Tool`, `Stackable`, `Weapon Part Standard` | mould |
| `Guard Handle` | 55222 | `Guard Handle` (43186) | `Tool Part` | 0.1 | 0 | 30 |  |  | `All`, `Medium Tool`, `Stackable` | mould |
| `Guard Hemisphere` | 45818 | `Guard Hemisphere` (34428) | `Tool Part` | 0.2 | 0 | 30 | `Iron` | `3 - Standard Durability` (60) | `All`, `Medium Tool`, `Stackable`, `Weapon Part Standard` | mould |
| `Guard Pointy End` | 50796 | `Guard Pointy Ends` (28160) | `Tool Part` | 0.2 | 0 | 30 | `Iron` | `3 - Standard Durability` (60) | `All`, `Medium Tool`, `Stackable`, `Weapon Part Standard` | mould |
| `Guard Round End` | 44282 | `Guard Round Ends` (21776) | `Tool Part` | 0.2 | 0 | 30 |  |  | `All`, `Medium Tool`, `Stackable` | mould |
| `Guard Straight End` | 27204 | `Guard Straight Ends` (17348) | `Tool Part` | 0.1 | 0 | 30 | `Iron` | `3 - Standard Durability` (60) | `All`, `Medium Tool`, `Stackable`, `Weapon Part Standard` | mould |
| `Hammer` | 4738 | `Hammer` (61660) | `Complete Tool` | 1 | 4 |  |  |  | `Medium Tool`, `All` |  |
| `Hammer Head` | 32966 | `Hammer Head` (43146) | `Weapon End` | 1 | 4 |  | `Iron` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Weapon Part Standard` | mould |
| `Hammer Head Small` | 14274 | `Hammer Head Small` (15476) | `Weapon End` | 0.5 | 4 |  | `Iron` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Weapon Part Standard` | mould |
| `Handle Bow` | 1058 | `Handle Bow` (64410) | `Tool Part` | 0.75 | 10 |  | `Oak` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Tool Handle` |  |
| `Handle Fist` | 46034 | `Handle Fist` (22988) | `Tool Part` | 1.2 | 1 |  | `Iron` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Tool Handle` |  |
| `Handle Large Branch` | 56114 | `Handle Large Branch` (61098) | `Tool Part` | 1.5 | 10 |  | `Oak` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Tool Handle` |  |
| `Handle Large Cool` | 40154 | `Handle Large Cool` (25290) | `Tool Part` | 3 | 10 |  | `Iron` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Tool Handle` |  |
| `Handle Large Standard` | 49052 | `Handle Large Standard` (43252) | `Tool Part` | 1 | 10 |  |  |  | `All`, `Medium Tool`, `Tool Handle` |  |
| `Handle Long Straight` | 61630 | `Handle Long Straight` (20300) | `Tool Part` | 1.75 | 10 |  | `Oak` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Tool Handle` |  |
| `Handle Medium Branch` | 56088 | `Handle Medium Branch` (61400) | `Tool Part` | 1 | 4 |  | `Oak` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Tool Handle` |  |
| `Handle Medium Cool` | 25450 | `Handle Medium Cool` (61856) | `Tool Part` | 1.35 | 4 |  | `Iron` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Tool Handle` |  |
| `Handle Medium Curved` | 22576 | `Handle Medium Curved` (19316) | `Tool Part` | 2 | 4 |  | `Iron` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Tool Handle` |  |
| `Handle Medium Ridged` | 39038 | `Handle Medium Ridged` (60598) | `Tool Part` | 1 | 4 |  |  |  | `All`, `Medium Tool`, `Tool Handle` |  |
| `Handle Medium Standard` | 8410 | `Handle Medium Standard` (41438) | `Tool Part` | 1 | 4 |  |  |  | `All`, `Medium Tool`, `Tool Handle` |  |
| `Handle Medium Straight` | 19768 | `Handle Medium Straight` (19180) | `Tool Part` | 1.2 | 4 |  | `Oak` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Tool Handle` |  |
| `Handle Round Fist` | 53676 | `Handle Round Fist` (3506) | `Tool Part` | 0.3 | 1 |  | `Oak` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Tool Handle`, `Short` |  |
| `Handle Short` | 34662 | `Handle Short` (42230) | `Tool Part` | 0.2 | 1 |  | `Oak` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Tool Handle`, `Short` |  |
| `Handle Short C Curve` | 36240 | `Handle Short C Curve` (34898) | `Tool Part` | 0.6 | 1 |  | `Iron` | `3 - Standard Durability` (60) | `All`, `Medium Tool`, `Tool Handle`, `Short` |  |
| `Handle Short Cool` | 61562 | `Handle Short Cool` (5920) | `Tool Part` | 0.8 | 1 |  | `Iron` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Tool Handle`, `Short` |  |
| `Handle Short Pointy End` | 19208 | `Handle Short Pointy End` (28636) | `Tool Part` | 0.5 | 1 |  | `Iron` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Tool Handle`, `Short` |  |
| `Handle Short S Curve` | 32694 | `Handle Short S Curve` (27820) | `Tool Part` | 1 | 1 |  |  |  | `All`, `Medium Tool`, `Tool Handle` |  |
| `Handle Short Taper` | 45036 | `Handle Short Taper` (24198) | `Tool Part` | 1 | 1 |  |  |  | `All`, `Medium Tool`, `Tool Handle` |  |
| `Handle Spear` | 2572 | `Handle Spear` (20640) | `Tool Part` | 1 | 10 |  |  |  | `All`, `Medium Tool`, `Tool Handle` |  |
| `Handle Tonfa` | 61254 | `Handle Tonfa` (57838) | `Tool Part` | 0.9 | 4 |  | `Oak` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Tool Handle` |  |
| `Hard Metal Small Bits` | 22564 | `Hard Metal Small Bits` (62594) | `Resource` | 0.08 |  | 30 | `Iron` |  | `All`, `Small`, `Smelter Autodock`, `Weapon Part Standard` |  |
| `Hard Plate Metal Medium Square` | 52156 | `Hard Plate Metal Medium Square` (50988) | `Resource` | 0.1 |  | 30 | `Iron` |  | `All`, `Small`, `Smelter Autodock`, `Weapon Part Standard` |  |
| `Healing Pod` | 45470 | `Healing Pod` (44360) | `Tool Part` | 0.25 | 0 | 15 |  | `3 - Standard Durability` (60) | `All`, `Stackable`, `Projectile`, `Forage`, `Small` |  |
| `Heavy Machinery Handle` | 10178 |  |  | 100 | 0 |  |  |  |  |  |
| `Hebios Guard` | 51718 | `Hebios Guard` (5144) | `Tool Part` | 0.3 | 0 | 30 | `Gold` | `3 - Standard Durability` (60) | `All`, `Medium Tool`, `Stackable`, `Weapon Part Hebios` | mould |
| `Hebios Handle Katana` | 49826 | `Hebios Handle Katana` (53200) | `Tool Part` | 0.5 | 4 |  |  | `3 - Standard Durability` (60) | `Medium Tool`, `All`, `Back` |  |
| `Hebios Handle Kunai` | 26314 | `Hebios Handle Kunai` (18456) | `Tool Part` | 0.125 |  | 30 |  | `3 - Standard Durability` (60) | `All`, `Small`, `Stackable`, `Projectile`, `Medium Tool` |  |
| `Hebios Handle Naginata` | 36724 | `Hebios Handle Naginata` (24220) | `Tool Part` | 5 | 10 |  |  | `3 - Standard Durability` (60) | `All`, `Back`, `Medium Tool` |  |
| `Hebios Handle Wakizashi` | 60840 | `Hebios Handle Wakizashi` (47662) | `Tool Part` | 3 | 4 |  |  | `3 - Standard Durability` (60) | `Medium Tool`, `All` |  |
| `Hebios Katana Blade` | 43412 | `Metal Hebios Katana Blade` (17174) | `Weapon End` | 0.8 | 4 |  | `Iron` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Weapon Part Hebios`, `Weapon Part Standard` | mould |
| `Hebios Katana Blade Part 01` | 17402 | `Hebios Katana Blade Part 01` (12388) | `Tool Part` | 0.3 | 4 | 5 | `Iron` |  | `All`, `Small` |  |
| `Hebios Katana Blade Part 02` | 17408 | `Hebios Katana Blade Part 02` (12386) | `Tool Part` | 0.3 | 4 | 5 | `Iron` |  | `All`, `Small` |  |
| `Hebios Naginata Blade` | 18356 | `Metal Hebios Naginata Blade` (15124) | `Weapon End` | 0.6 | 4 |  | `Iron` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Weapon Part Hebios`, `Weapon Part Standard` | mould |
| `Hebios Naginata Blade Part 01` | 17338 | `Hebios Naginata Blade Part 01` (17238) | `Tool Part` | 0.25 | 4 | 5 | `Iron` |  | `All`, `Small` |  |
| `Hebios Naginata Blade Part 02` | 17378 | `Hebios Naginata Blade Part 02` (42894) | `Tool Part` | 0.25 | 4 | 5 | `Iron` |  | `All`, `Small` |  |
| `Hebios Sai Blade` | 11660 | `Metal Hebios Sai Blade` (53124) | `Weapon End` | 0.4 | 4 |  | `Iron` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Weapon Part Hebios`, `Weapon Part Standard` | mould |
| `Hebios Sai Blade Part 01` | 62068 | `Hebios Sai Blade Part 01` (57048) | `Tool Part` | 0.2 | 4 | 5 | `Iron` |  | `All`, `Small` |  |
| `Hebios Sai Blade Part 02` | 1350 | `Hebios Sai Blade Part 02` (56830) | `Tool Part` | 0.2 | 4 | 5 | `Iron` |  | `All`, `Small` |  |
| `Hebios Wakizashi Blade` | 3414 | `Metal Hebios Wakizashi Blade` (48902) | `Weapon End` | 0.5 | 4 |  | `Iron` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Weapon Part Hebios`, `Weapon Part Standard` | mould |
| `Hebios Wakizashi Blade Part 01` | 54988 | `Hebios Wakizashi Blade Part 01` (49774) | `Tool Part` | 0.25 | 4 | 5 | `Iron` |  | `All`, `Small` |  |
| `Hebios Wakizashi Blade Part 02` | 59494 | `Hebios Wakizashi Blade Part 02` (50184) | `Tool Part` | 0.25 | 4 | 5 | `Iron` |  | `All`, `Small` |  |
| `Hoarder Bag` | 5714 | `Hoarder Bag` (54214) | `Complete Tool` | 15 | 4 |  |  |  | `Back`, `Wall Hangable`, `Bag` |  |
| `Iron Ingot` | 7204 | `Iron Ingot` (23012) | `Resource` | 1 |  | 30 | `Iron` |  | `All`, `Small`, `Stackable`, `Ingot` | ingot |
| `Iron Key` | 49402 | `Key Standard` (39744) | `Utility` | 0.3 |  | 30 |  |  | `All`, `Small` |  |
| `Iron Ore` | 42566 | `Iron Ore` (61652) | `Resource` | 0.075 |  | 50 |  |  | `All`, `Small`, `Stackable`, `Ore`, `Projectile`, `Pedestal Placeable` |  |
| `ItemShooter` | 58148 |  (17048) |  | 1 |  |  |  |  | `All`, `Tool` |  |
| `Ka Karimata` | 8422 | `Ka Karimata Arrow` (960) | `Complete Tool` | 0.1 |  | 30 | `Redwood` | `1 - Very Weak Durability` (10) | `Small`, `All`, `Stackable`, `Arrow` |  |
| `Katana` | 8488 | `Katana` (34994) | `Complete Tool` | 4 | 4 |  |  | `3 - Standard Durability` (60) | `Medium Tool`, `All`, `Back` |  |
| `Katana Blade Part Full` | 19994 | `Hebios Katana Blade Part Full` (17266) | `Weapon End` | 0.7 | 4 |  |  | `2 - Weak Durability` (30) | `All`, `Medium Tool`, `Weapon Part Hebios` | mould |
| `Kunai` | 8518 | `Kunai` (32002) | `Complete Tool` | 0.65 | 1 | 30 |  | `2 - Weak Durability` (30) | `All`, `Small`, `Stackable`, `Projectile`, `Medium Tool` |  |
| `Lantern` | 25946 | `Lantern` (41760) | `Complete Tool` | 1.5 | 4 |  |  |  | `Medium Tool`, `All`, `Lantern`, `Wall Hangable`, `Hangable` |  |
| `Large Guard Rectangle` | 45306 | `Large Guard Rectangle` (9304) | `Tool Part` | 0.65 | 0 | 30 | `Iron` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Stackable`, `Weapon Part Standard` | mould |
| `Large Guard TShape` | 48740 | `Large Guard TShape` (23552) | `Tool Part` | 0.8 | 0 | 30 | `Iron` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Stackable`, `Weapon Part Standard` | mould |
| `Large Guard Wedge` | 47906 | `Large Guard Wedge` (39010) | `Tool Part` | 0.65 | 0 | 30 | `Iron` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Stackable`, `Weapon Part Standard` | mould |
| `Large Longsword Blade` | 31474 | `Large Longsword Blade` (56124) | `Weapon End` | 2 | 4 |  | `Iron` | `5 - Very Strong Durability` (170) | `All`, `Medium Tool`, `Weapon Part Standard` | mould |
| `Large Spiked Wooden Club` | 38078 | `Large Spiked Wooden Club` (55914) | `Complete Tool` | 1.3 | 4 |  | `Oak` | `3 - Standard Durability` (60) | `Medium Tool`, `All`, `Back` |  |
| `Large Sword` | 61520 |  (8374) | `Complete Tool` | 15 | 10 |  |  |  | `Medium Tool`, `All`, `Back` |  |
| `Light Pickup` | 4318 |  | `Complete Tool` | 1 |  | 30 |  |  | `All`, `Small` |  |
| `Log Mallet` | 11082 | `Log Mallet` (42518) | `Tool Part` | 1 | 10 |  |  |  | `All`, `Medium Tool` |  |
| `Log Mallet v02` | 23508 | `Log Mallet v02` (42030) | `Tool Part` | 1 | 10 |  |  |  | `All`, `Medium Tool` |  |
| `Menu Token` | 38474 |  | `Resource` | 1 |  | 30 |  |  | `All`, `Small`, `Projectile`, `Currency` |  |
| `Metal Bow` | 64508 | `Metal Bow` (25100) | `Complete Tool` | 8 | 10 |  |  | `4 - Strong Durability` (130) | `Back`, `All`, `Medium Tool` |  |
| `Metal Hammer Head` | 35212 | `Metal Hammer Head` (22876) | `Tool Part` | 1.5 | 4 |  | `Iron` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Weapon Part Standard` | mould |
| `Metal Tap` | 15966 | `Metal Tap` (17334) | `Utility` | 1 |  |  |  |  | `All`, `Small` |  |
| `Metal Wall Hook` | 19156 | `UnplacedMetalWallHook` (18972) | `Utility` | 0.1 |  | 30 | `Iron` |  | `Small`, `All`, `Stackable`, `Weapon Part Standard` |  |
| `Microphone` | 47350 |  | `Complete Tool` | 1 |  | 30 |  |  | `All`, `Small` |  |
| `Modular Bag (Obsolete)` | 19888 |  (12060) | `Complete Tool` | 1 | 4 |  |  |  |  |  |
| `Modular Hook` | 60202 |  (60188) | `Complete Tool` | 1 |  |  |  |  | `Physical` |  |
| `Modular Sack` | 33698 |  (8344) | `Complete Tool` | 1 |  |  |  |  |  |  |
| `Mould` | 22870 | `Mould` (14826) | `Mould` | 4 |  |  |  |  | `All`, `Mould`, `Small` |  |
| `Mould Hebios` | 10880 | `Hebios Crafted Mould` (22498) | `Mould` | 3 |  |  |  |  | `All`, `Mould Hebios`, `Small` |  |
| `Mould Standard` | 44232 | `Standard Crafted Mould` (38578) | `Mould` | 3.5 |  |  |  |  | `All`, `Mould`, `Small` |  |
| `MRK Fuel Core` | 35696 | `MRK Fuel Core` (65358) | `Resource` | 0.2 | 1 | 30 |  |  | `All`, `Small`, `Stackable`, `Projectile`, `Pedestal Placeable`, `Fuel` | fuel |
| `MRK Molten Core` | 36626 | `MRK Molten Core` (51764) | `Resource` | 0.35 | 1 | 30 |  |  | `All`, `Small`, `Stackable`, `Pedestal Placeable` |  |
| `MRK Puzzle Core 01` | 18310 | `MRK Puzzle Core 01` (14158) | `Resource` | 10 | 1 |  |  |  | `All`, `Small`, `Stackable`, `Pedestal Placeable` |  |
| `MRK Puzzle Core 02` | 28544 | `MRK Puzzle Core 02` (28416) | `Resource` | 10 | 1 |  |  |  | `All`, `Small`, `Stackable`, `Pedestal Placeable` |  |
| `MushroomBrown Full Burnt` | 40370 | `MushroomBrown Full Burnt` (47126) |  | 0.08 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `MushroomBrown Full Cooked` | 46528 | `MushroomBrown Full Cooked` (46510) |  | 0.08 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `MushroomBrown Full Ripe` | 46150 | `MushroomBrown Full Ripe` (61666) |  | 0.08 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `MushroomBrown Half Burnt` | 53326 | `MushroomBrown Half Burnt` (53372) |  | 0.075 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `MushroomBrown Half Cooked` | 50870 | `MushroomBrown Half Cooked` (50916) |  | 0.075 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `MushroomBrown Half Ripe` | 48414 | `MushroomBrown Half Ripe` (48460) |  | 0.075 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `MushroomCaveLarge Half Burnt` | 64098 | `MushroomCaveLarge Half Burnt` (60330) |  | 0.035 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `MushroomCaveLarge Half Cooked` | 36450 | `MushroomCaveLarge Half Cooked` (9414) |  | 0.035 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `MushroomCaveLarge Half Ripe` | 26514 | `MushroomCaveLarge Half Ripe` (54182) |  | 0.035 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `MushroomCaveSmall Full Burnt` | 16332 | `MushroomCaveSmall Full Burnt` (29148) |  | 0.05 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `MushroomCaveSmall Full Cooked` | 16324 | `MushroomCaveSmall Full Cooked` (40066) |  | 0.05 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `MushroomCaveSmall Full Ripe` | 47116 | `MushroomCaveSmall Full Ripe` (58270) |  | 0.05 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `MushroomCaveSmall Half Burnt` | 47094 | `MushroomCaveSmall Half Burnt` (47142) |  | 0.02 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `MushroomCaveSmall Half Cooked` | 44440 | `MushroomCaveSmall Half Cooked` (44488) |  | 0.02 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `MushroomCaveSmall Half Ripe` | 41786 | `MushroomCaveSmall Half Ripe` (41834) |  | 0.02 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `MushroomGlowing Full Burnt` | 42542 | `MushroomGlowing Full Burnt` (43856) |  | 0.08 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `MushroomGlowing Full Cooked` | 42532 | `MushroomGlowing Full Cooked` (41428) |  | 0.08 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `MushroomGlowing Full Ripe` | 44960 | `MushroomGlowing Full Ripe` (38966) |  | 0.08 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `MushroomGlowing Half Burnt` | 57828 | `MushroomGlowing Half Burnt` (36504) |  | 0.02 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `MushroomGlowing Half Cooked` | 59670 | `MushroomGlowing Half Cooked` (34042) |  | 0.02 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `MushroomGlowing Half Ripe` | 24352 | `MushroomGlowing Half Ripe` (31580) |  | 0.02 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `MushroomRed Full Burnt` | 22246 | `MushroomRed Full Burnt` (46660) |  | 0.05 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `MushroomRed Full Cooked` | 46900 | `MushroomRed Full Cooked` (46888) |  | 0.05 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `MushroomRed Full Ripe` | 24192 | `MushroomRed Full Ripe` (61658) |  | 0.05 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `MushroomRed Half Burnt` | 43226 | `MushroomRed Half Burnt` (43272) |  | 0.025 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `MushroomRed Half Cooked` | 40770 | `MushroomRed Half Cooked` (40816) |  | 0.025 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `MushroomRed Half Ripe` | 38314 | `MushroomRed Half Ripe` (38360) |  | 0.025 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `Mythril Ingot` | 60398 | `Mythril Ingot` (24774) | `Resource` | 1 |  | 30 | `Mythril` |  | `All`, `Small`, `Stackable`, `Ingot` | ingot |
| `Mythril Ore` | 4758 | `Mythril Ore` (11702) | `Resource` | 0.035 |  | 50 |  |  | `All`, `Small`, `Stackable`, `Ore`, `Projectile`, `Pedestal Placeable` |  |
| `Naginata` | 37182 | `Naginata` (41052) | `Complete Tool` | 5 | 10 |  |  | `3 - Standard Durability` (60) | `All`, `Back`, `Medium Tool` |  |
| `Naginata Blade Part Full` | 18190 | `Hebios Naginata Blade Part Full` (17420) | `Weapon End` | 0.5 | 4 |  |  | `2 - Weak Durability` (30) | `All`, `Medium Tool`, `Weapon Part Hebios` | mould |
| `Oak Tree Seed` | 2386 | `Oak Tree Seed` (17302) | `Resource` | 0.02 |  | 15 |  |  | `Small`, `All`, `Stackable`, `Forage` |  |
| `OLD Arrow` | 5344 |  (562) | `Complete Tool` | 1 |  | 30 |  |  | `Small`, `All`, `Stackable`, `Arrow` |  |
| `OLD Ka Karimata` | 60876 |  (49850) | `Complete Tool` | 1 |  | 30 |  |  | `Small`, `All`, `Stackable`, `Arrow` |  |
| `Onion Full Burnt` | 48640 | `Onion Full Burnt` (48718) | `Food` | 0.17 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, cooking stage |
| `Onion Full Cooked` | 48140 | `Onion Full Cooked` (48214) | `Food` | 0.17 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, cooking stage |
| `Onion Full Ripe` | 47000 | `Onion Full Ripe` (47730) | `Food` | 0.17 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, buried, cooking stage |
| `Onion Full Unripe` | 43860 | `Onion Full Unripe` (43966) | `Food` | 0.17 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, cooking stage |
| `Onion Half Burnt` | 59256 | `Onion Half Burnt` (59314) | `Food` | 0.25 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, cooking stage |
| `Onion Half Cooked` | 58852 | `Onion Half Cooked` (58910) | `Food` | 0.075 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, cooking stage |
| `Onion Half Ripe` | 58448 | `Onion Half Ripe` (58506) | `Food` | 0.075 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, cooking stage |
| `Onion Half Unripe` | 58646 | `Onion Half Unripe` (58102) | `Food` | 0.075 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, cooking stage |
| `Orchi Ingot` | 16422 | `Orchi Ingot` (16464) | `Resource` | 1 |  | 30 | `Orchi Alloy` |  | `All`, `Small`, `Stackable`, `Ingot` | ingot |
| `Ore Bag` | 47602 | `Ore Bag` (64560) | `Complete Tool` | 0.75 | 4 |  |  |  | `Back`, `Wall Hangable`, `Bag` | storage |
| `Ore Bag Side Attachment` | 19558 | `Ore Side Pouch Attachment` (61020) | `Utility` | 1 |  |  |  |  | `All`, `Small` | storage |
| `Ore Training` | 57856 | `Ore Training` (56300) | `Resource` | -1 |  | 50 |  |  | `Training Resource` |  |
| `Paper` | 56198 | `Paper` (37066) | `Pages` | 0.1 |  |  |  |  | `All`, `Small`, `Paper` |  |
| `Phantom Guard` | 2166 | `Phantom Guard` (6940) | `Tool Part` | 1 | 0 | 30 | `Iron` | `3 - Standard Durability` (60) | `All`, `Medium Tool`, `Stackable` |  |
| `Pick` | 3686 | `Pick Axe` (61654) | `Complete Tool` | 1 | 4 |  |  |  | `Medium Tool`, `All` |  |
| `Pickaxe Head` | 50294 | `Pickaxe Head` (35878) | `Tool Part` | 3 | 4 |  | `Iron` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Weapon Part Standard` | mould |
| `Pole Hugger Edgy` | 41614 | `Pole Hugger Edgy` (17828) | `Tool Part` | 1 | 0 |  |  |  | `All`, `Medium Tool` |  |
| `Pole Hugger Pointy Ends` | 23256 | `Pole Hugger Pointy Ends` (10962) | `Tool Part` | 1 | 0 |  |  |  | `All`, `Medium Tool` |  |
| `Pole Hugger Short` | 55590 | `Pole Hugger Short` (4920) | `Tool Part` | 1 | 0 |  |  |  | `All`, `Medium Tool` |  |
| `Pole Hugger Tall` | 59996 | `Pole Hugger Tall` (62282) | `Tool Part` | 1 | 0 |  |  |  | `All`, `Medium Tool` |  |
| `Pommel` | 38888 | `Pommel` (15658) | `Tool Part` | 0.05 | 0 | 30 | `Iron` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Stackable`, `Weapon Part Standard` | mould |
| `Pommel Circle` | 41888 | `Pommel Circle` (57966) | `Tool Part` | 0.06 | 0 | 30 | `Iron` | `3 - Standard Durability` (60) | `All`, `Medium Tool`, `Stackable`, `Weapon Part Standard` | mould |
| `Pommel Cone` | 62918 | `Pommel Cone` (52360) | `Tool Part` | 0.2 | 0 | 30 |  |  | `All`, `Medium Tool`, `Stackable` |  |
| `Pommel Diamond` | 3942 | `Pommel Diamond` (42764) | `Tool Part` | 0.075 | 0 | 30 | `Iron` | `3 - Standard Durability` (60) | `All`, `Medium Tool`, `Stackable`, `Weapon Part Standard` | mould |
| `Pommel Large Square` | 52748 | `Pommel Large Square` (42138) | `Tool Part` | 0.1 | 0 | 30 | `Iron` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Stackable`, `Weapon Part Standard` | mould |
| `Pommel Squashed` | 64894 | `Pommel Squashed` (1736) | `Tool Part` | 0.1 | 0 | 30 |  |  | `All`, `Medium Tool`, `Stackable` | mould |
| `Potato Full Burnt` | 40072 | `Potato Full Burnt` (1574) | `Food` | 0.1 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, cooking stage |
| `Potato Full Cooked` | 39728 | `Potato Full Cooked` (57840) | `Food` | 0.1 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, cooking stage |
| `Potato Full Ripe` | 39384 | `Potato Full Ripe` (54692) | `Food` | 0.1 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, cooking stage |
| `Potato Full Unripe` | 39040 | `Potato Full Unripe` (52146) | `Food` | 0.1 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, cooking stage |
| `Potato Half Burnt` | 59662 | `Potato Half Burnt` (59748) | `Food` | 0.05 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, cooking stage |
| `Potato Half Cooked` | 50526 | `Potato Half Cooked` (50612) | `Food` | 0.05 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, cooking stage |
| `Potato Half Ripe` | 48048 | `Potato Half Ripe` (48134) | `Food` | 0.05 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, cooking stage |
| `Potato Half Unripe` | 45736 | `Potato Half Unripe` (45822) | `Food` | 0.05 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, cooking stage |
| `Potato Sapling` | 17268 | `Potato Sapling` (50692) | `Food` | 1 |  |  |  |  |  | buried |
| `Potion Hoops Side Attachment` | 52126 | `Potion Hoops Side Tool Attachment` (31418) | `Utility` | 1.5 |  |  |  |  | `All`, `Small` |  |
| `Potion Medium` | 37408 | `Potion Medium` (23644) | `Magical Resource` | 1 |  |  |  |  | `All`, `Small`, `Projectile` |  |
| `Potion Small` | 61068 |  | `Resource` | 1 |  |  |  |  | `All`, `Small` |  |
| `Pouch` | 5800 | `Pouch` (38942) |  | 1 |  |  |  |  | `All`, `Small`, `Projectile` |  |
| `Pouch Training` | 57888 | `Pouch Training` (57348) |  | 1 |  |  |  |  | `Training Resource` |  |
| `Preset Trophy` | 31498 |  | `Utility` | 0 |  |  |  |  |  |  |
| `Prongs` | 54236 | `Prongs` (40460) | `Utility` | 1 |  |  |  |  | `Back` |  |
| `Pumpkin Full Burnt` | 5454 | `pumpkin full burnt` (5532) |  | 2 |  |  |  |  | `All` | cooking stage |
| `Pumpkin Full Cooked` | 4932 | `pumpkin full cooked` (5010) |  | 2 |  |  |  |  | `All` | cooking stage |
| `Pumpkin Full Ripe` | 4410 | `pumpkin full ripe` (4488) |  | 2 |  |  |  |  | `All` | cooking stage |
| `Pumpkin Full Unripe` | 3888 | `pumpkin full unripe` (3966) |  | 2 |  |  |  |  | `All` | cooking stage |
| `Pumpkin Half Burnt` | 3398 | `pumpkin half burnt` (3444) |  | 0.05 |  | 30 |  |  | `All`, `Small` | cooking stage |
| `Pumpkin Half Cooked` | 3036 | `pumpkin half cooked` (3082) |  | 0.05 |  | 30 |  |  | `All`, `Small` | cooking stage |
| `Pumpkin Half Ripe` | 2674 | `pumpkin half ripe` (2720) |  | 0.05 |  | 30 |  |  | `All`, `Small` | cooking stage |
| `Pumpkin Half Unripe` | 2312 | `pumpkin half unripe` (2358) |  | 0.05 |  | 30 |  |  | `All`, `Small` | cooking stage |
| `Pumpkin Piece Burnt` | 42180 | `pumpkin piece burnt` (42218) |  | 0.02 |  | 30 |  |  | `All`, `Small`, `Projectile` | cookable, cooking stage |
| `Pumpkin Piece Cooked` | 41892 | `pumpkin piece cooked` (41930) |  | 0.02 |  | 30 |  |  | `All`, `Cookable`, `Small`, `Projectile` | cookable, cooking stage |
| `Pumpkin Piece Ripe` | 41570 | `pumpkin piece ripe` (41608) |  | 0.02 |  | 30 |  |  | `All`, `Cookable`, `Small`, `Projectile` | cookable, cooking stage |
| `Pumpkin Piece Unripe` | 41248 | `pumpkin piece unripe` (41286) |  | 0.02 |  | 30 |  |  | `All`, `Small`, `Projectile` | cookable, cooking stage |
| `Puzzle Orb 1` | 31606 | `Puzzle Orb 1` (31620) | `Puzzle Components` | 1 |  |  |  |  | `Pedestal Placeable` |  |
| `Puzzle Orb 2` | 42270 | `Puzzle Orb 2` (47150) | `Puzzle Components` | 1 |  |  |  |  | `Pedestal Placeable` |  |
| `Quiver` | 25002 | `Quiver` (64640) | `Complete Tool` | 0.5 | 4 |  |  |  | `Back`, `Medium Tool`, `All`, `Physical` | storage |
| `Rapier Blade` | 52282 | `Rapier Blade` (11332) | `Weapon End` | 0.3 | 4 |  | `Iron` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Weapon Part Standard` | mould |
| `Red Iron Ingot` | 30996 | `Red Iron Ingot` (31034) | `Resource` | 1 |  | 30 | `Red Iron Alloy` |  | `All`, `Small`, `Stackable`, `Ingot` | ingot |
| `Red Mushroom` | 27972 |  | `Resource` | 1 |  | 30 |  |  | `All`, `Small` |  |
| `Red Mushroom Shield` | 59234 | `Red Mushroom Shield` (49188) | `Complete Tool` | 1 | 4 |  |  | `3 - Standard Durability` (60) | `All`, `Back`, `Physical`, `Tool`, `Wall Hangable`, `Embeddable Surface` | impact stat |
| `Redwood Gotera Core` | 10670 | `Redwood Gotera Core` (41402) | `Resource` | 0.1 | 1 | 30 |  |  | `Small`, `All`, `Stackable`, `Projectile` |  |
| `Redwood Tree Seed` | 38624 | `Redwood Tree Seed` (55054) | `Resource` | 0.02 |  | 15 |  |  | `Small`, `All`, `Stackable`, `Forage` |  |
| `Respawn Orb` | 11654 |  |  | 0 |  |  |  |  |  |  |
| `Revive Orb` | 22868 |  |  | 0 |  |  |  |  |  |  |
| `Rod Long` | 17986 | `Rod Long` (44066) | `Tool Part` | 1.6 | 10 |  | `Oak` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Tool Handle` |  |
| `Rod Medium` | 5812 | `Rod Medium` (44204) | `Tool Part` | 0.75 | 4 |  | `Oak` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Tool Handle` |  |
| `Rod Slim 40cm` | 14166 | `Rod Slim 40cm` (59588) | `Tool Part` | 0.35 | 2 |  | `Oak` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Tool Handle`, `Short` |  |
| `Rope Clump` | 61476 | `Rope Clump` (43836) | `Resource` | 0.05 |  | 30 | `Rope` |  | `All`, `Small` |  |
| `Ruins Weight Orb 10KG 01` | 59446 |  | `Magical Resource` | 10 |  |  |  |  | `All`, `Back` |  |
| `Ruins Weight Orb 10KG 02` | 59422 |  | `Magical Resource` | 10 |  |  |  |  | `All`, `Back` |  |
| `Ruins Weight Orb 10KG 03` | 59440 |  | `Magical Resource` | 10 |  |  |  |  | `All`, `Back` |  |
| `Ruins Weight Orb 10KG 04` | 59434 |  | `Magical Resource` | 10 |  |  |  |  | `All`, `Back` |  |
| `Ruins Weight Orb 10KG 05` | 59428 |  | `Magical Resource` | 10 |  |  |  |  | `All`, `Back` |  |
| `Rusty Axe` | 4350 | `Rusty Axe` (4412) | `Complete Tool` | 5 | 4 |  |  | `3 - Standard Durability` (60) | `Medium Tool`, `All` |  |
| `Rusty Chisel` | 40332 | `Rusty Chisel` (40366) | `Complete Tool` | 0.6 | 4 |  |  | `3 - Standard Durability` (60) | `Medium Tool`, `All`, `Physical`, `Short` |  |
| `Rusty Greataxe` | 29234 | `Rusty Greataxe` (29296) | `Complete Tool` | 7 | 10 |  |  | `3 - Standard Durability` (60) | `Back`, `All`, `Medium Tool` |  |
| `Rusty Greatsword` | 63122 | `Rusty Greatsword` (63156) | `Complete Tool` | 7 | 10 |  |  | `3 - Standard Durability` (60) | `Back`, `All`, `Medium Tool` |  |
| `Rusty Hammer` | 36064 | `Rusty Hammer` (36126) | `Complete Tool` | 4 | 4 |  |  | `3 - Standard Durability` (60) | `Medium Tool`, `All`, `Medium Tool` |  |
| `Rusty Pickaxe` | 46812 | `Rusty Pickaxe` (46874) | `Complete Tool` | 6 | 4 |  |  | `3 - Standard Durability` (60) | `Medium Tool`, `All` |  |
| `Rusty Pitchfork` | 59404 | `Rusty Pitchfork` (59586) | `Complete Tool` | 8 | 4 |  |  | `3 - Standard Durability` (60) | `Medium Tool`, `All` |  |
| `Rusty Shield` | 20582 | `Rusty Shield` (20684) | `Complete Tool` | 1 | 4 |  |  | `2 - Weak Durability` (30) | `All`, `Back`, `Physical`, `Tool`, `Wall Hangable`, `Embeddable Surface` | impact stat |
| `Rusty Short Sword` | 44790 | `Rusty Short Sword` (44824) | `Complete Tool` | 4 | 4 |  |  | `3 - Standard Durability` (60) | `Medium Tool`, `All` |  |
| `Rusty Spade` | 33128 | `Rusty Spade` (33230) | `Complete Tool` | 10 | 10 |  |  | `3 - Standard Durability` (60) | `Back`, `All`, `Medium Tool` |  |
| `Sai` | 42364 | `Sai` (27038) | `Complete Tool` | 2 | 1 |  |  | `2 - Weak Durability` (30) | `All`, `Medium Tool`, `Short` |  |
| `Sai Blade Part Full` | 6840 | `Hebios Katana Blade Part Full` (17266) | `Weapon End` | 0.4 | 4 |  |  | `2 - Weak Durability` (30) | `All`, `Medium Tool`, `Weapon Part Hebios` | mould |
| `Salt` | 1462 | `Salt` (49578) | `Food` | 0.1 |  | 30 |  |  | `All`, `Small`, `Cooking Garnish`, `Projectile` | garnish |
| `Sandstone Stone` | 19822 | `Sandstone Stone` (55930) | `Resource` | 0.07 | 1 | 50 |  |  | `All`, `Small`, `Stackable`, `Projectile`, `Pedestal Placeable` |  |
| `Schmeechee Glowing` | 50490 | `Schmeechee Glowing` (53576) |  | 0.35 |  |  |  |  | `Projectile`, `Critter` |  |
| `Schmeechee Orange` | 65300 | `Schmeechee Orange` (63728) |  | 0.35 |  |  |  |  | `Projectile`, `Critter` |  |
| `Schmeechee Poisonous` | 37070 | `Schmeechee Poisonous` (31646) |  | 0.35 |  |  |  |  | `Projectile`, `Critter` |  |
| `Schmeechee Red` | 37062 | `Schmeechee Red` (3532) |  | 0.35 |  |  |  |  | `Projectile`, `Critter` |  |
| `Scythe Blade` | 32210 | `Scythe Blade` (26788) | `Weapon End` | 0.4 | 4 |  | `Iron` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Weapon Part Standard` | mould |
| `Select Server Orb` | 21488 |  |  | 0 |  |  |  |  |  |  |
| `Shield` | 41410 | `Shield` (61656) | `Complete Tool` | 10 |  |  |  | `3 - Standard Durability` (60) | `All`, `Back`, `Physical`, `Wall Hangable`, `Embeddable Surface` | impact stat |
| `Shield Core Bent Middle` | 40502 | `Shield Core Bent Middle` (7232) | `Complete Tool` | 0.6 | 1 |  | `Oak` | `3 - Standard Durability` (60) | `All`, `Small`, `Embeddable Surface` | impact stat |
| `Shield Core Circle Middle` | 46078 | `Shield Core Circle Middle` (52756) | `Complete Tool` | 0.6 | 1 |  | `Oak` | `3 - Standard Durability` (60) | `All`, `Small`, `Embeddable Surface` | impact stat |
| `Shield Core Handle` | 48112 | `Shield Core Handle` (4530) | `Complete Tool` | 1 | 1 |  | `Oak` | `3 - Standard Durability` (60) | `All`, `Back`, `Physical`, `Tool`, `Wall Hangable`, `Embeddable Surface` |  |
| `Shield Core Holed Middle` | 46086 | `Shield Core Holed Middle` (50602) | `Complete Tool` | 0.6 | 1 |  | `Oak` | `3 - Standard Durability` (60) | `All`, `Small`, `Embeddable Surface` | impact stat |
| `Shield Part Half Circle` | 49054 | `Shield Part Half Circle` (50888) | `Tool Part` | 0.6 | 1 |  | `Oak` | `3 - Standard Durability` (60) | `All`, `Small`, `Embeddable Surface` | impact stat |
| `Shield Part Half Circle Hole` | 46100 | `Shield Part Half Circle Hole` (44704) | `Tool Part` | 0.6 | 1 |  | `Oak` | `3 - Standard Durability` (60) | `All`, `Small`, `Embeddable Surface` | impact stat |
| `Shield Part Half Hole` | 46108 | `Shield Part Half Hole` (12416) | `Tool Part` | 0.6 | 1 |  | `Oak` | `3 - Standard Durability` (60) | `All`, `Small`, `Embeddable Surface` | impact stat |
| `Shield Part Half Point` | 5428 | `Shield Part Half Point 01` (59936) | `Tool Part` | 0.6 | 1 |  | `Oak` | `3 - Standard Durability` (60) | `All`, `Small`, `Embeddable Surface` | impact stat |
| `Shield Small` | 5776 | `Small Shield` (63498) | `Complete Tool` | 5 | 4 |  |  | `3 - Standard Durability` (60) | `All`, `Back`, `Physical`, `Tool`, `Wall Hangable`, `Embeddable Surface` | impact stat |
| `Shield Small Training` | 3564 | `Small Shield` (63498) | `Complete Tool` | 3 | 4 |  |  | `3 - Standard Durability` (60) |  |  |
| `Short Sword` | 54952 | `Short Sword` (38566) | `Complete Tool` | 5 | 4 |  |  | `2 - Weak Durability` (30) | `Medium Tool`, `All`, `Tool` |  |
| `Short Sword Blade` | 22888 | `Short Sword Blade` (55310) | `Weapon End` | 0.4 | 4 |  | `Iron` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Weapon Part Standard` | mould |
| `Shotel Blade` | 55424 | `Shotel Blade` (36438) | `Weapon End` | 0.8 | 4 |  | `Iron` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Weapon Part Standard` | mould |
| `Silver Ingot` | 57718 | `Silver Ingot` (23528) | `Resource` | 1 |  | 30 | `Silver` |  | `All`, `Small`, `Stackable`, `Ingot` | ingot |
| `Silver Ore` | 5698 | `Silver Ore` (9586) | `Resource` | 0.05 |  | 50 |  |  | `All`, `Small`, `Stackable`, `Ore`, `Projectile`, `Pedestal Placeable` |  |
| `Slingshot` | 56828 | `Slingshot` (13142) | `Complete Tool` | 0.75 | 4 |  | `Oak` | `3 - Standard Durability` (60) | `All`, `Medium Tool` |  |
| `Smelter Gem 1` | 19998 | `Smelter Gem 1` (34986) |  | 1 |  |  |  |  | `All`, `Small`, `Smelter Recipe Unlock`, `Pedestal Placeable` |  |
| `Smelter Gem 2` | 21940 | `Smelter Gem 2` (41638) |  | 1 |  |  |  |  | `All`, `Small`, `Smelter Recipe Unlock`, `Pedestal Placeable` |  |
| `Smelter Gem 3` | 31628 | `Smelter Gem 3` (46508) |  | 1 |  |  |  |  | `All`, `Small`, `Smelter Recipe Unlock`, `Pedestal Placeable` |  |
| `Snowball` | 4432 | `Snowball network Prefab` (52090) | `Toy` | 0.1 |  | 30 |  |  | `All`, `Small`, `Projectile` |  |
| `Soft Fabric Large Roll` | 6310 | `Soft Fabric Large Roll` (23206) | `Resource` | 6 |  |  | `Dais Leather` |  | `Large Roll`, `All` |  |
| `Soft Fabric Medium Roll` | 46760 | `Soft Fabric Medium Roll` (47760) | `Resource` | 0.05 |  | 30 | `Dais Leather` |  | `All`, `Small` |  |
| `Soft Fabric Medium Strips` | 3296 | `Soft Fabric Medium Strips` (63204) | `Resource` | 0.03 |  | 30 | `Dais Leather` |  | `All`, `Small` |  |
| `Spade Head` | 1032 | `Spade Head` (50548) | `Utility` | 2 | 10 |  | `Copper` | `3 - Standard Durability` (60) | `All`, `Medium Tool`, `Weapon Part Standard` | mould |
| `Spear Head Pyramid` | 37842 | `Spear Head Pyramid` (13554) | `Weapon End` | 1 | 1 |  | `Iron` |  | `All`, `Medium Tool` |  |
| `Spear Head Spiky` | 40662 | `Spear Head Spiky` (13680) | `Weapon End` | 1 | 1 |  | `Iron` |  | `All`, `Medium Tool` |  |
| `Spear Head Standard` | 29050 | `Spear Head Standard` (13816) | `Weapon End` | 1 | 1 |  | `Iron` |  | `All`, `Medium Tool` |  |
| `Spike Explosive` | 31316 | `Explosive Spike` (50412) | `Tool Part` | 0.75 | 0 | 30 |  | `3 - Standard Durability` (60) | `All`, `Medium Tool`, `Stackable`, `Projectile` |  |
| `Spike Fancy` | 26290 | `Spike Fancy` (12492) | `Tool Part` | 0.1 | 0 | 30 | `Copper` | `3 - Standard Durability` (60) | `All`, `Medium Tool`, `Smelter Autodock`, `Weapon Part Standard` | mould |
| `Spike Short` | 8446 | `Spike Short` (6934) | `Tool Part` | 1 | 0 | 30 | `Iron` |  | `All`, `Medium Tool` |  |
| `Spike Tall` | 53816 | `Spike Tall` (3558) | `Tool Part` | 1 | 0 | 30 | `Iron` | `3 - Standard Durability` (60) | `All`, `Medium Tool`, `Stackable` |  |
| `Spriggull Feather Blue` | 23140 | `Spriggull Feather Blue` (7918) | `Resource` | 0.05 |  | 30 |  |  | `All`, `Small`, `Forage` |  |
| `Spriggull Feather Green` | 39492 | `Spriggull Feather Green` (25446) | `Resource` | 0.05 |  | 30 |  |  | `All`, `Small`, `Forage` |  |
| `Spriggull Feather Purple` | 63734 | `Spriggull Feather Purple` (36248) | `Resource` | 0.05 |  | 30 |  |  | `All`, `Small`, `Forage` |  |
| `Spriggull Feather Red` | 51238 | `Spriggull Feather Red` (18734) | `Resource` | 0.05 |  | 30 |  |  | `All`, `Small`, `Forage` |  |
| `Spriggull Fletching Blue` | 56216 | `Spriggull Fletching Blue` (50608) | `Resource` | 0.02 |  | 30 |  |  | `All`, `Small`, `Forage` |  |
| `Spriggull Fletching Red` | 29538 | `Spriggull Fletching Red` (24072) | `Resource` | 0.02 |  | 30 |  |  | `All`, `Small`, `Forage` |  |
| `SpriggullDrumstick Bone` | 32140 | `SpriggullDrumstick Bone` (24406) | `Resource` | 0.05 |  | 30 |  |  | `All`, `Small` |  |
| `SpriggullDrumstick Full Burnt` | 5284 | `SpriggullDrumstick Full Burnt` (20570) |  | 0.35 |  | 30 |  |  | `Cookable`, `All`, `Small` | cookable, cooking stage |
| `SpriggullDrumstick Full Cooked` | 5268 | `SpriggullDrumstick Full Cooked` (33190) |  | 0.35 |  | 30 |  |  | `Cookable`, `All`, `Small` | cookable, cooking stage |
| `SpriggullDrumstick Full Ripe` | 49918 | `SpriggullDrumstick Full Ripe` (43430) |  | 0.35 |  | 30 |  |  | `Cookable`, `All`, `Small` | cookable, cooking stage |
| `SpriggullDrumstick Half Burnt` | 10860 | `SpriggullDrumstick Half Burnt` (10908) |  | 0.2 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `SpriggullDrumstick Half Cooked` | 8392 | `SpriggullDrumstick Half Cooked` (8440) |  | 0.2 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `SpriggullDrumstick Half Ripe` | 5924 | `SpriggullDrumstick Half Ripe` (5972) |  | 0.2 |  | 30 |  |  | `Cookable`, `All`, `Small`, `Projectile` | cookable, cooking stage |
| `Spyglass` | 17772 | `SpyGlass` (5170) | `Utility` | 0.8 | 0 |  |  |  | `All`, `Small`, `Tool` |  |
| `Spyglass Long` | 984 | `SpyGlass Long` (64848) | `Utility` | 1 | 0 |  |  |  | `All`, `Small`, `Tool` |  |
| `Standard Side Pouch Attachment` | 16780 | `Standard Side Pouch Attachment` (7852) | `Utility` | 1 |  |  |  |  | `All`, `Small` |  |
| `Standard Side Tool Attachment` | 11624 | `Standard Side Tool Attachment` (59468) | `Utility` | 1 |  |  |  |  | `All`, `Small` |  |
| `Steel Ingot` | 10734 | `Steel Alloy Ingot` (22222) | `Resource` | 1 |  | 30 |  |  | `All`, `Small`, `Stackable`, `Ingot` | ingot |
| `Stick` | 10650 | `Stick` (61674) | `Resource` | 0.05 | 1 | 50 | `Oak` | `2 - Weak Durability` (30) | `Small`, `All`, `Fuel`, `Torch` | fuel, fuel, fuel, fuel, fuel |
| `Stick Charred` | 21610 | `Stick Charred` (20564) | `Resource` | 0.05 | 1 | 50 | `Oak` | `2 - Weak Durability` (30) | `Small`, `All`, `Fuel`, `Torch` | fuel, fuel, fuel, fuel, fuel |
| `Stick Training` | 3188 | `Stick Training` (61414) | `Resource` | 0.05 | 1 | 50 |  |  | `Training Resource` |  |
| `Stone` | 42568 | `Stone` (61670) | `Resource` | 0.1 | 1 | 50 |  | `3 - Standard Durability` (60) | `All`, `Small`, `Stackable`, `Projectile`, `Pedestal Placeable` |  |
| `Stone Training` | 45012 | `Stone Training` (19490) | `Resource` | 0.1 | 1 | 30 |  |  | `Training Resource` |  |
| `Table Placer` | 14254 | `Table Placer` (25418) | `Resource` | 1 | 1 | 30 |  |  | `All`, `Small` |  |
| `Thick Great Sword Blade` | 23312 | `Thick Great Sword Blade` (25802) | `Weapon End` | 2.5 | 4 |  | `Iron` | `5 - Very Strong Durability` (170) | `All`, `Medium Tool`, `Weapon Part Standard` | mould |
| `Thin Cloth Medium Square` | 57540 | `Thin Cloth Medium Square` (34570) | `Resource` | 0.05 |  | 30 | `Canvas` |  | `All`, `Small` |  |
| `Timber Bag` | 38366 | `Timber Bag` (25122) | `Complete Tool` | 0.75 | 4 |  |  |  | `Back`, `Wall Hangable`, `Bag` | storage |
| `Timber Bag Side Pouch Attachment` | 19564 | `Timber Side Pouch Attachment` (7102) | `Utility` | 1 |  |  |  |  | `All`, `Small` | storage |
| `Tomato Full Burnt` | 38636 | `Tomato Full Burnt` (38742) | `Food` | 0.1 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, cooking stage |
| `Tomato Full Cooked` | 37992 | `Tomato Full Cooked` (38098) | `Food` | 0.1 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, cooking stage |
| `Tomato Full Ripe` | 37348 | `Tomato Full Ripe` (37454) | `Food` | 0.1 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, cooking stage |
| `Tomato Full Unripe` | 36704 | `Tomato Full Unripe` (36810) | `Food` | 0.1 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, cooking stage |
| `Tomato Half Burnt` | 57640 | `Tomato Half Burnt` (57698) | `Food` | 0.05 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, cooking stage |
| `Tomato Half Cooked` | 57236 | `Tomato Half Cooked` (57294) | `Food` | 0.05 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, cooking stage |
| `Tomato Half Ripe` | 56832 | `Tomato Half Ripe` (56890) | `Food` | 0.05 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, cooking stage |
| `Tomato Half Unripe` | 56428 | `Tomato Half Unripe` (56486) | `Food` | 0.05 |  | 30 |  |  | `All`, `Small`, `Cookable`, `Projectile` | cookable, cooking stage |
| `Torch` | 4784 | `Torch` (56698) | `Complete Tool` | 1 | 4 |  |  |  | `Medium Tool`, `All`, `Torch` |  |
| `Turabada Arm` | 7822 | `Turabada Arm` (15584) | `Tool Part` | 3 | 10 |  |  | `2 - Weak Durability` (30) | `All`, `Medium Tool` |  |
| `Vacuum` | 8264 | `Vacuum` (8586) | `Utility` | 6 |  |  |  |  | `Back` |  |
| `Wakizashi` | 56464 | `Wakizashi` (29856) | `Complete Tool` | 3 | 4 |  |  | `3 - Standard Durability` (60) | `Medium Tool`, `All` |  |
| `Wakizashi Blade Part Full` | 28548 | `Hebios Katana Blade Part Full` (17266) | `Weapon End` | 0.4 | 4 |  |  | `2 - Weak Durability` (30) | `All`, `Medium Tool`, `Weapon Part Hebios` | mould |
| `Walnut Tree Seed` | 38630 | `Walnut Tree Seed` (44172) | `Resource` | 0.02 |  | 15 |  |  | `Small`, `All`, `Stackable`, `Forage` |  |
| `War Hammer Head` | 42968 | `WarHammer` (9630) | `Tool Part` | 2.5 | 10 |  | `Iron` | `4 - Strong Durability` (130) | `All`, `Medium Tool`, `Weapon Part Standard` | mould |
| `Water Potion Medium` | 33896 | `Potion Medium` (23644) | `Magical Resource` | 1 |  |  |  |  | `All`, `Small`, `Projectile` |  |
| `Wedge Training` | 2932 | `Wedge Training` (53570) | `Resource` | 2 | 1 | 30 |  |  | `Training Resource` |  |
| `Wheel` | 18560 |  |  | 1 |  | 30 |  |  | `All`, `Small` |  |
| `White Gold Ingot` | 24016 | `White Gold Ingot` (13158) | `Resource` | 1 |  | 30 | `White Gold Alloy` |  | `All`, `Small`, `Stackable`, `Ingot` | ingot |
| `Woodcut Wedge` | 65086 | `Woodcut Wedge` (47118) | `Resource` | 0.075 | 1 | 50 | `Oak` | `1 - Very Weak Durability` (10) | `Small`, `All`, `Fuel` | fuel, fuel, fuel, fuel, fuel |
| `Woodcut Wedge Ashen` | 49552 | `Woodcut Wedge Ashen` (232) | `Resource` | 0.03 | 1 | 30 | `Oak` | `1 - Very Weak Durability` (10) | `Small`, `All`, `Fuel` | fuel, fuel, fuel, fuel, fuel |
| `Woodcut Wedge Burnt` | 32514 | `Woodcut Wedge Burnt` (290) | `Resource` | 0.06 | 1 | 30 | `Oak` | `1 - Very Weak Durability` (10) | `Small`, `All`, `Fuel` | fuel, fuel, fuel, fuel, fuel |
| `Woodcut Wedge Charred` | 46842 | `Woodcut Wedge Charred` (58068) | `Resource` | 0.08 | 1 | 30 | `Oak` | `1 - Very Weak Durability` (10) | `Small`, `All`, `Fuel` | fuel, fuel, fuel, fuel, fuel |
| `Wooden Bag` | 35364 | `Wooden Bag` (30060) | `Complete Tool` | 0.4 | 4 |  |  |  | `Back`, `Wall Hangable`, `Bag` |  |
| `Wooden Bowl` | 49944 | `Wooden Bowl` (25908) | `Utility` | 0.3 |  | 30 |  |  | `All`, `Small` |  |
| `Wooden Bucket` | 1618 | `Wooden Bucket` (63904) | `Utility` | 2 |  |  |  |  | `All`, `Hangable`, `Wall Hangable` |  |
| `Wooden Dice` | 55230 | `Wooden Dice` (45608) | `Toy` | 0.05 |  | 30 | `Oak` |  | `All`, `Small`, `Stackable`, `Projectile` |  |
| `Wooden Ladle` | 56890 | `Wooden Ladle` (15274) | `Utility` | 0.5 |  |  |  |  | `All`, `Tool`, `Hangable`, `Wall Hangable`, `Cooking Utensil` |  |
| `Wooden Net` | 58350 | `Wooden Net` (53540) | `Utility` | 2.5 | 4 |  |  |  | `Back`, `Medium Tool`, `All` |  |
| `Wooden Short Sword` | 37948 | `Wooden Short Sword` (16448) | `Complete Tool` | 3 | 4 |  | `Oak` | `3 - Standard Durability` (60) | `Medium Tool`, `All` |  |
| `Wooden Stake` | 38354 | `Wooden Stake` (17262) | `Complete Tool` | 0.1 |  | 30 | `Oak` | `3 - Standard Durability` (60) | `Small`, `All`, `Stackable` |  |
| `Wooden Stirring Spoon` | 41010 | `Wooden Stirring Spoon` (23950) | `Utility` | 0.1 |  |  |  |  | `All`, `Tool`, `Hangable`, `Wall Hangable` |  |
| `Wyrm Arm` | 25392 | `Wyrm Arm` (46340) | `Complete Tool` | 1 | 4 |  |  |  | `Monster Part`, `All`, `Medium Tool` |  |

## Physical materials

`PhysicalMaterial` assets. Prefabs and crafted parts point at one. The multipliers change the weight and damage of things made from it. The durability multiplier does nothing in this version of the game (see [Durability](../items/durability.md)).

| Material | Hash | Density | Weight mult. | Durability mult. | Damage mult. | Max crafting damage mult. | Melting point | Forge mult. | Hardness | Thermal conductivity | In list | Description |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `Aluminium` | 20178 | 2.7 | 1 | 1.5 | 1 | 1 | 660 | 1 | 0 | 237 |  | Unused |
| `Ash` | 19966 | 150 | 1.5 | 2 | 1.5 | 1 | 660 | 1 | 4 | 237 |  | No Description |
| `Birch` | 37260 | 20 | 0.35 | 1 | 1 | 1 | 660 | 1 | 1 | 237 |  | No Description |
| `Brass` | 11420 | 8.5 | 1 | 1 | 1 | 1 | 900 | 1 | 0 | 129 |  | Unused |
| `Canvas` | 61790 | 2.7 | 1 | 1 | 1 | 1 | 660 | 1 | 1 | 237 |  | No Description |
| `Carsi Alloy` | 24094 | 10.5 | 1.25 | 5 | 1.5 | 1 | 600 | 0.8 | 3 | 0.05 | yes |  |
| `Copper` | 20186 | 8.8 | 0.85 | 0.7 | 0.7 | 0.8 | 1040 | 1.5 | 1 | 0.06 | yes |  |
| `Dais Leather` | 33384 | 2.7 | 1 | 1 | 1 | 1 | 660 | 1 | 1 | 237 |  | No Description |
| `Dais Red Leather` | 37850 | 2.7 | 1.2 | 1 | 1 | 1 | 660 | 1 | 1 | 237 |  | No Description |
| `Darksteel Alloy` | 55232 | 10.5 | 1.5 | 3.5 | 3 | 1 | 961 | 0.2 | 4 | 0.075 |  |  |
| `Evinon Steel Alloy` | 31502 | 10.5 | 3 | 3.5 | 3 | 1.5 | 961 | 0.2 | 5 | 0.075 | yes |  |
| `Gold` | 56394 | 19.4 | 3 | 0.5 | 0.5 | 0.7 | 1064 | 1.2 | 2 | 0.06 | yes |  |
| `Iron` | 1 | 7.9 | 1 | 1 | 1 | 1 | 1528 | 1 | 2 | 0.05 | yes |  |
| `Mythril` | 31174 | 10.5 | 0.75 | 3 | 2.5 | 1.4 | 961 | 0.3 | 4 | 0.03 | yes |  |
| `Oak` | 24722 | 1 | 1 | 1 | 1 | 1 | 660 | 1 | 0 | 237 |  | No Description |
| `Orchi Alloy` | 16222 | 10.5 | 1.75 | 1.5 | 1.75 | 1.5 | 600 | 1 | 5 | 0.03 | yes |  |
| `Red Iron Alloy` | 31468 | 10.5 | 1.2 | 0.85 | 1.5 | 0.9 | 600 | 1 | 2 | 0.02 | yes |  |
| `Redwood` | 10962 | 70 | 0.75 | 1.4 | 1 | 1 | 660 | 1 | 4 | 237 |  | No Description |
| `Redwood Gotera Core Material` | 29972 | 2.7 | 1 | 1 | 1 | 1 | 660 | 1 | 1 | 237 |  | No Description |
| `Rope` | 35204 | 2.7 | 1 | 1 | 1 | 1 | 660 | 1 | 1 | 237 |  | No Description |
| `Silver` | 28618 | 10.5 | 1.5 | 2 | 2 | 0.85 | 961 | 0.75 | 3 | 0.04 | yes |  |
| `Straw` | 16882 | 2.7 | 1 | 1 | 1 | 1 | 660 | 1 | 1 | 237 |  | No Description |
| `Tin` | 54964 | 7.3 | 1 | 0.8 | 1 | 1 | 232 | 1 | 0 | 67 |  | Unused |
| `TrainingMetalCold` | 16064 | 7.9 | 1 | 1 | 1 | 1 | 1528 | 0 | 2 | 0.05 |  | Used for shrine skills |
| `TrainingMetalHot` | 3288 | 7.9 | 1 | 1 | 1 | 1 | 1528 | 0 | 2 | 0.05 |  | Used for shrine skills |
| `Unknown Leather` | 42316 | 2.7 | 1.5 | 1 | 1 | 1 | 660 | 1 | 1 | 237 |  | No Description |
| `Walnut` | 15500 | 90 | 1.25 | 1.4 | 1.5 | 1 | 660 | 1 | 2 | 237 |  | No Description |
| `White Gold Alloy` | 24028 | 10.5 | 1.6 | 1.5 | 1.5 | 0.65 | 600 | 0.8 | 3 | 0.05 | yes |  |
| `Wyrm Face Leather` | 63538 | 2.7 | 0.85 | 1 | 1 | 0.8 | 660 | 1 | 1 | 237 |  | No Description |

## Durability settings

`DurabilitySettings` assets used by `DurabilityModule`. On the server, the module multiplies the damage an item takes by the damage conversion. With "hit points" that damage wears the item down against its durability. With "chance per hit" each hit is a roll to break, weighted by the durability value and the damage.

| Setting | Durability | Type | Damage conversion |
| --- | --- | --- | --- |
| `1 - Very Weak Durability` | 10 | hit points | 0.3 |
| `2 - Weak Durability` | 30 | hit points | 0.3 |
| `3 - Standard Durability` | 60 | hit points | 0.3 |
| `4 - Strong Durability` | 130 | hit points | 0.3 |
| `5 - Very Strong Durability` | 170 | hit points | 0.3 |
| `Break next hit` | 1 | chance per hit | 1 |
| `High Chance` | 0.3 | chance per hit | 1 |
| `Low Chance` | 0.005 | chance per hit | 1 |
| `Standard Chance` | 0.1 | chance per hit | 1 |
| `unbreakable` | 0 | chance per hit | 1 |

## Fuel

`Fuel` item components: how long an item burns in a fire or a smelter.

| Item | Burn duration | Docked burn duration | Efficiency | Efficiency cap | Burn priority mult. | Volume |
| --- | --- | --- | --- | --- | --- | --- |
| `Coal` | 800 | 75 | 1 | 3 | 0.8 | 0.2 |
| `Coal Ash` | 10 | 75 | 1 | 10 | 1 | 0.2 |
| `Fuel Component` | 1 | 75 | 1 | 3 | 0.8 | 0.2 |
| `MRK Fuel Core` | 8000 | 750 | 1 | 10 | 1 | 0.2 |
| `Stick Ashen(Fuel)` | 10 | 75 | 1 | 7 | 1.2 | 0.2 |
| `Stick Ashen(Fuel)` | 1 | 75 | 1 | 7 | 1.2 | 0.2 |
| `Stick Birch` | 10 | 75 | 1 | 7 | 1.2 | 0.2 |
| `Stick Birch` | 1 | 75 | 1 | 7 | 1.2 | 0.2 |
| `Stick Oak(Fuel)` | 10 | 75 | 1 | 7 | 1.2 | 0.2 |
| `Stick Oak(Fuel)` | 1 | 75 | 1 | 7 | 1.2 | 0.2 |
| `Stick Redwood(Fuel)` | 10 | 75 | 1 | 7 | 1.2 | 0.2 |
| `Stick Redwood(Fuel)` | 1 | 75 | 1 | 7 | 1.2 | 0.2 |
| `Stick Walnut(Fuel)` | 10 | 75 | 1 | 7 | 1.2 | 0.2 |
| `Stick Walnut(Fuel)` | 1 | 75 | 1 | 7 | 1.2 | 0.2 |
| `Woodcut Wedge Ash` | 10 | 75 | 0.2 | 10 | 1 | 0.2 |
| `Woodcut Wedge Ashen Ash` | 1 | 75 | 0.2 | 10 | 1 | 0.2 |
| `Woodcut Wedge Ashen Birch` | 1 | 75 | 0.2 | 10 | 1 | 0.2 |
| `Woodcut Wedge Ashen Oak` | 1 | 75 | 0.2 | 10 | 1 | 0.2 |
| `Woodcut Wedge Ashen Redwood` | 1 | 75 | 0.2 | 10 | 1 | 0.2 |
| `Woodcut Wedge Ashen Walnut` | 1 | 75 | 0.2 | 10 | 1 | 0.2 |
| `Woodcut Wedge Birch` | 10 | 75 | 0.2 | 10 | 1 | 0.2 |
| `Woodcut Wedge Burnt Ash` | 200 | 75 | 0.2 | 10 | 1 | 0.2 |
| `Woodcut Wedge Burnt Birch` | 200 | 75 | 0.2 | 10 | 1 | 0.2 |
| `Woodcut Wedge Burnt Oak` | 200 | 75 | 0.2 | 10 | 1 | 0.2 |
| `Woodcut Wedge Burnt Redwood` | 200 | 75 | 0.2 | 10 | 1 | 0.2 |
| `Woodcut Wedge Burnt Walnut` | 200 | 75 | 0.2 | 10 | 1 | 0.2 |
| `Woodcut Wedge Charred Ash` | 350 | 75 | 0.2 | 10 | 1 | 0.2 |
| `Woodcut Wedge Charred Birch` | 350 | 75 | 0.2 | 10 | 1 | 0.2 |
| `Woodcut Wedge Charred Oak` | 350 | 75 | 0.2 | 10 | 1 | 0.2 |
| `Woodcut Wedge Charred Redwood` | 350 | 75 | 0.2 | 10 | 1 | 0.2 |
| `Woodcut Wedge Charred Walnut` | 350 | 75 | 0.2 | 10 | 1 | 0.2 |
| `Woodcut Wedge Oak` | 10 | 75 | 0.2 | 10 | 1 | 0.2 |
| `Woodcut Wedge Redwood` | 10 | 75 | 0.2 | 10 | 1 | 0.2 |
| `Woodcut Wedge Walnut` | 10 | 75 | 0.2 | 10 | 1 | 0.2 |

## Ingots

`Ingot` item components: the material an ingot is made of and how long it takes to smelt.

| Ingot | Material | Smelting duration |
| --- | --- | --- |
| `Bronze Ingot` | `Copper` | 3 |
| `Carsi Ingot` | `Carsi Alloy` | 7 |
| `Copper Ingot` | `Copper` | 3 |
| `Darksteel Ingot` | `Darksteel Alloy` | 8 |
| `Evinon Steel Ingot` | `Evinon Steel Alloy` | 8 |
| `Gold Ingot` | `Gold` | 3 |
| `Iron Ingot` | `Iron` | 3 |
| `Mythril Ingot` | `Mythril` | 3 |
| `Orchi Ingot` | `Orchi Alloy` | 3 |
| `Red Iron Ingot` | `Red Iron Alloy` | 4 |
| `Silver Ingot` | `Silver` | 3 |
| `Steel Ingot` |  | 3 |
| `White Gold Ingot` | `White Gold Alloy` | 6 |
