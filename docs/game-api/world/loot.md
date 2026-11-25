---
title: Loot
description: How containers fill with loot. LootTable, Rarity, Origin and Category, LootModule and GeneratedLoot, preset sets, debug packages, and where to hook a loot roll.
sidebar_position: 14
---

# Loot

Chests, crates, sacks and cave containers fill themselves from loot tables when they first generate, and refill on a timer. The roll goes rarity, then origin (which set of tables), then category, then an item. It's all server side, in `Alta.Loot` in `Root.Township`.

## How a container fills

1. A container has a `LootModule` (or the cave's `GeneratedLoot`) and a group of docks to fill.
2. On `InitializeAsServer`, if `SpawnData.ShouldGenerate(spawnData, isGeneratingFirstLoad: true)`, it fills now. That's true for a fresh spawn with `SpawnData.Default` and for the first load of a chunk's default save. Either way it registers a repeating refill on the `Timeline`.
3. Filling is `LootHelper.Spawn(spawnData, docks, incrementingFailChance)`.

`LootHelper.Spawn`:

1. **Empties every dock first** (`DestroyAmount(QuantityStored)`). A refill throws away what's there.
2. Works out the prosperity from the `SpawnData`'s biome attributes (or a random default) as the rarity weighting power.
3. Loops: adds `incrementingFailChance` to a running fail chance and stops when a random roll falls under it; otherwise picks a random dock, and if it's empty rolls an item for it (`LootTable.GetLoot`) and spawns it docked. It stops when every dock has been filled once.
4. In a biome blend (`GeneratedBiome.From` and `To`), each roll uses the `To` biome's tables with chance `Transition`.

So the number of items is random: with the shipped loot modules' `incrementingFailChance` of 0.025 the chance of stopping goes up 2.5% per roll, and with crates' 0.1 it goes up 10%.

:::warning[It needs a biome]
`LootHelper.Spawn` reads the loot tables of `spawnData.Biome.From`. With a `SpawnData` that has no biome, such as `SpawnData.Default`, it throws. Containers don't use the `SpawnData` they were spawned with: they build one from their chunk's `SpawnData` (or their override biome), so a container in a chunk without a biome (the global chunk) fails to fill. If you call `LootHelper.Spawn` yourself, pass `chunk.SpawnData` of a `LocationChunk`, or a `SpawnData` made with a `GeneratedBiome`.
:::

## LootTable.GetLoot

`static Item GetLoot(PickupDock dock, LootTable[] localTables, float weightingPower, out int count, out Rarity rarity, out Origin origin)`, with a shorter overload that only returns `count`.

1. **Rarity**: `Rarity.GetRandom(weightingPower, tried)`. Rarities come from `Resources/Items/Rarities/`: `1. Common` (weighting 50), `2. Uncommon` (28), `3. Rare` (14), `4. Epic` (7) and `5. Legendary` (1). The roll compares a random value against the running share raised to `weightingPower`, so a prosperity above 1 favours the rarer ones.
2. **Origin**: `Origin.GetRandom(rarity, tried)`, weighted by that rarity's `OriginWeightings`. The game has three: `Local` (the biome's own tables, 60 to 65%), `Global` (the `[Global]` table, 35%) and `Remote` (every other table except `[Global]` and `Hebios Climbing`, 5% for common loot down to 0% for legendary). An origin says which tables count: the biome's local tables (if `isAllowingLocal`), plus either a whitelist of tables or every table in `Resources/Items/Loot Tables/` except a blacklist.
3. **Items**: every entry of the chosen rarity in those tables, plus festival entries whose `Festivity.IsActivated`, filtered to what the dock accepts (`dock.CheckAllowed`).
4. **Category**: `Category.Filter` picks one item `Category` by weighting and keeps only its entries.
5. **Item**: one entry at random, `count = Random.Range(entry.Minimum, entry.Maximum)`.

