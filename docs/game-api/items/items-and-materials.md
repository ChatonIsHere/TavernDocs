---
title: Items and materials
description: Item definitions (what a pickup is), tags and lookups, and the physical materials that change an item's damage, hardness, weight and wear.
sidebar_position: 8
---

# Items and materials

## Item

`Alta.Inventory.Item` in `Root.Township`. A `ScriptableObject` asset (through `Alta.HashedGeneralValue<Item>` in `Alta.Values`). The same on both sides; it's data.

An `Item` is the definition behind a pickup: its name, tags, weight, stack size, trade value and size class. Every copy of "Flint" shares one `Item`. Get it from a pickup (`pickup.Item`) or look it up:

| Lookup | Notes |
| --- | --- |
| `HashedGeneralValue<Item>.All` | Every item definition. |
| `HashedGeneralValue<Item>.Get(uint hash)` | By the item's own hash (`item.Hash`). Logs an error if missing. |
| `HashedGeneralValue<Item>.Get(string name, bool isLogging = true)` | By asset name. See the trap below. |
| `Item.GetByPrefabHash(uint prefabHash)` | From a prefab hash, through the prefab's `CommonPickup`. |

:::warning[Name lookups must be lower case]
`HashedGeneralValue<T>.Get(string)` strips spaces from your name but doesn't lower-case it, while the names it compares against are stored lower case. `Get("Iron")` finds nothing; `Get("iron")` works, and the material asset "Carsi Alloy" is `Get("carsialloy")`. This applies to every `HashedGeneralValue<T>` type, including `PhysicalMaterial`.
:::

### Members

| Member | What it does | Notes |
| --- | --- | --- |
| `NetworkPrefab Prefab { get; set; }` | The prefab to spawn for this item. | Pass to `SpawnHelper`. |
| `uint Hash { get; }` | The item's hash. | Not the prefab hash. |
| `List<PickupTag> Tags { get; }` | Tags that docks and recipes test. | `PickupTag` is an empty `ScriptableObject`; compare by reference or `name`. |
| `float Weight { get; }` | Base weight. | `Pickup.PhysicalWeight` applies the material. |
| `bool IsStackable { get; }` / `bool IsStackableWhenCrafted { get; }` | Whether a dock may stack it. | |
| `int DockedStackSize { get; }` | Most per stack in a dock (30 by default). | |
| `int Size { get; }` / `bool HasSize { get; }` | Size class, checked against a dock's minimum and maximum. | Crafted items use the crafting part's size. |
| `LootValue LootValue { get; }` | Trade value. | |
| `Category LootCategory { get; }` | Loot category. | |
| `bool IsScalingOnGrab`, `IsSnappingToHand`, `IsAssistGrabBlocked`, `IsDestroyWhenDocked`, `IsDisabledOnSimpleServer` | Grab and dock behaviour flags. | |
| `bool IsPlayingSound`, `OverridePickUpSoundEffectType`, `OverrideLetGoSoundEffectType` | Grab sounds. | |
| `IEnumerable<ItemComponent> Components` | Extra data blocks (food, fuel and so on). | |
| `T GetComponent<T>(PhysicalMaterial material = null) where T : ItemComponent` | The first component of that type that matches the material. | |
| `PageData CreatePage(int preferredProvider)` | Its recipe or food page. | See [Pages and books](pages-and-books.md). |

### Some item values

Asset values (build main-1.7.2.1.42203):

| Item | Weight | Size | Stack size | Stackable | Tags |
| --- | --- | --- | --- | --- | --- |
| Stick | 0.05 | 1 | 50 | yes | Small, All, Fuel, Torch |
| Flint | 0.35 | 1 | 30 | yes | All, Small, Stackable, Projectile |
| Copper Ore | 0.05 | none | 50 | yes | All, Small, Stackable, Ore, Projectile, Pedestal Placeable |
| Arrow | 0.35 | none | 30 | yes | Small, All, Stackable, Arrow |
| Short Sword | 5 | 4 | 30 | no | Medium Tool, All, Tool |
| Katana | 4 | 4 | 30 | no | Medium Tool, All, Back |
| Rusty Greataxe | 7 | 10 | 30 | no | Back, All, Medium Tool |
| Wooden Bag | 0.4 | 4 | 30 | no | Back, Wall Hangable, Bag |
| Hoarder Bag | 15 | 4 | 1 | no | Back, Wall Hangable, Bag |
| Pouch | 1 | none | 30 | no | All, Small, Projectile |

"Size none" is `size = -1`: `HasSize` is false and docks skip the size check. There are 456 `Item` assets; the reference tables list them all.

Items are shared assets. Changing one (through its private fields) changes every copy on that machine, and the other side won't know. Things like weight and size feed checks on both sides, so change them on server and clients alike or not at all.

## PhysicalMaterial

`PhysicalMaterial` in `Root.Township` (no namespace). A `HashedGeneralValue<PhysicalMaterial>` asset. Data, same on both sides.

