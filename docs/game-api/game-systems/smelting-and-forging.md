---
title: Smelting and forging
description: The Smelter and its recipes, upgrades and moulds, bellows, ForgedModel hammering, and the recycler.
sidebar_position: 9
---

# Smelting and forging

`Alta.Blacksmithing` in `Root.Township`, plus the top-level `Mould`, `MouldDefinition`, `Bellows`, `SteelSong` and `Alta.Inventory.Ingot`. Server only for the rules.

Metal goes: ore into the **smelter**, which makes ingots (smelting recipes) or, with a mould in it, hot metal parts (moulds). Hot parts are hammered on an anvil until done (**forging**). Old metal goes into the **recycler**, which melts it back.

## Smelter

`Alta.Blacksmithing.Smelter : NetworkEntityBehaviour`. One per smelter in the world.

It has ore docks, fuel docks, one mould dock, a `Bellows`, an inner `Fire` and a `SmelterUnlockManager`. Docking anything into an ore or fuel dock, or adding an upgrade, calls `CheckSmelt`, which on the server (and only when not already smelting) starts the private `TrySmelt` coroutine after half a second.

`TrySmelt` loops while there's ore and fuel and something to make:

1. **Input** is every distinct item across the ore docks, with counts.
2. **Fuel** is the time left in the current fuel plus `debugFuelDuration` (10 seconds on the `Smelter` prefab) times the count in the first non-empty fuel dock. Every fuel item is worth the same here: `Fuel` components aren't used.
3. **Recipe.** `FindRecipe` takes the first `SmeltingRecipe` in the `SmelterUnlockManager` whose input items match the ore docks' distinct items exactly (no extra item types), with enough of each, and whose `Duration` fits in the fuel. It consumes the input.
4. **Mould**, if no recipe matched: only one ore type may be docked, it must be an `Ingot` in the mould's `AllowedMaterials`, its material must be unlocked, and there must be `Cost` of it and `Ingot.SmeltingDuration * Cost` of fuel. It consumes the ingots and one use of the mould (`Mould.Consume`), destroying the mould when it reaches 0 uses.
5. **Progress** goes up each frame by `Time.deltaTime * bellows.SteadyValue * unlockManager.SpeedMultiplier`, divided by the recipe's fuel time. Fuel items are used one at a time as the time runs out.
6. **Output** spawns at `spawnPoint`: each recipe output `Count` times, or the mould's product `QuantityProduced` times with its `MeltingModel` or `PhysicalMaterialPart` set to the ingot's material. Players whose ore was used are reported to `GameTaskManager` (`SpecificSpawnItemTaskArgument`, filter `Smelt`).

| Member | What it does | Notes |
| --- | --- | --- |
| `bool IsSmelting { get; }` | Whether it's running. | |
| `void CheckSmelt()` | Starts smelting if it can. | Server. Safe to call after you change docks or unlocks. |
| `override void InitializeAsServer(SpawnData)` | Rechecks the inner fire at start. | A good postfix to set per-smelter values. |

The smelter saves its state (progress, fuel left, current recipe or mould result) and resumes smelting on load.

## SmeltingRecipe

`Alta.Blacksmithing.SmeltingRecipe : HashedGeneralValue<SmeltingRecipe>`. An asset.

| Member | What it does |
| --- | --- |
| `ItemCount[] Input { get; }` | Items and counts needed. `ItemCount` has `Item Item` and `int Count` (private fields `item` and `count`). |
| `ItemCount[] Output { get; }` | What it makes. |
| `float Duration { get; }` | Fuel seconds it needs. Default 2. |

Recipes are tried in the `SmelterUnlockManager`'s `HashSet` order, and the first match wins.

## SmelterUpgrades and SmelterUnlockManager

`SmelterUpgrades : HashedGeneralValue<SmelterUpgrades>` is a bundle: `Recipes`, `PhysicalMaterials` (metals moulds may use) and `BonusSmelterSpeed`.

`SmelterUnlockManager : MonoBehaviour` is on each smelter. In `Awake`, on the server, it unlocks its default upgrades, or a different set on a simple server. `NetworkScene.IsSimpleServer` is set while the scene starts on the server when `ServerHandler.Current.ServerInfo.Target` has the Quest bit (`PlatformTarget.Quest`, 2). The local server info the game builds for a PC server has target 1, and TavernLib only adds the Quest bit when the scene index is forced to 4, so on an ordinary Tavern server smelters start with `DefaultUpgrades`. Upgrade items docked in a `SmelterRecipeUnlock` dock add theirs (`ItemSmelterRecipeUnlock.UnlockDefinition`) and take them away when undocked.

| Member | What it does |
| --- | --- |
| `IReadOnlyCollection<SmeltingRecipe> Recipes { get; }` | Recipes this smelter knows now. |
| `IReadOnlyCollection<PhysicalMaterial> PhysicalMaterials { get; }` | Metals its moulds accept. |
| `float SpeedMultiplier { get; }` | 1 plus every active bundle's bonus. |
| `void Unlock(SmelterUpgrades definition)` | Adds a bundle and raises `UnlockAdded` (which re-checks smelting). |
| `void Lock(SmelterUpgrades definition)` | Removes a bundle, keeping recipes another active bundle still gives. |
| `event Action UnlockAdded` | |