The game ships three tables: `[Global]` (8 common entries such as coal, flint, stone and arrows, 31 uncommon, 21 rare, 8 epic and 6 legendary, mostly weapon and tool parts), `Hebios` and `Hebios Climbing`. Biomes add their own as local tables.

If an origin gives nothing it tries another; if a rarity gives nothing it tries another. It returns null when all fail.

`Random.Range` with two ints never returns the maximum, so an entry's `Maximum` is never reached unless it equals `Minimum`. `[Global]`'s coal entry says 5 to 9 and gives 5 to 8. That's the game's behaviour; keep it in mind if you add entries.

### Hooking a roll

```csharp
// See what the loot roll picked for each dock.
[HarmonyPatch(typeof(LootTable), nameof(LootTable.GetLoot),
    new[] { typeof(PickupDock), typeof(LootTable[]), typeof(float), typeof(int), typeof(Rarity), typeof(Origin) },
    new[] { ArgumentType.Normal, ArgumentType.Normal, ArgumentType.Normal, ArgumentType.Out, ArgumentType.Out, ArgumentType.Out })]
static class WatchLoot
{
    static void Postfix(Item __result, int count, Rarity rarity)
    {
        if (__result != null) MelonLogger.Msg($"Loot: {count} x {__result.name} ({rarity?.name})");
    }
}
```

The short overload calls the long one, so this catches both. To change what drops, take `ref Item __result` and `ref int count`; the dock is the first argument if you need to know what it accepts.

To add items to existing tables, change `LootTable.Entries` (a `List<RarityList>`) at startup; each `RarityList` has `Rarity`, `Entries` and `FestivityEntries`. The entry fields are private, so build entries with `AccessTools` or Traverse.

## LootModule

`Alta.Loot.LootModule`, a `NetworkEntityBehaviour` on containers.

| Field (serialized, private) | Field default | On the shipped `Loot Module` prefab | What it does |
| --- | --- | --- | --- |
| `overrideBiome` | none | `OW Human Constructs` (`Hebios` on Hebios chests) | Use this biome instead of the chunk's. |
| `incrementingFailChance` | 0.05 | 0.025 | See above. |
| `prosperity` | 1 | 1 | Set as the prosperity attribute on its `SpawnData`. |
| `isOneOff` | false | false | Fill once, then destroy this module. |
| `respawnFrequency` | 172,800 s (2 days) | 43,200 s (12 hours) | Refill interval, on the timeline. Saved; values under 60 are ignored on load. |

`PickupDockGroup Group` is the docks it fills (from a parent `PickupDockGroup`). It saves its next refill time; a refill that came due while the server was off happens once, shortly after load.

`GeneratedLoot` (a `DockArray`, on the `Crate`, `Placement Crate`, `Random Placement Crate` and `Structure Chest` prefabs) does the same with its own docks, using its chunk's `SpawnData`. Its field defaults are 0.1 and 1 day; the shipped `Crate` has 4 docks, 0.1 and 12 hours.

Timeline time is real time multiplied by the server's time speed, so a 12 hour refill is 12 real hours at normal speed. See [Time and environment](time-and-environment.md).

## Preset loot

`PresetLootModule` with a `PresetLootSet` asset fills docks with a fixed set rather than a roll (optionally clearing them first), when its `Spawn()` is called.

## Debug packages

`PackageManager` (static) loads `DebugPackage` assets from `Resources/Items/Packages/` by lowercase name without spaces. `PackageManager.DropPackage(string packageName, Player player = null, params string[] arguments)` (server) spawns every prefab in the package in front of the player, or at the original spawn point with no player: stackables as a pouch, others one by one 0.1 s apart. `spawn package list` and `spawn package drop <players> <name>` are the console side. The shipped packages are alloys, arrows, battle, blacksmith, break, chess, cooking, explore, flock, guards, handles, hebios, ingredients, rusty, spikes, vegetablespack, vegetables1pack and wack (as `PackageMap` keys).

## See also

- [Spawning](spawning.md#spawndata)
- The Items area, for `Item`, `PickupDock` and `PickupDockGroup`
