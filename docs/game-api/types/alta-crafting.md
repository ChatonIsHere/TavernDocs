---
title: Crafting and making
description: "Types in Alta.Crafting, Alta.Blacksmithing, Alta.Carpentry, Alta.Cooking, Alta.Woodcutting and nearby namespaces."
sidebar_position: 7
---

# Crafting and making

Types in Alta.Crafting, Alta.Blacksmithing, Alta.Carpentry, Alta.Cooking, Alta.Woodcutting and nearby namespaces. 252 types, 75 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## Alta.Blacksmithing

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`BasicMeltingModel`](/game-api/types/alta-crafting/basicmeltingmodel) | class | `MeltingModel` | 1 |  |
| [`CraftingMeltingAllowedModifier`](/game-api/types/alta-crafting/craftingmeltingallowedmodifier) | class | `MeltingModelModifier` | 2 | [Smelting and forging](../game-systems/smelting-and-forging.md) |
| [`DurabilityMeltingYieldModifier`](/game-api/types/alta-crafting/durabilitymeltingyieldmodifier) | class | `MeltingModelModifier` | 2 | [Smelting and forging](../game-systems/smelting-and-forging.md) |
| [`DynamicQueue<T>`](/game-api/types/alta-crafting/dynamicqueue-t) | class |  | 4 |  |
| [`ForgedModel`](/game-api/types/alta-crafting/forgedmodel) | class | `ForgedModel<NullColorModelPoint, NullColorModelPoint>`, `IInterfereWithDocking` | 1 |  |
| [`ForgedModel<TB, TA>`](/game-api/types/alta-crafting/forgedmodel-tb-ta) | abstract class | `HeatModel<ForgedPoint, TB, TA>`, `ISpawnArguments`, `IAffectCrafting` | 11 | A metal piece that's shaped by hammering. Each hit on its forged points adds progress (and heat on the server); when every point is done the piece is complete, gives forging XP along the way and raises an item forged event. |
| [`ForgedPoint`](/game-api/types/alta-crafting/forgedpoint) | class | `MonoBehaviour`, `IColorModelPoint<ForgedPoint>`, `IChildSyncable<ForgedPoint, ForgedPointCollectionSaveData.Element>`, +1 more | 12 | [Smelting and forging](../game-systems/smelting-and-forging.md) |
| [`ForgedPointCollection`](/game-api/types/alta-crafting/forgedpointcollection) | class | `ChildSyncableCollection<ForgedPoint, ForgedPointCollection, ForgedPointCollectionSaveData, ForgedPointCollectionSaveData.Element>`, `IEntityReplaceHandler` | 1 | [Smelting and forging](../game-systems/smelting-and-forging.md) |
| [`HeatModel`](/game-api/types/alta-crafting/heatmodel) | class | `HeatModel<NullColorModelPoint, NullColorModelPoint, NullColorModelPoint>` | 0 | [Smelting and forging](../game-systems/smelting-and-forging.md) |
| [`HeatModel<TG, TB, TA>`](/game-api/types/alta-crafting/heatmodel-tg-tb-ta) | abstract class | `ColorModel<MetalHeatPoint, TG, TB, TA>` | 0 | [Smelting and forging](../game-systems/smelting-and-forging.md) |
| [`IDynamicQueueElement<T>`](/game-api/types/alta-crafting/idynamicqueueelement-t) | interface |  | 2 |  |
| [`MeltingHeatPoint`](/game-api/types/alta-crafting/meltingheatpoint) | class | `HeatPoint` | 2 | [Smelting and forging](../game-systems/smelting-and-forging.md) |
| [`MeltingModel`](/game-api/types/alta-crafting/meltingmodel) | abstract class | `NetworkEntityBehaviour` | 13 | Base for items that can be melted down in a smelter (ingots, forged parts). The smelter checks whether every counted heat point is hot enough, then adds `IngotValue` of the material. |
| [`MeltingModelAllowed`](/game-api/types/alta-crafting/meltingmodelallowed) | delegate |  | 0 |  |
| [`MeltingModelModifier`](/game-api/types/alta-crafting/meltingmodelmodifier) | abstract class | `ScriptableObject` | 2 | [Smelting and forging](../game-systems/smelting-and-forging.md) |
| [`MeltingModelPart`](/game-api/types/alta-crafting/meltingmodelpart) | class | `MeltingModel` | 2 |  |
| [`MeltingModelYield`](/game-api/types/alta-crafting/meltingmodelyield) | delegate |  | 0 |  |
| [`MetalHeatPoint`](/game-api/types/alta-crafting/metalheatpoint) | class | `HeatPoint`, `IColorModelPoint<MetalHeatPoint>` | 4 | [Smelting and forging](../game-systems/smelting-and-forging.md) |
| [`MouldRack`](/game-api/types/alta-crafting/mouldrack) | class | `MonoBehaviour` | 1 | [Smelting and forging](../game-systems/smelting-and-forging.md): Visual rack for moulds. |
| [`Recycler`](/game-api/types/alta-crafting/recycler) | class | `NetworkEntityBehaviour`, `ISavable<RecyclerSaveData>`, `ISavableSave<RecyclerSaveData>`, +1 more | 4 | [Smelting and forging](../game-systems/smelting-and-forging.md#recycler): Pump its bellows (`PumpingMechanism`) and it burns fuel from its fuel dock and raises its `HeatArea`'s target temperature. |
| [`RecyclerOutputSlot`](/game-api/types/alta-crafting/recycleroutputslot) | class | `MonoBehaviour`, `IDynamicQueueElement<RecyclerOutputSlot>`, `IBuildRendererPostBake`, +1 more | 13 | [Smelting and forging](../game-systems/smelting-and-forging.md): Collects recycled metal per material and spawns the material's source item (`SourceMaterialHash`) from it. |
| [`RecyclerOutputSlot.SaveData`](/game-api/types/alta-crafting/recycleroutputslot-savedata) | class |  | 3 |  |
| [`RecyclerSaveData`](/game-api/types/alta-crafting/recyclersavedata) | class | `ChildSyncableCollectionSaveData<RecyclerSaveData, Recycler, RecyclerOutputSlot.SaveData>` | 0 |  |
| [`Smelter`](/game-api/types/alta-crafting/smelter) | class | `NetworkEntityBehaviour`, `ISavableFull<SmelterSaveData>`, `ISavable<SmelterSaveData>`, +3 more | 5 | [Smelting and forging](../game-systems/smelting-and-forging.md#smelter): One per smelter in the world. |
| [`SmelterSaveData`](/game-api/types/alta-crafting/smeltersavedata) | internal class | `NewSaveData<Smelter, SmelterSaveData>` | 8 |  |
| [`SmelterUnlockManager`](/game-api/types/alta-crafting/smelterunlockmanager) | class | `MonoBehaviour` | 6 | [Smelting and forging](../game-systems/smelting-and-forging.md#smelterupgrades-and-smelterunlockmanager) |
| [`SmelterUpgrades`](/game-api/types/alta-crafting/smelterupgrades) | class | `HashedGeneralValue<SmelterUpgrades>` | 3 | [Smelting and forging](../game-systems/smelting-and-forging.md#smelterupgrades-and-smelterunlockmanager) |
| [`SmelterUpgrades.Create`](/game-api/types/alta-crafting/smelterupgrades-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Blacksmithing.ScriptableObject<SmelterUpgrades>` | 0 |  |
| [`SmeltingRecipe`](/game-api/types/alta-crafting/smeltingrecipe) | class | `HashedGeneralValue<SmeltingRecipe>` | 3 | [Smelting and forging](../game-systems/smelting-and-forging.md#smeltingrecipe): Recipes are tried in the `SmelterUnlockManager`'s `HashSet` order, and the first match wins. |
| [`SmeltingRecipe.Create`](/game-api/types/alta-crafting/smeltingrecipe-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Blacksmithing.ScriptableObject<SmeltingRecipe>` | 0 |  |

## Alta.Carpentry

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`BuilderDock`](/game-api/types/alta-crafting/builderdock) | class | `NetworkEntityBehaviour`, `IBuildRendererBakeable`, `IBuildBakeable` | 8 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md) |
| [`BuilderDock.BoolDelegate`](/game-api/types/alta-crafting/builderdock-booldelegate) | delegate |  | 0 |  |
| [`Chiselable`](/game-api/types/alta-crafting/chiselable) | class | `MonoBehaviour`, `IChiselable` | 7 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md) |
| [`ChiselableEvent`](/game-api/types/alta-crafting/chiselableevent) | class | `AltaEvent<Chiselable, float, Vector3, Vector3, ChiselableUnityEvent>` | 0 |  |
| [`ChiselableUnityEvent`](/game-api/types/alta-crafting/chiselableunityevent) | class | `UnityEvent<Chiselable, float, Vector3, Vector3>` | 0 |  |
| [`ChiselBlockSize`](/game-api/types/alta-crafting/chiselblocksize) | enum |  | 4 | Size of a timber block, or the size a chisel cuts: Empty, Small, Medium or Large. |
| [`ChiselDefinition`](/game-api/types/alta-crafting/chiseldefinition) | class | `SimpleHashedGeneralValue<ChiselDefinition>`, `IPageBasis` | 11 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md): `SimpleHashedGeneralValue<ChiselDefinition>` under `Carpentry/Chisel Definitions`: a recipe page for chiselling. |
| [`ChiselDefinition.Create`](/game-api/types/alta-crafting/chiseldefinition-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Carpentry.ScriptableObject<ChiselDefinition>` | 0 |  |
| [`ChiselHit`](/game-api/types/alta-crafting/chiselhit) | delegate |  | 0 |  |
| [`ChiselingFilter`](/game-api/types/alta-crafting/chiselingfilter) | class | `MonoBehaviour` | 0 |  |
| [`ChiselingFilterSettings`](/game-api/types/alta-crafting/chiselingfiltersettings) | class | `ImpactorFilter` | 1 |  |
| [`ChiselingTool`](/game-api/types/alta-crafting/chiselingtool) | class | `CraftableImpactDetectorBase` | 4 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md) |
| [`ChisellingDeck`](/game-api/types/alta-crafting/chisellingdeck) | class | `NetworkEntityBehaviour`, `ISavableFull<ChisellingDeckSaveData>`, `ISavable<ChisellingDeckSaveData>`, +3 more | 16 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md): Holds the current `TimberBlock` (`CurrentBlock`), the `Guide` (`ChiselDefinition`), its size and `MaxSize`. `Resize(ChiselBlockSize)` is server only. |
| [`ChisellingDeck.BuilderLevel`](/game-api/types/alta-crafting/chisellingdeck-builderlevel) | class |  | 2 |  |
| [`ChisellingDeckSaveData`](/game-api/types/alta-crafting/chisellingdecksavedata) | class | `NewSaveData<ChisellingDeck, ChisellingDeckSaveData>` | 7 | Save data for a `ChisellingDeck`, the carpentry chiselling station. The deck saves its size; its current `TimberBlock` fills in the rest. |
| [`ChisellingDeckSaveData2`](/game-api/types/alta-crafting/chisellingdecksavedata2) | class | `OldSaveData` | 7 |  |
| [`DeckClamp`](/game-api/types/alta-crafting/deckclamp) | class | `MonoBehaviour` | 0 |  |
| [`IChiselable`](/game-api/types/alta-crafting/ichiselable) | interface |  | 4 |  |
| [`OldChisellingDeckSaveData1`](/game-api/types/alta-crafting/oldchisellingdecksavedata1) | class | `OldSaveData` | 6 |  |
| [`PieceSaveData`](/game-api/types/alta-crafting/piecesavedata) | class |  | 6 | Saved state of one carpentry timber piece: whether it has been hit, how far it is chiselled, and its direction. |
| [`PrefabSpawnPosition`](/game-api/types/alta-crafting/prefabspawnposition) | class |  | 3 |  |
| [`RecipePlacer`](/game-api/types/alta-crafting/recipeplacer) | class | `MonoBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 1 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md) |
| [`TimberBlock`](/game-api/types/alta-crafting/timberblock) | class | `NetworkEntityBehaviour` | 20 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md): The block being chiselled, in stages (outer, inner, core). |
| [`TimberBlock.CoreStage`](/game-api/types/alta-crafting/timberblock-corestage) | class | `Stage` | 2 |  |
| [`TimberBlock.InnerStage`](/game-api/types/alta-crafting/timberblock-innerstage) | class | `Stage` | 1 |  |
| [`TimberBlock.OuterStage`](/game-api/types/alta-crafting/timberblock-outerstage) | class | `Stage` | 1 |  |
| [`TimberBlock.Stage`](/game-api/types/alta-crafting/timberblock-stage) | abstract class |  | 13 | One carving stage of a `TimberBlock` with its own pieces. Subclassed as `OuterStage`, `InnerStage` and `CoreStage`, each moving the block on when all its pieces are done. |
| [`TimberBlock.StageLevel`](/game-api/types/alta-crafting/timberblock-stagelevel) | enum |  | 3 |  |
| [`TimberBlockEvent`](/game-api/types/alta-crafting/timberblockevent) | delegate |  | 0 |  |
| [`TimberBlockSpawner`](/game-api/types/alta-crafting/timberblockspawner) | class | `NetworkEntityBehaviour` | 10 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md) |
| [`TimberBlockSpawner.ChiselingSizePoint`](/game-api/types/alta-crafting/timberblockspawner-chiselingsizepoint) | class |  | 2 |  |
| [`TimberBlockSpawner.SizedSpawnPoints`](/game-api/types/alta-crafting/timberblockspawner-sizedspawnpoints) | struct |  | 3 |  |
| [`TimberPiece`](/game-api/types/alta-crafting/timberpiece) | class | `TimberPieceBase` | 13 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md) |
| [`TimberPiece.RotationModel`](/game-api/types/alta-crafting/timberpiece-rotationmodel) | class |  | 5 |  |
| [`TimberPieceBase`](/game-api/types/alta-crafting/timberpiecebase) | abstract class | `Chiselable` | 15 | Base for one chiselable piece of a timber block in carpentry. Starts disabled; a `TimberBlock` stage enables, saves and syncs its pieces. |
| [`TimberPieceDelegate`](/game-api/types/alta-crafting/timberpiecedelegate) | delegate |  | 0 |  |
| [`TimberPieceGroup`](/game-api/types/alta-crafting/timberpiecegroup) | class | `TimberPieceBase` | 7 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md) |