The manager copies recipes out of the upgrade assets when it unlocks them. Adding a recipe to a `SmelterUpgrades` asset after smelters have woken changes nothing for those smelters; call `Unlock` again or add it before the world loads. CustomRecipesAPI adds its recipes to the simple server default set (hash 5674) unless told otherwise, and registers them in `HashedGeneralValue<SmeltingRecipe>`'s private `items` table. It also adds the input items to the `Ore Dock` `PickupDockSettings`, because the ore docks refuse items not on that list. Going by the paragraph above, a recipe added only to the simple server set isn't available on an ordinary Tavern server until a smelter unlocks a bundle that contains it.

The server build also has a `smelter` console command ("fixes the smelter", in `WackyCommandModule`): it spawns a fresh copy of the first `Smelter` it finds, undocks everything from the old one and destroys it.

## What the game ships

:::note[Asset values]
Build `main-1.7.2.1.42203`. The reference tables list every recipe, mould and ingot. Item names in recipes are read from the recipe names where the asset points into another file.
:::

The `Smelter` prefab has 2 ore docks, 1 fuel dock and a mould dock. Its `SmelterUnlockManager` starts with `DefaultUpgrades`, or `SimpleServerDefaultUpgrades` (hash 5674) on a simple server:

| Upgrade bundle | Recipes | Speed bonus |
| --- | --- | --- |
| `DefaultUpgrades` | Copper, Gold and Iron ingots | 0 |
| `Smelter Gem 1` | Silver, Red Iron (from ingots or ore) | +0.25 |
| `Smelter Gem 2` | Mythril, Carsi, White Gold (from ingots or ore) | +0.25 |
| `Smelter Gem 3` | Evinon Steel and Orchi (from ingots or ore) | +0.5 |
| `SimpleServerDefaultUpgrades` | all of the above | 0 |

Each bundle also unlocks the matching metals for moulds. With all three gems docked, `SpeedMultiplier` is 2.

Representative recipes (fuel seconds is `Duration`):

| Recipe | Input | Output | Fuel seconds |
| --- | --- | --- | --- |
| Copper, Iron, Gold, Silver or Mythril Ingot | 3 of that ore | 1 ingot | 5 |
| Red Iron Ore to Ingot | 3 Iron Ore + 4 Copper Ore | 1 Red Iron Ingot | 7 |
| Red Iron Ingot to Ingot | 1 Iron Ingot + 1 Copper Ingot | 1 Red Iron Ingot | 7 |
| Carsi Ingot | 1 Red Iron Ingot + 4 Silver Ore | 1 Carsi Ingot | 7 |
| Evinon Steel Ore to Ingot | 4 Silver Ore + 6 Mythril Ore | 1 Evinon Steel Ingot | 10 |

A `Darksteel Ingot` recipe exists but no bundle contains it, so no smelter can make it.

For moulds, `Ingot.SmeltingDuration` is 3 for copper, iron, gold, silver, mythril and orchi, 4 for red iron, 6 for white gold, 7 for carsi and 8 for evinon steel and darksteel. A mould costs `Cost` ingots (from 2 for the chisel mould to 8 for the great curve axe head), so an iron axe head curve mould (cost 4) needs 12 fuel seconds, a bit over one fuel item. The plain `Mould` prefab has `usage` -1 (never wears out); `Hebios Crafted Mould` has 3 uses.

## Moulds

| Type | What it is |
| --- | --- |
| `MouldDefinition` | `HashedGeneralValue<MouldDefinition>`. `Product` (an `Item`), `Cost` (ingots used), `QuantityProduced`, `AllowedMaterials` (an `ItemSet` of ingots), `IsFindable`. `static GetDefinition(Item product)`, `static GetRandom()`. |
| `Mould` | The mould item. `Definition`, `Usage` (uses left; -1 never runs out), `bool Consume()` (uses one, true when used up). |
| `Ingot` | `ItemComponent` on ingot items: `SmeltingDuration` and `PhysicalMaterial`. |
| `MouldRack` | Visual rack for moulds. |

## Bellows

`Bellows : MonoBehaviour`, top level. Part of a smelter. Updates while its handle is held and until it settles.

| Member | What it does |
| --- | --- |
| `float SteadyValue { get; }` | The smelter's speed factor: falls by `cooldownPerSecond` towards `baseValue`, rises while pumping during smelting, capped at `maxValue`. |
| `float Value { get; }` | `SteadyValue` plus the current pumping, for visuals. |
| `Smelter Smelter { get; set; }` | The smelter it belongs to. |
| `event Action<Bellows, float> UpdatesSteadyValue` | |

While someone holds the handle, the server calls `GainExperience` every frame with `ProgressionSettings.BellowsPumpToExperience * pumping`. That setting is 0 in the asset, so pumping gives no XP. The recycler and others use the similar `PumpingMechanism`.

