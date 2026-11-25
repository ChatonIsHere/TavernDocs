---
title: Crafting and making
description: "Types in Alta.Crafting, Alta.Blacksmithing, Alta.Carpentry, Alta.Cooking, Alta.Woodcutting and nearby namespaces."
sidebar_position: 7
---

# Crafting and making

Types in Alta.Crafting, Alta.Blacksmithing, Alta.Carpentry, Alta.Cooking, Alta.Woodcutting and nearby namespaces. 252 types, 75 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## Alta.Blacksmithing

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `BasicMeltingModel` | class | `MeltingModel` | 1 |  |
| `CraftingMeltingAllowedModifier` | class | `MeltingModelModifier` | 2 | [Smelting and forging](../game-systems/smelting-and-forging.md) |
| `DurabilityMeltingYieldModifier` | class | `MeltingModelModifier` | 2 | [Smelting and forging](../game-systems/smelting-and-forging.md) |
| `DynamicQueue<T>` | class |  | 4 |  |
| `ForgedModel` | class | `ForgedModel<NullColorModelPoint, NullColorModelPoint>`, `IInterfereWithDocking` | 1 |  |
| `ForgedModel<TB, TA>` | abstract class | `HeatModel<ForgedPoint, TB, TA>`, `ISpawnArguments`, `IAffectCrafting` | 11 |  |
| `ForgedPoint` | class | `MonoBehaviour`, `IColorModelPoint<ForgedPoint>`, `IChildSyncable<ForgedPoint, ForgedPointCollectionSaveData.Element>`, +1 more | 12 | [Smelting and forging](../game-systems/smelting-and-forging.md) |
| `ForgedPointCollection` | class | `ChildSyncableCollection<ForgedPoint, ForgedPointCollection, ForgedPointCollectionSaveData, ForgedPointCollectionSaveData.Element>`, `IEntityReplaceHandler` | 1 | [Smelting and forging](../game-systems/smelting-and-forging.md) |
| `HeatModel` | class | `HeatModel<NullColorModelPoint, NullColorModelPoint, NullColorModelPoint>` | 0 | [Smelting and forging](../game-systems/smelting-and-forging.md) |
| `HeatModel<TG, TB, TA>` | abstract class | `ColorModel<MetalHeatPoint, TG, TB, TA>` | 0 | [Smelting and forging](../game-systems/smelting-and-forging.md) |
| `IDynamicQueueElement<T>` | interface |  | 2 |  |
| `MeltingHeatPoint` | class | `HeatPoint` | 2 | [Smelting and forging](../game-systems/smelting-and-forging.md) |
| `MeltingModel` | abstract class | `NetworkEntityBehaviour` | 13 |  |
| `MeltingModelAllowed` | delegate |  | 0 |  |
| `MeltingModelModifier` | abstract class | `ScriptableObject` | 2 | [Smelting and forging](../game-systems/smelting-and-forging.md) |
| `MeltingModelPart` | class | `MeltingModel` | 2 |  |
| `MeltingModelYield` | delegate |  | 0 |  |
| `MetalHeatPoint` | class | `HeatPoint`, `IColorModelPoint<MetalHeatPoint>` | 4 | [Smelting and forging](../game-systems/smelting-and-forging.md) |
| `MouldRack` | class | `MonoBehaviour` | 1 | [Smelting and forging](../game-systems/smelting-and-forging.md): Visual rack for moulds. |
| `Recycler` | class | `NetworkEntityBehaviour`, `ISavable<RecyclerSaveData>`, `ISavableSave<RecyclerSaveData>`, +1 more | 4 | [Smelting and forging](../game-systems/smelting-and-forging.md#recycler): Pump its bellows (`PumpingMechanism`) and it burns fuel from its fuel dock and raises its `HeatArea`'s target temperature. |
| `RecyclerOutputSlot` | class | `MonoBehaviour`, `IDynamicQueueElement<RecyclerOutputSlot>`, `IBuildRendererPostBake`, +1 more | 13 | [Smelting and forging](../game-systems/smelting-and-forging.md): Collects recycled metal per material and spawns the material's source item (`SourceMaterialHash`) from it. |
| `RecyclerOutputSlot.SaveData` | class |  | 3 |  |
| `RecyclerSaveData` | class | `ChildSyncableCollectionSaveData<RecyclerSaveData, Recycler, RecyclerOutputSlot.SaveData>` | 0 |  |
| `Smelter` | class | `NetworkEntityBehaviour`, `ISavableFull<SmelterSaveData>`, `ISavable<SmelterSaveData>`, +3 more | 5 | [Smelting and forging](../game-systems/smelting-and-forging.md#smelter): One per smelter in the world. |
| `SmelterSaveData` | internal class | `NewSaveData<Smelter, SmelterSaveData>` | 8 |  |
| `SmelterUnlockManager` | class | `MonoBehaviour` | 6 | [Smelting and forging](../game-systems/smelting-and-forging.md#smelterupgrades-and-smelterunlockmanager) |
| `SmelterUpgrades` | class | `HashedGeneralValue<SmelterUpgrades>` | 3 | [Smelting and forging](../game-systems/smelting-and-forging.md#smelterupgrades-and-smelterunlockmanager) |
| `SmelterUpgrades.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Blacksmithing.ScriptableObject<SmelterUpgrades>` | 0 |  |
| `SmeltingRecipe` | class | `HashedGeneralValue<SmeltingRecipe>` | 3 | [Smelting and forging](../game-systems/smelting-and-forging.md#smeltingrecipe): Recipes are tried in the `SmelterUnlockManager`'s `HashSet` order, and the first match wins. |
| `SmeltingRecipe.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Blacksmithing.ScriptableObject<SmeltingRecipe>` | 0 |  |

## Alta.Carpentry

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `BuilderDock` | class | `NetworkEntityBehaviour`, `IBuildRendererBakeable`, `IBuildBakeable` | 8 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md) |
| `BuilderDock.BoolDelegate` | delegate |  | 0 |  |
| `Chiselable` | class | `MonoBehaviour`, `IChiselable` | 7 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md) |
| `ChiselableEvent` | class | `AltaEvent<Chiselable, float, Vector3, Vector3, ChiselableUnityEvent>` | 0 |  |
| `ChiselableUnityEvent` | class | `UnityEvent<Chiselable, float, Vector3, Vector3>` | 0 |  |
| `ChiselBlockSize` | enum |  | 4 |  |
| `ChiselDefinition` | class | `SimpleHashedGeneralValue<ChiselDefinition>`, `IPageBasis` | 11 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md): `SimpleHashedGeneralValue<ChiselDefinition>` under `Carpentry/Chisel Definitions`: a recipe page for chiselling. |
| `ChiselDefinition.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Carpentry.ScriptableObject<ChiselDefinition>` | 0 |  |
| `ChiselHit` | delegate |  | 0 |  |
| `ChiselingFilter` | class | `MonoBehaviour` | 0 |  |
| `ChiselingFilterSettings` | class | `ImpactorFilter` | 1 |  |
| `ChiselingTool` | class | `CraftableImpactDetectorBase` | 4 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md) |
| `ChisellingDeck` | class | `NetworkEntityBehaviour`, `ISavableFull<ChisellingDeckSaveData>`, `ISavable<ChisellingDeckSaveData>`, +3 more | 16 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md): Holds the current `TimberBlock` (`CurrentBlock`), the `Guide` (`ChiselDefinition`), its size and `MaxSize`. `Resize(ChiselBlockSize)` is server only. |
| `ChisellingDeck.BuilderLevel` | class |  | 2 |  |
| `ChisellingDeckSaveData` | class | `NewSaveData<ChisellingDeck, ChisellingDeckSaveData>` | 7 |  |
| `ChisellingDeckSaveData2` | class | `OldSaveData` | 7 |  |
| `DeckClamp` | class | `MonoBehaviour` | 0 |  |
| `IChiselable` | interface |  | 4 |  |
| `OldChisellingDeckSaveData1` | class | `OldSaveData` | 6 |  |
| `PieceSaveData` | class |  | 6 |  |
| `PrefabSpawnPosition` | class |  | 3 |  |
| `RecipePlacer` | class | `MonoBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 1 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md) |
| `TimberBlock` | class | `NetworkEntityBehaviour` | 20 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md): The block being chiselled, in stages (outer, inner, core). |
| `TimberBlock.CoreStage` | class | `Stage` | 2 |  |
| `TimberBlock.InnerStage` | class | `Stage` | 1 |  |
| `TimberBlock.OuterStage` | class | `Stage` | 1 |  |
| `TimberBlock.Stage` | abstract class |  | 13 |  |
| `TimberBlock.StageLevel` | enum |  | 3 |  |
| `TimberBlockEvent` | delegate |  | 0 |  |
| `TimberBlockSpawner` | class | `NetworkEntityBehaviour` | 10 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md) |
| `TimberBlockSpawner.ChiselingSizePoint` | class |  | 2 |  |
| `TimberBlockSpawner.SizedSpawnPoints` | struct |  | 3 |  |
| `TimberPiece` | class | `TimberPieceBase` | 13 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md) |
| `TimberPiece.RotationModel` | class |  | 5 |  |
| `TimberPieceBase` | abstract class | `Chiselable` | 15 |  |
| `TimberPieceDelegate` | delegate |  | 0 |  |
| `TimberPieceGroup` | class | `TimberPieceBase` | 7 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md) |

## Alta.Cooking

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `Cookable` | class | `NetworkEntityBehaviour`, `ISavable<CookableSaveData>`, `ISavableSave<CookableSaveData>`, +2 more | 21 | [Cooking](../game-systems/cooking.md#roasting-cookable) |
| `CookableCategoryDefinition` | class | `StewIngredientBase` | 3 | [Cooking](../game-systems/cooking.md) |
| `CookableCategoryDefinition.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Cooking.ScriptableObject<CookableCategoryDefinition>` | 0 |  |
| `CookableCollectionDefinition` | class | `StewIngredientBase` | 2 | [Cooking](../game-systems/cooking.md) |
| `CookableEvent` | class | `AltaEvent<Cookable, CookableUnityEvent>` | 0 |  |
| `CookableItem` | class | `ItemComponent` | 3 |  |
| `CookableSaveData` | internal class | `NewSaveData<Cookable, CookableSaveData>` | 2 |  |
| `CookableUnityEvent` | class | `UnityEvent<Cookable>` | 0 |  |
| `CookingGarnish` | class | `CookableItem` | 1 | [Cooking](../game-systems/cooking.md) |
| `CookingGarnishComponent` | class | `NetworkEntityBehaviour`, `ICookingGarnishMarker` | 0 | [Cooking](../game-systems/cooking.md) |
| `CookingLiquid` | class | `NetworkEntityBehaviour` | 11 | [Cooking](../game-systems/cooking.md): The pot's liquid: its heat point, boiling effects and conversion to stew liquid. |
| `CookingLiquidVisual` | class | `LiquidSurfaceVisual` | 5 |  |
| `CookingLiquidVisual.BoilingParticlesStageSetting` | struct |  | 2 |  |
| `CookingLiquidVisualTippingPointController` | class | `MonoBehaviour` | 0 |  |
| `CookingLiquidVisualTippingPointController.TippingSettings` | class |  | 3 |  |
| `CookingPoint` | class | `HeatPoint`, `IEntityReplaceHandler` | 2 | [Cooking](../game-systems/cooking.md): The `HeatPoint` on a cookable. |
| `CookingPointSettings` | class | `MonoBehaviour`, `ICookableSettings` | 2 |  |
| `CookingPot` | class | `NetworkEntityBehaviour`, `ISavableFull<CookingPotSaveData>`, `ISavable<CookingPotSaveData>`, +3 more | 6 | [Cooking](../game-systems/cooking.md#cookingpot): Its `CookingStage` (an enum inside `CookingPot`) moves through `Preparation`, `WarmingUp`, `Stewing` and `StewLocked`. Everything below is set up in `InitializeAsServer`. |
| `CookingPot.CookingStage` | enum |  | 4 |  |
| `CookingPotSaveData` | internal class | `NewSaveData<CookingPot, CookingPotSaveData>` | 1 |  |
| `CookingPotVolume` | class | `MonoBehaviour` | 3 |  |
| `CookingSettings` | class | `GlobalSettings<CookingSettings>` | 18 | [Cooking](../game-systems/cooking.md#cookingsettings): `CookableDecayDuration`, `MinimumStewingTemperature`, `DefaultStew`, `NonRecipeStewPrefab`, `GlobalStewEffects`, `MaxNumberOfItemsInStew` (the network limit), `IsAssumingNoEffectModificationOnMissing` and the dissolve effects. |
| `CookingSettings.Create` | class | `AltaMenuItemBase.Assets.Create.Global_Settings.ScriptableObject<CookingSettings>` | 0 |  |
| `CookingStage` | class | `ItemComponent` | 1 |  |
| `CookingStage.Stage` | enum |  | 4 |  |
| `CookingTemperatureDuration` | class |  | 3 |  |
| `CookingTemperatures` | class |  | 4 |  |
| `FruitNinja` | class | `NetworkEntityBehaviour` | 2 | [Cooking](../game-systems/cooking.md): A test spawner (editor Start and Stop buttons) that spawns random `itemsToSpawn`, faster over time. |
| `ICookableSettings` | internal interface |  | 2 |  |
| `ICookingGarnishMarker` | interface |  | 2 |  |
| `IStewIngredient` | internal interface |  | 1 |  |
| `LiquidChunkVisuals` | class | `MonoBehaviour` | 2 | [Cooking](../game-systems/cooking.md) |
| `LiquidVisualChunkDefinition` | class | `HashedGeneralValue<LiquidVisualChunkDefinition>` | 2 | [Cooking](../game-systems/cooking.md) |
| `PotDefinition` | class | `ScriptableObject` | 2 | [Cooking](../game-systems/cooking.md) |
| `PotDefinition.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Cooking.ScriptableObject<PotDefinition>` | 0 |  |
| `PrimesUtility` | static class |  | 1 |  |
| `StewComponent` | class | `NetworkEntityBehaviour` | 14 | [Cooking](../game-systems/cooking.md): On a stew entity: tint, effect multipliers, and its own `Cookable` for the next stage. |
| `StewContainer` | class | `LiquidContainer` | 0 |  |
| `StewContentArguments` | struct |  | 5 |  |
| `StewIngredientBase` | abstract class | `ScriptableObject`, `IStewIngredient` | 3 |  |
| `StewManager` | class | `NetworkEntityBehaviour`, `ISavable<StewManagerSaveData>`, `ISavableSave<StewManagerSaveData>`, +1 more | 12 | [Cooking](../game-systems/cooking.md#stewmanager): Next to the pot, saved with it. Holds the stew. |
| `StewManagerSaveData` | internal class | `NewSaveData<StewManager, StewManagerSaveData>` | 3 |  |
| `StewRecipe` | class | `HashedGeneralValue<StewRecipe>`, `IPageBasis`, `ICraftingIngredientProvider` | 12 | [Cooking](../game-systems/cooking.md#stewrecipe): Assets under `Cooking/Stew Recipes`. |

## Alta.Crafting

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AdditionalOwnedDock` | class | `PickupDock` | 2 |  |
| `ConfirmationCraftingPart` | class | `CraftingPart`, `INailable` | 3 | [Crafting](../game-systems/crafting.md): A part whose join must be confirmed by nailing. |
| `ConfirmationCraftingPart.ClientSideNailHitSync` | struct |  | 8 |  |
| `ConnectEvent` | delegate |  | 0 |  |
| `CraftingChanged` | delegate |  | 0 |  |
| `CraftingOptions` | class |  | 3 |  |
| `CraftingPart` | class | `NetworkEntityBehaviour`, `IEntityReplaceHandler`, `IBlockGenericDecrafting` | 34 | [Crafting](../game-systems/crafting.md#craftingpart): On every part that can join or be joined. Get it with `pickup.CraftingPart` or `GetComponent<CraftingPart>()`. |
| `CraftingPartTracker` | class |  | 4 |  |
| `CraftingPartType` | class | `HashedGeneralValue<CraftingPartType>` | 0 |  |
| `CraftingPartType.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Crafting.ScriptableObject<CraftingPartType>` | 0 |  |
| `CraftingPieceChiselable` | class | `Chiselable` | 3 |  |
| `CraftingTester` | class | `NetworkEntityBehaviour` | 1 | [Crafting](../game-systems/crafting.md): Dev tool that builds every part combination. |
| `DecraftingComponent` | abstract class | `NetworkEntityBehaviour` | 5 | [Crafting](../game-systems/crafting.md) |
| `DecraftingDeck` | class | `DecraftingComponent` | 2 | [Crafting](../game-systems/crafting.md) |
| `DisableLightOnDock` | class | `MonoBehaviour` | 0 |  |
| `GenericAssemblyPart` | class | `MonoBehaviour` | 3 | [Crafting](../game-systems/crafting.md) |
| `GenericAssemblyStation` | class | `DecraftingComponent`, `ISavable<GenericAssemblyStationData>`, `ISavableSave<GenericAssemblyStationData>`, +1 more | 5 | [Crafting](../game-systems/crafting.md) |
| `GenericAssemblyStation.AssemblyPosition` | enum |  | 2 |  |
| `GenericAssemblyStationData` | class | `NewSaveData<GenericAssemblyStation, GenericAssemblyStationData>` | 1 |  |
| `GenericCraftingComponent` | class | `NetworkEntityBehaviour`, `ISerializationCallbackReceiver`, `IGenericCraftingComponent` | 5 | [Crafting](../game-systems/crafting.md): A material that can fill a station piece. |
| `GenericCraftingNail` | class | `PooledObject` | 17 | [Crafting](../game-systems/crafting.md) |
| `GenericCraftingPiece` | class | `PooledObject`, `INailable` | 32 | [Crafting](../game-systems/crafting.md) |
| `GenericCraftingPieceDefinition` | class |  | 16 |  |
| `GenericCraftingProject` | class | `IProject` | 6 |  |
| `GenericCraftingRecipe` | class | `SimpleHashedGeneralValue<GenericCraftingRecipe>`, `IPageBasis`, `ICraftingIngredientProvider` | 11 | [Crafting](../game-systems/crafting.md#genericcraftingrecipe): Get one with `GenericCraftingRecipe.All`, or by the result with `static GenericCraftingRecipe GetRecipe(NetworkPrefab prefab)` (the result map is built once, on first use). |
| `GenericCraftingResult` | class | `NetworkEntityBehaviour`, `ISerializationCallbackReceiver`, `IGenericCraftingComponent`, +1 more | 3 |  |
| `GenericCraftingSettings` | class | `GlobalSettings<GenericCraftingSettings>` | 16 |  |
| `GenericCraftingStation` | class | `NetworkEntityBehaviour`, `ISavable<GenericCraftingStationData>`, `ISavableSave<GenericCraftingStationData>`, +1 more | 16 | [Crafting](../game-systems/crafting.md#genericcraftingstation): A station in the world. |
| `GenericCraftingStation.ClientSideNailHitSync` | struct |  | 9 |  |
| `GenericCraftingStationData` | class | `NewSaveData<GenericCraftingStation, GenericCraftingStationData>` | 2 |  |
| `IAffectCrafting` | interface |  | 2 |  |
| `IBlockDisassembly` | interface |  | 1 |  |
| `IBlockGenericDecrafting` | interface |  | 1 |  |
| `IGenericCraftingComponent` | interface |  | 3 |  |
| `IGetRigidbody` | interface |  | 1 |  |
| `IJointSlotComponent` | interface |  | 4 |  |
| `INailable` | interface |  | 5 |  |
| `IProject` | interface |  | 15 |  |
| `IsJointAvailable` | delegate |  | 0 |  |
| `JointInsert` | class | `JointPoint` | 7 | [Crafting](../game-systems/crafting.md) |
| `JointInsertType` | class | `JointPointType` | 0 | [Crafting](../game-systems/crafting.md) |
| `JointInsertType.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Crafting.ScriptableObject<JointInsertType>` | 0 |  |
| `JointPoint` | abstract class | `NetworkEntityBehaviour` | 15 | [Crafting](../game-systems/crafting.md) |
| `JointPointEvent` | class | `AltaEvent<JointPoint, JointPointUnityEvent>` | 0 |  |
| `JointPointType` | class | `GeneralValue` | 0 |  |
| `JointPointUnityEvent` | class | `UnityEvent<JointPoint>` | 0 |  |
| `JointSlot` | class | `JointPoint`, `IJointSlotComponent` | 17 | [Crafting](../game-systems/crafting.md#jointslot): On the server, a join also broadcasts an `ItemCraftedEvent` (part hashes and player) on the game's event bus, for the micro tutorials. |
| `JointSlotGroup` | class | `MonoBehaviour`, `IJointSlotComponent` | 5 |  |
| `JointSlotType` | class | `JointPointType` | 1 | [Crafting](../game-systems/crafting.md) |
| `JointSlotType.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Crafting.ScriptableObject<JointSlotType>` | 0 |  |
| `NailHitquality` | enum |  | 4 |  |
| `NailIdentifier` | struct |  | 6 |  |
| `NailSettings` | class |  | 17 | [Crafting](../game-systems/crafting.md) |
| `PieceSaveData` | class |  | 4 |  |
| `PieceStateArgument` | struct |  | 3 |  |
| `SerializedTransform` | class |  | 5 |  |
| `Size` | enum |  | 5 |  |

## Alta.Enchantments

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `DamageMultiplier` | class | `EnchantmentEffect` | 1 |  |
| `DamageMultiplier.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Crafting.ScriptableObject<DamageMultiplier>` | 0 |  |
| `DamageMultiplierApplication` | class | `EnchantmentEffectApplication<DamageMultiplier>` | 2 |  |
| `DurabilitySaveEnchantment` | class | `EnchantmentEffect` | 1 |  |
| `DurabilitySaveEnchantment.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Crafting.ScriptableObject<DurabilitySaveEnchantment>` | 0 |  |
| `DurabilitySaveEnchantmentApplication` | class | `EnchantmentEffectApplication<DurabilitySaveEnchantment>` | 2 |  |
| `Enchantable` | class | `NetworkEntityBehaviour`, `ISavable<EnchantableData>`, `ISavableSave<EnchantableData>`, +1 more | 7 | [Other systems](../game-systems/other-systems.md): On an item. `EnchantmentApplication Add(Enchantment)`, `EnchantmentApplication Get(Enchantment)`. Adds its `initial` enchantments on the server at spawn. |
| `EnchantableData` | class | `NewSaveData<Enchantable, EnchantableData>` | 1 |  |
| `Enchantment` | class | `HashedGeneralValue<Enchantment>` | 1 |  |
| `Enchantment.Binding` | class |  | 2 |  |
| `Enchantment.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Crafting.ScriptableObject<Enchantment>` | 0 |  |
| `EnchantmentApplication` | class |  | 7 | [Other systems](../game-systems/other-systems.md): An enchantment active on one item. |
| `EnchantmentEffect` | abstract class | `ScriptableObject` | 2 | [Other systems](../game-systems/other-systems.md): What it does: `DamageMultiplier` (default 1.2x), `DurabilitySaveEnchantment` (less durability lost). |
| `EnchantmentEffectApplication<T>` | abstract class | `IEnchantmentEffectApplication` | 6 |  |
| `EnchantmentTrigger` | abstract class | `ScriptableObject` | 2 | [Other systems](../game-systems/other-systems.md): When it fires. `CreateApplication` applies the trigger on the server only. `QuickDrawTrigger` is one (a fast, effective hit within `timeToHit`). |
| `EnchantmentTrigger.EffectType` | enum |  | 3 |  |
| `EnchantmentTriggerApplication<T>` | abstract class | `IEnchantmentTriggerApplication` | 8 |  |
| `IEnchantmentEffectApplication` | interface |  | 4 |  |
| `IEnchantmentTriggerApplication` | interface |  | 6 |  |
| `QuickDrawApplication` | class | `EnchantmentTriggerApplication<QuickDrawTrigger>` | 1 |  |
| `QuickDrawTrigger` | class | `EnchantmentTrigger` | 5 |  |
| `QuickDrawTrigger.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Crafting.ScriptableObject<QuickDrawTrigger>` | 0 |  |

## Alta.Scrapper

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ApplicationType` | enum |  | 3 |  |
| `MeshPlacement` | class | `NetworkEntityBehaviour`, `ISavable<MeshPlacementSaveData>`, `ISavableSave<MeshPlacementSaveData>`, +1 more | 3 |  |
| `MeshPlacementSaveData` | internal class | `NewSaveData<MeshPlacement, MeshPlacementSaveData>` | 1 |  |
| `ScrapperArgumentAttribute` | class | `Attribute` | 7 |  |
| `Visibility` | class | `NetworkEntityBehaviour`, `ISavable<VisibilitySaveData>`, `ISavableSave<VisibilitySaveData>`, +1 more | 3 |  |
| `VisibilitySaveData` | class | `NewSaveData<Visibility, VisibilitySaveData>` | 1 |  |

## Alta.Scrapper.Data

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `MeshPlacementData` | class | `HashedGeneralValue<MeshPlacementData>` | 7 |  |
| `MeshPlacementData.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Utility.Scrapper.ScriptableObject<MeshPlacementData>` | 0 |  |
| `VisibilityData` | class | `HashedGeneralValue<VisibilityData>` | 2 |  |
| `VisibilityData.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Utility.Scrapper.ScriptableObject<VisibilityData>` | 0 |  |

## Alta.Trading

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `TaxManager` | class | `NetworkEntityBehaviour`, `ISavable<TaxSaveData>`, `ISavableSave<TaxSaveData>`, +1 more | 9 | [Trading](../game-systems/trading.md#tradevendor-and-taxmanager) |
| `TaxSaveData` | class | `NewSaveData<TaxManager, TaxSaveData>` | 2 |  |
| `TaxSaveData1` | class | `OldSaveData` | 3 |  |
| `TradeConfiguration` | class | `NetworkEntityBehaviour` | 2 |  |
| `TradeStateManager` | class | `NetworkEntityBehaviour` | 3 |  |
| `TradeStatus` | enum |  | 3 |  |
| `TradeVendor` | class | `NetworkEntityBehaviour`, `ISavableFull<TradeVendorSaveData>`, `ISavable<TradeVendorSaveData>`, +4 more | 12 | [Trading](../game-systems/trading.md#tradevendor-and-taxmanager), [Performance](../performance.md): Subscribes to `ServerHandler.PlayerJoined` and never unsubscribes. A destroyed vendor throws when its owner joins, which stops the handlers after it. |
| `TradeVendor.StatusChangedHandler` | delegate |  | 0 |  |
| `TradeVendorSaveData` | class | `NewSaveData<TradeVendor, TradeVendorSaveData>` | 1 |  |
| `TradeVendorSaveDataOld` | class | `OldSaveData` | 3 |  |
| `TradingLogger` | static class |  | 3 |  |
| `TradingLogger.TradeDeckSale` | class |  | 6 | [Console events](../console-and-utilities/console-events.md) |

## Alta.Woodcutting

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AttachmentEvent` | class | `AltaEvent<TreeAttachment, UnityAttachmentEvent>` | 0 |  |
| `OffsetEvent` | class |  | 2 |  |
| `OffsetEventHelper` | static class |  | 1 |  |
| `PresetTree` | class | `HashedGeneralValue<PresetTree>`, `ISerializationCallbackReceiver` | 7 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md) |
| `PresetTree.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Woodcutting.ScriptableObject<PresetTree>` | 0 |  |
| `PresetTree.Step` | class |  | 6 |  |
| `PresetTree.Step.Attachment` | class |  | 4 |  |
| `TreeAttachment` | class | `NetworkEntityBehaviour`, `IBuildRendererBakeable`, `IBuildBakeable` | 12 |  |
| `TreeBuilder` | class | `MonoBehaviour` | 2 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md) |
| `TreeDecay` | class | `BasicDecay` | 1 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md): A `BasicDecay` on a tree: once a felled tree has come loose from its spawner (no chunking parent), it decays, but not while it's kinematic or within 120 seconds of its last hit. |
| `TreeEvent` | class | `UnityEvent<WoodcutTree>` | 0 |  |
| `TreeSize` | class | `PopupScriptableObject` | 1 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md) |
| `TreeSize.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Woodcutting.ScriptableObject<TreeSize>` | 0 |  |
| `TreeSpawner` | class | `NetworkEntityBehaviour`, `ISavable<TreeSpawnerSaveData>`, `ISavableSave<TreeSpawnerSaveData>`, +1 more | 3 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md): A spot in the world that grows a tree. |
| `TreeSpawnerSaveData` | class | `NewSaveData<TreeSpawner, TreeSpawnerSaveData>` | 1 |  |
| `TreeSpawnerSaveData1` | class | `OldSaveData` | 2 |  |
| `TreeSpecies` | class | `HashedGeneralValue<TreeSpecies>` | 16 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md): Species asset: physical material, hit effects, `Wedge` and `Stick` drop distributions, damage and break multipliers, `DropVelocity`, leaf materials. |
| `TreeSpecies.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Woodcutting.ScriptableObject<TreeSpecies>` | 0 |  |
| `UnityAttachmentEvent` | class | `UnityEvent<TreeAttachment>` | 0 |  |
| `UnityWoodcutTreeModelEvent` | class | `UnityEvent<WoodcutTreeModel>` | 0 |  |
| `WoodcutConnection` | class | `MonoBehaviour` | 7 |  |
| `WoodcutConnectionType` | class | `ScriptableObject` | 7 |  |
| `WoodcutConnectionType.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Woodcutting.ScriptableObject<WoodcutConnectionType>` | 0 |  |
| `WoodcutSettings` | class | `GlobalSettings<WoodcutSettings>` | 1 |  |
| `WoodcutTree` | class | `NetworkEntityBehaviour`, `ISavable<WoodcutTreeSaveData>`, `ISavableSave<WoodcutTreeSaveData>`, +1 more | 19 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md): The tree: a tree of `MapNode`s (`Root`), each with a `WoodcutTreeModel` segment. `HealthObject`, `Rigidbody`, `TotalSize`, `Species`. Raises `Cut`. |
| `WoodcutTree.MapNode` | class |  | 14 |  |
| `WoodcutTreeAttachmentBaker` | class | `WoodcutTreeBakerAccess<TreeAttachment>` | 9 |  |
| `WoodcutTreeBaker` | class | `NetworkEntityBehaviour` | 4 |  |
| `WoodcutTreeBakerAccess<T>` | abstract class |  | 8 |  |
| `WoodcutTreeBakingHandler` | class |  | 5 |  |
| `WoodcutTreeDamagedNodeBaker` | class | `WoodcutTreeNodeBaker` | 6 |  |
| `WoodcutTreeEvent` | class | `AltaEvent<WoodcutTree, TreeEvent>` | 0 |  |
| `WoodcutTreeModel` | class | `NetworkEntityBehaviour` | 21 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md): Takes hits on its `WoodcutPoints`; when chopped through (`PieceChopped`, server) it spawns the species' wedge or stick drops at its drop locations and destroys itself. |
| `WoodcutTreeModelChopped` | delegate |  | 0 |  |
| `WoodcutTreeModelDamaged` | delegate |  | 0 |  |
| `WoodcutTreeModelEvent` | class | `AltaEvent<WoodcutTreeModel, UnityWoodcutTreeModelEvent>` | 0 |  |
| `WoodcutTreeNodeBaker` | class | `WoodcutTreeBakerAccess<WoodcutTree.MapNode>` | 8 |  |
| `WoodcutTreeNodeBakerLod0Only` | class | `WoodcutTreeNodeBaker` | 3 |  |
| `WoodcutTreeSaveData` | internal class | `NewSaveData<WoodcutTree, WoodcutTreeSaveData>` | 2 |  |
| `WoodcutTreeSaveData1` | internal class | `OldSaveData` | 3 |  |
| `WoodcutTreeSaveData2` | internal class | `OldSaveData` | 4 |  |