## Alta.Cooking

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`Cookable`](/game-api/types/alta-crafting/cookable) | class | `NetworkEntityBehaviour`, `ISavable<CookableSaveData>`, `ISavableSave<CookableSaveData>`, +2 more | 21 | [Cooking](../game-systems/cooking.md#roasting-cookable) |
| [`CookableCategoryDefinition`](/game-api/types/alta-crafting/cookablecategorydefinition) | class | `StewIngredientBase` | 3 | [Cooking](../game-systems/cooking.md) |
| [`CookableCategoryDefinition.Create`](/game-api/types/alta-crafting/cookablecategorydefinition-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Cooking.ScriptableObject<CookableCategoryDefinition>` | 0 |  |
| [`CookableCollectionDefinition`](/game-api/types/alta-crafting/cookablecollectiondefinition) | class | `StewIngredientBase` | 2 | [Cooking](../game-systems/cooking.md) |
| [`CookableEvent`](/game-api/types/alta-crafting/cookableevent) | class | `AltaEvent<Cookable, CookableUnityEvent>` | 0 |  |
| [`CookableItem`](/game-api/types/alta-crafting/cookableitem) | class | `ItemComponent` | 3 | Item component for a cooking ingredient: its cooking category, how it looks floating in a liquid and the effects it adds. Read through `Cookable` and the ingredient recipe pages. |
| [`CookableSaveData`](/game-api/types/alta-crafting/cookablesavedata) | internal class | `NewSaveData<Cookable, CookableSaveData>` | 2 |  |
| [`CookableUnityEvent`](/game-api/types/alta-crafting/cookableunityevent) | class | `UnityEvent<Cookable>` | 0 |  |
| [`CookingGarnish`](/game-api/types/alta-crafting/cookinggarnish) | class | `CookableItem` | 1 | [Cooking](../game-systems/cooking.md) |
| [`CookingGarnishComponent`](/game-api/types/alta-crafting/cookinggarnishcomponent) | class | `NetworkEntityBehaviour`, `ICookingGarnishMarker` | 0 | [Cooking](../game-systems/cooking.md) |
| [`CookingLiquid`](/game-api/types/alta-crafting/cookingliquid) | class | `NetworkEntityBehaviour` | 11 | [Cooking](../game-systems/cooking.md): The pot's liquid: its heat point, boiling effects and conversion to stew liquid. |
| [`CookingLiquidVisual`](/game-api/types/alta-crafting/cookingliquidvisual) | class | `LiquidSurfaceVisual` | 5 | Liquid surface visual for cooking containers. Moves the surface with fullness, keeps it level, and runs boiling particles and waves from the temperature. |
| [`CookingLiquidVisual.BoilingParticlesStageSetting`](/game-api/types/alta-crafting/cookingliquidvisual-boilingparticlesstagesetting) | struct |  | 2 |  |
| [`CookingLiquidVisualTippingPointController`](/game-api/types/alta-crafting/cookingliquidvisualtippingpointcontroller) | class | `MonoBehaviour` | 0 |  |
| [`CookingLiquidVisualTippingPointController.TippingSettings`](/game-api/types/alta-crafting/cookingliquidvisualtippingpointcontroller-tippingsettings) | class |  | 3 |  |
| [`CookingPoint`](/game-api/types/alta-crafting/cookingpoint) | class | `HeatPoint`, `IEntityReplaceHandler` | 2 | [Cooking](../game-systems/cooking.md): The `HeatPoint` on a cookable. |
| [`CookingPointSettings`](/game-api/types/alta-crafting/cookingpointsettings) | class | `MonoBehaviour`, `ICookableSettings` | 2 |  |
| [`CookingPot`](/game-api/types/alta-crafting/cookingpot) | class | `NetworkEntityBehaviour`, `ISavableFull<CookingPotSaveData>`, `ISavable<CookingPotSaveData>`, +3 more | 6 | [Cooking](../game-systems/cooking.md#cookingpot): Its `CookingStage` (an enum inside `CookingPot`) moves through `Preparation`, `WarmingUp`, `Stewing` and `StewLocked`. Everything below is set up in `InitializeAsServer`. |
| [`CookingPot.CookingStage`](/game-api/types/alta-crafting/cookingpot-cookingstage) | enum |  | 4 |  |
| [`CookingPotSaveData`](/game-api/types/alta-crafting/cookingpotsavedata) | internal class | `NewSaveData<CookingPot, CookingPotSaveData>` | 1 |  |
| [`CookingPotVolume`](/game-api/types/alta-crafting/cookingpotvolume) | class | `MonoBehaviour` | 3 |  |
| [`CookingSettings`](/game-api/types/alta-crafting/cookingsettings) | class | `GlobalSettings<CookingSettings>` | 18 | [Cooking](../game-systems/cooking.md#cookingsettings): `CookableDecayDuration`, `MinimumStewingTemperature`, `DefaultStew`, `NonRecipeStewPrefab`, `GlobalStewEffects`, `MaxNumberOfItemsInStew` (the network limit), `IsAssumingNoEffectModificationOnMissing` and the dissolve effects. |
| [`CookingSettings.Create`](/game-api/types/alta-crafting/cookingsettings-create) | class | `AltaMenuItemBase.Assets.Create.Global_Settings.ScriptableObject<CookingSettings>` | 0 |  |
| [`CookingStage`](/game-api/types/alta-crafting/cookingstage) | class | `ItemComponent` | 1 |  |
| [`CookingStage.Stage`](/game-api/types/alta-crafting/cookingstage-stage) | enum |  | 4 |  |
| [`CookingTemperatureDuration`](/game-api/types/alta-crafting/cookingtemperatureduration) | class |  | 3 |  |
| [`CookingTemperatures`](/game-api/types/alta-crafting/cookingtemperatures) | class |  | 4 |  |
| [`FruitNinja`](/game-api/types/alta-crafting/fruitninja) | class | `NetworkEntityBehaviour` | 2 | [Cooking](../game-systems/cooking.md): A test spawner (editor Start and Stop buttons) that spawns random `itemsToSpawn`, faster over time. |
| [`ICookableSettings`](/game-api/types/alta-crafting/icookablesettings) | internal interface |  | 2 |  |
| [`ICookingGarnishMarker`](/game-api/types/alta-crafting/icookinggarnishmarker) | interface |  | 2 |  |
| [`IStewIngredient`](/game-api/types/alta-crafting/istewingredient) | internal interface |  | 1 |  |
| [`LiquidChunkVisuals`](/game-api/types/alta-crafting/liquidchunkvisuals) | class | `MonoBehaviour` | 2 | [Cooking](../game-systems/cooking.md) |
| [`LiquidVisualChunkDefinition`](/game-api/types/alta-crafting/liquidvisualchunkdefinition) | class | `HashedGeneralValue<LiquidVisualChunkDefinition>` | 2 | [Cooking](../game-systems/cooking.md) |
| [`PotDefinition`](/game-api/types/alta-crafting/potdefinition) | class | `ScriptableObject` | 2 | [Cooking](../game-systems/cooking.md) |
| [`PotDefinition.Create`](/game-api/types/alta-crafting/potdefinition-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Cooking.ScriptableObject<PotDefinition>` | 0 |  |
| [`PrimesUtility`](/game-api/types/alta-crafting/primesutility) | static class |  | 1 |  |
| [`StewComponent`](/game-api/types/alta-crafting/stewcomponent) | class | `NetworkEntityBehaviour` | 14 | [Cooking](../game-systems/cooking.md): On a stew entity: tint, effect multipliers, and its own `Cookable` for the next stage. |
| [`StewContainer`](/game-api/types/alta-crafting/stewcontainer) | class | `LiquidContainer` | 0 |  |
| [`StewContentArguments`](/game-api/types/alta-crafting/stewcontentarguments) | struct |  | 5 |  |
| [`StewIngredientBase`](/game-api/types/alta-crafting/stewingredientbase) | abstract class | `ScriptableObject`, `IStewIngredient` | 3 |  |
| [`StewManager`](/game-api/types/alta-crafting/stewmanager) | class | `NetworkEntityBehaviour`, `ISavable<StewManagerSaveData>`, `ISavableSave<StewManagerSaveData>`, +1 more | 12 | [Cooking](../game-systems/cooking.md#stewmanager): Next to the pot, saved with it. Holds the stew. |
| [`StewManagerSaveData`](/game-api/types/alta-crafting/stewmanagersavedata) | internal class | `NewSaveData<StewManager, StewManagerSaveData>` | 3 |  |
| [`StewRecipe`](/game-api/types/alta-crafting/stewrecipe) | class | `HashedGeneralValue<StewRecipe>`, `IPageBasis`, `ICraftingIngredientProvider` | 12 | [Cooking](../game-systems/cooking.md#stewrecipe): Assets under `Cooking/Stew Recipes`. |

## Alta.Crafting

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AdditionalOwnedDock`](/game-api/types/alta-crafting/additionalowneddock) | class | `PickupDock` | 2 |  |
| [`ConfirmationCraftingPart`](/game-api/types/alta-crafting/confirmationcraftingpart) | class | `CraftingPart`, `INailable` | 3 | [Crafting](../game-systems/crafting.md): A part whose join must be confirmed by nailing. |
| [`ConfirmationCraftingPart.ClientSideNailHitSync`](/game-api/types/alta-crafting/confirmationcraftingpart-clientsidenailhitsync) | struct |  | 8 |  |
| [`ConnectEvent`](/game-api/types/alta-crafting/connectevent) | delegate |  | 0 |  |
| [`CraftingChanged`](/game-api/types/alta-crafting/craftingchanged) | delegate |  | 0 |  |
| [`CraftingOptions`](/game-api/types/alta-crafting/craftingoptions) | class |  | 3 |  |
| [`CraftingPart`](/game-api/types/alta-crafting/craftingpart) | class | `NetworkEntityBehaviour`, `IEntityReplaceHandler`, `IBlockGenericDecrafting` | 34 | [Crafting](../game-systems/crafting.md#craftingpart): On every part that can join or be joined. Get it with `pickup.CraftingPart` or `GetComponent<CraftingPart>()`. |
| [`CraftingPartTracker`](/game-api/types/alta-crafting/craftingparttracker) | class |  | 4 |  |
| [`CraftingPartType`](/game-api/types/alta-crafting/craftingparttype) | class | `HashedGeneralValue<CraftingPartType>` | 0 |  |
| [`CraftingPartType.Create`](/game-api/types/alta-crafting/craftingparttype-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Crafting.ScriptableObject<CraftingPartType>` | 0 |  |
| [`CraftingPieceChiselable`](/game-api/types/alta-crafting/craftingpiecechiselable) | class | `Chiselable` | 3 |  |
| [`CraftingTester`](/game-api/types/alta-crafting/craftingtester) | class | `NetworkEntityBehaviour` | 1 | [Crafting](../game-systems/crafting.md): Dev tool that builds every part combination. |
| [`DecraftingComponent`](/game-api/types/alta-crafting/decraftingcomponent) | abstract class | `NetworkEntityBehaviour` | 5 | [Crafting](../game-systems/crafting.md) |
| [`DecraftingDeck`](/game-api/types/alta-crafting/decraftingdeck) | class | `DecraftingComponent` | 2 | [Crafting](../game-systems/crafting.md) |
| [`DisableLightOnDock`](/game-api/types/alta-crafting/disablelightondock) | class | `MonoBehaviour` | 0 |  |
| [`GenericAssemblyPart`](/game-api/types/alta-crafting/genericassemblypart) | class | `MonoBehaviour` | 3 | [Crafting](../game-systems/crafting.md) |
| [`GenericAssemblyStation`](/game-api/types/alta-crafting/genericassemblystation) | class | `DecraftingComponent`, `ISavable<GenericAssemblyStationData>`, `ISavableSave<GenericAssemblyStationData>`, +1 more | 5 | [Crafting](../game-systems/crafting.md) |
| [`GenericAssemblyStation.AssemblyPosition`](/game-api/types/alta-crafting/genericassemblystation-assemblyposition) | enum |  | 2 |  |
| [`GenericAssemblyStationData`](/game-api/types/alta-crafting/genericassemblystationdata) | class | `NewSaveData<GenericAssemblyStation, GenericAssemblyStationData>` | 1 |  |
| [`GenericCraftingComponent`](/game-api/types/alta-crafting/genericcraftingcomponent) | class | `NetworkEntityBehaviour`, `ISerializationCallbackReceiver`, `IGenericCraftingComponent` | 5 | [Crafting](../game-systems/crafting.md): A material that can fill a station piece. |
| [`GenericCraftingNail`](/game-api/types/alta-crafting/genericcraftingnail) | class | `PooledObject` | 17 | [Crafting](../game-systems/crafting.md) |
| [`GenericCraftingPiece`](/game-api/types/alta-crafting/genericcraftingpiece) | class | `PooledObject`, `INailable` | 32 | [Crafting](../game-systems/crafting.md) |
| [`GenericCraftingPieceDefinition`](/game-api/types/alta-crafting/genericcraftingpiecedefinition) | class |  | 16 | One ghost piece in a generic crafting recipe: where it sits, its mesh, the item that fills it, its build level and how easily it breaks off. |
| [`GenericCraftingProject`](/game-api/types/alta-crafting/genericcraftingproject) | class | `IProject` | 6 |  |
| [`GenericCraftingRecipe`](/game-api/types/alta-crafting/genericcraftingrecipe) | class | `SimpleHashedGeneralValue<GenericCraftingRecipe>`, `IPageBasis`, `ICraftingIngredientProvider` | 11 | [Crafting](../game-systems/crafting.md#genericcraftingrecipe): Get one with `GenericCraftingRecipe.All`, or by the result with `static GenericCraftingRecipe GetRecipe(NetworkPrefab prefab)` (the result map is built once, on first use). |
| [`GenericCraftingResult`](/game-api/types/alta-crafting/genericcraftingresult) | class | `NetworkEntityBehaviour`, `ISerializationCallbackReceiver`, `IGenericCraftingComponent`, +1 more | 3 |  |
| [`GenericCraftingSettings`](/game-api/types/alta-crafting/genericcraftingsettings) | class | `GlobalSettings<GenericCraftingSettings>` | 16 | Global settings for generic crafting (building from ghost pieces and nailing them): piece and nail prefabs, ghost materials and effects. All members are static shortcuts to `GenericCraftingSettings.Instance`. |
| [`GenericCraftingStation`](/game-api/types/alta-crafting/genericcraftingstation) | class | `NetworkEntityBehaviour`, `ISavable<GenericCraftingStationData>`, `ISavableSave<GenericCraftingStationData>`, +1 more | 16 | [Crafting](../game-systems/crafting.md#genericcraftingstation): A station in the world. |
| [`GenericCraftingStation.ClientSideNailHitSync`](/game-api/types/alta-crafting/genericcraftingstation-clientsidenailhitsync) | struct |  | 9 |  |
| [`GenericCraftingStationData`](/game-api/types/alta-crafting/genericcraftingstationdata) | class | `NewSaveData<GenericCraftingStation, GenericCraftingStationData>` | 2 |  |
| [`IAffectCrafting`](/game-api/types/alta-crafting/iaffectcrafting) | interface |  | 2 |  |
| [`IBlockDisassembly`](/game-api/types/alta-crafting/iblockdisassembly) | interface |  | 1 |  |
| [`IBlockGenericDecrafting`](/game-api/types/alta-crafting/iblockgenericdecrafting) | interface |  | 1 | Implemented by components that can stop a generic crafting result from being decrafted, such as `LiquidContainer` (only when empty) and `CraftingPart`. |
| [`IGenericCraftingComponent`](/game-api/types/alta-crafting/igenericcraftingcomponent) | interface |  | 3 |  |
| [`IGetRigidbody`](/game-api/types/alta-crafting/igetrigidbody) | interface |  | 1 |  |
| [`IJointSlotComponent`](/game-api/types/alta-crafting/ijointslotcomponent) | interface |  | 4 | A crafting joint slot or a group of slots, implemented by `JointSlot` and `JointSlotGroup`. |
| [`INailable`](/game-api/types/alta-crafting/inailable) | interface |  | 5 | A crafting piece fixed in place by hammering nails, implemented by `ConfirmationCraftingPart`. Each `GenericCraftingNail` reports its hits here. |
| [`IProject`](/game-api/types/alta-crafting/iproject) | interface |  | 15 | A recipe in progress on a generic crafting station, built level by level. `GenericCraftingProject` is the only implementation. |
| [`IsJointAvailable`](/game-api/types/alta-crafting/isjointavailable) | delegate |  | 0 |  |
| [`JointInsert`](/game-api/types/alta-crafting/jointinsert) | class | `JointPoint` | 7 | [Crafting](../game-systems/crafting.md) |
| [`JointInsertType`](/game-api/types/alta-crafting/jointinserttype) | class | `JointPointType` | 0 | [Crafting](../game-systems/crafting.md) |
| [`JointInsertType.Create`](/game-api/types/alta-crafting/jointinserttype-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Crafting.ScriptableObject<JointInsertType>` | 0 |  |
| [`JointPoint`](/game-api/types/alta-crafting/jointpoint) | abstract class | `NetworkEntityBehaviour` | 15 | [Crafting](../game-systems/crafting.md) |
| [`JointPointEvent`](/game-api/types/alta-crafting/jointpointevent) | class | `AltaEvent<JointPoint, JointPointUnityEvent>` | 0 |  |
| [`JointPointType`](/game-api/types/alta-crafting/jointpointtype) | class | `GeneralValue` | 0 |  |
| [`JointPointUnityEvent`](/game-api/types/alta-crafting/jointpointunityevent) | class | `UnityEvent<JointPoint>` | 0 |  |
| [`JointSlot`](/game-api/types/alta-crafting/jointslot) | class | `JointPoint`, `IJointSlotComponent` | 17 | [Crafting](../game-systems/crafting.md#jointslot): On the server, a join also broadcasts an `ItemCraftedEvent` (part hashes and player) on the game's event bus, for the micro tutorials. |
| [`JointSlotGroup`](/game-api/types/alta-crafting/jointslotgroup) | class | `MonoBehaviour`, `IJointSlotComponent` | 5 |  |
| [`JointSlotType`](/game-api/types/alta-crafting/jointslottype) | class | `JointPointType` | 1 | [Crafting](../game-systems/crafting.md) |
| [`JointSlotType.Create`](/game-api/types/alta-crafting/jointslottype-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Crafting.ScriptableObject<JointSlotType>` | 0 |  |
| [`NailHitquality`](/game-api/types/alta-crafting/nailhitquality) | enum |  | 4 |  |
| [`NailIdentifier`](/game-api/types/alta-crafting/nailidentifier) | struct |  | 6 |  |
| [`NailSettings`](/game-api/types/alta-crafting/nailsettings) | class |  | 17 | [Crafting](../game-systems/crafting.md) |
| [`PieceSaveData`](/game-api/types/alta-crafting/piecesavedata-alta-crafting) | class |  | 4 |  |
| [`PieceStateArgument`](/game-api/types/alta-crafting/piecestateargument) | struct |  | 3 |  |
| [`SerializedTransform`](/game-api/types/alta-crafting/serializedtransform) | class |  | 5 |  |
| [`Size`](/game-api/types/alta-crafting/size) | enum |  | 5 |  |

## Alta.Enchantments

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`DamageMultiplier`](/game-api/types/alta-crafting/damagemultiplier) | class | `EnchantmentEffect` | 1 |  |
| [`DamageMultiplier.Create`](/game-api/types/alta-crafting/damagemultiplier-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Crafting.ScriptableObject<DamageMultiplier>` | 0 |  |
| [`DamageMultiplierApplication`](/game-api/types/alta-crafting/damagemultiplierapplication) | class | `EnchantmentEffectApplication<DamageMultiplier>` | 2 |  |
| [`DurabilitySaveEnchantment`](/game-api/types/alta-crafting/durabilitysaveenchantment) | class | `EnchantmentEffect` | 1 |  |
| [`DurabilitySaveEnchantment.Create`](/game-api/types/alta-crafting/durabilitysaveenchantment-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Crafting.ScriptableObject<DurabilitySaveEnchantment>` | 0 |  |
| [`DurabilitySaveEnchantmentApplication`](/game-api/types/alta-crafting/durabilitysaveenchantmentapplication) | class | `EnchantmentEffectApplication<DurabilitySaveEnchantment>` | 2 |  |
| [`Enchantable`](/game-api/types/alta-crafting/enchantable) | class | `NetworkEntityBehaviour`, `ISavable<EnchantableData>`, `ISavableSave<EnchantableData>`, +1 more | 7 | [Other systems](../game-systems/other-systems.md): On an item. `EnchantmentApplication Add(Enchantment)`, `EnchantmentApplication Get(Enchantment)`. Adds its `initial` enchantments on the server at spawn. |
| [`EnchantableData`](/game-api/types/alta-crafting/enchantabledata) | class | `NewSaveData<Enchantable, EnchantableData>` | 1 |  |
| [`Enchantment`](/game-api/types/alta-crafting/enchantment) | class | `HashedGeneralValue<Enchantment>` | 1 | An enchantment asset: a list of bindings, each linking triggers to the effects they cause. |
| [`Enchantment.Binding`](/game-api/types/alta-crafting/enchantment-binding) | class |  | 2 |  |
| [`Enchantment.Create`](/game-api/types/alta-crafting/enchantment-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Crafting.ScriptableObject<Enchantment>` | 0 |  |
| [`EnchantmentApplication`](/game-api/types/alta-crafting/enchantmentapplication) | class |  | 7 | [Other systems](../game-systems/other-systems.md): An enchantment active on one item. |
| [`EnchantmentEffect`](/game-api/types/alta-crafting/enchantmenteffect) | abstract class | `ScriptableObject` | 2 | [Other systems](../game-systems/other-systems.md): What it does: `DamageMultiplier` (default 1.2x), `DurabilitySaveEnchantment` (less durability lost). |
| [`EnchantmentEffectApplication<T>`](/game-api/types/alta-crafting/enchantmenteffectapplication-t) | abstract class | `IEnchantmentEffectApplication` | 6 |  |
| [`EnchantmentTrigger`](/game-api/types/alta-crafting/enchantmenttrigger) | abstract class | `ScriptableObject` | 2 | [Other systems](../game-systems/other-systems.md): When it fires. `CreateApplication` applies the trigger on the server only. `QuickDrawTrigger` is one (a fast, effective hit within `timeToHit`). |
| [`EnchantmentTrigger.EffectType`](/game-api/types/alta-crafting/enchantmenttrigger-effecttype) | enum |  | 3 |  |
| [`EnchantmentTriggerApplication<T>`](/game-api/types/alta-crafting/enchantmenttriggerapplication-t) | abstract class | `IEnchantmentTriggerApplication` | 8 | Runtime part of an `EnchantmentTrigger` on one item: hooks game events when applied and fires `Invoked` when the trigger condition is met. |
| [`IEnchantmentEffectApplication`](/game-api/types/alta-crafting/ienchantmenteffectapplication) | interface |  | 4 | Runtime part of an `EnchantmentEffect` on one item. Run when the enchantment's trigger fires. |
| [`IEnchantmentTriggerApplication`](/game-api/types/alta-crafting/ienchantmenttriggerapplication) | interface |  | 6 | A trigger of an enchantment applied to one enchanted object. It watches for its condition and raises `Invoked` when it fires. |
| [`QuickDrawApplication`](/game-api/types/alta-crafting/quickdrawapplication) | class | `EnchantmentTriggerApplication<QuickDrawTrigger>` | 1 |  |
| [`QuickDrawTrigger`](/game-api/types/alta-crafting/quickdrawtrigger) | class | `EnchantmentTrigger` | 5 | Enchantment trigger that charges when the item is taken out of a dock and goes off on a good hit within a time limit. |
| [`QuickDrawTrigger.Create`](/game-api/types/alta-crafting/quickdrawtrigger-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Crafting.ScriptableObject<QuickDrawTrigger>` | 0 |  |

## Alta.Scrapper

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ApplicationType`](/game-api/types/alta-crafting/applicationtype) | enum |  | 3 |  |
| [`MeshPlacement`](/game-api/types/alta-crafting/meshplacement) | class | `NetworkEntityBehaviour`, `ISavable<MeshPlacementSaveData>`, `ISavableSave<MeshPlacementSaveData>`, +1 more | 3 |  |
| [`MeshPlacementSaveData`](/game-api/types/alta-crafting/meshplacementsavedata) | internal class | `NewSaveData<MeshPlacement, MeshPlacementSaveData>` | 1 |  |
| [`ScrapperArgumentAttribute`](/game-api/types/alta-crafting/scrapperargumentattribute) | class | `Attribute` | 7 |  |
| [`Visibility`](/game-api/types/alta-crafting/visibility) | class | `NetworkEntityBehaviour`, `ISavable<VisibilitySaveData>`, `ISavableSave<VisibilitySaveData>`, +1 more | 3 |  |
| [`VisibilitySaveData`](/game-api/types/alta-crafting/visibilitysavedata) | class | `NewSaveData<Visibility, VisibilitySaveData>` | 1 |  |

## Alta.Scrapper.Data

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`MeshPlacementData`](/game-api/types/alta-crafting/meshplacementdata) | class | `HashedGeneralValue<MeshPlacementData>` | 7 | A saved mesh placement for the Scrapper tool: local transform, mesh and material, with optional texture atlas baking. Build-time data. |
| [`MeshPlacementData.Create`](/game-api/types/alta-crafting/meshplacementdata-create) | class | `AltaMenuItemBase.Assets.Create.Township.Utility.Scrapper.ScriptableObject<MeshPlacementData>` | 0 |  |
| [`VisibilityData`](/game-api/types/alta-crafting/visibilitydata) | class | `HashedGeneralValue<VisibilityData>` | 2 |  |
| [`VisibilityData.Create`](/game-api/types/alta-crafting/visibilitydata-create) | class | `AltaMenuItemBase.Assets.Create.Township.Utility.Scrapper.ScriptableObject<VisibilityData>` | 0 |  |

## Alta.Trading

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`TaxManager`](/game-api/types/alta-crafting/taxmanager) | class | `NetworkEntityBehaviour`, `ISavable<TaxSaveData>`, `ISavableSave<TaxSaveData>`, +1 more | 9 | [Trading](../game-systems/trading.md#tradevendor-and-taxmanager) |
| [`TaxSaveData`](/game-api/types/alta-crafting/taxsavedata) | class | `NewSaveData<TaxManager, TaxSaveData>` | 2 |  |
| [`TaxSaveData1`](/game-api/types/alta-crafting/taxsavedata1) | class | `OldSaveData` | 3 |  |
| [`TradeConfiguration`](/game-api/types/alta-crafting/tradeconfiguration) | class | `NetworkEntityBehaviour` | 2 |  |
| [`TradeStateManager`](/game-api/types/alta-crafting/tradestatemanager) | class | `NetworkEntityBehaviour` | 3 |  |
| [`TradeStatus`](/game-api/types/alta-crafting/tradestatus) | enum |  | 3 |  |
| [`TradeVendor`](/game-api/types/alta-crafting/tradevendor) | class | `NetworkEntityBehaviour`, `ISavableFull<TradeVendorSaveData>`, `ISavable<TradeVendorSaveData>`, +4 more | 12 | [Trading](../game-systems/trading.md#tradevendor-and-taxmanager), [Performance](../performance.md): Subscribes to `ServerHandler.PlayerJoined` and never unsubscribes. A destroyed vendor throws when its owner joins, which stops the handlers after it. |
| [`TradeVendor.StatusChangedHandler`](/game-api/types/alta-crafting/tradevendor-statuschangedhandler) | delegate |  | 0 |  |
| [`TradeVendorSaveData`](/game-api/types/alta-crafting/tradevendorsavedata) | class | `NewSaveData<TradeVendor, TradeVendorSaveData>` | 1 |  |
| [`TradeVendorSaveDataOld`](/game-api/types/alta-crafting/tradevendorsavedataold) | class | `OldSaveData` | 3 |  |
| [`TradingLogger`](/game-api/types/alta-crafting/tradinglogger) | static class |  | 3 |  |
| [`TradingLogger.TradeDeckSale`](/game-api/types/alta-crafting/tradinglogger-tradedecksale) | class |  | 6 | [Console events](../console-and-utilities/console-events.md) |

## Alta.Woodcutting

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AttachmentEvent`](/game-api/types/alta-crafting/attachmentevent) | class | `AltaEvent<TreeAttachment, UnityAttachmentEvent>` | 0 |  |
| [`OffsetEvent`](/game-api/types/alta-crafting/offsetevent) | class |  | 2 |  |
| [`OffsetEventHelper`](/game-api/types/alta-crafting/offseteventhelper) | static class |  | 1 |  |
| [`PresetTree`](/game-api/types/alta-crafting/presettree) | class | `HashedGeneralValue<PresetTree>`, `ISerializationCallbackReceiver` | 7 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md) |
| [`PresetTree.Create`](/game-api/types/alta-crafting/presettree-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Woodcutting.ScriptableObject<PresetTree>` | 0 |  |
| [`PresetTree.Step`](/game-api/types/alta-crafting/presettree-step) | class |  | 6 |  |
| [`PresetTree.Step.Attachment`](/game-api/types/alta-crafting/presettree-step-attachment) | class |  | 4 |  |
| [`TreeAttachment`](/game-api/types/alta-crafting/treeattachment) | class | `NetworkEntityBehaviour`, `IBuildRendererBakeable`, `IBuildBakeable` | 12 | Something attached to a tree's node, such as leaves, that can break off. Attached by `WoodcutTree`; breaking is synced from the server. |
| [`TreeBuilder`](/game-api/types/alta-crafting/treebuilder) | class | `MonoBehaviour` | 2 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md) |
| [`TreeDecay`](/game-api/types/alta-crafting/treedecay) | class | `BasicDecay` | 1 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md): A `BasicDecay` on a tree: once a felled tree has come loose from its spawner (no chunking parent), it decays, but not while it's kinematic or within 120 seconds of its last hit. |
| [`TreeEvent`](/game-api/types/alta-crafting/treeevent) | class | `UnityEvent<WoodcutTree>` | 0 |  |
| [`TreeSize`](/game-api/types/alta-crafting/treesize) | class | `PopupScriptableObject` | 1 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md) |
| [`TreeSize.Create`](/game-api/types/alta-crafting/treesize-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Woodcutting.ScriptableObject<TreeSize>` | 0 |  |
| [`TreeSpawner`](/game-api/types/alta-crafting/treespawner) | class | `NetworkEntityBehaviour`, `ISavable<TreeSpawnerSaveData>`, `ISavableSave<TreeSpawnerSaveData>`, +1 more | 3 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md): A spot in the world that grows a tree. |
| [`TreeSpawnerSaveData`](/game-api/types/alta-crafting/treespawnersavedata) | class | `NewSaveData<TreeSpawner, TreeSpawnerSaveData>` | 1 |  |
| [`TreeSpawnerSaveData1`](/game-api/types/alta-crafting/treespawnersavedata1) | class | `OldSaveData` | 2 |  |
| [`TreeSpecies`](/game-api/types/alta-crafting/treespecies) | class | `HashedGeneralValue<TreeSpecies>` | 16 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md): Species asset: physical material, hit effects, `Wedge` and `Stick` drop distributions, damage and break multipliers, `DropVelocity`, leaf materials. |
| [`TreeSpecies.Create`](/game-api/types/alta-crafting/treespecies-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Woodcutting.ScriptableObject<TreeSpecies>` | 0 |  |
| [`UnityAttachmentEvent`](/game-api/types/alta-crafting/unityattachmentevent) | class | `UnityEvent<TreeAttachment>` | 0 |  |
| [`UnityWoodcutTreeModelEvent`](/game-api/types/alta-crafting/unitywoodcuttreemodelevent) | class | `UnityEvent<WoodcutTreeModel>` | 0 |  |
| [`WoodcutConnection`](/game-api/types/alta-crafting/woodcutconnection) | class | `MonoBehaviour` | 7 | Marks a joint between two pieces of a choppable tree model: which connection type it is and which woodcut points break it. Sits on a networked tree piece. |
| [`WoodcutConnectionType`](/game-api/types/alta-crafting/woodcutconnectiontype) | class | `ScriptableObject` | 7 | Asset describing how one piece of a choppable tree joins its parent: how it can be rotated, how many cut points it has and how much damage breaks it. |
| [`WoodcutConnectionType.Create`](/game-api/types/alta-crafting/woodcutconnectiontype-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Woodcutting.ScriptableObject<WoodcutConnectionType>` | 0 |  |
| [`WoodcutSettings`](/game-api/types/alta-crafting/woodcutsettings) | class | `GlobalSettings<WoodcutSettings>` | 1 |  |
| [`WoodcutTree`](/game-api/types/alta-crafting/woodcuttree) | class | `NetworkEntityBehaviour`, `ISavable<WoodcutTreeSaveData>`, `ISavableSave<WoodcutTreeSaveData>`, +1 more | 19 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md): The tree: a tree of `MapNode`s (`Root`), each with a `WoodcutTreeModel` segment. `HealthObject`, `Rigidbody`, `TotalSize`, `Species`. Raises `Cut`. |
| [`WoodcutTree.MapNode`](/game-api/types/alta-crafting/woodcuttree-mapnode) | class |  | 14 | One segment in a `WoodcutTree`'s layout: its model, the connection it hangs from, its children and attachments. Mass and size changes add up into the parent nodes. |
| [`WoodcutTreeAttachmentBaker`](/game-api/types/alta-crafting/woodcuttreeattachmentbaker) | class | `WoodcutTreeBakerAccess<TreeAttachment>` | 9 |  |
| [`WoodcutTreeBaker`](/game-api/types/alta-crafting/woodcuttreebaker) | class | `NetworkEntityBehaviour` | 4 |  |
| [`WoodcutTreeBakerAccess<T>`](/game-api/types/alta-crafting/woodcuttreebakeraccess-t) | abstract class |  | 8 | Adapter the woodcutting tree baker uses to read meshes, materials and LODs from some source type `T`. Build-time tooling. |
| [`WoodcutTreeBakingHandler`](/game-api/types/alta-crafting/woodcuttreebakinghandler) | class |  | 5 |  |
| [`WoodcutTreeDamagedNodeBaker`](/game-api/types/alta-crafting/woodcuttreedamagednodebaker) | class | `WoodcutTreeNodeBaker` | 6 |  |
| [`WoodcutTreeEvent`](/game-api/types/alta-crafting/woodcuttreeevent) | class | `AltaEvent<WoodcutTree, TreeEvent>` | 0 |  |
| [`WoodcutTreeModel`](/game-api/types/alta-crafting/woodcuttreemodel) | class | `NetworkEntityBehaviour` | 21 | [Farming, woodcutting and carpentry](../game-systems/farming-and-woodcutting.md): Takes hits on its `WoodcutPoints`; when chopped through (`PieceChopped`, server) it spawns the species' wedge or stick drops at its drop locations and destroys itself. |
| [`WoodcutTreeModelChopped`](/game-api/types/alta-crafting/woodcuttreemodelchopped) | delegate |  | 0 |  |
| [`WoodcutTreeModelDamaged`](/game-api/types/alta-crafting/woodcuttreemodeldamaged) | delegate |  | 0 |  |
| [`WoodcutTreeModelEvent`](/game-api/types/alta-crafting/woodcuttreemodelevent) | class | `AltaEvent<WoodcutTreeModel, UnityWoodcutTreeModelEvent>` | 0 |  |
| [`WoodcutTreeNodeBaker`](/game-api/types/alta-crafting/woodcuttreenodebaker) | class | `WoodcutTreeBakerAccess<WoodcutTree.MapNode>` | 8 | Reads meshes and materials from woodcut tree nodes for the tree baker. Use the shared `Instance`. Build-time tooling. |
| [`WoodcutTreeNodeBakerLod0Only`](/game-api/types/alta-crafting/woodcuttreenodebakerlod0only) | class | `WoodcutTreeNodeBaker` | 3 |  |
| [`WoodcutTreeSaveData`](/game-api/types/alta-crafting/woodcuttreesavedata) | internal class | `NewSaveData<WoodcutTree, WoodcutTreeSaveData>` | 2 |  |
| [`WoodcutTreeSaveData1`](/game-api/types/alta-crafting/woodcuttreesavedata1) | internal class | `OldSaveData` | 3 |  |
| [`WoodcutTreeSaveData2`](/game-api/types/alta-crafting/woodcuttreesavedata2) | internal class | `OldSaveData` | 4 |  |