On the smelter prefab (asset values): `baseValue` 1, `maxValue` 2, `cooldownPerSecond` 0.01. So pumping can at most double the smelting speed, and once you stop the extra drains back at 0.01 a second (about 100 seconds from double to normal).

## Forging

`Alta.Blacksmithing.ForgedModel : ForgedModel<NullColorModelPoint, NullColorModelPoint>`, on hot metal parts. Each part has `ForgedPoints`, each a point with its own `HeatPoint` and a `Progress` from 0 to 1.

On every valid hit (`HandleHit`, from the part's `ImpactDetector.Hit`):

- Each point takes damage that falls off with distance from the hit, times the material's `ForgeMultiplier`. On the server, its `Progress` goes up by that damage times the point's `Glow`, so cold metal barely moves.
- On the server, the hit also adds heat to the points (`ForgedHitEffectOverride.HitHeat`), and if the part isn't done, gives Forging XP shared between the hitter and the holder (`GainSharedExperience`).
- When every point reaches 1, `SetComplete` marks it done, syncs it and broadcasts an `ItemForgedEvent` on the event bus.

| Member | What it does |
| --- | --- |
| `bool IsDone { get; }` | Finished. |
| `List<ForgedPoint> ForgedPoints { get; }` | The points. |
| `PhysicalMaterial PhysicalMaterial { get; set; }` | The metal. |
| `void ForceComplete(bool isPlayingEffects)` | Sets every point to 1 and completes it. |

`SteelSong` is a forging skill: hitting in rhythm builds a count, and at the top level the next hits do more (`activeDamageMultiplierPerHit`). The server takes the count the client reports.

## Recycler

`Alta.Blacksmithing.Recycler : NetworkEntityBehaviour`. Pump its bellows (`PumpingMechanism`) and it burns fuel from its fuel dock and raises its `HeatArea`'s target temperature. On the server, any `MeltingModel` in the area whose heat points all reach the material's `GlowingEnd` (and that allows melting) is destroyed and adds `IngotValue * recycleEfficiency` (0.6 on the `Recycler` prefab, whose `targetTemperature` is 3000) to the output slot for its metal.

`MeltingModel` (abstract) is on meltable metal items: `IsAtMeltingPoint`, `IngotValue` (after `MeltingModelModifier`s such as durability), `PhysicalMaterial`, and `Setup(PhysicalMaterial)` which the smelter calls on mould output.

## Hooking it

- **Fuel per item:** the private field `debugFuelDuration` on each `Smelter` (reach it with `AccessTools`, as below). Set it in a postfix of `InitializeAsServer`.
- **What a smelter can make:** `SmelterUnlockManager.Unlock(upgrades)` on the server, then `CheckSmelt`. Your recipe's items must be accepted by the ore docks and exist on clients.
- **Output position:** CustomRecipesAPI offsets output by prefixing `SpawnHelper.Spawn` and checking the call stack for `Smelter`'s `TrySmelt`. `TrySmelt` is a coroutine, so its body is in a compiler-made state machine class (`<TrySmelt>d__N`), not in a method you can patch directly by name.
- **Forging XP** goes through `GainSharedExperience`, then `GainExperience`. See [Progression](progression.md).

```csharp
[HarmonyPatch(typeof(Smelter), nameof(Smelter.InitializeAsServer))]
static class SmelterFuelPatch
{
    static readonly AccessTools.FieldRef<Smelter, float> FuelDuration =
        AccessTools.FieldRefAccess<Smelter, float>("debugFuelDuration");

    static void Postfix(Smelter __instance)
    {
        FuelDuration(__instance) = 20f;
    }
}
```

Listing what a smelter knows (the `unlockManager` field is private):

```csharp
static readonly AccessTools.FieldRef<Smelter, SmelterUnlockManager> Unlocks =
    AccessTools.FieldRefAccess<Smelter, SmelterUnlockManager>("unlockManager");

public static void Log(Smelter smelter)
{
    SmelterUnlockManager unlocks = Unlocks(smelter);
    foreach (SmeltingRecipe recipe in unlocks.Recipes)
    {
        string input = string.Join(" + ", recipe.Input.Select(i => $"{i.Count} {i.Item.name}"));
        string output = string.Join(" + ", recipe.Output.Select(o => $"{o.Count} {o.Item.name}"));
        MelonLogger.Msg($"{input} -> {output} ({recipe.Duration} s of fuel)");
    }
}
```

## Other types in this area

| Type | What it is |
| --- | --- |
| `ForgedPoint`, `ForgedPointCollection` | A forging point and the collection that syncs and saves them. |
| `HeatModel`, `MetalHeatPoint`, `MeltingHeatPoint` | Heat and glow on metal parts. |
| `MeltingModelModifier`, `DurabilityMeltingYieldModifier`, `CraftingMeltingAllowedModifier` | Change a part's melting yield or whether it may melt. |
| `RecyclerOutputSlot` | Collects recycled metal per material and spawns the material's source item (`SourceMaterialHash`) from it. |
| `CoinPress` | A lever press that turns what's in its input dock into its `outputItem`. |

## See also

- [Heat](heat.md)
- [Crafting](crafting.md), for joining forged parts
- [Progression](progression.md)