Copper, iron, wood types and so on. A material changes how an item behaves:

| Member | What it does |
| --- | --- |
| `float DamageMultiplier` | Multiplies the item's impactors' damage. |
| `uint HardnessLevel` | Given to the item's impactors and detectors. A tool softer than what it hits does nothing (see [Impacts](impacts.md#what-counts-as-a-hit)). |
| `float DurabilityMultiplier` | Meant to multiply the item's durability, but in the shipped code it has no effect (see [Durability](durability.md#asset-values)). |
| `float WeightMultiplier` | Multiplies the item's weight. |
| `float Density`, `MeltingPoint`, `ForgeMultiplier`, `GlowingStart`, `GlowingEnd` | Heat and smithing. |
| `SourceThermalConductivity`, `ReceiveThermalConductivity`, `InternalThermalConductivity` | Heat flow. |
| `NoiseMultiplier`, `NailHealthMultiplier`, `MaxCraftingDamageMultiplier`, `TightnessMultiplier`, `TightnessBowImpact`, `MinimumProjectileWeight`, `MaxInvalidProjectileVelocityMultiplier` | Other tuning values. |
| `Material GetMaterial(PhysicalMaterialChannel)` | The render material. |

### Material values

Asset values for some of the 29 `PhysicalMaterial` assets (build main-1.7.2.1.42203). The reference tables have all of them.

| Material | Hardness | Damage × | Durability × | Weight × | Melting point |
| --- | --- | --- | --- | --- | --- |
| Copper | 1 | 0.7 | 0.7 | 0.85 | 1040 |
| Iron | 2 | 1 | 1 | 1 | 1528 |
| Gold | 2 | 0.5 | 0.5 | 3 | 1064 |
| Silver | 3 | 2 | 2 | 1.5 | 961 |
| Red Iron Alloy | 2 | 1.5 | 0.85 | 1.2 | 600 |
| Carsi Alloy | 3 | 1.5 | 5 | 1.25 | 600 |
| White Gold Alloy | 3 | 1.5 | 1.5 | 1.6 | 600 |
| Mythril | 4 | 2.5 | 3 | 0.75 | 961 |
| Orchi Alloy | 5 | 1.75 | 1.5 | 1.75 | 600 |
| Evinon Steel Alloy | 5 | 3 | 3.5 | 3 | 961 |
| Oak | 0 | 1 | 1 | 1 | |
| Walnut | 2 | 1.5 | 1.4 | 1.25 | |
| Redwood | 4 | 1 | 1.4 | 0.75 | |

Hardness is what lets a pickaxe mine: an `Iron Boulder`'s detector has hardness 1, so a pickaxe head of Copper (hardness 1) or anything harder works on it, while an impactor left at hardness 0 only gets the "ineffective" effect.

## PhysicalMaterialPart

`PhysicalMaterialPart` in `Root.Township` (no namespace). A networked behaviour on items that have a material. The server picks and syncs the material; clients follow.

| Member | What it does | Notes |
| --- | --- | --- |
| `PhysicalMaterial PhysicalMaterial { get; }` | The current material. | |
| `void SetMaterial(PhysicalMaterial)` | Changes it: re-scales impactor damage, sets hardness, tells `IListenToPhysicalMaterial` components, swaps renderers, updates durability. | Syncs to clients only when called on the server. |
| `event ChangedMaterial MaterialChanged` | `delegate void ChangedMaterial(PhysicalMaterial, PhysicalMaterialChannel)` | |

Get it with `pickup.PhysicalMaterial` (a `Pickup` property that returns the part, not the material: `pickup.PhysicalMaterial?.PhysicalMaterial` is the material).

```csharp
public static void MakeIron(Pickup pickup)
{
    PhysicalMaterial iron = Alta.HashedGeneralValue<PhysicalMaterial>.Get("iron", isLogging: false);
    if (iron != null && pickup.PhysicalMaterial != null && NetworkSceneManager.IsServer)
        pickup.PhysicalMaterial.SetMaterial(iron);
}
```

"iron" stands for whatever the asset is called; list `HashedGeneralValue<PhysicalMaterial>.All` to see the names.

Things to know:

- New items get a material from the prefab's material distribution when the server generates them, from save data when loaded, or from a spawn argument: the spawn command's extra words are tried as material names (`ISpawnArguments.CheckArguments`).
- Two stacked items must share a material. `PhysicalMaterialPart` is an `IInterfereWithDocking`, so a dock refuses iron on top of copper (`DockingInterferedWith`).
- `SetMaterial` multiplies into `ImpactGenerator.Multipliers` and divides the old material back out, so calling it again with the same material is safe.
- Durability mods hook `DurabilityModule.UpdateMaterial(PhysicalMaterial)`, which `SetMaterial` calls. ATTMateriaLib patches it to scale durability per material.

## See also

- [Docks](docks.md)
- [Durability](durability.md)
- [Impacts and hit detection](impacts.md)
