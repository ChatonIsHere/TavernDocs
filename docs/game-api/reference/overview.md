---
title: Reference tables
description: Generated tables of the game's prefabs, items, recipes, creatures and stats.
sidebar_position: 1
---

# Reference tables

These pages list what's in the game's data: every spawnable prefab, every item, recipe, creature and stat, with their hashes and key values. Use them to find the name or hash to pass to `spawn`, to see what an item weighs or what a recipe needs, or to pick a prefab to patch.

They are generated, so don't edit them by hand. The game's own data stays Alta's; these are names and numbers, not copies of the assets.

| Page | What's in it |
| --- | --- |
| [Spawnable prefabs](spawnable-prefabs.md) | 1346 network prefabs with hash, kind and main scripts |
| [Items and materials](items-and-materials.md) | 456 items, 29 physical materials, durability settings, fuel and ingots |
| [Recipes](recipes.md) | 138 smelting, stew, crafting deck, chisel and mould recipes, plus cookables |
| [Creatures](creatures.md) | 50 prefabs with an AI class, their stats and 61 action sets |
| [Stats](stats.md) | 22 stat definitions, player defaults and stat effects |

## Where the data comes from

The tables are read from the game's own asset files (build `main-1.7.2.1.42203`): the `.assets` files and the Addressables bundles under `StreamingAssets`. The script fields of each `MonoBehaviour` and `ScriptableObject` are decoded with type trees rebuilt from the game's DLLs, so the field names match the C# fields (`hash`, `prefabHash`, `weight` and so on). The fields these pages use were checked against the decompiled server build.

"Spawnable" means what `PrefabManager.PrepareSpawnSetups` loads: GameObjects under the `Network Prefabs` Resources folder that have a `NetworkPrefab` on the root. The Resources paths come from the `ResourceManager` in `globalgamemanagers`.

Hashes were checked against a runtime dump from a live server: 0 differ (shown as "live" in the table) and 0 prefabs weren't in it.

## How to regenerate

1. Dump the game's prefabs and ScriptableObjects to JSON with UnityPy, using type trees built from the game's managed DLLs (`TypeTreeGenerator`). Each prefab becomes a tree of objects and components with their script fields, and each ScriptableObject a file under its class name.
2. Build a reference map from the same files: the external file list of each serialized file, a name and class for every GameObject and `MonoBehaviour`, the Resources paths, and the prefab references held by the AI components. The JSON dump only names references inside one file, so this is what turns `ref(2:18937)` into `Iron`.
3. Run the generator (Python standard library only). It reads the dump and the map and writes these pages. If a runtime dump of prefab names and hashes from a live server is present, it checks the hashes against it.

After a game update, run all three steps again and diff the pages.

## How prefabs are sorted

The **kind** column on [Spawnable prefabs](spawnable-prefabs.md) is a guess made from the scripts on the prefab's root object, tested in this order:

1. **creature**: an `Agent<T>` AI class anywhere in the prefab, and a `HealthObject` on the root. Without the `HealthObject` it's an **AI-driven object**.
2. **item**: the root `Pickup` names an `Item` asset, or some `Item` asset's `prefabHash` names this prefab. A `Pickup`, `MultiHandPickup` or `KeyItem` with neither is a **pickup without an Item asset**.
3. **stew** (`StewComponent`), **projectile** (`Projectile`, `Arrow`, `SeedSpray`), **plant or tree** (`GrowerComponent`, `WoodcutTreeModel`, `BasicDigable`, or Tree, Flower, Sapling or Bush in the name).
4. **spawner or population** (`PopulationSpawnArea`, `SpawnArea`, cluster generators), **breakable or resource node** (a `HealthObject`), **world and cave pieces** (cave chunks, generation cores).
5. **debris or timed effect** (`NetworkDestroyTimed`), **logic and puzzle** (`Logic*` senders and receivers, levers, doors), **effect**.
6. Anything left with game scripts is **station, structure or other**; with none it's a **static object**.

## Caveats

- The data was read from the client's asset files. The server build uses the same serialized fields for these classes (checked in its decompile). A mod or a server patch can still change values at runtime.
- Lists longer than 40 entries were cut in the dump. Where that happened, the cell says so.
- Some references point at objects the dump couldn't name. Those cells are blank.
- Crafted items change material and durability when they're made. The material shown is the prefab's default.
- Values are rounded to four decimal places.
- The kind column is a guess from the data. Check the prefab before relying on it.
- Creature stats are the prefab defaults. A `LevelStatModifier` on a creature adds a modifier to one stat based on the creature's level, so a live creature can differ.
